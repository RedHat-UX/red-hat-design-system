// pf-clipboard-copy/pf-clipboard-copy.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfClipboardCopy } from '@patternfly/elements/pf-clipboard-copy/pf-clipboard-copy.js';
export const ClipboardCopy = createComponent({
  tagName: 'pf-clipboard-copy',
  elementClass: PfClipboardCopy,
  react,
  events: {
    onCopy: 'copy',
  },
});
