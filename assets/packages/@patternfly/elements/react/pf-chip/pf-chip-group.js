// pf-chip/pf-chip-group.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfChipGroup } from '@patternfly/elements/pf-chip/pf-chip-group.js';
export const ChipGroup = createComponent({
  tagName: 'pf-chip-group',
  elementClass: PfChipGroup,
  react,
  events: {
    onExpand: 'expand',
    onRemove: 'remove',
  },
});
