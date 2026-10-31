# Separación de responsabilidades

- Landing React: acceso al portal y botón flotante hacia el tutorial.
- apps/demo: tutorial automático con escenas aisladas y exploración de ejemplo. Su Store solo usa estado local.
- apps/frontend: portal con LiveStore, sesión HttpOnly y consultas HTTP a Python. No utiliza el seed ni actúa como demo.
- packages/portal: presentación compartida; live contiene acceso y pantallas conectadas, tutorial contiene las escenas y el reproductor.
- packages/domain: únicamente tipos compartidos y reglas del simulador; la autoridad del negocio real es Python.
- backend/app: core (SQLite y seguridad), business (transacciones), schemas (validación), api/portal (rutas) y extra (evaluación interna).
- Las reglas ambiguas se guardan en docs/negocio/PENDIENTES.md y no se consideran aprobadas por tener una opción provisional implementada.

El canal externo de WhatsApp, IziPay, cobros recurrentes y transferencias no están configurados. El registro manual de pagos no mueve dinero.
