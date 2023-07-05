// pf-label/pf-label.js
import { createComponent } from '@lit-labs/react';
import react from 'react';
import { PfLabel as elementClass } from '@patternfly/elements/pf-label/pf-label.js';
export const Label = createComponent({
  tagName: 'pf-label',
  elementClass,
  react,
  events: {
    onClose: 'close',
  },
});