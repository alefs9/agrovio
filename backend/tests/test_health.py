from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)

def test_health():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["service"] == "agrovio-api"

def test_scaffold_does_not_claim_live_integrations():
    data = client.get("/api/v1/status").json()
    assert data["business_api_ready"] is False
    assert not any(data["integrations"].values())
