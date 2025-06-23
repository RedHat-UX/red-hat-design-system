
import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export interface RhNavigationVerticalContext {
  depth: number;
  variant?: 'learning-path';
}

export const context =
  createContextWithRoot<RhNavigationVerticalContext>(
    Symbol('rh-navigation-vertical-context'));
