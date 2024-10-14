import type { RhTab } from './rh-tab.js';

import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export interface RhTabsContext {
  activeTab?: RhTab;
  firstTab?: RhTab;
  lastTab?: RhTab;
  box?: 'box' | 'inset';
  manual: boolean;
  vertical: boolean;
}

export const context = createContextWithRoot<RhTabsContext>(Symbol('rh-tabs-context'));
