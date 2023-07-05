// pf-jump-links/pf-jump-links.js
import { createComponent } from '@lit-labs/react';
import react from 'react';
import { PfJumpLinks as elementClass } from '@patternfly/elements/pf-jump-links/pf-jump-links.js';
export const JumpLinks = createComponent({
  tagName: 'pf-jump-links',
  elementClass,
  react,
  events: {
    onToggle: 'toggle',
  },
});