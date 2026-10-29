# ponytail-audit: whole repo

**Assumed load:** a static marketing page with many anonymous readers, no auth and no data writes. The order of concern is correct, safe, holds up, tested, fast, lean.

| # | Rank | Finding | Why it matters | Fix |
|---|---|---|---|---|
| 1 | **Must fix before launch** | The newsletter form fakes success (`Footer.jsx` onSubmit) | Readers think they subscribed when nothing was sent | Wire it to the e-mail provider, or remove the form |
| 2 | **Must fix before launch** | All 10 photos are hot-linked from images.pexels.com | If Pexels is down or rate-limits, every image breaks. The CSP also has to allow a third-party host | Self-host the images with responsive sizes (vite-imagetools) |
| 3 | Should fix | No tests on branching logic: header tuck, the `?data=worst` swap, modal focus | Every regression this branch caught was caught by hand | `npm i -D vitest @testing-library/react jsdom`, plus 3 tests (tuck on scroll down, inert while the menu is open, prod ignores ?data=worst) |
| 4 | Later | `Header.jsx` holds 3 behaviours (~150 lines) | It's fine at one header. A second variant would duplicate logic | Extract `useTuckOnScroll` and `<Disclosure>` when /jobs needs it |
| 5 | Delete | The `prototype/hero` branch | Prototype code mustn't drift into main | Delete it after picking a hero (`git branch -D prototype/hero`) |

**Holds up:** a static bundle (66 kB JS gzipped). There are no fetches at runtime apart from images, so it scales on any CDN.
**Lean:** nothing else to delete. Every addition this branch made is tied to a measured finding.
