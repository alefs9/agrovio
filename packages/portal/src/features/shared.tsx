import {useState,type FormEvent} from 'react';import {Link,useNavigate,useParams,useSearchParams} from 'react-router-dom';
import {Plus,ArrowRight,MessageCircle,Leaf,Handshake,Wallet,Search,ShieldCheck} from 'lucide-react';
import {editable,formatMoney,newId,type Listing,type Offer} from '@agrovio/domain';import {useStore} from '../store';import {Heading,Badge,Empty,Modal,Product,total} from '../components';
export const text=(f:FormData,key:string)=>String(f.get(key)||'').trim();
export function Notice({children}:{children:React.ReactNode}){return <div className="notice"><ShieldCheck size={19}/><span>{children}</span></div>;}
export function Cards({children}:{children:React.ReactNode}){return <section className="task-grid">{children}</section>;}
export function Task({to,title,sub,icon:Icon=ArrowRight}:{to:string;title:string;sub:string;icon?:typeof ArrowRight}){return <Link className="task-card" to={to}><span className="task-icon"><Icon/></span><div><h3>{title}</h3><p>{sub}</p></div><ArrowRight size={18}/></Link>;}
