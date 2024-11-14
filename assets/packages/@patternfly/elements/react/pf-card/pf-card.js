// pf-card/pf-card.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfCard } from '@patternfly/elements/pf-card/pf-card.js';
export const Card = createComponent({
  tagName: 'pf-card',
  elementClass: PfCard,
  react,
  events: {},
});
