import type { ColorTheme } from './consumer.js';

import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

/** The context object which acts as the key for providers and consumers */
export const context = createContextWithRoot<ColorTheme | null>('rh-color-context');
