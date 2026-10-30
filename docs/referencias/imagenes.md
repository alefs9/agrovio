# Reglas e Indicaciones de UI para Placeholders de Imágenes y Asset Slots - Agrovio

Este documento define la normativa técnica que el equipo frontend debe seguir para el manejo de espacios, contenedores, mockups e imágenes reales en la _landing page_ de **Agrovio** (React + Tailwind CSS + TypeScript).

---

## 1. Regla Principal de Espaciado (Placeholders de Imágenes)

En **ningún caso** la falta de un asset final (fotografía o captura de pantalla) debe romper la estructura visual o colapsar el layout.

Para cada bloque donde el documento de referencia requiera una imagen, mockup o captura de pantalla, se debe reservar expresamente un contenedor con una **relación de aspecto fija (Aspect Ratio)** y estilos visuales neutros de carga (_skeleton_ / _placeholder_).

### **Estándar CSS / Tailwind CSS para Placeholders:**

```tsx
// Ejemplo de Contenedor de Imagen Estándar en React
<div className="w-full aspect-[16/9] md:aspect-[4/3] bg-gray-100 rounded-xl border border-gray-200 flex flex-col items-center justify-center p-6 text-center text-gray-400 overflow-hidden relative">
  {/* Opcional: Ícono de imagen o loader */}
  <span className="text-xs font-mono uppercase tracking-wider text-gray-500 bg-gray-200 px-3 py-1 rounded-full mb-2">
    [ Slot: Fotografía Documental / Mockup ]
  </span>
  <p className="text-xs text-gray-400 max-w-xs">
    Descripción visual del contenido que irá en esta sección
  </p>
</div>
```

---

## 2. Tipos de Assets y Especificación de Dimensiones

| Tipo de Asset                             | Relación de Aspecto (Aspect Ratio) | Clase Tailwind Recomendada      | Uso / Secciones Asignadas                                                               |
| :---------------------------------------- | :--------------------------------- | :------------------------------ | :-------------------------------------------------------------------------------------- |
| **Fotografía Documental / Real**          | `16:9` o `4:3`                     | `aspect-video` o `aspect-[4/3]` | Problemas de Proveedores/Compradores, Historias de _Voces del Campo_, _Sobre Nosotros_. |
| **Mockup de Plataforma / Dashboard**      | `16:10` o `16:9`                   | `aspect-[16/10]`                | Screenshots del Marketplace, Filtros, Tablas de Ofertas y Módulos B2B.                  |
| **Mockup de Teléfono / WhatsApp**         | `9:16` (Vertical)                  | `w-64 aspect-[9/16]`            | Módulo de Publicación Asistida por WhatsApp y Notificaciones en Celular.                |
| **Tarjetas de Grid / Tipos de Proveedor** | `1:1` (Cuadrado) o `4:3`           | `aspect-square`                 | Tarjetas de 4 columnas (_Productores, Acopiadores, Procesadoras, Agroindustrias_).      |

---

## 3. Normativa de Renderizado Responsive

- **Escritorio (`md:` / `lg:`):** Mantener el contenedor alineado dentro del grid o layout de dos columnas sin forzar estiramientos no deseados (`object-cover` u `object-contain` según aplique).
- **Móvil (`sm:`):** El contenedor debe ocupar el **100% del ancho visible** (`w-full`) respetando su `aspect-ratio` definido para evitar saltos bruscos de contenido (_Cumulative Layout Shift - CLS_).
- **Gradientes de Overlay:** Las fotografías documentales sobre texto claro deben llevar una capa ligera de sombreado (`bg-gradient-to-t from-black/40 to-transparent`) para garantizar legibilidad.

---

## 4. Estructura de Marcadores de Posición en el Código (TypeScript)

Para mantener el código organizado mientras los diseñadores/fotógrafos entregan los assets finales, los desarrolladores deben estructurar los marcadores mediante componentes de respaldo reutilizables:

```tsx
interface ImagePlaceholderProps {
  label: string;
  description?: string;
  aspectRatio?: "video" | "square" | "mobile" | "dashboard";
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  description,
  aspectRatio = "video",
}) => {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    mobile: "w-64 aspect-[9/16] mx-auto",
    dashboard: "aspect-[16/10]",
  };

  return (
    <div
      className={`w-full ${aspectClasses[aspectRatio]} bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-4 text-center`}
    >
      <span className="text-xs font-semibold text-agrovio-forest bg-green-100 px-2.5 py-1 rounded-md mb-2">
        📷 {label}
      </span>
      {description && (
        <p className="text-xs text-gray-500 max-w-xs">{description}</p>
      )}
    </div>
  );
};
```
