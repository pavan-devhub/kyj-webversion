# KYJ — Krushi Yeva Jayate · Web Screens

All 30 KYJ farmer-journey screens (EPM landing → KYJ-1 Platinum certification), converted from
mobile phone mock-ups into a responsive **desktop web layout** with a shared design system —
built as a **React + Vite** single-page app.

> Screen content (every text, number, emoji and Telugu string) is unchanged — only the layout and
> visual design were rebuilt. The original mobile files are kept untouched in `_archive/mobile-screens/`.

---

## Quick start

Requires **Node.js 22.22+** (React Router 8 minimum).

```bash
npm install
npm run dev        # dev server with hot reload → http://localhost:5173
```

| Script            | What it does                                     |
|-------------------|--------------------------------------------------|
| `npm run dev`     | Vite dev server with HMR                         |
| `npm run build`   | Production build into `dist/`                    |
| `npm run preview` | Serve the production build locally               |
| `npm run lint`    | Lint with [oxlint](https://oxc.rs)               |

The home page (`/`) lists every screen as a button. Each screen lives at `/screens/<id>`
(e.g. `/screens/8a`). Inside a screen: use the sidebar, the ‹ › buttons in the top bar, the
Previous / Next cards at the bottom, or the keyboard **← / →** keys to move through the journey.
On the home page press **/** to search.

---

## Folder structure

```
KYJ/
├── index.html                    ← Vite entry (fonts, favicon, #root)
├── package.json  vite.config.js  .oxlintrc.json
├── README.md
│
├── src/
│   ├── main.jsx                  ← mounts <RouterProvider>, imports styles/main.css
│   ├── router.jsx                ← routes: "/" → Home, "/screens/<id>" → AppShell + lazy screen
│   │
│   ├── data/
│   │   └── screens.js            ← screen registry (order, stage, title, accent) — single source of truth
│   │
│   ├── pages/
│   │   └── Home.jsx              ← launcher: hero, search, stage filter, every screen grouped by stage
│   │
│   ├── components/
│   │   ├── RootLayout.jsx        ← top-level route; page-change scrolling
│   │   ├── AppShell.jsx          ← layout for every screen: sidebar, top bar, pager, drawer, ← / → keys
│   │   ├── HomeHero.jsx          ← landing header: copy, CTAs, stat cards, route map, port photo
│   │   ├── ScreensHero.jsx       ← "All Screens" banner: title, search, stage filters, trade map
│   │   ├── JourneyWheel.jsx      ← the 8-petal "KYJ Journey" wheel in that banner (decorative)
│   │   ├── Sidebar.jsx  Topbar.jsx  Pager.jsx
│   │   ├── PageStyles.jsx        ← mounts a page's stylesheet while that page is shown
│   │   └── icons.jsx
│   │
│   ├── screens/                  ← the 30 screens, one component each
│   │   ├── index.js              ← lazy loader per screen id (one chunk per screen)
│   │   ├── Screen1.jsx … Screen27.jsx
│   │   └── Screen8a.jsx  Screen11a.jsx  ScreenS18.jsx … (ids with letters)
│   │
│   ├── styles/
│   │   ├── main.css              ← global entry point (imports the layers below in order)
│   │   ├── base/                 ← tokens.css (colour, type, spacing, radius, shadow, motion), reset, typography
│   │   ├── layout/               ← app-shell.css, page.css, grid.css
│   │   ├── components/           ← card, button, badge, data-list, form, progress, stat, timeline,
│   │   │                            message, coins, medal, member-card
│   │   ├── utilities/            ← tones.css (.tone-* modifiers), helpers.css
│   │   └── pages/
│   │       ├── home.css          ← Home only
│   │       └── screen-<id>.css   ← one file per screen (theme colours + bespoke visuals)
│   │
│   └── assets/
│       ├── icons/                ← favicon.svg, logo.svg
│       ├── images/               ← hero-port.jpg (landing photo), world-dots.svg (dotted map)
│       └── fonts/                ← self-hosted fonts go here (see below)
│
└── _archive/mobile-screens/      ← untouched original mobile screens (reference only)
```

### Why this structure

- **One registry drives everything.** `src/data/screens.js` defines the journey order; the router,
  sidebar, top bar, pager and home launcher are all generated from it.
- **Each screen is its own lazy-loaded chunk**, so the first load only ships the shell and the page you
  open.
- **CSS follows ITCSS layering** (tokens → base → layout → components → utilities → pages): low-specificity,
  generic rules first; specific, page-level rules last. Shared styles are written once; each screen only
  ships its own small `pages/screen-<id>.css`.
- **BEM-style class names** (`.card__title`, `.btn--primary`, `.is-active`) keep components predictable.

---

## How a screen page is built

Each screen component renders only its page content; the shared shell comes from `AppShell`:

```jsx
// src/screens/Screen4.jsx (typical shape)
import PageStyles from '../components/PageStyles.jsx'
import css from '../styles/pages/screen-4.css?inline'

export default function Screen4() {
  return (
    <>
      <title>KYJ_Screen4_Export_Readiness_Score</title>
      <PageStyles css={css} />

      <section className="page-head"> … </section>   {/* hero: status chips, title, step pill, visual */}
      <div className="grid">
        <div className="span-8 col"> … cards … </div>
        <div className="span-4 col col--sticky"> … summary cards … </div>
      </div>
      <div className="action-bar"> … primary CTA … </div>
    </>
  )
}
```

`AppShell` wraps it in `<aside class="sidebar">`, `<header class="topbar">`, `<main class="page">` and
`<nav class="pager">`. Links between screens use React Router's `<Link to="/screens/5">`.

### Page stylesheets

Each `src/styles/pages/screen-<id>.css` starts by setting that screen's theme on `:root`:

```css
:root {
  --accent: #6a1b9a;  --accent-2: #8e24aa;  --accent-ink: #4a148c;
  --accent-soft: #f6eefa;  --accent-line: #e1bee7;  --accent-glow: rgba(74, 20, 140, .32);
  --hero-from: #240845;  --hero-via: #4a148c;  --hero-to: #7b1fa2;
}
```

Every component reads these tokens, so one block re-themes the whole page (hero, buttons, focus rings,
chips, sidebar…). Because these sheets re-theme `:root`, only the current page's sheet may be active: the
page imports it with Vite's `?inline` suffix (the CSS as a string) and renders `<PageStyles css={css} />`,
which adds it to `<head>` while the page is shown and removes it when you navigate away.
`styles/main.css` (shared layers) is imported once, globally, in `main.jsx`.

### Landing header

`HomeHero.jsx` + the `.hero*` rules in `styles/pages/home.css` reproduce the 1808 × 870 landing design.
Every size is written as `calc(N * var(--u))`, where `--u` is 1px at 1808px wide and scales with the
viewport, so the layout stays proportional on any desktop width (1280px and up). Below 1280px it switches
to a stacked layout (copy first, photo below with a wavy top edge).

The curved divider is two smooth curves fitted to the design: the photo's S-shaped edge
(`assets/images/hero-wave-mask.svg`, used as a CSS mask) and, offset from it by a smoothly varying width,
the white edge where the blue "glass" band starts (clip path `#hero-glass`). Both live in a fixed
968 × 870 (design units) box, so the curve keeps its exact shape at every width; the photo continues to
the right edge on wide screens. The soft shapes along the left edge are an inline SVG (`.hero__blobs`).

`world-dots.svg` is a dotted world map generated once from Natural Earth 1:110m land data (public domain,
via the `world-atlas` package): a 190-column equirectangular dot grid, every dot on land kept. The route
pins and arcs are drawn over it in `HomeHero.jsx` in design pixels inside the map box.

### Mobile → web mapping

| Mobile screen | Web layout |
|---|---|
| Phone status bar (time / network) | Glass chips in the page header |
| Header with ← and step pill | Page header with back button, H1 and stage pill |
| Coloured hero band | Gradient hero with title left, visual (score ring, medal, metrics) right |
| Stacked sections | 12-column grid: main column + sticky summary column, or tile grids |
| Bottom CTA | Sticky action bar (CTA + its helper line) |
| — | Sidebar navigation, breadcrumbs, prev/next, keyboard navigation |

---

## Adding a new screen

1. Create `src/screens/Screen<Id>.jsx` from any existing screen.
2. Create `src/styles/pages/screen-<id>.css` with the `:root` theme block, and import it in the
   component with `?inline`.
3. Add an entry to `src/data/screens.js` (array order = journey order).
4. Add its lazy loader to `src/screens/index.js`.

The route, sidebar link, prev/next links and home-page button are generated from the registry.

---

## Deployment

`npm run build` outputs a static site in `dist/`. Routing uses real URLs (`/screens/4`), so the host must
serve `index.html` for unknown paths (SPA fallback) — e.g. a Netlify `_redirects` rule
`/* /index.html 200`, `"rewrites"` in `vercel.json`, or `try_files $uri /index.html` in nginx.
`npm run preview` already does this.

To serve from a sub-path (e.g. `https://example.com/kyj/`), set `base: '/kyj/'` in `vite.config.js`; the
router picks it up automatically.

---

## Fonts

Loaded from Google Fonts (in `index.html`) with system fallbacks:

- **Google Sans Flex** — landing header (title, copy, buttons, stats)
- **Inter** — UI text
- **Plus Jakarta Sans** — headings & big numbers
- **Noto Sans Telugu** — Telugu script (falls back to *Nirmala UI* on Windows)
- **JetBrains Mono** — IDs, file names, hashes

To self-host (offline / production), see `src/assets/fonts/README.md`.

## Browser support

Latest Chrome, Edge, Firefox and Safari. Uses CSS Grid, custom properties, `color-mix()`,
`backdrop-filter` and `aspect-ratio`. Respects `prefers-reduced-motion`.
Responsive down to phone width (sidebar becomes a slide-in drawer below 1100px).
