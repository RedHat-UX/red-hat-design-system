import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';
import type { RhProgressStep } from './rh-progress-step.js';

export const compactContext = createContextWithRoot<boolean>(
  Symbol('rh-progress-stepper-compact-context'),
);


export const currentStepContext = createContextWithRoot<RhProgressStep | null>(
  Symbol('rh-progress-stepper-current-step'),
);
