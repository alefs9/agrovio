import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Filter, ChevronRight, Users,
    CheckCircle2, Unlock, Building2, Factory, Globe,
    Sparkles, Building, ShieldCheck, Lock, ChevronDown,
    ChevronUp, Store, Shield, Zap, Check,
    Search, Scale, Handshake, BarChart3, UserPlus, MessageSquare, TrendingUp, Database
} from 'lucide-react';
import tiguiLaptopImg from '../assets/tigui_laptop.png';
import tiguiLadoImg from '../assets/tigui_lado.png';
import compradorImg from '../assets/comprador.png';
import mock1CompImg from '../assets/mock1_comp.png';
import mock2CompImg from '../assets/mock2_comp.png';

export const CompradoresPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [buyerPrice, setBuyerPrice] = useState<number>(3.40);

    const planesComprador = [
        {
            id: 'base-comprador',
            name: 'Agrovio Base',
            price: 'S/ 69.90',
            desc: 'Para compradores que realizan búsquedas comerciales puntuales.',
            credits: '10 créditos/mes',
            icon: Sparkles,
            features: [
                'Acceso a toda la oferta disponible',
                '10 créditos de conexión al mes',
                'Filtros básicos de búsqueda',
                'Productos guardados',
                'Historial de precios',
                'Alertas comerciales',
                'Acceso desde diferentes dispositivos'
            ]
        },
        {
            id: 'plus-comprador',
            name: 'Agrovio Plus',
            price: 'S/ 139.90',
            desc: 'Para negocios con necesidades frecuentes de abastecimiento.',
            credits: '30 créditos/mes',
            icon: ShieldCheck,
            features: [
                'Acceso a toda la oferta disponible',
                '30 créditos de conexión al mes',
                'Comparación de productos',
                'Alertas inmediatas',
                'Historial de contactos',
                'Reportes mensuales',
                'Soporte prioritario'
            ]
        },
        {
            id: 'pro-comprador',
            name: 'Agrovio Pro',
            price: 'S/ 249.90',
            desc: 'Para equipos de compras y operaciones de abastecimiento continuo.',
            credits: '75 créditos/mes',
            isRecommended: true,
            icon: Zap,
            features: [
                'Acceso a toda la oferta disponible',
                '75 créditos de conexión al mes',
                'Filtros avanzados',
                'Comparación de cotizaciones',
                'Exportación de información',
                'Analítica comercial',
                'Soporte prioritario'
            ]
        },
        {
            id: 'business-comprador',
            name: 'Agrovio Business',
            price: 'S/ 419.90',
            desc: 'Para empresas con varias necesidades, plantas o puntos de entrega.',
            credits: '150 créditos/mes',
            icon: Shield,
            features: [
                'Acceso a toda la oferta disponible',
                '150 créditos de conexión al mes',
                'Panel de abastecimiento',
                'Alertas prioritarias',
                'Reportes mensuales',
                'Acceso anticipado a nueva oferta',
                'Gestión de diferentes operaciones'
            ]
        },
        {
            id: 'enterprise-comprador',
            name: 'Agrovio Enterprise',
            price: 'Desde S/ 699.90',
            desc: 'Para grandes compradores, industrias y grupos empresariales.',
            credits: 'Personalizados',
            icon: Building,
            features: [
                'Acceso a toda la oferta disponible',
                'Créditos personalizados',
                'Múltiples usuarios, plantas y sedes',
                'Ejecutivo de cuenta asignado',
                'Reportes personalizados',
                'Carga masiva de necesidades',
                'Integraciones con ERP / CRM',
                'Servicio de sourcing bajo condiciones acordadas'
            ]
        }
    ];

    //Animación
    const scrollAnimation = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: false, margin: "-50px" },
        transition: { duration: 0.7, ease: "easeOut" as const }
    };

    const faqs = [
        { q: "¿Puedo ver todas las ofertas sin desbloquear contactos?", a: "Sí, puedes revisar toda la información comercial, volúmenes, calidades, origen y precios referenciales de forma completamente libre." },
        { q: "¿Qué información del proveedor permanece protegida?", a: "El nombre del proveedor, número telefónico, correo electrónico y dirección exacta permanecen protegidos durante toda la negociación." },
        { q: "¿Cómo funciona el sistema de ofertas y contraofertas?", a: "Permite presentar una propuesta formal de precio, volumen y condiciones sobre cualquier publicación. El proveedor puede aceptarla, rechazarla o enviar una contraoferta." },
        { q: "¿Cuándo se utiliza un crédito de conexión?", a: "Se aplica únicamente cuando comprador y proveedor han acordado el precio y las condiciones principales de la operación para revelar el contacto directo." },
        { q: "¿Una negociación consume un crédito?", a: "No. Navegar, comparar, presentar ofertas y responder contraofertas es ilimitado y no consume créditos." },
        { q: "¿Puedo retirar o modificar una propuesta?", a: "Sí, puedes actualizar o retirar tu propuesta comercial en cualquier momento antes de que sea aceptada por el proveedor." },
        { q: "¿Qué ocurre después de desbloquear al proveedor?", a: "Se habilitan los datos directos para continuar con la coordinación logística, el pago y el cierre de la operación." }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans overflow-x-hidden w-full">

            {/*HERO PRINCIPAL */}
            <section
                className="relative overflow-hidden text-white pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-[#397F4D]/40 shadow-xl"
                style={{ background: 'linear-gradient(60deg, #285C48 0%, #397F4D 50%, #4CA254 100%)' }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <motion.div {...scrollAnimation} className="lg:col-span-6 text-left">
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#285C48]/80 border border-[#4CA254]/40 text-emerald-100 mb-6 shadow-sm backdrop-blur-md">
                                Solución B2B para Compradores Agrícolas
                            </div>

                            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                                Encuentra la oferta que necesitas y <span className="text-white">negocia desde un solo lugar</span>
                            </h1>

                            <p className="mt-6 text-base sm:text-lg text-emerald-50/90 font-normal leading-relaxed max-w-2xl">
                                Explora productos agrícolas y agroindustriales, compara condiciones y presenta ofertas directamente a proveedores de distintas regiones.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                                <a
                                    href="#explorar"
                                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white text-[#285C48] font-bold text-sm sm:text-base hover:bg-emerald-50 shadow-lg transition-all hover:-translate-y-0.5"
                                >
                                    <span>Explorar la plataforma</span>
                                    <ChevronRight className="ml-1.5 w-4 h-4 stroke-[3]" />
                                </a>

                                <Link
                                    to="/comenzar"
                                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-black/20 text-white font-semibold text-sm sm:text-base border border-white/30 shadow-sm hover:bg-black/30 backdrop-blur-md transition-all"
                                >
                                    <span>Unirme como comprador</span>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div {...scrollAnimation} className="lg:col-span-6 flex flex-col items-center">
                            <div className="w-full max-w-xl lg:max-w-2xl rounded-2xl overflow-hidden">
                                <div className="w-full overflow-hidden flex items-center justify-center">
                                    <img
                                        src={mock1CompImg}
                                        alt="Mockup de la plataforma de compradores Agrovio"
                                        className="w-full h-auto object-contain transform origin-center"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/*PROBLEMA ACTUAL DE LOS COMPRADORES */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div {...scrollAnimation} className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white order-2 lg:order-1">
                        <img
                            src={compradorImg}
                            alt="Comprador gestionando pedidos y conversaciones en múltiples canales"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <motion.div {...scrollAnimation} className="order-1 lg:order-2">
                        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-[#285C48] uppercase tracking-wider mb-3">
                            Problema Real
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                            Encontrar oferta confiable todavía requiere demasiadas llamadas
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                            Los compradores suelen depender de contactos conocidos, grupos de WhatsApp, visitas y referencias personales para encontrar producto disponible.
                        </p>
                        <div className="space-y-2.5">
                            {[
                                "Oferta dispersa entre diferentes contactos.",
                                "Información incompleta o desactualizada.",
                                "Dificultad para comparar productos de forma eficiente.",
                                "Poca visibilidad de nuevos proveedores en el mercado.",
                                "Tiempo perdido validando disponibilidad real.",
                                "Negociaciones sin seguimiento organizado ni historial."
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-3 bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                                    <span className="text-xs sm:text-sm font-medium text-gray-800">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/*OFERTA CENTRALIZADA */}
            <section
                className="py-20 text-white shadow-xl px-4 sm:px-6 lg:px-8 w-full border-y border-[#397F4D]/30"
                style={{ background: 'linear-gradient(60deg, #285C48 0%, #397F4D 50%, #4CA254 100%)' }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...scrollAnimation}>
                            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-emerald-100 border border-white/20 uppercase tracking-wider mb-4 backdrop-blur-md">
                                Oferta Centralizada
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                                Toda la oferta disponible en <span className="text-emerald-200">un solo mercado</span>
                            </h2>
                            <p className="text-emerald-50/95 text-base sm:text-lg mb-6 leading-relaxed">
                                Agrovio reúne productos agrícolas y agroindustriales de diferentes proveedores y regiones, permitiendo que el comprador revise oportunidades sin depender únicamente de su red habitual.
                            </p>
                            <div className="bg-black/20 p-5 rounded-2xl border border-white/15 space-y-2 text-xs sm:text-sm text-emerald-50 backdrop-blur-md">
                                <div className="font-bold text-white mb-1">Información visible en cada oferta:</div>
                                <p>• Producto y fotografías.</p>
                                <p>• Región o zona de origen.</p>
                                <p>• Volumen disponible: Calidad, condiciones, mercado sugerido.</p>
                                <p>• Fecha de disponibilidad</p>
                                <p>• Pedido mínimo.</p>
                                <p>• Precio referencial y condiciones de recojo o entrega.</p>
                                <p>• Estado de verificación oficial.</p>
                            </div>
                        </motion.div>

                        <motion.div {...scrollAnimation} className="flex justify-center">
                            <div className="w-full max-w-xl lg:max-w-2xl rounded-2xl overflow-hidden">
                                <div className="w-full overflow-hidden flex items-center justify-center">
                                    <img
                                        src={mock2CompImg}
                                        alt="Mockup secundario de la plataforma de compradores Agrovio"
                                        className="w-full h-auto object-contain transform origin-center"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/*BUSCAR, FILTRAR Y COMPARAR */}
            <section id="explorar" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div {...scrollAnimation} className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4 order-2 lg:order-1">
                        <div className="flex items-center justify-between pb-3 border-b border-gray-100 text-xs">
                            <span className="font-bold text-gray-900 flex items-center gap-2">
                                <Filter className="w-4 h-4 text-[#397F4D]" /> Panel de Filtros para Comprador
                            </span>
                            <span className="text-[#397F4D] font-bold">3 ofertas en paralelo</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-[11px] text-center font-medium">
                            <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-200">
                                <div className="font-bold text-gray-900">Fresa Fresca</div>
                                <div className="text-gray-500 text-[10px] mt-1">15,000 kg • Ica</div>
                                <div className="text-[#397F4D] font-bold mt-1">S/ 4.50</div>
                            </div>
                            <div className="p-2.5 bg-emerald-50 rounded-xl border border-[#397F4D]">
                                <div className="font-bold text-gray-900">Mandarina</div>
                                <div className="text-gray-500 text-[10px] mt-1">40,000 kg • Piura</div>
                                <div className="text-[#397F4D] font-bold mt-1">S/ 2.20</div>
                            </div>
                            <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-200">
                                <div className="font-bold text-gray-900">Arándano</div>
                                <div className="text-gray-500 text-[10px] mt-1">12,000 kg • La Libertad</div>
                                <div className="text-[#397F4D] font-bold mt-1">S/ 3.80</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div {...scrollAnimation} className="order-1 lg:order-2">
                        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-[#285C48] uppercase tracking-wider mb-3">
                            Búsqueda y Comparación
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                            Encuentra rápidamente la oferta que se ajusta a tu operación
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                            Los compradores pueden explorar toda la oferta disponible y reducir los resultados según sus necesidades comerciales.
                        </p>
                        <div className="space-y-3 text-xs sm:text-sm text-gray-700">
                            <div className="bg-white p-4 rounded-xl border border-gray-200">
                                <span className="font-bold text-gray-900 block mb-1">Filtros principales:</span>
                                <p className="text-gray-600">Producto o categoría, región, volumen, calidad o condición, disponibilidad, pedido mínimo, tipo de presentación y precio referencial.</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-gray-200">
                                <span className="font-bold text-gray-900 block mb-1">Función de comparación:</span>
                                <p className="text-gray-600">Selecciona dos o tres publicaciones y compara en paralelo: volumen, ubicación, calidad, disponibilidad, precio y condiciones comerciales.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/*INFORMACIÓN PROTEGIDA DEL PROVEEDOR */}
            <section className="py-20 bg-gray-100 px-4 sm:px-6 lg:px-8 w-full border-y border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...scrollAnimation}>
                            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-[#285C48] uppercase tracking-wider mb-3">
                                Privacidad Comercial
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                                Conoce la oportunidad antes de conocer al proveedor
                            </h2>
                            <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                                El comprador puede revisar la información necesaria para evaluar una oferta, pero la identidad y los datos de contacto del proveedor permanecen protegidos durante la negociación.
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-xs font-medium">
                                <div className="bg-white p-4 rounded-2xl border border-gray-200">
                                    <div className="font-bold text-[#397F4D] mb-1 text-sm">Información Visible</div>
                                    <p className="text-gray-600">Producto, fotografías, región aproximada, volumen, calidad, disponibilidad, precio y condiciones.</p>
                                </div>
                                <div className="bg-white p-4 rounded-2xl border border-gray-200">
                                    <div className="font-bold text-rose-600 mb-1 text-sm">Información Protegida</div>
                                    <p className="text-gray-600">Nombre del proveedor, número telefónico, correo electrónico, dirección exacta y contacto directo.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div {...scrollAnimation} className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-200 relative space-y-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className="text-xs font-bold text-[#397F4D]">Lote Agrícola #4021</span>
                                    <h3 className="text-xl font-extrabold text-gray-900 mt-1">Fresa Fresca - Calibre Exportación</h3>
                                </div>
                                <span className="bg-emerald-100 text-[#285C48] text-xs font-bold px-3 py-1 rounded-full">Oferta Completa</span>
                            </div>
                            <div className="space-y-2 text-xs text-gray-600 border-y border-gray-100 py-3">
                                <div className="flex justify-between"><span>Región aproximada:</span> <span className="font-bold text-gray-900">Ica, Perú</span></div>
                                <div className="flex justify-between"><span>Volumen disponible:</span> <span className="font-bold text-gray-900">15,000 kg</span></div>
                                <div className="flex justify-between"><span>Precio referencial:</span> <span className="font-bold text-gray-900">S/ 4.50 /kg</span></div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-2xl border border-dashed border-gray-300 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-emerald-100 text-[#285C48] rounded-xl"><Lock className="w-5 h-5 text-[#397F4D]" /></div>
                                    <div>
                                        <div className="font-bold text-gray-900 text-sm">Proveedor Verificado</div>
                                        <div className="text-xs text-gray-500">Identidad protegida durante la negociación</div>
                                    </div>
                                </div>
                                <span className="text-xs font-bold text-gray-400 bg-gray-200 px-3 py-1 rounded-xl">🔒 Oculto</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SISTEMA DE OFERTAS Y NEGOCIACIÓN */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <motion.div {...scrollAnimation} className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-200">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-[#285C48] uppercase tracking-wider mb-2">
                            Sistema de Pujas y Negociación
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                            Presenta una oferta y negocia dentro de Agrovio
                        </h2>
                        <p className="text-gray-600 text-base mt-2">
                            El comprador puede iniciar una negociación sobre una publicación y presentar una propuesta de precio, volumen y condiciones. El proveedor puede aceptarla, rechazarla o enviar una contraoferta.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-6">
                        <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-gray-700 border-b border-gray-200 pb-3">
                            <span>Estado: Negociación Activa</span>
                            <span className="text-[#397F4D]">Lote #104 - Fresa Fresca</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                            <div className="bg-white p-4 rounded-xl border border-gray-200">
                                <div className="text-xs text-gray-500">Precio Solicitado</div>
                                <div className="text-lg font-extrabold text-gray-900 mt-1">S/ 4.50 /kg</div>
                            </div>
                            <div className="bg-emerald-50 p-4 rounded-xl border border-[#397F4D]">
                                <div className="text-xs text-[#285C48] font-bold">Oferta del Comprador</div>
                                <div className="text-lg font-extrabold text-[#397F4D] mt-1">S/ {buyerPrice.toFixed(2)} /kg</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-gray-200">
                                <div className="text-xs text-gray-500">Contraoferta Proveedor</div>
                                <div className="text-lg font-extrabold text-gray-900 mt-1">S/ 4.35 /kg</div>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                            <button onClick={() => setBuyerPrice(buyerPrice + 0.05)} className="px-4 py-2 bg-[#285C48] text-white text-xs font-bold rounded-xl hover:bg-[#397F4D] transition-colors">Mejorar propuesta</button>
                            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-xs font-bold rounded-xl hover:bg-gray-100">Mantener oferta</button>
                            <button className="px-4 py-2 bg-gray-200 text-gray-700 text-xs font-bold rounded-xl hover:bg-gray-300">Retirar oferta</button>
                            <button className="px-4 py-2 bg-[#4CA254] text-white text-xs font-bold rounded-xl hover:bg-[#397F4D] transition-colors">Aceptar acuerdo</button>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ACUERDO Y DESBLOQUEO DEL CONTACTO */}
            <section
                className="py-20 text-white px-4 sm:px-6 lg:px-8 w-full border-y border-[#397F4D]/30 shadow-xl"
                style={{ background: 'linear-gradient(60deg, #285C48 0%, #397F4D 50%, #4CA254 100%)' }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...scrollAnimation}>
                            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-emerald-100 border border-white/20 uppercase tracking-wider mb-4 backdrop-blur-md">
                                Desbloqueo Seguro
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                                Desbloquea el contacto cuando <span className="text-emerald-200">ya exista un acuerdo</span>
                            </h2>
                            <p className="text-emerald-50/95 text-base sm:text-lg mb-6 leading-relaxed">
                                El crédito de conexión no se utiliza para navegar ni para presentar ofertas. Se aplica únicamente cuando comprador y proveedor han acordado el precio y las condiciones principales de la operación.
                            </p>
                            <div className="space-y-2 text-xs sm:text-sm text-emerald-50/90">
                                <p>1. Ambas partes alcanzan un acuerdo.</p>
                                <p>2. El comprador confirma que desea continuar.</p>
                                <p>3. Se utiliza un crédito de conexión.</p>
                                <p>4. Se habilita la identidad y el contacto del proveedor.</p>
                                <p>5. Las partes continúan con la coordinación y el cierre.</p>
                            </div>
                        </motion.div>

                        <motion.div {...scrollAnimation} className="bg-white text-gray-900 p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/30 space-y-4">
                            <div className="flex items-center gap-2 text-xs font-bold text-[#397F4D]">
                                <CheckCircle2 className="w-5 h-5 text-[#397F4D]" /> Acuerdo Alcanzado
                            </div>
                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-2 text-xs sm:text-sm">
                                <div className="flex justify-between"><span>Precio:</span> <span className="font-bold text-gray-900">S/ 4.35 por kilogramo</span></div>
                                <div className="flex justify-between"><span>Volumen:</span> <span className="font-bold text-gray-900">15 toneladas</span></div>
                                <div className="flex justify-between"><span>Condiciones:</span> <span className="font-bold text-gray-900">recojo en planta</span></div>
                            </div>
                            <button className="w-full py-3.5 bg-gradient-to-r from-[#285C48] via-[#397F4D] to-[#4CA254] hover:opacity-95 !text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2">
                                <Unlock className="w-4 h-4" /> Usar 1 crédito de conexión
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CÓMO FUNCIONA PARA EL COMPRADOR */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-[#285C48] uppercase tracking-wider mb-2">
                        Flujo del Proceso
                    </span>
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        De la búsqueda al contacto comercial
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { step: "Paso 1", title: "Explora", desc: "Revisa toda la oferta disponible en Agrovio.", icon: Search },
                        { step: "Paso 2", title: "Compara", desc: "Filtra y evalúa las alternativas que se ajustan a tu necesidad.", icon: Scale },
                        { step: "Paso 3", title: "Negocia", desc: "Presenta ofertas y responde a las contraofertas del proveedor.", icon: Handshake },
                        { step: "Paso 4", title: "Desbloquea", desc: "Cuando exista un acuerdo, utiliza un crédito de conexión para acceder al contacto.", icon: Unlock }
                    ].map((item, index) => {
                        const StepIcon = item.icon;
                        return (
                            <motion.div key={index} {...scrollAnimation} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-emerald-100 text-[#397F4D] rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                                            <StepIcon className="w-5 h-5 text-[#397F4D]" />
                                        </div>
                                        <div className="px-3 py-1.5 bg-emerald-100/80 text-[#285C48] font-black rounded-lg text-xs">{item.step}</div>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* TIPOS DE COMPRADORES */}
            <section className="py-20 bg-gray-100 px-4 sm:px-6 lg:px-8 w-full border-y border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-[#285C48] uppercase tracking-wider mb-2">
                            Perfiles del Sector
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                            Oferta para diferentes necesidades de abastecimiento
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { title: "Mayoristas y distribuidores", desc: "Encuentran nuevos proveedores, comparan volúmenes y amplían su oferta comercial.", icon: Building2 },
                            { title: "Procesadoras", desc: "Identifican materia prima disponible según calidad, volumen y fechas.", icon: Factory },
                            { title: "Exportadores", desc: "Exploran nueva oferta regional y proveedores con características comerciales específicas.", icon: Globe },
                            { title: "Industrias alimentarias", desc: "Buscan materias primas y derivados agroindustriales para abastecimiento continuo.", icon: Store },
                            { title: "Supermercados, restaurantes y cadenas", desc: "Acceden a productos, volúmenes y proveedores que se ajustan a su operación.", icon: Users }
                        ].map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <motion.div key={index} {...scrollAnimation} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                                    <div>
                                        <div className="w-10 h-10 bg-emerald-100 text-[#397F4D] rounded-xl flex items-center justify-center mb-4">
                                            <IconComponent className="w-5 h-5 text-[#397F4D]" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-sm mb-2">{item.title}</h3>
                                        <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* BENEFICIOS PARA COMPRADORES */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-[#285C48] uppercase tracking-wider mb-2">
                        Beneficios Principales
                    </span>
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        Más oferta visible. Mejores decisiones de compra.
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {[
                        { title: "Oferta centralizada", desc: "Productos y proveedores en un solo espacio.", icon: Database },
                        { title: "Búsqueda más rápida", desc: "Menos llamadas y contactos dispersos.", icon: Zap },
                        { title: "Mejor comparación", desc: "Evalúa precios, volúmenes y disponibilidad.", icon: BarChart3 },
                        { title: "Nuevos proveedores", desc: "Accede a oferta fuera de tu red habitual.", icon: UserPlus },
                        { title: "Negociación organizada", desc: "Conserva ofertas y contraofertas en un solo flujo.", icon: MessageSquare },
                        { title: "Contacto protegido", desc: "Desbloquea los datos solo después de alcanzar un acuerdo.", icon: ShieldCheck },
                        { title: "Seguimiento comercial", desc: "Revisa negociaciones abiertas y conexiones realizadas.", icon: TrendingUp }
                    ].map((item, index) => {
                        const BenefitIcon = item.icon;
                        return (
                            <motion.div key={index} {...scrollAnimation} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                                <div className="p-2.5 bg-emerald-100/80 text-[#285C48] rounded-xl shrink-0">
                                    <BenefitIcon className="w-5 h-5 text-[#397F4D]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-base mb-1">{item.title}</h3>
                                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* PLANES Y HERRAMIENTAS */}
            <section className="py-20 bg-gray-100 px-4 sm:px-6 lg:px-8 w-full border-y border-gray-200 overflow-visible relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16 relative">
                        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-[#285C48] uppercase tracking-wider mb-2">
                            Planes y Herramientas
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                            Planes para compradores
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base mt-2">
                            Explora toda la oferta y utiliza tus créditos solo cuando decidas conectar
                        </p>
                    </div>

                    <div className="space-y-8 max-w-7xl mx-auto pt-6">

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 items-stretch">
                            {planesComprador.slice(0, 3).map((plan, index) => {
                                const IconComponent = plan.icon;
                                const isPro = plan.id === 'pro-comprador';
                                return (
                                    <div key={index} className="relative flex">
                                        <motion.div
                                            {...scrollAnimation}
                                            className={`rounded-3xl p-6 border shadow-sm flex flex-col justify-between relative transition-all w-full ${
                                                plan.isRecommended
                                                    ? 'text-white border-[#397F4D] ring-2 ring-[#397F4D]/30 shadow-2xl scale-102 z-10'
                                                    : 'bg-gradient-to-br from-[#e2f3e6] via-[#f5fbf6] to-[#d8efe0] border-[#397F4D]/35 hover:shadow-xl'
                                            }`}
                                            style={plan.isRecommended ? { background: 'linear-gradient(60deg, #285C48 0%, #397F4D 50%, #4CA254 100%)' } : undefined}
                                        >
                                            {plan.isRecommended && (
                                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#285C48] text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5 z-30">
                                                    <Zap className="w-3.5 h-3.5 fill-current text-[#397F4D]" /> Más elegido
                                                </div>
                                            )}

                                            <div>
                                                <div className="flex justify-between items-center mb-4">
                                                    <span className={`text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 ${plan.isRecommended ? 'bg-white/20 text-white border border-white/30' : 'bg-emerald-100/90 text-[#285C48]'}`}>
                                                        <IconComponent className="w-3.5 h-3.5" />
                                                        {plan.name}
                                                    </span>
                                                    <div className={`p-2 rounded-xl ${plan.isRecommended ? 'bg-white/20 text-white' : 'bg-emerald-100/80 text-[#285C48]'}`}>
                                                        <Sparkles className="w-5 h-5" />
                                                    </div>
                                                </div>

                                                <h3 className={`text-xl font-extrabold mb-1 ${plan.isRecommended ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                                                <p className={`text-xs mb-4 ${plan.isRecommended ? 'text-emerald-100' : 'text-gray-600'}`}>{plan.desc}</p>
                                                <div className={`text-lg font-black mb-6 ${plan.isRecommended ? 'text-white' : 'text-[#397F4D]'}`}>{plan.price} <span className={`text-xs font-semibold ${plan.isRecommended ? 'text-emerald-100/80' : 'text-gray-500'}`}>/ mes</span></div>

                                                <ul className={`space-y-3 text-xs sm:text-sm mb-8 border-t pt-4 ${plan.isRecommended ? 'text-emerald-50 border-white/20' : 'text-gray-600 border-gray-200/80'}`}>
                                                    <li className={`flex items-center gap-2.5 font-bold ${plan.isRecommended ? 'text-white' : 'text-emerald-900'}`}>
                                                        <Check className={`w-4 h-4 shrink-0 ${plan.isRecommended ? 'text-white' : 'text-[#397F4D]'}`} />
                                                        <span>{plan.credits}</span>
                                                    </li>
                                                    {plan.features.map((feat, idx) => (
                                                        <li key={idx} className="flex items-center gap-2.5">
                                                            <Check className={`w-4 h-4 shrink-0 ${plan.isRecommended ? 'text-emerald-200' : 'text-[#397F4D]'}`} />
                                                            <span>{feat}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <Link
                                                to="/suscripciones#compradores"
                                                className={`w-full py-3.5 font-bold text-xs sm:text-sm rounded-xl text-center transition-all shadow-md flex items-center justify-center gap-2 ${plan.isRecommended ? 'bg-white text-[#285C48] hover:bg-emerald-50' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}
                                            >
                                                <span>Comparar planes para compradores</span>
                                                <ChevronRight className="w-4 h-4 stroke-[3]" />
                                            </Link>
                                        </motion.div>

                                        {isPro && (
                                            <div className="hidden lg:block absolute -right-34 top-1/2 -translate-y-1/2 w-36 pointer-events-none z-20">
                                                <img
                                                    src={tiguiLadoImg}
                                                    alt="Tigui saludando"
                                                    className="w-full h-auto object-contain drop-shadow-lg"
                                                />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto pt-4">
                            {planesComprador.slice(3, 5).map((plan, index) => {
                                const IconComponent = plan.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        {...scrollAnimation}
                                        className="bg-gradient-to-br from-[#e2f3e6] via-[#f5fbf6] to-[#d8efe0] rounded-3xl p-6 border border-[#397F4D]/35 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-[#285C48] flex items-center gap-1.5">
                                                    <IconComponent className="w-3.5 h-3.5" />
                                                    {plan.name}
                                                </span>
                                                <div className="p-2 bg-emerald-50 rounded-xl text-[#285C48]">
                                                    <Shield className="w-5 h-5" />
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-extrabold text-gray-900 mb-1">{plan.name}</h3>
                                            <p className="text-xs text-gray-500 mb-4">{plan.desc}</p>
                                            <div className="text-lg font-black text-[#397F4D] mb-6">{plan.price} <span className="text-xs font-semibold text-gray-500">/ mes</span></div>

                                            <ul className="space-y-3 text-xs sm:text-sm text-gray-600 mb-8 border-t border-gray-100 pt-4">
                                                <li className="flex items-center gap-2.5 font-bold text-emerald-900">
                                                    <Check className="w-4 h-4 text-[#397F4D] shrink-0" />
                                                    <span>{plan.credits}</span>
                                                </li>
                                                {plan.features.map((feat, idx) => (
                                                    <li key={idx} className="flex items-center gap-2.5">
                                                        <Check className="w-4 h-4 text-[#397F4D] shrink-0" />
                                                        <span>{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <Link
                                            to="/suscripciones#compradores"
                                            className="w-full py-3.5 font-bold text-xs sm:text-sm rounded-xl text-center transition-all shadow-md flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white"
                                        >
                                            <span>Comparar planes para compradores</span>
                                            <ChevronRight className="w-4 h-4 stroke-[3]" />
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </section>

            {/* PREGUNTAS FRECUENTES */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-[#285C48] uppercase tracking-wider mb-2">
                        FAQ
                    </span>
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        Preguntas frecuentes
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <motion.div {...scrollAnimation} className="lg:col-span-7 space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openFaq === index;
                            return (
                                <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all">
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : index)}
                                        className="w-full p-5 text-left font-bold text-gray-900 flex justify-between items-center hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="text-sm sm:text-base">{faq.q}</span>
                                        {isOpen ? <ChevronUp className="w-5 h-5 text-[#397F4D]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                                    </button>
                                    {isOpen && (
                                        <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </motion.div>

                    <motion.div {...scrollAnimation} className="lg:col-span-5 flex justify-center">
                        <div className="w-full max-w-md relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-radial from-emerald-100/60 via-gray-50/40 to-transparent rounded-full blur-2xl pointer-events-none transform scale-95" />
                            <img
                                src={tiguiLaptopImg}
                                alt="Tigui utilizando una laptop y revisando diferentes ofertas"
                                className="w-full h-auto object-contain relative z-10 mix-blend-multiply opacity-95"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section
                id="registro"
                className="w-full text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-[#397F4D]/40 shadow-2xl relative overflow-hidden"
                style={{ background: 'linear-gradient(60deg, #285C48 0%, #397F4D 50%, #4CA254 100%)' }}
            >
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        <motion.div {...scrollAnimation} className="lg:col-span-6 text-left space-y-6">
                            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                                Encuentra la oferta que tu negocio necesita
                            </h2>
                            <p className="text-emerald-50/95 text-base sm:text-lg max-w-xl leading-relaxed">
                                Explora productos disponibles, compara condiciones y negocia con proveedores desde Agrovio.
                            </p>

                            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                                <Link
                                    to="/comenzar?perfil=comprador"
                                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-[#285C48] hover:bg-emerald-50 font-bold text-sm sm:text-base rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                                >
                                    <span>Únete como comprador</span>
                                    <ChevronRight className="ml-1.5 w-4 h-4 stroke-[3]" />
                                </Link>

                                <a
                                    href="#explorar"
                                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-black/20 hover:bg-black/30 text-white font-semibold text-sm sm:text-base rounded-xl border border-white/30 backdrop-blur-md transition-all"
                                >
                                    <span>Explorar la plataforma</span>
                                </a>
                            </div>
                        </motion.div>

                        <motion.div {...scrollAnimation} className="lg:col-span-6 flex flex-col items-center">
                            <div className="w-full max-w-xl lg:max-w-2xl rounded-2xl overflow-hidden">
                                <div className="w-full overflow-hidden flex items-center justify-center">
                                    <img
                                        src={mock1CompImg}
                                        alt="Mockup de la plataforma de compradores Agrovio"
                                        className="w-full h-auto object-contain transform origin-center"
                                    />
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default CompradoresPage;