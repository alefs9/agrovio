# Backlog inicial

Estados: LISTO = base operativa en este repositorio; POR HACER = implementación pendiente. Prioridad P0 antes de funciones de producción; P1 siguiente.

| ID | Prioridad | Responsable sugerido | Trabajo | Dependencias | Criterio de terminado | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| BASE-01 | P0 | Equipo | Workspaces y comandos por app | Ninguna | Builds separados y README ejecutable | LISTO |
| DEMO-01 | P0 | Persona 3 | Demo React con estado compartido local | BASE-01 | Publicar/aprobar/negociar/cerrar/pagar sin servicios reales | LISTO |
| DEC-01 | P0 | Equipo + cliente | Cerrar reglas pendientes | Documento de reglas | Planes/cupos, monedas, privacidad, pagos y campos aprobados | POR HACER |
| BE-01 | P0 | Persona 2 | Elegir identidad y base de datos | DEC-01 | ADR y modelo de datos con migraciones reproducibles | POR HACER |
| BE-02 | P0 | Persona 2 | Autenticación y permisos | BE-01 | Acceso por empresa/rol; pruebas de acceso no autorizado | POR HACER |
| BE-03 | P0 | Persona 2 | Publicaciones y moderación | BE-02 | Persistencia, fotos, revisión y edición con reloj del servidor | POR HACER |
| FE-01 | P0 | Persona 1 | UI compartida separada por módulos | BASE-01 | Pantallas en packages/portal/src/features | LISTO |
| FE-02 | P0 | Persona 1 | Adaptador API en frontend | BE-03 y contrato | El frontend real obtiene datos del servidor; demo conserva mocks | POR HACER |
| BE-04 | P1 | Persona 2 | Créditos, planes y conexiones | DEC-01 + BE-02 | Débito atómico, idempotencia y pruebas de concurrencia | POR HACER |
| BE-05 | P1 | Persona 2 | Ofertas, tratos y comisiones | BE-03 | Confirmaciones por rol e importes de servidor | POR HACER |
| INT-01 | P0 | Persona 3 | Definir proveedor y acceso WhatsApp | Cliente | Cuenta, número, secretos y flujo aprobado, sin claves en Git | POR HACER |
| INT-02 | P1 | Persona 3 | Webhook WhatsApp | INT-01 + BE-03/04 | Firma verificada, fotos y una publicación por confirmación | POR HACER |
| CHAT-01 | P1 | Persona 3 | Chat persistente | BE-02/04 | Historial y autorización por conexión | POR HACER |
| PAY-01 | P0 | Equipo + cliente | Delimitar pago manual vs IziPay | DEC-01 | Alcance de planes/mercadería y credenciales confirmado | POR HACER |
| PAY-02 | P1 | Persona 2 + 3 | Pagos e IziPay si se aprueba | PAY-01 | Eventos verificados, estados, conciliación y sin doble crédito | POR HACER |
| QA-01 | P0 | Persona 3 | Pruebas de navegador y móvil | DEMO-01 | Recorrido automatizado 3 roles, captura y reporte en CI | POR HACER |
| OPS-01 | P1 | Persona 3 | Entornos de producción | BE-01 + FE-02 | Hosting Python, Netlify, CORS y variables por entorno | POR HACER |

Reglas de la demo probadas en `packages/domain/tests`. El contrato productivo no está implementado por existir un simulador equivalente.
