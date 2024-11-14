// pf-jump-links/pf-jump-links.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfJumpLinks } from '@patternfly/elements/pf-jump-links/pf-jump-links.js';
export const JumpLinks = createComponent({
  tagName: 'pf-jump-links',
  elementClass: PfJumpLinks,
  react,
  events: {
    onToggle: 'toggle',
  },
});
