# ponytail-debt ledger

Generated with `git grep -nE "(#|//|/[*]) ?(shortcut|ponytail):"`. Every deliberate shortcut names its ceiling and its upgrade trigger.

- src/components/Footer.jsx:19:    // shortcut: fake submit, nothing is sent; wire to the e-mail provider (or remove the form) before launch.
- src/components/Header.jsx:46:  // shortcut: tuck, More menu and modal menu all live in Header; extract hooks when a second header variant appears.
- src/data/content.js:3:// shortcut: hot-linked images depend on Pexels uptime; self-host them (e.g. vite-imagetools) before launch.
- src/data/index.js:6:// shortcut: one mutable module object, fine for a client-only SPA; move to React context if this ever renders on the server.
