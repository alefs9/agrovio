import hashlib
from collections import defaultdict, deque
from threading import Lock
from time import monotonic

from fastapi import APIRouter, Depends, Request, Response
from .. import business as service
from ..core import (active_plan, all_records, audit, create_user, current_user, db, fail, get, password_valid, record, require, save, session, uid)
from ..schemas import (BotInput, ListingEdit, ListingInput, Login, MessageInput, OfferInput, OfferResponse, PaymentInput, PlanInput, Profile, RatingInput, Register, Review)

router = APIRouter(prefix='/api/v1')
attempts = defaultdict(deque)
attempt_lock = Lock()


def cookie(response, request, token):
    response.set_cookie('agrovio_session', token, httponly=True, secure=request.app.state.settings.secure_cookie, samesite='lax', max_age=7 * 86400, path='/api')


@router.post('/auth/register', status_code=201, tags=['identity'])
def register(body: Register, request: Request, response: Response, conn=Depends(db)):
    user = create_user(conn, body.email, body.password, body.name, body.company, body.role, body.phone)
    cookie(response, request, session(conn, user))
    audit(conn, user, 'account.registered', user['id'])
    return {'id': user['id'], 'role': user['role']}


@router.post('/auth/login', tags=['identity'])
def login(body: Login, request: Request, response: Response, conn=Depends(db)):
    key = request.client.host if request.client else 'unknown'
    with attempt_lock:
        times = attempts[key]
        while times and times[0] < monotonic() - 60:
            times.popleft()
        if len(times) >= 10:
            fail('Demasiados intentos. Espera un minuto.', 429)
        times.append(monotonic())
    user = conn.execute('SELECT * FROM users WHERE email=? COLLATE NOCASE', (body.email.strip(),)).fetchone()
    if not user or not user['active'] or not password_valid(body.password, user['password']):
        fail('Correo o contraseña incorrectos.', 401)
    user = dict(user)
    cookie(response, request, session(conn, user))
    return {'id': user['id'], 'role': user['role']}


@router.post('/auth/logout', tags=['identity'])
def logout(request: Request, response: Response, conn=Depends(db)):
    token = request.cookies.get('agrovio_session', '')
    conn.execute('DELETE FROM sessions WHERE token=?', (hashlib.sha256(token.encode()).hexdigest(),))
    response.delete_cookie('agrovio_session', path='/api')
    return {'ok': True}


@router.get('/state', tags=['portal'])
def state(user=Depends(current_user), conn=Depends(db)):
    return service.view(conn, user)


@router.patch('/me', tags=['identity'])
def profile(body: Profile, user=Depends(current_user), conn=Depends(db)):
    # Cambio de correo necesita verificación: no se cambia silenciosamente la identidad de acceso.
    if body.email.strip().lower() != user['email'].lower():
        fail('El cambio de correo requiere verificación. Mantén tu correo actual.', 422)
    conn.execute('UPDATE users SET name=?,company=?,phone=? WHERE id=?', (body.name.strip(), body.company.strip(), body.phone, user['id']))
    return {'ok': True}


@router.post('/listings', status_code=201, tags=['listings'])
def publish(body: ListingInput, request: Request, user=Depends(current_user), conn=Depends(db)):
    return service.create_listing(conn, user, body, request.app.state.settings)


@router.patch('/listings/{key}', tags=['listings'])
def edit(key: str, body: ListingEdit, user=Depends(current_user), conn=Depends(db)):
    service.edit_listing(conn, user, key, body)
    return {'ok': True}


@router.post('/listings/{key}/cancel', tags=['listings'])
def cancel(key: str, user=Depends(current_user), conn=Depends(db)):
    from ..core import owner_or_admin
    require(user, 'proveedor')
    p = record(conn, 'listings', key)
    owner_or_admin(user, p)
    p['status'] = 'Cancelada'
    save(conn, 'listings', p)
    audit(conn, user, 'listing.cancelled', key)
    return {'ok': True}


@router.post('/listings/{key}/review', tags=['moderation'])
def review(key: str, body: Review, user=Depends(current_user), conn=Depends(db)):
    service.approve_listing(conn, user, key, body)
    return {'ok': True}


@router.post('/listings/{key}/connection', tags=['connections'])
def connect(key: str, user=Depends(current_user), conn=Depends(db)):
    service.connect_listing(conn, user, key)
    return {'ok': True}


@router.post('/listings/{key}/saved', tags=['catalog'])
def favorite(key: str, user=Depends(current_user), conn=Depends(db)):
    require(user, 'comprador')
    p = record(conn, 'listings', key)
    if p['status'] != 'Publicada':
        fail('Producto no disponible.')
    ident = user['id'] + ':' + key
    if get(conn, 'saved', ident):
        conn.execute('DELETE FROM records WHERE kind=? AND id=?', ('saved', ident))
    else:
        save(conn, 'saved', {'id': ident, 'user_id': user['id'], 'listing_id': key})
    return {'ok': True}


@router.post('/listings/{key}/offers', status_code=201, tags=['offers'])
def offer(key: str, body: OfferInput, user=Depends(current_user), conn=Depends(db)):
    return service.create_offer(conn, user, key, body)


@router.post('/offers/{key}/response', tags=['offers'])
def respond(key: str, body: OfferResponse, user=Depends(current_user), conn=Depends(db)):
    service.respond_offer(conn, user, key, body)
    return {'ok': True}


@router.post('/listings/{key}/messages', status_code=201, tags=['chat'])
def message(key: str, body: MessageInput, user=Depends(current_user), conn=Depends(db)):
    return service.create_message(conn, user, key, body)


@router.post('/deals/{key}/confirmations', tags=['deals'])
def confirm(key: str, user=Depends(current_user), conn=Depends(db)):
    service.confirm_deal(conn, user, key)
    return {'ok': True}


@router.post('/deals/{key}/outside', tags=['deals'])
def outside(key: str, user=Depends(current_user), conn=Depends(db)):
    service.outside_deal(conn, user, key)
    return {'ok': True}


@router.post('/deals/{key}/payments', tags=['payments'])
def payment(key: str, body: PaymentInput, user=Depends(current_user), conn=Depends(db)):
    service.register_payment(conn, user, key, body)
    return {'ok': True}


@router.post('/deals/{key}/ratings', tags=['reputation'])
def rate(key: str, body: RatingInput, user=Depends(current_user), conn=Depends(db)):
    d = record(conn, 'deals', key)
    service.participant(user, d)
    require(user, 'comprador', 'proveedor')
    if d['step'] != 3:
        fail('La evaluación requiere un trato cerrado.')
    d.setdefault('ratings', {})[user['id']] = body.rating
    save(conn, 'deals', d)
    return {'ok': True}


@router.post('/admin/users/{key}/status', tags=['administration'])
def user_status(key: str, user=Depends(current_user), conn=Depends(db)):
    require(user, 'admin')
    target = conn.execute('SELECT * FROM users WHERE id=?', (key,)).fetchone()
    if not target or key == user['id'] or target['role'] == 'admin':
        fail('No se puede modificar esa cuenta.')
    conn.execute('UPDATE users SET active=? WHERE id=?', (not target['active'], key))
    if target['active']:
        conn.execute('DELETE FROM sessions WHERE user_id=?', (key,))
    audit(conn, user, 'account.status_changed', key)
    return {'ok': True}


@router.post('/admin/users/{key}/plan', tags=['plans'])
def plan(key: str, body: PlanInput, user=Depends(current_user), conn=Depends(db)):
    service.activate_plan(conn, user, key, body)
    return {'ok': True}


@router.get('/admin/audit', tags=['administration'])
def audit_log(user=Depends(current_user), conn=Depends(db)):
    require(user, 'admin')
    return [dict(row) for row in conn.execute('SELECT * FROM audit ORDER BY at DESC LIMIT 200')]


@router.post('/whatsapp/sessions', status_code=201, tags=['whatsapp'])
def bot_start(user=Depends(current_user), conn=Depends(db)):
    return service.bot_start(conn, user)


@router.post('/whatsapp/sessions/{key}/answers', tags=['whatsapp'])
def bot_answer(key: str, body: BotInput, request: Request, user=Depends(current_user), conn=Depends(db)):
    return service.bot_answer(conn, user, key, body.text, request.app.state.settings)


@router.get('/whatsapp/status', tags=['whatsapp'])
def whatsapp_status(request: Request, user=Depends(current_user)):
    require(user, 'proveedor')
    # No afirmar que un número configurado equivale a un webhook integrado.
    return {'number': request.app.state.settings.whatsapp_number, 'external_channel_ready': False, 'guided_form_ready': True}
