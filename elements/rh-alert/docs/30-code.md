## Toasting alerts

<rh-alert state="caution">
  <h3 slot="header">Accessibility considerations</h3>
  <p>There are accessibility considerations to keep in mind when using toasts. See our <a href="/patterns/alert/guidelines/">toast pattern accessibility guidelines</a> for more information.</p>
</rh-alert>

Toast alerts are created with the static `RhAlert.toast()` method. Full API
options, accessibility considerations, layout, and a live demo are documented on
the [Alert pattern](/patterns/alert/) page. Do not author
`<rh-alert variant="toast">` directly in HTML; use the JavaScript API.

```js rhcodeblock
import { RhAlert } from '@rhds/elements/rh-alert/rh-alert.js';

await RhAlert.toast({ state: 'success', message: 'Saved!' });
```
