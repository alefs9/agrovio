export type Role = 'comprador' | 'proveedor' | 'admin';
export type Status = 'Eliminada' | 'En revisión' | 'Publicada' | 'Requiere corrección' | 'Cancelada';
export interface Listing { id: string; owner: string; name: string; category: string; type: 'cosecha' | 'industrial'; zone: string; quantity: number; price: number; photo: string; status: Status; createdAt: string; publishedAt?: string; contact?:{name:string;email:string;phone:string}|null; }
export interface Offer {id:string;listingId:string;buyer:string;quantity:number;price:number;note:string;status:'Pendiente'|'Aceptada'|'Rechazada'|'Contraoferta';}
export interface Deal {id:string;listingId:string;buyer:string;quantity:number;price:number;step:0|1|2|3;payment:0|1|2;outside:boolean;rating?:number;}
export interface Message {id:string;listingId:string;role:Role;text:string;at:string;buyerId?:string;}
export interface State {currentUserId?:string;subscription?:{name:string;active:boolean;expires:string};conversations?:{listingId:string;buyerId:string;buyerName:string}[];version:1;role:Role;credits:number;saved:string[];connections:string[];listings:Listing[];offers:Offer[];deals:Deal[];messages:Message[];usedSlots:number;slotLimit:number;users:{id:string;name:string;active:boolean;role?:Role;email?:string}[];profile:{name:string;company:string;email:string;phone?:string};}
export type Action =
 | {type:'role';role:Role} | {type:'save';id:string} | {type:'connect';id:string}
 | {type:'publish';listing:Listing} | {type:'edit';id:string;changes:Pick<Listing,'name'|'price'|'quantity'|'zone'>;now?:string}
 | {type:'cancel';id:string} | {type:'review';id:string;approve:boolean}
 | {type:'offer';offer:Offer} | {type:'respond';id:string;status:Offer['status'];price?:number}
 | {type:'message';message:Message} | {type:'close';id:string} | {type:'outside';id:string}
 | {type:'payment';id:string} | {type:'rate';id:string;rating:number} | {type:'user';id:string}
 | {type:'profile';profile:State['profile']} | {type:'cycle'};
export const formatMoney = (n:number) => 'S/ '+n.toLocaleString('es-PE',{minimumFractionDigits:2,maximumFractionDigits:2});
export const newId = () => crypto.randomUUID();
export function seed():State {const now=Date.now();return {version:1,role:'comprador',credits:28,saved:[],connections:[],usedSlots:4,slotLimit:8,
 profile:{name:'Bruno Gómez',company:'Fruit Fresh Export',email:'bruno@ejemplo.test'},
 users:[{id:'buyer',name:'Bruno Gómez',active:true},{id:'seller',name:'Carlos Rodríguez',active:true}],
 listings:[
 {id:'AGR-9000',owner:'Carlos Rodríguez',name:'Mandarina W. Murcott',category:'Cítricos',type:'cosecha',zone:'Huaura, Lima',quantity:4500,price:2.4,photo:'/assets/mandarina.jpg',status:'Publicada',createdAt:new Date(now-36e5).toISOString(),publishedAt:new Date(now-36e5).toISOString()},
 {id:'AGR-9001',owner:'Carlos Rodríguez',name:'Fresa San Andreas',category:'Berries',type:'cosecha',zone:'Huaral, Lima',quantity:2800,price:4.8,photo:'/assets/fresa.jpg',status:'Publicada',createdAt:new Date(now-1728e5).toISOString(),publishedAt:new Date(now-1728e5).toISOString()},
 {id:'AGR-9002',owner:'Carlos Rodríguez',name:'Pulpa de fresa',category:'Pulpas',type:'industrial',zone:'Ica, Perú',quantity:1500,price:7.5,photo:'/assets/fresa.jpg',status:'Publicada',createdAt:new Date(now).toISOString(),publishedAt:new Date(now).toISOString()},
 {id:'AGR-9003',owner:'Carlos Rodríguez',name:'Mandarina para proceso',category:'Cítricos',type:'cosecha',zone:'Chincha, Ica',quantity:5000,price:2,photo:'/assets/mandarina.jpg',status:'En revisión',createdAt:new Date(now).toISOString()}
 ],offers:[{id:'OF-1',listingId:'AGR-9000',buyer:'Bruno Gómez',price:2.3,quantity:3000,note:'Recojo en origen esta semana.',status:'Pendiente'}],
 deals:[{id:'TR-1',listingId:'AGR-9000',buyer:'Bruno Gómez',quantity:1000,price:2.4,step:0,payment:0,outside:false}],messages:[]};}
export function editable(p:Listing,now=Date.now()){return p.status==='Requiere corrección'||(p.status==='Publicada'&&!!p.publishedAt&&now-new Date(p.publishedAt).getTime()<864e5);}
function requireRole(s:State,role:Role){if(s.role!==role)throw Error('Cambia al perfil correspondiente para realizar esta acción.');}
export function transition(state:State,a:Action):State {const s=structuredClone(state);const listing=(id:string)=>{const p=s.listings.find(p=>p.id===id);if(!p)throw Error('Publicación no encontrada.');return p;};
 const deal=(id:string)=>{const d=s.deals.find(d=>d.id===id);if(!d)throw Error('Trato no encontrado.');return d;};
 switch(a.type){
 case 'role':s.role=a.role;break;
 case 'save':requireRole(s,'comprador');listing(a.id);s.saved=s.saved.includes(a.id)?s.saved.filter(id=>id!==a.id):[...s.saved,a.id];break;
 case 'connect':{requireRole(s,'comprador');if(listing(a.id).status!=='Publicada')throw Error('El producto no está publicado.');if(s.connections.includes(a.id))return s;if(s.credits<1)throw Error('No tienes créditos. Simula la renovación desde Mi plan.');s.credits--;s.connections.push(a.id);break;}
 case 'publish':{requireRole(s,'proveedor');if(s.usedSlots>=s.slotLimit)throw Error('Alcanzaste los cupos de tu plan.');const p=a.listing;if(!p.name.trim()||!p.zone.trim()||!Number.isFinite(p.price)||!Number.isFinite(p.quantity)||p.price<=0||p.quantity<1)throw Error('Completa producto, zona, cantidad y precio válidos.');if(s.listings.some(x=>x.id===p.id))return s;s.listings.push({...p,status:'En revisión',publishedAt:undefined});s.usedSlots++;break;}
 case 'edit':{requireRole(s,'proveedor');const p=listing(a.id);if(!editable(p,a.now?new Date(a.now).getTime():Date.now()))throw Error('La ventana de edición terminó.');if(!a.changes.name.trim()||!a.changes.zone.trim()||!Number.isFinite(a.changes.price)||!Number.isFinite(a.changes.quantity)||a.changes.price<=0||a.changes.quantity<1)throw Error('Revisa los datos.');Object.assign(p,a.changes,{status:'En revisión'});break;}
 case 'cancel':requireRole(s,'proveedor');listing(a.id).status='Cancelada';break;
 case 'review':{requireRole(s,'admin');const p=listing(a.id);if(p.status!=='En revisión')throw Error('Esta publicación ya fue revisada.');p.status=a.approve?'Publicada':'Requiere corrección';if(a.approve)p.publishedAt=new Date().toISOString();break;}
 case 'offer':{requireRole(s,'comprador');const p=listing(a.offer.listingId);if(p.status!=='Publicada'||a.offer.quantity<1||a.offer.quantity>p.quantity||!Number.isFinite(a.offer.quantity)||!Number.isFinite(a.offer.price)||a.offer.price<=0)throw Error('Revisa el precio y el volumen disponible.');s.offers.push(a.offer);break;}
 case 'respond':{const o=s.offers.find(o=>o.id===a.id);if(!o)throw Error('Oferta no encontrada.');if(s.role==='admin')throw Error('La administración no negocia ofertas.');if(s.role==='comprador'&&(o.status!=='Contraoferta'||!['Aceptada','Rechazada'].includes(a.status)))throw Error('Solo puedes responder a una contraoferta.');if(s.role==='proveedor'&&o.status!=='Pendiente')throw Error('La oferta ya fue respondida.');if(a.price!==undefined){if(!Number.isFinite(a.price)||a.price<=0)throw Error('Precio inválido.');o.price=a.price;}o.status=a.status;if(a.status==='Aceptada'&&!s.deals.some(d=>d.id===o.id))s.deals.push({id:o.id,listingId:o.listingId,buyer:o.buyer,quantity:o.quantity,price:o.price,step:0,payment:0,outside:false});break;}
 case 'message':{if(s.role==='admin')throw Error('Cambia a comprador o proveedor.');listing(a.message.listingId);if(s.role==='comprador'&&!s.connections.includes(a.message.listingId))throw Error('Conecta con esta publicación antes de escribir.');if(!a.message.text.trim())throw Error('Escribe un mensaje.');s.messages.push({...a.message,role:s.role});break;}
 case 'close':{const d=deal(a.id);if(d.outside||d.step===3)throw Error('El trato ya está registrado.');requireRole(s,d.step===1?'comprador':'proveedor');d.step=(d.step+1) as Deal['step'];break;}
 case 'outside':{const d=deal(a.id);if(s.role==='admin'||d.step===3||d.payment>0)throw Error('No se puede cambiar la modalidad de este trato.');d.outside=true;break;}
 case 'payment':{requireRole(s,'admin');const d=deal(a.id);if(d.outside||d.step!==3||d.payment===2)throw Error('Primero deben confirmar el trato.');d.payment=(d.payment+1) as Deal['payment'];break;}
 case 'rate':{const d=deal(a.id);if(s.role==='admin'||d.payment!==2||!Number.isInteger(a.rating)||a.rating<1||a.rating>5)throw Error('La calificación requiere un pago liberado y de 1 a 5 estrellas.');d.rating=a.rating;break;}
 case 'user':{requireRole(s,'admin');const u=s.users.find(u=>u.id===a.id);if(!u)throw Error('Usuario no encontrado.');u.active=!u.active;break;}
 case 'profile':s.profile=a.profile;break;
 case 'cycle':requireRole(s,'comprador');s.credits=30;break;
 }return s;
}
