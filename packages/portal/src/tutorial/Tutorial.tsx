import {useEffect,useRef,useState} from 'react';
import {useLocation,useNavigate} from 'react-router-dom';
import {Play,Pause,SkipBack,SkipForward,X,RotateCcw,Check,MonitorPlay} from 'lucide-react';
import type {State} from '@agrovio/domain';
import {useStore} from '../store';
import {createTour,type TourFrame} from './scenario';
import './tutorial.css';

export function Tutorial(){
  const {state,preview}=useStore(),navigate=useNavigate(),location=useLocation();
  const [frames,setFrames]=useState<TourFrame[]>([]),[index,setIndex]=useState(-1),[playing,setPlaying]=useState(false),[elapsed,setElapsed]=useState(0),[speed,setSpeed]=useState(1);
  const [highlight,setHighlight]=useState<{left:number;top:number;width:number;height:number}|null>(null);
  const snapshot=useRef<{state:State;path:string}|null>(null),panel=useRef<HTMLElement>(null),closeRef=useRef<()=>void>(()=>{}),frame=frames[index],active=index>=0;
  const previewRef=useRef(preview);previewRef.current=preview;
  function start(){snapshot.current={state:structuredClone(state),path:location.pathname+location.search};setFrames(createTour());setIndex(0);setElapsed(0);setPlaying(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);}
  function close(){const saved=snapshot.current;if(saved){previewRef.current(saved.state);navigate(saved.path);}snapshot.current=null;setIndex(-1);setPlaying(false);setElapsed(0);setHighlight(null);}
  useEffect(()=>{if(new URLSearchParams(window.location.search).get('manual')!=='1')start();},[]);
  closeRef.current=close;
  function step(next:number){setIndex(Math.max(0,Math.min(frames.length-1,next)));setElapsed(0);}
  useEffect(()=>{if(!frame)return;previewRef.current(frame.state);navigate(frame.path);setElapsed(0);setHighlight(null);},[frame,navigate]);
  useEffect(()=>{if(!active||!playing||!frame)return;const timer=setInterval(()=>setElapsed(value=>value+100),100);return()=>clearInterval(timer);},[active,playing,frame]);
  useEffect(()=>{if(!frame||!playing)return;if(elapsed>=frame.duration/speed){if(index===frames.length-1)setPlaying(false);else step(index+1);}},[elapsed,frame,playing,index,frames.length,speed]);
  useEffect(()=>{if(!active||!frame)return;const find=()=>document.querySelector(frame.target);let timer=setTimeout(()=>{const element=find();if(element){element.scrollIntoView({block:'center',behavior:'instant'});const heading=document.querySelector('.site-header');const top=heading?.getBoundingClientRect().bottom||0;if(element.getBoundingClientRect().top<top+12)window.scrollBy(0,element.getBoundingClientRect().top-top-20);}update();},160);
    function update(){const el=find();if(!el){setHighlight(null);return;}const r=el.getBoundingClientRect();const top=Math.max(0,r.top-7),bottom=Math.min(innerHeight,r.bottom+7);setHighlight(bottom>top?{left:Math.max(6,r.left-7),top,width:Math.min(innerWidth-12,r.width+14),height:bottom-top}:null);}
    window.addEventListener('resize',update);window.addEventListener('scroll',update);return()=>{clearTimeout(timer);window.removeEventListener('resize',update);window.removeEventListener('scroll',update);};
  },[active,frame]);
  useEffect(()=>{if(!active)return;const previous=document.activeElement as HTMLElement|null;const root=panel.current;root?.focus({preventScroll:true});const listener=(e:KeyboardEvent)=>{if(e.key==='Escape'){e.preventDefault();closeRef.current();}if(e.key==='Tab'&&root){const controls=[...root.querySelectorAll<HTMLElement>('button:not(:disabled),select')];const first=controls[0],last=controls.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}}};document.addEventListener('keydown',listener);return()=>{document.removeEventListener('keydown',listener);if(previous?.isConnected)previous.focus({preventScroll:true});};},[active]);
  if(!active)return <button className="tour-launch" onClick={start}><MonitorPlay size={19}/><span>Ver recorrido automático</span></button>;
  const last=index===frames.length-1,duration=frame?.duration/speed||1,progress=Math.min(100,elapsed/duration*100);
  return <><div className="tour-shield" aria-hidden="true"/><div className="tour-mode-label" aria-hidden="true"><span className="tour-record-dot"/>{frame?.chapter} · Paso {index+1} de {frames.length}</div>{highlight&&<div className="tour-spotlight" style={highlight} aria-hidden="true"/>}<section ref={panel} className="tour-player" role="dialog" aria-modal="true" aria-labelledby="tour-title" aria-describedby="tour-description" tabIndex={-1}>
    <div className="tour-player-header"><span className="tour-chapter">RECORRIDO GUIADO · {frame?.chapter}</span><button className="tour-icon" onClick={close} aria-label="Cerrar recorrido"><X size={19}/></button></div>
    <div className="tour-progress" role="progressbar" aria-label="Progreso del recorrido" aria-valuenow={index+1} aria-valuemin={0} aria-valuemax={frames.length}><span style={{width:`${(index+progress/100)/frames.length*100}%`}}/></div>
    <div className="tour-explanation"><span className="tour-step">{String(index+1).padStart(2,'0')} / {frames.length}</span><h2 id="tour-title">{frame?.title}</h2><p id="tour-description" aria-live="polite">{frame?.description}</p></div>
    <div className="tour-controls"><button className="tour-icon" disabled={index===0} onClick={()=>step(index-1)} aria-label="Paso anterior"><SkipBack size={19}/></button><button className="tour-play" onClick={()=>{if(last&&elapsed>=duration){step(0);setPlaying(true);}else setPlaying(!playing);}} aria-label={playing?'Pausar recorrido':'Reproducir recorrido'}>{playing?<Pause size={20}/>:<Play size={20}/>}<span>{playing?'Pausar':'Reproducir'}</span></button><button className="tour-icon" disabled={last} onClick={()=>step(index+1)} aria-label="Paso siguiente"><SkipForward size={19}/></button><label className="tour-speed"><span>Velocidad</span><select aria-label="Velocidad del recorrido" value={speed} onChange={e=>setSpeed(Number(e.target.value))}><option value={1}>1×</option><option value={1.5}>1,5×</option><option value={2}>2×</option></select></label><button className="tour-icon" onClick={()=>{step(0);setPlaying(true);}} aria-label="Repetir recorrido"><RotateCcw size={18}/></button></div>
    <div className="tour-player-footer"><small>{playing?'Avanza automáticamente. Puedes pausar cuando quieras.':'En pausa. Puedes avanzar paso a paso.'}</small>{last&&<button className="tour-finish" onClick={close}><Check size={16}/>Terminar</button>}</div>
  </section></>;
}
