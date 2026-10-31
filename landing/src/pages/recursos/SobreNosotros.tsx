import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollAnimation, hoverButton } from '../../utils/animations';
import { 
  Compass, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Smartphone, 
  MessageSquare
} from 'lucide-react';

export const SobreNosotros: React.FC = () => {

  const principios = [
    { 
      title: 'Escuchar primero', 
      desc: 'Conversamos con productores, compradores, procesadoras y otros actores antes de definir soluciones.',
      icon: MessageSquare 
    },
    { 
      title: 'Simplificar', 
      desc: 'La tecnología debe reducir fricción y desorganización, nunca agregar complejidad.',
      icon: Sparkles 
    },
    { 
      title: 'Proteger la relación comercial', 
      desc: 'La información necesaria para negociar debe ser visible sin exponer innecesariamente los datos de las partes.',
      icon: ShieldCheck 
    },
    { 
      title: 'Diseñar para diferentes realidades', 
      desc: 'Una empresa puede utilizar directamente la plataforma; un pequeño agricultor puede necesitar una experiencia asistida por WhatsApp.',
      icon: Smartphone 
    }
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
              className="lg:col-span-7 space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-emerald-100 backdrop-blur-md border border-white/20">
                <Compass className="w-4 h-4 text-emerald-300" /> Sobre Nosotros
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Reconstruimos Agrovio desde la realidad del sector agricola
              </h1>

              <p className="text-base sm:text-xl text-emerald-50 leading-relaxed font-light">
                Agrovio nace para hacer más visible, organizada y accesible la comercialización poscosecha de productos agrícolas y agroindustriales.
              </p>

              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
                Escuchamos a productores, plantas, compradores y otros actores de la cadena para entender cómo se comercializa hoy y construir una plataforma que responda a esas necesidades reales.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 pt-4 w-full sm:w-auto">
                <motion.div {...hoverButton} className="w-full sm:w-auto">
                  <Link
                    to="/comenzar"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full bg-agrovio-gradient-invert text-white font-black text-base shadow-[0_10px_35px_rgba(76,162,84,0.4)] border border-emerald-300/40 hover:scale-105 transition-all duration-300 group gap-3"
                  >
                    <span>Unirme a Agrovio</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </motion.div>
                <Link
                  to="/recursos/voces-del-campo"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-full font-bold text-sm bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all gap-2"
                >
                  Conocer Voces del campo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Imagen Principal Auténtica */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute inset-0 bg-emerald-400/20 rounded-3xl blur-2xl pointer-events-none" />
                <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl backdrop-blur-md bg-white/10 p-2 h-80 sm:h-96">
                  <img 
                    src="/images/sobre_nosotros.png" 
                    alt="Conversación documental en planta agrícola Agrovio" 
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. QUIÉNES SOMOS - EQUIPO AGROVIO */}
        <motion.section 
          {...scrollAnimation}
          className="py-16 sm:py-24 bg-white border-y border-slate-200"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900">Equipo Agrovio</h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium">
                Agrovio combina conocimiento operativo de la oferta con desarrollo comercial y conexión con compradores.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
              
              {/* Tigui */}
              <div className="relative flex flex-col items-center justify-center p-2">
                <span className="absolute top-0 left-0 z-10 text-[10px] sm:text-xs font-bold text-emerald-800 bg-emerald-100/90 backdrop-blur-sm px-3 py-1 rounded-full border border-emerald-300 shadow-sm">
                  Equipo
                </span>
                <img 
                  src="/images/tigui_equipo.png" 
                  alt="Tigui" 
                  className="w-64 h-64 sm:w-80 sm:h-80 object-contain shrink-0" 
                />
              </div>

              {/* Diego Torres (Foto más grande) */}
              <div className="w-full bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-emerald-500/50 transition-all flex flex-col items-center text-center space-y-5">
                <img 
                  src="/images/Diego.jpeg" 
                  alt="Diego Torres" 
                  className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-2xl shadow-inner shrink-0 bg-white" 
                /> 
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200 mt-2">
                  Producto y operaciones
                </span>
                <h3 className="text-2xl font-black text-slate-900">Diego Torres</h3>
              </div>

              {/* Salvador Breña Mena (Foto más grande) */}
              <div className="w-full bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-emerald-500/50 transition-all flex flex-col items-center text-center space-y-5">
                <img 
                  src="/images/Salvador.jpeg" 
                  alt="Salvador Breña Mena" 
                  className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-2xl shadow-inner shrink-0 bg-white" 
                /> 
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200 mt-2">
                  Comercial y Alianzas
                </span>
                <h3 className="text-2xl font-black text-slate-900">Salvador Breña Mena</h3>
              </div>

            </div>
          </div>
        </motion.section>

        {/* 5. CÓMO CONSTRUIMOS AGROVIO */}
        <motion.section 
          {...scrollAnimation}
          className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Construimos desde el mercado, no desde suposiciones
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">Cuatro principios en cada decisión estratégica.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principios.map((p, idx) => {
              const IconComponent = p.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-500 transition-all space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* 6. QUÉ QUEREMOS CAMBIAR */}
        <motion.section 
          {...scrollAnimation}
          className="py-16 sm:py-20 bg-slate-100 border-y border-slate-200 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
                De un mercado fragmentado a un mercado más visible
              </h2>
            </div>

            {/* Contenedor más angosto para achicar las tarjetas */}
            <div className="max-w-4xl mx-auto space-y-10 relative">
              
              {/* Grilla de tarjetas comparativas centradas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch relative">
                
                {/* Tarjeta 1: Hoy */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-rose-200 shadow-sm space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
                    Hoy
                  </span>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-center gap-2">• Oferta dispersa.</li>
                    <li className="flex items-center gap-2">• Dependencia de contactos personales.</li>
                    <li className="flex items-center gap-2">• Información difícil de comparar.</li>
                    <li className="flex items-center gap-2">• Negociaciones repartidas entre canales.</li>
                    <li className="flex items-center gap-2">• Poca visibilidad fuera de las redes conocidas.</li>
                  </ul>
                </div>

                {/* Tarjeta 2: Con Agrovio (con Tigui superpuesto) */}
                <div className="relative bg-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-500 shadow-md space-y-4 z-10">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                    Con Agrovio
                  </span>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-900 font-medium">
                    <li className="flex items-center gap-2 text-emerald-800">✓ Oferta centralizada.</li>
                    <li className="flex items-center gap-2 text-emerald-800">✓ Más compradores y proveedores visibles.</li>
                    <li className="flex items-center gap-2 text-emerald-800">✓ Información estructurada.</li>
                    <li className="flex items-center gap-2 text-emerald-800">✓ Negociaciones organizadas.</li>
                    <li className="flex items-center gap-2 text-emerald-800">✓ Nuevas conexiones comerciales.</li>
                  </ul>

                  {/* Tigui recostado con la mano sobre el cuadro */}
                  <div className="hidden md:block absolute -right-32 lg:-right-44 -bottom-4 w-60 lg:w-80 h-[115%] pointer-events-none z-20">
                    <img 
                      src="/images/tigui_mercado.png" 
                      alt="Tigui apoyado en el cuadro Con Agrovio" 
                      className="w-full h-full object-contain object-bottom"
                    />
                  </div>
                </div>

              </div>

              {/* Tigui versión Mobile */}
              <div className="md:hidden flex justify-center pt-2">
                <img 
                  src="/images/tigui_mercado.png" 
                  alt="Tigui en el mercado agrícola Agrovio" 
                  className="w-56 h-56 object-contain"
                />
              </div>

              {/* Frase verde centrada abajo ajustada al nuevo ancho */}
              <div className="text-center bg-emerald-950 text-white p-6 sm:p-8 rounded-2xl shadow-md max-w-3xl mx-auto">
                <p className="text-sm sm:text-base font-semibold leading-relaxed text-emerald-50">
                  “No buscamos reemplazar las relaciones comerciales. Buscamos hacer más fácil encontrarlas, evaluarlas y construirlas.”
                </p>
              </div>

            </div>
          </div>
        </motion.section>

        {/* 10. CONOCE MÁS DE AGROVIO */}
        <motion.section 
          {...scrollAnimation}
          className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto space-y-8">
            <h2 className="text-xl sm:text-3xl font-black text-slate-900 text-center sm:text-left">
              Explora más sobre la plataforma
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/recursos/voces-del-campo" className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-500 shadow-sm transition-all group space-y-3">
                <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">Voces del campo</h3>
                <p className="text-xs text-slate-600">Conoce las conversaciones y observaciones que están dando forma a Agrovio.</p>
                <span className="text-xs font-bold text-emerald-600 inline-flex items-center gap-1">Explorar historias →</span>
              </Link>

              <Link to="/recursos/como-funciona" className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-500 shadow-sm transition-all group space-y-3">
                <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">Cómo funciona</h3>
                <p className="text-xs text-slate-600">Descubre cómo proveedores y compradores comercializan dentro de la plataforma.</p>
                <span className="text-xs font-bold text-emerald-600 inline-flex items-center gap-1">Ver cómo funciona →</span>
              </Link>

              <Link to="/recursos/casos-de-uso" className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-500 shadow-sm transition-all group space-y-3">
                <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">Casos de uso</h3>
                <p className="text-xs text-slate-600">Conoce diferentes situaciones en las que Agrovio conecta oferta y demanda.</p>
                <span className="text-xs font-bold text-emerald-600 inline-flex items-center gap-1">Explorar casos →</span>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* 11. CTA FINAL */}
        <motion.section 
          {...scrollAnimation}
          className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-white text-center relative overflow-hidden bg-agrovio-gradient"
        >
          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Construyamos un mercado más conectado
            </h2>
            <p className="text-base sm:text-lg text-emerald-100 font-light max-w-2xl mx-auto">
              Forma parte de Agrovio como proveedor o comprador y comienza a descubrir nuevas oportunidades comerciales.
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

export default SobreNosotros;