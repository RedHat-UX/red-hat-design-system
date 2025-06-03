import '@rhds/elements/rh-card/rh-card.js';
import '@rhds/elements/rh-code-block/rh-code-block.js';
import '@rhds/elements/rh-cta/rh-cta.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import '@rhds/elements/rh-footer/rh-footer-universal.js';

// search bar
import '@uxdot/elements/uxdot-search.js';

document
    .getElementById('search-input')
    .addEventListener('focus', async function() {
      const { init } = await import('/assets/javascript/search-tokens.js');
      init(document.getElementById('search-tokens'));
    }, { once: true });

// color variants
for (const details of document.querySelectorAll('.variants details')) {
  details.addEventListener('toggle', function(event) {
    event.target.closest('tr.variants')?.classList.toggle('open', event.target.open);
  });
}
