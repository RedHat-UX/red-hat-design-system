// pf-panel/pf-panel.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfPanel } from '@patternfly/elements/pf-panel/pf-panel.js';
export const Panel = createComponent({
  tagName: 'pf-panel',
  elementClass: PfPanel,
  react,
  events: {},
});
