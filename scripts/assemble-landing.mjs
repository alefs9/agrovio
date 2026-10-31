import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const landing=path.join(root,'apps/landing/dist');
if(!fs.existsSync(path.join(landing,'index.html')))throw Error('Primero compila el landing.');
for(const [app,mount]of [['frontend','portal'],['demo','demo']]){
 const source=path.join(root,'apps',app,'dist'),target=path.join(landing,mount);
 if(!fs.existsSync(path.join(source,'index.html')))throw Error('Falta compilar '+app);
 fs.cpSync(source,target,{recursive:true});
}
console.log('Landing preparado con /portal/ y /demo/. Publicar apps/landing/dist.');

if(process.env.API_PROXY_URL){const url=new URL(process.env.API_PROXY_URL);if(url.protocol!=='https:'||url.username||url.password)throw Error('API_PROXY_URL debe ser un origen HTTPS sin credenciales.');const base=url.href.replace(/\/$/,'');fs.writeFileSync(path.join(landing,'_redirects'),'/api/* '+base+'/api/:splat 200\n/media/* '+base+'/media/:splat 200\n');}
