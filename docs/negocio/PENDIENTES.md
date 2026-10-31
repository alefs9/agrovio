# Reglas e integraciones pendientes de validación

Actualizado: 31/10/2026. Este documento distingue lo confirmado del comportamiento provisional necesario para ejecutar el portal. No modifica el acuerdo comercial ni aprueba funciones nuevas.

## Pendientes del cliente

| Tema | Qué falta definir | Tratamiento actual |
| --- | --- | --- |
| Planes | Nombres, precios, cupos/créditos, cambios y recargas | Administración asigna cantidades y vigencia tras una contratación verificada; no hay tabla ni precios inventados |
| Renovación automática | Cuenta habilitada de IziPay, credenciales, tokenización y condiciones del servicio | No se cobran tarjetas; renovación manual registrada |
| Mercadería y custodia | Quién custodia realmente, comprobantes, autorizaciones, conciliación, devoluciones y disputas | Registro manual con referencia de ingreso y liberación; no mueve dinero |
| Moneda | PEN/USD y conversión | Operaciones en PEN; dólares no habilitados |
| Impuestos | Comisiones, comprobantes y redondeo final | Importes en céntimos y comisión 1% por parte, redondeo HALF_UP; no se agrega un impuesto no aprobado |
| Cierre | Si el comprador puede iniciar y cómo anular/revertir confirmaciones | Secuencia provisional: proveedor solicita, comprador confirma, proveedor confirma al final |
| Volumen | Reserva al aceptar, mínimos parciales, cancelaciones y fracciones de kg | Kilos enteros; se descuenta al cierre final dentro de una transacción para evitar sobreventa; validar esta elección |
| Acuerdo externo | Efecto sobre inventario, comprobación entre partes e información final obligatoria | Registro básico sin comisión ni custodia; no descuenta inventario automáticamente |
| Publicaciones | Campos finales por categoría, documentos y número/tamaño de fotos | Producto, categoría, tipo, zona, kilos, precio y una foto JPG/PNG/WebP de hasta 1 MB; límite técnico provisional |
| Revisión | Plazo, rechazo, correcciones y reedición de una ficha aprobada | Editar durante 24 h desde la primera publicación vuelve a revisión; nueva aprobación no reinicia las 24 h |
| Vigencia de publicaciones | Duración independiente del plan y conservación de historial | Al vencer el plan se retiran del mercado; fila interna conservada para no romper tratos. Política de retención pendiente |
| Créditos extra | Cantidades, precio y vencimiento | No hay compra de paquetes habilitada |
| Conexión | Duración del contacto desbloqueado tras ciclo, cancelación o eliminación | Se conserva el desbloqueo y chat histórico; no revela contactos a otros compradores. Validar permanencia |
| Chat | Acceso antes de conectar, archivos, traducción y avisos | Texto, acceso del comprador tras desbloqueo y conversaciones separadas por comprador/publicación |
| Cuenta compartida | Miembros, sesiones simultáneas, permisos de empresa y vínculo comprador/proveedor | Cuentas individuales por rol y suscripciones separadas; vinculación empresarial no habilitada |
| Identidad | Verificación de correo/teléfono, recuperación de contraseña y proveedor de correo | Registro e inicio de sesión; no se simula envío de correos ni recuperación sin proveedor configurado |
| Reputación | Fórmula pública, moderación y peso de evaluación de Agrovio | Calificaciones por participante en tratos cerrados; sin puntuación global inventada |
| WhatsApp | Proveedor definitivo, número, vinculación verificada, firma de webhook y envío de respuestas | Motor conversacional persistente disponible en la web; no se envían mensajes a WhatsApp ni se acepta un webhook sin identidad verificada |
| Funciones adicionales | Histórico, gráficos, notificaciones, traducción y certificaciones finales | Históricos a partir de los tratos visibles del usuario; resto sin integración externa |

## Reglas confirmadas implementadas

- Comisión 1% para cada parte, sin variación por plan; acuerdo externo sin comisión.
- Tres pasos de confirmación; ingreso antes de liberación; operaciones registradas por administrador.
- Un crédito por publicación; el desbloqueo repetido no vuelve a descontar. Ofertar es gratis.
- Nombre reducido y contacto oculto antes de conectar. Validación en el servidor, no solo visual.
- Créditos no acumulables, con corte cada 30 días desde creación de cuenta.
- Publicación siempre en revisión, también desde el formulario asistido; sin pausa.
- Edición dentro de 24 horas y cancelación sin devolución de cupo.
- Retiro del mercado por no renovación.
- Calificación posterior al trato.

## Límites de operación que requieren una siguiente configuración

- SQLite y almacenamiento de imágenes en disco son adecuados para un piloto de un solo servidor. Antes de múltiples instancias se necesita migrar a una base compartida y almacenamiento de objetos, además de backups y política de retención.
- HTTPS, dominio, CORS y cookie segura deben configurarse en el hosting. El portal no incorpora credenciales productivas.
- La expiración se aplica al leer o modificar recursos. No se envían recordatorios de vencimiento ni se ejecutan cobros automáticos.
- El control de intentos de acceso es local al proceso. Una instalación con múltiples procesos requiere un limitador compartido y protección en el proxy.
- La demo es un tutorial aislado. No escribe en la base del portal ni conserva sus escenas sobre los datos previos del navegador.

## Antes de afirmar que una integración está operativa

Probar con credenciales y permisos reales proporcionados por Agrovio, verificar firmas/eventos, comprobar reintentos, errores y conciliación. La existencia de una pantalla de pagos o del formulario asistido no demuestra integración con bancos, IziPay o WhatsApp.
