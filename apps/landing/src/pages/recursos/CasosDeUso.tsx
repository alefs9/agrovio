import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollAnimation, hoverButton } from '../../utils/animations';
import { 
  Apple, 
  RefreshCw, 
  Factory, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';

export const CasosDeUso: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-900">
      <main className="flex-grow">
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
                <Sparkles className="w-4 h-4 text-emerald-300" /> Escenarios de Comercialización
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Cada producto tiene una oportunidad de mercado distinta
              </h1>

              <p className="text-base sm:text-xl text-emerald-50 leading-relaxed font-light">
                Agrovio conecta oferta y demanda en diferentes escenarios poscosecha, desde una cosecha fresca disponible por pocos días hasta productos agroindustriales con oferta continua.
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
                  href="#casos"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full font-bold text-sm bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all"
                >
                  Explorar casos ↓
                </a>
              </div>
            </motion.div>

            <div className="lg:col-span-5">
              {/* Contenedor limpio, sin bordes para aprovechar el PNG */}
              <div className="flex items-center justify-center h-80 sm:h-96 w-full">
                <img
                  src="/images/imagen1_casosdeuso.png"
                  alt="Composición de escenarios poscosecha Agrovio"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3 GRANDES CASOS */}
        <motion.section 
          {...scrollAnimation}
          id="casos" 
          className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Una plataforma para diferentes formas de oferta
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Adaptamos nuestro modelo para cada necesidad específica en la cadena agrícola.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between items-center sm:items-start text-center sm:text-left">
              <div className="flex flex-col items-center sm:items-start">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
                  <Apple className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Producto Fresco</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Cosechas con un volumen y periodo de disponibilidad determinados que necesitan encontrar compradores rápidamente según ubicación y calidad.
                </p>
              </div>
              <a href="#caso-fresco" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-700 pt-2">
                Ver caso <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between items-center sm:items-start text-center sm:text-left">
              <div className="flex flex-col items-center sm:items-start">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-4">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Descarte y Excedentes</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Producto poscosecha que todavía tiene valor comercial, pero cuya oportunidad puede disminuir rápidamente con el paso del tiempo.
                </p>
              </div>
              <a href="#caso-descarte" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-700 pt-2">
                Ver caso <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between items-center sm:items-start text-center sm:text-left">
              <div className="flex flex-col items-center sm:items-start">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Productos Agroindustriales</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Productos procesados o transformados (harinas, aceites, pulpas, fibras) que pueden comercializarse de forma recurrente con fichas detalladas.
                </p>
              </div>
              <a href="#caso-agroindustrial" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-700 pt-2">
                Ver caso <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.section>

        {/* DETALLE CASO 1: PRODUCTO FRESCO */}
        <motion.section 
          {...scrollAnimation}
          id="caso-fresco" 
          className="py-16 sm:py-20 bg-white border-t border-gray-200/60"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded">Caso de Uso 01 · Cosecha Fresca</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Una cosecha lista necesita encontrar mercado mientras sigue disponible</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Un productor o fundo tiene una cosecha próxima a salir y necesita comunicar rápidamente qué producto tiene, qué volumen hay, dónde está y las condiciones de entrega.
              </p>

              <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-100 text-xs text-gray-700 space-y-2 w-full text-center sm:text-left">
                <p className="font-bold text-emerald-900">Flujo operativo:</p>
                <p className="font-semibold text-emerald-700">Cosecha disponible → Publicación → Ofertas → Negociación → Comprador</p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="flex items-center justify-center h-72 sm:h-96 w-full">
                <img
                  src="/images/imagen2_casosdeuso.png"
                  alt="Mockup Oferta Fresa Fresca Huaura"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* DETALLE CASO 2: DESCARTE Y TIEMPO CRÍTICO */}
        <motion.section 
          {...scrollAnimation}
          id="caso-descarte" 
          className="py-16 sm:py-20 bg-amber-50/40 border-t border-amber-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200/80 px-3 py-1 rounded">Caso de Uso 02 · Poscosecha & Tiempo Crítico</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Cuando el tiempo importa tanto como el precio</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Durante la clasificación o procesamiento aparece producto fuera de especificación principal. El desafío es encontrar comprador antes de que el tiempo reduzca su valor.
              </p>

              <div className="bg-white p-4 rounded-xl border border-amber-200 text-xs sm:text-sm font-semibold text-amber-900 w-full text-center sm:text-left">
                💡 “El producto puede no servir para un mercado, pero todavía puede tener un gran valor para otro.”
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <div className="flex items-center justify-center h-72 sm:h-96 w-full">
                <img
                  src="/images/imagen3_casosdeuso.png"
                  alt="Mockup Descarte Cítricos Recojo 48h"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* DETALLE CASO 3: AGROINDUSTRIAL */}
        <motion.section 
          {...scrollAnimation}
          id="caso-agroindustrial" 
          className="py-16 sm:py-20 bg-white border-t border-gray-200/60"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded">Caso de Uso 03 · Agroindustria</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Productos que necesitan compradores especializados</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Empresas agroindustriales comercializan derivados (harinas, aceites, fibras, pulpas) con oferta continua o por lotes periódicos, donde las especificaciones técnicas son clave.
              </p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-2 text-xs font-semibold">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">Harina de coco</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">Aceite vegetal</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">Fibra vegetal</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">Deshidratados</span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="flex items-center justify-center h-72 sm:h-96 w-full">
                <img
                  src="/images/imagen4_casosdeuso.png"
                  alt="Mockup Ficha Técnica Agroindustrial"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* CASO 4: PEQUEÑO AGRICULTOR + WHATSAPP */}
        <motion.section 
          {...scrollAnimation}
          className="py-16 sm:py-20 bg-emerald-900 text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start">
              <span className="text-xs font-bold uppercase tracking-wider bg-emerald-800 text-emerald-200 px-3 py-1 rounded">Caso 04 · Acceso Asistido</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold">Participar en el mercado sin aprender una plataforma compleja</h2>
              <p className="text-sm sm:text-base text-emerald-100 leading-relaxed font-light">
                Un pequeño agricultor envía por WhatsApp: "Tengo 2 toneladas de palta disponibles" y Agrovio lo convierte en una oferta estructurada visible para el mercado.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="flex items-center justify-center h-80 sm:h-96 w-full">
                <img
                  src="/images/imagen5_casosdeuso.png"
                  alt="Mockup WhatsApp Agricultor a Publicación Agrovio"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* CASO 5 & 6: ABASTECIMIENTO DE COMPRADOR Y OFERTA CONTINUA */}
        <motion.section 
          {...scrollAnimation}
          className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 sm:space-y-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-sm space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded">Caso 05 · Comprador</span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Encontrar alternativas sin empezar con una lista de contactos</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                El comprador filtra por producto, región y volumen para comparar alternativas de forma limpia sin revelar identidades tempranamente.
              </p>
              <div className="w-full flex items-center justify-center h-64 sm:h-72">
                <img
                  src="/images/imagen6_casosdeuso.png"
                  alt="Mockup Filtros y Comparación Comprador"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-sm space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded">Caso 06 · Operación Frecuente</span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Cuando la oferta cambia constantemente</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Acopiadores y procesadoras mantienen múltiples listados activos actualizando volúmenes y negociaciones abiertas en tiempo real.
              </p>
              <div className="w-full flex items-center justify-center h-64 sm:h-72">
                <img
                  src="/images/imagen7_casosdeuso.png"
                  alt="Dashboard 12 Listados Activos"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA FINAL */}
        <motion.section 
          {...scrollAnimation}
          className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-white text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(60deg, #285c48 0%, #397f4d 50%, #4ca254 100%)' }}
        >
          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Cada producto, su mejor mercado
            </h2>
            <p className="text-base sm:text-lg text-emerald-100 font-light max-w-2xl mx-auto">
              Ya sea una cosecha fresca, un excedente poscosecha o un producto agroindustrial, Agrovio ayuda a convertir oferta disponible en oportunidades comerciales.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/comenzar"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm bg-agrovio-gradient-invert text-white shadow-[0_10px_35px_rgba(76,162,84,0.4)] border border-emerald-300/40 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>Unirme a Agrovio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default CasosDeUso;