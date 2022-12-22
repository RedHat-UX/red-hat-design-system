---
"@rhds/elements": patch
---

`<rh-footer>`: fixed several bugs:
  - links should be styled to match dark context colors. #307
  - `social-links` slot should not override the `social-links` internal 
    `rh-footer-links`
  - `social-links` hrefs should point to the default RHDC links
