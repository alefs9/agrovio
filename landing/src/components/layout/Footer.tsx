import { frontendEntry } from '../../config/destinations';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Función para manejar el scroll suave a las secciones de Recursos
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-white text-slate-600 pt-16 pb-12 border-t border-slate-200 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          
          {/* Columna 1: Brand / Eslogan */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-agrovio-gradient flex items-center justify-center text-white shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-transform duration-300">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-slate-900 tracking-tight">
                agrovio<span className="text-agrovio-medium">.</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
              La primera plataforma B2B de comercialización poscosecha del Perú. Conectando la oferta del campo con compradores e industrias calificadas.
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] font-bold text-agrovio-dark">
              <ShieldCheck className="w-4 h-4 text-agrovio-medium" />
              <span>Red Comercial 100% Verificada</span>
            </div>
          </div>

          {/* Columna 2: Navegación de la Plataforma */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-4">
              Plataforma
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-500">
              <li>
                <Link to="/proveedores" className="hover:text-agrovio-medium hover:translate-x-1 inline-block transition-all duration-150">
                  Para Proveedores
                </Link>
              </li>
              <li>
                <Link to="/compradores" className="hover:text-agrovio-medium hover:translate-x-1 inline-block transition-all duration-150">
                  Para Compradores
                </Link>
              </li>
              <li>
                <Link to="/suscripciones" className="hover:text-agrovio-medium hover:translate-x-1 inline-block transition-all duration-150">
                  Planes y Suscripciones
                </Link>
              </li>
              <li>
                <Link 
                  to="/comofunciona" 
                  className="hover:text-agrovio-medium hover:translate-x-1 inline-block transition-all duration-150"
                >
                  Cómo funciona Agrovio
                </Link>
              </li>
              <li>
                <a href={frontendEntry()} className="hover:text-agrovio-medium hover:translate-x-1 inline-block transition-all duration-150">
                  Ingresar a la plataforma
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Recursos */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-4">
              Recursos
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-500">
              <li>
                <a 
                  href="#voces-del-campo" 
                  onClick={(e) => handleAnchorClick(e, 'voces-del-campo')} 
                  className="hover:text-agrovio-medium hover:translate-x-1 inline-block transition-all duration-150"
                >
                  Voces del campo
                </a>
              </li>
              <li>
                <a 
                  href="#casos-de-uso" 
                  onClick={(e) => handleAnchorClick(e, 'casos-de-uso')} 
                  className="hover:text-agrovio-medium hover:translate-x-1 inline-block transition-all duration-150"
                >
                  Casos de uso
                </a>
              </li>
              <li>
                <a 
                  href="#sobre-nosotros" 
                  onClick={(e) => handleAnchorClick(e, 'sobre-nosotros')} 
                  className="hover:text-agrovio-medium hover:translate-x-1 inline-block transition-all duration-150"
                >
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={(e) => handleAnchorClick(e, 'faq')} 
                  className="hover:text-agrovio-medium hover:translate-x-1 inline-block transition-all duration-150"
                >
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="space-y-3.5 text-xs sm:text-sm text-slate-500">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-4">
              Contacto B2B
            </h4>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-agrovio-medium flex-shrink-0" />
              <a 
                href="mailto:agrovio.io@gmail.com" 
                className="hover:text-agrovio-medium hover:underline transition-colors font-medium text-slate-700"
              >
                Agrovio.io@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-agrovio-medium flex-shrink-0" />
              <a 
                href="https://wa.me/51926474032?text=¡Hola%20Agrovio!%20Deseo%20obtener%20más%20información%20sobre%20la%20plataforma." 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-agrovio-medium hover:underline transition-colors font-medium text-slate-700"
              >
                +51 926 474 032
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-agrovio-medium flex-shrink-0" />
              <span>Lima & Ica, Perú</span>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Agrovio Inc. Todos los derechos reservados.</p>
          <div className="flex gap-6 font-semibold">
            <a href="#" className="hover:text-slate-700 transition-colors">Términos de servicio</a>
            <a href="#" className="hover:text-slate-700 transition-colors">Política de privacidad</a>
            <a href="#" className="hover:text-slate-700 transition-colors">Cumplimiento B2B</a>
          </div>
        </div>
      </div>
    </footer>
  );
};