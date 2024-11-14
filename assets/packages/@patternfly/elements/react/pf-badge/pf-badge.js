// pf-badge/pf-badge.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfBadge } from '@patternfly/elements/pf-badge/pf-badge.js';
export const Badge = createComponent({
  tagName: 'pf-badge',
  elementClass: PfBadge,
  react,
  events: {},
});
