# Caveman pass

## caveman-commit: commit subject audit
The rules: Conventional Commits types only, imperative mood, at most 50 characters (hard cap 72), and the why goes in the body.
Result: **12 of 14 subjects broke the 72-character cap or used a non-standard type** (`design`, `copy`, `a11y`, `motion`).
History stays as it is, because it's already shared in the report. Commits from now on use the left column's style.

| caveman-commit subject | was (chars) |
|---|---|
| `fix(a11y): enlarge hit areas, mark brand words no-translate` | 89 |
| `fix(ui): put h1 on first screen, equal page margins` | 87 |
| `style: balance headings, raise placeholder contrast` | 62 |
| `refactor(motion): drop hover zoom, make menu interruptible` | 55 |
| `fix(layout): wrap worst-case text, stop RTL overflow` | 81 |
| `perf: skip offscreen sections with content-visibility` | 91 |
| `fix(a11y): make mobile menu modal, add security headers` | 99 |
| `docs(copy): cut AI tells from about copy` | 62 |
| `fix: render back-to-top outside footer` | 88 |
| `chore: add AGENTS.md, handoff, git guardrails` | 100 |

## caveman-compress: AGENTS.md
`AGENTS.md` loads into every agent session, so each word costs on every turn. The compressed copy is `docs/AGENTS.caveman.md`, which keeps every rule, command, path and number.
Measured: words 245 -> 148  chars 1615 -> 1107  saving 31 %
