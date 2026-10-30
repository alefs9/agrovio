import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollAnimation, hoverButton } from '../../utils/animations';
import tiguiLaptopImg from '../../assets/tigui_laptop.png';
import mandarinaImg from '../../assets/mandarina.jpg';
import fresaImg from '../../assets/fresa.jpg';
import procesadoraImg from '../../assets/procesadora.jpg';
import { 
  FilePlus, 
  Search, 
  Handshake, 
  Unlock, 
  CheckCircle, 
  MessageSquare, 
  Lock, 
  Shield,
  Layers,
  ArrowRight,
  Store,
  LeafyGreen,
  Sprout,
  Factory,
  CheckCircle2,
  ChevronDown,
  UserCircle
} from 'lucide-react';

export const ComoFunciona: React.FC = () => {
  // Estado para el Acordeón de FAQs
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({});

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const pasos = [
    { num: '01', title: 'Se publica la oferta', desc: 'El proveedor registra producto, volumen, ubicación, condición y disponibilidad.', icon: <FilePlus className="w-6 h-6 text-emerald-600 shrink-0" /> },
    { num: '02', title: 'El mercado la descubre', desc: 'Los compradores exploran y filtran todas las ofertas según su necesidad.', icon: <Search className="w-6 h-6 text-emerald-600 shrink-0" /> },
    { num: '03', title: 'Comienza la negociación', desc: 'El comprador propone un precio y el proveedor acepta, rechaza o contraoferta.', icon: <Handshake className="w-6 h-6 text-emerald-600 shrink-0" /> },
    { num: '04', title: 'Se alcanza un acuerdo', desc: 'Ambas partes definen el precio final, volumen y condiciones principales.', icon: <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" /> },
    { num: '05', title: 'Se habilita la conexión', desc: 'El comprador utiliza 1 crédito para desbloquear los datos de contacto directo.', icon: <Unlock className="w-6 h-6 text-emerald-600 shrink-0" /> },
  ];

  const datosVisibles = [
    "Producto y fotografías",
    "Región o ubicación general",
    "Volumen total disponible",
    "Calidad, grado o condición",
    "Disponibilidad (fecha exacta)",
    "Precio referencial y pedido mínimo",
    "Condiciones comerciales relevantes",
    "Verificación comercial"
  ];



  const faqs = [
    { q: "¿Necesito ser una empresa para usar Agrovio?", a: "Agrovio está pensado para distintos participantes del mercado, desde productores y asociaciones hasta empresas agroindustriales y compradores institucionales." },
    { q: "¿Los compradores pueden ver quién publica un producto?", a: "No inicialmente. La información comercial es visible, pero los datos de contacto permanecen protegidos durante la exploración y negociación." },
    { q: "¿Enviar una oferta consume un crédito?", a: "No. El crédito se utiliza únicamente cuando el comprador decide desbloquear al proveedor tras alcanzar un acuerdo." },
    { q: "¿Los proveedores tienen que usar WhatsApp?", a: "No. Pueden utilizar directamente la plataforma web. WhatsApp funciona como una vía asistida opcional para pequeños agricultores." },
    { q: "¿Puedo actualizar una publicación?", a: "Sí. El proveedor puede actualizar información como precio, volumen y disponibilidad en tiempo real." },
    { q: "¿Qué pasa si una negociación no llega a un acuerdo?", a: "La negociación puede cerrarse sin realizar una conexión comercial. No se consumen créditos ni se revelan identidades." }
  ];

  return (
    <div className="w-full font-sans text-slate-900 bg-slate-50 selection:bg-emerald-500 selection:text-white overflow-hidden">
      <main className="flex-grow">
        
        {/* 1. HERO PRINCIPAL */}
        <section className="relative text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-agrovio-gradient overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_60%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            <motion.div 
              {...scrollAnimation}
              className="lg:col-span-6 xl:col-span-7 space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-emerald-100 backdrop-blur-md border border-white/20">
                <Layers className="w-4 h-4 text-emerald-300" /> Flujo Operativo Agrovio
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                De la oferta al acuerdo comercial, en un solo lugar
              </h1>

              <p className="text-base sm:text-xl text-emerald-50 leading-relaxed font-light">
                Agrovio organiza la comercialización poscosecha conectando productos agrícolas y agroindustriales con compradores que buscan volumen, calidad y disponibilidad real.
              </p>

              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
                Los proveedores publican su oferta, los compradores la exploran y presentan propuestas, y ambas partes negocian dentro de la plataforma hasta alcanzar un acuerdo.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 pt-4 w-full sm:w-auto">
                <motion.div {...hoverButton} className="w-full sm:w-auto">
                  <a
                    href="#pasos"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full bg-agrovio-gradient-invert text-white font-black text-base shadow-[0_10px_35px_rgba(76,162,84,0.4)] border border-emerald-300/40 hover:scale-105 transition-all duration-300 gap-2"
                  >
                    Explorar la plataforma <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>
                <Link
                  to="/comenzar"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-white text-agrovio-dark font-black text-base shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  <span className="text-agrovio-dark">Unirme a Agrovio</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* DIAGRAMA INTERACTIVO */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end"
            >
              {/* Contenedor principal sin bordes marcados, totalmente integrado al gradiente */}
              <div className="relative w-full max-w-lg h-[400px] flex items-center justify-center">
                
                {/* 1. LÍNEA HORIZONTAL CONECTORA */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400/20 via-emerald-400 to-emerald-400/20 -translate-y-1/2 z-0" />
                <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-emerald-300 -translate-y-1/2 z-0 shadow-[0_0_15px_rgba(52,211,153,0.8)]" />

                {/* 2. NODO IZQUIERDO: PROVEEDOR */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-emerald-100 shadow-xl border border-white/20 hover:scale-105 transition-transform">
                    <Store className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-100 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800">
                    Proveedor
                  </span>
                </div>

                {/* 3. NODO DERECHO: COMPRADOR */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-emerald-100 shadow-xl border border-white/20 hover:scale-105 transition-transform">
                    <UserCircle className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-100 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800">
                    Comprador
                  </span>
                </div>

                {/* 4. NODO CENTRAL: PLATAFORMA AGROVIO (MOCKUP) */}
                <div className="relative z-20 w-64 sm:w-72 bg-white rounded-3xl shadow-2xl border-4 border-emerald-900 overflow-hidden transform hover:scale-105 transition-transform duration-500">
                  
                  {/* Header del Mockup */}
                  <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-emerald-600" />
                      <span className="text-[11px] font-black text-slate-900 uppercase tracking-wider">Agrovio B2B</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-slate-300" />
                      <div className="w-2 h-2 rounded-full bg-slate-300" />
                    </div>
                  </div>

                  {/* Contenido del Mockup */}
                  <div className="p-4 bg-slate-100 space-y-3">
                    {/* Tarjeta de Producto (Estilo Limpio) */}
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-200 flex gap-3 items-center">
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-xl shrink-0">🥑</div>
                      <div className="space-y-0.5 text-left overflow-hidden">
                        <h4 className="text-[11px] font-black text-slate-900 truncate">PALTA HASS</h4>
                        <p className="text-[9px] font-bold text-emerald-700">Fundo Cerro Azul · 5,000 kg</p>
                      </div>
                    </div>

                    {/* Chat de Negociación */}
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-200 space-y-2.5">
                      <div className="text-[10px] flex justify-between items-center text-slate-500 font-medium">
                        <span>Oferta Inicial:</span> 
                        <span className="font-bold text-slate-800">S/ 1.80/kg</span>
                      </div>
                      <div className="text-[10px] flex justify-between items-center text-emerald-600 font-medium bg-emerald-50 p-1.5 rounded">
                        <span>Propuesta:</span> 
                        <span className="font-bold text-emerald-800">S/ 1.70/kg</span>
                      </div>
                      
                      <div className="pt-1 mt-1 border-t border-slate-100">
                        <div className="bg-agrovio-gradient text-white text-[10px] uppercase tracking-wider font-bold rounded-lg p-2 text-center flex items-center justify-center gap-1.5 shadow-md">
                          <Handshake className="w-3.5 h-3.5" /> Acuerdo Alcanzado
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. EL FUNCIONAMIENTO EN UNA MIRADA (RECTÁNGULOS HORIZONTALES) */}
        <motion.section 
          {...scrollAnimation}
          id="pasos" 
          className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Así funciona Agrovio
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold text-emerald-700 uppercase tracking-widest pt-2">
              <span>Publica</span>
              <span className="text-emerald-300">→</span>
              <span>Explora</span>
              <span className="text-emerald-300">→</span>
              <span>Negocia</span>
              <span className="text-emerald-300">→</span>
              <span>Acuerda</span>
              <span className="text-emerald-300">→</span>
              <span>Conecta</span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {pasos.map((p, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-[2rem] border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row items-center gap-8 group hover:border-emerald-300">
                
                {/* Texto a la Izquierda */}
                <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-black text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">{p.num}</span>
                    <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                      {p.icon}
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">{p.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{p.desc}</p>
                </div>

                {/* Tarjeta de Código UI Interactiva a la Derecha */}
                <div className="w-full sm:w-1/2">
                  <div className="bg-slate-50 border-2 border-slate-200/90 rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all">
                    {/* Header estilo App B2B */}
                    <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <span className="text-[11px] font-black text-slate-800 uppercase tracking-wider">Agrovio B2B</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Paso {p.num}</span>
                    </div>

                    {/* Contenido Visual según el Paso */}
                    {idx === 0 && (
                      /* PASO 01: Se publica la oferta */
                      <div className="bg-white rounded-2xl p-4 border border-slate-200 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-xl">🥑</div>
                          <div>
                            <h4 className="text-xs font-black text-slate-900">Palta Hass - Calibre 20</h4>
                            <p className="text-[10px] text-slate-500">Ica · 15 Toneladas disponibles</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-[10px] pt-2 border-t border-slate-100 text-slate-600 font-medium">
                          <span>Estado: <strong className="text-emerald-700 font-bold">Publicado en Mercado</strong></span>
                          <span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-md">Verificado</span>
                        </div>
                      </div>
                    )}

                    {idx === 1 && (
                      /* PASO 02: El mercado la descubre */
                      <div className="bg-white rounded-2xl p-4 border border-slate-200 space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 border-b border-slate-100 pb-2">
                          <span>Filtro: Palta Hass / Ica</span>
                          <span className="text-emerald-600 font-black">3 Resultados</span>
                        </div>
                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className="text-base">🥑</span>
                            <span className="font-bold text-slate-800 text-[11px]">15 TM · Calidad Premium</span>
                          </div>
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">Explorar</span>
                        </div>
                      </div>
                    )}

                    {idx === 2 && (
                      /* PASO 03: Comienza la negociación */
                      <div className="bg-white rounded-2xl p-4 border border-slate-200 space-y-2.5">
                        <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
                          <span>Oferta referencial:</span>
                          <span className="font-bold text-slate-800">S/ 1.80/kg</span>
                        </div>
                        <div className="bg-emerald-50 p-2 rounded-xl border border-emerald-100 flex justify-between items-center text-xs text-emerald-800">
                          <span className="text-[11px]">Propuesta comprador:</span>
                          <span className="font-bold text-emerald-900">S/ 1.70/kg</span>
                        </div>
                        <div className="flex gap-2 pt-1">
                          <span className="flex-1 text-center text-[10px] font-bold bg-emerald-600 text-white py-1.5 rounded-lg shadow-xs">Aceptar</span>
                          <span className="flex-1 text-center text-[10px] font-bold bg-slate-100 text-slate-700 py-1.5 rounded-lg border border-slate-200">Contraofertar</span>
                        </div>
                      </div>
                    )}

                    {idx === 3 && (
                      /* PASO 04: Se alcanza un acuerdo */
                      <div className="bg-white rounded-2xl p-4 border border-slate-200 space-y-3 text-center">
                        <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 font-black text-xs px-3 py-1.5 rounded-full border border-emerald-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700" /> ACUERDO ALCANZADO
                        </div>
                        <div className="text-xs text-slate-600 space-y-1">
                          <p>Precio final: <strong className="text-slate-900 font-black">S/ 1.70 / kg</strong></p>
                          <p>Volumen acordado: <strong className="text-slate-900 font-bold">15 Toneladas</strong></p>
                        </div>
                      </div>
                    )}

                    {idx === 4 && (
                      /* PASO 05: Se habilita la conexión */
                      <div className="bg-white rounded-2xl p-4 border border-slate-200 space-y-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-[11px] font-bold text-slate-600">Contacto Desbloqueado:</span>
                          <span className="text-[10px] font-black bg-emerald-600 text-white px-2 py-0.5 rounded">1 Crédito usado</span>
                        </div>
                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span>Contacto directo habilitado</span>
                        </div>
                      </div>
                    )}

                  </div>
                </div>

              </div>
            ))}
          </div>
        </motion.section>

        {/* 3. PASO 1 — EL PROVEEDOR PUBLICA */}
        <motion.section 
          {...scrollAnimation}
          className="py-16 sm:py-24 bg-slate-100 border-y border-slate-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-200/60 px-3 py-1 rounded-md">Paso 1</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900">Todo comienza con una oferta visible</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Los proveedores pueden publicar directamente desde Agrovio indicando la información necesaria para que un comprador pueda evaluar el producto.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-700 font-medium w-full text-left">
                {datosVisibles.slice(0, 8).map((dato, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200 shadow-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" /> {dato}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative group">
                <div className="absolute inset-0 bg-emerald-400/10 rounded-3xl blur-xl pointer-events-none" />
                <img 
                  src="/images/paso1_comofunciona.png" 
                  alt="Pantalla de Crear Publicación & Tarjeta Comercial - Agrovio" 
                  className="relative z-10 w-full h-auto max-h-[500px] object-contain rounded-3xl shadow-xl border border-slate-200/80 hover:scale-[1.02] transition-transform duration-300 bg-white"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* 4. ALTERNATIVA PARA PEQUEÑOS AGRICULTORES (WHATSAPP) */}
        <motion.section 
          {...scrollAnimation}
          className="py-16 sm:py-24 bg-emerald-950 text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start">
              <h2 className="text-2xl sm:text-4xl font-black">También se puede publicar con asistencia por WhatsApp</h2>
              <p className="text-sm sm:text-base text-emerald-100 leading-relaxed font-light">
                Para pequeños agricultores con menor acceso digital, Agrovio ofrece una forma más sencilla de participar. El productor envía por WhatsApp fotos, volumen, ubicación y fechas.
              </p>
              
              <div className="w-full bg-emerald-900/50 p-6 rounded-2xl border border-emerald-800/50 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">Después de publicar (Vía WhatsApp)</h4>
                <ul className="text-xs text-emerald-100 space-y-2 text-left">
                  <li className="flex items-center gap-2">• Confirmación de publicación.</li>
                  <li className="flex items-center gap-2">• Recepción de nuevas ofertas.</li>
                  <li className="flex items-center gap-2">• Contraofertas.</li>
                  <li className="flex items-center gap-2">• Avisos sobre el avance de la negociación.</li>
                </ul>
              </div>

              <div className="bg-emerald-800/80 p-4 rounded-xl text-xs sm:text-sm font-bold text-white text-center w-full border border-emerald-700">
                <MessageSquare className="w-4 h-4 inline-block mr-2 mb-0.5 text-emerald-300" />
                WhatsApp facilita el acceso; la oportunidad comercial sigue organizada dentro de Agrovio.
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              {/* Mockup de Celular con Chat de WhatsApp */}
              <div className="mx-auto max-w-[340px] bg-slate-950 p-4 rounded-[2.5rem] shadow-2xl border-4 border-slate-800 relative group hover:scale-[1.02] transition-transform duration-300">
                {/* Notch / Cámara frontal */}
                <div className="w-24 h-4 bg-slate-900 rounded-full mx-auto mb-3" />
                
                {/* Pantalla del teléfono */}
                <div className="bg-[#efeae2] rounded-[1.8rem] overflow-hidden text-slate-900 shadow-inner border border-slate-700/50">
                  {/* Header de WhatsApp */}
                  <div className="bg-[#075e54] text-white p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-xs">🌱</div>
                    <div>
                      <h4 className="text-xs font-bold leading-tight">Agrovio</h4>
                      <p className="text-[10px] text-emerald-200 leading-none">Asistencia para publicación</p>
                    </div>
                  </div>

                  {/* Cuerpo del Chat */}
                  <div className="p-3 space-y-3 text-[11px] font-sans">
                    {/* Mensaje de respuesta asistida en WhatsApp */}
                    <div className="bg-white p-3 rounded-2xl rounded-tl-xs shadow-xs border border-slate-200 space-y-2 text-slate-800">
                      <p className="font-bold text-[#075e54] text-[11px]">📋 Revisa tu publicación:</p>
                      
                      <div className="space-y-0.5 text-[10px] leading-tight text-slate-700 pl-1 border-l-2 border-emerald-500">
                        <p><strong className="text-slate-900">Producto:</strong> Mandarina</p>
                        <p><strong className="text-slate-900">Variedad:</strong> Tango</p>
                        <p><strong className="text-slate-900">Volumen:</strong> 10,000 kg</p>
                        <p><strong className="text-slate-900">Calibre:</strong> 55mm hacia arriba</p>
                        <p><strong className="text-slate-900">Color:</strong> Maduro / Pintón</p>
                        <p><strong className="text-slate-900">Fotos:</strong> 4</p>
                        <p><strong className="text-slate-900">Precio:</strong> S/ 1.92 / kg</p>
                        <p><strong className="text-slate-900">Ubicación:</strong> Pisco</p>
                        <p><strong className="text-slate-900">Disponible:</strong> Ya está lista</p>
                      </div>

                      <div className="pt-1.5 border-t border-slate-100 space-y-1 text-[10px]">
                        <p className="font-bold text-slate-900">¿Todo correcto?</p>
                        <p className="text-emerald-800 font-medium">1. ✅ Confirmar y publicar</p>
                        <p className="text-slate-700 font-medium">2. ✏️ Corregir algo</p>
                        <p className="text-slate-500 font-medium">3. ❌ Cancelar publicación</p>
                      </div>

                      <div className="text-[9px] text-slate-400 text-right pt-0.5">10:22 ✓✓</div>
                    </div>

                    {/* Respuesta del Productor */}
                    <div className="bg-[#dcf8c6] p-2.5 rounded-2xl rounded-tr-xs shadow-xs text-right ml-auto max-w-[80%] text-[10px] font-bold text-slate-900">
                      <span>1</span>
                      <span className="text-[9px] text-emerald-800 ml-2">10:23 ✓✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 5 & 6. PASO 2 — ENCONTRAR OFERTA Y QUÉ VE EL COMPRADOR */}
        <motion.section 
          {...scrollAnimation}
          className="py-16 sm:py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            
            {/* 5. Marketplace y Filtros */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="relative group">
                  <div className="absolute inset-0 bg-emerald-400/10 rounded-3xl blur-xl pointer-events-none" />
                  <img 
                    src="/images/paso2_comofunciona.png" 
                    alt="Toda la oferta disponible en un solo mercado - Agrovio" 
                    className="relative z-10 w-full h-auto max-h-[500px] object-contain rounded-3xl shadow-xl border border-slate-200/80 hover:scale-[1.02] transition-transform duration-300 bg-white"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-md">Paso 2</span>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900">Toda la oferta disponible en un solo mercado</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Los compradores acceden a las publicaciones disponibles y pueden buscar según las necesidades específicas de su operación mediante filtros precisos.
                </p>
                <div className="flex flex-wrap gap-2 pt-2 justify-center sm:justify-start">
                  {['Producto', 'Categoría', 'Región', 'Volumen', 'Condición', 'Disponibilidad', 'Presentación', 'Precio'].map(filtro => (
                    <span key={filtro} className="text-[11px] font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
                      {filtro}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 6. Privacidad */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center bg-slate-50 p-8 sm:p-12 rounded-[2rem] border border-slate-200">
              <div className="lg:col-span-6 space-y-6 text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">La oportunidad es visible. La identidad permanece protegida.</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Antes de que exista una conexión comercial, Agrovio muestra la información necesaria para evaluar la oferta sin revelar directamente al proveedor.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5"><Shield className="w-4 h-4"/> Visible</h4>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Producto y volumen</li>
                      <li>• Fotografías y región</li>
                      <li>• Precio y disponibilidad</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5"><Lock className="w-4 h-4"/> Protegido</h4>
                    <ul className="text-xs text-slate-500 space-y-1 italic">
                      <li>• Nombre del proveedor</li>
                      <li>• Número telefónico</li>
                      <li>• Datos de contacto</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                {/* Imagen del campo a agrovio en la sección de tarjeta protegida */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-3xl blur-xl pointer-events-none" />
                  <img 
                    src="/images/del_campo_a_agrovio.png" 
                    alt="Del campo a Agrovio - Oportunidad visible e identidad protegida" 
                    className="relative z-10 w-full h-auto max-h-[420px] object-contain rounded-3xl shadow-xl border border-slate-200/80 hover:scale-[1.02] transition-transform duration-300 bg-white p-2"
                  />
                </div>
              </div>
            </div>

          </div>
        </motion.section>

        {/* 7. PASO 3 — NEGOCIACIÓN (Fondo Oscuro) */}
        <motion.section 
          {...scrollAnimation}
          className="py-16 sm:py-24 bg-emerald-900 text-white"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-6">
              <span className="inline-block mb-4 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-3 py-1 rounded border border-emerald-800">
                Paso 3
              </span>
              <h2 className="text-2xl sm:text-4xl font-black">El precio se negocia dentro de Agrovio</h2>
              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-2xl mx-auto">
                El proveedor recibe la oferta y puede aceptarla, rechazarla o presentar una contraoferta. El proceso continúa hasta alcanzar condiciones aceptables. Debe sentirse como negociación comercial B2B.
              </p>
            </div>
            
            {/* Imagen Tigui Laptop en Paso 3 con Marco Blanco Integrado y Borde Verde Suave */}
            <div className="flex justify-center items-center">
              <div className="relative group max-w-4xl w-full">
                <div className="absolute inset-0 bg-emerald-400/20 rounded-[2.5rem] blur-3xl pointer-events-none" />
                <div className="relative z-10 p-2 sm:p-4 rounded-[2.5rem] bg-white border-4 border-emerald-500/30 shadow-2xl overflow-hidden transition-all duration-300">
                  <img 
                    src={tiguiLaptopImg} 
                    alt="Tigui en Laptop negociando oferta comercial" 
                    className="w-full h-auto max-h-[580px] object-contain rounded-[2rem] group-hover:scale-[1.01] transition-transform duration-300 bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 8. PASO 4 — CRÉDITO DE CONEXIÓN (Fondo Verde Claro para Contraste) */}
        <motion.section 
          {...scrollAnimation}
          className="py-20 sm:py-32 bg-emerald-50 text-slate-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="space-y-6 text-center sm:text-left">
                <span className="inline-block mb-4 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded border border-emerald-200">
                  Paso 4
                </span>
                <h2 className="text-2xl sm:text-4xl font-black">El contacto se desbloquea cuando la negociación avanza</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Al alcanzar un acuerdo de precio y condiciones principales, el comprador utiliza un <strong>crédito de conexión</strong> incluido en su plan. Ese crédito habilita los datos para continuar directamente con el proveedor.
                </p>
                <div className="bg-white p-5 rounded-2xl border border-emerald-200 text-xs sm:text-sm text-emerald-800 shadow-sm text-left">
                  <strong className="text-emerald-950 block mb-1">Importante:</strong> 
                  Explorar, comparar y presentar ofertas NO consume créditos. El crédito solo se utiliza al momento de desbloquear el contacto una vez que ambas partes acuerdan.
                </div>
              </div>

              {/* Maqueta UI elaborada Paso 4: Desbloqueo de contacto */}
              <div>
                <div className="bg-white border-2 border-emerald-200/90 rounded-[2.5rem] p-6 sm:p-8 shadow-xl space-y-5 hover:shadow-2xl transition-all">
                  {/* Header de Estado */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-black text-slate-800 uppercase tracking-wider">Agrovio B2B</span>
                    </div>
                    <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                      PASO 04
                    </span>
                  </div>

                  {/* Detalle del Acuerdo */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-bold">Acuerdo Alcanzado:</span>
                      <span className="font-black text-slate-900">8t · S/ 1.70/kg</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-emerald-600 text-white p-3 rounded-xl shadow-md">
                      <span className="text-xs font-bold">Contacto Desbloqueado:</span>
                      <span className="text-[11px] font-black bg-emerald-950 px-2.5 py-1 rounded-lg">1 Crédito usado</span>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-emerald-200 flex items-center justify-between text-xs font-bold text-slate-800 shadow-xs">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Contacto directo habilitado</span>
                      </div>
                      <span className="text-emerald-700 text-[10px] uppercase font-black bg-emerald-50 px-2 py-0.5 rounded">Activo</span>
                    </div>
                  </div>

                  {/* Ficha del Proveedor Desbloqueado */}
                  <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-100 space-y-2 text-xs">
                    <p className="font-bold text-slate-900 flex items-center justify-between">
                      <span>Proveedor: Fundo los Naranjos</span>
                      <span className="text-emerald-700 font-bold text-[11px]">✓ Verificado</span>
                    </p>
                    <p className="text-slate-600">Contacto: Carlos Rodríguez (+51 926 474 032)</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.section>

        {/* 9 & 11. PASO 5 & LO QUE ORGANIZA AGROVIO */}
        <motion.section 
          {...scrollAnimation}
          className="py-20 sm:py-32 bg-white border-y border-slate-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
            
            {/* 9. La Operación */}
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-md">Paso 5</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900">Del acuerdo digital a la operación comercial</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Una vez habilitada la conexión, comprador y proveedor coordinan la documentación, recojo, logística y calidad acordada. Agrovio conserva el registro de la oportunidad y del acuerdo alcanzado para facilitar el seguimiento (Estado: En coordinación).
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-widest pt-4">
                <span>Acuerdo</span>
                <span className="text-emerald-500">→</span>
                <span>Contacto</span>
                <span className="text-emerald-500">→</span>
                <span>Coordinación</span>
                <span className="text-emerald-500">→</span>
                <span className="text-emerald-700">Operación</span>
              </div>
            </div>

            {/* 11. Lo que organiza (Antes / Después) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-50 p-8 sm:p-12 rounded-[2rem] border border-slate-200 shadow-sm">
              <div className="lg:col-span-5 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Agrovio organiza lo que hoy está disperso</h2>
                
                <div className="space-y-4 pt-4">
                  <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
                    <h4 className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-1">Antes (Caótico)</h4>
                    <p className="text-xs sm:text-sm text-slate-700">Llamadas · WhatsApp · contactos privados · hojas de cálculo · referencias</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">Con Agrovio (Organizado)</h4>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">Oferta → Búsqueda → Negociación → Acuerdo → Conexión</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-sm">Oferta estructurada</h4>
                  <p className="text-xs text-slate-600">Información comercial comparable para tomar mejores decisiones.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-sm">Negociación registrada</h4>
                  <p className="text-xs text-slate-600">Propuestas y contraofertas centralizadas en un mismo lugar.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-sm">Información protegida</h4>
                  <p className="text-xs text-slate-600">La identidad y el contacto directo no se entregan desde el inicio.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-sm">Acceso flexible</h4>
                  <p className="text-xs text-slate-600">Plataforma web completa y asistencia por WhatsApp para productores.</p>
                </div>
              </div>
            </div>

          </div>
        </motion.section>

        {/* 10. DOS EXPERIENCIAS, UNA MISMA PLATAFORMA */}
        <motion.section 
          {...scrollAnimation}
          className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Dos experiencias, una misma plataforma</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Imagen a la izquierda en Desktop (lg:order-1) y al final en Celular (order-2) */}
              <div className="lg:col-span-4 flex justify-center items-center order-2 lg:order-1">
                <div className="relative group">
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-2xl group-hover:bg-emerald-400/30 transition-all pointer-events-none" />
                  <img 
                    src="/images/tigui_celebrando.png" 
                    alt="Tigui Celebrando Agrovio" 
                    className="relative z-10 max-h-[380px] lg:max-h-[440px] w-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Cards de Proveedor y Comprador a la derecha en Desktop (lg:order-2) y primero en Celular (order-1) */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch order-1 lg:order-2">
                
                {/* Card Proveedor */}
                <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-200 flex flex-col justify-between h-full space-y-6 hover:border-emerald-300 transition-colors shadow-sm hover:shadow-xl">
                  <div className="space-y-5">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center shadow-inner">
                      <Store className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1 block">Para Proveedores</span>
                      <h3 className="text-xl font-black text-slate-900">Haz visible lo que tienes para vender</h3>
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2.5 font-medium">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Publica productos y actualiza disponibilidad.</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Recibe propuestas de compradores interesados.</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Contraoferta y administra negociaciones.</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Recibe alertas por plataforma o WhatsApp.</li>
                    </ul>
                  </div>
                  <Link to="/proveedores" className="inline-block w-full py-3.5 text-center font-bold text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl hover:border-emerald-500 hover:text-emerald-700 hover:bg-white transition-all">
                    Conocer Agrovio para proveedores
                  </Link>
                </div>

                {/* Card Comprador */}
                <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-200 flex flex-col justify-between h-full space-y-6 hover:border-emerald-300 transition-colors shadow-sm hover:shadow-xl">
                  <div className="space-y-5">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center shadow-inner">
                      <Search className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1 block">Para Compradores</span>
                      <h3 className="text-xl font-black text-slate-900">Encuentra lo que tu operación necesita</h3>
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2.5 font-medium">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Explora, filtra y compara toda la oferta.</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Presenta propuestas y negocia condiciones.</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Desbloquea al proveedor tras un acuerdo.</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Administra conexiones comerciales.</li>
                    </ul>
                  </div>
                  <Link to="/compradores" className="inline-block w-full py-3.5 text-center font-bold text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl hover:border-emerald-500 hover:text-emerald-700 hover:bg-white transition-all">
                    Conocer Agrovio para compradores
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </motion.section>

        {/* 12. TIPOS DE PRODUCTOS CON IMÁGENES REALES */}
        <motion.section 
          {...scrollAnimation}
          className="py-16 sm:py-24 bg-white border-b border-slate-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900">Un mercado para distintas formas de oferta</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tarjeta 1: Productos Frescos con mandarina.jpg */}
              <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col h-full group">
                <div className="h-48 overflow-hidden bg-slate-200">
                  <img 
                    src={mandarinaImg} 
                    alt="Productos frescos" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3 flex-grow">
                  <h3 className="font-bold text-slate-900 flex items-center gap-2"><LeafyGreen className="w-5 h-5 text-emerald-600"/> Productos frescos</h3>
                  <p className="text-sm text-slate-600">Frutas, hortalizas y otros productos agrícolas disponibles para comercialización inmediata.</p>
                </div>
              </div>

              {/* Tarjeta 2: Descartes y Excedentes con fresa.jpg */}
              <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col h-full group">
                <div className="h-48 overflow-hidden bg-slate-200">
                  <img 
                    src={fresaImg} 
                    alt="Descartes y excedentes" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3 flex-grow">
                  <h3 className="font-bold text-slate-900 flex items-center gap-2"><Sprout className="w-5 h-5 text-emerald-600"/> Descartes y excedentes</h3>
                  <p className="text-sm text-slate-600">Producto poscosecha con valor comercial que necesita encontrar mercado en menor tiempo.</p>
                </div>
              </div>

              {/* Tarjeta 3: Productos Agroindustriales con procesadora.jpg */}
              <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col h-full group">
                <div className="h-48 overflow-hidden bg-slate-200">
                  <img 
                    src={procesadoraImg} 
                    alt="Productos agroindustriales" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3 flex-grow">
                  <h3 className="font-bold text-slate-900 flex items-center gap-2"><Factory className="w-5 h-5 text-emerald-600"/> Productos agroindustriales</h3>
                  <p className="text-sm text-slate-600">Harinas, aceites, fibras, pulpas, deshidratados y otros derivados del sector.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 13. PREGUNTAS FRECUENTES (FAQ ACORDEÓN) */}
        <motion.section 
          {...scrollAnimation}
          className="py-20 sm:py-28 bg-slate-50"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Preguntas Frecuentes</h2>
              <p className="text-slate-600">Todo lo que necesitas saber sobre el funcionamiento de Agrovio.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = !!openFaqs[i];
                return (
                  <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all">
                    <button
                      onClick={() => toggleFaq(i)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-bold text-slate-900 hover:text-emerald-700 transition-colors focus:outline-none"
                    >
                      <span className="text-base sm:text-lg">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-emerald-600 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* 14. CTA FINAL */}
        <motion.section 
          {...scrollAnimation}
          className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-white text-center relative overflow-hidden bg-agrovio-gradient"
        >
          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Empieza a comercializar de una manera más conectada
            </h2>
            <p className="text-base sm:text-lg text-emerald-100 font-light max-w-2xl mx-auto">
              Publica productos, encuentra oferta y negocia oportunidades comerciales desde Agrovio.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/comenzar?role=proveedor"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-agrovio-gradient-invert text-white border border-emerald-300/40 font-black text-base shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <span>Unirme como proveedor</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                to="/comenzar?role=comprador"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-white text-agrovio-dark font-black text-base shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <span>Unirme como comprador</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

            <div className="pt-4">
              <Link to="/compradores" className="text-xs font-semibold text-emerald-200 underline hover:text-white transition-colors">
                Explorar la plataforma
              </Link>
            </div>

            <p className="text-xs font-mono text-emerald-200/80 pt-6">
              Agrovio — Cada producto, su mejor mercado.
            </p>
          </div>
        </motion.section>

      </main>
    </div>
  );
};

export default ComoFunciona;