// pf-chip/pf-chip.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfChip } from '@patternfly/elements/pf-chip/pf-chip.js';
export const Chip = createComponent({
  tagName: 'pf-chip',
  elementClass: PfChip,
  react,
  events: {
    onRemove: 'remove',
    onClick: 'click',
  },
});
