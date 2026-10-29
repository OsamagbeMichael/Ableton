# Launch checklist (shipping-and-launch + deploy-to-vercel)

## Before
- [ ] ponytail-audit #1: wire up or remove the newsletter form
- [ ] ponytail-audit #2: self-host the photos, then tighten the CSP `img-src` to `'self'`
- [ ] `npm run build` passes, and `npm run preview` has no console errors
- [ ] `?data=worst` at 320px shows 0 overflow (dev)
- [ ] Lighthouse mobile ≥ 95 for performance, 100 for accessibility (Chrome DevTools)
- [ ] OG image and description meta. `index.html` has a description; add `og:image`

## Deploy (deploy-to-vercel)
```bash
npm i -g vercel        # once
vercel                 # first run links the project; preview URL
vercel --prod          # production
```
`vercel.json` already sets the framework (Vite), output `dist`, security headers and immutable caching for `/assets/*`.

## After
- [ ] Check response headers: `curl -sI https://<your-url> | grep -iE "content-security|strict-transport"`
- [ ] Load the page on a real phone and check the sticky header tuck and the Menu
- [ ] Rollback is one command: `vercel rollback`
