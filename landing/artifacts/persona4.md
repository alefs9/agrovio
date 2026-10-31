# Tareas - Persona 4: Suscripciones y Módulos de Recursos

**Módulos / Rutas asignadas:**

- `src/pages/Suscripciones.tsx` (`/suscripciones`)
- `src/components/layout/RecursosDropdown.tsx`
- `src/pages/recursos/`
  - `/recursos/voces-del-campo` (`VocesDelCampo.tsx`)
  - `/recursos/como-funciona` (`ComoFunciona.tsx`)
  - `/recursos/casos-de-uso` (`CasosDeUso.tsx`)
  - `/recursos/sobre-nosotros` (`SobreNosotros.tsx`)
  - `/recursos/faq` (`FaqGeneral.tsx`)

---

## 1. Página de Suscripciones (`/suscripciones`)

- [ ] **Tabla y Tarjetas Comparativas:**
  - Diseñar tarjetas/tabla para **Planes de Proveedores** y **Planes de Compradores**.
  - Incluir botón destacado (CTA) alineado con los colores de la paleta.
- [ ] **Detalle de Beneficios y Tokens:**
  - Sección para detallar el listado de beneficios, listados activos y contactos desbloqueados mediante tokens.
- [ ] **Esquema de Comisiones:**
  - Explicación visual y clara sobre las comisiones aplicables según el plan.
- [ ] **Preguntas Frecuentes de Pagos:**
  - Implementar un componente de acordeón interactivo (`<AccordionFAQ />`) específico para pagos, cobros y planes de suscripción.

---

## 2. Menú Desplegable de Recursos (`RecursosDropdown.tsx`)

- [ ] **Navegación por Rutas Independientes:**
  - Implementar el componente desplegable (`<RecursosDropdown />`) en la barra de navegación.
  - Configurar cada elemento del menú como un enlace de React Router (`<Link to="...">` o `navigate(...)`) apuntando a su ruta dedicada.
  - Opciones de navegación:
    - Voces del campo (`/recursos/voces-del-campo`)
    - Cómo funciona Agrovio (`/recursos/como-funciona`)
    - Casos de uso (`/recursos/casos-de-uso`)
    - Sobre nosotros (`/recursos/sobre-nosotros`)
    - Preguntas frecuentes (`/recursos/faq`)

---

## 3. Páginas de Recursos (`src/pages/recursos/`)

Crear las páginas independientes con su respectiva ruta y vista estructurada:

- [ ] **Voces del Campo (`/recursos/voces-del-campo`):**
  - Página dedicada a testimonios, entrevistas y casos de éxito de productores y compradores agroindustriales.
- [ ] **Cómo Funciona Agrovio (`/recursos/como-funciona`):**
  - Página interactiva con la explicación detallada y flujo operativo paso a paso de la plataforma.
- [ ] **Casos de Uso (`/recursos/casos-de-uso`):**
  - Ejemplos prácticos y escenarios de uso adaptados a productores, procesadoras, mayoristas y exportadores.
- [ ] **Sobre Nosotros (`/recursos/sobre-nosotros`):**
  - Página institucional con la historia, misión, visión, equipo y propuesta de valor de Agrovio.
- [ ] **Preguntas Frecuentes Generales (`/recursos/faq`):**
  - Página con buscador/categorías y acordeones interactivos para dudas generales de la plataforma.
