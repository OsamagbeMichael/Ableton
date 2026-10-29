# Domain glossary (domain-modeling)

| Term | Meaning in this codebase | Not to be confused with |
|---|---|---|
| **Section** | One full-width band of the About page (`text`, `split`, `video`, `wide`) | A React component: several sections share `TextBlock` |
| **Split** | Two photos on a colour field, layouts `a`/`b`/`c` | A CSS split view |
| **Tone** | The colour field of a split (`purple`, `blue`, `green`) | Theme (there is none) |
| **Main bar / Sub-nav** | The two header rows. Only the sub-nav stays on scroll down | The mobile Menu panel |
| **More menu** | The mega-menu behind "More +" (desktop panel and stacked mobile list) | The mobile Menu |
| **Worst case** | The dev-only fixture set in `src/data/worst.js` (`?data=worst`) | Test data for unit tests |
| **Gutter** | Outer page margin `--gutter`, shared by every row | `--col-gap`, the space between grid columns |
