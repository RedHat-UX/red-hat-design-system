import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export interface RhAccordionContext {
  accents?: 'inline' | 'bottom';
}

export const context = createContextWithRoot<RhAccordionContext>(Symbol('rh-accordion-context'));
