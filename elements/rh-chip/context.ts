import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export const rhChipGroupSizeCtx = createContextWithRoot<'sm' | undefined>('rh-chip-group-size');
