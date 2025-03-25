import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export const compactContext = createContextWithRoot<boolean>(
  Symbol('rh-navigation-primary-item-compact-context'),
);

export const hamburgerContext = createContextWithRoot<boolean>(
  Symbol('rh-navigation-primary-hamburger-context'),
);
