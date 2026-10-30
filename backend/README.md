# Backend de Agrovio · Python / FastAPI

Base ejecutable, no backend de negocio terminado. Solo se implementan `GET /health` y `GET /api/v1/status`. Los contratos de negocio propuestos están en `../docs/arquitectura/CONTRATO-API.md`.

Desde esta carpeta, con Python 3.10 o superior:

```powershell
py -3.12 -m venv .venv
.venv\Scripts\python.exe -m pip install -e ".[dev]"
.venv\Scripts\python.exe -m uvicorn app.main:app --reload --port 8000
```

Si usas otra versión, cambia `-3.12` por una instalada. No es necesario activar el entorno ni cambiar las políticas de PowerShell. Variables: copiar `.env.example` y cargarlas en el entorno del proceso; el servidor no carga `.env` automáticamente.

- Documentación: http://localhost:8000/docs
- Pruebas: `.venv\Scripts\python.exe -m pytest`
- Los permisos, autenticación, persistencia, créditos, moderación, WhatsApp y pagos son tareas pendientes.
- CORS se limita a los frontends locales configurados. Ampliar métodos y autenticación al implementar cada módulo.

Para reproducir las versiones verificadas con Python 3.12: instalar `-r requirements-dev.lock` y después `-e . --no-deps` en el entorno. El lock se generó para Python 3.12; otras versiones pueden requerir una nueva resolución. En esta máquina ya quedó `backend/.venv`; desde la raíz puede usarse `backend\.venv\Scripts\python.exe -m pytest backend/tests`.
