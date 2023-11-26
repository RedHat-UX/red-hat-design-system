import '@rhds/elements/rh-card/rh-card.js';
import '@rhds/elements/rh-code-block/rh-code-block.js';
import '@rhds/elements/rh-cta/rh-cta.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import '@rhds/elements/rh-footer/rh-footer-universal.js';

import { toast } from '../toast.js';

// search bar
import '/assets/elements/uxdot-search.js';

document
  .getElementById('search-input')
  .addEventListener('focus', async function() {
    const { init } = await import('/assets/search-tokens.js');
    init(document.getElementById('search-tokens'));
  }, { once: true });

// copy buttons
for (const button of document.querySelectorAll('.copy-button')) {
  button.addEventListener('click', async function(event) {
    const text = event.target.closest('[data-copy]')?.dataset?.copy ?? button.textContent;
    const message = text.trim();
    await navigator.clipboard.writeText(message);
    toast({ heading: 'Copied', message });
  });
}

// colour variants
for (const details of document.querySelectorAll('.variants details')) {
  details.addEventListener('toggle', function(event) {
    event.target.closest('tr.variants')?.classList.toggle('open', event.target.open);
  });
}
