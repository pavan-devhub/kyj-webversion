# Archived stage designs

Earlier Stage 0–5 home-page designs, replaced on 2026-10-15 by the shared
Stage 0–8 journey (`src/components/StageJourney.jsx` + `src/styles/components/stage-journey.css`).

- `components/Stage0Showcase.jsx`, `Stage1Showcase.jsx`: the image-matched Stage 0 and Stage 1 blocks
- `components/Stage0And1Redesign.jsx`, `Stage2And3Redesign.jsx`, `Stage4And5Redesign.jsx`: the timeline card layout
- `components/StageIcons.jsx`: the activity icons (including the Stage 6–8 ones added on 2026-10-15)
- `styles/`, `images/`: the stylesheets and images only those components used

Imports inside these files still point at their old `src/` locations.

## Stage journey panel (archived 2026-10-16)

The first shared Stage 0–8 journey: each stage in a rounded panel with corner
decoration, cards with an icon, chevron and progress bar, and a footer row of
three highlights beside the button. Replaced by the leaner panel-less layout in
`src/components/StageJourney.jsx`.

- `components/StageJourneyPanel.jsx`, `styles/stage-journey-panel.css`
- It read each stage's `highlights` (`{ icon, label }` pairs) from `data/screens.js`, and the
  highlight icons (`bolt`, `lock`, `gauge`, `leaf`, `sprout`, `check-circle`, `globe`,
  `sparkle`, `tag`, `shield-plain`, `user-check`, `star`, `flag`) from `components/icons.jsx`;
  both were removed from `src/` along with it.
