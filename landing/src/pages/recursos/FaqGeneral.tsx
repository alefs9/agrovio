import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollAnimation } from '../../utils/animations';
import { 
  Search, 
  ChevronDown, 
  HelpCircle, 
  MessageSquare
} from 'lucide-react';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FaqGeneral: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'todos', label: 'Todas las preguntas' },
    { id: 'general', label: 'Sobre Agrovio' },
    { id: 'proveedores', label: 'Para Proveedores' },
    { id: 'compradores', label: 'Para Compradores' },
    { id: 'negociaciones', label: 'Negociaciones & Créditos' },
    { id: 'planes', label: 'Planes & Pagos' },
    { id: 'cuenta', label: 'Cuenta & Soporte' },
  ];

  const faqs: FAQItem[] = [
    // Sobre Agrovio
    {
      id: 'g1',
      category: 'general',
      question: '¿Qué es Agrovio?',
      answer: 'Agrovio es una plataforma B2B de comercialización poscosecha que conecta a compradores y proveedores de productos agrícolas y agroindustriales. Permite organizar la oferta disponible, encontrar oportunidades comerciales y gestionar negociaciones antes de habilitar el contacto directo.'
    },
    {
      id: 'g2',
      category: 'general',
      question: '¿Qué productos puedo encontrar en Agrovio?',
      answer: 'La plataforma contempla productos agrícolas frescos (frutas, hortalizas), descartes y excedentes con valor comercial, materias primas y productos agroindustriales como harinas, aceites, fibras, pulpas y deshidratados.'
    },
    {
      id: 'g3',
      category: 'general',
      question: '¿Quién puede utilizar Agrovio?',
      answer: 'Del lado de la oferta: productores, cooperativas, acopiadores, fundos, procesadoras y agroindustrias. Del lado de la demanda: mayoristas, distribuidores, exportadores e industrias.'
    },
    {
      id: 'g4',
      category: 'general',
      question: '¿Agrovio es solo un directorio de proveedores?',
      answer: 'No. Agrovio no se limita a mostrar contactos. La plataforma permite visualizar ofertas, comparar información comercial relevante y realizar negociaciones formales antes de desbloquear la identidad de las partes.'
    },

    // Para Proveedores
    {
      id: 'p1',
      category: 'proveedores',
      question: '¿Cómo publico un producto?',
      answer: 'Puedes crear una publicación directamente desde Agrovio indicando información de producto, fotografías, volumen, ubicación, condición, disponibilidad y precio referencial.'
    },
    {
      id: 'p2',
      category: 'proveedores',
      question: '¿Tengo que utilizar WhatsApp para publicar?',
      answer: 'No. Los proveedores pueden gestionar directamente sus ofertas en la web. WhatsApp es una vía asistida pensada especialmente para pequeños agricultores que necesitan una experiencia digital más sencilla.'
    },
    {
      id: 'p3',
      category: 'proveedores',
      question: '¿Cómo funciona la publicación por WhatsApp?',
      answer: 'El agricultor envía la información de su cosecha por chat (fotos, producto, volumen, ubicación y fecha). Agrovio la estructura en una publicación oficial y envía notificaciones cuando existan ofertas de compradores.'
    },
    {
      id: 'p4',
      category: 'proveedores',
      question: '¿Puedo modificar una publicación después de crearla?',
      answer: 'Sí. Puedes actualizar precio, volumen disponible, fotografías y condiciones comerciales sin consumir un nuevo listado.'
    },
    {
      id: 'p5',
      category: 'proveedores',
      question: '¿Los compradores pueden ver mi nombre y teléfono?',
      answer: 'No inicialmente. Ven la información comercial de tu producto, pero tu identidad y teléfono permanecen protegidos mientras se desarrolla la negociación.'
    },

    // Para Compradores
    {
      id: 'c1',
      category: 'compradores',
      question: '¿Puedo revisar todas las ofertas disponibles?',
      answer: 'Sí. Todos los compradores pueden explorar la oferta completa disponible en el mercado independientemente de su plan.'
    },
    {
      id: 'c2',
      category: 'compradores',
      question: '¿Qué información puedo ver antes de contactar al proveedor?',
      answer: 'Puedes evaluar fotos, producto, región general, volumen, calidad/grado, fecha de disponibilidad, precio referencial y pedido mínimo, manteniendo protegida la identidad del proveedor.'
    },
    {
      id: 'c3',
      category: 'compradores',
      question: '¿Cómo hago una oferta?',
      answer: 'Desde la publicación puedes presentar una propuesta comercial. El proveedor recibe la notificación y puede aceptarla, rechazarla o enviar una contraoferta.'
    },

    // Negociaciones y Créditos
    {
      id: 'n1',
      category: 'negociaciones',
      question: '¿Qué es un crédito de conexión?',
      answer: 'Es la unidad que permite a un comprador desbloquear la identidad y datos directos de contacto del proveedor una vez alcanzado un acuerdo.'
    },
    {
      id: 'n2',
      category: 'negociaciones',
      question: '¿Cuándo se utiliza un crédito?',
      answer: 'El crédito se consume únicamente cuando comprador y proveedor alcanzan un acuerdo en el sistema de ofertas y el comprador decide acceder a los datos directos.'
    },
    {
      id: 'n3',
      category: 'negociaciones',
      question: '¿Enviar una oferta consume un crédito?',
      answer: 'No. Explorar, filtrar, comparar, guardar y presentar ofertas o contraofertas no consume créditos.'
    },

    // Planes y Pagos
    {
      id: 'pl1',
      category: 'planes',
      question: '¿La suscripción y la comisión son lo mismo?',
      answer: 'No. La suscripción permite usar las funciones e incluir listados/créditos. La comisión aplica únicamente cuando se concreta una operación comercial originada en la plataforma.'
    },
    {
      id: 'pl2',
      category: 'planes',
      question: '¿Puedo cambiar de plan?',
      answer: 'Sí. Puedes solicitar un cambio de plan de acuerdo con las condiciones del servicio y tu nivel de actividad comercial.'
    },

    // Cuenta y Soporte
    {
      id: 'cs1',
      category: 'cuenta',
      question: '¿Agrovio funciona desde el celular?',
      answer: 'Sí. La plataforma está totalmente optimizada para navegadores móviles y de escritorio sin necesidad obligatoria de descargar una app.'
    },
    {
      id: 'cs2',
      category: 'cuenta',
      question: '¿Cómo contacto al equipo de soporte?',
      answer: 'Puedes escribir directamente a nuestro canal oficial de soporte por WhatsApp o enviar una consulta a través de nuestros formularios de contacto.'
    }
  ];

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'todos' || faq.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full font-sans text-gray-900">
      <main className="flex-grow">
        
        {/* HERO SECTION CON BUSCADOR */}
        {/* Se usa bg-agrovio-gradient en lugar de los estilos en línea */}
        <section className="relative text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden bg-agrovio-gradient">
          <motion.div 
            {...scrollAnimation}
            className="max-w-4xl mx-auto space-y-6 relative z-10 flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-emerald-100 backdrop-blur-md border border-white/20">
              <HelpCircle className="w-4 h-4 text-emerald-300" /> Centro de Ayuda
            </span>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              ¿Cómo podemos ayudarte?
            </h1>

            <p className="text-emerald-100 text-base sm:text-lg font-light max-w-2xl mx-auto">
              Encuentra respuestas inmediatas sobre cómo publicar, comprar, negociar y utilizar Agrovio.
            </p>

            {/* REAL-TIME SEARCH BAR */}
            <div className="w-full max-w-2xl mx-auto relative pt-4">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 absolute left-4 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar una pregunta (ej. publicar, créditos, WhatsApp, comisión)..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-gray-900 placeholder-gray-400 font-medium text-xs sm:text-sm shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-400/50 transition-all"
                />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-3 text-xs text-emerald-100">
                <span className="font-semibold text-emerald-100/80 mr-1">Búsquedas frecuentes:</span>
                <button 
                  onClick={() => setSearchTerm('publicar')} 
                  className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur-sm border border-white/15 transition-all text-[11px]"
                >
                  Publicar
                </button>
                <button 
                  onClick={() => setSearchTerm('crédito')} 
                  className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur-sm border border-white/15 transition-all text-[11px]"
                >
                  Créditos
                </button>
                <button 
                  onClick={() => setSearchTerm('WhatsApp')} 
                  className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur-sm border border-white/15 transition-all text-[11px]"
                >
                  WhatsApp
                </button>
                <button 
                  onClick={() => setSearchTerm('comisión')} 
                  className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur-sm border border-white/15 transition-all text-[11px]"
                >
                  Comisiones
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* NAVEGACIÓN POR CATEGORÍAS & PREGUNTAS */}
        <motion.section 
          {...scrollAnimation}
          className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12"
        >
          
          {/* CATEGORY TABS */}
          <div className="flex flex-wrap gap-2 justify-center border-b border-gray-200 pb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat.id
                    // Aplicamos bg-agrovio-gradient en lugar de los colores estáticos
                    ? 'bg-agrovio-gradient !text-white shadow-lg shadow-emerald-900/20 scale-105'
                    : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-agrovio-dark border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* LISTA DE ACCORDIONS */}
          <div className="space-y-4 min-h-[300px]">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = !!openItems[faq.id];
                return (
                  <div 
                    key={faq.id}
                    className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-bold text-gray-900 hover:text-agrovio-dark transition-colors focus:outline-none"
                    >
                      <span className="text-base sm:text-lg">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-agrovio-medium transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300 p-8 space-y-3">
                <HelpCircle className="w-10 h-10 text-gray-400 mx-auto" />
                <h3 className="text-lg font-bold text-gray-800">No encontramos coincidencias</h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  Prueba buscando otros términos o navega por las categorías principales.
                </p>
                <button 
                  onClick={() => { setSearchTerm(''); setActiveCategory('todos'); }} 
                  className="text-xs font-bold text-agrovio-medium hover:underline pt-2"
                >
                  Restablecer filtros de búsqueda
                </button>
              </div>
            )}
          </div>

          {/* BLOQUE ¿NO ENCONTRASTE TU RESPUESTA? */}
          <div className="bg-emerald-50 rounded-3xl p-6 sm:p-8 border border-emerald-200/80 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-emerald-950">¿Todavía tienes alguna duda?</h3>
              <p className="text-xs sm:text-sm text-emerald-800 max-w-md">
                Nuestro equipo puede ayudarte directamente con preguntas sobre publicaciones, compras, planes o el funcionamiento de Agrovio.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0 justify-center">
              <a
                href="https://wa.me/51926474032?text=¡Hola%20Agrovio!%20Tengo%20una%20consulta%20sobre%20la%20plataforma."
                target="_blank"
                rel="noreferrer"
                /* Se aplica el bg-agrovio-gradient clásico en vez de los colores grises oscuros */
                className="px-6 py-3 rounded-full text-xs font-bold bg-agrovio-gradient text-white hover:opacity-95 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> Hablar con Soporte
              </a>
            </div>
          </div>
        </motion.section>

        {/* CTA FINAL */}
        {/* Se usa bg-agrovio-gradient en la sección completa */}
        <motion.section 
          {...scrollAnimation}
          className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-white text-center relative overflow-hidden bg-agrovio-gradient"
        >
          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              ¿Listo para empezar?
            </h2>
            <p className="text-base sm:text-lg text-emerald-100 font-light max-w-2xl mx-auto">
              Únete a Agrovio y comienza a descubrir nuevas oportunidades comerciales.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/comenzar"
                /* Botón con bg-agrovio-gradient-invert para resaltar sobre el fondo verde */
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm bg-agrovio-gradient-invert text-white border border-emerald-300/40 shadow-2xl transition-all hover:scale-105"
              >
                Unirme como proveedor
              </Link>
              <Link
                to="/comenzar"
                /* Botón secundario en blanco con texto oscuro, igual que en el Hero del Home */
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm bg-white text-agrovio-dark hover:bg-emerald-50 shadow-xl transition-all hover:scale-105"
              >
                Unirme como comprador
              </Link>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default FaqGeneral;