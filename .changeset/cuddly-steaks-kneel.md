---
"@rhds/elements": minor
---
`<rh-code-block>`: Added `copy` event. Modify the `event.content` field to change the text to be copied.

```js
import {RhCodeBlockCopyEvent} from '@rhds/elements/rh-code-block/rh-code-block.js';

document.body.addEventListener('copy', function(event) {
  if (event instanceof RhCodeBlockCopyEvent) {
    // remove prompt and surrounding whitespace from the start of the string
    event.content = event.content.replace(/^\s*\$|#\s*/, '');
  }
});
```
