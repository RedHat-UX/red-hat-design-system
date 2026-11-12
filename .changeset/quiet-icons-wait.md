---
"@rhds/elements": patch
---

`<rh-icon>`: removed top-level await from the element module so CommonJS-based test runners such as Jest can parse it. Server-side icon sets now load through a `node` export condition instead.
