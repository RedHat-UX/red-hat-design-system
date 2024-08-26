// pf-accordion/pf-accordion.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfAccordion } from '@patternfly/elements/pf-accordion/pf-accordion.js';
export const Accordion = createComponent({
  tagName: 'pf-accordion',
  elementClass: PfAccordion,
  react,
  events: {
    onExpand: 'expand',
    onCollapse: 'collapse',
  },
});
