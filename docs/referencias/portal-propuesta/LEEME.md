# Agrovio · Propuesta de portal comercial

Maquetado interactivo para presentar al cliente. HTML, CSS y JavaScript nativos, sin instalación, compilación ni servicios externos. Elaborado a partir del landing existente, sus documentos y las capturas de `maquetado/`.

## Abrir la propuesta

1. Extraer **todo** el ZIP.
2. Abrir `index.html` en Chrome, Edge, Firefox o Safari actualizado.
3. Usar el selector superior para alternar entre **comprador**, **proveedor** y **administrador**.

Se abre directamente en el resumen del comprador. La pantalla de ingreso está en `index.html#/login`. Es demostrativa: no ingresar contraseñas reales.

Si se sirve por HTTP, publicar el contenido de esta carpeta como archivos estáticos. No requiere reescritura de rutas: la navegación utiliza `#/`.

## Qué presenta

- **Comprador:** resumen, mercado de cosechas, industrializados, filtros, guardados, detalle, ofertas, conexión por publicación, chat, tratos, seguimiento de pago, precios históricos, perfil y suscripción.
- **Proveedor:** resumen comercial, cosechas e industrializados, creación y edición de ficha, revisión, cancelación, ofertas recibidas, aceptación, rechazo, contraofertas, chat, tratos y movimientos exportables.
- **Administración:** resumen, cola de revisión con aprobación o solicitud de correcciones, estado de usuarios y custodia de pagos.
- **Pantallas comunes:** ingreso, cuentas vinculadas, perfil, planes, notificaciones y guía integrada.

El diseño conserva los verdes `#285C48`, `#397F4D`, `#4CA254` y el degradado de 60° del landing. Usa imágenes y el isotipo ya disponibles en el proyecto. La familia declarada es Rethink Sans, con Segoe UI y sans-serif como alternativas locales: no necesita descargar fuentes.

## Recorrido sugerido para la presentación

1. **Comprar:** abrir Mercado de cosechas, buscar «mandarina» y entrar al detalle. Enviar una oferta: no descuenta créditos.
2. **Conectar:** desbloquear la publicación. El saldo baja de 28 a 27 una sola vez. El contacto se habilita únicamente para esa publicación. Abrir el chat y escribir.
3. **Vender:** cambiar a proveedor. Crear una publicación, completar sus campos y enviarla a revisión.
4. **Revisar:** cambiar a administrador. Abrir Revisión de publicaciones y aprobar la ficha. Volver al mercado como comprador para verla publicada.
5. **Negociar:** como proveedor, abrir Ofertas recibidas. Aceptar, rechazar o contraofertar. Son estados locales de demostración.
6. **Cerrar:** entrar a Mis tratos y abrir AGR-9223. Como proveedor, solicitar el cierre; como comprador, confirmar condiciones; como proveedor, confirmar el cierre final. El selector conserva esta pantalla al cambiar de rol.
7. **Custodiar:** como administrador, abrir Custodia de pagos. Confirmar el ingreso y luego liberar el pago. No se puede liberar antes de confirmar el ingreso.
8. **Evaluar:** volver al detalle del trato como comprador y calificar la operación.
9. **Acuerdo externo:** reiniciar la demo y elegir «Acordamos por fuera» en el trato. Las comisiones pasan a cero y no se habilita custodia.

El trato AGR-9223 es un escenario fijo para explicar confirmaciones y pagos. Su precio y volumen no se recalculan desde las ofertas del catálogo. Las cifras de actividad, alertas y gráficos son ilustrativas. No representan datos de negocio reales.

## Archivos

| Archivo | Uso |
| --- | --- |
| `index.html` | Entrada autónoma |
| `styles.css` | Identidad visual, componentes y diseño adaptable |
| `app.js` | Vistas, datos de muestra e interacciones |
| `assets/` | Imágenes locales tomadas del landing |
| `REGLAS-Y-BACKEND.md` | Reglas, supuestos y siguiente etapa técnica |
| `revision/` | Capturas y resultado de verificación |

Los cambios se guardan en el navegador con `localStorage`, clave `agrovio-propuesta-v1`. El botón **Reiniciar** restablece los ejemplos. En navegadores que restringen el almacenamiento en archivos locales, los cambios pueden durar solamente mientras se mantiene abierta la página.

## Alcance de esta entrega

Es una propuesta frontend de pantallas e interacciones. **No incluye backend operativo**, autenticación, base de datos, WhatsApp conectado, IziPay, correos, cuentas bancarias, transferencias ni facturación. Los controles por rol sirven para recorrer la maqueta; no constituyen autorización de seguridad.

Los plazos de 24 horas y 30 días se explican en la interfaz, pero no transcurren en tiempo real: se utilizan estados de ejemplo para presentar las variantes. La fotografía cargada es una vista previa local y no se incorpora a un servidor; las fichas usan imágenes ilustrativas.

La propuesta de accesos individuales para equipos es una recomendación pendiente de aprobación. Los importes de planes provienen del landing y se muestran sin IGV. La habilitación de dólares, los paquetes extra y el número oficial de WhatsApp quedan pendientes. No se inventaron credenciales, enlaces de cobro ni teléfonos de atención.
