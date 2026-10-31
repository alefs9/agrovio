import { frontendEntry } from '../../config/destinations';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';
import { RecursosDropdown } from './RecursosDropdown';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. BRAND / INICIO: Logo más grande y a la izquierda */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/images/logo.svg" 
              alt="Agrovio Logo" 
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-3xl sm:text-4xl font-black tracking-tight text-agrovio-dark">
              agrovio
            </span>
          </Link>

          {/* 2. DESKTOP NAVIGATION (Intacto y centrado como el original) */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/proveedores"
              className={`text-sm font-medium transition-all relative py-1 ${
                isActive('/proveedores') 
                  ? 'text-agrovio-dark font-bold' 
                  : 'text-gray-700 hover:text-agrovio-dark'
              }`}
            >
              Proveedores
              {isActive('/proveedores') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-agrovio-medium rounded-full" />
              )}
            </Link>

            <Link
              to="/compradores"
              className={`text-sm font-medium transition-all relative py-1 ${
                isActive('/compradores') 
                  ? 'text-agrovio-dark font-bold' 
                  : 'text-gray-700 hover:text-agrovio-dark'
              }`}
            >
              Compradores
              {isActive('/compradores') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-agrovio-medium rounded-full" />
              )}
            </Link>

            <Link
              to="/suscripciones"
              className={`text-sm font-medium transition-all relative py-1 ${
                isActive('/suscripciones') 
                  ? 'text-agrovio-dark font-bold' 
                  : 'text-gray-700 hover:text-agrovio-dark'
              }`}
            >
              Suscripciones
              {isActive('/suscripciones') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-agrovio-medium rounded-full" />
              )}
            </Link>

            <Link
              to="/comofunciona"
              className={`text-sm font-medium transition-all relative py-1 ${
                isActive('/comofunciona') || isActive('/recursos/como-funciona')
                  ? 'text-agrovio-dark font-bold' 
                  : 'text-gray-700 hover:text-agrovio-dark'
              }`}
            >
              Cómo funciona
              {(isActive('/comofunciona') || isActive('/recursos/como-funciona')) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-agrovio-medium rounded-full" />
              )}
            </Link>

            {/* Menú desplegable de Recursos */}
            <RecursosDropdown />
          </nav>

          {/* 3. DESKTOP CTA PRINCIPAL DESTACADO EN VERDE (Intacto) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={frontendEntry()}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm text-white bg-agrovio-gradient hover:opacity-95 shadow-lg shadow-emerald-800/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Ingresar a la plataforma</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* 4. MOBILE RIGHT: Botón destacado + Menú hamburguesa (Intacto) */}
          <div className="flex md:hidden items-center gap-2.5">
            <a
              href={frontendEntry()}
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold text-white bg-agrovio-gradient shadow-md"
            >
              Ingresar
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* 5. MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white/98 backdrop-blur-xl px-6 pt-3 pb-8 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            <Link
              to="/proveedores"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 text-base font-bold text-gray-800 hover:text-agrovio-medium border-b border-gray-100"
            >
              <span>Proveedores</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>
            
            <Link
              to="/compradores"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 text-base font-bold text-gray-800 hover:text-agrovio-medium border-b border-gray-100"
            >
              <span>Compradores</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>
            
            <Link
              to="/suscripciones"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 text-base font-bold text-gray-800 hover:text-agrovio-medium border-b border-gray-100"
            >
              <span>Suscripciones</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>

            <Link
              to="/comofunciona"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 text-base font-bold text-gray-800 hover:text-agrovio-medium border-b border-gray-100"
            >
              <span>Cómo funciona</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>
          </div>

          {/* Subsección Recursos dentro del móvil */}
          <div className="pt-2">
            <span className="block text-xs font-black uppercase tracking-wider text-agrovio-dark/70 mb-3">
              Recursos
            </span>
            <div className="space-y-2 pl-2">
              <Link
                to="/recursos/voces-del-campo"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left py-1.5 text-sm font-semibold text-gray-600 hover:text-agrovio-dark"
              >
                Voces del campo
              </Link>
              <Link
                to="/recursos/casos-de-uso"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left py-1.5 text-sm font-semibold text-gray-600 hover:text-agrovio-dark"
              >
                Casos de uso
              </Link>
              <Link
                to="/recursos/sobre-nosotros"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left py-1.5 text-sm font-semibold text-gray-600 hover:text-agrovio-dark"
              >
                Sobre nosotros
              </Link>
              <Link
                to="/recursos/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left py-1.5 text-sm font-semibold text-gray-600 hover:text-agrovio-dark"
              >
                Preguntas frecuentes
              </Link>
            </div>
          </div>

          <div className="pt-4">
            <a
              href={frontendEntry()}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center py-3.5 rounded-xl font-bold bg-agrovio-gradient text-white text-center shadow-lg gap-2"
            >
              <span>Ingresar a la plataforma</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};