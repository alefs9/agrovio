# Guía de Instalación y Ejecución del Proyecto Agrovio

Este documento contiene las instrucciones necesarias para levantar el proyecto de la landing page de Agrovio. Está diseñado tanto para desarrolladores humanos como para agentes de IA que necesiten configurar o restablecer el entorno.

## 🧑‍💻 Para Desarrolladores (Humanos)

1. **Requisitos Previos**:
   - Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).
   - Abre tu terminal y navega hasta la raíz del proyecto (`LandingPage_Agrovio`).

2. **Instalación de Dependencias**:
   El proyecto utiliza React, Vite, Tailwind CSS v4, React Router y Lucide Icons. Para instalar todo lo necesario, simplemente ejecuta:

   ```bash
   npm install
   ```

3. **Ejecución del Servidor de Desarrollo**:
   Una vez instaladas las dependencias, levanta el proyecto localmente con:
   ```bash
   npm run dev
   ```
   El servidor normalmente se abrirá en `http://localhost:5173`.

---

## 🤖 Para Agentes de IA (AI Agents Instructions)

Si eres un agente de IA y acabas de iniciar sesión o entrar a este entorno de trabajo, debes asegurarte de que las dependencias estén correctamente instaladas antes de intentar compilar, probar código o iniciar el servidor.

**Comando principal de instalación (Ejecutar en el directorio `LandingPage_Agrovio`):**

```bash
npm install
```

**Comando para iniciar el entorno de desarrollo:**
_(Nota: Si necesitas validar visualmente o realizar peticiones al localhost, envíalo a background)_

```bash
npm run dev
```

**Dependencias Core del Proyecto:**

- `react` & `react-dom`
- `vite`
- `tailwindcss` & `@tailwindcss/vite` (Versión 4)
- `react-router-dom`
- `lucide-react`

> **Instrucción para el Agente:** Si durante tu desarrollo detectas un error de módulo no encontrado (`Cannot find module...`), asume que la caché de módulos puede estar incompleta y ejecuta `npm install` antes de intentar otras soluciones.
