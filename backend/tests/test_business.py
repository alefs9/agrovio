from concurrent.futures import ThreadPoolExecutor
from datetime import timedelta
from fastapi.testclient import TestClient
from app.core import transaction, get, save, stamp, now
from conftest import publish, approve, accepted, close_deal


def state(client):
    response = client.get('/api/v1/state')
    assert response.status_code == 200
    return response.json()


def test_authentication_and_roles(setup):
    app, _, _, c = setup
    anonymous = TestClient(app)
    assert anonymous.get('/api/v1/state').status_code == 401
    assert anonymous.post('/api/v1/auth/register', json={'email':'fake@example.test','password':'long-password','name':'Nombre','company':'Empresa','role':'admin'}).status_code == 422
    assert c['comprador'].post('/api/v1/listings',json={'id':'X','name':'Xxx','type':'cosecha','quantity':1,'price':1,'zone':'Lima'}).status_code == 403
    assert c['comprador'].post('/api/v1/auth/logout').status_code == 200
    assert c['comprador'].get('/api/v1/state').status_code == 401


def test_review_privacy_and_ownership(setup):
    _, _, _, c = setup
    p = publish(c)
    assert not state(c['comprador'])['listings']
    assert c['seller2'].post('/api/v1/listings/'+p+'/cancel').status_code == 403
    assert c['proveedor'].post('/api/v1/listings/'+p+'/review',json={'approve':True}).status_code == 403
    approve(c,p)
    listing = state(c['comprador'])['listings'][0]
    assert listing['contact'] is None
    assert listing['owner'].endswith('.')
    assert c['comprador'].post('/api/v1/listings/'+p+'/connection').status_code == 200
    assert state(c['comprador'])['listings'][0]['contact']['email']=='proveedor@example.test'
    assert state(c['other'])['listings'][0]['contact'] is None


def test_idempotent_connection_and_no_negative_credits(setup):
    app, settings, users, c = setup
    p=publish(c);approve(c,p)
    cookies=dict(c['comprador'].cookies)
    def call(_):
        with TestClient(app) as client:
            client.cookies.update(cookies)
            return client.post('/api/v1/listings/'+p+'/connection').status_code
    with ThreadPoolExecutor(max_workers=2) as pool:
        assert list(pool.map(call,range(2)))==[200,200]
    assert state(c['comprador'])['credits']==7
    with transaction(settings) as conn:
        plan=get(conn,'plans',users['other']['id']);plan['credits']=0;save(conn,'plans',plan)
    assert c['other'].post('/api/v1/listings/'+p+'/connection').status_code==409
    assert state(c['other'])['credits']==0


def test_publication_quota_not_refunded_and_clock_not_extended(setup):
    _, settings, _, c=setup
    p=publish(c);approve(c,p)
    with transaction(settings) as conn:
        listing=get(conn,'listings',p);listing['publishedAt']=stamp(now()-timedelta(hours=25));save(conn,'listings',listing)
    body={'name':'Otro nombre','quantity':500,'price':2,'zone':'Huaral'}
    assert c['proveedor'].patch('/api/v1/listings/'+p,json=body).status_code==409
    assert c['proveedor'].post('/api/v1/listings/'+p+'/cancel').status_code==200
    assert state(c['proveedor'])['usedSlots']==1


def test_expired_credits_and_nonrenewal_remove_market_listing(setup):
    _, settings, users, c=setup
    p=publish(c);approve(c,p)
    with transaction(settings) as conn:
        conn.execute('UPDATE users SET created_at=? WHERE id=?',(stamp(now()-timedelta(days=31)),users['comprador']['id']))
        plan=get(conn,'plans',users['proveedor']['id']);plan['expires']=stamp(now()-timedelta(seconds=1));save(conn,'plans',plan)
    data=state(c['comprador'])
    assert data['credits']==0
    assert not data['listings']
    assert state(c['proveedor'])['listings'][0]['status']=='Eliminada'


def test_offers_are_free_and_counteroffer_creates_exact_deal(setup):
    _, _, _, c=setup
    p=publish(c);approve(c,p)
    response=c['comprador'].post('/api/v1/listings/'+p+'/offers',json={'id':'O-1','quantity':100,'price':2.1})
    assert response.status_code==201
    assert state(c['comprador'])['credits']==8
    assert c['proveedor'].post('/api/v1/offers/O-1/response',json={'status':'Contraoferta','price':2.25}).status_code==200
    assert c['comprador'].post('/api/v1/offers/O-1/response',json={'status':'Aceptada'}).status_code==200
    deal=state(c['comprador'])['deals'][0]
    assert deal['price']==2.25 and deal['quantity']==100
    assert c['other'].post('/api/v1/deals/O-1/confirmations').status_code==403


def test_confirmation_payment_and_rating(setup):
    _, _, _, c=setup
    p=publish(c);approve(c,p);d=accepted(c)
    assert c['comprador'].post('/api/v1/deals/'+d+'/confirmations').status_code==403
    payment={'action':'release','reference':'TRANSFERENCIA-1'}
    assert c['admin'].post('/api/v1/deals/'+d+'/payments',json=payment).status_code==409
    close_deal(c,d)
    assert state(c['proveedor'])['listings'][0]['quantity']==900
    assert c['comprador'].post('/api/v1/deals/'+d+'/payments',json={'action':'receive','reference':'DEP-1'}).status_code==403
    assert c['admin'].post('/api/v1/deals/'+d+'/payments',json={'action':'receive','reference':'DEP-1'}).status_code==200
    assert c['admin'].post('/api/v1/deals/'+d+'/payments',json=payment).status_code==200
    assert c['admin'].post('/api/v1/deals/'+d+'/payments',json=payment).status_code==409
    assert c['comprador'].post('/api/v1/deals/'+d+'/ratings',json={'rating':5}).status_code==200
    assert c['other'].post('/api/v1/deals/'+d+'/ratings',json={'rating':1}).status_code==403


def test_two_accepted_offers_cannot_oversell(setup):
    _, _, _, c=setup
    p=publish(c,quantity=100);approve(c,p)
    accepted(c,'O-1',quantity=80);accepted(c,'O-2',quantity=80)
    close_deal(c,'O-1')
    for role in ['proveedor','comprador']:
        assert c[role].post('/api/v1/deals/O-2/confirmations').status_code==200
    assert c['proveedor'].post('/api/v1/deals/O-2/confirmations').status_code==409
    assert state(c['proveedor'])['listings'][0]['quantity']==20


def test_external_agreement_does_not_allow_custody(setup):
    _, _, _, c=setup
    p=publish(c);approve(c,p);d=accepted(c)
    assert c['comprador'].post('/api/v1/deals/'+d+'/outside').status_code==200
    assert state(c['comprador'])['deals'][0]['outside'] is True
    assert c['admin'].post('/api/v1/deals/'+d+'/payments',json={'action':'receive','reference':'DEP-1'}).status_code==409


def test_chat_isolated_by_buyer(setup):
    _, _, users, c=setup
    p=publish(c);approve(c,p)
    message={'id':'M-1','text':'Mensaje privado'}
    assert c['comprador'].post('/api/v1/listings/'+p+'/messages',json=message).status_code==403
    c['comprador'].post('/api/v1/listings/'+p+'/connection')
    assert c['comprador'].post('/api/v1/listings/'+p+'/messages',json=message).status_code==201
    c['other'].post('/api/v1/listings/'+p+'/connection')
    assert state(c['other'])['messages']==[]
    assert c['proveedor'].post('/api/v1/listings/'+p+'/messages',json={'id':'M-2','text':'Respuesta','buyer_id':users['comprador']['id']}).status_code==201
    assert len(state(c['comprador'])['messages'])==2
    assert state(c['other'])['messages']==[]


def test_guided_bot_persists_and_confirms_once(setup):
    _, _, _, c=setup
    response=c['proveedor'].post('/api/v1/whatsapp/sessions');assert response.status_code==201
    ident=response.json()['id']
    assert c['comprador'].post('/api/v1/whatsapp/sessions/'+ident+'/answers',json={'text':'cosecha'}).status_code==403
    for answer in ['cosecha','Mandarina del bot','1000','2.5','Huaura','omitir','confirmar','confirmar']:
        result=c['proveedor'].post('/api/v1/whatsapp/sessions/'+ident+'/answers',json={'text':answer})
        assert result.status_code==200,result.text
    data=state(c['proveedor'])
    assert len(data['listings'])==1 and data['usedSlots']==1
    assert data['listings'][0]['status']=='En revisión'


def test_suspension_revokes_sessions_and_csrf(setup):
    _, _, users, c=setup
    assert c['admin'].post('/api/v1/admin/users/'+users['comprador']['id']+'/status').status_code==200
    assert c['comprador'].get('/api/v1/state').status_code==401
    assert c['proveedor'].post('/api/v1/whatsapp/sessions',headers={'Origin':'https://evil.example'}).status_code==403
