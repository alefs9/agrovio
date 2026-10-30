import fs from 'node:fs/promises';
const out='.local/qa';await fs.mkdir(out,{recursive:true});
const targets=await(await fetch('http://127.0.0.1:9335/json')).json();const target=targets.find(t=>t.type==='page');if(!target)throw Error('Abre un Chrome de QA en el puerto 9335.');
const ws=new WebSocket(target.webSocketDebuggerUrl);await new Promise(r=>ws.addEventListener('open',r,{once:true}));let serial=0;const waiting=new Map(),errors=[],checks=[];
ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.id){const promise=waiting.get(m.id);waiting.delete(m.id);m.error?promise.reject(m.error):promise.resolve(m.result);}if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails);});
function call(method,params={}){return new Promise((resolve,reject)=>{const id=++serial;waiting.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}));});}
async function js(expression){const r=await call('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;}
async function check(expression,name){const ok=await js(expression);checks.push({name,passed:!!ok});if(!ok)throw Error(name);}
const pause=()=>new Promise(r=>setTimeout(r,180));
async function route(to){await js(`location.hash=${JSON.stringify('#'+to)}`);await pause();}
async function click(text){await js(`(()=>{const e=[...document.querySelectorAll('button,a')].find(b=>b.textContent.trim()===${JSON.stringify(text)});if(!e)throw Error('Botón no encontrado: '+${JSON.stringify(text)});e.click();})()`);await pause();}
async function input(selector,value){await js(`(()=>{const e=document.querySelector(${JSON.stringify(selector)});if(!e)throw Error('Campo no encontrado');Object.getOwnPropertyDescriptor(e instanceof HTMLSelectElement?HTMLSelectElement.prototype:e instanceof HTMLTextAreaElement?HTMLTextAreaElement.prototype:HTMLInputElement.prototype,'value').set.call(e,${JSON.stringify(String(value))});e.dispatchEvent(new Event(e instanceof HTMLSelectElement?'change':'input',{bubbles:true}));})()`);await pause();}
const state=()=>`JSON.parse(localStorage.getItem('agrovio-react-demo-v1'))`;
async function role(value){await input('select[aria-label="Cambiar perfil"]',value);}
await call('Runtime.enable');await call('Page.enable');await call('Emulation.setDeviceMetricsOverride',{width:1440,height:1050,deviceScaleFactor:1,mobile:false});
await call('Page.navigate',{url:'http://127.0.0.1:5174/'});await new Promise(r=>setTimeout(r,800));await js("localStorage.removeItem('agrovio-react-demo-v1');location.reload()");await new Promise(r=>setTimeout(r,700));
await check('!!document.querySelector("#root .site-header")','React monta navegación superior');
await check('document.querySelectorAll(".product").length===3','Comprador ve productos publicados');
await check('[...document.images].every(i=>i.complete&&i.naturalWidth>0)','Recursos visuales cargan');
let shot=await call('Page.captureScreenshot',{format:'png'});await fs.writeFile(out+'/comprador.png',Buffer.from(shot.data,'base64'));
await route('/producto/AGR-9000');await check('!document.querySelector("main").textContent.includes("Carlos Rodríguez")','Proveedor anonimizado antes de conexión');
await click('Desbloquear · 1 crédito');await click('Confirmar · 1 crédito');await check(state()+'.credits===27','Débito de un crédito');
await route('/chat?producto=AGR-9000');await input('input[name="message"]','Hola, quiero comprar');await click('Enviar');await check(state()+'.messages.length===1','Mensaje compartido guardado');
await role('proveedor');await route('/chat?producto=AGR-9000');await check('document.querySelector(".messages").textContent.includes("Hola, quiero comprar")','Proveedor ve mensaje del comprador');
await route('/ofertas');await click('Aceptar');await check(state()+'.deals.some(d=>d.id==="OF-1"&&d.price===2.3&&d.quantity===3000)','Oferta aceptada genera trato con sus condiciones');
await route('/trato/OF-1');await click('Solicitar cierre');await role('comprador');await click('Confirmar condiciones');await role('proveedor');await click('Confirmar cierre final');await check(state()+'.deals.find(d=>d.id==="OF-1").step===3','Tres confirmaciones por roles');
await role('admin');await js('window.confirm=()=>true');await click('Confirmar ingreso recibido');await click('Liberar pago al proveedor');await check(state()+'.deals.find(d=>d.id==="OF-1").payment===2','Custodia secuencial simulada');
await role('proveedor');await route('/publicar');await input('[name="name"]','Mandarina QA React');await input('[name="quantity"]',1200);await input('[name="price"]',2.5);await input('[name="zone"]','Huaura, Lima');await click('Revisar resumen');await click('Confirmar y enviar');await check(state()+'.listings.at(-1).status==="En revisión"','Publicación web crea revisión');
const newId=await js(state()+'.listings.at(-1).id');await role('admin');await route('/revision');await js(`(()=>{const card=[...document.querySelectorAll('article')].find(e=>e.textContent.includes('Mandarina QA React'));[...card.querySelectorAll('button')].find(b=>b.textContent==='Aprobar').click()})()`);await pause();await check(state()+`.listings.find(p=>p.id===${JSON.stringify(newId)}).status==='Publicada'`,'Admin aprueba nueva publicación');
await role('proveedor');await route('/whatsapp');await click('Iniciar conversación');for(const answer of ['Fresa por WhatsApp',1000,4.2,'Huaral, Lima']){await input('.whatsapp-preview input',answer);await click('Siguiente');}await click('Ver resumen');await click('Confirmar y enviar a revisión');await check(state()+'.listings.at(-1).name==="Fresa por WhatsApp"&&'+state()+'.listings.at(-1).status==="En revisión"','Bot guiado crea publicación sin servicio externo');
await route('/');shot=await call('Page.captureScreenshot',{format:'png'});await fs.writeFile(out+'/proveedor.png',Buffer.from(shot.data,'base64'));
await call('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
for(const [r,paths] of [['proveedor',['/','/productos','/ofertas','/publicar','/chat','/whatsapp','/planes','/tratos']],['comprador',['/','/mercado','/industrializados','/ofertas','/chat','/trato/OF-1','/perfil','/precios']],['admin',['/','/revision','/pagos','/usuarios','/movimientos']]]){
 await role(r);for(const path of paths){await route(path);await check('document.documentElement.scrollWidth<=innerWidth+1',`Sin desborde móvil ${r}:${path}`);}
}
await role('proveedor');await route('/');shot=await call('Page.captureScreenshot',{format:'png',captureBeyondViewport:true});await fs.writeFile(out+'/proveedor-movil.png',Buffer.from(shot.data,'base64'));
await role('comprador');await route('/');await js("localStorage.removeItem('agrovio-react-demo-v1')");await check(JSON.stringify(errors.length)+'===0','Sin excepciones JavaScript');
await fs.writeFile(out+'/resultado.json',JSON.stringify({checks,errors},null,2));console.log(JSON.stringify({checks:checks.length,errors:errors.length,artifacts:out}));await call('Browser.close');ws.close();
