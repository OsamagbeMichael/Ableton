# Spec: /jobs page (spec-driven-development)

Produced by `interview-me` (questions below), then `spec-driven-development`. It's ready for `to-tickets`.

## Interview (interview-me, one question at a time)
1. **Who is this for?** Applicants deciding whether to apply, mostly on phones from social links.
2. **What must they be able to do in under 30s?** Filter by team and location, and open a role.
3. **Where do roles come from?** A static `jobs.json` for now. An ATS feed is a later ticket.
4. **What does done look like?** Lighthouse a11y 100, 0 overflow in break-ui, and the shared-element transition from card to detail.

## Goals / Non-goals
- **Goals:** list, filter (team, location, remote) with the state kept in the URL, and a detail page with an apply link.
- **Non-goals:** accounts, saved jobs and in-page application forms.

## Interface
`jobs.json: { id, title, team, location, remote:boolean, posted:ISODate, summary, applyUrl }[]`

## Acceptance criteria
- [ ] Filters are reflected in `?team=&location=`, and back/forward restores them.
- [ ] Empty filter result shows "No roles match", with a reset link.
- [ ] A card links to `/jobs/:id`. The title morphs between pages via `<ViewTransition name={'job-'+id}>`.
- [ ] Worst-case fixtures (`?data=worst`) cover 0, 1 and 300 roles, a 90-char title and a non-Latin location.
- [ ] Sub-nav "Jobs" gets `aria-current="page"`.
