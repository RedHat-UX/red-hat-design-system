import type { RhTab } from './rh-tab.js';

import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export interface RhTabsContext {
  box: 'box' | 'inset' | null;
  vertical: boolean;
  firstTab?: RhTab;
  lastTab?: RhTab;
}

export const context = createContextWithRoot<RhTabsContext>(Symbol('rh-tabs-context'));

