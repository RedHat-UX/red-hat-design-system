// pf-select/pf-select.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfSelect as elementClass } from '@patternfly/elements/pf-select/pf-select.js';
export const Select = createComponent({
  tagName: 'pf-select',
  elementClass,
  react,
  events: {
    onChange: 'change',
    onOpen: 'open',
    onClose: 'close',
  },
});
