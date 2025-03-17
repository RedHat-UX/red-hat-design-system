import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export interface RhNavigationPrimaryItemContext {
  compact: boolean;
}

export const context =
  // eslint-disable-next-line @stylistic/max-len
  createContextWithRoot<RhNavigationPrimaryItemContext>(Symbol('rh-navigation-primary-item-context'));

export interface RhNavigationPrimaryItemMenuContext {
  layout: 'popover' | undefined;
}
export const menuContext =
  createContextWithRoot<RhNavigationPrimaryItemMenuContext>(
    Symbol('rh-navigation-primary-item-menu-context')
  );
