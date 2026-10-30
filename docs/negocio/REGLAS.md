# Reglas de referencia para repartir tareas

Las respuestas del cliente prevalecen sobre landing y capturas. Este archivo no aprueba decisiones pendientes ni convierte el simulador en backend de producción.

## Confirmado por el cliente

- Comisión del 1% para comprador y 1% para proveedor, independiente del plan, al cerrar por Agrovio.
- Acuerdo por fuera: registro básico de la transacción sin comisión. No se mueve dinero mediante Agrovio.
- Ambas partes confirman el trato y el vendedor realiza la confirmación final. Falta ratificar quién inicia; la demo usa proveedor → comprador → proveedor.
- Custodia: comprador transfiere → Agrovio confirma ingreso → Agrovio libera al proveedor. Mostrar estados claros en lugar de “Sin liquidar”. No implica automatización bancaria aprobada.
- Los planes no incluyen IGV. Moneda PEN/USD pendiente.
- Crédito de conexión: desbloquear contacto de una publicación, antes o después de negociar. No desbloquea todo el proveedor.
- Créditos vencen cada 30 días desde la apertura de cuenta, no se acumulan. Paquetes extra existirán, pero precio, cantidades y vigencia están pendientes.
- Antes de conectar: producto, zona y nombre reducido.
- No existe pausa de publicaciones. Editar durante las primeras 24 h de publicación; después solo cancelar sin recuperar el recurso utilizado.
- Publicaciones web y WhatsApp pasan por revisión. Plazo de revisión pendiente.
- Sin renovación del plan se eliminan las publicaciones; conservación interna e historial pendientes.
- El cliente permite compartir cuenta/plan por empresa. Accesos individuales, cantidad de miembros y permisos son propuestas por validar.
- Empresa compradora y proveedora: cuentas vinculadas y dos suscripciones, con transición sencilla.
- Las partes califican después del trato; Agrovio revisa confiabilidad antes y después. Fórmula pendiente.
- Se solicitó renovación automática con tarjeta; no se confirmó disponibilidad de credenciales IziPay.

## Precisiones del equipo

- Pujas como ofertas y contraofertas guardadas; no subasta en vivo.
- WhatsApp solo para proveedores registrados desde la web: preguntas predeterminadas, opciones, precio/cantidad y fotos; resumen; confirmar o volver al menú e iniciar otra vez. Sin interpretación con IA ni audios.
- Confirmar en WhatsApp crea una ficha pendiente de revisión. Identidad, plan y cupos deben validarse en servidor en la versión real.
- Cliente proporciona número y servicio WhatsApp y paga sus cargos. Falta revisar proveedor y accesos.
- Navbar superior para los tres roles. Proveedor con tareas simples y chat/WhatsApp visibles, conservando funciones del maquetado.
- Soporte conversado hasta 31/01/2027: errores y cambios pequeños. Límite y aceptación pendientes.

## Pendientes antes de implementar backend

Tabla de planes y campos finales; fotos y límites; cupos; autenticación; roles por empresa; vencimiento y vigencia de conexiones; ventas parciales y reserva de volumen; inicio/cancelación del cierre; método de pago manual o IziPay; manejo de devoluciones; edición y nueva revisión; funciones complementarias (históricos, notificaciones y traducción); privacidad en mensajes/fotos; plazo de moderación.

## Decisiones del simulador, no reglas aprobadas

Ocho cupos del proveedor, 28 créditos iniciales; renovación manual a 30; una foto local de hasta 1 MB; nueva revisión al editar; historial de precios de tratos cerrados locales; cotización en soles; datos compartidos por el navegador. Los estados de usuarios no representan seguridad real.
