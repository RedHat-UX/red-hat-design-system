// pf-accordion/pf-accordion.js
import { createComponent } from '@lit-labs/react';
import react from 'react';
import { PfAccordion as elementClass } from '@patternfly/elements/pf-accordion/pf-accordion.js';
export const Accordion = createComponent({
  tagName: 'pf-accordion',
  elementClass,
  react,
  events: {
    onExpand: 'expand',
    onCollapse: 'collapse',
  },
});