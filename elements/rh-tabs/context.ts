import type { RhTab } from './rh-tab.js';

import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export const rhTabsActiveTabContext =
  createContextWithRoot<RhTab | undefined>(Symbol('rh-tabs-active-tab'));

export const rhTabsFirstTabContext =
  createContextWithRoot<RhTab | undefined>(Symbol('rh-tabs-first-tab'));

export const rhTabsLastTabContext =
  createContextWithRoot<RhTab | undefined>(Symbol('rh-tabs-last-tab'));

export const rhTabsBoxContext =
  createContextWithRoot<'box' | 'inset' | undefined>(Symbol('rh-tabs-box'));

export const rhTabsVerticalContext =
  createContextWithRoot<boolean>(Symbol('rh-tabs-vertcal'));

export const rhTabsManualContext =
  createContextWithRoot<boolean>(Symbol('rh-tabs-manual'));
