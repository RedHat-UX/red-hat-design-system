---
"@rhds/elements": patch
---

Changes to `<rh-secondary-nav>`:
 - Updated styles for `rh-context-provider` in shadowroot to ensure cta centering.
 - **BREAKING**: Fixed incorrect color map for dark variant `color-palette="darker"` to `color-palette="dark"`
Changes to `<rh-secondary-nav>`:
 - Added `light` and `dark` to ColorPalette type
 - Added `light` and `dark` context-color css rules to match surface tokens `--rh-color-surface-light` and `--rh-color-surface-dark`