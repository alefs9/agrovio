# Publicar el portal Agrovio

1. Extraer `Agrovio-Portal-Netlify.zip` en una carpeta.
2. Comprobar que `index.html`, `app.js`, `styles.css`, `netlify.toml` y `assets/` estén directamente dentro de esa carpeta.
3. Abrir https://app.netlify.com/drop e iniciar sesión en la cuenta elegida.
4. Arrastrar esa carpeta a la zona de publicación. No se necesita instalar dependencias ni ejecutar un build.
5. Compartir la dirección que genere Netlify. Para actualizar el mismo sitio, usar su sección Deploys y subir la carpeta actualizada.

La navegación usa rutas con `#/`, por ejemplo `/#/cosecha`. No requiere redirecciones de servidor.

El ZIP contiene únicamente los archivos del sitio. La documentación, capturas de revisión y documentos de alcance no se publican.

Se retiraron el rótulo «DEMO INTERACTIVA» y el bloque del pie «Prototipo · Datos ilustrativos · Guía de la demo». Se mantiene Reiniciar para restablecer el recorrido.

La aplicación sigue funcionando con datos locales de ejemplo: subirla a Netlify no conecta un backend ni convierte los pagos en operaciones reales. Cada navegador conserva su propio estado. Se mantienen los avisos específicos de acciones simuladas y pagos. Las etiquetas noindex evitan solicitar indexación en buscadores, pero no son un control de acceso: quien tenga el enlace puede abrir el sitio.

Referencia oficial: https://docs.netlify.com/deploy/create-deploys/
