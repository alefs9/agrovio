Actúa como un Senior Frontend Developer. Necesito que inicialices y configures las bases del proyecto React para la landing page de **Agrovio**.

### 1. Inicialización e Instalación

- Configura un proyecto React utilizando **Vite** en la carpeta raíz actual.
- Instala las siguientes dependencias clave:
  - `react-router-dom` (para el enrutamiento de la landing)
  - `lucide-react` (para la iconografía)
  - `tailwindcss` y `@tailwindcss/vite` (para los estilos)

### 2. Estructura de Directorios

Crea la siguiente arquitectura de carpetas dentro de `src/`:

src/
├── components/
│ ├── layout/ # Navbar, Footer, MobileMenu, RecursosDropdown
│ ├── ui/ # Buttons, Cards, Accordion, Modals, ImagePlaceholder
│ └── forms/ # Formularios Login / Registro
├── pages/
│ ├── recursos/ # VocesDelCampo, ComoFunciona, CasosDeUso, SobreNosotros, FaqGeneral
│ └── Home, Proveedores, Compradores, Suscripciones, Comenzar
├── routes/ # AppRouter.tsx
└── App.tsx

### 3. Configuración Inicial de Código

- Configura Tailwind CSS en el proyecto.
- Crea el archivo `src/routes/AppRouter.tsx` con las rutas base configuradas (`/`, `/proveedores`, `/compradores`, `/suscripciones`, `/comenzar`) y las sub-rutas de recursos (`/recursos/*`) usando `<BrowserRouter>` o `createBrowserRouter`.
- Deja componentes funcionales básicos (skeletons) en cada página dentro de `src/pages/`.
- Mantén comentarios precisos únicamente en las líneas necesarias. Evita verificaciones de existencia de archivos o bloques vacíos innecesarios.

---

### CONTEXTO DEL PROYECTO (AGROVIO)

**¿Qué es Agrovio?**
Es una plataforma digital agroindustrial que conecta a proveedores (productores, acopiadores, procesadoras, empresas agroindustriales) con compradores (mayoristas, distribuidores, exportadores e industrias)[cite: 1].

**Módulos y Secciones Principales de la Landing Page:**

1. **Navegación Global (`Navbar` / `Header`):**
   - Orden de la barra: `Agrovio | Proveedores | Compradores | Suscripciones | Recursos ▾ | [Ingresar a la plataforma]`[cite: 1].
   - `Agrovio` funciona como botón de inicio (`/`)[cite: 1].
   - **Recursos ▾:** Menú desplegable (_Dropdown_) en la Navbar que dirige a páginas 100% independientes (rutas separadas):
     - Voces del campo (`/recursos/voces-del-campo`)[cite: 1]
     - Cómo funciona Agrovio (`/recursos/como-funciona`)[cite: 1]
     - Casos de uso (`/recursos/casos-de-uso`)[cite: 1]
     - Sobre nosotros (`/recursos/sobre-nosotros`)[cite: 1]
     - Preguntas frecuentes (`/recursos/faq`)[cite: 1]
   - Menú responsive para móvil con menú desplegable manteniendo visible el botón verde destacado[cite: 1].

2. **Ruta `/comenzar` (Auth & Onboarding):**
   - Pantalla para iniciar sesión, crear cuenta y registrarse diferenciado como **Proveedor** o **Comprador**[cite: 1].

3. **Ruta `/proveedores`:**
   - Enfocada en problemas de productores/acopiadores, visibilidad de productos, cómo publicar ofertas, beneficios por tipo de proveedor y proceso de uso[cite: 1].
   - CTAs finales: "Únete como proveedor" y "Explorar la plataforma"[cite: 1].

4. **Ruta `/compradores`:**
   - Enfocada en dificultades de abastecimiento, centralización de oferta, búsqueda/filtros/comparación y desbloqueo de contactos[cite: 1].
   - Beneficios para mayoristas, procesadoras, exportadores[cite: 1].
   - CTAs finales: "Únete como comprador" y "Explorar la plataforma"[cite: 1].

5. **Ruta `/suscripciones`:**
   - Tabla y tarjetas comparativas de planes para proveedores y compradores, listados activos, contactos desbloqueados con tokens, comisiones aplicables y FAQ de pagos[cite: 1].
