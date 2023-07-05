// pf-accordion/pf-accordion-header.js
import { createComponent } from '@lit-labs/react';
import react from 'react';
import { PfAccordionHeader as elementClass } from '@patternfly/elements/pf-accordion/pf-accordion-header.js';
export const AccordionHeader = createComponent({
  tagName: 'pf-accordion-header',
  elementClass,
  react,
  events: {
    onChange: 'change',
  },
});