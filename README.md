<div align="center">

# Fredy López — Portafolio Personal

**Full-Stack Developer**

Un portafolio personal construido desde cero, con identidad propia.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-a3e635?style=for-the-badge)](./LICENSE)

[Ver sitio](https://fredylopez01.website) · [Reportar un bug](https://github.com/fredylopez01/portafolio/issues) · [Contacto](mailto:lopezdazafredy@gmail.com)

</div>

---

## 📖 Sobre el proyecto

Este no es un portafolio genérico hecho con una plantilla. Es un sitio construido desde cero con una identidad visual específica: **una mezcla de terminal de comandos y street art**, con tipografía monoespaciada para lo técnico, marcador para lo expresivo, y una paleta de colores que funciona igual de bien en modo claro y oscuro.

El contenido está separado de la presentación: los proyectos, el stack y la información del perfil viven en archivos **JSON** y **MDX**, así que actualizar el sitio es escribir un archivo nuevo y hacer `git push`. No hay base de datos, no hay CMS, no hay backend.

### Filosofía del proyecto

- **Sin dependencias innecesarias.** Nada de librerías de UI gigantes, nada de fuentes externas que bloqueen el render, nada de imágenes sin optimizar. Todo lo que se puede hacer con CSS y React nativo, se hace con CSS y React nativo.
- **Contenido separado del código.** Los datos viven en `data/`, los cuerpos largos en `content/`. El código solo se ocupa de renderizarlos.
- **Rápido por defecto.** Páginas pre-renderizadas, imágenes lazy, tipografía con `next/font`, cero JavaScript innecesario en el cliente.

---

## ✨ Características

### Diseño

- 🎨 **Doble tema** (claro / oscuro) con persistencia en `localStorage`
- 🖋️ **Tipografía combinada:** `Permanent Marker` para títulos, `JetBrains Mono` para lo técnico, `Inter` para el cuerpo
- 🌌 **Fondo dinámico** con gradientes radiales y rejilla tipo terminal
- 📺 **Scanlines sutiles** que evocan monitores CRT
- 🎯 **Acentos tipo grafiti:** manchas de color, subrayado tipo marcador, rotaciones sutiles

### Estructura

- 🏠 **Home** con hero, sobre mí, stack, proyectos destacados y contacto
- 📂 **Listado de proyectos** en `/projects` con grid adaptable
- 📄 **Página de detalle** por proyecto en `/projects/[slug]` con galería, stack y cuerpo MDX
- 🧭 **Nav global** sticky con menú hamburguesa en móvil

### Interacción

- 🖼️ **Galería con lightbox** y navegación por teclado (← →, Esc)
- ⌨️ **Transición entre páginas** simulando una terminal: el comando se escribe letra por letra y luego aparecen los puntos de carga
- ⚡ **Carga instantánea** gracias a la pre-renderización estática

### Contenido

- 📁 **Proyectos en JSON** con metadatos estructurados (título, fecha, stack, repos, galería)
- 📝 **Cuerpo en MDX** para descripciones largas con soporte para títulos, código, imágenes y componentes React
- 🏷️ **Badges de tecnologías** con logo y color oficial de cada una

---

## 🛠️ Stack tecnológico

| Capa          | Tecnología                                                   |
| ------------- | ------------------------------------------------------------ |
| **Framework** | Next.js 16 (App Router)                                      |
| **UI**        | React 19, Tailwind CSS 4                                     |
| **Tipado**    | TypeScript 5                                                 |
| **Fuentes**   | `next/font/google` (Inter, JetBrains Mono, Permanent Marker) |
| **Iconos**    | Lucide React + React Icons                                   |
| **Tema**      | `next-themes`                                                |
| **Contenido** | MDX (`@next/mdx`)                                            |
| **Badges**    | Simple Icons (CDN)                                           |
| **Deploy**    | Netlify                                                      |

---

## 📁 Estructura del proyecto

```
portafolio/
├── content/
│   └── projects/                    # Cuerpos MDX de cada proyecto
│       ├── blackjack-distribuido.mdx
│       ├── gym-colombia.mdx
│       ├── sicap-parqueaderos.mdx
│       └── fifa-attendance-predictor.mdx
│
├── public/
│   ├── avatar.png                   # Avatar del hero
│   ├── cv.pdf                       # CV descargable
│   ├── favicon.ico
│   └── projects/                    # Imágenes de portada y galería
│
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Layout global (fuentes, nav, transiciones)
│   │   ├── page.tsx                 # Home
│   │   ├── globals.css              # Estilos globales y variables CSS
│   │   └── projects/
│   │       ├── page.tsx             # Listado de proyectos
│   │       └── [slug]/
│   │           └── page.tsx         # Detalle de proyecto
│   │
│   ├── components/
│   │   ├── Nav.tsx                  # Nav global sticky
│   │   ├── Hero.tsx                 # Sección hero de la home
│   │   ├── About.tsx                # Sección sobre mí
│   │   ├── Stack.tsx                # Carrusel de tecnologías
│   │   ├── Projects.tsx             # Grid de proyectos destacados
│   │   ├── Contact.tsx              # Sección de contacto
│   │   ├── ProjectGalleryHero.tsx   # Hero de la página de detalle
│   │   ├── ProjectImage.tsx         # Imagen con fallback
│   │   ├── TechBadge.tsx            # Badge de tecnología con logo
│   │   ├── ThemeToggle.tsx          # Toggle de tema claro/oscuro
│   │   └── TerminalTransition.tsx   # Animación entre páginas
│   │
│   ├── data/
│   │   ├── profile.json             # Info personal
│   │   ├── stack.json               # Tecnologías
│   │   ├── projects.json            # Proyectos
│   │   └── stack-map.ts             # Mapa nombre → slug/color (Simple Icons)
│   │
│   └── types/
│       └── index.ts                 # Tipos TypeScript compartidos
│
├── mdx-components.tsx               # Configuración de MDX
├── next.config.ts                   # Configuración de Next.js
├── tailwind.config.ts               # (Si aplica) Configuración de Tailwind
├── tsconfig.json
└── package.json
```

---

## 🚀 Empezar

### Requisitos previos

- **Node.js** 20.9 o superior
- **npm** o **pnpm**

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/fredylopez01/portafolio.git
cd portafolio

# Instalar dependencias
npm install

# Levantar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

### Scripts disponibles

| Comando         | Descripción                                      |
| --------------- | ------------------------------------------------ |
| `npm run dev`   | Servidor de desarrollo con hot reload            |
| `npm run build` | Compilación de producción                        |
| `npm run start` | Servidor de producción (requiere `build` previo) |
| `npm run lint`  | Análisis estático con ESLint                     |

---

## 📝 Cómo agregar contenido

### Agregar un proyecto nuevo

**1. Añade la entrada al JSON** en `src/data/projects.json`:

```json
{
  "slug": "mi-nuevo-proyecto",
  "title": "Mi Nuevo Proyecto",
  "shortDescription": "Descripción corta de una o dos frases.",
  "date": "2026-03-15",
  "year": "2026",
  "status": "deployed",
  "image": "/projects/mi-nuevo-proyecto.webp",
  "gallery": [
    "/projects/mi-nuevo-proyecto-1.webp",
    "/projects/mi-nuevo-proyecto-2.webp"
  ],
  "stack": ["Next.js", "TypeScript", "PostgreSQL"],
  "repoUrl": "https://github.com/usuario/repo",
  "demoUrl": "https://demo.com",
  "featured": true
}
```

**2. Crea el cuerpo MDX** en `content/projects/mi-nuevo-proyecto.mdx`:

```mdx
Cuenta la historia del proyecto: qué problema resolvía, qué decisiones
tomaste, qué aprendiste. El README del repo tiene los detalles técnicos;
aquí va la narrativa.

## Una sección

Puedes usar **negrita**, `código`, listas, imágenes y bloques de código.

![Diagrama](/projects/diagrama.png)
```

**3. Coloca las imágenes** en `public/projects/`.

**4. `git push`** y listo. El proyecto aparecerá automáticamente en la home y en `/projects`.

### Agregar una tecnología al stack

Edita `src/data/stack.json`:

```json
{
  "name": "Nombre de la tech",
  "slug": "nombre-en-simple-icons",
  "color": "#RRGGBB",
  "category": "backend"
}
```

El `slug` debe coincidir con el nombre en [simpleicons.org](https://simpleicons.org). Si no existe, el badge se mostrará sin logo pero funcionará igual.

---

## 🎨 Personalización

### Colores y tema

Toda la paleta vive en variables CSS dentro de `src/app/globals.css`:

```css
:root {
  --bg: 250 250 252;
  --text: 10 10 15;
  --accent: 124 58 237;
  --lime: 163 230 53;
  /* ... */
}

.dark {
  --bg: 6 6 10;
  /* ... */
}
```

Cambia esos valores y todo el sitio se recolorea. No hay colores hardcodeados en los componentes.

### Tipografía

Las fuentes se cargan en `src/app/layout.tsx` con `next/font/google`. Para cambiarlas, reemplaza los imports y las variables CSS asociadas.

### Comandos de la transición

Los comandos que se muestran al navegar se definen en `src/components/TerminalTransition.tsx`, en la función `buildCommand`. Añade o modifica casos según tus rutas.

---

## 🚢 Despliegue

### Netlify (recomendado)

1. Conecta tu repositorio de GitHub a Netlify.
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Instala el plugin **`@netlify/plugin-nextjs`** cuando Netlify lo sugiera.
5. Configura tu dominio personalizado en **Domain management**.

### Vercel

```bash
npm install -g vercel
vercel --prod
```

---

## 🗺️ Roadmap

Este es un proyecto vivo. La versión actual (**v1**) es la base sólida: páginas estáticas, contenido en JSON/MDX, sin backend. Las siguientes versiones se enfocarán en mejorar la experiencia y añadir funcionalidad.

### ✅ v1 — Actual

- [x] Home con hero, sobre mí, stack, proyectos destacados y contacto
- [x] Listado completo de proyectos en `/projects`
- [x] Páginas de detalle con galería y lightbox
- [x] Cuerpos de proyecto en MDX
- [x] Tema claro / oscuro
- [x] Nav sticky con menú móvil
- [x] Transición entre páginas tipo terminal
- [x] Despliegue en Netlify con dominio propio

### 🚧 v2 — Planeada

- [ ] **Blog / artículos** en `/blog` con el mismo sistema de MDX
- [ ] **Página de detalle de cada artículo** con tabla de contenidos
- [ ] **Búsqueda global** en proyectos y artículos
- [ ] **Filtros** en el listado de proyectos por tecnología, año o estado
- [ ] **Modo "arcade"** como tema alternativo (tercer set de tokens CSS)
- [ ] **RSS feed** del blog

### 💭 v3 — Ideas

- [ ] **Editor en línea** para escribir artículos sin tocar archivos (con autenticación básica)
- [ ] **Comentarios** en artículos vía GitHub Discussions
- [ ] **Analytics ligero** con Plausible o Umami
- [ ] **Internacionalización** (español / inglés)
- [ ] **PWA** con soporte offline básico

### 📌 Notas sobre la v1

La versión actual **no tiene backend ni base de datos**, y eso es intencional. Todo el contenido es estático: se compila en build time y se sirve como HTML puro. Eso hace que el sitio sea rapidísimo, barato de hostear (Netlify gratis) y prácticamente imposible de romper.

Las versiones futuras pueden añadir un backend ligero si la funcionalidad lo justifica, pero la prioridad siempre será mantener el sitio rápido y simple.

---

## 🤝 Contribuciones

Este es un proyecto personal, pero si encuentras un bug o tienes una sugerencia, puedes:

1. Abrir un [issue](https://github.com/fredylopez01/portafolio/issues) describiendo el problema.
2. Hacer fork del repo, crear una rama (`git checkout -b feature/mi-cambio`), commit (`git commit -m "feat: añade X"`) y abrir un Pull Request.

### Convenciones de commits

Uso [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: nueva funcionalidad
fix: corrección de bug
docs: cambios en documentación
refactor: reestructuración sin cambio funcional
style: cambios de formato o estilos
chore: tareas de mantenimiento
```

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver el archivo [LICENSE](./LICENSE) para más detalles.

---

## 📬 Contacto

**Fredy Oswaldo López Daza**
Full-Stack Developer · Backend & Distributed Systems

- 📧 Email: [lopezdazafredy@gmail.com](mailto:lopezdazafredy@gmail.com)
- 🐙 GitHub: [@fredylopez01](https://github.com/fredylopez01)
- 💼 LinkedIn: [linkedin.com/in/fredy-oswaldo-lopez-daza](https://www.linkedin.com/in/fredy-oswaldo-lopez-daza)
- 🌐 Sitio: [fredylopez01.website](https://fredylopez01.website)

---

<div align="center">

Hecho con 🖤, demasiado café y una obsesión por los sistemas distribuidos.

</div>
