# Contrato inicial de API

## Implementado

`GET /health` → 200 `{ "status": "ok", "service": "agrovio-api" }`.

`GET /api/v1/status` → 200 con `stage: scaffold`, `business_api_ready: false` y todas las integraciones en falso. OpenAPI real: `/openapi.json` del backend.

## Propuesta para acordar, todavía no implementada

| Módulo | Rutas orientativas | Restricciones |
| --- | --- | --- |
| Identidad | POST /api/v1/auth/login, GET /api/v1/me | Decidir proveedor de identidad antes de implementar |
| Publicaciones | GET/POST /api/v1/listings, PATCH /api/v1/listings/{id} | Crear pendiente de revisión; edición 24 h; dueño autorizado |
| Moderación | POST /api/v1/listings/{id}/review | Administrador; auditoría |
| Conexión | POST /api/v1/listings/{id}/connection | Débito atómico e idempotente por comprador y publicación |
| Ofertas | POST /api/v1/listings/{id}/offers, PATCH /api/v1/offers/{id} | Volumen válido; historial; sin débito de crédito |
| Tratos | POST /api/v1/deals/{id}/confirmations | Orden de roles y condiciones congeladas |
| Pagos | POST /api/v1/deals/{id}/payment-events | Solo administración; primero ingreso, luego liberación |
| Chat | GET/POST /api/v1/conversations/{id}/messages | Autorización y desbloqueo |
| WhatsApp | Webhook del proveedor por definir | Verificar firma, cuenta vinculada e idempotencia |

Al concretar cada ruta, añadir esquema de entrada/salida, códigos 400/401/403/404/409/422, paginación y pruebas en el OpenAPI generado. No implementar estas rutas devolviendo éxito ficticio.

El frontend y demo usan ahora el simulador local `packages/domain`; no llaman a estas rutas. La UI compartida debe recibir un adaptador real cuando las rutas estén listas. El backend será la autoridad de permisos, fechas, cupos y dinero; nunca confiar en `role`, saldos o totales enviados por el navegador.
