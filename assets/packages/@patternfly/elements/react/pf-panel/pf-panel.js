// pf-panel/pf-panel.js
import { createComponent } from '@lit-labs/react';
import react from 'react';
import { PfPanel as elementClass } from '@patternfly/elements/pf-panel/pf-panel.js';
export const Panel = createComponent({
  tagName: 'pf-panel',
  elementClass,
  react,
  events: {},
});