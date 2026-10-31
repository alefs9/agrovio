# Contrato del portal

La fuente de verdad es `backend/app/api/portal.py` y su OpenAPI generado en `docs/arquitectura/openapi.json`. Las rutas de negocio ya no son una lista de propuestas: están implementadas con sesiones, permisos y persistencia.

- Identidad: /api/v1/auth/register, /login, /logout; perfil PATCH /api/v1/me.
- Datos autorizados de la cuenta: GET /api/v1/state.
- Publicaciones: POST /api/v1/listings, PATCH /api/v1/listings/{id}, POST /cancel y /review.
- Conexiones/guardados: POST /api/v1/listings/{id}/connection y /saved.
- Ofertas: POST /api/v1/listings/{id}/offers; respuesta POST /api/v1/offers/{id}/response.
- Chat: POST /api/v1/listings/{id}/messages; los mensajes de cada comprador están separados.
- Tratos: POST /api/v1/deals/{id}/confirmations, /outside, /payments y /ratings.
- Administración: POST /api/v1/admin/users/{id}/status y /plan; GET /api/v1/admin/audit.
- Asistente: POST /api/v1/whatsapp/sessions y /{id}/answers; es el motor persistente, no el canal externo.

Errores de entrada: 422; sesión ausente o vencida: 401; acceso no autorizado: 403; recurso ausente: 404; transición incompatible o recurso agotado: 409; límite de acceso: 429. La cookie es HttpOnly y las peticiones modificadoras con Origin no permitido se rechazan.

IziPay, WhatsApp externo y transferencias automáticas requieren configuración y validación adicional: ver docs/negocio/PENDIENTES.md.
