import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export interface RhNavigationItemContext {
  compact: boolean;
}

export const context =
  createContextWithRoot<RhNavigationItemContext>(Symbol('rh-navigation-item-context'));

export interface RhNavigationItemMenuContext {
  layout: 'popover' | undefined;
}
export const menuContext =
  createContextWithRoot<RhNavigationItemMenuContext>(
    Symbol('rh-navigation-item-menu-context')
  );
