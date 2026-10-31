import {seed,transition,type Action,type State,type Role} from '@agrovio/domain';

export interface TourFrame {
  title:string; description:string; chapter:string; path:string; target:string;
  state:State; duration:number;
}

/** Escenas reproducibles: mismas reglas que el recorrido manual, sin escribir en almacenamiento. */
export function createTour():TourFrame[]{
  let state=seed();const frames:TourFrame[]=[];
  const role=(role:Role)=>{state=transition(state,{type:'role',role});};
  const act=(action:Action)=>{state=transition(state,action);};
  const frame=(chapter:string,title:string,description:string,path:string,target='main',duration=5200)=>{
    frames.push({chapter,title,description,path,target,state:structuredClone(state),duration});
  };
  role('proveedor');
  frame('Publicar','Todo empieza en el campo','Carlos quiere vender su mandarina. Desde Inicio puede publicar un producto o hacerlo por WhatsApp.','/','.seller-welcome');
  frame('Publicar','Primero, el producto','Escribimos qué vamos a vender. Una ficha clara ayuda al comprador a encontrar lo que necesita.','/publicar?guia=1&campo=1','input[name="name"]',3600);
  frame('Publicar','Después, la cantidad','Indicamos 4.000 kilos disponibles. El comprador podrá proponer una cantidad dentro de ese volumen.','/publicar?guia=1&campo=2','input[name="quantity"]',3600);
  frame('Publicar','Un precio para empezar','Colocamos S/ 2,40 por kilo. Las partes podrán negociar el precio mediante ofertas.','/publicar?guia=1&campo=3','input[name="price"]',3600);
  frame('Publicar','Completamos el origen','El lote está en Huaura, Lima. Revisamos los datos y la foto antes de enviarlos.','/publicar?guia=1&campo=4','form.stack',4500);
  act({type:'publish',listing:{id:'GUIA-PRODUCTO',owner:'Carlos Rodríguez',name:'Mandarina W. Murcott · recorrido',category:'Cítricos',type:'cosecha',zone:'Huaura, Lima',quantity:4000,price:2.4,photo:'/assets/mandarina.jpg',status:'En revisión',createdAt:new Date().toISOString()}});
  frame('Publicar','Publicación enviada','La ficha utiliza un cupo y queda en revisión. Todavía no aparece en el mercado.','/productos','.product:last-child');
  role('admin');frame('Revisar','Agrovio revisa la información','Administración verifica el producto, volumen, precio y origen antes de aprobarlo.','/revision','article:last-child');
  act({type:'review',id:'GUIA-PRODUCTO',approve:true});role('comprador');
  frame('Comprar','Ahora aparece en el mercado','Bruno encuentra la mandarina publicada. Antes de conectar ve el producto, la zona y el nombre reducido.','/mercado','.product:last-child');
  frame('Comprar','Revisamos y proponemos','Entramos al detalle y proponemos comprar 1.000 kilos. Enviar una oferta no consume créditos.','/producto/GUIA-PRODUCTO?guia=oferta','form',5500);
  act({type:'offer',offer:{id:'GUIA-OFERTA',listingId:'GUIA-PRODUCTO',buyer:'Bruno Gómez',quantity:1000,price:2.3,note:'Recojo en origen esta semana.',status:'Pendiente'}});
  frame('Comprar','La propuesta queda registrada','La oferta es de S/ 2,30 por kilo: S/ 2.300 por 1.000 kilos. El proveedor podrá responderla.','/ofertas','.offer-card:last-child');
  act({type:'connect',id:'GUIA-PRODUCTO'});
  frame('Conectar','Desbloqueamos esta publicación','Usamos un crédito. El saldo baja de 28 a 27 y se habilita el contacto solo para este producto.','/producto/GUIA-PRODUCTO','aside .card:last-child');
  act({type:'message',message:{id:'GUIA-M1',listingId:'GUIA-PRODUCTO',role:'comprador',text:'Hola, Carlos. Me interesan 1.000 kilos para recoger esta semana.',at:new Date().toISOString()}});
  role('proveedor');act({type:'message',message:{id:'GUIA-M2',listingId:'GUIA-PRODUCTO',role:'proveedor',text:'Hola, Bruno. El lote está disponible. Ya reviso tu propuesta.',at:new Date().toISOString()}});
  frame('Conectar','Conversamos con el mismo contexto','El proveedor ve el mensaje del comprador y responde en la conversación del producto.','/chat?producto=GUIA-PRODUCTO','.messages');
  frame('Negociar','Carlos revisa la propuesta','Puede aceptar, rechazar o proponer otro precio. En este ejemplo acepta S/ 2,30 por kilo.','/ofertas','.offer-card:last-child');
  act({type:'respond',id:'GUIA-OFERTA',status:'Aceptada'});
  frame('Cerrar','La oferta aceptada genera un trato','Se conservan los 1.000 kilos y el precio acordado. El resumen distingue lo que paga el comprador y recibe el proveedor.','/trato/GUIA-OFERTA','.money-line',6200);
  act({type:'close',id:'GUIA-OFERTA'});role('comprador');
  frame('Cerrar','El proveedor solicita el cierre','Primera confirmación registrada. Ahora le toca al comprador revisar las condiciones y confirmar.','/trato/GUIA-OFERTA','.steps');
  act({type:'close',id:'GUIA-OFERTA'});role('proveedor');
  frame('Cerrar','El comprador confirma','Ambas partes participan. Falta la confirmación final del proveedor para completar el acuerdo.','/trato/GUIA-OFERTA','.steps');
  act({type:'close',id:'GUIA-OFERTA'});role('admin');
  frame('Pagar','El trato ya está confirmado','Con las tres confirmaciones completas, Agrovio puede registrar el ingreso y después la liberación del pago.','/trato/GUIA-OFERTA','.grid2>.card:last-child');
  act({type:'payment',id:'GUIA-OFERTA'});
  frame('Pagar','Primero se confirma el ingreso','Se registra la recepción del dinero del comprador. Este recorrido no realiza transferencias reales.','/trato/GUIA-OFERTA','.grid2>.card:last-child');
  act({type:'payment',id:'GUIA-OFERTA'});role('comprador');act({type:'rate',id:'GUIA-OFERTA',rating:5});
  frame('Pagar','Pago registrado y experiencia evaluada','La operación queda completada y el comprador deja su calificación. Las comisiones son 1% para cada lado.','/trato/GUIA-OFERTA','.grid2>.card:last-child',6200);
  role('proveedor');
  frame('WhatsApp','También puedes publicar por WhatsApp','El proveedor recibe preguntas cortas y opciones. Probamos el mismo proceso de publicación, con datos de ejemplo.','/whatsapp?guia=1&paso=0','.whatsapp-preview');
  frame('WhatsApp','Preguntas sencillas, datos concretos','El bot recoge producto, cantidad, precio y ubicación. No interpreta conversaciones libres.','/whatsapp?guia=1&paso=3','.whatsapp-preview');
  frame('WhatsApp','Revisamos antes de confirmar','El resumen permite confirmar o volver al menú para empezar otra vez. La ficha también pasa por revisión de Agrovio.','/whatsapp?guia=1&paso=5','.whatsapp-preview',6200);
  act({type:'publish',listing:{id:'GUIA-WHATSAPP',owner:'Carlos Rodríguez',name:'Fresa publicada por WhatsApp · recorrido',category:'Berries',type:'cosecha',quantity:800,price:4.2,zone:'Huaral, Lima',photo:'/assets/fresa.jpg',status:'En revisión',createdAt:new Date().toISOString()}});
  frame('Final','Así se conecta todo en Agrovio','Publicar, revisar, negociar, conectar y cerrar. Puedes repetir el recorrido o terminar para recuperar exactamente tus datos anteriores.','/productos','.product:last-child',7000);
  return frames;
}
