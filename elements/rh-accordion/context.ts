import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export interface RhAccordionContext {
  accents?: 'inline' | 'bottom';
  large: boolean;
}

export const context = createContextWithRoot<RhAccordionContext>(Symbol('rh-accordion-context'));
