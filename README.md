# About page: frontendpractice.com "Ableton" project

A practice recreation of a music-software company's About page, built with **Vite + React + CSS Modules**. It's for learning only and isn't affiliated with Ableton. The copy is rewritten and the photos come from Pexels.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build && npm run preview
```

## What's covered

| Brief | Where |
|---|---|
| Typography and spacing | `src/styles/global.css` (tokens), `Sections.module.css` |
| Unique grid layout | 12-column grid (78px columns, 24px gutters at 1200px) in `Sections.module.css`. The green section's square bleeds off the right edge. |
| Multi-column footer | `Footer.jsx`: 1 → 2 → 12-column grid, plus a newsletter form, selects and a legal row |
| Challenge: "More +" mega-menu | `Header.jsx` + `MoreMenu.jsx`. Escape and click-outside close it, focus returns to its button, and `aria-expanded` is set. |
| Extension: sticky second bar | Scrolling down tucks the main bar away and leaves the sub-nav pinned. Scrolling up brings the main bar back. |
| Extension: mobile layout | Below 1024px, "Menu ▾" opens a full-height panel. Sections stack below 768px. |

## Design decisions

- **Font:** Jost (free, Futura-inspired) stands in for the original's licensed Futura PT.
- **Palette:** colors come from the brief. Orange `#ff764d` is only 2.6:1 on white, so text uses a deeper orange (`#c93c0f`, 5.1:1) to pass WCAG AA.
- **Motion:** menus enter in 220ms with a strong ease-out. Images fade in once loaded. Everything is disabled under `prefers-reduced-motion`.
- **Content:** all copy and image URLs live in `src/data/content.js`.

## Next steps to try

- Build the Jobs and Apprenticeships pages and route the sub-nav with React Router.
- Turn the video pod into an inline player.
- Audit it: ask your agent to run `web-interface-guidelines` and `review-animations` on `src/`.
