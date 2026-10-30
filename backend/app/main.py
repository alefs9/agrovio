import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.router import router

app = FastAPI(title="Agrovio API", version="0.1.0", description="Base de desarrollo. No autentica usuarios ni procesa transacciones todavía.")
origins = [origin.strip() for origin in os.getenv("CORS_ORIGINS", "http://localhost:5174,http://localhost:5175,http://127.0.0.1:5174,http://127.0.0.1:5175").split(",") if origin.strip()]
app.add_middleware(CORSMiddleware, allow_origins=origins, allow_methods=["GET"], allow_headers=["Content-Type"], allow_credentials=False)
app.include_router(router)
