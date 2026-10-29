# HANDOFF (handoff skill)

**Goal:** a reference-quality About page that exercises the design stack.
**State:** 22 commits since baseline `097c652`. All checks green: 0 taste FAIL, 0 impeccable findings, 0 small targets, 0 overflow in break-ui, scroll jump ≤1.6%, review-animations Approve.

## Touched
`src/**` (all components), DESIGN.md, AGENTS.md, CONTEXT.md, vercel.json, .claude/ (git guardrails), docs/ (audits, ADRs, spec, issues), plans/.

## Tried and reverted
- `backdrop-filter` header: removed for scroll performance (ADR 0003).
- Back to top inside `<footer>`: broke under content-visibility (ADR 0002).

## Next
1. `npm install && npm run dev`, then check `?data=worst` on your phone.
2. Pick a hero: `git checkout prototype/hero`, open `prototypes/hero/index.html`, press 1–3.
3. Work through `docs/issues/001…005` (the /jobs page).
4. Deploy: `npx vercel` (see deploy-to-vercel in the report).
