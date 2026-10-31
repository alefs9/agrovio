"""Operaciones de negocio. Cada petición se ejecuta en una transacción SQLite."""
from datetime import timedelta
from .core import (active_plan, all_records, audit, cycle, date, expire, fail, get, money_cents, now, owner_or_admin, record, require, save, stamp, store_photo, uid)


def seller(conn, listing):
    user = conn.execute('SELECT * FROM users WHERE id=?', (listing['owner_id'],)).fetchone()
    return dict(user)


def short_name(name):
    parts = name.split()
    return parts[0] + (' ' + parts[-1][0] + '.' if len(parts) > 1 else '')


def participant(user, deal):
    if user['role'] != 'admin' and user['id'] not in (deal['buyer_id'], deal['seller_id']):
        fail('No puedes acceder a esta operación.', 403)


def view(conn, user):
    expire(conn)
    plan = get(conn, 'plans', user['id'])
    if plan and user['role'] == 'comprador' and plan.get('cycle') != cycle(user):
        plan['credits'] = 0
        plan['cycle'] = cycle(user)
        save(conn, 'plans', plan)
    connections = [c for c in all_records(conn, 'connections') if c['buyer_id'] == user['id']]
    ids = [c['listing_id'] for c in connections]
    offers = [o for o in all_records(conn, 'offers') if user['role'] == 'admin' or user['id'] in (o['buyer_id'], o['seller_id'])]
    deals = [d for d in all_records(conn, 'deals') if user['role'] == 'admin' or user['id'] in (d['buyer_id'], d['seller_id'])]
    related = {d['listingId'] for d in deals} | {o['listingId'] for o in offers}
    listings = []
    for p in all_records(conn, 'listings'):
        visible = user['role'] == 'admin' or (user['role'] == 'proveedor' and p['owner_id'] == user['id']) or (user['role'] == 'comprador' and (p['status'] == 'Publicada' or p['id'] in related))
        if not visible:
            continue
        owner = seller(conn, p)
        full = user['role'] == 'admin' or user['id'] == p['owner_id'] or p['id'] in ids
        listings.append({**p, 'price': p['price_cents'] / 100, 'owner': owner['name'] if full else short_name(owner['name']), 'contact': {'name': owner['name'], 'email': owner['email'], 'phone': owner['phone']} if full else None})
    messages = [m for m in all_records(conn, 'messages') if user['id'] in (m['buyer_id'], m['seller_id'])]
    conversations = []
    for c in all_records(conn, 'connections'):
        p = get(conn, 'listings', c['listing_id'])
        if p and user['id'] in (c['buyer_id'], p['owner_id']):
            buyer = conn.execute('SELECT name FROM users WHERE id=?', (c['buyer_id'],)).fetchone()
            conversations.append({'listingId': p['id'], 'buyerId': c['buyer_id'], 'buyerName': buyer['name']})
    return {'version': 1, 'role': user['role'], 'currentUserId': user['id'], 'credits': plan.get('credits', 0) if plan and plan.get('active') else 0, 'saved': [f['listing_id'] for f in all_records(conn, 'saved') if f['user_id'] == user['id']], 'connections': ids, 'listings': listings, 'offers': [{**o, 'price': o['price_cents'] / 100} for o in offers], 'deals': [{**d, 'price': d['price_cents'] / 100, 'rating': d.get('ratings', {}).get(user['id'])} for d in deals], 'messages': messages, 'usedSlots': plan.get('used', 0) if plan else 0, 'slotLimit': plan.get('quota', 0) if plan else 0, 'subscription': plan, 'conversations': conversations, 'users': [dict(u) for u in conn.execute('SELECT id,name,role,active,email FROM users')] if user['role'] == 'admin' else [], 'profile': {'name': user['name'], 'company': user['company'], 'email': user['email'], 'phone': user['phone']}}


def create_listing(conn, user, body, settings):
    require(user, 'proveedor')
    existing = get(conn, 'listings', body.id)
    if existing:
        owner_or_admin(user, existing)
        return existing
    plan = active_plan(conn, user)
    if plan['used'] >= plan['quota']:
        fail('Has utilizado todos los cupos de tu plan.')
    if not body.name.strip() or not body.zone.strip():
        fail('Completa producto y zona.', 422)
    p = {'id': body.id, 'owner_id': user['id'], 'name': body.name.strip(), 'category': body.category, 'type': body.type, 'zone': body.zone.strip(), 'quantity': body.quantity, 'original_quantity': body.quantity, 'price_cents': money_cents(body.price), 'photo': store_photo(body.photo, settings), 'status': 'En revisión', 'createdAt': stamp(), 'publishedAt': None}
    if p['price_cents'] <= 0:
        fail('El precio mínimo es un céntimo.', 422)
    save(conn, 'listings', p)
    plan['used'] += 1
    save(conn, 'plans', plan)
    audit(conn, user, 'listing.created', p['id'])
    return p


def edit_listing(conn, user, key, body):
    require(user, 'proveedor')
    p = record(conn, 'listings', key)
    owner_or_admin(user, p)
    active_plan(conn, user)
    allowed = (not p.get('publishedAt') and p['status'] == 'Requiere corrección') or (p['status'] == 'Publicada' and p.get('publishedAt') and now() - date(p['publishedAt']) < timedelta(hours=24))
    if not allowed:
        fail('La ventana de edición terminó o la publicación no admite cambios.')
    if any(d['listingId'] == key and d['step'] == 3 for d in all_records(conn, 'deals')):
        fail('El producto tiene ventas cerradas; su volumen no puede modificarse desde esta ficha.')
    p.update(name=body.name.strip(), zone=body.zone.strip(), quantity=body.quantity, original_quantity=body.quantity, price_cents=money_cents(body.price), status='En revisión')
    if not p['name'] or not p['zone'] or p['price_cents'] < 1:
        fail('Datos de publicación inválidos.', 422)
    save(conn, 'listings', p)
    audit(conn, user, 'listing.edited', key)


def approve_listing(conn, user, key, body):
    require(user, 'admin')
    p = record(conn, 'listings', key)
    if p['status'] != 'En revisión':
        fail('La ficha ya fue revisada.')
    p['status'] = 'Publicada' if body.approve else 'Requiere corrección'
    p['review_note'] = body.note
    if body.approve and not p.get('publishedAt'):
        p['publishedAt'] = stamp()
    save(conn, 'listings', p)
    audit(conn, user, 'listing.reviewed', key)


def connect_listing(conn, user, key):
    require(user, 'comprador')
    p = record(conn, 'listings', key)
    connection_id = user['id'] + ':' + key
    if get(conn, 'connections', connection_id):
        return
    expire(conn)
    p = record(conn, 'listings', key)
    if p['status'] != 'Publicada':
        fail('La publicación no está disponible.')
    plan = active_plan(conn, user)
    if plan['credits'] < 1:
        fail('No tienes créditos disponibles.')
    plan['credits'] -= 1
    save(conn, 'plans', plan)
    save(conn, 'connections', {'id': connection_id, 'buyer_id': user['id'], 'listing_id': key, 'created_at': stamp()})
    audit(conn, user, 'connection.created', key)


def create_offer(conn, user, key, body):
    require(user, 'comprador')
    p = record(conn, 'listings', key)
    expire(conn)
    p = record(conn, 'listings', key)
    if p['status'] != 'Publicada' or body.quantity > p['quantity']:
        fail('El producto no está disponible para ese volumen.')
    existing = get(conn, 'offers', body.id)
    if existing:
        if existing['buyer_id'] != user['id']:
            fail('Identificador de oferta en uso.', 409)
        return existing
    price = money_cents(body.price)
    if price < 1:
        fail('Precio inválido.', 422)
    return save(conn, 'offers', {'id': body.id, 'listingId': key, 'buyer_id': user['id'], 'seller_id': p['owner_id'], 'buyer': user['name'], 'price_cents': price, 'quantity': body.quantity, 'note': body.note, 'status': 'Pendiente', 'history': [], 'at': stamp()})


def respond_offer(conn, user, key, body):
    o = record(conn, 'offers', key)
    if user['id'] == o['seller_id']:
        if o['status'] != 'Pendiente':
            fail('Esta oferta ya fue respondida.')
    elif user['id'] == o['buyer_id']:
        if o['status'] != 'Contraoferta' or body.status == 'Contraoferta':
            fail('Solo puedes responder a una contraoferta.')
    else:
        fail('No puedes responder esta oferta.', 403)
    previous = {'price_cents': o['price_cents'], 'status': o['status'], 'at': stamp(), 'user_id': user['id']}
    o['history'].append(previous)
    if body.status == 'Contraoferta':
        if body.price is None or money_cents(body.price) < 1:
            fail('Indica el nuevo precio.', 422)
        o['price_cents'] = money_cents(body.price)
    elif body.price is not None:
        fail('Aceptar o rechazar no modifica el precio.', 422)
    o['status'] = body.status
    save(conn, 'offers', o)
    if body.status == 'Aceptada':
        p = record(conn, 'listings', o['listingId'])
        if p['quantity'] < o['quantity'] or p['status'] != 'Publicada':
            fail('El volumen acordado ya no está disponible.')
        save(conn, 'deals', {'id': o['id'], 'listingId': o['listingId'], 'buyer_id': o['buyer_id'], 'seller_id': o['seller_id'], 'buyer': o['buyer'], 'quantity': o['quantity'], 'price_cents': o['price_cents'], 'step': 0, 'payment': 0, 'outside': False, 'confirmations': [], 'ratings': {}, 'at': stamp(), 'listing_name': p['name']})
    audit(conn, user, 'offer.responded', key)


def confirm_deal(conn, user, key):
    d = record(conn, 'deals', key)
    participant(user, d)
    if d['outside'] or d['step'] >= 3:
        fail('El trato ya está registrado.')
    expected = d['buyer_id'] if d['step'] == 1 else d['seller_id']
    if user['id'] != expected:
        fail('Debe confirmar la otra parte.', 403)
    if d['step'] == 2:
        p = record(conn, 'listings', d['listingId'])
        if p['quantity'] < d['quantity'] or p['status'] != 'Publicada':
            fail('Ya no hay volumen suficiente para cerrar este trato.')
        p['quantity'] -= d['quantity']
        save(conn, 'listings', p)
    d['step'] += 1
    d['confirmations'].append({'user_id': user['id'], 'at': stamp()})
    save(conn, 'deals', d)
    audit(conn, user, 'deal.confirmed', key)


def outside_deal(conn, user, key):
    d = record(conn, 'deals', key)
    participant(user, d)
    if user['role'] == 'admin' or d['step'] == 3 or d['payment']:
        fail('No se puede cambiar la modalidad del trato.')
    d['outside'] = True
    save(conn, 'deals', d)
    audit(conn, user, 'deal.external', key)


def register_payment(conn, user, key, body):
    require(user, 'admin')
    d = record(conn, 'deals', key)
    expected = 0 if body.action == 'receive' else 1
    if d['outside'] or d['step'] != 3 or d['payment'] != expected:
        fail('Respeta el orden: cierre, ingreso y liberación.')
    amount = d['quantity'] * d['price_cents']
    commission = (amount + 50) // 100
    d['payment'] += 1
    save(conn, 'deals', d)
    save(conn, 'payments', {'id': key + ':' + body.action, 'deal_id': key, 'action': body.action, 'reference': body.reference, 'amount_cents': amount + commission if body.action == 'receive' else amount - commission, 'commission_cents': commission, 'at': stamp(), 'user_id': user['id']})
    audit(conn, user, 'payment.' + body.action, key)


def create_message(conn, user, key, body):
    require(user, 'comprador', 'proveedor')
    p = record(conn, 'listings', key)
    if user['role'] == 'comprador':
        buyer_id = user['id']
    else:
        owner_or_admin(user, p)
        candidates = [c['buyer_id'] for c in all_records(conn, 'connections') if c['listing_id'] == key]
        buyer_id = body.buyer_id or (candidates[0] if len(candidates) == 1 else '')
    if not buyer_id or not get(conn, 'connections', buyer_id + ':' + key):
        fail('La conversación necesita un contacto desbloqueado.', 403)
    if not body.text.strip():
        fail('Escribe un mensaje.', 422)
    existing = get(conn, 'messages', body.id)
    if existing:
        if existing['sender_id'] != user['id']:
            fail('Identificador en uso.')
        return existing
    return save(conn, 'messages', {'id': body.id, 'listingId': key, 'buyer_id': buyer_id, 'buyerId': buyer_id, 'seller_id': p['owner_id'], 'sender_id': user['id'], 'role': user['role'], 'text': body.text.strip(), 'at': stamp()})


def activate_plan(conn, user, key, body):
    require(user, 'admin')
    target = conn.execute('SELECT * FROM users WHERE id=?', (key,)).fetchone()
    if not target or target['role'] == 'admin':
        fail('Cuenta no válida para un plan.', 404)
    target = dict(target)
    existing = get(conn, 'plans', key)
    if existing and existing.get('reference') == body.reference:
        return
    save(conn, 'plans', {'id': key, 'name': body.name, 'quota': body.quota, 'credits': body.quota if target['role'] == 'comprador' else 0, 'used': 0, 'cycle': cycle(target), 'active': True, 'starts': stamp(), 'expires': stamp(now() + timedelta(days=body.days)), 'reference': body.reference})
    audit(conn, user, 'plan.activated', key)


def bot_start(conn, user):
    require(user, 'proveedor')
    active_plan(conn, user)
    return save(conn, 'bot', {'id': uid(), 'user_id': user['id'], 'step': 0, 'values': {}, 'listing_id': uid(), 'created_at': stamp(), 'confirmed': False})


def bot_answer(conn, user, key, answer, settings):
    from .schemas import ListingInput
    b = record(conn, 'bot', key)
    if b['user_id'] != user['id']:
        fail('Conversación no autorizada.', 403)
    if b['confirmed']:
        return b
    if now() - date(b['created_at']) > timedelta(hours=2):
        fail('La conversación venció. Empieza otra vez.')
    fields = ['type', 'name', 'quantity', 'price', 'zone', 'photo']
    if answer.lower().strip() == 'menu':
        b.update(step=0, values={}, listing_id=uid())
    elif b['step'] < 6:
        field = fields[b['step']]
        if field == 'type' and answer not in ('cosecha', 'industrial'):
            fail('Selecciona cosecha o industrializado.', 422)
        if field == 'quantity':
            try:
                answer = int(answer)
            except ValueError:
                fail('Indica kilos enteros.', 422)
            if not 1 <= answer <= 10000000:
                fail('Cantidad inválida.', 422)
        if field == 'price':
            try:
                answer = float(answer)
                if not 0 < answer <= 1000000:
                    fail('Precio inválido.', 422)
            except ValueError:
                fail('Indica un precio válido.', 422)
        if field == 'photo':
            answer = '' if answer.lower() == 'omitir' else store_photo(answer, settings)
        b['values'][field] = answer
        b['step'] += 1
    elif answer.lower().strip() == 'confirmar':
        data = {**b['values'], 'id': b['listing_id']}
        create_listing(conn, user, ListingInput(**data), settings)
        b['confirmed'] = True
    else:
        fail('Confirma el resumen o vuelve al menú.', 422)
    return save(conn, 'bot', b)
