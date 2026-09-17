import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export const compactContext = createContextWithRoot<boolean>(
  Symbol('rh-footer-compact-context'),
);
