from fastapi.testclient import TestClient
from app.main import create_app
from app.core import Settings


def test_health_and_explicit_integrations(tmp_path):
    app=create_app(Settings(str(tmp_path/'data.sqlite3'),str(tmp_path/'media'),[]))
    with TestClient(app) as client:
        assert client.get('/health').json()['service']=='agrovio-api'
        data=client.get('/api/v1/status').json()
        assert data['business_api_ready'] is True
        assert data['integrations']=={'database':True,'whatsapp':False,'izipay':False}
