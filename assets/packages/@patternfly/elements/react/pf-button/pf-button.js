// pf-button/pf-button.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfButton } from '@patternfly/elements/pf-button/pf-button.js';
export const Button = createComponent({
  tagName: 'pf-button',
  elementClass: PfButton,
  react,
  events: {
    onClick: 'click',
  },
});
