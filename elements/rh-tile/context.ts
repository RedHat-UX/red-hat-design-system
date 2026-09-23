import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export interface RhTileGroupContext {
  disabled: boolean;
  radio: boolean;
}

export const rhTileGroupContext = createContextWithRoot<Readonly<RhTileGroupContext>>(
  Symbol('rh-tile-group-context'),
);
