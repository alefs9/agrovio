import fs from 'node:fs/promises';
const targets=await(await fetch('http://127.0.0.1:9333/json')).json();
const target=targets.find(t=>t.type==='page');
const ws=new WebSocket(target.webSocketDebuggerUrl);await new Promise(r=>ws.addEventListener('open',r,{once:true}));
let serial=0;const pending=new Map(),errors=[];
ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(m.error):p.resolve(m.result)}if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.text+' '+JSON.stringify(m.params.exceptionDetails.exception));});
function call(method,params={}){return new Promise((resolve,reject)=>{const id=++serial;pending.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}))})}
async function js(expression){const r=await call('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value}
const pause=()=>new Promise(r=>setTimeout(r,100));
const checks=[];
function assert(value,name){checks.push({name,passed:!!value});if(!value)throw Error(name)}
await call('Runtime.enable');await call('Page.enable');
await call('Emulation.setDeviceMetricsOverride',{width:1440,height:1100,deviceScaleFactor:1,mobile:false});
await call('Page.navigate',{url:'file:///C:/Users/Alex/LandingPage_Agrovio/portal-propuesta/index.html'});await new Promise(r=>setTimeout(r,900));
await js('state=defaults();save();render()');
assert(await js('document.querySelectorAll(".product").length===3'),'Inicio comprador renderiza productos');
assert(await js('[...document.images].every(i=>i.complete&&i.naturalWidth>0)'),'Recursos locales cargan');
assert(await js('!!document.querySelector(".site-header .main-navigation")&&!document.querySelector(".sidebar")'),'Navegación superior sin barra lateral');
const shot=await call('Page.captureScreenshot',{format:'png'});await fs.writeFile('artifacts/portal-escritorio.png',Buffer.from(shot.data,'base64'));
await js('go("cosecha")');await pause();
assert(await js('document.querySelectorAll(".product").length===3'),'Catálogo muestra solo cosechas publicadas');
await js('query="fresa";updateCatalog()');assert(await js('document.querySelectorAll(".product").length===1'),'Búsqueda filtra');
await js('query="";category="Cítricos";updateCatalog()');assert(await js('document.querySelectorAll(".product").length===2'),'Categoría filtra');
await js('category="Todas";go("detalle/9000")');await pause();
assert(await js('!document.querySelector("main").textContent.includes("Diego Torres")'),'Nombre completo oculto antes de conectar');
await js('document.querySelector(`[data-action="unlock:9000"]`).click();document.querySelector(`[data-action="unlock-confirm:9000"]`).click()');
assert(await js('state.credits===27&&state.unlocked.includes(9000)'),'Desbloqueo consume exactamente un crédito');
await js('unlock(9000)');assert(await js('state.credits===27'),'Repetir conexión no consume otro crédito');
await js('go("detalle/9001")');await pause();
await js('document.getElementById("offer-price").value="4.50";document.getElementById("offer-quantity").value="1000";document.getElementById("offer-form").requestSubmit()');
assert(await js('state.offers.length===1&&state.offers[0].price===4.5&&state.credits===27'),'Oferta se registra sin consumir crédito');
await js('closeModal();go("chat")');await pause();
await js('document.querySelector("#chat-form input").value="Mensaje de prueba";document.getElementById("chat-form").requestSubmit()');assert(await js('state.messages[9000].includes("Mensaje de prueba")'),'Chat guarda mensaje con conexión habilitada');
await js('switchRole("proveedor");go("publicar")');await pause();
assert(await js('!!document.querySelector(`.main-navigation>a[href="#/chat"]`)&&!!document.querySelector(`.main-navigation>a[href="#/whatsapp"]`)'),'Chat y WhatsApp visibles en navegación del proveedor');
await js('(()=>{const f=document.getElementById("publish-form");Object.entries({name:"Mandarina QA",volume:1000,price:2.5,zone:"Huaura, Lima",quality:"Primera"}).forEach(([k,v])=>f.elements[k].value=v);f.requestSubmit()})()');await pause();
assert(await js('state.products.at(-1).status==="En revisión"'),'Publicación nueva requiere revisión');
await js('switchRole("admin");go("revision")');await pause();
await js('document.querySelector(`[data-action="review:${state.products.at(-1).id}"]`).click();document.querySelector(`[data-action="rev-approve:${state.products.at(-1).id}"]`).click()');
assert(await js('state.products.at(-1).status==="Publicada"&&state.products.at(-1).fresh'),'Administración aprueba publicación');
await js('switchRole("proveedor");go("trato/9223")');await pause();
await js('document.querySelector(`[data-action="confirm-deal"]`).click()');assert(await js('state.dealStage===1'),'Proveedor solicita cierre');
await js('switchRole("comprador",true);document.querySelector(`[data-action="confirm-deal"]`).click()');assert(await js('state.dealStage===2'),'Comprador confirma');
await js('switchRole("proveedor",true);document.querySelector(`[data-action="confirm-deal"]`).click()');assert(await js('state.dealStage===3'),'Proveedor confirma cierre final');
await js('switchRole("admin");go("custodia")');await pause();
await js('document.querySelector("[data-action=receive]").click();document.querySelector("[data-action=receive-confirm]").click()');assert(await js('state.payment===1'),'Ingreso confirmado antes de liberación');
await js('document.querySelector("[data-action=release]").click();document.querySelector("[data-action=release-confirm]").click()');assert(await js('state.payment===2'),'Pago se libera después de confirmar ingreso');
await js('switchRole("comprador");go("trato/9223")');await pause();await js('document.querySelector("[data-action=rate]").click();document.querySelector(`[data-action="star:5"]`).click();document.querySelector("[data-action=rate-save]").click()');assert(await js('state.rating===5'),'Calificación al finalizar');
await js('switchRole("proveedor");go("ofertas")');await pause();
const offerCount=await js('allOffers().length');await js('updateOffer(100,"Aceptada")');
assert(await js(`allOffers().length===${offerCount}&&allOffers().find(o=>o.id===100).status==="Aceptada"`),'Responder oferta no duplica registros');
await js('go("perfil")');await pause();assert(await js('document.querySelector("#profile-form input[name=name]").value==="Carlos Rodríguez"'),'Perfil proveedor independiente del comprador');
// Capturas de las otras áreas en escritorio.
await call('Emulation.setDeviceMetricsOverride',{width:1440,height:1100,deviceScaleFactor:1,mobile:false});
await js('go("inicio");document.getElementById("toast").classList.remove("show")');await pause();
let extra=await call('Page.captureScreenshot',{format:'png'});await fs.writeFile('artifacts/portal-proveedor.png',Buffer.from(extra.data,'base64'));
await js('switchRole("admin");go("custodia")');await pause();extra=await call('Page.captureScreenshot',{format:'png'});await fs.writeFile('artifacts/portal-admin.png',Buffer.from(extra.data,'base64'));
// Revisión de todas las vistas y de desbordamiento global en móvil.
await call('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
for(const [role,routes] of [['comprador',['inicio','cosecha','industrial','guardados','detalle/9000','tratos','trato/9223','chat','precios','perfil','planes','login']],['proveedor',['inicio','publicaciones','produccion','ofertas','publicar','whatsapp','chat','movimientos','perfil','planes']],['admin',['inicio','revision','usuarios','custodia','movimientos']]]){
 await js(`state.role=${JSON.stringify(role)};go(${JSON.stringify(routes[0])})`);await pause();
 for(const route of routes){await js(`go(${JSON.stringify(route)})`);await pause();const overflow=await js('document.documentElement.scrollWidth>innerWidth+1');assert(!overflow,`Sin desborde móvil: ${role}/${route}`)}
}
await js('switchRole("proveedor");go("inicio");document.getElementById("toast").classList.remove("show")');await pause();
assert(await js('!document.querySelector("main table")&&document.querySelectorAll(".task-card").length===3'),'Inicio proveedor con tres tareas claras y sin tablas');
const supplierMobile=await call('Page.captureScreenshot',{format:'png',captureBeyondViewport:true});await fs.writeFile('artifacts/portal-proveedor-movil.png',Buffer.from(supplierMobile.data,'base64'));
await js('document.querySelector(".more-navigation summary").click()');assert(await js('document.querySelector(".more-navigation").open'),'Menú secundario accesible');
await js('document.querySelector(`.more-panel a[href="#/movimientos"]`).click()');await pause();assert(await js('current()[0]==="movimientos"'),'Navegación secundaria conserva movimientos');
await js('state=defaults();save();go("inicio");document.getElementById("toast").classList.remove("show")');await pause();
const mobile=await call('Page.captureScreenshot',{format:'png',captureBeyondViewport:true});await fs.writeFile('artifacts/portal-movil.png',Buffer.from(mobile.data,'base64'));
await js('go("trato/9223")');await pause();await js('document.querySelector("[data-action=outside]").click();document.querySelector("[data-action=outside-confirm]").click()');
assert(await js('state.outside&&document.querySelector("main").textContent.includes("S/ 0.00")'),'Acuerdo externo sin comisión');
await call('Emulation.setDeviceMetricsOverride',{width:320,height:800,deviceScaleFactor:1,mobile:true});
for(const route of ['inicio','cosecha','detalle/9000','perfil','planes','precios','chat','trato/9223']){await js(`go(${JSON.stringify(route)})`);await pause();assert(await js('document.documentElement.scrollWidth<=innerWidth+1'),`Sin desborde 320px: ${route}`)}
await js('state=defaults();save();go("inicio")');await pause();
assert(errors.length===0,'Sin errores JavaScript en navegador');
await fs.writeFile('artifacts/validacion-portal.json',JSON.stringify({browser:'Chrome headless',checks,errors},null,2));
console.log(JSON.stringify({passed:checks.length,errors,screenshots:['artifacts/portal-escritorio.png','artifacts/portal-movil.png']}));
await call('Browser.close');ws.close();
