import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollAnimation, hoverButton } from '../utils/animations';
import { 
  Check, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Search, 
  Unlock, 
  Layers, 
  Zap,
  Info
} from 'lucide-react';

interface PlanProveedor {
  id: string;
  name: string;
  price: string;
  desc: string;
  listings: string;
  users: string;
  commission: string;
  features: string[];
  isRecommended?: boolean;
  buttonText: string;
}

interface PlanComprador {
  id: string;
  name: string;
  price: string;
  desc: string;
  credits: string;
  features: string[];
  isRecommended?: boolean;
  buttonText: string;
}

const planesProveedor: PlanProveedor[] = [
  {
    id: 'cosecha',
    name: 'Agrovio Cosecha',
    price: 'S/ 69.90',
    desc: 'Para pequeños productores que comercializan una cosecha o pocos productos.',
    listings: '4 listados activos',
    users: '1 usuario',
    commission: '1%',
    features: [
      '4 listados activos',
      '1 usuario',
      'Perfil comercial',
      'Actualización ilimitada de precio y volumen',
      'Recepción de ofertas',
      'Soporte estándar por WhatsApp',
      'Comisión por operación: 1%'
    ],
    buttonText: 'Elegir Cosecha'
  },
  {
    id: 'crece',
    name: 'Agrovio Crece',
    price: 'S/ 99.90',
    desc: 'Para productores con diferentes productos o campañas.',
    listings: '8 listados activos',
    users: 'Hasta 2 usuarios',
    commission: '1%',
    features: [
      '8 listados activos',
      'Hasta 2 usuarios',
      'Alertas de compradores compatibles',
      'Estadísticas de vistas y consultas',
      'Mayor visibilidad',
      'Soporte por WhatsApp',
      'Comisión por operación: 1%'
    ],
    buttonText: 'Elegir Crece'
  },
  {
    id: 'pro-proveedor',
    name: 'Agrovio Pro',
    price: 'S/ 149.90',
    desc: 'Para acopiadores, asociaciones y agroindustrias pequeñas.',
    listings: '16 listados activos',
    users: 'Hasta 3 usuarios',
    commission: '1%',
    isRecommended: true,
    features: [
      '16 listados activos',
      'Hasta 3 usuarios',
      'Publicaciones destacadas',
      'Alertas prioritarias de demanda',
      'Analítica comercial',
      'Fichas comerciales de productos',
      'Soporte prioritario',
      'Comisión por operación: 1%'
    ],
    buttonText: 'Elegir Pro'
  },
  {
    id: 'empresa',
    name: 'Agrovio Empresa',
    price: 'S/ 249.90',
    desc: 'Para procesadoras, fundos y proveedores con oferta continua.',
    listings: '30 listados activos',
    users: 'Hasta 5 usuarios',
    commission: '1%',
    features: [
      '30 listados activos',
      'Hasta 5 usuarios',
      'Varias sedes o puntos de despacho',
      'Mayor posicionamiento',
      'Reporte comercial mensual',
      'Carga de productos mediante Excel',
      'Atención prioritaria',
      'Comisión por operación: 1%'
    ],
    buttonText: 'Elegir Empresa'
  },
  {
    id: 'corporativo',
    name: 'Agrovio Corporativo',
    price: 'Desde S/ 399.90',
    desc: 'Para grandes procesadoras, exportadoras y grupos agrícolas.',
    listings: '50 o más listados',
    users: 'Múltiples usuarios',
    commission: '1%',
    features: [
      '50 o más listados activos',
      'Múltiples usuarios, plantas y sedes',
      'Carga masiva de productos',
      'Panel comercial avanzado',
      'Ejecutivo de cuenta asignado',
      'Reportes personalizados',
      'Integraciones futuras',
      'Comisión por operación: 1%'
    ],
    buttonText: 'Solicitar propuesta'
  }
];

const planesComprador: PlanComprador[] = [
  {
    id: 'base-comprador',
    name: 'Agrovio Base',
    price: 'S/ 69.90',
    desc: 'Para compradores que realizan búsquedas comerciales puntuales.',
    credits: '10 créditos/mes',
    features: [
      'Acceso a toda la oferta disponible',
      '10 créditos de conexión al mes',
      'Filtros básicos de búsqueda',
      'Productos guardados',
      'Historial de precios',
      'Alertas comerciales',
      'Acceso desde diferentes dispositivos'
    ],
    buttonText: 'Elegir Base'
  },
  {
    id: 'plus-comprador',
    name: 'Agrovio Plus',
    price: 'S/ 139.90',
    desc: 'Para negocios con necesidades frecuentes de abastecimiento.',
    credits: '30 créditos/mes',
    features: [
      'Acceso a toda la oferta disponible',
      '30 créditos de conexión al mes',
      'Comparación de productos',
      'Alertas inmediatas',
      'Historial de contactos',
      'Reportes mensuales',
      'Soporte prioritario'
    ],
    buttonText: 'Elegir Plus'
  },
  {
    id: 'pro-comprador',
    name: 'Agrovio Pro',
    price: 'S/ 249.90',
    desc: 'Para equipos de compras y operaciones de abastecimiento continuo.',
    credits: '75 créditos/mes',
    isRecommended: true,
    features: [
      'Acceso a toda la oferta disponible',
      '75 créditos de conexión al mes',
      'Filtros avanzados',
      'Comparación de cotizaciones',
      'Exportación de información',
      'Analítica comercial',
      'Soporte prioritario'
    ],
    buttonText: 'Elegir Pro'
  },
  {
    id: 'business-comprador',
    name: 'Agrovio Business',
    price: 'S/ 419.90',
    desc: 'Para empresas con varias necesidades, plantas o puntos de entrega.',
    credits: '150 créditos/mes',
    features: [
      'Acceso a toda la oferta disponible',
      '150 créditos de conexión al mes',
      'Panel de abastecimiento',
      'Alertas prioritarias',
      'Reportes mensuales',
      'Acceso anticipado a nueva oferta',
      'Gestión de diferentes operaciones'
    ],
    buttonText: 'Elegir Business'
  },
  {
    id: 'enterprise-comprador',
    name: 'Agrovio Enterprise',
    price: 'Desde S/ 699.90',
    desc: 'Para grandes compradores, industrias y grupos empresariales.',
    credits: 'Personalizados',
    features: [
      'Acceso a toda la oferta disponible',
      'Créditos personalizados',
      'Múltiples usuarios, plantas y sedes',
      'Ejecutivo de cuenta asignado',
      'Reportes personalizados',
      'Carga masiva de necesidades',
      'Integraciones con ERP / CRM',
      'Servicio de sourcing bajo condiciones acordadas'
    ],
    buttonText: 'Solicitar propuesta'
  }
];

const faqsSuscripciones = [
  {
    q: '¿Puedo cambiar de plan?',
    a: 'Sí. Puedes solicitar un cambio de plan según tus necesidades comerciales. El nuevo límite o beneficios se aplicarán de acuerdo con el siguiente periodo de facturación.'
  },
  {
    q: '¿Qué sucede si alcanzo el límite de listados activos?',
    a: 'Puedes pausar una publicación existente para liberar espacio sin perder sus datos, o actualizar tu plan a un nivel superior para mantener más ofertas visibles simultáneamente.'
  },
  {
    q: '¿Actualizar precio o volumen consume otro listado?',
    a: 'No. Puedes modificar el precio, volumen disponible, fotografías y condiciones comerciales de una oferta existente de forma ilimitada sin consumir un nuevo listado.'
  },
  {
    q: '¿Todos los compradores pueden ver todas las ofertas?',
    a: 'Sí. La oferta disponible en la plataforma es 100% visible para todos los compradores de cualquier plan. El límite aplica únicamente a la cantidad de contactos comerciales que desbloqueas.'
  },
  {
    q: '¿Cuándo se utiliza un crédito de conexión?',
    a: 'Un crédito se utiliza únicamente después de alcanzar un acuerdo sobre precio, volumen y condiciones comerciales en el sistema de ofertas/contraofertas y decidir acceder a los datos directos del proveedor.'
  },
  {
    q: '¿Un crédito se consume al enviar una oferta?',
    a: 'No. Explorar el catálogo, guardar favoritos, comparar productos, enviar ofertas y recibir contraofertas es completamente gratuito y no consume ningún crédito.'
  },
  {
    q: '¿Qué sucede si no utilizo todos mis créditos en el mes?',
    a: 'Los créditos corresponden a la cuota mensual del plan contratado y se renuevan al inicio de cada ciclo de facturación.'
  },
  {
    q: '¿Puedo adquirir créditos adicionales si los agoto?',
    a: 'Sí, los compradores activos pueden adquirir paquetes adicionales de créditos desde su panel comercial según sus necesidades de abastecimiento.'
  },
  {
    q: '¿La suscripción mensual incluye la comisión por operación?',
    a: 'No. La mensualidad otorga acceso a las herramientas del plan (listados o créditos). La comisión aplica únicamente cuando se concreta una transacción comercial real originada en Agrovio.'
  },
  {
    q: '¿Los precios mostrados incluyen IGV?',
    a: 'Los precios mostrados no incluyen IGV, salvo indicación expresa al momento de la facturación.'
  },
  {
    q: '¿Puedo cancelar mi suscripción?',
    a: 'Sí, puedes cancelar la renovación automática de tu plan en cualquier momento desde tu panel de usuario de acuerdo con las condiciones del servicio.'
  }
];

// Matriz de características para Proveedores (Exactas 7 filas solicitadas)
const datosMatrizProveedor = [
  { labelTop: 'Listados', labelBottom: 'activos', val: ['4', '8', '16', '30', '50+'] },
  { labelTop: 'Usuarios', labelBottom: '', val: ['1', '2', '3', '5', 'Múltiples'] },
  { labelTop: 'Actualizaciones', labelBottom: '', val: ['Ilimitadas', 'Ilimitadas', 'Ilimitadas', 'Ilimitadas', 'Ilimitadas'] },
  { labelTop: 'Estadísticas', labelBottom: '', val: ['Básicas', 'Incluidas', 'Avanzada', 'Reportes', 'Personalizada'] },
  { labelTop: 'Publicaciones', labelBottom: 'destacadas', val: ['—', '—', 'Sí', 'Sí', 'Sí'] },
  { labelTop: 'Varias', labelBottom: 'sedes', val: ['—', '—', '—', 'Sí', 'Sí'] },
  { labelTop: 'Comisión', labelBottom: '', val: ['1%', '1%', '1%', '1%', '1%'] }
];

// Matriz de características para Compradores
const datosMatrizComprador = [
  { labelTop: 'Oferta', labelBottom: 'visible', val: ['Toda', 'Toda', 'Toda', 'Toda', 'Toda'] },
  { labelTop: 'Créditos', labelBottom: 'mensuales', val: ['10', '30', '75', '150', 'Personalizados'] },
  { labelTop: 'Filtros', labelBottom: '', val: ['Básicos', 'Básicos', 'Avanzados', 'Avanzados', 'Personalizados'] },
  { labelTop: 'Historial', labelBottom: 'precios', val: ['Sí', 'Sí', 'Sí', 'Sí', 'Sí'] },
  { labelTop: 'Comparación', labelBottom: '', val: ['Básica', 'Sí', 'Avanzada', 'Avanzada', 'Personalizada'] },
  { labelTop: 'Alertas', labelBottom: '', val: ['—', 'Sí', 'Sí', 'Prioritarias', 'Personalizadas'] },
  { labelTop: 'Reportes', labelBottom: '', val: ['—', 'Mensuales', 'Avanzado', 'Mensuales', 'Personalizados'] }
];

export const Suscripciones: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vender' | 'comprar'>('vender');
  const [openFaq, setOpenFaq] = useState<Record<number, boolean>>({});
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [mobileMatrixIndex, setMobileMatrixIndex] = useState<number>(0); // Inicia en Cosecha
  
  const selectorRef = useRef<HTMLDivElement>(null);
  const proveedorCarouselRef = useRef<HTMLDivElement>(null);
  const compradorCarouselRef = useRef<HTMLDivElement>(null);
  const proveedorMatrixRef = useRef<HTMLDivElement>(null);
  const compradorMatrixRef = useRef<HTMLDivElement>(null);

  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    setActiveCardIndex(0);
    setMobileMatrixIndex(0);
    const activeCarousel = activeTab === 'vender' ? proveedorCarouselRef.current : compradorCarouselRef.current;
    const activeMatrix = activeTab === 'vender' ? proveedorMatrixRef.current : compradorMatrixRef.current;
    if (activeCarousel) activeCarousel.scrollTo({ left: 0, behavior: 'smooth' });
    if (activeMatrix) activeMatrix.scrollTo({ left: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleMouseDown = (e: React.MouseEvent, ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;
    isMouseDown.current = true;
    startX.current = e.pageX - ref.current.offsetLeft;
    startScrollLeft.current = ref.current.scrollLeft;
  };

  const handleMouseLeave = () => { isMouseDown.current = false; };
  const handleMouseUp = () => { isMouseDown.current = false; };
  const handleMouseMove = (e: React.MouseEvent, ref: React.RefObject<HTMLDivElement | null>) => {
    if (!isMouseDown.current || !ref.current) return;
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    if (Math.abs(walk) > 3) ref.current.scrollLeft = startScrollLeft.current - walk;
  };

  const handleCarouselScroll = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;
    const { scrollLeft, clientWidth } = ref.current;
    if (clientWidth === 0) return;
    const index = Math.round(scrollLeft / (clientWidth * 0.85));
    setActiveCardIndex(Math.min(Math.max(index, 0), 4));
  };

  const scrollToCard = (ref: React.RefObject<HTMLDivElement | null>, index: number) => {
    if (!ref.current) return;
    ref.current.scrollTo({ left: index * (ref.current.clientWidth * 0.85), behavior: 'smooth' });
    setActiveCardIndex(index);
  };

  const handleMatrixScroll = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;
    const { scrollLeft } = ref.current;
    const headers = ref.current.querySelectorAll('thead th');
    if (headers.length < 2) return;
    const columnWidth = (headers[1] as HTMLElement).offsetWidth;
    if (columnWidth <= 0) return;
    const index = Math.round(scrollLeft / columnWidth);
    setMobileMatrixIndex(Math.min(Math.max(index, 0), 4));
  };

  const scrollToMatrixCard = (ref: React.RefObject<HTMLDivElement | null>, index: number) => {
    if (!ref.current) return;
    const container = ref.current;
    const headers = container.querySelectorAll('thead th');
    if (headers.length > index + 1) {
      const targetElement = headers[index + 1] as HTMLElement;
      // 125px es el ancho de la columna sticky
      container.scrollTo({ left: targetElement.offsetLeft - 125, behavior: 'smooth' });
    }
    setMobileMatrixIndex(index);
  };

  const handleScrollToSelector = () => { selectorRef.current?.scrollIntoView({ behavior: 'smooth' }); };
  const handleSelectPlan = (planId: string) => { navigate(`/comenzar?plan=${encodeURIComponent(planId)}`); };
  const toggleFaq = (idx: number) => { setOpenFaq(prev => ({ ...prev, [idx]: !prev[idx] })); };

  return (
    <div className="w-full font-sans text-gray-900 bg-gray-50/50">
      <main className="flex-grow">
        
        {/* HERO PRINCIPAL */}
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
                <Sparkles className="w-4 h-4 text-emerald-300" /> Tarifas & Modelos Comerciales
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Planes para comercializar según el ritmo de tu negocio
              </h1>

              <p className="text-base sm:text-xl text-emerald-50 leading-relaxed font-light">
                Elige un plan según la cantidad de productos que deseas publicar o los contactos comerciales que necesitas desbloquear. Todos los planes están diseñados para crecer junto con tu operación.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 pt-2 w-full sm:w-auto">
                <motion.button
                  {...hoverButton}
                  onClick={handleScrollToSelector}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm bg-agrovio-gradient-invert text-white shadow-[0_10px_35px_rgba(76,162,84,0.4)] border border-emerald-300/40 hover:scale-105 transition-all gap-2"
                >
                  <span className="text-white">Unirme a Agrovio</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </motion.button>
              </div>

              <p className="text-xs text-emerald-100/80 font-medium">
                Planes mensuales para proveedores y compradores. Cancela o cambia de plan según las condiciones del servicio.
              </p>
            </motion.div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-white/10 p-2 backdrop-blur-md max-w-lg w-full">
                <img 
                  src="/images/hero_suscripciones.png" 
                  alt="Planes Agrovio - Dashboard Proveedor y Comprador" 
                  className="w-full h-auto object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SELECTOR PRINCIPAL */}
        <motion.section 
          {...scrollAnimation}
          ref={selectorRef} 
          className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded">Selector de Planes</span>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900">¿Cómo utilizarás Agrovio?</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Selecciona tu tipo de perfil para explorar los planes ajustados a tus objetivos comerciales.
            </p>

            {/* TAB SWITCHER */}
            <div className="pt-4 flex justify-center">
              <div className="bg-gray-200/80 p-1.5 rounded-2xl border border-gray-300/60 inline-flex w-full max-w-md shadow-inner">
                <button
                  onClick={() => setActiveTab('vender')}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 text-center flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
                    activeTab === 'vender'
                      ? 'bg-gradient-to-r from-[#285C48] via-[#397F4D] to-[#4CA254] !text-white shadow-lg border border-emerald-600/40'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>Quiero vender</span>
                </button>

                <button
                  onClick={() => setActiveTab('comprar')}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 text-center flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
                    activeTab === 'comprar'
                      ? 'bg-gradient-to-r from-[#285C48] via-[#397F4D] to-[#4CA254] !text-white shadow-lg border border-emerald-600/40'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <Search className="w-4 h-4" />
                  <span>Quiero comprar</span>
                </button>
              </div>
            </div>

            <p className="text-xs text-gray-500 pt-2 font-medium">
              {activeTab === 'vender'
                ? 'Planes diseñados para productores, acopiadores, procesadoras y empresas agroindustriales.'
                : 'Planes diseñados para mayoristas, distribuidores, procesadoras, exportadores e industrias.'}
            </p>
          </div>

          {/* CONTENIDO DE PLANES SEGÚN PESTAÑA */}
          {activeTab === 'vender' ? (
            /* SECCIÓN PLANES PROVEEDOR */
            <div className="space-y-12 animate-in fade-in duration-300">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Publica más productos y reduce tu comisión al crecer
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Cada plan determina cuántos listados puedes mantener activos simultáneamente y la comisión aplicable cuando concretas una operación.
                </p>
              </div>

              {/* 1. VISTA MÓVIL: CARRUSEL HORIZONTAL CON PUNTITOS Y SNAP OBLIGATORIO */}
              <div className="block md:hidden w-full max-w-full overflow-hidden">
                <div
                  ref={proveedorCarouselRef}
                  onScroll={() => handleCarouselScroll(proveedorCarouselRef)}
                  onMouseDown={(e) => handleMouseDown(e, proveedorCarouselRef)}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseUp}
                  onMouseMove={(e) => handleMouseMove(e, proveedorCarouselRef)}
                  className="flex overflow-x-auto snap-x snap-mandatory py-4 px-2 gap-4 scroll-smooth w-full scrollbar-none cursor-grab active:cursor-grabbing select-none"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {planesProveedor.map((plan) => (
                    <div
                      key={plan.id}
                      className={`relative w-[85vw] max-w-[320px] shrink-0 snap-center rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${
                        plan.isRecommended
                          ? 'text-white shadow-xl border border-[#397F4D]'
                          : 'bg-gradient-to-br from-[#e2f3e6] via-[#f5fbf6] to-[#d8efe0] border border-[#397F4D]/35 shadow-md'
                      }`}
                      style={plan.isRecommended ? { background: 'linear-gradient(60deg, #285C48 0%, #397F4D 50%, #4CA254 100%)' } : undefined}
                    >
                      {plan.isRecommended && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-[#285C48] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                          <Zap className="w-3 h-3 fill-current text-[#397F4D]" /> Más recomendado
                        </div>
                      )}

                      <div className="space-y-4">
                        <div className="space-y-1 text-center">
                          <h4 className={`text-lg font-black ${plan.isRecommended ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h4>
                          <p className={`text-xs leading-tight ${plan.isRecommended ? 'text-emerald-100' : 'text-gray-500'}`}>{plan.desc}</p>
                        </div>

                        <div className={`border-y py-3 text-center ${plan.isRecommended ? 'border-white/20' : 'border-emerald-200/60'}`}>
                          <span className={`text-3xl font-black ${plan.isRecommended ? 'text-white' : 'text-emerald-950'}`}>{plan.price}</span>
                          <span className={`text-xs font-semibold ${plan.isRecommended ? 'text-emerald-100' : 'text-gray-500'}`}> / mes</span>
                          <div className="mt-2 flex flex-wrap gap-1.5 justify-center">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${plan.isRecommended ? 'bg-white/20 text-white' : 'text-emerald-800 bg-emerald-100'}`}>
                              {plan.listings}
                            </span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${plan.isRecommended ? 'bg-white/10 text-white border-white/30' : 'text-emerald-800 bg-emerald-50 border-emerald-200'}`}>
                              Comisión {plan.commission}
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-2 text-xs">
                          {plan.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${plan.isRecommended ? 'text-white' : 'text-emerald-600'}`} />
                              <span className={plan.isRecommended ? 'text-emerald-50' : 'text-gray-600'}>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-5">
                        <button
                          onClick={() => handleSelectPlan(plan.id)}
                          className={`w-full py-3 rounded-xl font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 ${
                            plan.isRecommended
                              ? 'bg-white text-[#285C48] hover:bg-emerald-50'
                              : 'bg-emerald-800 text-white'
                          }`}
                        >
                          <span>{plan.buttonText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* INDICADORES DE PUNTITOS (DOTS) */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  {[0, 1, 2, 3, 4].map((idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToCard(proveedorCarouselRef, idx)}
                      className={`transition-all duration-300 rounded-full ${
                        activeCardIndex === idx
                          ? 'w-7 h-2.5 bg-emerald-600 shadow-sm'
                          : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Ver plan ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* 2. VISTA ESCRITORIO: GRID RESPONSIVO (3 ARRIBA + 2 ABAJO CENTRADOS) */}
              <div className="hidden md:block space-y-8">
                {/* Fila 1: 3 Planes principales */}
                <div className="grid grid-cols-3 gap-8 items-stretch">
                  {planesProveedor.slice(0, 3).map((plan) => (
                    <div
                      key={plan.id}
                      className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                        plan.isRecommended
                          ? 'text-white border border-[#397F4D] ring-2 ring-[#397F4D]/30 shadow-2xl scale-102 z-10'
                          : 'bg-gradient-to-br from-[#e2f3e6] via-[#f5fbf6] to-[#d8efe0] border border-[#397F4D]/35 shadow-sm hover:shadow-xl'
                      }`}
                      style={plan.isRecommended ? { background: 'linear-gradient(60deg, #285C48 0%, #397F4D 50%, #4CA254 100%)' } : undefined}
                    >
                      {plan.isRecommended && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#285C48] text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 fill-current text-[#397F4D]" /> Más recomendado
                        </div>
                      )}

                      <div className="space-y-5">
                        <div className="space-y-1 text-left">
                          <h4 className={`text-xl font-black ${plan.isRecommended ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h4>
                          <p className={`text-xs min-h-[36px] ${plan.isRecommended ? 'text-emerald-100' : 'text-gray-500'}`}>{plan.desc}</p>
                        </div>

                        <div className={`border-y py-4 text-left ${plan.isRecommended ? 'border-white/20' : 'border-emerald-200/70'}`}>
                          <span className={`text-4xl font-black ${plan.isRecommended ? 'text-white' : 'text-emerald-950'}`}>{plan.price}</span>
                          <span className={`text-xs font-semibold ${plan.isRecommended ? 'text-emerald-100' : 'text-gray-500'}`}> / mes</span>
                          <div className="mt-2 flex flex-wrap gap-2 justify-start">
                            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${plan.isRecommended ? 'bg-white/20 text-white' : 'text-emerald-800 bg-emerald-100/90'}`}>
                              {plan.listings}
                            </span>
                            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${plan.isRecommended ? 'bg-white/10 text-white border-white/30' : 'text-emerald-800 bg-emerald-50 border-emerald-200'}`}>
                              Comisión {plan.commission}
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-2.5 text-xs">
                          {plan.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.isRecommended ? 'text-white' : 'text-emerald-600'}`} />
                              <span className={plan.isRecommended ? 'text-emerald-50' : 'text-gray-600'}>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6">
                        <button
                          onClick={() => handleSelectPlan(plan.id)}
                          className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 ${
                            plan.isRecommended
                              ? 'bg-white text-[#285C48] hover:bg-emerald-50'
                              : 'bg-emerald-800 hover:bg-emerald-900 text-white'
                          }`}
                        >
                          <span>{plan.buttonText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Fila 2: 2 Planes avanzados centrados */}
                <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
                  {planesProveedor.slice(3, 5).map((plan) => (
                    <div
                      key={plan.id}
                      className="bg-gradient-to-br from-[#e2f3e6] via-[#f5fbf6] to-[#d8efe0] rounded-3xl p-8 border border-[#397F4D]/35 shadow-sm hover:shadow-xl flex flex-col justify-between transition-all"
                    >
                      <div className="space-y-5">
                        <div className="space-y-1 text-left">
                          <h4 className="text-xl font-black text-gray-900">{plan.name}</h4>
                          <p className="text-xs text-gray-500 min-h-[36px]">{plan.desc}</p>
                        </div>

                        <div className="border-y border-gray-100 py-4 text-left">
                          <span className="text-3xl font-black text-emerald-950">{plan.price}</span>
                          <span className="text-xs font-semibold text-gray-500"> / mes</span>
                          <div className="mt-2 flex flex-wrap gap-2 justify-start">
                            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                              {plan.listings}
                            </span>
                            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                              Comisión {plan.commission}
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-2.5 text-xs text-gray-600">
                          {plan.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6">
                        <button
                          onClick={() => handleSelectPlan(plan.id)}
                          className="w-full py-3.5 rounded-xl font-bold text-sm bg-emerald-800 hover:bg-emerald-900 text-white transition-all shadow-md flex items-center justify-center gap-2"
                        >
                          <span>{plan.buttonText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BLOQUE EXPLICATIVO: ¿QUÉ ES UN LISTADO ACTIVO? */}
              <div className="bg-gradient-to-br from-emerald-50 via-green-50/60 to-white rounded-3xl p-6 sm:p-10 border border-emerald-200/80 shadow-sm space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4 text-center sm:text-left">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded">Concepto Clave</span>
                    <h3 className="text-xl sm:text-3xl font-black text-gray-900">
                      Un listado representa una oferta comercial activa
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Cada listado corresponde a un producto específico, en una condición, ubicación y periodo de disponibilidad determinados.
                    </p>
                    
                    <div className="bg-white p-4 rounded-2xl border border-emerald-200 text-xs text-gray-700 space-y-2 text-left">
                      <p className="font-bold text-emerald-900">📍 Ejemplo real de listado:</p>
                      <p className="font-semibold text-gray-900 bg-gray-50 p-2 rounded border border-gray-100">
                        “Fresa para procesamiento · Huaura · Campaña de agosto”
                      </p>
                      <p className="text-gray-600">
                        El proveedor puede actualizar libremente: <span className="font-bold text-emerald-800">Precio, Volumen disponible, Fecha, Fotografías y Condiciones comerciales</span>.
                      </p>
                      <p className="text-[11px] text-emerald-700 font-bold italic">
                        ✓ Estas actualizaciones NO consumen otro listado mientras se trate de la misma oferta.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    <div className="bg-white p-6 rounded-2xl border border-emerald-200 shadow-md text-center space-y-3">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold">
                        <Layers className="w-4 h-4" /> Contador en Panel Proveedor
                      </div>
                      <div className="text-3xl font-black text-emerald-950">4 de 8 listados activos</div>
                      <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                        <div className="bg-emerald-600 h-full w-1/2 rounded-full"></div>
                      </div>
                      <p className="text-xs text-gray-500 font-medium">
                        Puedes pausar una publicación y utilizar ese espacio para otro producto.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECCIÓN MATRIZ DE COMPARACIÓN DETALLADA (PROVEEDORES) */}
              <div className="space-y-6 pt-4">
                <div className="text-center sm:text-left space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded">
                    Comparación Completa
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                    Matriz de comparación detallada (Proveedores)
                  </h3>
                </div>

                {/* MATRIZ DE COMPARACIÓN CON BORDE VERDE OSCURO (#285C48) Y 1 SOLA COLUMNA POR ARRASTRE EN MÓVIL (table-fixed + w-max en móvil) */}
                <div className="bg-white rounded-3xl border-2 border-[#285C48] shadow-xl overflow-hidden">
                  <div
                    ref={proveedorMatrixRef}
                    onScroll={() => handleMatrixScroll(proveedorMatrixRef)}
                    onMouseDown={(e) => handleMouseDown(e, proveedorMatrixRef)}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={(e) => handleMouseMove(e, proveedorMatrixRef)}
                    className="overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none cursor-grab active:cursor-grabbing select-none"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollPaddingLeft: '125px' }}
                  >
                    <table className="w-max sm:w-full table-fixed text-center border-collapse">
                      <thead>
                        <tr className="border-b-2 border-[#285C48]/50 bg-emerald-50/40">
                          {/* PRIMERA COLUMNA FIJA / STICKY EN MÓVIL (115px ANCHO) Y ESCRITORIO */}
                          <th className="py-4 px-2 sm:px-4 sticky left-0 bg-white z-30 w-[125px] min-w-[125px] max-w-[125px] sm:w-40 sm:min-w-[140px] sm:max-w-none text-center align-bottom shadow-md border-r-2 border-[#285C48]/60">
                            <span className="text-[11px] sm:text-xs font-black text-gray-900 leading-tight block text-center uppercase tracking-wider">
                              CARACTERÍSTICA
                            </span>
                          </th>

                          {/* COLUMNAS DE PLANES (EXACTAMENTE 1 COLUMNA VISIBLE AL LADO DE LA FIJA EN MÓVIL) */}
                          {planesProveedor.map((plan) => (
                            <th 
                              key={plan.id}
                              className={`py-4 px-2 sm:px-4 text-center snap-start align-bottom w-[calc(100vw-162px)] min-w-[calc(100vw-162px)] max-w-[calc(100vw-162px)] sm:w-auto sm:min-w-[145px] sm:max-w-none transition-all ${
                                plan.isRecommended 
                                  ? 'bg-gradient-to-b from-[#285c48] via-[#397f4d] to-[#285c48] text-white shadow-lg border-x-2 border-emerald-600' 
                                  : 'bg-emerald-50/20'
                              }`}
                            >
                              <div className="flex flex-col items-center space-y-1.5 w-full">
                                {plan.isRecommended ? (
                                  <span className="bg-white text-emerald-950 text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm inline-flex items-center gap-0.5">
                                    <Zap className="w-2.5 h-2.5 fill-current text-emerald-600" /> Popular
                                  </span>
                                ) : (
                                  <span className="h-4"></span>
                                )}
                                <span className={`text-xs sm:text-sm font-black block leading-tight ${plan.isRecommended ? 'text-white' : 'text-gray-900'}`}>
                                  {plan.name.replace('Agrovio ', '')}
                                </span>
                                <span className={`text-sm sm:text-base font-black block ${plan.isRecommended ? 'text-emerald-200' : 'text-emerald-950'}`}>
                                  {plan.price}
                                </span>
                                
                                <button
                                  onClick={() => handleSelectPlan(plan.id)}
                                  className={`mt-1.5 w-full max-w-[110px] sm:max-w-none py-1.5 px-3 rounded-full text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1 mx-auto ${
                                    plan.isRecommended
                                      ? 'bg-white text-emerald-950 hover:bg-emerald-50 font-black'
                                      : 'bg-emerald-800 text-white hover:bg-emerald-900'
                                  }`}
                                >
                                  <span>Elegir</span>
                                </button>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-gray-200/80 text-xs sm:text-sm font-medium">
                        {datosMatrizProveedor.map((item, rowIdx) => (
                          <tr key={rowIdx}>
                            {/* CÉLDA DE LA PRIMERA COLUMNA FIJA / STICKY EN MÓVIL Y ESCRITORIO */}
                            <td className="py-3.5 px-2 sm:px-4 font-bold text-gray-900 text-center sticky left-0 bg-white z-20 shadow-md border-r-2 border-[#285C48]/60 w-[125px] min-w-[125px] max-w-[125px] sm:w-40 sm:min-w-[140px] sm:max-w-none leading-tight">
                              {item.labelTop}
                              {item.labelBottom && <><br /><span className="font-semibold text-gray-600">{item.labelBottom}</span></>}
                            </td>
                            {item.val.map((val, colIdx) => {
                              const isPositive = val === 'Sí' || val === 'Ilimitadas' || val === 'Incluidas' || val === 'Prioritario' || val === 'Prioritarias';
                              return (
                                <td 
                                  key={colIdx} 
                                  className={`py-3.5 px-2 sm:px-4 text-center snap-start w-[calc(100vw-162px)] min-w-[calc(100vw-162px)] max-w-[calc(100vw-162px)] sm:w-auto sm:min-w-[145px] sm:max-w-none ${
                                    planesProveedor[colIdx].isRecommended
                                      ? 'bg-emerald-50/70 border-x-2 border-emerald-500/30 font-bold text-emerald-950'
                                      : 'text-gray-800 font-semibold'
                                  }`}
                                >
                                  {val === 'Sí' ? (
                                    <span className="text-emerald-600 font-black">Sí</span>
                                  ) : val === '—' ? (
                                    <span className="text-gray-300 font-normal">—</span>
                                  ) : (
                                    <span className={isPositive ? 'text-emerald-700 font-bold' : ''}>{val}</span>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* INDICADORES DE PUNTITOS Y FLECHAS PARA MÓVIL */}
                  <div className="flex sm:hidden items-center justify-center gap-3 py-3 bg-emerald-50/30 border-t border-[#285C48]/30">
                    <button
                      onClick={() => scrollToMatrixCard(proveedorMatrixRef, Math.max(0, mobileMatrixIndex - 1))}
                      disabled={mobileMatrixIndex === 0}
                      className="p-1 rounded-full text-gray-400 hover:text-emerald-700 disabled:opacity-30 transition-colors"
                      aria-label="Anterior plan"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex items-center justify-center gap-2">
                      {[0, 1, 2, 3, 4].map((idx) => (
                        <button
                          key={idx}
                          onClick={() => scrollToMatrixCard(proveedorMatrixRef, idx)}
                          className={`transition-all duration-300 rounded-full ${
                            mobileMatrixIndex === idx
                              ? 'w-7 h-2.5 bg-emerald-600 shadow-sm'
                              : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                          }`}
                          aria-label={`Ver plan ${planesProveedor[idx].name}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => scrollToMatrixCard(proveedorMatrixRef, Math.min(4, mobileMatrixIndex + 1))}
                      disabled={mobileMatrixIndex === 4}
                      className="p-1 rounded-full text-gray-400 hover:text-emerald-700 disabled:opacity-30 transition-colors"
                      aria-label="Siguiente plan"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* SECCIÓN PLANES COMPRADOR */
            <div className="space-y-12 animate-in fade-in duration-300">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Explora toda la oferta y utiliza tus créditos solo cuando decidas conectar
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Todos los compradores pueden revisar las ofertas disponibles. Los planes se diferencian por la cantidad de contactos que pueden desbloquear.
                </p>
              </div>

              {/* BANNERS ACLARATORIO DESTACADO */}
              <div className="bg-emerald-100/80 border border-emerald-300 rounded-2xl p-4 text-center max-w-3xl mx-auto flex items-center justify-center gap-2 text-emerald-950 font-bold text-xs sm:text-sm shadow-sm">
                <Info className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>Explorar, filtrar y negociar no consume créditos. El crédito se utiliza únicamente al desbloquear el contacto del proveedor.</span>
              </div>

              {/* 1. VISTA MÓVIL: CARRUSEL HORIZONTAL CON PUNTITOS Y SNAP OBLIGATORIO */}
              <div className="block md:hidden w-full max-w-full overflow-hidden">
                <div
                  ref={compradorCarouselRef}
                  onScroll={() => handleCarouselScroll(compradorCarouselRef)}
                  onMouseDown={(e) => handleMouseDown(e, compradorCarouselRef)}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseUp}
                  onMouseMove={(e) => handleMouseMove(e, compradorCarouselRef)}
                  className="flex overflow-x-auto snap-x snap-mandatory py-4 px-2 gap-4 scroll-smooth w-full scrollbar-none cursor-grab active:cursor-grabbing select-none"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {planesComprador.map((plan) => (
                    <div
                      key={plan.id}
                      className={`relative w-[85vw] max-w-[320px] shrink-0 snap-center rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${
                        plan.isRecommended
                          ? 'text-white shadow-xl border border-[#397F4D]'
                          : 'bg-gradient-to-br from-[#e2f3e6] via-[#f5fbf6] to-[#d8efe0] border border-[#397F4D]/35 shadow-md'
                      }`}
                      style={plan.isRecommended ? { background: 'linear-gradient(60deg, #285C48 0%, #397F4D 50%, #4CA254 100%)' } : undefined}
                    >
                      {plan.isRecommended && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-[#285C48] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                          <Zap className="w-3 h-3 fill-current text-[#397F4D]" /> Más recomendado
                        </div>
                      )}

                      <div className="space-y-4">
                        <div className="space-y-1 text-center">
                          <h4 className={`text-lg font-black ${plan.isRecommended ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h4>
                          <p className={`text-xs leading-tight ${plan.isRecommended ? 'text-emerald-100' : 'text-gray-500'}`}>{plan.desc}</p>
                        </div>

                        <div className={`border-y py-3 text-center ${plan.isRecommended ? 'border-white/20' : 'border-emerald-200/60'}`}>
                          <span className={`text-3xl font-black ${plan.isRecommended ? 'text-white' : 'text-emerald-950'}`}>{plan.price}</span>
                          <span className={`text-xs font-semibold ${plan.isRecommended ? 'text-emerald-100' : 'text-gray-500'}`}> / mes</span>
                          <div className="mt-2 flex flex-wrap gap-1.5 justify-center">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${plan.isRecommended ? 'bg-white/20 text-white' : 'text-emerald-800 bg-emerald-100'}`}>
                              {plan.credits}
                            </span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${plan.isRecommended ? 'bg-white/10 text-white border-white/30' : 'text-emerald-800 bg-emerald-50 border-emerald-200'}`}>
                              Oferta visible ilimitada
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-2 text-xs">
                          {plan.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${plan.isRecommended ? 'text-white' : 'text-emerald-600'}`} />
                              <span className={plan.isRecommended ? 'text-emerald-50' : 'text-gray-600'}>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-5">
                        <button
                          onClick={() => handleSelectPlan(plan.id)}
                          className={`w-full py-3 rounded-xl font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 ${
                            plan.isRecommended
                              ? 'bg-white text-[#285C48] hover:bg-emerald-50'
                              : 'bg-emerald-800 text-white'
                          }`}
                        >
                          <span>{plan.buttonText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* INDICADORES DE PUNTITOS (DOTS) */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  {[0, 1, 2, 3, 4].map((idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToCard(compradorCarouselRef, idx)}
                      className={`transition-all duration-300 rounded-full ${
                        activeCardIndex === idx
                          ? 'w-7 h-2.5 bg-emerald-600 shadow-sm'
                          : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Ver plan ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* 2. VISTA ESCRITORIO: GRID RESPONSIVO (3 ARRIBA + 2 ABAJO CENTRADOS) */}
              <div className="hidden md:block space-y-8">
                {/* Fila 1: 3 Planes principales */}
                <div className="grid grid-cols-3 gap-8 items-stretch">
                  {planesComprador.slice(0, 3).map((plan) => (
                    <div
                      key={plan.id}
                      className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                        plan.isRecommended
                          ? 'text-white border border-[#397F4D] ring-2 ring-[#397F4D]/30 shadow-2xl scale-102 z-10'
                          : 'bg-gradient-to-br from-[#e2f3e6] via-[#f5fbf6] to-[#d8efe0] border border-[#397F4D]/35 shadow-sm hover:shadow-xl'
                      }`}
                      style={plan.isRecommended ? { background: 'linear-gradient(60deg, #285C48 0%, #397F4D 50%, #4CA254 100%)' } : undefined}
                    >
                      {plan.isRecommended && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#285C48] text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 fill-current text-[#397F4D]" /> Más recomendado
                        </div>
                      )}

                      <div className="space-y-5">
                        <div className="space-y-1 text-left">
                          <h4 className={`text-xl font-black ${plan.isRecommended ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h4>
                          <p className={`text-xs min-h-[36px] ${plan.isRecommended ? 'text-emerald-100' : 'text-gray-500'}`}>{plan.desc}</p>
                        </div>

                        <div className={`border-y py-4 text-left ${plan.isRecommended ? 'border-white/20' : 'border-emerald-200/70'}`}>
                          <span className={`text-4xl font-black ${plan.isRecommended ? 'text-white' : 'text-emerald-950'}`}>{plan.price}</span>
                          <span className={`text-xs font-semibold ${plan.isRecommended ? 'text-emerald-100' : 'text-gray-500'}`}> / mes</span>
                          <div className="mt-2 flex flex-wrap gap-2 justify-start">
                            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${plan.isRecommended ? 'bg-white/20 text-white' : 'text-emerald-800 bg-emerald-100/90'}`}>
                              {plan.credits}
                            </span>
                            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${plan.isRecommended ? 'bg-white/10 text-white border-white/30' : 'text-emerald-800 bg-emerald-50 border-emerald-200'}`}>
                              Oferta visible ilimitada
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-2.5 text-xs">
                          {plan.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.isRecommended ? 'text-white' : 'text-emerald-600'}`} />
                              <span className={plan.isRecommended ? 'text-emerald-50' : 'text-gray-600'}>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6">
                        <button
                          onClick={() => handleSelectPlan(plan.id)}
                          className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 ${
                            plan.isRecommended
                              ? 'bg-white text-[#285C48] hover:bg-emerald-50'
                              : 'bg-emerald-800 hover:bg-emerald-900 text-white'
                          }`}
                        >
                          <span>{plan.buttonText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Fila 2: 2 Planes avanzados centrados */}
                <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
                  {planesComprador.slice(3, 5).map((plan) => (
                    <div
                      key={plan.id}
                      className="bg-gradient-to-br from-[#e2f3e6] via-[#f5fbf6] to-[#d8efe0] rounded-3xl p-8 border border-[#397F4D]/35 shadow-sm hover:shadow-xl flex flex-col justify-between transition-all"
                    >
                      <div className="space-y-5">
                        <div className="space-y-1 text-left">
                          <h4 className="text-xl font-black text-gray-900">{plan.name}</h4>
                          <p className="text-xs text-gray-500 min-h-[36px]">{plan.desc}</p>
                        </div>

                        <div className="border-y border-gray-100 py-4 text-left">
                          <span className="text-3xl font-black text-emerald-950">{plan.price}</span>
                          <span className="text-xs font-semibold text-gray-500"> / mes</span>
                          <div className="mt-2 flex flex-wrap gap-2 justify-start">
                            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                              {plan.credits}
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-2.5 text-xs text-gray-600">
                          {plan.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6">
                        <button
                          onClick={() => handleSelectPlan(plan.id)}
                          className="w-full py-3.5 rounded-xl font-bold text-sm bg-emerald-800 hover:bg-emerald-900 text-white transition-all shadow-md flex items-center justify-center gap-2"
                        >
                          <span>{plan.buttonText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BLOQUE EXPLICATIVO: CÓMO FUNCIONAN LOS CRÉDITOS */}
              <div className="bg-gradient-to-br from-emerald-50 via-green-50/60 to-white rounded-3xl p-6 sm:p-10 border border-emerald-200/80 shadow-sm space-y-8">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded">Flujo Comercial</span>
                  <h3 className="text-xl sm:text-3xl font-black text-gray-900">
                    Un crédito se utiliza cuando decides conocer al proveedor
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    El crédito se utiliza únicamente después de alcanzar un acuerdo comercial formal en la plataforma.
                  </p>
                </div>

                {/* 4 PASOS EN GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm space-y-2 text-center sm:text-left">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-black flex items-center justify-center text-xs">
                      01
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm">Paso 1 — Explora</h4>
                    <p className="text-xs text-gray-500">Revisa todas las publicaciones y utiliza los filtros disponibles sin límite.</p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm space-y-2 text-center sm:text-left">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-black flex items-center justify-center text-xs">
                      02
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm">Paso 2 — Negocia</h4>
                    <p className="text-xs text-gray-500">Presenta ofertas y recibe contraofertas formales dentro de Agrovio.</p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm space-y-2 text-center sm:text-left">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-black flex items-center justify-center text-xs">
                      03
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm">Paso 3 — Acuerda</h4>
                    <p className="text-xs text-gray-500">Define precio, volumen y condiciones principales con el proveedor.</p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border-2 border-emerald-500 shadow-md space-y-2 text-center sm:text-left">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-black flex items-center justify-center text-xs">
                      04
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm flex items-center justify-center sm:justify-start gap-1">
                      <Unlock className="w-3.5 h-3.5 text-emerald-600" /> Desbloquea
                    </h4>
                    <p className="text-xs text-gray-600">Utiliza 1 crédito para revelar la identidad y datos de contacto directo.</p>
                  </div>
                </div>

                {/* Mockup Flujo de Créditos */}
                <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-emerald-200 shadow-md bg-white p-2">
                  <img 
                    src="/images/flujo_creditos.png" 
                    alt="Flujo de créditos y acuerdo de negociación" 
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>

                <div className="text-center bg-white p-4 rounded-2xl border border-emerald-200 text-xs sm:text-sm font-bold text-emerald-900 shadow-sm">
                  🤝 “Un crédito equivale al desbloqueo del contacto correspondiente a una oferta comercial.”
                </div>
              </div>

              {/* SECCIÓN MATRIZ DE COMPARACIÓN DETALLADA (COMPRADORES) */}
              <div className="space-y-6 pt-4">
                <div className="text-center sm:text-left space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded">
                    Comparación Completa
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                    Matriz de comparación detallada (Compradores)
                  </h3>
                </div>

                {/* MATRIZ DE COMPARACIÓN CON BORDE VERDE OSCURO (#285C48) Y 1 SOLA COLUMNA POR ARRASTRE EN MÓVIL (table-fixed + w-max en móvil) */}
                <div className="bg-white rounded-3xl border-2 border-[#285C48] shadow-xl overflow-hidden">
                  <div
                    ref={compradorMatrixRef}
                    onScroll={() => handleMatrixScroll(compradorMatrixRef)}
                    onMouseDown={(e) => handleMouseDown(e, compradorMatrixRef)}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={(e) => handleMouseMove(e, compradorMatrixRef)}
                    className="overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none cursor-grab active:cursor-grabbing select-none"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollPaddingLeft: '125px' }}
                  >
                    <table className="w-max sm:w-full table-fixed text-center border-collapse">
                      <thead>
                        <tr className="border-b-2 border-[#285C48]/50 bg-emerald-50/40">
                          {/* PRIMERA COLUMNA FIJA / STICKY EN MÓVIL (115px ANCHO) Y ESCRITORIO */}
                          <th className="py-4 px-2 sm:px-4 sticky left-0 bg-white z-30 w-[125px] min-w-[125px] max-w-[125px] sm:w-40 sm:min-w-[140px] sm:max-w-none text-center align-bottom shadow-md border-r-2 border-[#285C48]/60">
                            <span className="text-[11px] sm:text-xs font-black text-gray-900 leading-tight block text-center uppercase tracking-wider">
                              CARACTERÍSTICA
                            </span>
                          </th>

                          {/* COLUMNAS DE PLANES (EXACTAMENTE 1 COLUMNA VISIBLE AL LADO DE LA FIJA EN MÓVIL) */}
                          {planesComprador.map((plan) => (
                            <th 
                              key={plan.id}
                              className={`py-4 px-2 sm:px-4 text-center snap-start align-bottom w-[calc(100vw-162px)] min-w-[calc(100vw-162px)] max-w-[calc(100vw-162px)] sm:w-auto sm:min-w-[145px] sm:max-w-none transition-all ${
                                plan.isRecommended 
                                  ? 'bg-gradient-to-b from-[#285c48] via-[#397f4d] to-[#285c48] text-white shadow-lg border-x-2 border-emerald-600' 
                                  : 'bg-emerald-50/20'
                              }`}
                            >
                              <div className="flex flex-col items-center space-y-1.5 w-full">
                                {plan.isRecommended ? (
                                  <span className="bg-white text-emerald-950 text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm inline-flex items-center gap-0.5">
                                    <Zap className="w-2.5 h-2.5 fill-current text-emerald-600" /> Popular
                                  </span>
                                ) : (
                                  <span className="h-4"></span>
                                )}
                                <span className={`text-xs sm:text-sm font-black block leading-tight ${plan.isRecommended ? 'text-white' : 'text-gray-900'}`}>
                                  {plan.name.replace('Agrovio ', '')}
                                </span>
                                <span className={`text-sm sm:text-base font-black block ${plan.isRecommended ? 'text-emerald-200' : 'text-emerald-950'}`}>
                                  {plan.price}
                                </span>
                                
                                <button
                                  onClick={() => handleSelectPlan(plan.id)}
                                  className={`mt-1.5 w-full max-w-[110px] sm:max-w-none py-1.5 px-3 rounded-full text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1 mx-auto ${
                                    plan.isRecommended
                                      ? 'bg-white text-emerald-950 hover:bg-emerald-50 font-black'
                                      : 'bg-emerald-800 text-white hover:bg-emerald-900'
                                  }`}
                                >
                                  <span>Elegir</span>
                                </button>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-gray-200/80 text-xs sm:text-sm font-medium">
                        {datosMatrizComprador.map((item, rowIdx) => (
                          <tr key={rowIdx}>
                            {/* CÉLDA DE LA PRIMERA COLUMNA FIJA / STICKY EN MÓVIL Y ESCRITORIO */}
                            <td className="py-3.5 px-2 sm:px-4 font-bold text-gray-900 text-center sticky left-0 bg-white z-20 shadow-md border-r-2 border-[#285C48]/60 w-[125px] min-w-[125px] max-w-[125px] sm:w-40 sm:min-w-[140px] sm:max-w-none leading-tight">
                              {item.labelTop}
                              {item.labelBottom && <><br /><span className="font-semibold text-gray-600">{item.labelBottom}</span></>}
                            </td>
                            {item.val.map((val, colIdx) => {
                              const isPositive = val === 'Sí' || val === 'Toda' || val === 'Avanzados' || val === 'Avanzada' || val === 'Prioritarias';
                              return (
                                <td 
                                  key={colIdx} 
                                  className={`py-3.5 px-2 sm:px-4 text-center snap-start w-[calc(100vw-162px)] min-w-[calc(100vw-162px)] max-w-[calc(100vw-162px)] sm:w-auto sm:min-w-[145px] sm:max-w-none ${
                                    planesComprador[colIdx].isRecommended
                                      ? 'bg-emerald-50/70 border-x-2 border-emerald-500/30 font-bold text-emerald-950'
                                      : 'text-gray-800 font-semibold'
                                  }`}
                                >
                                  {val === 'Sí' ? (
                                    <span className="text-emerald-600 font-black">Sí</span>
                                  ) : val === '—' ? (
                                    <span className="text-gray-300 font-normal">—</span>
                                  ) : (
                                    <span className={isPositive ? 'text-emerald-700 font-bold' : ''}>{val}</span>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* INDICADORES DE PUNTITOS Y FLECHAS PARA MÓVIL */}
                  <div className="flex sm:hidden items-center justify-center gap-3 py-3 bg-emerald-50/30 border-t border-[#285C48]/30">
                    <button
                      onClick={() => scrollToMatrixCard(compradorMatrixRef, Math.max(0, mobileMatrixIndex - 1))}
                      disabled={mobileMatrixIndex === 0}
                      className="p-1 rounded-full text-gray-400 hover:text-emerald-700 disabled:opacity-30 transition-colors"
                      aria-label="Anterior plan"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex items-center justify-center gap-2">
                      {[0, 1, 2, 3, 4].map((idx) => (
                        <button
                          key={idx}
                          onClick={() => scrollToMatrixCard(compradorMatrixRef, idx)}
                          className={`transition-all duration-300 rounded-full ${
                            mobileMatrixIndex === idx
                              ? 'w-7 h-2.5 bg-emerald-600 shadow-sm'
                              : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                          }`}
                          aria-label={`Ver plan ${planesComprador[idx].name}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => scrollToMatrixCard(compradorMatrixRef, Math.min(4, mobileMatrixIndex + 1))}
                      disabled={mobileMatrixIndex === 4}
                      className="p-1 rounded-full text-gray-400 hover:text-emerald-700 disabled:opacity-30 transition-colors"
                      aria-label="Siguiente plan"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.section>

        {/* COMISIONES APLICABLES */}
        <motion.section 
          {...scrollAnimation}
          className="py-16 sm:py-20 bg-white border-y border-gray-200/60"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded">Transparencia</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">Costos transparentes en cada operación</h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Sin cobros ocultos ni sorpresas. Conoce exactamente en qué momento aplica cada tarifa.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              {/* Tarjeta Única Compradores y Proveedores */}
              <div className="bg-gradient-to-br from-[#e2f3e6] via-[#f5fbf6] to-[#d8efe0] rounded-3xl p-6 sm:p-10 border border-[#397F4D]/35 shadow-lg space-y-4 text-center sm:text-left">
                <span className="inline-block text-xs font-bold text-emerald-900 bg-emerald-100/90 px-4 py-1 rounded-full border border-emerald-300">
                  Para Compradores y Proveedores
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900">Comisión comercial del 1%</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Comisión aplicable: <span className="font-bold text-emerald-800">1% del valor comercial confirmado</span> mediante Agrovio, de acuerdo con los términos de la operación.
                </p>
                <div className="bg-white p-5 rounded-2xl border border-emerald-200 text-xs sm:text-sm text-gray-700 space-y-2.5 text-left shadow-xs">
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#397F4D] shrink-0" />
                    <span>Calculada sobre el valor final confirmado del pedido.</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#397F4D] shrink-0" />
                    <span>Acreditación únicamente tras el cierre exitoso del trato.</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#397F4D] shrink-0" />
                    <span>Protección en caso de variaciones acordadas de volumen.</span>
                  </p>
                </div>
                <p className="text-xs text-gray-500 font-medium pt-2">
                  Los precios mostrados no incluyen impuestos (Precios sin IGV). Las condiciones finales se detallan durante la contratación.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ DE SUSCRIPCIÓN */}
        <motion.section 
          {...scrollAnimation}
          className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8"
        >
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded">Dudas Frecuentes</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">Preguntas frecuentes sobre suscripciones</h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Todo lo que necesitas saber antes de elegir tu plan en Agrovio.
            </p>
          </div>

          <div className="space-y-4">
            {faqsSuscripciones.map((faq, idx) => {
              const isOpen = !!openFaq[idx];
              return (
                <div key={idx} className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden transition-all">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-bold text-gray-900 hover:text-emerald-700 transition-colors focus:outline-none"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-emerald-600 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
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
              Elige cómo quieres crecer con Agrovio
            </h2>
            <p className="text-base sm:text-lg text-emerald-100 font-light max-w-2xl mx-auto">
              Publica tu oferta, encuentra nuevos proveedores y gestiona tus oportunidades comerciales desde una sola plataforma.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => navigate('/comenzar?tipo=proveedor')}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm bg-agrovio-gradient-invert !text-white shadow-[0_10px_35px_rgba(76,162,84,0.4)] border border-emerald-300/40 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>Unirme como proveedor</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/comenzar?tipo=comprador')}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm bg-white text-emerald-950 hover:bg-emerald-50 shadow-xl transition-all hover:scale-105"
              >
                Unirme como comprador
              </button>
            </div>

            {/* Mockup CTA Suscripciones */}
            <div className="pt-6 max-w-3xl mx-auto">
              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white/10 p-2 backdrop-blur-md">
                <img 
                  src="/images/cta_suscripciones.png" 
                  alt="Plataforma Agrovio - Dashboard Proveedor y Comprador" 
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
};

export default Suscripciones;