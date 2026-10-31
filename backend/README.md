# Backend de Agrovio

API Python/FastAPI con persistencia SQLite y sesiones de usuario. El frontend consume datos reales del servidor; la demo tutorial es independiente.

## Arrancar desde la raíz del repositorio

```powershell
backend\.venv\Scripts\python.exe -m uvicorn app.main:app --app-dir backend --host 127.0.0.1 --port 8000 --reload
```

Si no existe el entorno, usar Python 3.10+:

```powershell
py -3.12 -m venv backend/.venv
backend/.venv/Scripts/python.exe -m pip install -e "./backend[dev]"
```

El servidor crea `backend/data/agrovio.sqlite3` y `backend/data/media`. Ambos están ignorados por Git. No se generan cuentas ni datos falsos automáticamente.

## Cuentas locales opcionales para probar el portal

Definir una contraseña exclusivamente local y crear cuentas explícitamente:

```powershell
$env:AGROVIO_DEV_PASSWORD = 'elige-una-clave-local-de-10-caracteres-o-mas'
backend/.venv/Scripts/python.exe -m app.bootstrap --development
```

Ejecutar el segundo comando desde `backend`, o definir `$env:PYTHONPATH = (Join-Path (Get-Location) 'backend')` si se ejecuta desde la raíz. Se crean `admin@demo.agrovio.pe`, `bruno@demo.agrovio.pe` (comprador) y `carlos@demo.agrovio.pe` (proveedor)` con esa contraseña. Las cuotas 30 y 8 son solo de pruebas. No usar estas cuentas ni contraseñas en producción. La administración puede asignar planes manuales desde Usuarios.

## Implementado

Registro (solo comprador/proveedor), ingreso, cierre de sesión, contraseña derivada PBKDF2, cookie HttpOnly, sesiones revocables, permisos, suspensión, perfiles, planes manuales, cupos, créditos con caducidad, publicaciones e imágenes, revisión, guardados, contacto por publicación, ofertas y contraofertas, tratos, confirmaciones, comisiones, referencias de pagos manuales, calificaciones, chat separado por comprador, motor conversacional asistido y auditoría.

Las operaciones de negocio son transaccionales; el cliente no determina rol, propietario, saldo, fechas ni totales económicos. Los desbloqueos simultáneos no descuentan dos veces y el cierre final evita comprometer más volumen del disponible.

## Contrato y pruebas

- Documentación interactiva: http://127.0.0.1:8000/docs
- OpenAPI: `/openapi.json`; copia para el equipo en `docs/arquitectura/openapi.json`.
- Pruebas: `backend/.venv/Scripts/python.exe -m pytest backend/tests --basetemp=.local/pytest-current` desde la raíz. Elegir una carpeta temporal propia, no datos de negocio.
- Variables en `.env.example` deben cargarse al entorno del proceso; no se leen automáticamente.

## Desplegar

Este servicio requiere hosting Python; Netlify aloja las aplicaciones React, no este proceso. Recomendado: exponer `/api` y `/media` bajo el mismo dominio del portal mediante proxy. Configurar `COOKIE_SECURE=true` y CORS con los dominios exactos. Para frontend en otro origen, definir `VITE_API_URL` al compilar; el hosting y la política de cookies deben permitir la sesión. No presentar una pantalla servida por Netlify como un backend desplegado.

El canal de WhatsApp externo, IziPay, cobros recurrentes y transferencias no están habilitados. Revisar `docs/negocio/PENDIENTES.md` para reglas por confirmar y decisiones técnicas provisionales.

Evaluación interna de confiabilidad: GET/POST `/api/v1/admin/users/{id}/reliability` (fase pre/post y observación, solo administrador). No se inventa una fórmula pública. Para aplicar vencimientos sin abrir el portal puede programarse `python -m app.maintenance` con el mismo entorno y ruta de base de datos.
