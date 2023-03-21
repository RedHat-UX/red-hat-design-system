---
"@rhds/elements": patch
---

`<rh-global-footer>`: 
- Changed slotted default logo so that link uses `aria-label` (instead of incorrectly using `alt` attribute) and its SVG uses a `<title>` element (instead of incorrectly using `title` attribute).
- Added `lightdomAccessibleTextController` to check link text and button labels for accessibility

