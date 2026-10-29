# improve-animations plan (executed in commit "motion")

Self-contained steps for any agent. All values are inline.

1. **`src/styles/global.css`:** delete the global reduced-motion rule that zeroes durations.
2. **Each `*.module.css`:** add `@media (prefers-reduced-motion: reduce)` that removes transforms but keeps opacity (`transition: opacity 150ms linear`).
3. **`Header.module.css`:**
   - Replace `animation: panelIn 220ms` with `transition: opacity 200ms cubic-bezier(0.23,1,0.32,1), transform 200ms cubic-bezier(0.23,1,0.32,1)` plus `@starting-style { opacity:0; transform: translateY(-6px) }`.
   - Change the tuck to 250ms.
   - Remove `backdrop-filter`, and set the background to `rgb(255 255 255 / .97)`.
4. **`Sections.module.css`:**
   - Delete the `.video:hover .videoImg` scale.
   - Gate `.video:hover .play` behind `(hover: hover) and (pointer: fine)`.
   - Change the `.photo` fade to 300ms.
5. **`Footer.module.css`:** `.submit:active { transform: scale(0.97) }` with `transform 160ms cubic-bezier(0.23,1,0.32,1)`.
6. **Animate:**
   - Newsletter status: `<span key={status}>` with `@starting-style { opacity:0; transform: translateY(4px) }`, 200ms.
   - Photos: `@keyframes rise { from { opacity:0; transform: translateY(24px) } }`, using `animation-timeline: view(); animation-range: entry 0% entry 35%`, inside `@supports (animation-timeline: view())` and `(prefers-reduced-motion: no-preference)`.
