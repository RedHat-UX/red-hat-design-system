import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export interface RhAccordionContext {
  accents?: 'inline' | 'bottom';
  large: boolean;
  /** if this accordion has at least one expanded panel */
  expanded: boolean;
}

export const context = createContextWithRoot<RhAccordionContext>(Symbol('rh-accordion-context'));
