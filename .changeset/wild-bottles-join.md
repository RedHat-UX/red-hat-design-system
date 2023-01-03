---
"@rhds/elements": minor
---

✨ Added `ScreenSizeController`

```js
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';

export class RhPagination extends LitElement {

  #screenSize = new ScreenSizeController(this);

  render() {
    const { mobile, size } = this.#screenSize;
    return html`
    <div id="container" class=${classMap({ mobile, [size as string]: true })}>
      ...
    </div>
    `
  }
}
```
