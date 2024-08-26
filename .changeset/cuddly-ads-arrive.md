---
"@rhds/elements": minor
---
`<rh-alert>` added static `toast` method

```js
import { RhAlert } from '@rhds/elements/rh-alert/rh-alert.js';

RhAlert.toast({
  state: 'warning',
  heading: 'Careful',
  message: 'Toast is high in calories!'
});
```
