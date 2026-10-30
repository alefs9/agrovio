import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { frontendEntry } from '../config/destinations';

export function Comenzar() {
  const { search } = useLocation();
  const target = frontendEntry(search);
  useEffect(() => { window.location.replace(target); }, [target]);
  return <section className="max-w-xl mx-auto px-6 py-20 text-center"><h1 className="text-2xl font-bold text-agrovio-dark">Abriendo la plataforma…</h1><p className="mt-4">Si no se abre automáticamente, <a className="underline" href={target}>continúa al portal de Agrovio</a>.</p></section>;
}
export default Comenzar;
