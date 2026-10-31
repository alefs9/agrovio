import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollAnimation, hoverButton } from '../../utils/animations';
import { 
  Quote, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  MessageSquare, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles,
  BookOpen
} from 'lucide-react';

export const VocesDelCampo: React.FC = () => {
  const observacionesHuaura = [
    { title: "Información comercial manual", desc: "Precios, compradores y disponibilidad se conocen principalmente mediante llamadas y reuniones." },
    { title: "Dependencia de intermediarios", desc: "Acopiadores y comerciantes cumplen un papel importante conectando la producción con el mercado." },
    { title: "La red importa", desc: "Quien tiene más contactos suele tener más alternativas para colocar su producto." }
  ];

  const observacionesSantaSofia = [
    { title: "Disponibilidad inmediata", desc: "La oferta puede aparecer de un día para otro." },
    { title: "Precio cambiante", desc: "El valor depende del producto, condición, volumen y demanda disponible." },
    { title: "Tiempo crítico", desc: "Mientras más demora el producto en encontrar mercado, menores pueden ser las alternativas." }
  ];

  const patrones = [
    { icon: <MessageSquare className="w-5 h-5 text-emerald-600 shrink-0" />, title: "Información dispersa", desc: "Oferta, demanda y precios circulan entre llamadas, mensajes y conversaciones privadas." },
    { icon: <Users className="w-5 h-5 text-emerald-600 shrink-0" />, title: "Redes cerradas", desc: "Muchas oportunidades dependen de conocer previamente al comprador o proveedor." },
    { icon: <Clock className="w-5 h-5 text-emerald-600 shrink-0" />, title: "Poco tiempo para decidir", desc: "En productos perecibles, la velocidad comercial importa tanto como el precio." },
    { icon: <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0" />, title: "Oferta poco visible", desc: "Puede existir producto disponible sin que el comprador adecuado sepa que está ahí." },
    { icon: <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />, title: "Negociación desorganizada", desc: "Las propuestas y contraofertas suelen quedar repartidas entre llamadas y chats." }
  ];

  const correspondencias = [
    { quote: "“No sé quién está comprando”", solution: "Oferta visible para nuevos compradores" },
    { quote: "“Todo lo manejo por llamadas”", solution: "Publicaciones, ofertas y negociaciones organizadas" },
    { quote: "“Necesito vender rápido”", solution: "Disponibilidad y condiciones comerciales visibles" },
    { quote: "“Solo manejo WhatsApp”", solution: "Publicación asistida para pequeños agricultores" },
    { quote: "“No quiero entregar mis contactos desde el inicio”", solution: "Identidad protegida hasta avanzar en la negociación" }
  ];

  return (
    <div className="w-full font-sans text-gray-900">
      {/* HERO SECTION */}
      <section 
        className="relative text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: 'linear-gradient(60deg, #285c48 0%, #397f4d 50%, #4ca254 100%)' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          <motion.div 
            {...scrollAnimation}
            className="lg:col-span-7 space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-emerald-100 backdrop-blur-md border border-white/20">
              <Sparkles className="w-4 h-4 text-emerald-300" /> Historias del Agro Peruano
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Escuchamos antes de construir
            </h1>

            <p className="text-base sm:text-xl text-emerald-50 leading-relaxed font-light">
              Agrovio nace de conversaciones con productores, acopiadores, plantas procesadoras y compradores que viven todos los días los retos de la comercialización poscosecha.
            </p>

            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              Visitamos el campo para entender cómo se mueve realmente la oferta, cómo se encuentran los compradores y dónde se pierden oportunidades.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 pt-2 w-full sm:w-auto">
              <motion.div {...hoverButton}>
                <Link
                  to="/comenzar"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-sm bg-agrovio-gradient-invert text-white shadow-[0_10px_35px_rgba(76,162,84,0.4)] border border-emerald-300/40 hover:scale-105 transition-all gap-2"
                >
                  <span>Unirme a Agrovio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <a
                href="#historias"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full font-bold text-sm bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all"
              >
                Explorar historias ↓
              </a>
            </div>
          </motion.div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-white/10 p-2 backdrop-blur-md w-full">
              <img 
                src="/images/hero_voces.jpg" 
                alt="Fotografía Documental en Campo" 
                className="w-full h-auto object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO: ¿QUÉ ESCUCHAMOS? */}
      <motion.section 
        {...scrollAnimation}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Distintos actores. Problemas que se repiten.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Aunque cada producto y región funciona de manera diferente, aparecen patrones comunes en la comercialización poscosecha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card Productores */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                <Quote className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Productores</h3>
            </div>
            <p className="text-emerald-800 font-semibold italic text-sm sm:text-base">
              “Sé producir, pero encontrar al comprador correcto sigue dependiendo de contactos.”
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              La producción puede estar lista sin que exista información clara sobre quién compra, cuánto necesita o qué precio está dispuesto a pagar.
            </p>
          </div>

          {/* Card Plantas */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                <Quote className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Plantas y Procesadoras</h3>
            </div>
            <p className="text-emerald-800 font-semibold italic text-sm sm:text-base">
              “El producto tiene que salir rápido.”
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Cuando existe descarte, excedente o producto con vida útil limitada, cada día adicional reduce las alternativas comerciales.
            </p>
          </div>

          {/* Card Compradores */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                <Quote className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Compradores y Acopiadores</h3>
            </div>
            <p className="text-emerald-800 font-semibold italic text-sm sm:text-base">
              “La oferta existe, pero encontrarla toma tiempo.”
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Buscar producto suele implicar llamadas, referencias personales, grupos de WhatsApp y validaciones individuales.
            </p>
          </div>
        </div>
      </motion.section>

      {/* HISTORIAS DE CAMPO */}
      <motion.section 
        {...scrollAnimation}
        id="historias" 
        className="py-16 sm:py-20 bg-white border-y border-gray-200/60"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-24">
          
          {/* Historia 1: Huaura */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-gray-50 p-1.5">
                <img 
                  src="/images/historia_huaura.jpg" 
                  alt="Cultivo de Fresa en Huaura" 
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="lg:col-span-6 space-y-5 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" /> Voces del campo · Huaura
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Cuando producir no significa saber dónde vender
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                En conversaciones con productores de fresa en Huaura encontramos un sistema comercial construido principalmente sobre relaciones personales, llamadas y compradores conocidos.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                La información sobre demanda, precio y compradores potenciales no está concentrada en un solo lugar. Buena parte de la comercialización depende de saber a quién llamar en el momento correcto.
              </p>

              <div className="space-y-3 pt-2 text-left">
                {observacionesHuaura.map((obs, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{obs.title}</h4>
                      <p className="text-xs text-gray-600">{obs.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Historia 2: Santa Sofía del Sur */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 lg:order-2">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-gray-50 p-1.5">
                <img 
                  src="/images/historia_poscosecha.JPG" 
                  alt="Línea de Selección de Cítricos" 
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="lg:col-span-6 lg:order-1 space-y-5 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" /> Voces del campo · Poscosecha
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Cuando el tiempo también determina el valor del descarte
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                En una planta de procesamiento observamos cómo la clasificación genera producto que necesita encontrar una salida comercial rápidamente.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                El desafío no es únicamente determinar si ese producto todavía tiene valor. También es encontrar a un comprador disponible antes de que el tiempo reduzca todavía más sus posibilidades de comercialización.
              </p>

              <div className="space-y-3 pt-2 text-left">
                {observacionesSantaSofia.map((obs, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{obs.title}</h4>
                      <p className="text-xs text-gray-600">{obs.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </motion.section>

      {/* PATRONES QUE SE REPITEN (CENTRADO EN DESKTOP PARA LAS 2 TARJETAS DE ABAJO) */}
      <motion.section 
        {...scrollAnimation}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Cinco patrones que seguimos encontrando
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Lecciones clave recogidas directamente durante nuestras visitas y entrevistas en diversas regiones del Perú.
          </p>
        </div>

        {/* Layout centrado para desktop: 3 en la 1era fila, 2 centradas en la 2da fila */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {patrones.map((patron, idx) => (
            <div 
              key={idx} 
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <div className="p-3 bg-emerald-50 rounded-xl w-fit mb-4">
                {patron.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{patron.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{patron.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* DEL CAMPO A AGROVIO */}
      <motion.section 
        {...scrollAnimation}
        className="py-16 sm:py-20 bg-emerald-50/70 border-y border-emerald-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-md">
              De la voz al producto
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
              Convertimos esas conversaciones en decisiones de producto
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Cada función de Agrovio busca responder directamente a una situación que ya existe en la comercialización poscosecha.
            </p>

            <div className="space-y-4 pt-2 text-left">
              {correspondencias.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-emerald-200/60 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 italic">{item.quote}</span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-lg shrink-0 flex items-center justify-center gap-1">
                    → {item.solution}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-emerald-200 shadow-xl bg-white p-2">
              <img 
                src="/images/del_campo_a_agrovio.png" 
                alt="Del campo a Agrovio" 
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* HISTORIAS Y ARTÍCULOS FUTUROS */}
      <motion.section 
        {...scrollAnimation}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4 text-center md:text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Centro de Contenido</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">Historias desde la cadena poscosecha</h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto md:mx-0">
            Mantenemos Agrovio conectado permanentemente con la realidad de los actores del agro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-lg transition-all group text-left flex flex-col justify-between">
            <div className="h-48 sm:h-52 w-full p-3 bg-gradient-to-b from-gray-50 to-emerald-50/20 flex items-center justify-center border-b border-gray-100 overflow-hidden">
              <img 
                src="/images/abajito1.JPG" 
                alt="Reportaje Huaura" 
                className="max-h-full max-w-full object-contain rounded-xl shadow-xs group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">Reportaje</span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  Huaura: cómo se comercializa una campaña de fresa
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">Producción, compradores, intermediarios y circulación de información.</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 pt-2">
                Leer historia <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-lg transition-all group text-left flex flex-col justify-between">
            <div className="h-48 sm:h-52 w-full p-3 bg-gradient-to-b from-amber-50/30 to-orange-50/20 flex items-center justify-center border-b border-gray-100 overflow-hidden">
              <img 
                src="/images/abajito2.JPG" 
                alt="El valor del descarte" 
                className="max-h-full max-w-full object-contain rounded-xl shadow-xs group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">Análisis</span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  El valor detrás del descarte
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">Qué ocurre con el producto que sale de una línea de selección y necesita mercado.</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 pt-2">
                Leer historia <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-lg transition-all group text-left flex flex-col justify-between">
            <div className="h-48 sm:h-52 w-full p-3 bg-gradient-to-b from-emerald-50/40 to-teal-50/20 flex items-center justify-center border-b border-gray-100 overflow-hidden">
              <img 
                src="/images/proximamente.png" 
                alt="Búsqueda de Oferta" 
                className="max-h-full max-w-full object-contain rounded-xl shadow-xs group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">Entrevista</span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  ¿Cómo encuentra oferta un comprador agrícola?
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">Llamadas, contactos y el costo oculto de buscar nuevos proveedores.</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 pt-2">
                Próximamente <BookOpen className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA FINAL CON BOTÓN VERDE MÁS OSCURO Y DEGRADÉ */}
      <motion.section 
        {...scrollAnimation}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-white text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(60deg, #285c48 0%, #397f4d 50%, #4ca254 100%)' }}
      >
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            ¿También formas parte de esta realidad?
          </h2>
          <p className="text-base sm:text-lg text-emerald-100 font-light max-w-2xl mx-auto">
            Agrovio está construyendo una nueva forma de conectar oferta y demanda en la comercialización poscosecha.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/comenzar"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm bg-agrovio-gradient-invert text-white shadow-[0_10px_35px_rgba(76,162,84,0.4)] border border-emerald-300/40 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>Unirme como proveedor</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/comenzar"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm bg-white text-agrovio-dark hover:bg-emerald-50 shadow-xl transition-all hover:scale-105"
            >
              Unirme como comprador
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default VocesDelCampo;
