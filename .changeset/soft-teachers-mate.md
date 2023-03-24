---
"@rhds/elements": major
---

`<rh-footer>`: removed the side-effect free `RhFooter.js` module.

If you were relying on this to extend `RhFooter`, instead import from `rh-footer.js` or use `whenDefined`, Note that `rh-footer` will be registered already, so choose a new custom element name.
BEFORE:
```js
import { RhFooter } from '@rhds/elements/rh-footer/RhFooter.js';
```
AFTER:
```js
import { RhFooter } from '@rhds/elements/rh-footer/rh-footer.js';
```
or 
```js
const RhFooter = await customElements.whenDefined('rh-footer');
```

**NOTE**: `<rh-footer>` is carefully developed to adhere to brand guidelines. If you find that your project has need to `extend RhFooter`, please reach out to the design systems team, so that we can work with you to use `<rh-footer>` as-is.
