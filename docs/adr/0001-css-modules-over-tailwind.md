# ADR 0001: CSS Modules over Tailwind

**Status:** Accepted · **Date:** 2026-10-29

## Context
The brief is a learning exercise in typography, spacing, a 12-column grid and a multi-column footer. Values come from a measured reference (1440px).

## Decision
Use plain CSS Modules with design tokens as CSS custom properties in `global.css`.

## Consequences
- **Pro:** zero runtime and no build plugin, the grid stays readable in one place, and tokens match DESIGN.md one-to-one.
- **Con:** no utility shorthand, so hover/focus states are written by hand. That's acceptable at 4 components.
