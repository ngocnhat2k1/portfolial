# CLAUDE.md — AI Assistant Guide for `portfolial`

This file provides context and conventions for AI assistants working on this codebase.

---

## Project Overview

**Portfolial** is a personal portfolio website for Tran Ngoc Nhat (Frontend Team Leader). It is a frontend-only Next.js 15 application with no backend, database, or external API dependencies.

**Tech stack:**
- **Framework:** Next.js 15 (App Router) + React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3 + CSS variables for theming
- **Animation:** Framer Motion, GSAP, Three.js / @react-three/fiber / @react-three/drei
- **Scroll:** Lenis (smooth scroll)
- **Analytics:** Vercel Analytics
- **Build:** Turbopack (dev), standalone output (prod)

---

## Repository Structure

```
portfolial/
├── public/                        # Static assets
│   ├── projects/                  # Project screenshots (desktop + mobile variants)
│   ├── resume.pdf, resume-v2.pdf
│   ├── favicon.svg, logo.svg, logoCircle.png/svg
│   └── og-image.jpg, avatarAbout.jpeg/png
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── layout.tsx             # Root layout: metadata, theme init script, JSON-LD schema
│   │   ├── globals.css            # Global CSS with 6 theme definitions
│   │   ├── robots.ts              # SEO robots.txt
│   │   ├── sitemap.ts             # Dynamic sitemap generation
│   │   └── (main)/                # Route group
│   │       ├── layout.tsx         # NavBar + Footer wrapper
│   │       ├── page.tsx           # Home page (all sections)
│   │       ├── about/page.tsx
│   │       ├── projects/page.tsx
│   │       ├── contact/page.tsx
│   │       └── components/        # Page-level components
│   │           ├── HomePage/
│   │           ├── AboutPage/     # AboutPage.tsx, Skills.tsx, Experience.tsx
│   │           ├── ProjectsPage/
│   │           └── ContactPage/
│   ├── components/                # Shared/reusable components
│   │   ├── animate/               # Framer Motion variants + containers
│   │   │   └── variants/          # Typed animation presets (fade, slide, zoom, etc.)
│   │   ├── layout/                # NavBar/ and Footer/
│   │   ├── sections/              # Section-level components (About, Contact, Home, Projects)
│   │   ├── effects/               # Visual effects (BrutalScroll, intro overlay)
│   │   ├── theme_picker/          # Theme switcher UI
│   │   ├── icons/icons.jsx        # Icon definitions
│   │   ├── ui/                    # UI primitives
│   │   ├── common/                # Shared utilities (script_client/)
│   │   └── [HireMe, MagicBento, Magnet, Particles, ProfileCard,
│   │       ScrollToTopButton, SpotlightCard, Squares]/
│   └── hook/                      # Custom React hooks
│       ├── useActiveLink.ts       # Active nav link tracking
│       ├── useImperativeDisableScroll.ts
│       ├── useScrollSpy.ts        # IntersectionObserver scroll spy
│       ├── useThemeEngine.ts      # Primary theme manager (localStorage-backed)
│       └── useThemeSwitcher.ts    # Legacy theme switcher
├── tailwind.config.js
├── tsconfig.json
├── next.config.ts                 # { output: 'standalone' }
├── eslint.config.mjs
├── prettier.config.js             # Authoritative Prettier config (JS file)
└── postcss.config.js
```

---

## Development Workflows

### Common Commands

```bash
npm run dev        # Start dev server with Turbopack (http://localhost:3000)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint on src/
npm run lint:fix   # Auto-fix ESLint issues
```

> There are **no tests** in this project. Do not add test commands or test dependencies unless explicitly requested.

### Branch / Git Conventions

- `master` — main stable branch
- `main` — remote default (on `origin`)
- Feature branches use `claude/<description>-<id>` naming for AI-generated work

---

## Code Conventions

### TypeScript

- Strict mode is enabled (`"strict": true` in tsconfig)
- Path alias: `@/*` → `src/*` — always use this for imports
- Target: ES2017; JSX: preserve (Next.js handles transformation)

### Formatting (Prettier)

Authoritative config is **`prettier.config.js`** (`.prettierrc` is a legacy duplicate):

```js
{
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,           // No semicolons
  singleQuote: true,
  printWidth: 110,
  plugins: ['prettier-plugin-tailwindcss']  // Auto-sorts Tailwind classes
}
```

- **No semicolons**, **single quotes**, **2-space indent**
- Tailwind class order is managed automatically — do not manually reorder

### ESLint

- Config: `eslint.config.mjs` using `next/core-web-vitals` preset
- Run `npm run lint:fix` before committing

### Styling

- Use **Tailwind CSS utility classes** as the primary styling method
- Custom design tokens are defined as CSS variables in `src/app/globals.css` and mapped via `tailwind.config.js`
- Available semantic color tokens: `primary`, `secondary`, `accent`, `dark`, `light`, `surface`, `theme-text`, `theme-muted`, `danger`, `warning`
- Custom breakpoints: `2xl` (1535px), `xl` (1279px), `lg` (1023px), `md` (767px), `sm` (639px), `xs` (479px)
- Dark mode uses both `.dark` class and `[data-theme="dark"]` attribute selectors

### Theming

Six themes are defined in `src/app/globals.css` via `[data-theme="<name>"]` selectors:
`light` (default), `dark`, `ocean`, `forest`, `sunset`, `cyberpunk`

- Theme state is managed by `useThemeEngine.ts` hook with localStorage persistence
- A blocking inline `<script>` in `src/app/layout.tsx` reads localStorage on load to set the `data-theme` attribute before hydration, preventing FOUC
- **Never** hardcode color values — always use the CSS variable tokens

### Animation

- **Framer Motion** is the primary animation library
- Reusable animation variants live in `src/components/animate/variants/`
- Use `MotionContainer` / `MotionLazyContainer` wrappers from `src/components/animate/`
- **GSAP** is used for scroll-triggered and complex timeline animations
- **Three.js** / `@react-three/fiber` is used for 3D elements — mark these components with `'use client'`

### Component Patterns

- App Router is used — default exports are Server Components unless `'use client'` is needed
- Mark as `'use client'` when using: hooks, browser APIs, event handlers, animations, Three.js
- Page-level components go in `src/app/(main)/components/<PageName>/`
- Reusable components go in `src/components/`
- Hooks go in `src/hook/` with `use` prefix and `.ts` extension

---

## Key Architecture Notes

- **Single-page layout:** The home page (`app/(main)/page.tsx`) renders all sections together; individual routes (`/about`, `/projects`, `/contact`) also exist as standalone pages
- **SEO:** `sitemap.ts` and `robots.ts` are App Router route handlers; metadata is defined in `layout.tsx` using Next.js Metadata API; JSON-LD structured data is embedded in the root layout
- **No API routes:** This is a purely static/client-rendered site — do not add `app/api/` routes unless explicitly asked
- **Standalone output:** `next.config.ts` sets `output: 'standalone'` for Docker/container deployments
- **No environment variables** are required to run the project locally
- **Smooth scroll** is powered by Lenis — do not use native `scroll-behavior: smooth` in CSS as it conflicts

---

## Public Assets

- Project screenshots follow the pattern: `public/projects/<project-name>-desktop.png` / `-mobile.png`
- Resume files: `resume.pdf` (current) and `resume-v2.pdf`
- `og-image.jpg` is used as the Open Graph / social share image

---

## What NOT to Do

- Do not add a backend, database, or API routes unless explicitly requested
- Do not add a test framework — this project has no tests
- Do not add CI/CD configuration unless explicitly requested
- Do not use hardcoded color hex values — use Tailwind tokens backed by CSS variables
- Do not use `scroll-behavior: smooth` in CSS (conflicts with Lenis)
- Do not use `.prettierrc` as the reference — `prettier.config.js` takes precedence
- Do not import from relative paths when `@/` alias works
