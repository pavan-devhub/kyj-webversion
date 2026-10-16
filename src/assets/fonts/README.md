# Fonts

Fonts are currently loaded from Google Fonts (see the `<link>` in the root `index.html`):
Inter, Plus Jakarta Sans, Noto Sans Telugu and JetBrains Mono.

To self-host, place the `.woff2` files here and declare them with `@font-face`
in `src/styles/base/typography.css` (use paths relative to that file, e.g.
`url("../../assets/fonts/inter.woff2")` — Vite will fingerprint them), then remove
the Google Fonts `<link>` tags from `index.html`.
