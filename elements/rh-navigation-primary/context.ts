import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export interface RhNavigationPrimaryItemContext {
  compact: boolean;
}
export const context =
  // eslint-disable-next-line @stylistic/max-len
  createContextWithRoot<RhNavigationPrimaryItemContext>(Symbol('rh-navigation-primary-item-context'));

export interface RhNavigationPrimaryHamburgerContext {
  hamburger: boolean;
}
export const hamburgerContext =
  // eslint-disable-next-line @stylistic/max-len
  createContextWithRoot<RhNavigationPrimaryHamburgerContext>(Symbol('rh-navigation-primary-hamburger-context'));
