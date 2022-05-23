---
"@rhds/elements": minor
---

Add `RHDSScreenSizeController`

```js
import { RHDSScreenSizeController } from '../../lib/RHDSScreenSizeController.js';

export class RhPagination extends LitElement {

  #screenSize = new RHDSScreenSizeController(this);

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
