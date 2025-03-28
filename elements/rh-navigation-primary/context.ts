import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export const context = createContextWithRoot<boolean>(
  Symbol('rh-navigation-primary-item-compact-context'),
);