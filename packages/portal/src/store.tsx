import {createContext,useContext,useState,useEffect,type ReactNode} from 'react';
import {seed,transition,type Action,type State} from '@agrovio/domain';
const KEY='agrovio-react-demo-v1';
function load():State {try{const s=JSON.parse(localStorage.getItem(KEY)||'null');if(s?.version===1&&Array.isArray(s.listings)&&Array.isArray(s.offers)&&Array.isArray(s.deals)&&Array.isArray(s.messages)&&Array.isArray(s.connections)&&Array.isArray(s.users)&&Array.isArray(s.saved))return s;}catch{/* El recorrido sigue disponible en memoria. */}return seed();}
export interface StoreValue {state:State;act:(a:Action)=>Promise<boolean>;reset:()=>void;notice:string;notify:(text:string)=>void;preview:(state:State)=>void;refresh:()=>Promise<void>;logout:()=>Promise<void>;live:boolean;busy:boolean;}
export const StoreContext=createContext<StoreValue|null>(null);
export function Store({children}:{children:ReactNode}){const [state,set]=useState(load),[notice,notify]=useState('');useEffect(()=>{if(!notice)return;const timer=setTimeout(()=>notify(''),4500);return()=>clearTimeout(timer);},[notice]);
 function persist(next:State){set(next);try{localStorage.setItem(KEY,JSON.stringify(next));}catch{notify('El almacenamiento está lleno. Los cambios se conservan mientras mantengas abierta la página.');}}
 async function act(a:Action){try{persist(transition(state,a));notify(a.type==='role'?'Perfil actualizado.':'Cambio guardado en el recorrido.');return true;}catch(error){notify(error instanceof Error?error.message:'No se pudo completar la acción.');return false;}}
 return <StoreContext.Provider value={{state,act,reset:()=>{persist(seed());notify('Recorrido reiniciado.');},notice,notify,preview:next=>{set(next);notify('');},refresh:async()=>{},logout:async()=>{},live:false,busy:false}}>{children}</StoreContext.Provider>;
}
export function useStore(){const value=useContext(StoreContext);if(!value)throw Error('No se pudo abrir tu espacio.');return value;}
