# Agrovio · Repositorio de trabajo

Monorepositorio con landing, portal React, demo autónoma y base de backend Python. El material original se conserva como referencia. No se ha hecho push ni se ha desplegado una versión productiva.

```text
apps/
  landing/          Landing original React + TypeScript + Vite
  demo/             Portal React con todos los procesos simulados
  frontend/         Base del portal de producción; aún usa datos simulados
packages/
  portal/           Pantallas React compartidas entre demo y frontend
  domain/           Tipos, datos iniciales y reglas del simulador con pruebas
backend/            Python / FastAPI: health, estado y estructura para ampliar
design/maquetado/    Capturas originales del cliente
docs/
  arquitectura/     Decisiones y contrato inicial de API
  gestion/          Backlog, responsabilidades y criterios de entrega
  referencias/      Documentos e imágenes previos, conservados
archive/            Demos HTML y configuraciones anteriores, sin desarrollo activo
scripts/            Empaquetado de la demo
```

## Arranque

Node 24+, npm 10+. Ejecutar desde la raíz:

```powershell
npm.cmd install
npm.cmd run dev:landing   # http://localhost:5173
npm.cmd run dev:demo      # http://localhost:5174
npm.cmd run dev:frontend  # http://localhost:5175
```

Los comandos anteriores inician aplicaciones distintas; usar una terminal por aplicación. `npm run dev` inicia la demo por defecto. La base Python se instala y ejecuta como indica [backend/README.md](backend/README.md).

```powershell
npm.cmd test
npm.cmd run typecheck
npm.cmd run build
npm.cmd run package:demo
```

`package:demo` genera `releases/Agrovio-Portal-Netlify.zip` con el build React y `index.html` en la raíz del ZIP. También deja `apps/demo/dist` listo para arrastrar a Netlify. No subir `apps/demo/src` ni la raíz de todo este repositorio como si fuera el build.

## Qué funciona en la demo

Cambiar entre comprador, proveedor y administrador sin credenciales reales. Productos, fotos locales, filtros, guardados, ofertas y contraofertas, desbloqueo de contacto, chat compartido, publicaciones en revisión, tres confirmaciones del trato, pagos secuenciales, acuerdo externo, calificación, CSV y bot guiado de WhatsApp simulado. Los cambios se conservan en el navegador y pueden reiniciarse.

1. Proveedor crea un producto desde la web o desde el bot guiado.
2. Administrador aprueba; comprador lo encuentra en el mercado.
3. Comprador ofrece; proveedor acepta o contraoferta; comprador puede aceptar la contraoferta.
4. La oferta aceptada genera un trato con su precio y volumen reales de la simulación.
5. Proveedor solicita cierre, comprador confirma y proveedor confirma al final.
6. Administrador confirma ingreso y después registra liberación. Comprador o proveedor califica.

El chat del comprador requiere conexión de esa publicación. El proveedor ve los mensajes del comprador al cambiar de perfil. Cada publicación nueva usa un cupo y entra a revisión; cancelar no devuelve cupo. Las fotos se guardan como datos locales, máximo 1 MB por imagen en la demo. Al llenar localStorage se avisa y el recorrido continúa en memoria.

## Límites explícitos

Todo se simula en `packages/domain`. No hay autenticación, envíos a WhatsApp, IziPay, transferencias bancarias, base de datos ni conexiones externas en la demo. El ciclo de créditos se renueva mediante un botón de prueba; no hay scheduler. El histórico se deriva de tratos cerrados de esta sesión; sin cotizaciones externas. Los estados de usuario no constituyen seguridad real.

`apps/frontend` comparte las pantallas para evitar duplicación, pero muestra una advertencia de entorno de desarrollo: todavía no consume la API. No debe desplegarse como producto terminado. El backend solo publica health y estado; sus módulos de negocio se implementarán con el backlog.

## Empezar a repartir trabajo

Consultar [BACKLOG](docs/gestion/BACKLOG.md), [responsabilidades](docs/gestion/EQUIPO.md), [arquitectura](docs/arquitectura/ESTRUCTURA.md) y [contrato inicial](docs/arquitectura/CONTRATO-API.md). Las asignaciones son propuestas para tres personas; no se han creado issues ni asignado personas reales.

## Enlaces desde el landing

En local: Ingresar lleva al frontend en el puerto 5175; el botón flotante Ver demo abre el puerto 5174. Ejecutar los tres dev servers para recorrer los enlaces.

Para publicar todo en un mismo sitio: `npm run build:landing`, publicar `apps/landing/dist`. Incluye `/portal/` y `/demo/`; no necesita puertos locales. En Netlify configurar comando `npm run build:landing` y directorio `apps/landing/dist`. Para sitios separados, definir `VITE_FRONTEND_URL` y `VITE_DEMO_URL` al compilar el landing. Ver `apps/landing/.env.example`.
