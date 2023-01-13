---
"@rhds/elements": patch
---

rh-tooltip should not have a public context consumer property for the themes as the user would be able to overwrite this value. This value is being made private.
