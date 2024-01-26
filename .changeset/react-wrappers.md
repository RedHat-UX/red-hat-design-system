---
"@rhds/elements": minor
---
React wrappers: Add automatically-generated react wrapper components

```jsx
import { Card } from '@rhds/elements/react/rh-card/rh-card.js';
import { Cta } from '@rhds/elements/react/rh-cta/rh-cta.js';

export const CardView = () => (
  <Card>
    <h2 slot="header">Card!</h2>
    <p>For a legacy-compatible framework experience</p>
    <Cta slot="footer">
      <a href="https://ux.redhat.com">Read more</a>
    </Cta>
  </Card>
)
```
