# Verificación de la propuesta

Fecha de entrega: 21 de octubre de 2026.

Resultado: **55 comprobaciones correctas**, sin excepciones JavaScript registradas durante el recorrido automatizado en Chrome 155 sin interfaz.

Comprobado:

- Carga directa mediante `file://` y recursos locales.
- Catálogo y filtros de búsqueda/categoría.
- Nombre reducido antes de conectar; un débito por desbloqueo y ningún débito repetido.
- Envío de oferta sin consumir créditos.
- Envío de mensaje después de habilitar la conexión.
- Creación de publicación en revisión y aprobación administrativa.
- Solicitud del proveedor, confirmación del comprador y confirmación final del proveedor.
- Confirmación del ingreso seguida de liberación del pago.
- Calificación de la operación terminada.
- Actualización de ofertas sin duplicar registros.
- Perfil de proveedor separado del de comprador.
- Registro externo con comisiones en cero.
- Ausencia de desbordamiento horizontal global en 25 combinaciones de rol y pantalla a 390 px y ocho pantallas a 320 px.

Se revisaron visualmente capturas de escritorio y móvil. Las tablas anchas tienen desplazamiento horizontal dentro de su propio contenedor.

Estas comprobaciones validan el prototipo local. No verifican autenticación, servicios de terceros, accesibilidad exhaustiva, compatibilidad con todos los navegadores ni operaciones financieras reales.

Las capturas de proveedor y administración muestran estados alcanzados durante el recorrido de pruebas. Al abrir la demo por primera vez, el estado inicial está sin esas acciones completadas.

Evidencia detallada: `validacion-portal.json`.
