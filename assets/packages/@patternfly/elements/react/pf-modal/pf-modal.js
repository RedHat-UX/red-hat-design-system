// pf-modal/pf-modal.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfModal } from '@patternfly/elements/pf-modal/pf-modal.js';
export const Modal = createComponent({
  tagName: 'pf-modal',
  elementClass: PfModal,
  react,
  events: {
    onOpen: 'open',
    onClose: 'close',
  },
});
