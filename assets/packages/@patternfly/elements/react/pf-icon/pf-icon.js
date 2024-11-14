// pf-icon/pf-icon.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfIcon } from '@patternfly/elements/pf-icon/pf-icon.js';
export const Icon = createComponent({
  tagName: 'pf-icon',
  elementClass: PfIcon,
  react,
  events: {
    onLoad: 'load',
    onError: 'error',
  },
});
