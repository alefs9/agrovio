import {createContext,useContext,useState,useEffect,type ReactNode} from 'react';
import {seed,transition,type Action,type State} from '@agrovio/domain';
const KEY='agrovio-react-demo-v1';
function load():State {try {const s=JSON.parse(localStorage.getItem(KEY)||'null');if(s?.version===1&&Array.isArray(s.listings)&&Array.isArray(s.offers)&&Array.isArray(s.deals)&&Array.isArray(s.users)&&Array.isArray(s.messages)&&Array.isArray(s.connections)&&Array.isArray(s.saved)&&['comprador','proveedor','admin'].includes(s.role)&&Number.isFinite(s.credits))return s;}catch{/* Sin almacenamiento: usar memoria. */}return seed();}
const Context=createContext<null|{state:State;act:(a:Action)=>boolean;reset:()=>void;notice:string;notify:(text:string)=>void}>(null);
export function Store({children}:{children:ReactNode}){const [state,set]=useState(load),[notice,notify]=useState('');
 useEffect(()=>{if(!notice)return;const timer=setTimeout(()=>notify(''),4500);return()=>clearTimeout(timer);},[notice]);
 function persist(next:State){set(next);try{localStorage.setItem(KEY,JSON.stringify(next));}catch{notify('Cambios guardados en memoria. El almacenamiento local está lleno o deshabilitado.');}}
 function act(a:Action){try {persist(transition(state,a));notify(a.type==='role'?'Perfil actualizado.':'Cambio guardado en la simulación.');return true;}catch(error){notify(error instanceof Error?error.message:'No se pudo completar la acción.');return false;}}
 return <Context.Provider value={{state,act,reset:()=>{persist(seed());notify('Recorrido reiniciado.');},notice,notify}}>{children}</Context.Provider>;
}
export function useStore(){const s=useContext(Context);if(!s)throw Error('Falta Store');return s;}
