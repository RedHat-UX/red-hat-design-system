// pf-tabs/pf-tab.js
import { createComponent } from '@lit-labs/react';
import react from 'react';
import { PfTab as elementClass } from '@patternfly/elements/pf-tabs/pf-tab.js';
export const Tab = createComponent({
  tagName: 'pf-tab',
  elementClass,
  react,
  events: {
    onTabExpand: 'tab-expand',
  },
});