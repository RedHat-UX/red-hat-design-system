
import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export interface RhNavigationVerticalContext {
  depth: number;
  bordered?: 'inline-start';
}

export const context =
  createContextWithRoot<RhNavigationVerticalContext>(
    Symbol('rh-navigation-vertical-context'));
