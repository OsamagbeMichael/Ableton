# libraries review (Libraries.dev)

Read the stack (React 19, Vite, CSS Modules, no SSR), then scanned for fit signals. Ranked by impact, at most one per UI area. Nothing was installed: `libraries apply` asks first, and this page has no AI waiting states.

1. `src/components/Footer.jsx:40` Sign Up button → **Border beam**, `pulse-inner`. It highlights the one conversion on the page.
   Defensible, but it's a newsletter, not a product CTA. Optional.
2. `src/components/Sections.jsx:97` "See Job Openings" CTA → **Liquid metal**, Button type (`MetalFx variant="button"`). It's the page's selling CTA.
   It's an alternative to #1: don't run both effects on one page this calm.
3. `src/components/Sections.jsx:34` hero `h1` "Ableton" → **Liquid metal**, Text type (`MetalText`). It fits the "key headline" rule, but it fights the editorial, flat DESIGN.md.
   **Rejected.**

**Not applicable:** Thinking orbs, Voice, Bot avatars, Image and Gooey. The page has no loading longer than 2s, no voice, no agents and no generated images.

**Verdict:** if you add one, use #2. Run `libraries apply` on it, then `npm i metal-fx`, and mount it client-only.
