// pf-jump-links/pf-jump-links-item.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfJumpLinksItem } from '@patternfly/elements/pf-jump-links/pf-jump-links-item.js';
export const JumpLinksItem = createComponent({
  tagName: 'pf-jump-links-item',
  elementClass: PfJumpLinksItem,
  react,
  events: {
    onSelect: 'select',
    onFocus: 'focus',
  },
});
