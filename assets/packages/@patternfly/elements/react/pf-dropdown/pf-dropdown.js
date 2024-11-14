// pf-dropdown/pf-dropdown.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfDropdown } from '@patternfly/elements/pf-dropdown/pf-dropdown.js';
export const Dropdown = createComponent({
  tagName: 'pf-dropdown',
  elementClass: PfDropdown,
  react,
  events: {
    onSelect: 'select',
    onOpen: 'open',
    onClose: 'close',
  },
});
