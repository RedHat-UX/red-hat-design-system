---
"@rhds/elements": patch
---

`<rh-secondary-nav>`:
 - updated styles for `rh-context-provider` in shadowroot to ensure cta 
   centering.
 - **BREAKING**: fixed incorrect color map for dark variant `color-palette="darker"` to `color-palette="dark"`

**Color Context**: added `light` and `dark` context-color css rules to match 
surface tokens `--rh-color-surface-light` and `--rh-color-surface-dark`
