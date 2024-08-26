// pf-accordion/pf-accordion-header.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfAccordionHeader } from '@patternfly/elements/pf-accordion/pf-accordion-header.js';
export const AccordionHeader = createComponent({
  tagName: 'pf-accordion-header',
  elementClass: PfAccordionHeader,
  react,
  events: {
    onChange: 'change',
  },
});
