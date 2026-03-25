## Toasting alerts

Toast alerts are created with the static `RhAlert.toast()` method. Full API
options, accessibility considerations, layout, and a live demo are documented on
the [Alert pattern](/patterns/alert/) page. Do not author
`<rh-alert variant="toast">` directly in HTML; use the JavaScript API.

```js rhcodeblock
import { RhAlert } from '@rhds/elements/rh-alert/rh-alert.js';

await RhAlert.toast({ state: 'success', message: 'Saved!' });
```
