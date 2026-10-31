import pytest
from fastapi.testclient import TestClient
from app.main import create_app
from app.core import Settings, transaction, create_user
from app.business import activate_plan
from app.schemas import PlanInput
from app.api.portal import attempts


@pytest.fixture
def setup(tmp_path):
    settings = Settings(str(tmp_path/'db.sqlite3'), str(tmp_path/'media'), ['http://localhost:5175'])
    app = create_app(settings)
    users = {}
    password = 'Local-only-test-1234'
    attempts.clear()
    with transaction(settings) as conn:
        for role in ['admin', 'comprador', 'proveedor']:
            users[role] = create_user(conn, role+'@example.test', password, role.title()+' Prueba', 'Empresa prueba', role)
        users['other'] = create_user(conn, 'other@example.test', password, 'Otro Comprador', 'Otra empresa', 'comprador')
        users['seller2'] = create_user(conn, 'seller2@example.test', password, 'Otro Proveedor', 'Otra empresa', 'proveedor')
        for role in ['comprador', 'other', 'proveedor', 'seller2']:
            activate_plan(conn, users['admin'], users[role]['id'], PlanInput(name='Plan pruebas', quota=8, reference='Contrato de prueba', days=30))
    clients = {}
    for role, user in users.items():
        clients[role] = TestClient(app)
        result = clients[role].post('/api/v1/auth/login', json={'email':user['email'], 'password':password})
        assert result.status_code == 200
    yield app, settings, users, clients
    for c in clients.values():
        c.close()


def publish(clients, ident='P-1', quantity=1000):
    result = clients['proveedor'].post('/api/v1/listings', json={'id':ident, 'name':'Mandarina', 'type':'cosecha', 'category':'Cítricos', 'quantity':quantity, 'price':2.4, 'zone':'Huaura, Lima', 'photo':''})
    assert result.status_code == 201, result.text
    return ident


def approve(clients, ident):
    assert clients['admin'].post('/api/v1/listings/'+ident+'/review', json={'approve':True}).status_code == 200


def accepted(clients, ident='O-1', listing='P-1', quantity=100):
    result = clients['comprador'].post('/api/v1/listings/'+listing+'/offers', json={'id':ident, 'quantity':quantity, 'price':2.3, 'note':'Recojo en origen'})
    assert result.status_code == 201, result.text
    assert clients['proveedor'].post('/api/v1/offers/'+ident+'/response',json={'status':'Aceptada'}).status_code == 200
    return ident


def close_deal(clients, ident):
    for role in ['proveedor','comprador','proveedor']:
        result = clients[role].post('/api/v1/deals/'+ident+'/confirmations')
        assert result.status_code == 200, result.text
