// pf-tabs/pf-tab.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfTab } from '@patternfly/elements/pf-tabs/pf-tab.js';
export const Tab = createComponent({
  tagName: 'pf-tab',
  elementClass: PfTab,
  react,
  events: {
    onExpand: 'expand',
  },
});
