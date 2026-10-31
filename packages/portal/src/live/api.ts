import type {Action,State} from '@agrovio/domain';
const root=(import.meta.env.VITE_API_URL||'').replace(/\/$/,'');
export class ServiceError extends Error {constructor(message:string,public status:number){super(message);}}
export async function request<T>(path:string,options:RequestInit={}):Promise<T>{const response=await fetch(root+'/api/v1'+path,{credentials:'include',signal:AbortSignal.timeout(15000),...options,headers:{'Content-Type':'application/json',...options.headers}});let data;try{data=await response.json();}catch{throw new ServiceError('El servicio no está disponible. Inténtalo nuevamente.',response.status);}
 if(!response.ok){const detail=typeof data.detail==='string'?data.detail:'Revisa los datos enviados.';throw new ServiceError(detail,response.status);}return data as T;}
const post=(path:string,body:unknown={})=>request(path,{method:'POST',body:JSON.stringify(body)});
export async function loadState(){const state=await request<State>('/state');state.listings=state.listings.map(p=>({...p,photo:p.photo?(p.photo.startsWith('/media/')?root+p.photo:p.photo):'/assets/product-placeholder.svg'}));return state;}
export async function perform(action:Action,state:State):Promise<void>{switch(action.type){
 case 'role':throw Error('Inicia sesión con la cuenta del otro perfil.');
 case 'save':await post(`/listings/${action.id}/saved`);break;
 case 'connect':await post(`/listings/${action.id}/connection`);break;
 case 'publish':{const p=action.listing;await post('/listings',{id:p.id,name:p.name,category:p.category,type:p.type,zone:p.zone,quantity:p.quantity,price:p.price,photo:p.photo});break;}
 case 'edit':await request(`/listings/${action.id}`,{method:'PATCH',body:JSON.stringify(action.changes)});break;
 case 'cancel':await post(`/listings/${action.id}/cancel`);break;
 case 'review':await post(`/listings/${action.id}/review`,{approve:action.approve});break;
 case 'offer':{const o=action.offer;await post(`/listings/${o.listingId}/offers`,{id:o.id,quantity:o.quantity,price:o.price,note:o.note});break;}
 case 'respond':await post(`/offers/${action.id}/response`,{status:action.status,...(action.price!==undefined?{price:action.price}:{})});break;
 case 'message':{const m=action.message;await post(`/listings/${m.listingId}/messages`,{id:m.id,text:m.text,buyer_id:m.buyerId});break;}
 case 'close':await post(`/deals/${action.id}/confirmations`);break;
 case 'outside':await post(`/deals/${action.id}/outside`);break;
 case 'payment':{const d=state.deals.find(d=>d.id===action.id);const reference=window.prompt(d?.payment===0?'Referencia del ingreso verificado:':'Referencia de la transferencia al proveedor:');if(!reference)throw Error('No se registró el movimiento.');await post(`/deals/${action.id}/payments`,{action:d?.payment===0?'receive':'release',reference});break;}
 case 'rate':await post(`/deals/${action.id}/ratings`,{rating:action.rating});break;
 case 'user':await post(`/admin/users/${action.id}/status`);break;
 case 'profile':await request('/me',{method:'PATCH',body:JSON.stringify(action.profile)});break;
 case 'cycle':throw Error('La activación de planes se gestiona por administración.');
 }}
export interface Bot {id:string;step:number;values:Record<string,string|number>;confirmed:boolean;}
export const botStart=()=>post('/whatsapp/sessions') as Promise<Bot>;
export const botAnswer=(id:string,text:string)=>post(`/whatsapp/sessions/${id}/answers`,{text}) as Promise<Bot>;
