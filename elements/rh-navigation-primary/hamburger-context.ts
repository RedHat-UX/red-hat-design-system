import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export interface RhNavigationPrimaryHamburgerContext {
  hamburger: boolean;
}
export const context =
  createContextWithRoot<RhNavigationPrimaryHamburgerContext>(
    Symbol('rh-navigation-primary-hamburger-context'));
