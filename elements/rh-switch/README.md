# Switch
A switch toggles the state of a setting (between on and off).


## Installation

If using npm/bundlers:

```bash
npm install @rhds/elements
```

Then once installed, import it to your application:

```js
import '@rhds/elements/rh-button/rh-button.js';
```

## Usage
A switch toggles the state of a setting (between on and off). Switches provide a more explicit, visible representation on a setting.


```html
<rh-switch id="a" checked></rh-switch>
<label for="a">
  <span data-state="on">Message when on</span>
  <span data-state="off" hidden>Message when off</span>
</label>
```
