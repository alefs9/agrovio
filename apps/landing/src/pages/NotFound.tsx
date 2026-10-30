import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Sprout, Store, ShieldCheck, BookOpen, ArrowLeft, Search } from 'lucide-react';

export const NotFound = () => {
  const quickLinks = [
    { name: 'Página Principal', href: '/', icon: Home, desc: 'Volver a la portada de Agrovio' },
    { name: 'Proveedores', href: '/proveedores', icon: Sprout, desc: 'Publica y vende cosechas' },
    { name: 'Compradores', href: '/compradores', icon: Store, desc: 'Encuentra oferta poscosecha' },
    { name: 'Suscripciones', href: '/suscripciones', icon: ShieldCheck, desc: 'Planes e insumos agrícolas' },
    { name: 'Voces del Campo', href: '/recursos/voces-del-campo', icon: BookOpen, desc: 'Historias y casos reales' },
  ];

  return (
    <div className="min-h-[85vh] bg-gradient-to-b from-emerald-50/60 via-white to-emerald-50/30 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-300/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-4xl w-full text-center relative z-10 flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center w-full mb-3"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-sm font-medium shadow-sm">
            <Search className="w-4 h-4 text-emerald-600" />
            Error 404 — Página No Encontrada
          </span>
        </motion.div>

        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center w-full mb-4"
        >
          <div className="relative inline-block">
            <span className="text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-green-600 to-emerald-700 tracking-tight leading-none">
              404
            </span>
            <div className="absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-green-400 rounded-full" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4"
        >
          ¡Uy! Te has desviado del camino agrícola
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed"
        >
          La ruta que intentas visitar no existe o ha sido movida. No te preocupes, puedes volver al inicio o explorar nuestras secciones principales.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full"
        >
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-700 text-white font-semibold shadow-lg shadow-emerald-700/25 hover:bg-emerald-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al Inicio</span>
          </Link>
          <Link
            to="/recursos/voces-del-campo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all duration-300"
          >
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <span>Explorar Recursos</span>
          </Link>
        </motion.div>

        {/* Quick Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-200/80 pt-10 text-left w-full"
        >
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6 text-center">
            Enlaces Rápidos de Interés
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group p-4 rounded-xl bg-white/90 border border-gray-200/80 hover:border-emerald-300 hover:bg-white shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-3.5 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm group-hover:text-emerald-700 transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                      {item.desc}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
