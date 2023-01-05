---
"@rhds/elements": patch
---

chore: added the `lib/` directory to the exports in `package.json`.
  Users can now do things like import controllers into their own projects:

  ```js
  import { ScreenSizeController } from '@rhds/elements/lib/ScreenSizeController.js';
  ```
