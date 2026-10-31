from fastapi.testclient import TestClient
from conftest import publish, approve


def test_new_account_has_no_unverified_plan(setup):
    app, _, _, _ = setup
    with TestClient(app) as client:
        response=client.post('/api/v1/auth/register',json={'email':'nuevo@example.test','password':'Nueva-cuenta-segura-123','name':'Nueva Persona','company':'Nueva empresa','role':'comprador'})
        assert response.status_code==201
        data=client.get('/api/v1/state').json()
        assert data['credits']==0 and data['subscription'] is None
        assert client.post('/api/v1/admin/users/x/plan',json={'name':'Inventado','quota':100,'days':30,'reference':'Falsa'}).status_code==403


def test_internal_reliability_and_unsafe_photo(setup):
    _, _, users, clients=setup
    key=users['proveedor']['id']
    assert clients['admin'].post('/api/v1/admin/users/'+key+'/reliability',json={'phase':'pre','note':'Se revisaron los datos de la cuenta.'}).status_code==200
    rows=clients['admin'].get('/api/v1/admin/users/'+key+'/reliability').json()
    assert len(rows)==1 and rows[0]['phase']=='pre'
    assert clients['comprador'].get('/api/v1/admin/users/'+key+'/reliability').status_code==403
    response=clients['proveedor'].post('/api/v1/listings',json={'id':'PHOTO-1','name':'Producto','type':'cosecha','quantity':1,'price':1,'zone':'Lima','photo':'data:image/svg+xml;base64,PHN2Zz48L3N2Zz4='})
    assert response.status_code==422
    assert clients['proveedor'].get('/api/v1/state').json()['usedSlots']==0
