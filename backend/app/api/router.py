from fastapi import APIRouter

router = APIRouter()

@router.get("/health", tags=["health"])
def health():
    return {"status": "ok", "service": "agrovio-api"}

@router.get("/api/v1/status", tags=["development"])
def status():
    return {"version": "0.1.0", "stage": "scaffold", "business_api_ready": False, "integrations": {"database": False, "whatsapp": False, "izipay": False}}
