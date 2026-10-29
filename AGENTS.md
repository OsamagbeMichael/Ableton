# AGENTS.md

Vite + React 19 + CSS Modules. Practice recreation of a music-company About page. No backend.

## Run
- `npm install && npm run dev`, then open http://localhost:5173 (`?data=worst` loads the break-ui fixtures, dev only)
- `npm run build && npm run preview` (production)
- VS Code: Cmd+Shift+B runs the dev server, F5 debugs in Chrome.

## Map
- `src/data/content.js`: all copy and image URLs. Components never hard-code text.
- `src/data/index.js`: the single data boundary. Import `content` from here, not from content.js.
- `src/components/`: Header (main bar, sub-nav, More menu, mobile menu), Sections, Footer.
- `src/styles/global.css`: design tokens. DESIGN.md explains every token.
- `docs/`: audits, ADRs, specs, and issues (local markdown tracker).

## Rules
1. Read DESIGN.md before UI work. Add no new colours, fonts, radii or shadows.
2. Fixed or floating UI renders in App.jsx, outside `<main>` and `<footer>` (ADR 0002).
3. Motion: `transform`/`opacity` only, at most 250ms for UI, `var(--ease-out)`. Gate hover with `(hover:hover) and (pointer:fine)`, and give each module a reduced-motion opt-out.
4. Text colour uses `--c-orange-text`, never `--c-orange`. Targets are at least 24px.
5. Variants are string props (`layout="stacked"`), never booleans.
6. After any UI change, check `?data=worst` at 320px. Overflow must be 0.
7. One commit per concern, with a `type(scope): what` message. Never push. A hook blocks push, reset --hard, clean -f and branch -D.

## Done means
The build passes, there are no console errors, overflow is 0 at 320/768/1440, and a screenshot has been checked.
