from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles

from .core import Settings, connect
from .api.portal import router
from . import extra  # Register internal reliability routes.


def create_app(settings=None):
    config = settings or Settings.environment()
    Path(config.media).mkdir(parents=True, exist_ok=True)

    @asynccontextmanager
    async def lifespan(app):
        conn = connect(config)
        conn.close()
        yield

    app = FastAPI(title='Agrovio API', version='0.2.0', lifespan=lifespan, description='Identidad, publicaciones, ofertas, conexiones, chat, tratos y registro manual de pagos. El canal WhatsApp externo y los cobros automáticos no están habilitados.')
    app.state.settings = config
    app.add_middleware(CORSMiddleware, allow_origins=config.origins, allow_credentials=True, allow_methods=['GET', 'POST', 'PATCH', 'OPTIONS'], allow_headers=['Content-Type'])

    @app.middleware('http')
    async def protections(request: Request, call_next):
        origin = request.headers.get('origin')
        if request.method not in ('GET', 'HEAD', 'OPTIONS') and origin and origin not in config.origins:
            return JSONResponse({'detail': 'Origen no permitido.'}, status_code=403)
        if request.headers.get('content-length', '').isdigit() and int(request.headers['content-length']) > 2000000:
            return JSONResponse({'detail': 'La solicitud supera el tamaño permitido.'}, status_code=413)
        response = await call_next(request)
        response.headers['X-Content-Type-Options'] = 'nosniff'
        if request.url.path.startswith('/api/'):
            response.headers['Cache-Control'] = 'no-store'
        return response

    @app.get('/health', tags=['health'])
    def health():
        return {'status': 'ok', 'service': 'agrovio-api'}

    @app.get('/api/v1/status', tags=['health'])
    def status():
        return {'version': '0.2.0', 'stage': 'business', 'business_api_ready': True, 'integrations': {'database': True, 'whatsapp': False, 'izipay': False}, 'payments': 'manual_recording_only'}

    app.include_router(router)
    app.mount('/media', StaticFiles(directory=config.media), name='media')
    return app


app = create_app()
