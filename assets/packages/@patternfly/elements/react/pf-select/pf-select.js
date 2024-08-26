// pf-select/pf-select.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfSelect } from '@patternfly/elements/pf-select/pf-select.js';
export const Select = createComponent({
  tagName: 'pf-select',
  elementClass: PfSelect,
  react,
  events: {
    onOpen: 'open',
    onClose: 'close',
  },
});
