# Decisiones iniciales

- npm workspaces para tres aplicaciones React: landing, frontend y demo. Se conservan versiones y dependencias principales del landing.
- `packages/portal` comparte componentes y páginas. La demo es una aplicación React real, sin iframe, HTML inyectado ni ejecución del script antiguo.
- `packages/domain` contiene el simulador puro y tipos; no es autoridad de reglas en producción. El backend Python debe revalidar todo con sus propias pruebas.
- `backend` usa FastAPI como base propuesta y ejecutable. Base de datos, autenticación y proveedor de WhatsApp quedan por decidir; no se configura Supabase ni un proveedor de pagos sin acuerdo.
- `apps/frontend` inicia con el mismo simulador para permitir desarrollar UI. Debe reemplazarse por un adaptador de API antes de considerarse funcional en producción. No existen claves públicas ni secretos reales.
- `design/maquetado` conserva las capturas de referencia. `docs/referencias` conserva los documentos originales. Las reglas más recientes del cliente prevalecen sobre el diseño.
- `archive/demos-html` conserva las versiones HTML anteriores, incluida Agrovio-Portal-Netlify. No modificar esas copias para avanzar el producto.
- `.local` y perfiles de QA son locales e ignorados por Git. `releases` contiene salidas regenerables.

## Correcciones respecto a la demo anterior

Las ofertas aceptadas ahora generan tratos con el precio y cantidad de esa oferta, en lugar de dirigir siempre a una operación fija. El bot guiado crea fichas reales dentro del estado simulado. Los mensajes, publicaciones, créditos, revisiones y pagos comparten el mismo estado entre roles. Se usan fechas de publicación reales en la simulación para la ventana de 24 horas. Cualquier propuesta no confirmada (por ejemplo, nueva revisión al editar) debe validarse con el cliente antes del backend.

Documentación oficial de referencia: https://vite.dev/guide/ y https://fastapi.tiangolo.com/tutorial/first-steps/.
