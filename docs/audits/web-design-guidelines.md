# Web Interface Guidelines audit (vercel-labs/web-design-guidelines)

Run: "Run web-design-guidelines on src/". Result before → after.

## src/components/Header.jsx
src/components/Header.jsx:95  - product names auto-translated → add translate="no" ✓ fixed
src/components/Header.jsx:113 - "Try Live 12 for free": not Title Case, no nbsp in brand name ✓ fixed
src/components/Header.module.css:140 - sub-nav links 21px tall (<24px target) ✓ fixed (padding-block)

## src/components/Footer.jsx
src/components/Footer.jsx:37 - placeholder should end with "…" ✓ fixed
src/components/Footer.jsx:40 - "Sign up" → "Sign Up" (Title Case buttons) ✓ fixed
src/components/Footer.module.css - 11 footer links under 24px target size ✓ fixed
src/components/Footer.module.css:94 - transition on background-color (not compositor-only) — kept: 150ms paint on one button, no jank

## Passed (no change needed)
✓ skip links · ✓ visible :focus-visible · ✓ labels on inputs/selects · ✓ autocomplete + type=email + spellCheck off
✓ prefers-reduced-motion · ✓ no transition: all · ✓ curly quotes & … · ✓ img width/height + lazy + fetchpriority
✓ preconnect to image CDN · ✓ <a> for navigation, <button> for actions · ✓ overscroll-behavior: contain on mobile menu
✓ touch-action: manipulation · ✓ native <select> has explicit colours · ✓ theme-color meta · ✓ no user-scalable=no

## Deliberately not applied
- Title Case on headings: the brand voice uses sentence-case statements; only buttons/CTAs changed.
- "Avoid first person": an About page speaks as "we" by design.
- env(safe-area-inset-*): only needed with viewport-fit=cover, which this page doesn't use.
