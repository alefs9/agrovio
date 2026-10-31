# Agrovio · Landing, portal y tutorial

## Tres aplicaciones diferentes

| Aplicación | Función | Comando local | Dirección |
| --- | --- | --- | --- |
| Landing | Página comercial y acceso a portal/demo | `npm.cmd run dev:landing` | http://localhost:5173 |
| Frontend | Portal con inicio de sesión y datos del servidor | `npm.cmd run dev:frontend` | http://localhost:5175 |
| Demo | Tutorial automático con datos de ejemplo aislados | `npm.cmd run dev:demo` | http://localhost:5174 |
| Backend | API Python/FastAPI y SQLite | ver abajo | http://127.0.0.1:8000 |

```powershell
cd C:\Users\Alex\agrovio
npm.cmd install
backend/.venv/Scripts/python.exe -m uvicorn app.main:app --app-dir backend --host 127.0.0.1 --port 8000 --reload
```

Abrir otra terminal para cada aplicación React que se vaya a utilizar. Node 24+. Para instalar Python y crear cuentas locales, ver [backend/README.md](backend/README.md).

El frontend ya no tiene selector de rol ni saldo inventado: requiere iniciar sesión con una cuenta de comprador, proveedor o administrador. No usa localStorage como base de negocio. Si el servicio no está disponible, informa del problema en lugar de sustituir los datos por una simulación.

La demo ofrece **Ver recorrido automático** con pausa, anterior/siguiente, velocidad y repetición. Publica, revisa, negocia, conecta, conversa, confirma, registra pagos y muestra WhatsApp. Al terminar o salir restaura el estado y la pantalla anteriores. Las escenas no se escriben en la base del portal ni en el almacenamiento del recorrido manual.

## Estructura

```text
landing/             Web comercial
apps/frontend/            Entrada del portal real
apps/demo/                Entrada del tutorial y exploración de ejemplo
packages/portal/src/live/ Conexión al servicio, ingreso y pantallas reales
packages/portal/src/tutorial/ Escenas y reproductor automático
packages/portal/src/features/ Pantallas compartidas
packages/domain/          Tipos y reglas del simulador
backend/app/              Persistencia, seguridad, negocio y rutas
design/maquetado/          Capturas originales
docs/negocio/             Reglas y decisiones pendientes
docs/gestion/             Organización y tareas del equipo
archive/                  Referencias antiguas, no aplicaciones activas
```

## Compilar, probar y publicar

```powershell
npm.cmd test
npm.cmd run typecheck
npm.cmd run build:landing
npm.cmd run package:demo
backend/.venv/Scripts/python.exe -m pytest backend/tests --basetemp=.local/pytest-current
```

`build:landing` genera `landing/dist` con `/portal/` y `/demo/`. `package:demo` produce `releases/Agrovio-Portal-Netlify.zip` para publicar solo el tutorial/demo. El landing apunta al portal y su botón flotante abre la demo. URLs separadas configurables con `landing/.env.example`.

Para que el portal publicado funcione, también hay que desplegar Python y configurar el acceso a `/api` y `/media`; en local Vite ya los redirige al puerto 8000. No se han configurado credenciales ni despliegues de producción.

## Estado del negocio

El núcleo del portal persiste cuentas, planes manuales, publicaciones, revisiones, créditos, conexiones, ofertas, tratos, mensajes, pagos manuales y calificaciones. WhatsApp cuenta con un motor guiado persistente que puede usarse en la web; el canal externo necesita proveedor y vínculo verificado. IziPay y las transferencias automáticas no se habilitan sin definición y credenciales.

Consultar [pendientes](docs/negocio/PENDIENTES.md), [contrato API](docs/arquitectura/CONTRATO-API.md), [reglas](docs/negocio/REGLAS.md) y [backlog](docs/gestion/BACKLOG.md). Las cuotas y políticas todavía no aprobadas están identificadas; no se consideran confirmadas por existir una implementación provisional.

Para el despliegue conjunto de Netlify, se puede definir `API_PROXY_URL` con la URL HTTPS del servicio Python antes de compilar. Se generan reglas `/api` y `/media` hacia ese servicio; configurar `COOKIE_SECURE=true` y CORS con el dominio público. Esto no despliega Python automáticamente.

Atajo de arranque: `npm.cmd run dev:backend` inicia Python en 8000; en otras terminales, `npm.cmd run dev:frontend`, `npm.cmd run dev:demo` y `npm.cmd run dev:landing`. `npm run dev` inicia el conjunto con el landing como entrada principal.

## Landing activo restaurado (31/10/2026)

El código proporcionado en `landing/` es el landing activo. Sus páginas y recursos se conservaron; solo se conectaron los CTA de ingreso y se añadió el botón flotante de demo.

`npm.cmd run dev` inicia landing (5173), portal (5175), demo (5174) y Python (8000), reutilizando los que ya estén abiertos. Abre http://127.0.0.1:5173. Para trabajar solo en el landing: `npm.cmd run dev:landing`. El build conjunto sigue siendo `npm.cmd run build:landing`; publicar `landing/dist`.

El backend no se despliega automáticamente al publicar archivos estáticos.
