# Design System: Ableton About (practice recreation)

Written with `design-md-library` (structure borrowed from its 84 reference systems; closest references: `vercel` for flat, border-free restraint, `spotify` for colour-blocked sections) and checked against `ui-ux-pro-max --design-system`, which classified this page as **Minimalism & Swiss Style** and confirmed the direction. Agents read this file before touching UI.

## 1. Visual Theme & Atmosphere
Editorial, flat and quiet. Large photographs and whole fields of pastel colour carry the page. There are no shadows on content, no rounded corners, no cards and no gradients. Type is one geometric sans in two weights. The only loud colour is the electric-blue link.

## 2. Color Palette & Roles
| Token | Value | Role |
|---|---|---|
| `--c-ink` | `#000000` | Headings and body text |
| `--c-ink-2` | `#333333` | Secondary text (12.6:1) |
| `--c-link` | `#0000ff` | Links and primary CTAs (8.6:1) |
| `--c-orange` | `#ff764d` | Decorative accent only (2.6:1, never for text) |
| `--c-orange-text` | `#c93c0f` | Active/hover text in the orange family (5.1:1) |
| `--c-purple` `--c-blue` `--c-green` | `#d5b3ff` `#b1c5ff` `#b6ffc0` | Full-bleed photo sections, one per section, never adjacent |
| `--c-yellow` | `#fbffa7` | The closing CTA card |
| `--c-rule` / `--c-field` | `#eeeeee` | 2px dividers and form fields |

## 3. Typography Rules
- **Family:** Jost (variable, self-hosted via @fontsource), standing in for the brand's licensed Futura PT.
- **Scale (px):** 120 hero · 30/42 section heading · 20/30 body · 16 nav · 14 meta · 13 disclaimer. On phones, headings drop to 20/30 and body to 16/24.
- **Weights:** 400 for body and hero, 500 for nav, 700 for headings and links.
- Headings use `text-wrap: balance` and paragraphs use `pretty`. Headings are titles: if one wraps past two lines, cut words.

## 4. Component Stylings
- **Main nav:** 68px bar with links at 20/700. The active or hover state is orange text. The mega-menu drops below as a white panel with a 2px top rule.
- **Sub-nav:** 66px tall with a 2px `--c-rule` top border. It stays pinned while the main bar tucks away on scroll down.
- **Buttons:** square corners, solid `--c-link` with white 700 text, 44px tall.
- **Inputs:** `--c-field` fill, no border, 44px tall, placeholder `#595959`.

## 5. Layout Principles
- **Grid:** 12 columns in a 1200px container (78px columns, 24px gutters). Outer margin `--gutter = clamp(30px, 8.33vw, 120px)` is shared by the nav, hero, content and footer.
- **Text measure:** 667px.
- **Section rhythm:** `--section-y = clamp(50px, 9.26vw, 133px)`.
- **Split sections:** images span 6 + 5 columns. Layout C bleeds a square off the right edge.

## 6. Depth & Elevation
Flat. The only shadow is on floating menus (`0 24px 40px -24px rgb(0 0 0 / .18)`).

## 7. Do's and Don'ts
- **Do** let one strong photo or colour field lead each section, and keep every interactive target at 24px or larger.
- **Don't** use orange for body text, round corners, put cards inside cards, add gradients or text-shadows, or set a heading longer than two lines.

## 8. Responsive Behavior
Breakpoints are at 768px (grid on) and 1024px (full nav and desktop type). Below 1024px, nav collapses to "Menu ▾", a full-height panel. Below 768px, splits stack.

## 9. Agent Prompt Guide
"Follow DESIGN.md. Add a section in the split-section pattern using --c-blue, two Pexels images (6 + 5 columns), no new colours or fonts."
