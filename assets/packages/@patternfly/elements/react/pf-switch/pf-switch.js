// pf-switch/pf-switch.js
import { createComponent } from '@lit-labs/react';
import react from 'react';
import { PfSwitch as elementClass } from '@patternfly/elements/pf-switch/pf-switch.js';
export const Switch = createComponent({
  tagName: 'pf-switch',
  elementClass,
  react,
  events: {
    onChange: 'change',
  },
});