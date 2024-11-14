// pf-code-block/pf-code-block.js
import { createComponent } from '@lit/react';
import react from 'react';
import { PfCodeBlock } from '@patternfly/elements/pf-code-block/pf-code-block.js';
export const CodeBlock = createComponent({
  tagName: 'pf-code-block',
  elementClass: PfCodeBlock,
  react,
  events: {},
});
