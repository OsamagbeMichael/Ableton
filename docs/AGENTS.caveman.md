# AGENTS (caveman)
Vite+React19+CSS Modules. About-page practice clone. No backend.
Run: `npm i && npm run dev` (localhost:5173; `?data=worst` = break-ui fixtures, dev only). Prod: `npm run build && npm run preview`. VS Code: Cmd+Shift+B dev, F5 debug.
Map: copy+images `src/data/content.js`; import `content` from `src/data/index.js` only. Components: Header, Sections, Footer. Tokens `src/styles/global.css` (see DESIGN.md). Docs: audits, ADRs, specs, issues in `docs/`.
Rules:
1. Read DESIGN.md first. No new colour/font/radius/shadow.
2. Fixed UI renders in App.jsx, outside main/footer (ADR 0002).
3. Motion: transform/opacity, ≤250ms, `var(--ease-out)`. Hover gated `(hover:hover) and (pointer:fine)`. Reduced-motion opt-out per module.
4. Text uses `--c-orange-text`, not `--c-orange`. Targets ≥24px.
5. Variants = string props, not booleans.
6. After UI change: `?data=worst` at 320px, overflow 0.
7. One commit per concern, `type(scope): what`. Never push (hook blocks push, reset --hard, clean -f, branch -D).
Done = build passes, 0 console errors, 0 overflow at 320/768/1440, screenshot checked.
