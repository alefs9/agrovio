import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck, 
  Handshake, 
  CheckCircle2,
  Check,
  Bookmark,
  Filter,
  Search,
  Tractor,
  Truck,
  Factory,
  Grid, 
  Briefcase, 
  TrendingUp,
  ClipboardCheck
} from 'lucide-react';

// Animación reutilizable para aparición fluida al scroll
const scrollAnimation = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-50px" },
  transition: { duration: 0.7, ease: "easeOut" as const }
};

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* =========================================================================
          HERO SECTION: GRADIENTE CORPORATIVO 60°
         ========================================================================= */}
      <section className="relative pt-20 pb-32 lg:pt-28 lg:pb-48 bg-agrovio-gradient overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            {...scrollAnimation}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white">
              El Primer mercado digital para la comercialización poscosecha del Perú
            </h1>

            <p className="text-lg sm:text-xl text-emerald-50 font-normal leading-relaxed max-w-3xl mx-auto">
              Agrovio conecta a proveedores y compradores de productos agrícolas y agroindustriales en una plataforma simple, visible y confiable.
            </p>

            {/* CTAs DIVERSIFICADOS */}
            <div className="pt-4 flex flex-col items-center justify-center gap-5">
              
              {/* Botón 1: Gradiente Invertido para mayor contraste */}
              <Link
                to="/comenzar"
                className="w-full sm:w-auto px-12 py-5 rounded-full bg-agrovio-gradient-invert text-white font-black text-lg shadow-[0_10px_35px_rgba(76,162,84,0.4)] border border-emerald-300/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Unirse a Agrovio</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              {/* Botones 2 y 3: Blanco Profesional */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto max-w-3xl">
                <Link
                  to="/suscripciones"
                  className="flex-1 px-6 py-4 rounded-2xl bg-white text-slate-900 font-bold text-sm shadow-xl border border-gray-100 hover:-translate-y-1 transition-transform text-center flex flex-col justify-center"
                >
                  <span className="text-agrovio-dark font-black">Suscripciones para Proveedores</span>
                  <span className="text-[11px] font-medium text-slate-500 mt-0.5">desde los más pequeños hasta los más grandes</span>
                </Link>

                <Link
                  to="/suscripciones"
                  className="flex-1 px-6 py-4 rounded-2xl bg-white text-slate-900 font-bold text-sm shadow-xl border border-gray-100 hover:-translate-y-1 transition-transform text-center flex flex-col justify-center"
                >
                  <span className="text-agrovio-dark font-black">Suscripciones para Compradores</span>
                  <span className="text-[11px] font-medium text-slate-500 mt-0.5">con el mejor acceso al mercado agrario</span>
                </Link>
              </div>

            </div>

            {/* Mensajes Breves */}
            <div className="pt-6 pb-16 lg:pb-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm font-semibold text-emerald-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                <span>Publica productos y encuentra nuevos compradores</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                <span>Descubre oferta disponible y conecta con proveedores</span>
              </div>
            </div>

          </motion.div>
        </div>

        {/* VERSIÓN DESKTOP: Loadboard con tarjetas flotantes */}
        <div className="hidden lg:flex w-full justify-center px-8 relative z-40" style={{ marginBottom: '-12rem' }}>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "0px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-7xl"
          >
            {/* Imagen Principal */}
            <div className="w-full relative flex justify-center">
              <img 
                src="/images/loadboard_principal.png" 
                alt="Agrovio Panel Principal" 
                className="w-full h-auto object-contain block drop-shadow-2xl rounded-t-3xl"
              />
            </div>

            {/* CARD 1: Oferta Recibida (Arriba Izquierda) */}
            <motion.div 
              initial={{ opacity: 0, x: -30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -left-16 top-[15%] w-80 bg-white rounded-2xl p-4 shadow-2xl border border-slate-100/60 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-tight">Fruit Fresh Export envió una oferta:</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Hace 5 segundos · Mandarina Tango #AGR-9001</p>
                </div>
              </div>
              <div className="mt-3 bg-slate-50 rounded-lg p-2.5 border border-slate-200/60">
                <p className="text-2xl font-black text-slate-800">S/ 2.10 / kg</p>
              </div>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 bg-agrovio-gradient !text-white text-xs font-bold py-2 rounded-lg shadow-md hover:opacity-90 transition-opacity">Aceptar</button>
                <button className="flex-1 text-emerald-700 bg-emerald-50 text-xs font-bold py-2 rounded-lg hover:bg-emerald-100 transition-colors">Contraoferta</button>
                <button className="flex-1 text-slate-500 bg-slate-100 text-xs font-bold py-2 rounded-lg hover:bg-slate-200 transition-colors">Rechazar</button>
              </div>
            </motion.div>

            {/* CARD 2: Trato Cerrado (Arriba Derecha) */}
            <motion.div 
              initial={{ opacity: 0, x: 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -right-16 top-[10%] w-80 bg-emerald-700 rounded-2xl p-4 shadow-2xl shadow-emerald-900/20"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                  <span className="font-bold text-sm tracking-wide">Trato Cerrado</span>
                </div>
                <span className="text-emerald-200 text-xs font-medium">14 min</span>
              </div>
              <div className="text-white space-y-0.5">
                <p className="text-sm text-emerald-50">Mandarina W. Murcott → Lima Export Co.</p>
                <p className="text-sm font-bold">4,500 kg/sem · Ica, Perú</p>
              </div>
            </motion.div>

            {/* CARD 3: Mensaje Chat (Abajo Izquierda) */}
            <motion.div 
              initial={{ opacity: 0, x: -30, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute left-8 bottom-[22%] w-80 bg-white rounded-2xl p-4 shadow-2xl border border-slate-100/60"
            >
              <div className="flex justify-between items-start mb-1">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-sm">🍊</div>
                  <span className="font-bold text-sm text-slate-900">AgroPerú Trading</span>
                </div>
                <span className="text-xs text-slate-400 font-medium mt-1">ahora</span>
              </div>
              <p className="text-sm text-slate-600 leading-snug pl-9">
                ¿Podemos mover el punto de despacho previamente coordinado? Tenemos el producto listo.
              </p>
            </motion.div>

            {/* CARD 4: Precio Referencial (Abajo Derecha) */}
            <motion.div 
              initial={{ opacity: 0, x: 30, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -right-8 bottom-[11%] w-80 bg-white rounded-2xl p-4 shadow-2xl border border-slate-100/60"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-slate-700" />
                  <span className="font-black text-sm text-slate-900">Precio referencial</span>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full">
                  Alta confianza
                </span>
              </div>
              <div className="mb-4">
                <p className="text-xs font-semibold text-slate-700">Mandarina Tango · Exportación FOB Callao</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Calibre 50-63 mm · Temporada Jul-Sep 2026</p>
              </div>
              <div className="flex justify-between items-center border-t border-slate-100 pt-3 px-2">
                <div className="text-center">
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider mb-0.5">Bajo</p>
                  <p className="text-sm font-bold text-slate-700">S/ 1.80</p>
                </div>
                <div className="text-center bg-emerald-50 px-4 py-1.5 rounded-lg border border-emerald-100">
                  <p className="text-[10px] text-emerald-600 uppercase font-black tracking-wider mb-0.5">Promedio</p>
                  <p className="text-base font-black text-emerald-700">S/ 2.10</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider mb-0.5">Alto</p>
                  <p className="text-sm font-bold text-slate-700">S/ 2.50</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* VERSIÓN MOBILE: Imagen superior + Tarjetas en columna */}
        <div className="flex lg:hidden w-full flex-col px-4 mt-8 relative z-40 space-y-4" style={{ marginBottom: '-6rem' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-11/12 sm:w-5/6 mx-auto relative flex justify-center"
          >
            {/* Imagen Principal Mobile (Sin fondo blanco) */}
            <img 
              src="/images/loadboard_principal.png" 
              alt="Agrovio Panel Principal" 
              className="w-full h-auto object-cover object-top drop-shadow-xl rounded-2xl"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white rounded-2xl p-4 shadow-xl border border-slate-100/60 mt-4"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-tight">Fruit Fresh Export envió una oferta:</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Hace 5 segundos · Mandarina Tango #AGR-9001</p>
              </div>
            </div>
            <div className="mt-3 bg-slate-50 rounded-lg p-2.5 border border-slate-200/60">
              <p className="text-xl font-black text-slate-800">S/ 2.10 / kg</p>
            </div>
            <div className="mt-3 flex gap-2">
              <button className="flex-1 bg-agrovio-gradient text-white text-[11px] font-bold py-2 rounded-lg shadow hover:opacity-90">Aceptar</button>
              <button className="flex-1 text-emerald-700 bg-emerald-50 text-[11px] font-bold py-2 rounded-lg">Contraoferta</button>
              <button className="flex-1 text-slate-500 bg-slate-100 text-[11px] font-bold py-2 rounded-lg">Rechazar</button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-emerald-700 rounded-2xl p-4 shadow-xl shadow-emerald-900/20"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                <span className="font-bold text-sm tracking-wide">Trato Cerrado</span>
              </div>
              <span className="text-emerald-200 text-xs font-medium">14 min</span>
            </div>
            <div className="text-white space-y-0.5">
              <p className="text-sm text-emerald-50">Mandarina W. Murcott → Lima Export Co.</p>
              <p className="text-sm font-bold">4,500 kg/sem · Ica, Perú</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white rounded-2xl p-4 shadow-xl border border-slate-100/60"
          >
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-sm">🍊</div>
                <span className="font-bold text-sm text-slate-900">AgroPerú Trading</span>
              </div>
              <span className="text-xs text-slate-400 font-medium mt-1">ahora</span>
            </div>
            <p className="text-sm text-slate-600 leading-snug pl-9">
              ¿Podemos mover el punto de despacho previamente coordinado? Tenemos el producto listo.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white rounded-2xl p-4 shadow-xl border border-slate-100/60"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-slate-700" />
                <span className="font-black text-sm text-slate-900">Precio referencial</span>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Alta confianza
              </span>
            </div>
            <div className="mb-4">
              <p className="text-xs font-semibold text-slate-700">Mandarina Tango · Exportación FOB Callao</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Calibre 50-63 mm · Temporada Jul-Sep 2026</p>
            </div>
            <div className="flex justify-between items-center border-t border-slate-100 pt-3 px-1">
              <div className="text-center">
                <p className="text-[9px] text-slate-400 uppercase font-black tracking-wider mb-0.5">Bajo</p>
                <p className="text-xs font-bold text-slate-700">S/ 1.80</p>
              </div>
              <div className="text-center bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-100">
                <p className="text-[9px] text-emerald-600 uppercase font-black tracking-wider mb-0.5">Promedio</p>
                <p className="text-sm font-black text-emerald-700">S/ 2.10</p>
              </div>
              <div className="text-center">
                <p className="text-[9px] text-slate-400 uppercase font-black tracking-wider mb-0.5">Alto</p>
                <p className="text-xs font-bold text-slate-700">S/ 2.50</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ESPACIADOR BLANCO */}
      <div className="hidden lg:block w-full h-32 xl:h-40 bg-white pointer-events-none" />      
      <div className="block lg:hidden w-full h-16 bg-white pointer-events-none" />

      {/* =========================================================================
          SECCIÓN: CONECTANDO EL AGRO PERUANO (CÓMO FUNCIONA)
         ========================================================================= */}
      <section className="py-24 bg-white border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div {...scrollAnimation} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Conectando el agro peruano con mercados que sí compran
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Agrovio organiza la oferta agrícola y agroindustrial del Perú para conectar a productores, procesadoras y compradores a través de una plataforma simple, visible y conectada a WhatsApp.
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto min-h-[580px] lg:min-h-[640px] flex flex-col lg:flex-row items-center justify-center mb-16">
            <div className="absolute inset-0 bg-radial from-emerald-100/40 via-transparent to-transparent blur-3xl pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}
              className="relative z-0 flex justify-center py-6"
            >
              <img 
                src="/images/mapa_peru.png" 
                alt="Mapa del Perú Agrovio" 
                className="h-[480px] sm:h-[560px] lg:h-[600px] w-auto object-contain drop-shadow-2xl opacity-90 rounded-3xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:absolute top-[6%] left-2 lg:left-[-15%] z-10 w-full max-w-xs sm:max-w-sm mb-4 lg:mb-0 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-200/90 shadow-2xl hover:shadow-emerald-900/10 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-xl bg-agrovio-gradient text-white flex items-center justify-center shadow-md flex-shrink-0">
                  <Tractor className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">Agricultura</h3>
                  <span className="text-[10px] font-black uppercase text-agrovio-medium tracking-wider">Cosecha y Acopio</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Productores y cooperativas locales listan su oferta certificada con volúmenes verificados en tiempo real.
              </p>
              <div className="flex items-center justify-between text-[11px] font-bold text-agrovio-dark pt-2 border-t border-slate-100">
                <span>Origen agrícola ➔</span>
                <span className="bg-emerald-100 text-agrovio-dark px-2.5 py-0.5 rounded-full">Sin intermediarios</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, y: 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:absolute top-[22%] right-2 lg:right-[-14%] z-10 w-full max-w-xs sm:max-w-sm mb-4 lg:mb-0 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-200/90 shadow-2xl hover:shadow-emerald-900/10 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-xl bg-agrovio-gradient text-white flex items-center justify-center shadow-md flex-shrink-0">
                  <Factory className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">Planta-Fábrica</h3>
                  <span className="text-[10px] font-black uppercase text-agrovio-medium tracking-wider">Procesamiento y Mercado</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Plantas e industrias compran materia prima garantizando la calidad y trazabilidad requerida comercialmente. Así como también pueden listar su descarte en Agrovio. 
              </p>
              <div className="flex items-center justify-between text-[11px] font-bold text-agrovio-dark pt-2 border-t border-slate-100">
                <span>Fabrica ➔ Mercado Final</span>
                <span className="bg-emerald-100 text-agrovio-dark px-2.5 py-0.5 rounded-full">Procesamiento B2B</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="lg:absolute bottom-[4%] left-2 lg:left-[-15%] z-10 w-full max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-200/90 shadow-2xl hover:shadow-emerald-900/10 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-xl bg-agrovio-gradient text-white flex items-center justify-center shadow-md flex-shrink-0">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">Ruta Poscosecha</h3>
                  <span className="text-[10px] font-black uppercase text-agrovio-medium tracking-wider">Logística Eficiente</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Traslado directo y coordinado entre proveedores y compradores, reduciendo mermas y tiempos de entrega.
              </p>
              <div className="flex items-center justify-between text-[11px] font-bold text-agrovio-dark pt-2 border-t border-slate-100">
                <span>Ruta A ➔ Ruta B</span>
                <span className="bg-emerald-100 text-agrovio-dark px-2.5 py-0.5 rounded-full">Transporte Conectado</span>
              </div>
            </motion.div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            {[
              { title: "3 tipos de oferta", sub: "Frescos, descartes y agroindustriales", desc: "Un mercado para productos agrícolas en distintas condiciones, presentaciones y etapas de procesamiento." },
              { title: "2 formas de publicar", sub: "Plataforma o WhatsApp asistido", desc: "Los proveedores pueden administrar directamente sus productos en Agrovio. Los pequeños agricultores pueden enviar su cosecha por WhatsApp para recibir asistencia en la publicación." },
              { title: "Mercado conectado", sub: "Oferta, compradores y negociaciones", desc: "Los compradores exploran y comparan productos, presentan ofertas y negocian dentro de la plataforma." }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-black text-slate-900 mb-1">{card.title}</h3>
                <p className="text-xs font-black text-agrovio-medium uppercase tracking-wider mb-2">{card.sub}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          CONTROL DE CALIDAD AGROVIO
         ========================================================================= */}
      <section className="py-24 bg-slate-50 border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            
            {/* TEXTO Y PROPUESTA */}
            <motion.div {...scrollAnimation} className="space-y-6">
              <span className="text-xs font-black uppercase tracking-wider text-agrovio-medium bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100 inline-block shadow-sm">
                Control de Calidad Agrovio
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Tus estándares. Nuestra presencia en campo.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Comprar un producto agrícola muchas veces requiere verlo antes de tomar una decisión. Con Agrovio puedes continuar enviando a tu propio equipo para verificar el lote, o solicitar nuestro servicio de Control de Calidad.
              </p>
              
              <div className="bg-white border border-slate-200 rounded-2xl p-5 mt-4 shadow-sm">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Tú defines qué necesitas revisar. Nosotros coordinamos un <strong className="font-black text-agrovio-dark">Agente Verificador Agrovio*</strong> para realizar la inspección directamente en campo o planta.
                </p>
                <p className="text-[10px] text-slate-400 mt-2">
                  *A diferencia de los "Agentes Agrovio" enfocados en la digitalización, los Agentes Verificadores son especialistas asignados exclusivamente para inspecciones operativas solicitadas por compradores.
                </p>
              </div>
              
              <div className="pt-4 space-y-4">
                <h3 className="font-black text-slate-900 text-lg">Verificamos según tus criterios:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Calibre", desc: "Medidas, tamaños y rangos definidos." },
                    { title: "Calidad y condición", desc: "Estado general y defectos visibles." },
                    { title: "Color y madurez", desc: "Parámetros requeridos para la operación." },
                    { title: "Volumen y empaque", desc: "Disponibilidad y condiciones observadas." },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-agrovio-medium flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-sm font-bold text-slate-900">{item.title}</strong>
                        <span className="text-xs text-slate-600">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                  <li className="flex items-start gap-3 sm:col-span-2 mt-2">
                    <ClipboardCheck className="w-5 h-5 text-agrovio-medium flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-sm font-bold text-slate-900">Tus propios estándares</strong>
                      <span className="text-xs text-slate-600">Puedes proporcionar tu propio checklist, especificaciones o criterios comerciales para la inspección.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* VISUAL: FOTO REAL + CHECKLIST FLOTANTE */}
            <motion.div {...scrollAnimation} className="relative mt-8 lg:mt-0 lg:pl-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                <img 
                  src="/images/inspeccion_campo.jpeg" 
                  alt="Inspección de calidad en campo" 
                  className="w-full h-full object-cover"
                />                
              </div>
              
              {/* Checklist Digital Flotante */}
              <div className="absolute bottom-4 -right-10 sm:-right-30 bg-white p-5 rounded-2xl shadow-2xl border border-slate-100 w-64 animate-in slide-in-from-bottom-4 duration-1000 delay-300">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-3">
                  <ClipboardCheck className="w-5 h-5 text-agrovio-medium" />
                  <span className="font-bold text-sm text-slate-900">Checklist de Inspección</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between text-xs font-medium text-slate-600">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center"><Check className="w-3 h-3 text-emerald-600"/></div> 
                      Calibre 50-63 mm
                    </div>
                    <span className="text-emerald-600 font-bold">OK</span>
                  </li>
                  <li className="flex items-center justify-between text-xs font-medium text-slate-600">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center"><Check className="w-3 h-3 text-emerald-600"/></div> 
                      Color Píntón/Maduro
                    </div>
                    <span className="text-emerald-600 font-bold">OK</span>
                  </li>
                  <li className="flex items-center justify-between text-xs font-medium text-slate-600">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center"><Check className="w-3 h-3 text-emerald-600"/></div> 
                      Sin daño mecánico
                    </div>
                    <span className="text-emerald-600 font-bold">OK</span>
                  </li>
                  <li className="flex items-center justify-between text-xs font-medium text-slate-600 border-t border-slate-50 pt-2 mt-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800">Conclusión:</span>
                    </div>
                    <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-100 font-black">Apto</span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>

          {/* CÓMO FUNCIONA */}
          <motion.div {...scrollAnimation} className="mb-24">
            <h3 className="text-2xl font-black text-slate-900 mb-8 text-center">¿Cómo funciona?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { step: "01", title: "Defines qué verificar", desc: "Seleccionas el producto e indicas los estándares y criterios que quieres revisar." },
                { step: "02", title: "Coordinamos visita", desc: "Agrovio asigna un Agente Verificador en la zona y coordina el ingreso al campo." },
                { step: "03", title: "Verificamos producto", desc: "El agente revisa el lote siguiendo tus criterios y recopila evidencia de la visita." },
                { step: "04", title: "Recibes el reporte", desc: "Obtienes fotografías, videos, observaciones y los resultados de la inspección." },
                { step: "05", title: "Tú decides", desc: "La verificación te brinda mayor información para negociar o concretar la operación." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-200 hover:shadow-md transition-all relative overflow-hidden group">
                  <span className="absolute -top-4 -right-2 text-6xl font-black text-slate-100 group-hover:text-emerald-50 transition-colors z-0">{item.step}</span>
                  <div className="relative z-10">
                    <span className="text-[10px] font-black text-agrovio-medium mb-2 block uppercase tracking-wider">Paso {item.step}</span>
                    <h4 className="font-bold text-slate-900 text-sm mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* TÚ ELIGES & CTA */}
          <motion.div {...scrollAnimation} className="bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              <div className="lg:col-span-7">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-8">Tú eliges cómo verificar</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                    <h4 className="font-bold text-emerald-400 text-base mb-2">Con tu propio equipo</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">Puedes enviar a tu agente, comprador, supervisor o personal de confianza, como lo harías normalmente.</p>
                  </div>
                  <div className="bg-emerald-900/30 p-6 rounded-2xl border border-emerald-500/30 relative">
                    <div className="absolute -top-3 -right-3">
                      <span className="bg-emerald-500 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-lg">Opcional</span>
                    </div>
                    <h4 className="font-bold text-emerald-400 text-base mb-2">Control de Calidad Agrovio</h4>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">Nosotros coordinamos la verificación en campo por ti, siguiendo los estándares que hayas definido.</p>
                    <span className="inline-block text-[10px] text-emerald-200/70 font-medium px-3 py-1.5 bg-slate-900/50 rounded-lg">
                      Costo adicional según ubicación, producto y alcance.
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-5 flex flex-col items-center lg:items-end text-center lg:text-right space-y-6">
                <Link
                  to="/comenzar"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-agrovio-gradient text-white font-black text-sm shadow-lg hover:shadow-emerald-900/50 hover:-translate-y-0.5 transition-all group w-full sm:w-auto justify-center"
                >
                  <span>Solicitar Control de Calidad</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
                
                <p className="text-[12px] text-slate-400 max-w-sm leading-relaxed text-center lg:text-right border-t border-slate-800 pt-4 mt-2">
                  El Control de Calidad Agrovio facilita la inspección y documentación del producto según los criterios proporcionados por el comprador. La decisión final de compra y aceptación del producto corresponde exclusivamente al comprador.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          PARA PROVEEDORES (Mockup Blanco)
         ========================================================================= */}
      <section className="py-24 bg-white border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div {...scrollAnimation} className="space-y-6">
              <span className="text-xs font-black uppercase tracking-wider text-agrovio-medium bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                Para proveedores
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Publica y conecta tu producto con nuevos compradores
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Registra tu producto, volumen y disponibilidad directamente en Agrovio. Agricultores también podrán publicar cosecha e información a través de nuestra asistencia por whatsapp. Los compradores presentan sus ofertas dentro de la plataforma y el proveedor recibe notificaciones para revisarlas y responder.
              </p>
              
              <Link
                to="/proveedores"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-agrovio-gradient text-white font-black text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all group"
              >
                <span>PUBLICAR UN PRODUCTO</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full h-80 sm:h-[420px] rounded-[2rem] shadow-xl overflow-hidden">
                <img 
                  src="/images/mockup_publicaciones.png" 
                  alt="Mockup Tus Publicaciones Proveedor" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          PARA COMPRADORES (Mockup Blanco)
         ========================================================================= */}
      <section className="py-24 bg-slate-50 border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-xl border border-slate-200 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <Search className="w-4 h-4 text-agrovio-medium" />
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Marketplace B2B
                    </span>
                  </div>
                  <button className="text-[11px] font-bold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-slate-200">
                    <Filter className="w-3 h-3" /> Filtros
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-emerald-300 transition-colors">
                    <div className="flex flex-col sm:flex-row gap-5 items-start">
                      <div className="w-20 h-20 rounded-xl bg-emerald-100/60 flex items-center justify-center font-black text-3xl flex-shrink-0 border border-emerald-200">
                        🥑
                      </div>
                      <div className="flex-1 w-full space-y-2">
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-bold text-slate-900 text-base">Palta Hass</h4>
                          <span className="text-[10px] font-bold bg-emerald-100 text-agrovio-dark px-2.5 py-1 rounded-full flex items-center gap-1 border border-emerald-200 whitespace-nowrap">
                            <Check className="w-3 h-3 text-agrovio-medium" /> Verificado
                          </span>
                        </div>
                        <p className="text-xs text-slate-500">Volumen: 8.5 TM · Ubicación: Barranca, Lima</p>
                        <p className="text-xs text-slate-500">Calidad: Descarte Calibre 18-24 · Fecha: Inmediata</p>
                        <div className="pt-3 mt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <span className="text-sm font-black text-agrovio-dark">Precio: A negociar</span>
                          <div className="flex gap-2 w-full sm:w-auto">
                            <button className="px-3 py-2 rounded-xl bg-agrovio-gradient !text-white flex items-center justify-center shadow hover:opacity-90">
                              <Bookmark className="w-4 h-4 !text-white" />
                            </button>
                            <button className="flex-1 px-4 py-2 text-xs font-bold bg-agrovio-gradient !text-white rounded-xl shadow hover:opacity-90">
                              Ver detalles
                            </button>
                            <button className="flex-1 px-4 py-2 text-xs font-bold bg-agrovio-gradient !text-white rounded-xl shadow hover:opacity-90">
                              Contactar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...scrollAnimation} className="space-y-6 order-1 lg:order-2">
              <span className="text-xs font-black uppercase tracking-wider text-agrovio-medium bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                Para compradores
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Accede a oferta actualizada y compra con mayor confianza
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Explora productos agrícolas y agroindustriales según categoría, ubicación, volumen, condición y disponibilidad. Compara alternativas, revisa la información del proveedor y toma mejores decisiones antes de iniciar una negociación.
              </p>
              
              <Link
                to="/compradores"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-agrovio-gradient text-white font-black text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all group"
              >
                <span>EXPLORAR OFERTA</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN: UNA RED DE PROVEEDORES Y COMPRADORES (CONFIANZA/VALIDACIÓN)
         ========================================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div {...scrollAnimation} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Una red de proveedores y compradores en la que sí puedes confiar
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Encontrar una contraparte comercial confiable todavía depende de contactos, llamadas y referencias personales. Agrovio organiza la información y facilita relaciones comerciales más claras, visibles y sostenibles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: "Información clara antes de negociar", 
                desc: "Consulta producto, volumen, ubicación, disponibilidad, condiciones comerciales y documentación del proveedor antes de iniciar una conversación." 
              },
              { 
                icon: Handshake, 
                title: "Relaciones comerciales que pueden repetirse", 
                desc: "Guarda proveedores, registra negociaciones y vuelve a trabajar con las contrapartes que demostraron cumplimiento en operaciones anteriores." 
              },
              { 
                icon: Grid, 
                title: "Diseñado para la realidad poscosecha del Perú", 
                desc: "Gestiona productos frescos, descartes y agroindustriales considerando campañas, disponibilidad, tiempos críticos y distintas formas de acceso digital." 
              }
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-agrovio-gradient text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-900/20">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          FINAL DE LA PÁGINA: ÚNETE A AGROVIO!
         ========================================================================= */}
      <section className="py-28 bg-agrovio-gradient text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          <motion.div {...scrollAnimation} className="space-y-6">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
              Únete a Agrovio!
            </h2>
            
            <div>
              <Link
                to="/comenzar"
                className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-agrovio-gradient-invert text-white border border-emerald-300/40 font-black text-lg shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <span>Unirse ahora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};