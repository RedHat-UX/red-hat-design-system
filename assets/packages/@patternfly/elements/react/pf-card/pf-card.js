// pf-card/pf-card.js
import { createComponent } from '@lit-labs/react';
import react from 'react';
import { PfCard as elementClass } from '@patternfly/elements/pf-card/pf-card.js';
export const Card = createComponent({
  tagName: 'pf-card',
  elementClass,
  react,
  events: {},
});