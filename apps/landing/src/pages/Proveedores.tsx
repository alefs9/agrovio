import { useState } from 'react';
import { Link } from 'react-router-dom';
import mandarinaImg from '../assets/mandarina.jpg';
import problemaActualImg from '../assets/proveedor.jpg';
import productorImg from '../assets/productor.jpg';
import acopiadorImg from '../assets/acopiadores.jpg';
import procesadoraImg from '../assets/procesadora.jpg';
import agroindustrialImg from '../assets/agroindustria.jpg';
import tiguiImg from '../assets/tigui.png';
import fresaImg from '../assets/fresa.jpg';
import publicarPlataformaImg from '../assets/publicar_plataforma.png';
import mandarinaWhatsappImg from '../assets/mandarina_whatsapp.jpeg';
import panelControlProveedorImg from '../assets/panel_control_proveedor.png';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sprout,
  Truck,
  Factory,
  Building2,
  MessageCircle,
  Handshake,
  Bell,
  ShieldCheck,
  Eye,
  Users,
  BarChart3,
  Lock,
  Check,
  ChevronDown,
  ArrowRight,
  Smartphone,
  Monitor,
  MapPin,
  CalendarDays,
  Package,
} from 'lucide-react';


const Proveedores = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    {
      pregunta: '¿Cómo publico un producto?',
      respuesta:
        'Puedes crear una publicación directamente desde Agrovio indicando el producto, fotografías, volumen, ubicación, condición o calidad, disponibilidad, precio referencial y condiciones comerciales.',
    },
    {
      pregunta: '¿Tengo que utilizar WhatsApp para publicar?',
      respuesta:
        'No. Puedes administrar tus productos directamente desde la plataforma. WhatsApp funciona como una alternativa asistida para pequeños agricultores que necesitan una experiencia más sencilla.',
    },
    {
      pregunta: '¿Cómo funciona la publicación por WhatsApp?',
      respuesta:
        'Puedes enviar fotografías, producto, volumen, ubicación y disponibilidad. Agrovio organiza la información y prepara la publicación para que la oportunidad comercial continúe dentro de la plataforma.',
    },
    {
      pregunta: '¿Puedo modificar una publicación?',
      respuesta:
        'Sí. Puedes actualizar el precio, volumen disponible, fotografías, disponibilidad y condiciones comerciales.',
    },
    {
      pregunta: '¿Los compradores pueden ver mi nombre y teléfono?',
      respuesta:
        'No inicialmente. Los compradores pueden revisar la información comercial necesaria para evaluar tu oferta, mientras tu identidad y datos de contacto permanecen protegidos durante la negociación.',
    },
    {
      pregunta: '¿Qué sucede cuando recibo una oferta?',
      respuesta:
        'Puedes revisar la propuesta, aceptarla, rechazarla o realizar una contraoferta. La negociación queda organizada dentro de Agrovio.',
    },
  ];


  const reveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.6 },
  } as const;


  return (
    <>

      {/* =====================================================
          1. HERO PRINCIPAL
      ====================================================== */}

      <section
        className="text-white overflow-hidden"
        style={{
          background:
            'linear-gradient(60deg, #285C48 0%, #397F4D 50%, #4CA254 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* =========================
                IZQUIERDA
            ========================== */}

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Haz visible tu oferta y conecta con nuevos compradores
              </h1>


              <p className="mt-6 text-lg text-white/85 max-w-xl leading-relaxed">
                Publica productos agrícolas y agroindustriales,
                recibe propuestas y administra tus oportunidades
                comerciales desde Agrovio.
              </p>


              <div className="mt-8 flex flex-col sm:flex-row gap-4">

                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/comenzar"
                    className="block bg-white text-[#285C48] px-7 py-3 rounded-xl font-semibold text-center shadow-sm hover:shadow-xl transition-shadow"
                  >
                    Unirme como proveedor
                  </Link>
                </motion.div>


                <motion.a
                  href="#proceso"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-white text-white px-7 py-3 rounded-xl font-semibold text-center hover:bg-white hover:text-[#285C48] transition-colors"
                >
                  Explorar la plataforma
                </motion.a>

              </div>

            </motion.div>



            {/* =================================================
                DERECHA
                MOCKUP PRINCIPAL DE AGROVIO 
            ================================================== */}

            <div className="relative lg:pr-10">

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >

                <motion.div
                  animate={{
                    y: [0, -7, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative"
                >

                  {/* ==========================================
                      VENTANA PRINCIPAL
                  =========================================== */}

                  <div className="bg-white text-gray-800 rounded-3xl shadow-2xl overflow-hidden">

                    {/* BARRA SUPERIOR */}

                    <div className="bg-gray-50 border-b border-gray-100 px-5 py-3 flex items-center justify-between">

                      <div className="flex items-center gap-2">

                        <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-300" />

                      </div>


                      <div className="flex items-center gap-2">

                        <Sprout
                          size={16}
                          className="text-[#397F4D]"
                        />

                        <span className="text-xs font-bold text-[#285C48]">
                          AGROVIO
                        </span>

                      </div>


                      <span className="text-[10px] text-gray-400">
                        Panel proveedor
                      </span>

                    </div>



                    {/* CONTENIDO */}

                    <div className="p-5 md:p-6">

                      {/* ENCABEZADO */}

                      <div className="flex justify-between items-start gap-3">

                        <div>

                          <p className="text-xs text-gray-500">
                            Publicación activa
                          </p>

                          <h3 className="font-bold text-lg md:text-xl mt-1">
                            Mandarina
                          </h3>

                        </div>

                      </div>



                      {/* PRODUCTO */}

                      <div className="mt-4 grid md:grid-cols-[1.15fr_1fr] gap-5">

                        {/* FOTO DEL PRODUCTO */}

<div className="relative min-h-[180px] rounded-2xl overflow-hidden">

  <img
    src={mandarinaImg}
    alt="Mandarina fresca disponible"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/5" />

  <div className="absolute bottom-3 left-3">
    <span className="bg-white/90 backdrop-blur-sm text-[#285C48] text-[10px] font-semibold px-3 py-1.5 rounded-full shadow-sm">
      Producto disponible
    </span>
  </div>

</div>

                        {/* INFORMACIÓN */}

                        <div className="space-y-3">

                          <div className="flex gap-3 items-center">

                            <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                              <Package
                                size={17}
                                className="text-[#397F4D]"
                              />
                            </div>

                            <div>
                              <p className="text-[10px] text-gray-400">
                                Volumen disponible
                              </p>

                              <p className="text-sm font-semibold">
                                11 toneladas
                              </p>
                            </div>

                          </div>


                          <div className="flex gap-3 items-center">

                            <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                              <MapPin
                                size={17}
                                className="text-[#397F4D]"
                              />
                            </div>

                            <div>
                              <p className="text-[10px] text-gray-400">
                                Región
                              </p>

                              <p className="text-sm font-semibold">
                                Ica
                              </p>
                            </div>

                          </div>


                          <div className="flex gap-3 items-center">

                            <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                              <CalendarDays
                                size={17}
                                className="text-[#397F4D]"
                              />
                            </div>

                            <div>
                              <p className="text-[10px] text-gray-400">
                                Disponible desde
                              </p>

                              <p className="text-sm font-semibold">
                                12 de agosto
                              </p>
                            </div>

                          </div>

                        </div>

                      </div>



                      {/* MÉTRICAS */}

                      <div className="mt-5 grid grid-cols-2 gap-3">

                        <div className="bg-[#F3F8F4] rounded-xl p-3">

                          <div className="flex items-center gap-2">

                            <Users
                              size={16}
                              className="text-[#397F4D]"
                            />

                            <p className="text-[10px] text-gray-500">
                              Compradores interesados
                            </p>

                          </div>

                          <p className="mt-2 font-bold text-xl text-[#285C48]">
                            5
                          </p>

                        </div>


                        <div className="bg-[#F3F8F4] rounded-xl p-3">

                          <div className="flex items-center gap-2">

                            <Bell
                              size={16}
                              className="text-[#397F4D]"
                            />

                            <p className="text-[10px] text-gray-500">
                              Ofertas recibidas
                            </p>

                          </div>

                          <p className="mt-2 font-bold text-xl text-[#285C48]">
                            3
                          </p>

                        </div>

                      </div>



                      {/* ESTADO */}

                      <div className="mt-4 flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">

                        <span className="text-xs text-gray-500">
                          Estado de negociación
                        </span>

                        <span className="text-[10px] md:text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                          Negociación activa
                        </span>

                      </div>



                      {/* BOTONES */}

                      <div className="mt-5 flex flex-col sm:flex-row gap-3">

                        <motion.button
                          type="button"
                          whileHover={{
                            y: -2,
                            scale: 1.02,
                          }}
                          whileTap={{ scale: 0.97 }}
                          className="flex-1 bg-[#397F4D] text-white py-3 rounded-xl font-semibold text-sm shadow-sm"
                        >
                          Revisar ofertas
                        </motion.button>


                        <motion.button
                          type="button"
                          whileHover={{
                            y: -2,
                          }}
                          whileTap={{ scale: 0.97 }}
                          className="flex-1 border border-gray-200 text-gray-700 py-3 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors"
                        >
                          Actualizar publicación
                        </motion.button>

                      </div>

                    </div>

                  </div>



                  {/* ==========================================
                      NOTIFICACIÓN WHATSAPP
                      AL COSTADO DEL MOCKUP
                  =========================================== */}

                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3.8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="
                      mt-5
                      lg:mt-0
                      lg:absolute
                      lg:-right-12
                      lg:bottom-20
                      z-20
                      w-full
                      max-w-[260px]
                    "
                  >

                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4">

                      <div className="flex items-start gap-3">

                        {/* WHATSAPP */}

                        <div className="w-11 h-11 bg-[#25D366] rounded-full text-white flex items-center justify-center shrink-0">

                          <MessageCircle size={21} />

                        </div>


                        <div className="min-w-0">

                          <div className="flex justify-between items-center gap-3">

                            <p className="text-xs text-gray-500 font-semibold">
                              WhatsApp
                            </p>

                            <span className="text-[9px] text-gray-400">
                              ahora
                            </span>

                          </div>


                          <p className="text-xs font-bold text-[#285C48] mt-1">
                            Agrovio
                          </p>


                          <p className="text-sm text-gray-700 mt-1 leading-snug">
                            Nueva oferta recibida por tu producto
                          </p>

                        </div>

                      </div>

                    </div>

                  </motion.div>

                </motion.div>

              </motion.div>

            </div>

          </div>

        </div>
      </section>



      {/* =====================================================
          2. PROBLEMAS ACTUALES
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <motion.div
          {...reveal}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
        {/* IMAGEN */}

<div
  className="
    relative
    min-h-[430px]
    rounded-3xl
    overflow-hidden
    shadow-lg
    lg:mt-5
  "
>
  <img
    src={problemaActualImg}
    alt="Productor o encargado de una operación agrícola revisando mensajes y llamadas mientras tiene cajas de producto disponibles para la venta"
    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
    "
  />
</div>

          {/* TEXTO */}

          <div>

            <span
  className="
    inline-flex
    items-center
    rounded-full
    bg-emerald-100
    px-4
    py-1.5
    text-xs
    font-semibold
    uppercase
    tracking-wide
    text-[#397F4D]
  "
>
  El problema actual
</span>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              Comercializar todavía depende demasiado de llamadas y contactos
            </h2>

            <p className="mt-5 text-gray-600 text-lg">
              Muchos proveedores tienen productos disponibles,
              pero la información comercial continúa dispersa
              entre llamadas, mensajes y contactos personales.
            </p>


            <div className="mt-8 space-y-5">

              {[
                'La oferta puede estar disponible sin llegar al comprador adecuado.',
                'Encontrar nuevos compradores depende muchas veces de contactos previos.',
                'Precios, cantidades y disponibilidad circulan por diferentes canales.',
                'En productos perecibles, el tiempo para encontrar mercado puede ser crítico.',
              ].map((texto) => (

                <div
                  key={texto}
                  className="flex gap-4"
                >

                  <div className="w-3 h-3 bg-[#4CA254] rounded-full mt-2 shrink-0" />

                  <p className="text-gray-700">
                    {texto}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </motion.div>

      </section>



      {/* =====================================================
    3. TIPOS DE PROVEEDORES
====================================================== */}

<section className="bg-gray-50">

  <div className="max-w-7xl mx-auto px-6 py-20">

    <motion.div
      {...reveal}
      className="text-center mb-12"
    >

      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
        Una plataforma para distintos tipos de proveedores
      </h2>

      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Agrovio permite participar a diferentes actores
        de la cadena agrícola y agroindustrial.
      </p>

    </motion.div>


    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {[
        {
          titulo: 'Productores agrícolas',
          texto:
            'Cosechas y productos agrícolas disponibles para nuevos mercados.',
          imagen: productorImg,
          alt: 'Productor agrícola',
        },
        {
          titulo: 'Acopiadores y comercializadores',
          texto:
            'Oferta consolidada de diferentes productores y zonas.',
          imagen: acopiadorImg,
          alt: 'Acopiadores y comercializadores de productos agrícolas',
        },
        {
          titulo: 'Plantas procesadoras',
          texto:
            'Productos clasificados, procesados, descartes y excedentes.',
          imagen: procesadoraImg,
          alt: 'Planta procesadora de productos agrícolas',
        },
        {
          titulo: 'Empresas agroindustriales',
          texto:
            'Harinas, aceites, fibras, pulpas, deshidratados y otros derivados.',
          imagen: agroindustrialImg,
          alt: 'Empresa agroindustrial',
        },
      ].map((item, index) => (

        <motion.div
          key={item.titulo}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
          whileHover={{
            y: -7,
          }}
          className="
            bg-white
            rounded-2xl
            overflow-hidden
            shadow-sm
            hover:shadow-xl
            transition-shadow
          "
        >

          {/* IMAGEN */}

          <div className="h-44 overflow-hidden">

            <motion.img
              src={item.imagen}
              alt={item.alt}
              className="w-full h-full object-cover"
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.4,
              }}
            />

          </div>


          {/* TEXTO */}

          <div className="p-6">

            <h3 className="font-bold text-xl">
              {item.titulo}
            </h3>

            <p className="mt-2 text-gray-600">
              {item.texto}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>


{/* =====================================================
    4. DOS FORMAS DE PUBLICAR
====================================================== */}

<section className="max-w-7xl mx-auto px-6 py-20">

  {/* =====================================================
      ENCABEZADO
  ====================================================== */}

  <motion.div
    {...reveal}
    className="text-center mb-12"
  >

    <span
      className="
        inline-flex
        items-center
        rounded-full
        bg-emerald-100
        px-4
        py-1.5
        text-xs
        font-semibold
        uppercase
        tracking-wide
        text-[#397F4D]
      "
    >
      Publica tu oferta
    </span>

    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
      Dos formas de publicar en Agrovio
    </h2>

    <p className="mt-4 text-gray-600">
      Elige la experiencia que mejor se adapte a tu operación.
    </p>

  </motion.div>


  {/* =====================================================
      DOS OPCIONES
  ====================================================== */}

  <div className="grid lg:grid-cols-2 gap-8 items-stretch">


    {/* =====================================================
        1. PUBLICAR DESDE LA PLATAFORMA
    ====================================================== */}

    <motion.div
      {...reveal}
      whileHover={{ y: -5 }}
      className="
        border
        border-gray-200
        rounded-3xl
        p-7
        shadow-sm
        bg-white
        flex
        flex-col
        h-full
      "
    >

      {/* ENCABEZADO */}

      <div className="flex items-center gap-3">

        <div
          className="
            w-12
            h-12
            shrink-0
            rounded-xl
            bg-green-100
            flex
            items-center
            justify-center
          "
        >
          <Monitor
            size={22}
            className="text-[#397F4D]"
          />
        </div>

        <div>

          <h3 className="text-2xl font-bold text-gray-900">
            Publicar desde la plataforma
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Control directo desde tu cuenta Agrovio
          </p>

        </div>

      </div>


{/* IMAGEN DE LA PLATAFORMA */}

<div
  className="
    mt-7
    flex-1
    min-h-[470px]
    flex
    items-center
    justify-center
  "
>

  <motion.img
    src={publicarPlataformaImg}
    alt="Proceso de publicación desde la plataforma Agrovio"
    className="
      w-[108%]
      md:w-[112%]
      lg:w-[116%]
      max-w-none
      h-auto
      object-contain
      block
    "
    whileHover={{
      scale: 1.01,
    }}
    transition={{
      duration: 0.35,
    }}
  />

</div>

    </motion.div>


    {/* =====================================================
        2. PUBLICAR CON WHATSAPP
    ====================================================== */}

    <motion.div
      {...reveal}
      whileHover={{ y: -5 }}
      className="
        border
        border-gray-200
        rounded-3xl
        p-7
        shadow-sm
        bg-white
        flex
        flex-col
        h-full
      "
    >

      {/* ENCABEZADO */}

      <div className="flex items-center gap-3">

        <div
          className="
            w-12
            h-12
            shrink-0
            rounded-xl
            bg-green-100
            flex
            items-center
            justify-center
          "
        >
          <Smartphone
            size={22}
            className="text-[#397F4D]"
          />
        </div>

        <div>

          <h3 className="text-2xl font-bold text-gray-900">
            Publicar con asistencia por WhatsApp
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Una alternativa más sencilla
          </p>

        </div>

      </div>


      {/* =====================================================
    MOCKUP TELÉFONO
====================================================== */}

<div
  className="
    mt-7
    flex-1
    min-h-[470px]
    flex
    items-center
    justify-center
  "
>

  <div
    className="
      bg-gray-900
      rounded-[2rem]
      p-[6px]
      shadow-xl
      w-[215px]
      md:w-[220px]
      lg:w-[225px]
      shrink-0
    "
  >

    <div
      className="
        bg-[#EFEAE2]
        rounded-[1.7rem]
        overflow-hidden
      "
    >

      {/* =====================================================
          HEADER WHATSAPP
      ====================================================== */}

      <div
        className="
          bg-[#075E54]
          text-white
          px-3
          py-2
          flex
          items-center
          gap-2
        "
      >

        <div
          className="
            w-8
            h-8
            shrink-0
            bg-white/20
            rounded-full
            flex
            items-center
            justify-center
          "
        >
          <Sprout size={14} />
        </div>

        <div>

          <p className="font-semibold text-[10px] leading-none">
            Agrovio
          </p>

          <p
            className="
              text-[6.5px]
              text-white/70
              mt-0.5
              leading-none
            "
          >
            Asistencia para publicación
          </p>

        </div>

      </div>


      {/* =====================================================
          CHAT
      ====================================================== */}

      <div className="p-2 space-y-1.5">

        {/* =====================================================
            MENSAJE DEL PROVEEDOR
        ====================================================== */}

        <div
          className="
            bg-[#D9FDD3]
            ml-auto
            w-[91%]
            rounded-xl
            rounded-tr-sm
            p-1.5
            shadow-sm
          "
        >

          <p
            className="
              text-[7px]
              text-gray-700
              px-1
              pt-0.5
              pb-1
              leading-tight
            "
          >
            Hola, quiero publicar mi cosecha.
          </p>


          {/* FOTO DE MANDARINAS */}

          <div className="rounded-lg overflow-hidden">

            <img
              src={mandarinaWhatsappImg}
              alt="Mandarinas enviadas por el proveedor"
              className="
                w-full
                h-[88px]
                object-cover
              "
            />

          </div>


          <p
            className="
              text-[5px]
              text-gray-400
              text-right
              mt-0.5
              leading-none
            "
          >
            10:21 ✓✓
          </p>

        </div>


        {/* =====================================================
            RESPUESTA DEL BOT AGROVIO
        ====================================================== */}

        <div
          className="
            bg-white
            w-[97%]
            rounded-xl
            rounded-tl-sm
            p-1.5
            shadow-sm
          "
        >

          <p
            className="
              text-[7px]
              font-semibold
              text-gray-800
              leading-tight
            "
          >
            Revisa tu publicación:
          </p>


          {/* DATOS */}

          <div
            className="
              mt-1
              text-[5.5px]
              leading-[1.3]
              text-gray-700
            "
          >

            <p>
              <span className="font-semibold">
                Producto:
              </span>{' '}
              Mandarina
            </p>

            <p>
              <span className="font-semibold">
                Variedad:
              </span>{' '}
              Tango
            </p>

            <p>
              <span className="font-semibold">
                Volumen:
              </span>{' '}
              10,000 kg
            </p>

            <p>
              <span className="font-semibold">
                Calibre:
              </span>{' '}
              55mm hacia arriba
            </p>

            <p>
              <span className="font-semibold">
                Color:
              </span>{' '}
              Maduro/color, mezclado con Pintón
            </p>

            <p>
              <span className="font-semibold">
                Fotos:
              </span>{' '}
              4
            </p>

            <p>
              <span className="font-semibold">
                Precio:
              </span>{' '}
              S/ 1.92/kg
            </p>

            <p>
              <span className="font-semibold">
                Ubicación:
              </span>{' '}
              Pisco
            </p>

            <p>
              <span className="font-semibold">
                Disponible:
              </span>{' '}
              Ya está lista
            </p>

          </div>


          {/* PREGUNTA */}

          <p
            className="
              mt-1.5
              text-[6px]
              font-semibold
              text-gray-800
              leading-tight
            "
          >
            ¿Todo correcto?
          </p>


          {/* OPCIONES */}

          <div className="mt-1 space-y-[1px]">

            <p
              className="
                text-[5.5px]
                text-gray-700
                leading-tight
              "
            >
              1. ✅ Confirmar y publicar
            </p>

            <p
              className="
                text-[5.5px]
                text-gray-700
                leading-tight
              "
            >
              2. ✏️ Corregir algo
            </p>

            <p
              className="
                text-[5.5px]
                text-gray-700
                leading-tight
              "
            >
              3. ❌ Cancelar publicación
            </p>

          </div>


          {/* INDICACIÓN */}

          <p
            className="
              mt-1.5
              text-[5px]
              text-gray-500
              leading-tight
            "
          >
            Responde con el número o escribe la opción.
          </p>


          {/* HORA */}

          <p
            className="
              text-[5px]
              text-gray-400
              text-right
              mt-0.5
              leading-none
            "
          >
            10:22
          </p>

        </div>


        {/* =====================================================
            RESPUESTA DEL PROVEEDOR
        ====================================================== */}

        <div
          className="
            bg-[#D9FDD3]
            ml-auto
            w-[56px]
            rounded-xl
            rounded-tr-sm
            px-2
            py-1
            shadow-sm
          "
        >

          <p
            className="
              text-[6px]
              text-gray-700
              leading-none
            "
          >
            1
          </p>

          <p
            className="
              text-[4.5px]
              text-gray-400
              text-right
              mt-0.5
              leading-none
            "
          >
            10:23 ✓✓
          </p>

        </div>


        {/* =====================================================
            CONFIRMACIÓN FINAL
        ====================================================== */}

        <div
          className="
            bg-white
            w-[97%]
            rounded-xl
            rounded-tl-sm
            p-1.5
            shadow-sm
          "
        >

          <p
            className="
              text-[6px]
              font-semibold
              text-[#397F4D]
              leading-tight
            "
          >
            ¡Publicación confirmada!
          </p>

          <p
            className="
              text-[5.2px]
              text-gray-600
              mt-0.5
              leading-[1.25]
            "
          >
            Tu oferta será publicada en Agrovio y podrá ser vista
            por compradores interesados.
          </p>

          <p
            className="
              text-[4.5px]
              text-gray-400
              text-right
              mt-0.5
              leading-none
            "
          >
            10:23
          </p>

        </div>

      </div>

    </div>

  </div>

</div>

    </motion.div>

  </div>

</section>
{/* =====================================================
    5. PROCESO
====================================================== */}

<section
  id="proceso"
  className="bg-gray-50"
>
  <div className="max-w-7xl mx-auto px-6 py-20">

    {/* =====================================================
        ENCABEZADO
    ====================================================== */}

    <motion.div
      {...reveal}
      className="text-center mb-14"
    >

      <span
        className="
          inline-flex
          items-center
          rounded-full
          bg-emerald-100
          px-4
          py-1.5
          text-xs
          font-semibold
          uppercase
          tracking-wide
          text-[#397F4D]
        "
      >
        Cómo funciona
      </span>

      <h2
        className="
          mt-3
          text-3xl
          md:text-4xl
          font-bold
          text-gray-900
        "
      >
        Publica, recibe ofertas, negocia y cierra
      </h2>

      <p className="mt-4 text-gray-600">
        Un proceso comercial organizado dentro de una sola plataforma.
      </p>

    </motion.div>


    {/* =====================================================
        PASOS
    ====================================================== */}

    <div
      className="
        grid
        md:grid-cols-2
        xl:grid-cols-4
        gap-5
        items-stretch
      "
    >

      {/* =====================================================
          PASO 01 - PUBLICA
      ====================================================== */}

      <motion.div
        {...reveal}
        whileHover={{ y: -6 }}
        className="
          bg-white
          rounded-2xl
          p-5
          border
          border-gray-100
          shadow-sm
          hover:shadow-xl
          transition-shadow
          flex
          flex-col
          h-full
          min-w-0
        "
      >

        {/* TÍTULO */}

        <div className="min-h-[62px]">

          <span className="text-[#4CA254] font-bold text-xs">
            PASO 01
          </span>

          <h3 className="font-bold text-xl mt-2 text-gray-900">
            Publica
          </h3>

        </div>


        {/* =====================================================
            FICHA DE PUBLICACIÓN
        ====================================================== */}

        <div
          className="
            mt-4
            flex-1
            min-h-[430px]
            bg-white
            border
            border-gray-200
            rounded-2xl
            overflow-hidden
            shadow-sm
          "
        >

          {/* FOTO */}

          <div className="h-[150px] sm:h-[165px] xl:h-[145px] overflow-hidden">

            <img
              src={mandarinaImg}
              alt="Mandarina Tango disponible"
              className="
                w-full
                h-full
                object-cover
              "
            />

          </div>


          {/* PRODUCTO */}

          <div className="px-4 py-3 border-b border-gray-100">

            <div className="flex items-start justify-between gap-3">

              <div className="flex items-center gap-2 min-w-0">

                <div
                  className="
                    w-8
                    h-8
                    shrink-0
                    rounded-full
                    bg-orange-100
                    flex
                    items-center
                    justify-center
                    text-sm
                  "
                >
                  🍊
                </div>


                <div className="min-w-0">

                  <p
                    className="
                      text-sm
                      xl:text-[10px]
                      font-bold
                      text-gray-800
                    "
                  >
                    Mandarina Tango
                  </p>

                  <p
                    className="
                      text-[10px]
                      xl:text-[7px]
                      text-gray-400
                      mt-0.5
                    "
                  >
                    Carlos R. · Fundo Los Naranjos
                  </p>

                </div>

              </div>


              <span
                className="
                  shrink-0
                  bg-green-100
                  text-green-700
                  text-[10px]
                  xl:text-[7px]
                  font-semibold
                  px-2
                  py-1
                  rounded-full
                "
              >
                Disponible
              </span>

            </div>


            <p
              className="
                mt-2
                text-[11px]
                xl:text-[8px]
                text-gray-500
              "
            >
              📍 Ica, Perú
            </p>

          </div>


          {/* DATOS */}

          <div className="px-4 py-3 space-y-2.5">

            {[
              ['Volumen', '11 toneladas'],
              ['Calibre', '50 a 63 mm'],
              ['Precio referencial', 'A coordinar'],
              ['Ubicación', 'Ica, Perú'],
              ['Disponibilidad', '22 de julio'],
              ['Logística', 'EXW'],
            ].map(([label, value]) => (

              <div
                key={label}
                className="
                  flex
                  items-center
                  justify-between
                  gap-3
                "
              >

                <span
                  className="
                    text-[11px]
                    xl:text-[8px]
                    text-gray-400
                  "
                >
                  {label}
                </span>

                <span
                  className="
                    text-[11px]
                    xl:text-[8px]
                    font-semibold
                    text-gray-700
                    text-right
                  "
                >
                  {value}
                </span>

              </div>

            ))}

          </div>


          {/* ESTADO */}

          <div className="px-4 pb-4 mt-1">

            <div
              className="
                bg-green-50
                border
                border-green-100
                rounded-xl
                px-3
                py-2.5
                flex
                items-center
                justify-between
                gap-2
              "
            >

              <span
                className="
                  text-[10px]
                  xl:text-[7px]
                  font-semibold
                  text-[#397F4D]
                "
              >
                ✓ Publicación activa
              </span>

              <span
                className="
                  text-[9px]
                  xl:text-[6px]
                  text-gray-400
                "
              >
                Agrovio
              </span>

            </div>

          </div>

        </div>

      </motion.div>



      {/* =====================================================
          PASO 02 - RECIBE OFERTAS
      ====================================================== */}

      <motion.div
        {...reveal}
        whileHover={{ y: -6 }}
        className="
          bg-white
          rounded-2xl
          p-5
          border
          border-gray-100
          shadow-sm
          hover:shadow-xl
          transition-shadow
          flex
          flex-col
          h-full
          min-w-0
        "
      >

        {/* TÍTULO */}

        <div className="min-h-[62px]">

          <span className="text-[#4CA254] font-bold text-xs">
            PASO 02
          </span>

          <h3 className="font-bold text-xl mt-2 text-gray-900">
            Recibe ofertas
          </h3>

        </div>


        {/* =====================================================
            OFERTAS
        ====================================================== */}

        <div
          className="
            mt-4
            flex-1
            min-h-[430px]
          "
        >

          <p
            className="
              text-xs
              xl:text-[9px]
              font-bold
              text-gray-800
              mb-2.5
            "
          >
            3 ofertas recibidas
          </p>


          <div className="space-y-2.5">

            {[
              {
                iniciales: 'BG',
                comprador: 'Bruno G.',
                precio: 'S/ 1.70/kg',
                total: 'S/ 7,480',
              },
              {
                iniciales: 'S',
                comprador: 'Soluciones Sur',
                precio: 'S/ 1.75/kg',
                total: 'S/ 7,700',
              },
              {
                iniciales: 'AP',
                comprador: 'Agro Perú',
                precio: 'S/ 1.80/kg',
                total: 'S/ 7,920',
              },
            ].map((oferta) => (

              <div
                key={oferta.comprador}
                className="
                  bg-white
                  border
                  border-gray-200
                  rounded-xl
                  p-3
                  shadow-sm
                "
              >

                {/* PARTE SUPERIOR */}

                <div className="flex items-start gap-2.5">

                  <div
                    className="
                      w-8
                      h-8
                      shrink-0
                      rounded-full
                      bg-green-50
                      text-[#397F4D]
                      flex
                      items-center
                      justify-center
                      text-[10px]
                      xl:text-[7px]
                      font-bold
                    "
                  >
                    {oferta.iniciales}
                  </div>


                  <div className="flex-1 min-w-0">

                    <div className="flex justify-between gap-2">

                      <div className="min-w-0">

                        <p
                          className="
                            text-xs
                            xl:text-[8px]
                            font-semibold
                            text-gray-800
                            truncate
                          "
                        >
                          {oferta.comprador}
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-[10px]
                            xl:text-[6.5px]
                            text-gray-400
                          "
                        >
                          Mandarina Tango · 4,400 kg
                        </p>

                      </div>


                      <div className="text-right shrink-0">

                        <p
                          className="
                            text-sm
                            xl:text-[10px]
                            font-bold
                            text-gray-900
                          "
                        >
                          {oferta.precio}
                        </p>

                        <p
                          className="
                            text-[9px]
                            xl:text-[6px]
                            text-gray-400
                          "
                        >
                          Total {oferta.total}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>


                {/* BOTONES */}

                <div
                  className="
                    mt-3
                    grid
                    grid-cols-2
                    gap-2
                  "
                >

                  <button
                    type="button"
                    className="
                      border
                      border-[#397F4D]
                      text-[#397F4D]
                      rounded-lg
                      py-2
                      px-1
                      text-[10px]
                      xl:text-[7px]
                      font-semibold
                      whitespace-nowrap
                    "
                  >
                    Contraofertar
                  </button>


                  <button
                    type="button"
                    className="
                      bg-[#397F4D]
                      text-white
                      rounded-lg
                      py-2
                      px-1
                      text-[10px]
                      xl:text-[7px]
                      font-semibold
                      whitespace-nowrap
                    "
                  >
                    Aceptar {oferta.total}
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </motion.div>



      {/* =====================================================
          PASO 03 - NEGOCIA
      ====================================================== */}

      <motion.div
        {...reveal}
        whileHover={{ y: -6 }}
        className="
          bg-white
          rounded-2xl
          p-5
          border
          border-gray-100
          shadow-sm
          hover:shadow-xl
          transition-shadow
          flex
          flex-col
          h-full
          min-w-0
        "
      >

        {/* TÍTULO */}

        <div className="min-h-[62px]">

          <span className="text-[#4CA254] font-bold text-xs">
            PASO 03
          </span>

          <h3 className="font-bold text-xl mt-2 text-gray-900">
            Negocia
          </h3>

        </div>


        {/* =====================================================
            NEGOCIACIÓN
        ====================================================== */}

        <div
          className="
            mt-4
            flex-1
            min-h-[430px]
            bg-gray-50
            rounded-2xl
            p-3
            flex
            flex-col
            justify-center
            gap-3
          "
        >

          {/* OFERTA ORIGINAL */}

          <div
            className="
              bg-[#153B30]
              text-white
              rounded-xl
              p-4
              shadow-sm
            "
          >

            <div className="flex justify-between items-start gap-2">

              <div>

                <p
                  className="
                    text-sm
                    xl:text-[9px]
                    font-bold
                  "
                >
                  Carlos R. — Mandarina Tango
                </p>

                <p
                  className="
                    text-[10px]
                    xl:text-[7px]
                    text-white/60
                    mt-1
                  "
                >
                  Cosecha: 22 Jul · Ica
                </p>

              </div>


              <span
                className="
                  border
                  border-white/20
                  text-[8px]
                  xl:text-[6px]
                  px-2
                  py-1
                  rounded-full
                "
              >
                SENASA
              </span>

            </div>


            <p
              className="
                mt-3
                text-xs
                xl:text-[8px]
                text-white/85
              "
            >
              5,000 kg · S/ 1.90/kg
            </p>


            <div className="mt-4 grid grid-cols-2 gap-2">

              <button
                type="button"
                className="
                  bg-[#31965C]
                  rounded-lg
                  py-2.5
                  text-[10px]
                  xl:text-[7px]
                  font-semibold
                "
              >
                Aceptar S/ 9,500
              </button>


              <button
                type="button"
                className="
                  border
                  border-white/30
                  rounded-lg
                  py-2.5
                  text-[10px]
                  xl:text-[7px]
                  font-semibold
                "
              >
                Contraofertar
              </button>

            </div>

          </div>


          {/* CONTRAOFERTA */}

          <div
            className="
              bg-white
              border
              border-gray-200
              rounded-xl
              p-4
              shadow-sm
            "
          >

            <p
              className="
                text-sm
                xl:text-[10px]
                font-bold
                text-[#397F4D]
              "
            >
              Contraoferta: S/ 1.80/kg
            </p>

            <p
              className="
                text-[10px]
                xl:text-[7px]
                text-gray-400
                mt-1
              "
            >
              Total: S/ 9,000
            </p>


            <div className="border-t border-gray-100 mt-3 pt-3">

              <p
                className="
                  text-[11px]
                  xl:text-[8px]
                  text-gray-500
                  leading-relaxed
                "
              >
                Acepta este precio o envía una contraoferta.
              </p>

            </div>


            <div className="mt-3 grid grid-cols-2 gap-2">

              <button
                type="button"
                className="
                  border
                  border-[#397F4D]
                  text-[#397F4D]
                  rounded-lg
                  py-2.5
                  text-[10px]
                  xl:text-[7px]
                  font-semibold
                "
              >
                Contraofertar
              </button>


              <button
                type="button"
                className="
                  bg-[#209B5B]
                  text-white
                  rounded-lg
                  py-2.5
                  text-[10px]
                  xl:text-[7px]
                  font-semibold
                "
              >
                Aceptar S/ 9,000
              </button>

            </div>

          </div>

        </div>

      </motion.div>



      {/* =====================================================
          PASO 04 - CIERRA
      ====================================================== */}

      <motion.div
        {...reveal}
        whileHover={{ y: -6 }}
        className="
          bg-white
          rounded-2xl
          p-5
          border
          border-gray-100
          shadow-sm
          hover:shadow-xl
          transition-shadow
          flex
          flex-col
          h-full
          min-w-0
        "
      >

        {/* TÍTULO */}

        <div className="min-h-[62px]">

          <span className="text-[#4CA254] font-bold text-xs">
            PASO 04
          </span>

          <h3 className="font-bold text-xl mt-2 text-gray-900">
            Cierra
          </h3>

        </div>


        {/* =====================================================
            CHAT
        ====================================================== */}

        <div
          className="
            mt-4
            flex-1
            min-h-[430px]
            bg-white
            border
            border-gray-200
            rounded-2xl
            overflow-hidden
            flex
            flex-col
          "
        >

          {/* HEADER */}

          <div
            className="
              px-3
              py-3
              border-b
              border-gray-100
              flex
              items-center
              justify-between
            "
          >

            <div className="flex items-center gap-2">

              <div
                className="
                  w-8
                  h-8
                  rounded-full
                  bg-blue-100
                  text-blue-700
                  flex
                  items-center
                  justify-center
                  text-[10px]
                  xl:text-[7px]
                  font-bold
                "
              >
                BG
              </div>


              <div>

                <p
                  className="
                    text-xs
                    xl:text-[8px]
                    font-semibold
                    text-gray-800
                  "
                >
                  Bruno G.
                </p>

                <p
                  className="
                    text-[9px]
                    xl:text-[6px]
                    text-gray-400
                  "
                >
                  Fruit Fresh Export
                </p>

              </div>

            </div>


            <span
              className="
                text-[9px]
                xl:text-[6px]
                text-gray-400
              "
            >
              10:12 AM
            </span>

          </div>


          {/* CONVERSACIÓN */}

          <div
            className="
              flex-1
              p-3
              bg-[#F8FAF9]
              flex
              flex-col
              justify-center
              gap-3
            "
          >

            {/* MENSAJE COMPRADOR */}

            <div
              className="
                bg-[#158447]
                text-white
                rounded-xl
                rounded-tl-sm
                px-3
                py-3
                w-[88%]
              "
            >

              <p
                className="
                  text-xs
                  xl:text-[9px]
                  leading-relaxed
                "
              >
                Podemos hacer S/ 1.80/kg si confirma
                recojo antes del 25 de julio.
              </p>

            </div>


            {/* MENSAJE PROVEEDOR */}

            <div
              className="
                ml-auto
                bg-white
                border
                border-gray-100
                rounded-xl
                rounded-tr-sm
                px-3
                py-3
                w-[88%]
                shadow-sm
              "
            >

              <p
                className="
                  text-xs
                  xl:text-[9px]
                  text-gray-600
                  leading-relaxed
                "
              >
                Sí, confirmado. SENASA listo y
                5,000 kg disponibles.
              </p>

            </div>


            {/* MENSAJE FINAL */}

            <div
              className="
                bg-[#158447]
                text-white
                rounded-xl
                rounded-tl-sm
                px-3
                py-3
                w-[88%]
              "
            >

              <p
                className="
                  text-xs
                  xl:text-[9px]
                  leading-relaxed
                "
              >
                Perfecto. Aceptamos S/ 1.80/kg
                por el lote completo.
              </p>

            </div>


            {/* CIERRE */}

            <div
              className="
                bg-white
                border
                border-green-100
                rounded-xl
                px-3
                py-3
                flex
                items-center
                gap-3
                shadow-sm
              "
            >

              <div
                className="
                  w-8
                  h-8
                  shrink-0
                  rounded-full
                  bg-green-50
                  flex
                  items-center
                  justify-center
                "
              >

                <Check
                  size={15}
                  className="text-[#397F4D]"
                />

              </div>


              <div>

                <p
                  className="
                    text-xs
                    xl:text-[9px]
                    font-bold
                    text-[#397F4D]
                  "
                >
                  ¡Oferta aceptada!
                </p>

                <p
                  className="
                    text-[10px]
                    xl:text-[7px]
                    text-gray-400
                    mt-0.5
                  "
                >
                  Conexión comercial confirmada.
                </p>

              </div>

            </div>

          </div>

        </div>

      </motion.div>

    </div>

  </div>
</section>


      {/* =====================================================
          6. PROTECCIÓN DE INFORMACIÓN
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <motion.div
          {...reveal}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >

          {/* TEXTO */}

          <div>

            <span
  className="
    inline-flex
    items-center
    rounded-full
    bg-emerald-100
    px-4
    py-1.5
    text-xs
    font-semibold
    uppercase
    tracking-wide
    text-[#397F4D]
  "
>
  Privacidad y confianza
</span>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              Tu oferta es visible. Tu información permanece protegida.
            </h2>

            <p className="mt-5 text-gray-600 text-lg">
              Los compradores pueden evaluar la oportunidad comercial
              sin acceder inmediatamente a tu identidad y datos de contacto.
            </p>


            <div className="mt-8 grid sm:grid-cols-2 gap-8">

              <div>

                <p className="font-bold mb-4">
                  Información visible
                </p>

                <ul className="space-y-3 text-gray-600">

                  {[
                    'Producto',
                    'Volumen',
                    'Región',
                    'Calidad',
                    'Disponibilidad',
                  ].map((item) => (

                    <li
                      key={item}
                      className="flex gap-2"
                    >

                      <Check
                        size={18}
                        className="text-[#4CA254]"
                      />

                      {item}

                    </li>

                  ))}

                </ul>

              </div>


              <div>

                <p className="font-bold mb-4">
                  Información protegida
                </p>

                <ul className="space-y-3 text-gray-600">

                  {[
                    'Nombre',
                    'Teléfono',
                    'Correo',
                    'Dirección exacta',
                  ].map((item) => (

                    <li
                      key={item}
                      className="flex gap-2"
                    >

                      <Lock size={17} />

                      {item}

                    </li>

                  ))}

                </ul>

              </div>

            </div>

          </div>



          {/* MOCKUP PRIVACIDAD */}

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-50 rounded-3xl border p-6 shadow-sm"
          >

            <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">

              <div className="h-36 bg-gradient-to-r from-orange-100 to-green-100 flex items-center justify-center">
                <Sprout
                  size={50}
                  className="text-[#397F4D]"
                />
              </div>


              <div className="p-5">

                <div className="flex justify-between gap-3">

                  <div>

                    <p className="font-bold">
                      Mandarina
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                      11 toneladas · Ica
                    </p>

                  </div>


                  <ShieldCheck className="text-[#397F4D]" />

                </div>


                <div className="mt-5 grid grid-cols-2 gap-3 text-xs">

                  <div className="bg-gray-50 p-3 rounded-lg">
                    Calidad
                    <p className="font-semibold mt-1">
                      Procesamiento
                    </p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    Disponibilidad
                    <p className="font-semibold mt-1">
                      Esta semana
                    </p>
                  </div>

                </div>


                <div className="mt-5 border-t pt-4 flex gap-3 items-center">

                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Lock
                      size={17}
                      className="text-gray-500"
                    />
                  </div>

                  <div>

                    <p className="text-sm font-semibold">
                      Nombre protegido
                    </p>

                    <p className="text-[10px] text-gray-400">
                      Identidad protegida durante la negociación
                    </p>

                  </div>

                </div>


                <div className="mt-4 space-y-2">

                  <div className="h-3 rounded bg-gray-100 w-3/4" />
                  <div className="h-3 rounded bg-gray-100 w-1/2" />

                </div>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </section>



{/* =====================================================
    7. BENEFICIOS GENERALES
====================================================== */}

<section className="bg-[#F3F8F4]">

  <div className="max-w-7xl mx-auto px-6 py-20">

    {/* =====================================================
        ENCABEZADO
    ====================================================== */}

    <motion.div
      {...reveal}
      className="text-center mb-12"
    >

      <span
        className="
          inline-flex
          items-center
          rounded-full
          bg-emerald-100
          px-4
          py-1.5
          text-xs
          font-semibold
          uppercase
          tracking-wide
          text-[#397F4D]
        "
      >
        Beneficios para proveedores
      </span>


      <h2
        className="
          mt-3
          text-3xl
          md:text-4xl
          font-bold
          text-gray-900
        "
      >
        Más control sobre tus oportunidades comerciales
      </h2>


      <p
        className="
          mt-4
          max-w-2xl
          mx-auto
          text-gray-600
          leading-relaxed
        "
      >
        Centraliza tus publicaciones, propuestas y negociaciones
        en un mismo espacio.
      </p>

    </motion.div>



    {/* =====================================================
        PANEL REAL DE AGROVIO
    ====================================================== */}

    <motion.div
      {...reveal}
      className="
        mb-12
        flex
        items-center
        justify-center
      "
    >

      <motion.img
        src={panelControlProveedorImg}
        alt="Panel comercial del proveedor en Agrovio"
        className="
          w-full
          md:w-[96%]
          lg:w-[94%]
          max-w-none
          h-auto
          object-contain
          block
          rounded-3xl
          shadow-lg
        "
        whileHover={{
          y: -4,
          scale: 1.005,
        }}
        transition={{
          duration: 0.35,
        }}
      />

    </motion.div>



    {/* =====================================================
        BENEFICIOS
    ====================================================== */}

    <div
      className="
        grid
        sm:grid-cols-2
        lg:grid-cols-5
        gap-5
      "
    >

      {[
        {
          icono: Eye,
          titulo: 'Mayor visibilidad',
        },
        {
          icono: Users,
          titulo: 'Nuevos compradores',
        },
        {
          icono: BarChart3,
          titulo: 'Comparación de propuestas',
        },
        {
          icono: MessageCircle,
          titulo: 'Negociaciones organizadas',
        },
        {
          icono: Handshake,
          titulo: 'Seguimiento comercial',
        },
      ].map((item) => {

        const Icono = item.icono;

        return (

          <motion.div
            key={item.titulo}
            {...reveal}
            whileHover={{
              y: -6,
            }}
            className="
              bg-white
              p-6
              rounded-2xl
              text-center
              shadow-sm
              border
              border-gray-100
              hover:shadow-lg
              transition-shadow
            "
          >

            {/* ICONO */}

            <div
              className="
                w-11
                h-11
                mx-auto
                rounded-xl
                bg-green-50
                flex
                items-center
                justify-center
              "
            >

              <Icono
                size={21}
                className="text-[#397F4D]"
              />

            </div>


            {/* TÍTULO */}

            <h3
              className="
                font-semibold
                mt-4
                text-gray-800
                leading-snug
              "
            >
              {item.titulo}
            </h3>

          </motion.div>

        );

      })}

    </div>

  </div>

</section>

      {/* =====================================================
          8. BENEFICIOS SEGÚN TIPO
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <motion.div
          {...reveal}
          className="text-center mb-12"
        >

          <span
  className="
    inline-flex
    items-center
    rounded-full
    bg-emerald-100
    px-4
    py-1.5
    text-xs
    font-semibold
    uppercase
    tracking-wide
    text-[#397F4D]
  "
>
  Para cada operación
</span>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Beneficios según tu tipo de negocio
          </h2>

        </motion.div>


        <div className="grid md:grid-cols-2 gap-6">

          {[
            {
              titulo: 'Productores',
              icono: Sprout,
              texto:
                'Haz visible tu cosecha y llega a compradores fuera de tu red habitual.',
              beneficios: [
                'Mayor alcance comercial',
                'Nuevos compradores',
                'Publicación asistida disponible',
              ],
            },
            {
              titulo: 'Acopiadores',
              icono: Truck,
              texto:
                'Administra diferentes productos y amplía tus oportunidades comerciales.',
              beneficios: [
                'Múltiples publicaciones',
                'Gestión de diferentes ofertas',
                'Negociaciones organizadas',
              ],
            },
            {
              titulo: 'Procesadoras',
              icono: Factory,
              texto:
                'Encuentra salida comercial para productos, excedentes y distintas calidades.',
              beneficios: [
                'Mayor velocidad comercial',
                'Compradores especializados',
                'Seguimiento de ofertas',
              ],
            },
            {
              titulo: 'Empresas agroindustriales',
              icono: Building2,
              texto:
                'Mantén productos visibles y desarrolla nuevos compradores para una oferta recurrente.',
              beneficios: [
                'Oferta permanente',
                'Nuevas conexiones comerciales',
                'Mayor seguimiento',
              ],
            },
          ].map((item) => {

            const Icon = item.icono;

            return (

              <motion.div
                key={item.titulo}
                {...reveal}
                whileHover={{ y: -5 }}
                className="border border-gray-200 rounded-2xl p-7 hover:shadow-lg transition-shadow"
              >

                <Icon
                  className="text-[#397F4D]"
                  size={34}
                />

                <h3 className="mt-4 text-xl font-bold">
                  {item.titulo}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.texto}
                </p>

                <ul className="mt-5 space-y-2 text-gray-600 text-sm">

                  {item.beneficios.map((beneficio) => (

                    <li
                      key={beneficio}
                      className="flex gap-2"
                    >

                      <Check
                        size={15}
                        className="text-[#4CA254] mt-0.5"
                      />

                      {beneficio}

                    </li>

                  ))}

                </ul>

              </motion.div>

            );

          })}

        </div>

      </section>



{/* =====================================================
    9. PLANES
====================================================== */}

<section className="bg-gray-50">

  <div className="max-w-7xl mx-auto px-6 py-20">

    <motion.div
      {...reveal}
      className="text-center"
    >

      <span
  className="
    inline-flex
    items-center
    rounded-full
    bg-emerald-100
    px-4
    py-1.5
    text-xs
    font-semibold
    uppercase
    tracking-wide
    text-[#397F4D]
  "
>
  Planes para proveedores
</span>

      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
        Elige el plan que se adapta a tu operación
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-gray-600">
        Publica más productos y accede a nuevas herramientas conforme crece tu operación.
      </p>

    </motion.div>



    <div className="mt-12 grid md:grid-cols-3 gap-6">

      {/* BASE */}

      <motion.div
        {...reveal}
        whileHover={{ y: -7 }}
        className="bg-gradient-to-br from-[#e2f3e6] via-[#f5fbf6] to-[#d8efe0] border border-[#397F4D]/35 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300"
      >


        <h3 className="text-2xl font-bold mt-2">
          Agrovio Base
        </h3>

        <p className="text-3xl font-bold mt-6">
          S/ 69.90
        </p>

        <p className="text-gray-500 text-sm">
          al mes
        </p>


        <ul className="mt-7 space-y-4 text-gray-600">

          {[
            '4 listados activos',
            'Perfil comercial',
            'Actualización ilimitada',
            'Soporte por WhatsApp',
            'Comisión por trato cerrado: 1%',
          ].map((item) => (

            <li
              key={item}
              className="flex gap-2"
            >

              <Check
                size={18}
                className="text-[#4CA254] shrink-0"
              />

              {item}

            </li>

          ))}

        </ul>

      </motion.div>



      {/* PLUS */}

      <motion.div
        {...reveal}
        whileHover={{ y: -7 }}
        className="bg-gradient-to-br from-[#e2f3e6] via-[#f5fbf6] to-[#d8efe0] border border-[#397F4D]/35 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300"
      >

        <h3 className="text-2xl font-bold mt-2">
          Agrovio Plus
        </h3>

        <p className="text-3xl font-bold mt-6">
          S/ 99.90
        </p>

        <p className="text-gray-500 text-sm">
          al mes
        </p>


        <ul className="mt-7 space-y-4 text-gray-600">

          {[
            '8 listados activos',
            'Perfil comercial',
            'Actualización ilimitada',
            'Soporte por WhatsApp',
            'Comisión por trato cerrado: 1%',
          ].map((item) => (

            <li
              key={item}
              className="flex gap-2"
            >

              <Check
                size={18}
                className="text-[#4CA254] shrink-0"
              />

              {item}

            </li>

          ))}

        </ul>

      </motion.div>



      {/* PRO */}

      <motion.div
        {...reveal}
        whileHover={{
          y: -8,
          scale: 1.015,
        }}
        className="text-white rounded-3xl p-7 relative shadow-xl"
        style={{
          background:
            'linear-gradient(60deg, #285C48 0%, #397F4D 50%, #4CA254 100%)',
        }}
      >

        <span className="absolute top-5 right-5 bg-white text-[#285C48] text-xs font-bold px-3 py-1 rounded-full">
          Más recomendado
        </span>

        <h3 className="text-2xl font-bold mt-2">
          Agrovio Pro
        </h3>

        <p className="text-3xl font-bold mt-6">
          S/ 149.90
        </p>

        <p className="text-white/70 text-sm">
          al mes
        </p>


        <ul className="mt-7 space-y-4">

          {[
            '16 listados activos',
            'Perfil comercial',
            'Actualización ilimitada',
            'Analítica comercial',
            'Comisión por trato cerrado: 1%',
          ].map((item) => (

            <li
              key={item}
              className="flex gap-2"
            >

              <Check
                size={18}
                className="shrink-0"
              />

              {item}

            </li>

          ))}

        </ul>

      </motion.div>

    </div>



    {/* BENEFICIOS COMUNES */}

    <div className="mt-8 text-center">

      <p className="text-sm text-gray-500">
        Todos los planes incluyen perfil comercial, actualización ilimitada,
        soporte por WhatsApp, usuarios ilimitados, soporte prioritario,
        reportes personalizados y analítica comercial.
      </p>

    </div>



    {/* VER TODOS */}

    <div className="text-center mt-10">

      <motion.div
        whileHover={{ x: 4 }}
      >

        <Link
          to="/suscripciones"
          className="inline-flex items-center gap-2 text-[#397F4D] font-semibold hover:text-[#285C48] transition-colors"
        >
          Ver todos los planes

          <ArrowRight size={18} />
        </Link>

      </motion.div>

    </div>

  </div>

</section>



{/* =====================================================
    10. PREGUNTAS FRECUENTES
====================================================== */}

<section className="bg-white">

  <div className="max-w-7xl mx-auto px-6 py-20">

    {/* ENCABEZADO */}

    <motion.div
      {...reveal}
      className="text-center mb-10"
    >

     <span
  className="
    inline-flex
    items-center
    rounded-full
    bg-emerald-100
    px-4
    py-1.5
    text-xs
    font-semibold
    uppercase
    tracking-wide
    text-[#397F4D]
  "
>
  ¿Tienes dudas?
</span>

      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
        Preguntas frecuentes
      </h2>

      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Conoce cómo funcionan las publicaciones,
        negociaciones y la protección de tu información.
      </p>

    </motion.div>


    {/* =====================================================
        PREGUNTAS + TIGUI
    ====================================================== */}

    <div
      className="
        grid
        lg:grid-cols-[1.4fr_0.6fr]
        gap-6
        lg:gap-4
        items-start
      "
    >

      {/* =====================================================
          IZQUIERDA - ACORDEÓN
      ====================================================== */}

      <div className="space-y-3">

        {faqs.map((faq, index) => (

          <motion.div
            key={faq.pregunta}
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.45,
              delay: index * 0.05,
            }}
            className="
              border
              border-gray-200
              rounded-2xl
              overflow-hidden
              bg-white
              shadow-sm
              hover:shadow-md
              transition-shadow
            "
          >

            {/* PREGUNTA */}

            <button
              type="button"
              onClick={() =>
                setFaqOpen(faqOpen === index ? null : index)
              }
              className="
                w-full
                flex
                justify-between
                items-center
                gap-5
                px-5
                py-4
                text-left
                font-semibold
                bg-white
                hover:bg-[#F3F8F4]
                transition-colors
              "
            >

              <span className="text-gray-800">
                {faq.pregunta}
              </span>


              <motion.div
                animate={{
                  rotate: faqOpen === index ? 180 : 0,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="shrink-0"
              >

                <ChevronDown
                  size={20}
                  className="text-[#397F4D]"
                />

              </motion.div>

            </button>


            {/* RESPUESTA */}

            <AnimatePresence initial={false}>

              {faqOpen === index && (

                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: 'auto',
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="overflow-hidden"
                >

                  <div
                    className="
                      px-5
                      pb-5
                      text-gray-600
                      leading-relaxed
                    "
                  >
                    {faq.respuesta}
                  </div>

                </motion.div>

              )}

            </AnimatePresence>

          </motion.div>

        ))}

      </div>


     {/* =====================================================
    DERECHA - TIGUI
====================================================== */}

<motion.div
  initial={{
    opacity: 0,
    x: 30,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{
    once: true,
    amount: 0.2,
  }}
  transition={{
    duration: 0.7,
  }}
  className="
    relative
    flex
    justify-center
    lg:justify-start
    self-start
    lg:mt-24
    lg:pl-2
  "
>

  <img
    src={tiguiImg}
    alt="Tigui, asistente de Agrovio"
    className="
      w-full
      max-w-[280px]
      md:max-w-[320px]
      lg:max-w-[340px]
      h-auto
      object-contain
    "
  />

</motion.div>
    </div>

  </div>

</section>


    {/* =====================================================
    11. CTA FINAL - PROVEEDORES
====================================================== */}

<section className="bg-white">

  <div className="max-w-7xl mx-auto px-6 py-20">

    <motion.div
      {...reveal}
      className="
        relative
        overflow-hidden
        rounded-[28px]
        px-7
        py-10
        md:px-12
        md:py-14
        lg:px-14
        lg:py-16
      "
      style={{
        background:
          'linear-gradient(60deg, #285C48 0%, #397F4D 50%, #4CA254 100%)',
      }}
    >

      <div
        className="
          relative
          z-10
          grid
          lg:grid-cols-[0.9fr_1.1fr]
          gap-12
          lg:gap-16
          items-center
        "
      >

        {/* =====================================================
            IZQUIERDA - TEXTO
        ====================================================== */}

        <div>

          <h2
            className="
              text-3xl
              md:text-4xl
              lg:text-[46px]
              lg:leading-[1.05]
              font-bold
              text-white
              max-w-xl
            "
          >
            Haz visible tu oferta y conecta con nuevos compradores
          </h2>

          <p
            className="
              mt-5
              text-base
              md:text-lg
              text-white/90
              leading-relaxed
              max-w-xl
            "
          >
            Publica tus productos, recibe propuestas y administra tus
            oportunidades comerciales desde Agrovio.
          </p>

          <div className="mt-8">

            <Link
              to="/comenzar"
              className="
                inline-flex
                items-center
                justify-center
                bg-white
                text-[#285C48]
                font-semibold
                px-7
                py-3.5
                rounded-xl
                shadow-sm
                hover:shadow-lg
                hover:-translate-y-0.5
                transition-all
              "
            >
              Unirme como proveedor
            </Link>

          </div>

        </div>


        {/* =====================================================
            DERECHA - OPORTUNIDAD COMERCIAL
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
          }}
          className="
            flex
            items-center
            justify-center
          "
        >

          {/* CONTENEDOR VERDE CLARO */}

          <div
            className="
              w-full
              max-w-[650px]
              rounded-[26px]
              bg-white/10
              p-6
              md:p-7
            "
          >

            <div
              className="
                grid
                grid-cols-[100px_1fr]
                md:grid-cols-[115px_1fr]
                gap-4
                items-center
              "
            >

              {/* =================================================
                  FOTO DE FRESA
              ================================================= */}

              <div
                className="
                  h-[125px]
                  md:h-[145px]
                  rounded-2xl
                  overflow-hidden
                  bg-[#F1F5DF]
                  shadow-sm
                "
              >

                <img
                  src={fresaImg}
                  alt="Fresa disponible para comercialización"
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

              </div>


              {/* =================================================
                  TARJETA AGROVIO
              ================================================= */}

              <div
                className="
                  bg-white
                  rounded-2xl
                  shadow-sm
                  px-5
                  py-5
                  md:px-6
                  md:py-6
                "
              >

                {/* PARTE SUPERIOR */}

                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-4
                  "
                >

                  <div>

                    <p
                      className="
                        text-[10px]
                        md:text-xs
                        text-gray-400
                      "
                    >
                      Nueva oportunidad comercial
                    </p>

                    <h3
                      className="
                        mt-1
                        text-base
                        md:text-lg
                        font-bold
                        text-gray-900
                      "
                    >
                      Fresa
                    </h3>

                  </div>


                  <div
                    className="
                      w-9
                      h-9
                      rounded-full
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Bell
                      size={20}
                      className="text-[#397F4D]"
                    />
                  </div>

                </div>


                {/* INFORMACIÓN */}

                <div
                  className="
                    mt-6
                    flex
                    items-end
                    justify-between
                    gap-5
                  "
                >

                  <div>

                    <p
                      className="
                        text-[10px]
                        md:text-xs
                        text-gray-400
                      "
                    >
                      Volumen
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-sm
                        font-semibold
                        text-gray-800
                      "
                    >
                      4 toneladas
                    </p>

                  </div>


                  <div className="text-right">

                    <p
                      className="
                        text-[10px]
                        md:text-xs
                        text-gray-400
                      "
                    >
                      Estado
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-sm
                        font-medium
                        text-[#397F4D]
                      "
                    >
                      3 ofertas
                    </p>

                  </div>

                </div>


                {/* BARRA */}

                <div
                  className="
                    mt-5
                    w-full
                    h-2
                    rounded-full
                    bg-gray-100
                    overflow-hidden
                  "
                >

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: '72%',
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.9,
                      delay: 0.25,
                    }}
                    className="
                      h-full
                      rounded-full
                      bg-[#4CA254]
                    "
                  />

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </motion.div>

  </div>

</section>

    </>
  );
};


export default Proveedores;