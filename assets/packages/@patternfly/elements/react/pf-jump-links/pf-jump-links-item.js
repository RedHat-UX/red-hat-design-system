// pf-jump-links/pf-jump-links-item.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfJumpLinksItem as elementClass } from '@patternfly/elements/pf-jump-links/pf-jump-links-item.js';
export const JumpLinksItem = createComponent({
  tagName: 'pf-jump-links-item',
  elementClass,
  react,
  events: {
    onSelect: 'select',
    onFocus: 'focus',
  },
});
