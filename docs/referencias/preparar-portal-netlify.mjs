import fs from 'node:fs';
const file='portal-propuesta/app.js';
let code=fs.readFileSync(file,'utf8');
code=code.replace('<span class="demo-tag">DEMO INTERACTIVA</span>','');
code=code.replace('Prototipo · Datos ilustrativos &nbsp; · &nbsp; <button data-action="guide">Guía de la demo</button> &nbsp; · &nbsp; ','');
code=code.replace('Salir de la demo','Salir');
code=code.replace('Cambiar vista de demostración','Cambiar perfil del portal');
// El enlace accesible debe enfocar el contenido sin activar una ruta inexistente.
if(!code.includes("closest('.skip')"))code+=`\ndocument.querySelector('.skip').addEventListener('click',e=>{e.preventDefault();document.getElementById('content')?.focus();});
document.addEventListener('click',e=>{const sidebar=document.getElementById('sidebar');if(sidebar?.classList.contains('open')&&!e.target.closest('.sidebar,.mobile-toggle')){sidebar.classList.remove('open');document.querySelector('.mobile-toggle')?.setAttribute('aria-expanded','false');}});
`;
fs.writeFileSync(file,code);
let html=fs.readFileSync('portal-propuesta/index.html','utf8');
html=html.replace('<link rel="icon"','<meta name="robots" content="noindex,nofollow"><link rel="icon"');
html=html.replace('href="styles.css"','href="styles.css?v=2"').replace('src="app.js"','src="app.js?v=2"');
fs.writeFileSync('portal-propuesta/index.html',html);
