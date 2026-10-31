# Verificación · 31/10/2026

## Componentes diferentes

La demo ejecuta un tutorial aislado. El frontend inicia sesión y llama al servicio Python, sin fallback a datos simulados. El servicio utiliza una base SQLite y archivos de imágenes propios.

## Comandos

- npm test: reglas del simulador y coherencia de todas las escenas del tutorial.
- npm run typecheck y npm run build:landing: tres aplicaciones React.
- backend/.venv/Scripts/python.exe -m pytest backend/tests --basetemp=.local/pytest-current: permisos, persistencia, privacidad y transiciones sobre bases temporales.
- scripts/verify-separated.mjs: Chrome 9335 y preview del landing en 5180; exige AGROVIO_QA_PASSWORD para cuentas de prueba locales sobre una base separada.

## Pruebas de navegador realizadas

31 comprobaciones correctas: reproducción automática, pausa, navegación, prellenado de formularios, estado previo intacto al cerrar, controles móviles, portal sin selector de rol, cookie HttpOnly, creación/aprobación de publicación, contacto protegido, mensajes entre cuentas, oferta y trato, tres confirmaciones, ingreso/liberación y publicación asistida persistente. Sin excepciones JavaScript. Capturas y reporte en .local/qa-separated.

Las pruebas no acreditan conexión con WhatsApp externo, IziPay, bancos, correo ni un hosting productivo. Esas integraciones siguen identificadas en docs/negocio/PENDIENTES.md. El build heredado del landing conserva una advertencia de tamaño de bundle.

Resultado final del código: 10 pruebas de dominio/tutorial, 15 pruebas de servicio Python y 31 comprobaciones de navegador correctas. TypeScript y compilación de las tres aplicaciones correctos. Las verificaciones usan cuentas y base aisladas de QA, no credenciales de producción.

Para reproducir el navegador: definir DATABASE_PATH y MEDIA_PATH dentro de .local/qa-business, definir AGROVIO_QA_PASSWORD y ejecutar backend/.venv/Scripts/python.exe scripts/prepare-qa.py. Arrancar Python con esas variables, preview del landing en 5180 y Chrome en 9335; después node scripts/verify-separated.mjs con la misma contraseña. Esperar un minuto entre ejecuciones repetidas para respetar el límite de acceso. No usar estas cuentas fuera de QA.

