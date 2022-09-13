---
"@rhds/elements": patch
---

Footer bug fixes

- secondary start slot not being used but still showing gap #488
- two column breakpoint on global footer not present #496
- tertiary slot in global footer has a margin-start padding that needs to be removed #498
- reduce the spacing beneath the primary footer nav / language switcher to match the xd #499
  - corrected the margin at Tablet, landscape breakpoint to 64px
- add max-width on footer-block child elements #524
- social icon size changed to 24px down from 28px (band aide) #525
