import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, MessageSquareQuote, Briefcase, Users, HelpCircle as FaqIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RecursosDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar el menú si se hace clic afuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const recursosItems = [
    { id: 'voces-del-campo', label: 'Voces del campo', icon: MessageSquareQuote, desc: 'Testimonios y casos de éxito' },
    { id: 'casos-de-uso', label: 'Casos de uso', icon: Briefcase, desc: 'Aplicación para tu tipo de empresa' },
    { id: 'sobre-nosotros', label: 'Sobre nosotros', icon: Users, desc: 'Equipo fundador y visión B2B' },
    { id: 'faq', label: 'Preguntas frecuentes', icon: FaqIcon, desc: 'Respuestas a dudas generales' },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center gap-1.5 font-medium transition-colors py-2 focus:outline-none ${
          isOpen ? 'text-agrovio-dark font-semibold' : 'text-gray-700 hover:text-agrovio-dark'
        }`}
        aria-expanded={isOpen}
      >
        <span>Recursos</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-gray-500 ${isOpen ? 'rotate-180 text-agrovio-medium' : ''}`} />
      </button>

      {/* Menú Flotante Profesional con Psicología B2B */}
      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-72 rounded-2xl bg-white shadow-2xl border border-gray-100 p-2 z-50 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="space-y-1">
            {recursosItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  to={`/recursos/${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-50/70 transition-all duration-150 flex items-start gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-gray-50 text-gray-600 group-hover:bg-agrovio-medium group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-gray-800 group-hover:text-agrovio-dark">
                      {item.label}
                    </span>
                    <span className="block text-[11px] text-gray-400 group-hover:text-gray-600">
                      {item.desc}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};