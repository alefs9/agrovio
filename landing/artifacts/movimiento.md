# Guía de Animaciones UI - Motion (Framer Motion) - Agrovio

Este documento define el estándar de animaciones para la _landing page_ de **Agrovio** utilizando la librería **`motion`** (`framer-motion`), garantizando dinamismo visual y fluidez en todas las páginas.

---

## 1. Instalación e Importación

Asegúrate de tener instalada la librería en el proyecto:

```bash
npm install motion
```

En cualquier componente de React + TypeScript, importa el módulo principal:

```tsx
import { motion } from "motion/react"; // o "framer-motion" según la versión instalada
```

---

## 2. Configuración Reutilizable para Scroll (`scrollAnimation`)

Para mantener consistencia en la revelación de contenido al hacer scroll en las distintas secciones, utilicen el siguiente objeto global de configuración:

```tsx
// Configuración de animación reutilizable al hacer scroll
export const scrollAnimation = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-50px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};
```

### **Parámetros explicados:**

- **`initial`**: Define el estado inicial (invisible y 40px desplazado hacia abajo).
- **`whileInView`**: Estado final cuando el elemento entra en pantalla (completamente visible en su posición original).
- **`viewport`**: `once: false` permite que la animación vuelva a ejecutarse al entrar en el viewport con un margen de `-50px`.
- **`transition`**: Duración suave de `0.7s` con curva `easeOut`.

---

## 3. Ejemplo de Uso en Componentes y Botones (Microinteracciones)

Para botones, enlaces o tarjetas que requieran un efecto interactivo al pasar el mouse (_hover_) o hacer clic (_tap_):

```tsx
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CtaButton = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Link
        to="/comenzar"
        className="inline-flex items-center gap-3 px-10 py-4.5 rounded-full bg-white text-agrovio-dark hover:bg-emerald-50 font-black text-base shadow-2xl transition-all duration-300"
      >
        <span>Unirse ahora</span>
        <ArrowRight className="w-5 h-5 text-agrovio-medium" />
      </Link>
    </motion.div>
  );
};
```

---

## 4. Ejemplo de Aplicación en Secciones de Contenido

Para animar bloques enteros o contenedores al hacer scroll, apliquen la propiedad descomponiendo el objeto `scrollAnimation`:

```tsx
import { motion } from "motion/react";
import { scrollAnimation } from "@/utils/animations";

export const FeatureSection = () => {
  return (
    <motion.section
      {...scrollAnimation}
      className="py-16 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-gray-900">Nuestros Servicios</h2>
      <p className="text-gray-600 mt-2">
        Conectando el agro peruano de forma eficiente.
      </p>
    </motion.section>
  );
};
```
