# KYJ — Krushi Yeva Jayate · Web Screens

All 30 KYJ farmer-journey screens (EPM landing → KYJ-1 Platinum certification), converted from
mobile phone mock-ups into a responsive **desktop web layout** with a shared design system.

> Screen content (every text, number, emoji and Telugu string) is unchanged — only the layout and
> visual design were rebuilt. The original mobile files are kept untouched in `_archive/mobile-screens/`.

---

## Quick start

No build step and no dependencies.

- **Open `index.html`** in any modern browser (double-click works). Every screen is a button.
- Or serve the folder locally (recommended, mirrors production):

  ```bash
  npx serve .
  ```

Inside a screen: use the sidebar, the ‹ › buttons in the top bar, the Previous / Next cards at the
bottom, or the keyboard **← / →** keys to move through the journey. On the index page press **/** to search.

---

## Folder structure

```
KYJ/
├── index.html                    ← launcher: every screen as a button, grouped by stage
├── README.md
│
├── html/                         ← the 30 screens (original file names kept)
│   ├── 1.html  2.html  3.html  4.html
│   ├── 5.html  6.html  7.html  8.html  8a.html
│   ├── 9.html  10.html  11.html  11a.html
│   ├── 12.html  13.html  13a.html
│   ├── 14.html  15.html  16.html
│   ├── 17.html  s18.html  s19.html
│   ├── s20.html  s21.html  22.html  22a.html
│   ├── 23.html  24.html  25.html
│   └── 27.html
│
├── assets/
│   ├── css/
│   │   ├── main.css              ← single entry point (imports the layers below in order)
│   │   ├── base/
│   │   │   ├── tokens.css        ← design tokens: colour, type, spacing, radius, shadow, motion
│   │   │   ├── reset.css
│   │   │   └── typography.css
│   │   ├── layout/
│   │   │   ├── app-shell.css     ← sidebar, top bar, pager, mobile drawer
│   │   │   ├── page.css          ← page container, page header (hero), action bar
│   │   │   └── grid.css          ← 12-column grid, columns, sticky column
│   │   ├── components/
│   │   │   ├── card.css          ← card, block, section label, callout, note
│   │   │   ├── button.css        ← buttons, chips
│   │   │   ├── badge.css         ← tags, dots, number badges
│   │   │   ├── data-list.css     ← key/value rows & grid, rich list, table
│   │   │   ├── form.css          ← fields, tiles, check lists, consent, drop zone
│   │   │   ├── progress.css      ← progress bar, score ring, journey stepper
│   │   │   ├── stat.css          ← metric tiles
│   │   │   ├── timeline.css      ← vertical timeline / chain
│   │   │   ├── message.css       ← WhatsApp preview
│   │   │   ├── coins.css         ← KRISHI COINS wallet
│   │   │   ├── medal.css         ← badge medal, confetti, ribbon
│   │   │   └── member-card.css   ← FEED membership card (Basic / Platinum)
│   │   ├── utilities/
│   │   │   ├── tones.css         ← .tone-* colour modifiers
│   │   │   └── helpers.css       ← spacing / text helpers
│   │   └── pages/
│   │       ├── home.css          ← index.html only
│   │       └── screen-<id>.css   ← one file per screen (theme colours + bespoke visuals)
│   │
│   ├── js/
│   │   ├── data/screens.js       ← screen registry (order, stage, title, accent) — single source of truth
│   │   ├── components/app-shell.js ← renders sidebar, top bar, pager; keyboard & drawer
│   │   ├── pages/home.js         ← index search + stage filter
│   │   └── main.js               ← entry for screen pages
│   │
│   ├── images/                   ← raster images (empty for now)
│   ├── icons/                    ← favicon.svg, logo.svg
│   └── fonts/                    ← self-hosted fonts go here (see below)
│
└── _archive/mobile-screens/      ← untouched original mobile screens (reference only)
```

### Why this structure

- **`assets/` groups every static resource** (`css`, `js`, `images`, `icons`, `fonts`) — the most common
  convention for static sites and what most hosts / CDNs and build tools expect.
- **CSS follows ITCSS layering** (tokens → base → layout → components → utilities → pages): low-specificity,
  generic rules first; specific, page-level rules last. Shared styles are written once; each screen only
  ships its own small `pages/screen-<id>.css`.
- **BEM-style class names** (`.card__title`, `.btn--primary`, `.is-active`) keep components predictable.
- **JS is split by role** (`data/`, `components/`, `pages/`) and uses classic scripts (no ES modules), so the
  pages also work straight from the file system (`file://`).

---

## How a screen page is built

```html
<body class="screen" data-screen="4">            <!-- id must match screens.js -->
  <div class="app">
    <aside class="sidebar" data-sidebar></aside> <!-- rendered by app-shell.js -->
    <div class="app__main">
      <header class="topbar" data-topbar></header>
      <main class="page" id="main">
        <section class="page-head"> … </section>  <!-- hero: status chips, title, step pill, visual -->
        <div class="grid">
          <div class="span-8 col"> … cards … </div>
          <div class="span-4 col col--sticky"> … summary cards … </div>
        </div>
        <div class="action-bar"> … primary CTA … </div>
      </main>
      <nav class="pager" data-pager></nav>
    </div>
  </div>
</body>
```

Each `assets/css/pages/screen-<id>.css` starts by setting that screen's theme:

```css
:root {
  --accent: #6a1b9a;  --accent-2: #8e24aa;  --accent-ink: #4a148c;
  --accent-soft: #f6eefa;  --accent-line: #e1bee7;  --accent-glow: rgba(74, 20, 140, .32);
  --hero-from: #240845;  --hero-via: #4a148c;  --hero-to: #7b1fa2;
}
```

Every component reads these tokens, so one block re-themes the whole page (hero, buttons, focus rings, chips…).

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

1. Create `html/<id>.html` from any existing screen (keep the `<head>` and shell markup).
2. Create `assets/css/pages/screen-<id>.css` with the `:root` theme block.
3. Add an entry to `assets/js/data/screens.js` (array order = journey order).
4. Add a button for it in `index.html` under its stage.

---

## Fonts

Loaded from Google Fonts with system fallbacks:

- **Inter** — UI text
- **Plus Jakarta Sans** — headings & big numbers
- **Noto Sans Telugu** — Telugu script (falls back to *Nirmala UI* on Windows)
- **JetBrains Mono** — IDs, file names, hashes

To self-host (offline / production), download the `woff2` files into `assets/fonts/`, add `@font-face`
rules to `assets/css/base/typography.css`, and remove the Google Fonts `<link>` tags.

## Browser support

Latest Chrome, Edge, Firefox and Safari. Uses CSS Grid, custom properties, `color-mix()`,
`backdrop-filter` and `aspect-ratio`. Respects `prefers-reduced-motion`.
Responsive down to phone width (sidebar becomes a slide-in drawer below 1100px).
