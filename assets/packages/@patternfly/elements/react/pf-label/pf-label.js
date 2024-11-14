// pf-label/pf-label.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfLabel } from '@patternfly/elements/pf-label/pf-label.js';
export const Label = createComponent({
  tagName: 'pf-label',
  elementClass: PfLabel,
  react,
  events: {
    onClose: 'close',
  },
});
