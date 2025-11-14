import '@rhds/elements/rh-card/rh-card.js';
import '@rhds/elements/rh-code-block/rh-code-block.js';
import '@rhds/elements/rh-cta/rh-cta.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import '@rhds/elements/rh-footer/rh-footer-universal.js';

// color variants
for (const details of document.querySelectorAll('.variants details')) {
  details.addEventListener('toggle', function(event) {
    event.target.closest('tr.variants')?.classList.toggle('open', event.target.open);
  });
}
