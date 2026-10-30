# Especificación Técnica de Estilos y Paleta de Colores - Agrovio

Este documento define las directrices del sistema de diseño, la jerarquía de color y las clases de utilidad para la _landing page_ de **Agrovio** (Tailwind CSS v4 + TypeScript).

## Por otro lado, nos tenemos que guiar del estilo y colores de la p´+agina de /compradores, debido a que fue la que más le gustó al contratador!

## 1. Fondo Principal / Hero Gradient

Para lograr la fidelidad con los diseños oficiales, la tarjeta/sección contenedora utiliza un degradado diagonal lineal con una inclinación de **60°** (dirección inferior izquierda hacia superior derecha):

- **Verde Oscuro (Base):** `#285C48` (`0%`)
- **Verde Intermedio (Transición):** `#397F4D` (`50%`)
- **Verde Claro (Brillo Acento):** `#4CA254` (`100%`)

### **CSS Nativo / Utility Class:**

```css
background: linear-gradient(60deg, #285c48 0%, #397f4d 50%, #4ca254 100%);
```

---

## 2. Paleta de Colores y Variables Tailwind

```javascript
// Agrega esta extensión en tu configuración de colores de Tailwind CSS
colors: {
  agrovio: {
    forest: '#285C48',    // Verde Oscuro Bosque (Inicio del gradiente)
    medium: '#397F4D',    // Verde Intermedio (Mitad del gradiente / Hover state)
    emerald: '#4CA254',   // Verde Claro Esmeralda (Acento y fin del gradiente)
    cta: '#16a34a',       // Verde Vivo Principal para botones destacados (CTA)
    dark: '#065f46',      // Verde Profundo para Footer y banners
  }
}
```

---

## 3. Guía de Uso en Componentes (UI)

- **Contenedores Principales de Suscripción:**
  Aplica la clase o el estilo en línea con el gradiente de 60° para replicar exactamente los fondos verdes de la interfaz.
- **Botones e Interacciones:**
  - **Botón Primario ("Seleccionar plan", "Ingresar a la plataforma"):**
    Fondo `#16a34a` (`bg-agrovio-cta`), texto blanco y hover a `#397F4D`.
  - **Switch / Toggle ("Proveedor" / "Comprador"):**
    Fondo activo `#285C48` sobre base gris suave/transparente.
- **Badges / Resaltados:**
  Etiqueta de _"Recomendado"_ en verde claro `#4CA254` o verde vivo sobre fondo blanco.
