import {assetUrl} from '../assets';
import {useState,type FormEvent} from 'react';import {Link,useNavigate,useParams,useSearchParams} from 'react-router-dom';
import {Plus,ArrowRight,MessageCircle,Leaf,Handshake,Wallet,Search,ShieldCheck} from 'lucide-react';
import {editable,formatMoney,newId,type Listing,type Offer} from '@agrovio/domain';import {useStore} from '../store';import {Heading,Badge,Empty,Modal,Product,total} from '../components';
import {text,Notice,Cards,Task} from './shared';
export function Review(){const {state,act}=useStore();const list=state.listings.filter(p=>p.status==='En revisión');return <><Heading title="Revisar publicaciones" sub="Valida los datos antes de mostrarlos al mercado."/>{list.map(p=><article className="card deal-row" key={p.id}><div><h2>{p.name}</h2><p>{p.zone} · {p.quantity} kg · {formatMoney(p.price)}/kg</p><img className="file-preview" src={assetUrl(p.photo)} alt={p.name}/></div><div className="button-group"><button className="btn primary" onClick={()=>act({type:'review',id:p.id,approve:true})}>Aprobar</button><button className="btn" onClick={()=>act({type:'review',id:p.id,approve:false})}>Pedir correcciones</button></div></article>)}{!list.length&&<Empty text="Todo al día. No hay fichas pendientes."/>}</>;}

export function Accounts(){const {state,act}=useStore();return <><Heading title="Usuarios y accesos" sub="Los cambios de estado solo afectan al registro local de esta demo."/>{state.users.map(u=><article className="card deal-row" key={u.id}><div><h3>{u.name}</h3><Badge>{u.active?'Activo':'Suspendido'}</Badge></div><button onClick={()=>{if(confirm('¿Cambiar el estado de esta cuenta simulada?'))act({type:'user',id:u.id});}}>{u.active?'Suspender':'Reactivar'}</button></article>)}</>;}

