import {spawn} from 'node:child_process';import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),children=[];let stopping=false;
function stop(code=0){if(stopping)return;stopping=true;for(const child of children){if(child.exitCode===null)child.kill();}setTimeout(()=>process.exit(code),150);}
process.on('SIGINT',()=>stop());process.on('SIGTERM',()=>stop());
const vite=path.join(root,'node_modules/vite/bin/vite.js');
const python=path.join(root,process.platform==='win32'?'backend/.venv/Scripts/python.exe':'backend/.venv/bin/python');
const apps=[
 {name:'Servicio Python',url:'http://127.0.0.1:8000/api/v1/status',display:'http://127.0.0.1:8000/docs',check:text=>{try{return JSON.parse(text).business_api_ready===true;}catch{return false;}},command:python,args:['-m','uvicorn','app.main:app','--app-dir','backend','--host','127.0.0.1','--port','8000'],cwd:root},
 ...[['Landing','landing',5173,'Comercialización'],['Portal','apps/frontend',5175,'Mi portal'],['Demo','apps/demo',5174,'demostración']].map(([name,dir,port,title])=>({name,url:`http://127.0.0.1:${port}/`,display:`http://127.0.0.1:${port}/`,check:text=>text.includes('<title>')&&text.includes(title),command:process.execPath,args:[vite,'--host','127.0.0.1','--port',String(port),'--strictPort'],cwd:path.join(root,dir)}))
];
try{
 for(const app of apps){let existing=false;try{const response=await fetch(app.url,{signal:AbortSignal.timeout(1200)});existing=response.ok&&app.check(await response.text());}catch{/* Se iniciará si está disponible. */}
  if(existing){console.log(`✓ ${app.name} ya está abierto: ${app.display}`);continue;}
  if(!fs.existsSync(app.command))throw Error('No se encontró el entorno Python; consulta backend/README.md.');
  const child=spawn(app.command,app.args,{cwd:app.cwd,stdio:['ignore','inherit','inherit']});children.push(child);
  child.on('error',error=>{console.error(app.name+': '+error.message);stop(1);});child.on('exit',code=>{if(!stopping){console.error(`${app.name} terminó. Comprueba el puerto correspondiente.`);stop(code||1);}});
  let ready=false,lastError="Sin respuesta";const deadline=Date.now()+90000;console.log(`Iniciando ${app.name}: ${app.display}`);while(Date.now()<deadline&&!stopping){try{const response=await fetch(app.url,{signal:AbortSignal.timeout(10000)});const body=await response.text();if(response.ok&&app.check(body)){ready=true;break;}lastError=`HTTP ${response.status}: el contenido no corresponde a ${app.name}`;}catch(error){lastError=error.message;}await new Promise(r=>setTimeout(r,500));}
  if(!ready)throw Error(`No se pudo iniciar ${app.name} en ${app.url} después de 90 segundos. Detalle: ${lastError}. Revisa si el puerto está ocupado por otra aplicación.`);
 }
 console.log('\nAbre el landing: http://127.0.0.1:5173\nIngresar → portal · Ver demo → tutorial\nCtrl+C detiene únicamente los procesos iniciados por este comando.\n');
 if(!children.length)process.exit(0);
}catch(error){console.error(error.message);stop(1);}
