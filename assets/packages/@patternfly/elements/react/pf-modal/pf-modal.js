// pf-modal/pf-modal.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfModal as elementClass } from '@patternfly/elements/pf-modal/pf-modal.js';
export const Modal = createComponent({
  tagName: 'pf-modal',
  elementClass,
  react,
  events: {
    onOpen: 'open',
    onClose: 'close',
  },
});
