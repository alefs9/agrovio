import { ArrowUpRight, MonitorPlay } from 'lucide-react';
import { demoUrl } from '../../config/destinations';

export function FloatingDemoButton() {
  return <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="agrovio-floating-demo" aria-label="Ver demo de Agrovio, abre en una nueva pestaña"><MonitorPlay size={21} aria-hidden="true"/><span>Ver demo</span><ArrowUpRight size={17} aria-hidden="true"/></a>;
}
