# Verificación del arranque

## Ejecutar

- `npm test`: reglas puras del simulador, sin servicios externos.
- `npm run typecheck`: TypeScript de las tres aplicaciones.
- `npm run build`: landing, demo y frontend por separado.
- `backend/.venv/Scripts/python.exe -m pytest backend/tests`: health y estado de la base Python.

El backend se verificó con Python 3.12 instalado de forma local en `.local/python` y su entorno en `backend/.venv`; no es necesario sustituir el Python del sistema. Para otra máquina, crear su propio entorno con Python 3.10+.

## Verificación de navegador

El script `scripts/verify-demo.mjs` usa el protocolo de depuración de un Chrome local, abierto por el desarrollador en el puerto 9335, contra `npm run preview:demo` (5174). No instala extensiones ni usa cuentas reales. Genera resultados y capturas bajo `.local/qa`, ignorado por Git. Nunca abrir la depuración remota a la red.

Los resultados comprueban simulaciones. No validan producción, autenticación ni integraciones externas.

## Resultado de esta preparación

- TypeScript y build: landing, frontend y demo correctos.
- Dominio: 8 pruebas correctas.
- Backend: 2 pruebas correctas con Python 3.12.
- Navegador: 35 comprobaciones, 0 excepciones JavaScript. Publicación web, bot, ofertas, chat, tres confirmaciones y pagos; 21 rutas/roles a 390 px.
- ZIP: index.html y assets en raíz, sin documentos ni datos locales.
- Auditoría npm tras actualizar Vite: sin vulnerabilidades reportadas.

La compilación del landing heredado advierte de un bundle superior a 500 kB; optimizar por rutas puede hacerse en una tarea aparte. La base backend solo demuestra health y estado, no procesos productivos.
