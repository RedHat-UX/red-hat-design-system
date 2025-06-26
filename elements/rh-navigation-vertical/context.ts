
import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export interface RhNavigationVerticalContext {
  depth: number;
  variant?: 'learning-path';
  bordered?: 'inline-start';
}

export const context =
  createContextWithRoot<RhNavigationVerticalContext>(
    Symbol('rh-navigation-vertical-context'));
