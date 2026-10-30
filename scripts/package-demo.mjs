import {spawnSync} from 'node:child_process';import fs from 'node:fs';import path from 'node:path';
const root=process.cwd(),dir=path.join(root,'apps/demo/dist');
if(!process.env.npm_execpath)throw Error('Ejecuta npm run package:demo desde la raíz.');
const build=spawnSync(process.execPath,[process.env.npm_execpath,'run','build:demo'],{stdio:'inherit'});if(build.status!==0)process.exit(build.status||1);
fs.mkdirSync('releases',{recursive:true});const zip=path.join(root,'releases/Agrovio-Portal-Netlify.zip');
if(process.platform==='win32'){
 const quote=s=>"'"+s.replaceAll("'","''")+"'";
 const command=`$ErrorActionPreference='Stop'; Add-Type -AssemblyName System.IO.Compression; Add-Type -AssemblyName System.IO.Compression.FileSystem; $root=${quote(dir)}; $dest=${quote(zip)}; if(Test-Path -LiteralPath $dest){Remove-Item -LiteralPath $dest}; $z=[System.IO.Compression.ZipFile]::Open($dest,[System.IO.Compression.ZipArchiveMode]::Create); try {Get-ChildItem -LiteralPath $root -File -Recurse | ForEach-Object { $entry=$_.FullName.Substring($root.Length+1).Replace('\\','/'); [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($z,$_.FullName,$entry) | Out-Null }} finally {$z.Dispose()}`;
 const result=spawnSync('powershell.exe',['-NoProfile','-Command',command],{stdio:'inherit'});if(result.status!==0)process.exit(1);
}else{if(fs.existsSync(zip))fs.unlinkSync(zip);const result=spawnSync('zip',['-qr',zip,'.'],{cwd:dir,stdio:'inherit'});if(result.status!==0)throw Error('Instala zip o publica apps/demo/dist directamente.');}
console.log('ZIP de demo generado: '+zip);
