---
"@rhds/elements": minor
---

`<rh-tile>`: added new public CSS custom properties for theming border width, border color per state, disabled text, and focus ring (`--rh-tile-border-width`, `--rh-tile-focus-border-width`, `--rh-tile-hover-border-color`, `--rh-tile-active-border-color`, `--rh-tile-disabled-text-color`, `--rh-tile-focus-outline-color`). Border color and width now shift on hover/focus/active states. Focus border styles also apply via `:host(:focus-within)` for checkable tiles.