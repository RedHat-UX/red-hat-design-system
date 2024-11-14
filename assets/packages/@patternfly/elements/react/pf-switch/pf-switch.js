// pf-switch/pf-switch.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfSwitch } from '@patternfly/elements/pf-switch/pf-switch.js';
export const Switch = createComponent({
  tagName: 'pf-switch',
  elementClass: PfSwitch,
  react,
  events: {
    onChange: 'change',
  },
});
