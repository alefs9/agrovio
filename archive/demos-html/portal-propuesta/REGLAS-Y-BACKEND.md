# Reglas del negocio y siguiente etapa

## Criterio aplicado

Las respuestas recientes del cliente prevalecen sobre los textos anteriores del landing. Las capturas son una referencia de cobertura funcional, no la fuente final de reglas.

| Tema | Regla confirmada y tratamiento en la propuesta |
| --- | --- |
| Comisión | 1% para comprador y 1% para proveedor al cerrar por Agrovio, independiente del plan. |
| Acuerdo externo | Registro básico de la transacción, sin comisión ni custodia. |
| Cierre | Ambas partes participan y el proveedor realiza la confirmación final. Se propone proveedor solicita → comprador confirma → proveedor confirma cierre. Validar si el comprador también puede iniciar. |
| Custodia | El comprador transfiere; Agrovio confirma ingreso; Agrovio libera al proveedor. |
| Estados de pago | «Pendiente de transferencia», «Pago recibido» y «Pago liberado». Se evita «Sin liquidar». |
| Moneda | Soles para presentar la maqueta. Soporte de dólares pendiente de decisión. |
| Planes e IGV | Precios del landing mostrados sin IGV. El cálculo final con impuestos requiere definición de facturación. |
| Crédito de conexión | Un crédito desbloquea una publicación para acceder al contacto y escribir en chat. Puede utilizarse antes o después de negociar precio. |
| Ofertas | Se propone mantener la negociación estructurada por ofertas/contraofertas sin consumir crédito, coherente con el flujo del landing. El chat directo requiere conexión. |
| Alcance del crédito | Solo la publicación elegida, no todo el proveedor. Se evita volver a descontar por el mismo desbloqueo. |
| Vigencia de créditos | Vencen a los 30 días desde apertura de cuenta; no se acumulan. El backend deberá resolver anclaje de ciclo, zona horaria y renovaciones. |
| Paquetes extra | Existirán; cantidades, precio y vigencia aún no confirmados. |
| Privacidad | Antes de conectar: producto, zona y nombre reducido, como Diego T. Sin teléfono ni razón social de contacto. |
| Edición | Primeras 24 horas desde publicación. Después, únicamente cancelar. El cupo consumido no se recupera. |
| Pausa | No existe. |
| Moderación | Todas las publicaciones requieren revisión, también las originadas en WhatsApp. Plazo de revisión por confirmar. |
| Correcciones | Se propone permitir corregir una ficha que aún no fue aprobada. No equivale a editar ilimitadamente una publicación visible. Validar procedimiento. |
| No renovación | Se eliminan las publicaciones. Determinar si se conserva un registro interno y por cuánto tiempo. |
| Equipos | El cliente permite compartir cuenta y plan. Se recomienda sustituir contraseña compartida por miembros con accesos propios. Número y permisos pendientes. |
| Doble rol | Cuentas de comprador y proveedor vinculadas, con suscripciones separadas y transición sencilla. |
| Reputación | Calificaciones posteriores al trato y evaluación de confiabilidad por Agrovio antes y después de la transacción. Fórmula final pendiente. |
| Renovación automática | Requerida con tarjeta asociada cuando exista la pasarela. Actualmente sin credenciales IziPay. |

## Ejemplo de cálculo representado

Operación de S/ 22.500:

- Comisión comprador: S/ 225 → total a pagar: **S/ 22.725**.
- Comisión proveedor: S/ 225 → neto a recibir: **S/ 22.275**.
- Comisión total Agrovio: S/ 450.
- Si se acuerda por fuera: comisión cero; registro de S/ 22.500, sin custodia.

Los ejemplos no agregan impuestos sobre las comisiones. Confirmar con el cliente la base de cálculo, impuestos, redondeo, comprobantes, devoluciones y manejo de diferencias de pago antes de implementar dinero real.

## Modelo propuesto para el backend

Esto es una guía de continuidad, no código de servidor implementado.

| Entidad | Responsabilidad |
| --- | --- |
| Usuario / empresa / membresía | Identidad individual, empresa y permisos. Evitar compartir contraseñas. |
| Cuenta comercial | Rol comprador/proveedor y vínculo entre cuentas de una empresa. |
| Suscripción / ciclo | Plan, renovación, vencimiento, recursos y estado de cobro. |
| Movimiento de recursos | Débitos de créditos o cupos y caducidad, con identificador idempotente. |
| Publicación / revisión | Producto, imágenes, origen, modalidad, auditoría, aprobación y ventana de edición. |
| Conexión | Relación comprador–publicación con restricción única para impedir débitos duplicados. |
| Oferta / contraoferta | Historial de propuestas, condiciones y aceptación. |
| Conversación / mensaje | Acceso a chat condicionado a conexión y membresía autorizada. |
| Trato / confirmación | Condiciones congeladas al cierre, participantes y evidencias de confirmación. |
| Pago / liberación | Ingreso verificado, comisiones, neto y referencia de transferencia. |
| Evaluación | Calificaciones y revisión de Agrovio, separadas de la fórmula de reputación. |
| Evento de auditoría | Autor, fecha y transición para moderación, recursos, confirmaciones y pagos. |

### Transiciones de referencia

```text
Publicación: borrador → en revisión → publicada
                           ↓              ↓
                   requiere corrección   cancelada / eliminada al no renovar

Oferta: pendiente → aceptada / rechazada / contraoferta enviada

Trato: solicitud proveedor → confirmación comprador → confirmación final proveedor
Pago: pendiente de transferencia → ingreso confirmado → pago liberado

Acuerdo externo: registro básico → sin comisión / sin custodia
```

Las contraofertas y las correcciones deben conservar el historial. Validar si editar una publicación aprobada exige revalidación; la maqueta la devuelve a revisión como propuesta conservadora.

### Requisitos de implementación

- Calcular créditos, cupos, plazos y comisiones en el servidor. Nunca confiar en el saldo o rol que envíe el navegador.
- Aplicar transacciones atómicas e idempotencia al desbloquear, confirmar, cobrar y liberar. Manejar concurrencia de miembros del mismo equipo.
- Mantener importes en unidades monetarias mínimas y asociar moneda a cada operación.
- Guardar fecha de aprobación y calcular las 24 horas desde ese momento. Programar vencimientos reales de ciclos.
- Generar el histórico de precios a partir de operaciones reales y mostrar tamaño de muestra y unidades.
- Verificar identidad y pertenencia a la empresa; separar permisos de revisión y pagos.
- Integrar almacenamiento de imágenes, notificaciones, canal WhatsApp y pasarela cuando se confirmen proveedores y credenciales.
- En suscripciones, verificar eventos de pago en servidor antes de activar o renovar un plan. Definir cancelación, reintentos y período de gracia.
- En custodia, definir comprobantes, conciliación y evidencia antes de habilitar operaciones reales. En esta entrega la liberación es solo un cambio de estado local.

## Decisiones a cerrar con el cliente

1. PEN/USD, conversión si aplica y moneda de los planes.
2. Cantidades, precio y vencimiento de paquetes extra.
3. Número oficial de WhatsApp y plazo de revisión.
4. Qué sucede con ofertas, desbloqueos e historial al eliminar una publicación o vencer el plan.
5. Cantidad de miembros por empresa, permisos y sesiones simultáneas. Propuesta inicial: 1 administrador + 2 operadores, validando límites con el cliente.
6. Si cualquiera puede iniciar el cierre y cómo se cancelan o corrigen confirmaciones.
7. Fórmula de reputación, moderación de evaluaciones y tratamiento de disputas.
8. IziPay, credenciales de pruebas, impuestos, facturación y condiciones para autorizar la liberación del pago.
