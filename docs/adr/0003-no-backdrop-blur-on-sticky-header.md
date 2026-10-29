# ADR 0003: No backdrop-filter on the sticky header

**Status:** Accepted · **Date:** 2026-10-29

## Context
`backdrop-filter: blur(12px)` on a sticky header re-blurs everything behind it on every scroll frame, which is the most common source of scroll jank on mid-range phones (animation-performance). apple-design favours translucent materials.

## Decision
Use a solid `rgb(255 255 255 / .97)`. Performance beats the material effect on a content page.

## Consequences
There's slightly less depth on scroll. Revisit only with a real-device trace showing headroom.
