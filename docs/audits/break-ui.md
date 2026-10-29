# break-ui: worst-case data report

To see it yourself: `npm run dev`, then open `http://localhost:5173/?data=worst`. The toggle is dev-only, and `worst.js` is absent from production builds (verified by bundle grep).

The fixtures in `src/data/worst.js` are all plausible values:
- German labels with long compounds ("Unternehmensverantwortung", "Musikproduktionssoftwareentwicklungsabteilung")
- Japanese body copy
- an unbreakable e-mail address
- a 404 image
- a single-item app list, an empty Education column and 10 legal links

It was tested at 320px, 768px, 200% zoom (720px), 1440px and RTL at 390px.

## Part 1: What broke

| Where | Symptom | Width | Fix |
|---|---|---|---|
| CTA card | E-mail address forced the card to 432px, so the page scrolled sideways by 165px | 320 | `overflow-wrap: break-word` on body, plus `minmax(0,1fr)` grid columns |
| Footer grid | Column min-content (a long `<select>` option) overflowed by 3px | 320 | `minmax(0,1fr)` and `select { max-width: 100% }` |
| Back-to-top button | Hidden state `translateX(8px)` sat past the right edge, so the page scrolled by 48px | 768 | `translateY(8px)` and `inset-inline-end` |
| RTL layout | The same button plus the CTA overflowed by 95px | rtl390 | Fixed by the two rows above (logical properties) |
| Broken image | Stayed `opacity: 0`, leaving an invisible hole with no alt text | all | `onError` reveals the tile and its alt text |
| Empty footer column | "Education" heading rendered over nothing | all | The column hides when it has no links |

## Part 2: Decisions for you
- **Sub-nav with 4 long German items** scrolls sideways at 320px. I added an edge fade so the overflow is visible. The alternative is wrapping to two rows, which pushes the content down.
- **The mega-menu with 10 links** wraps to 3 rows at 1440px. That's fine, but past ~12 links it wants two columns.

## Part 3: What held up
- Header, hero, 200% zoom and 1440px had no overflow.
- The Japanese copy wraps correctly.
- The single-item app grid lays out fine.
- Pluralisation doesn't apply here (no counts on the page).
