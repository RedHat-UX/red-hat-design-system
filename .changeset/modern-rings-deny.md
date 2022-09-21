---
"@rhds/elements": patch
---

Changes to `<rh-secondary-nav>`:
  - Removed component scaling with user font size preference by replacing em based spacers with space tokens. 
  - Updated font-family stacks with font tokens
  - Fixed nav bar height not adjusting when logo text wraps to 3 lines
  - Fixed button background on color-palette="darker"
  - Fixed focus out handler bug closing menu when clicking on flyout menu