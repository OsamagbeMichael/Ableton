# Motion review (Emil Kowalski skills)

## review-animations: findings

| Before | After | Why |
| --- | --- | --- |
| `Sections.module.css:147` `.videoImg` hover `scale(1.02)` over 600ms, ungated | Removed (see remove-animations) | Over the 300ms UI budget, ungated hover, and it duplicated the play button's feedback |
| `Sections.module.css:165` `.video:hover .play` ungated | Gated by `@media (hover: hover) and (pointer: fine)` | Touch devices fire sticky hover states |
| `global.css:70` reduced-motion set every duration to 0.01ms | Per-module opt-outs: keep opacity and colour, drop transforms | Standard 8: reduced motion is gentler, not zero |
| `Header.module.css:100` `animation: panelIn 220ms` (keyframes) | `transition` + `@starting-style` | Keyframes restart from zero when the menu is toggled fast; transitions retarget |
| `Header.module.css:9` tuck `300ms` | `250ms` | Dropdown/drawer budget is 150–250ms |
| `Footer.module.css:101` `.submit:active scale(0.98)` with no transform transition | `scale(0.97)` + `transform 160ms` | Press feedback should glide, not jump |
| `*.module.css` `150ms ease` on colour | `150ms var(--ease-out)` | Built-in easing is too weak; use the project curve |

**Verdict: Approve after fixes.** No `ease-in`, no `scale(0)`, no `transition: all`, and nothing animates on keyboard or high-frequency actions. Hover is gated and reduced motion is honoured.

## remove-animations (subtract only)
- **Deleted:** the video thumbnail zoom (decoration duplicating the play button; hazards checked, nothing waits on it).
- **Reduced:** image fade-in 500ms → 300ms.
- **Kept, documented:** the image fade-in (bridges the pop-in when a photo finishes loading), the header tuck (spatial: the bar leaves and returns where it was), and the "+" → "×" rotation (state indication).

## find-animation-opportunities (report, max 7)

| # | Where | Purpose | Frequency | Verdict |
|---|---|---|---|---|
| 1 | Newsletter confirmation (`Footer.jsx:44`) appears abruptly | Prevents a jarring change | Rare | ✅ Built: 4px rise + fade, 200ms |
| 2 | Photos pop in while scrolling | Spatial / preventing a jarring change | Once per visit | ✅ Built: CSS scroll-driven rise, 24px |
| 3 | Mega-menu item stagger | Decoration | Tens per day | ❌ Rejected: nav is opened often; a stagger slows scanning |
| 4 | Sub-nav active underline slide | State indication | Page change only | ❌ Rejected: the state changes across pages, so nothing slides |
| 5 | Section text fade-ups | Decoration | Once per visit | ❌ Rejected: text should be readable immediately; photos carry the motion |

## animation-performance
- **Fixed:** removed `backdrop-filter: blur(12px)` from the sticky header. It forced a re-blur of everything behind it on every scroll frame, which is the classic mid-range-phone jank. It's now a solid 97% white.
- **Verified from code:** every remaining animation uses only `transform` and `opacity`, apart from 150ms colour fades on hover. The scroll reveal runs on the compositor (`animation-timeline: view()`), with no scroll listeners.
- **Needs a device recording:** the header's scroll listener calls `setState` only when the direction flips, and React bails on equal values. Profile on a real phone before optimising further.

## animation-vocabulary: names for what's on this page
- **Headroom / auto-hiding header:** the main bar tucks on scroll down.
- **Scroll-driven reveal:** photos rise as they enter.
- **Press feedback / squish:** `scale(0.97)` on `:active`.
- **Morph (icon):** "+" rotating into "×".
- **Fade-up entrance:** the newsletter confirmation.
