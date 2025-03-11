import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export interface RhChipGroupContext {
  size?: 'sm' | 'lg';
}

export const context = createContextWithRoot<RhChipGroupContext>(Symbol('rh-chip-group-context'));
