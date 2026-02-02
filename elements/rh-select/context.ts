import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export interface SelectOptionsContext {
  getPosition(option: Element): { posInSet: number; setSize: number };
}

export const selectOptionsContext =
  createContextWithRoot<SelectOptionsContext>(Symbol('rh-select-options-context'));
