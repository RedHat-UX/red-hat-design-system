// pf-chip/pf-chip-group.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfChipGroup as elementClass } from '@patternfly/elements/pf-chip/pf-chip-group.js';
export const ChipGroup = createComponent({
  tagName: 'pf-chip-group',
  elementClass,
  react,
  events: {
    onExpand: 'expand',
    onRemove: 'remove',
  },
});
