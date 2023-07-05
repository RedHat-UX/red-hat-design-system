// pf-icon/pf-icon.js
import { createComponent } from '@lit-labs/react';
import react from 'react';
import { PfIcon as elementClass } from '@patternfly/elements/pf-icon/pf-icon.js';
export const Icon = createComponent({
  tagName: 'pf-icon',
  elementClass,
  react,
  events: {
    onLoad: 'load',
    onError: 'error',
  },
});