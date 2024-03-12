import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export const wrapContext = createContextWithRoot<boolean>(Symbol('rh-code-block-wrap'));
