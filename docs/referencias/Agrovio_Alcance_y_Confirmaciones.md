# AGROVIO

## Alcance y confirmaciones para el desarrollo del portal

Versión propuesta · 21 de octubre de 2026

## 1. Propósito y forma de completar

Este documento reúne la base del proyecto y las decisiones necesarias para cerrar presupuesto y plazo. Agrovio solo debe completar los espacios señalados y marcar las opciones aplicables. No es necesario volver a describir las funciones ya confirmadas.

Los apartados de reconstrucción del frontend y de WhatsApp se completan únicamente si no se entrega el código correspondiente o si, después de revisarlo conjuntamente, se acuerda que debe reconstruirse.

## 2. Material disponible y trabajo requerido

La base a evaluar comprende desarrollo del backend, integración con el frontend y WhatsApp existentes, y modificaciones puntuales del frontend, como estilos y botones. Si alguno de esos códigos no está disponible, completar el apartado correspondiente para definir el trabajo de reconstrucción.

Las respuestas permitirán identificar las funciones, integraciones y ajustes requeridos para elaborar una cotización posterior. Este documento no fija importes ni constituye una aprobación de desarrollo.

### Material que entregará Agrovio

Frontend: [ ] Código fuente editable   [ ] No disponible   [ ] Por confirmar

WhatsApp: [ ] Código e integración existentes   [ ] No disponibles   [ ] Por confirmar

Fecha prevista de entrega del material: __________________________________

La entrega comprende archivos o repositorio, recursos visuales, instrucciones de ejecución y acceso autorizado a los servicios necesarios. Capturas, enlaces y acceso al portal sirven como referencia, pero no sustituyen el código fuente. Los accesos y claves se compartirán por un canal separado.

### Revisión y organización técnica

El equipo revisará el material recibido y comunicará qué puede reutilizarse. Si detecta trabajo de reconstrucción, presentará el alcance y el adicional para aprobación. Infraestructura propuesta según el documento previo: Netlify y Supabase, sujeta a validar su compatibilidad con el código recibido.

Agrovio proporciona las cuentas de los servicios externos y asume sus costos, incluidos hosting, dominio, WhatsApp, correo e IziPay cuando correspondan.

---

## 3. Funciones y reglas de referencia

La base solicitada comprende las pantallas existentes de comprador, proveedor y administrador: catálogo y detalle, publicaciones, ofertas y contraofertas, chat, tratos, perfiles, planes, créditos y registro de pagos. Las ofertas son propuestas de precio y volumen guardadas; no se solicita una subasta en vivo.

### Reglas ya conversadas

- Contacto: 1 crédito desbloquea una sola publicación, antes o después de negociar. No se vuelve a descontar por ese mismo desbloqueo. Antes de conectar se muestra producto, zona y nombre reducido. El chat directo requiere desbloqueo; enviar ofertas no consume créditos.

- Créditos: vencen cada 30 días desde la apertura de la cuenta y no se acumulan. Los paquetes adicionales quedan sujetos a definir cantidades y precios.

- Publicaciones: pasan por revisión de Agrovio, incluidas las de WhatsApp. Se editan durante las primeras 24 horas de publicación; después solo se cancelan. No se pausan y cancelar no devuelve el cupo consumido. Al no renovar el plan, las publicaciones se eliminan.

- Tratos: ambas partes confirman y el proveedor realiza la confirmación final. Secuencia propuesta para aprobar: proveedor solicita → comprador confirma → proveedor confirma el cierre.

- Comisión: 1% para comprador y 1% para proveedor al cerrar por Agrovio. Un acuerdo por fuera se registra sin comisión ni gestión de pago.

- Pagos: se distinguen transferencia pendiente, ingreso confirmado por Agrovio y pago liberado al proveedor. Mostrar o registrar estos estados no implica automatizar transferencias.

- Cuentas y planes: una empresa puede tener cuentas compradora y proveedora vinculadas, con suscripciones distintas. Precios de planes sin IGV. Se solicitó renovación automática con tarjeta; su implementación se confirma abajo.

### Completar solo las decisiones pendientes

Moneda: [ ] Solo soles   [ ] Soles y dólares. Conversión, si aplica: ______________

Cobro de planes: [ ] Verificación manual inicial   [ ] IziPay con pago manual   [ ] IziPay con renovación automática

Pagos de mercadería: [ ] Solo registro y verificación manual   [ ] Integración adicional por definir y cotizar

IziPay: [ ] Cuenta y pruebas disponibles   [ ] Pendientes. Fecha estimada: __________

Planes, campos y categorías: [ ] Se adjunta lista final   [ ] Se mantienen los existentes, con estos cambios: ______________________________________________

Funciones complementarias en esta entrega: [ ] Guardados   [ ] Calificaciones   [ ] Histórico de precios   [ ] Estadísticas   [ ] Notificaciones internas

Traducción del chat, pedidos recurrentes automáticos, facturación electrónica, IA y automatización bancaria no se presuponen incluidos. Si se requieren, deben detallarse y aprobarse. La lista de espera y cambios adicionales del landing también se registran como un pedido separado.

Observaciones o diferencias con esta base: __________________________________

________________________________________________________________________

---

## 4. Completar si no se tiene el código del frontend

Omitir este apartado si se entrega código reutilizable y únicamente se realizarán los ajustes puntuales previstos.

### Base propuesta para reconstruir

Reutilizar el maquetado de demostración y la identidad del landing de Agrovio para implementar las pantallas aprobadas de comprador, proveedor y administrador, adaptarlas a computadora y celular y conectarlas con el backend. Las capturas y la demo son referencias visuales; sus datos ficticios, gráficos y botones no implican por sí solos funciones contratadas.

Referencia elegida: [ ] Demo nueva   [ ] Pantallas anteriores   [ ] Combinación indicada en capturas adjuntas

Pantallas que se reconstruyen: ______________________________________________

________________________________________________________________________

Diferencias o cambios indispensables: ________________________________________

________________________________________________________________________

Comprobación de entrega: las pantallas acordadas permiten ejecutar las funciones aprobadas con datos del backend, muestran validaciones y estados, y se pueden usar en computadora y celular.

## 5. Completar si no se tiene el código de la integración de WhatsApp

Omitir este apartado si se entrega una integración reutilizable y solo se requiere conectarla al backend.

### Base propuesta para construir el flujo

Bot exclusivo para proveedores ya registrados. Desde el portal se accede a WhatsApp; el sistema verifica la vinculación con la cuenta, el plan y los cupos. Presenta preguntas con opciones y campos mínimos, recibe fotos, valida los datos y muestra un resumen. El proveedor confirma o vuelve al menú para reiniciar. Al confirmar, se crea una sola publicación pendiente de revisión de Agrovio y se informa el resultado.

No incluye interpretación con IA, audios, búsquedas para compradores ni conversación libre. Agrovio proporciona número, cuenta y servicio de WhatsApp, y asume los cargos externos.

Datos del formulario: [ ] Los mismos del portal   [ ] Ajustes: _____________________

Máximo de fotos por publicación: ______. Referencia del flujo/textos: _____________

Servicio y número de WhatsApp: _____________________________________________

Comprobación de entrega: un proveedor autorizado completa el recorrido, confirma el resumen y ve la publicación en revisión en su cuenta, sin duplicarse por repetir la confirmación. Si no tiene plan o cupos, recibe un aviso y no se crea la publicación.

---

## 6. Condiciones de entrega y soporte por confirmar

### Entrega y aceptación

Se entregará el código fuente del trabajo desarrollado, las instrucciones básicas de configuración y un despliegue en las cuentas acordadas. El equipo y Agrovio revisarán los recorridos aprobados con datos de prueba: acceso, publicaciones, revisión, ofertas, conexión y los demás módulos expresamente incluidos.

Los pagos integrados se probarán con las credenciales de prueba del proveedor antes de habilitar producción. La disponibilidad y aprobación de cuentas externas dependen de Agrovio y de cada servicio.

Fecha deseada de entrega: ______________. Inicio deseado: __________________

El plazo se cuenta desde la aprobación del alcance y la disponibilidad del material y accesos necesarios. Los retrasos de entrega de estos recursos o nuevas solicitudes se comunicarán para acordar su efecto en el calendario.

Plazo para enviar observaciones consolidadas de la entrega: ______ días hábiles.

### Soporte hasta el 31 de enero de 2027

Incluye corrección de errores respecto a las funciones aprobadas y ajustes menores en pantallas existentes, como textos, imágenes y estilos. No comprende nuevas pantallas, reglas de negocio, integraciones, rediseños completos ni cambios derivados de servicios externos.

Límite acordado de ajustes menores: ______ horas totales o ______ rondas.

La corrección de defectos de lo entregado se distingue de las solicitudes de cambio. Si la fecha de entrega se modifica, ambas partes confirmarán si se mantiene la fecha final de soporte o se acuerda otro período.

### Cierre de la definición del alcance

Funciones que se dejan para otra etapa: ______________________________________

________________________________________________________________________

Material o decisiones que quedan pendientes: __________________________________

________________________________________________________________________

Después de recibir este documento completado y revisar el código disponible, el equipo preparará una cotización con el alcance consolidado, precio final y plazo. La conformidad de esta ficha valida únicamente la información recopilada; la contratación y el inicio del desarrollo se acuerdan posteriormente.

Estado: [ ] Conforme   [ ] Conforme con los ajustes indicados   [ ] Pendiente de revisión

Responsable de Agrovio: __________________________ Fecha: __________________

Responsable del equipo: __________________________ Fecha: __________________

---

## Anexo A · Registro detallado de cambios con capturas

Completar una ficha por cambio y duplicar las dos páginas de esta ficha cuando sea necesario. Numerar las fichas como CAM-001, CAM-002, etc. Si una captura contiene varios cambios independientes, identificarlos con números y registrarlos por separado.

Las capturas deben mostrar la pantalla completa y señalar el elemento mediante un recuadro, flecha o número. No incluir contraseñas, claves ni datos personales reales. La imagen de referencia no sustituye la descripción del cambio.

Ficha: CAM-______   Versión: ______   Fecha: ______________________________

Solicitante y responsable de validar: ________________________________________

Módulo / pantalla / ruta o enlace: __________________________________________

Perfil afectado: [ ] Comprador   [ ] Proveedor   [ ] Administrador   [ ] Visitante

Aplicación: [ ] Computadora   [ ] Celular   [ ] Ambos   [ ] WhatsApp

### A. Captura de la situación actual

Pegar dentro del recuadro una captura legible, con el elemento a cambiar señalado. Si la pantalla todavía no existe, indicarlo y adjuntar la referencia o boceto en el segundo recuadro.

INSERTAR CAPTURA ACTUAL AQUÍ

Archivo o referencia: _____________________ Elemento señalado: ______________

### B. Referencia del resultado esperado

Adjuntar un boceto, captura anotada o referencia visual. Indicar en la página siguiente qué elementos exactos se tomarán de ella; no se asume la reproducción de toda una web o aplicación.

INSERTAR REFERENCIA O BOCETO AQUÍ

Archivo o enlace de referencia: ____________________________________________

---

## Anexo A · Descripción y validación de la ficha

Ficha: CAM-______   Versión: ______   Pantalla: ______________________________

### C. Cambio solicitado

Situación actual y problema concreto: _______________________________________

________________________________________________________________________

Resultado exacto esperado: ________________________________________________

________________________________________________________________________

Elementos a agregar, modificar o quitar: _____________________________________

________________________________________________________________________

Texto final, imágenes o archivos que entregará Agrovio: ________________________

________________________________________________________________________

Alcance visual: colores, tamaños, posición y variación en celular: _________________

________________________________________________________________________

### D. Comportamiento y límites

Si es solo un cambio visual, marcar “No aplica” en comportamiento. Si cambia una función, especificar acción, resultado, campos obligatorios, validaciones, permisos y mensajes relevantes. Indicar qué otras pantallas o procesos modifica; si no modifica ninguno, escribir “Ninguno”.

Comportamiento: [ ] No aplica   [ ] Se detalla: _________________________________

________________________________________________________________________

Validaciones, errores, permisos y efectos en otras pantallas: _____________________

________________________________________________________________________

Qué queda expresamente fuera de esta solicitud: ______________________________

### E. Criterio de aceptación y revisión conjunta

Se considerará terminado cuando: __________________________________________

________________________________________________________________________

Prioridad: [ ] Necesario para la entrega   [ ] Puede ir a otra etapa

Decisión conjunta: [ ] Incluir en alcance   [ ] Evaluar por separado   [ ] Pendiente   [ ] Descartar

Versión aprobada / responsables de ambas partes / fecha: ______________________

Una ficha enviada es una solicitud, no una aprobación automática. Para la cotización se tomarán únicamente las fichas expresamente incluidas en la versión consolidada del alcance. Capturas sin descripción, referencias generales o campos incompletos quedarán pendientes de aclaración.

Después de aprobar el alcance, todo cambio nuevo o modificación de una ficha debe registrarse con una nueva versión y revisarse antes de ejecutarse, acordando su efecto en presupuesto y plazo. La corrección de errores respecto a lo aprobado se distingue de una nueva solicitud y conserva las condiciones de soporte pactadas.

Fichas incluidas en la definición final (ID y versión): ___________________________

________________________________________________________________________
