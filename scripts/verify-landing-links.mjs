import fs from 'node:fs/promises';
const out='.local/qa-landing-restored';await fs.mkdir(out,{recursive:true});
const targets=await(await fetch('http://127.0.0.1:9335/json')).json(),target=targets.find(t=>t.type==='page');
function session(url){const ws=new WebSocket(url),waiting=new Map();let id=0;const ready=new Promise(r=>ws.addEventListener('open',r,{once:true}));ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.id){const p=waiting.get(m.id);waiting.delete(m.id);m.error?p.reject(m.error):p.resolve(m.result);}});return {ws,async call(method,params={}){await ready;return new Promise((resolve,reject)=>{waiting.set(++id,{resolve,reject});ws.send(JSON.stringify({id,method,params}));});}};}
const s=session(target.webSocketDebuggerUrl);const checks=[];
async function js(expression,other=s){const result=await other.call('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true,userGesture:true});if(result.exceptionDetails)throw Error(JSON.stringify(result.exceptionDetails));return result.result.value;}
async function check(expression,name,other=s){const ok=await js(expression,other);checks.push({name,passed:!!ok});if(!ok)throw Error(name);}
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
await s.call('Page.enable');await s.call('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});await s.call('Page.navigate',{url:'http://127.0.0.1:5173/'});await sleep(1300);
await check('document.title.includes("Comercialización")','Se abre el landing entregado por el cliente');
await check('document.querySelector("main").textContent.length>1500','Contenido original del landing presente');
await check('[...document.querySelectorAll("a")].some(a=>a.textContent.trim()==="Ingresar a la plataforma"&&a.href==="http://127.0.0.1:5175/#/ingreso")','Ingreso apunta directamente al frontend local');
await check('document.querySelector(".agrovio-floating-demo").href==="http://127.0.0.1:5174/"','Botón flotante apunta a la demo');
await check('![...document.querySelectorAll("a")].some(a=>a.href.includes("portal.agrovio.io"))','No hay enlace al portal anterior');
let image=await s.call('Page.captureScreenshot',{format:'png'});await fs.writeFile(out+'/landing.png',Buffer.from(image.data,'base64'));
await js('document.querySelector(".agrovio-floating-demo").click()');await sleep(1600);const after=await(await fetch('http://127.0.0.1:9335/json')).json(),popup=after.find(t=>t.type==='page'&&t.url.startsWith('http://127.0.0.1:5174/'));if(!popup)throw Error('No se abrió el tutorial');const demo=session(popup.webSocketDebuggerUrl);
await check('!!document.querySelector(".tour-player")','El botón abre el tutorial automático en otra pestaña',demo);demo.ws.close();
await s.call('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});await sleep(300);
await check('document.querySelector(".agrovio-floating-demo").getBoundingClientRect().right<=innerWidth&&document.querySelector(".agrovio-floating-demo").getBoundingClientRect().bottom<=innerHeight','Botón flotante visible en móvil');
await check('document.documentElement.scrollWidth<=innerWidth+1','Landing sin desborde horizontal en móvil');
image=await s.call('Page.captureScreenshot',{format:'png'});await fs.writeFile(out+'/landing-movil.png',Buffer.from(image.data,'base64'));
await js('[...document.querySelectorAll("a")].find(a=>a.textContent.trim()==="Ingresar").click()');await sleep(1300);
await check('location.origin==="http://127.0.0.1:5175"&&location.hash.startsWith("#/ingreso")','Ingreso móvil navega al frontend propio');
await check('!!document.querySelector(".live-access")||!!document.querySelector(".main-navigation")','El portal real se abre correctamente');
await s.call('Page.navigate',{url:'http://127.0.0.1:5173/comenzar?plan=pro'});await sleep(1300);
await check('location.origin==="http://127.0.0.1:5175"&&location.hash.includes("plan=pro")','Se conserva el plan desde las llamadas a comenzar');
await fs.writeFile(out+'/resultado.json',JSON.stringify({checks},null,2));console.log(JSON.stringify({checks:checks.length,passed:checks.filter(c=>c.passed).length,out}));await s.call('Browser.close');s.ws.close();
