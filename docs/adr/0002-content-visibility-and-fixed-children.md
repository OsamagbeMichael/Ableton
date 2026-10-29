# ADR 0002: content-visibility on sections; fixed UI lives outside them

**Status:** Accepted · **Date:** 2026-10-29

## Context
`content-visibility: auto` cut initial layout from 119ms to 72ms (4× CPU throttle). It also creates layout and paint containment, which makes the element the containing block for `position: fixed` descendants. The Back-to-top button inside `<footer>` was pinned to the footer as a result.

## Decision
Keep `content-visibility` on `.split`, `.media`, `.cta` and `footer`. Any fixed or floating UI (Back to top, toasts, modals) renders as a sibling of `<main>`/`<footer>`, never inside them.

## Consequences
New fixed UI must be mounted in `App.jsx`. The rule is recorded in AGENTS.md.

## Addendum: placeholder heights
The first version used `contain-intrinsic-size: auto 900px` everywhere. Before the sections rendered, the page measured 10,321px. After scrolling it measured 8,667px, so the scrollbar jumped 19% and taste-skill flagged 3 empty screens.

`contain-intrinsic-size` sets the **content box** (padding excluded). Placeholders are now measured per breakpoint, and the jump is ≤1.6% at 1440/1024/768/390px.
