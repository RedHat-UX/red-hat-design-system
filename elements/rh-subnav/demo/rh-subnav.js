import '@rhds/elements/rh-subnav/rh-subnav.js';
import '@rhds/elements/lib/elements/rh-context-provider/rh-context-provider.js';

import '@patternfly/elements/pf-icon/pf-icon.js';

const demo = document.getElementById('demo');
demo.addEventListener('click', e => {
  for (const link of demo.querySelectorAll('a')) {
    if (e.target === link) { e.preventDefault(); }
    link.toggleAttribute('active', (e.target === link));
  }
});
