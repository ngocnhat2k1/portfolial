# Portfolio — Tran Ngoc Nhat

Personal portfolio of **Tran Ngoc Nhat — Frontend Technical Leader**, live at
**[ngocnhat.info](https://ngocnhat.info)**.

A high-performance, animated, **bilingual (Vietnamese / English)** single-page
portfolio built with Next.js 15 and the React 19 ecosystem.

## Tech stack

- **Framework:** Next.js 15 (App Router, Turbopack) + React 19 + TypeScript
- **Styling:** Tailwind CSS 3 with a CSS-variable theme system (6 themes)
- **Animation:** Framer Motion, GSAP (ScrollTrigger), Lenis smooth scroll
- **3D / effects:** Three.js, @react-three/fiber, Spline, custom canvas particles
- **Analytics:** Vercel Analytics
- **Deploy:** Vercel (standalone output)

## Getting started

```bash
npm install --legacy-peer-deps   # peer deps required by @react-three/drei
npm run dev                       # http://localhost:3000
npm run build && npm start        # production build
npm run lint                      # eslint
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # root layout: metadata, JSON-LD, theme + LocaleProvider
│   ├── globals.css             # 6 theme definitions (CSS variables)
│   └── (main)/
│       ├── page.tsx            # homepage composing all sections
│       ├── about|projects|contact/  # standalone routes (SEO)
│       └── components/         # section components (Home, About, Skills,
│                               #   Experience, Awards, Projects, Contact)
├── data/                       # 🟢 ALL CONTENT LIVES HERE (bilingual)
│   ├── site.ts                 # profile, stats, nav, contact, UI strings
│   ├── skills.ts               # skill groups
│   ├── experience.ts           # work / education + awards
│   └── projects.ts             # project list (role, period, metrics)
├── i18n/                       # lightweight VI/EN context (useLocale, t())
├── components/                 # reusable UI (navbar, footer, cards, effects)
└── hook/                       # theme engine, scroll spy, etc.
```

## Editing content

All text is centralized and **bilingual** in `src/data/*`. Translatable values use
`{ vi: string; en: string }` (the `Localized` type from `src/i18n`).

- Change wording, stats, projects, skills, experience, awards → edit `src/data/`.
- Add a project → append to `projects` in `src/data/projects.ts` and drop preview
  images into `public/projects/{name}.png` and `{name}_mobile.png`.

## Internationalization

- Default language: **Vietnamese** (`vi`). Toggle VI/EN lives in the navbar.
- The choice is persisted in `localStorage('portfolio-locale')`.
- Components read text via `const { t } = useLocale()` and `t(localizedValue)`.

## Theming

Six themes (light, dark, ocean, forest, sunset, cyberpunk) are defined as CSS
variables in `src/app/globals.css` and managed by `src/hook/useThemeEngine.ts`.
The active theme is persisted in `localStorage('portfolio-theme')`.
