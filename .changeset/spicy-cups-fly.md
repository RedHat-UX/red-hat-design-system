---
"@rhds/elements": minor
---
⚛️  Added React wrapper components

You can now more easily integrate RHDS elements into your React apps by importing our wrapper components

First, make sure that you list `@lit/react` as a dependency in your project

```sh
npm install --save @lit/react
```

Then import the element components you need and treat them like any other react component

```js
import { Tabs } from '@rhds/elements/react/rh-tabs/rh-tabs.js';
import { Tab } from '@rhds/elements/react/rh-tabs/rh-tab.js';
import { TabPanel } from '@rhds/elements/react/rh-tabs/rh-tab-panel.js';

import { useState } from 'react';

const tabs = [
  { heading: 'Hello Red Hat', content: 'Let\'s break down silos' },
  { heading: 'Web components', content: 'They work everywhere' }
];

function App() {
  const [index, setExpanded] = useState(-1);
  return (
    <span>expanded {expanded}</span>
    <Tabs>{tabs.map(({ heading, content }, i) => (
      <Tab slot="tab" onExpand={() => setExpanded(i)}>{heading}</Tab>
      <TabPanel>{content}</TabPanel>))}
    </Tabs>
  );
}
```
