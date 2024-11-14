// pf-avatar/pf-avatar.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfAvatar } from '@patternfly/elements/pf-avatar/pf-avatar.js';
export const Avatar = createComponent({
  tagName: 'pf-avatar',
  elementClass: PfAvatar,
  react,
  events: {
    onLoad: 'load',
  },
});
