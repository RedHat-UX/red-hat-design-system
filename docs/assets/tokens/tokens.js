import '@rhds/elements/rh-card/rh-card.js';
import '@rhds/elements/rh-code-block/rh-code-block.js';
import '@rhds/elements/rh-cta/rh-cta.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import '@rhds/elements/rh-footer/rh-footer-universal.js';

// search bar
import '/assets/uxdot-search.js';
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
    const toCopy = text.trim();
    await navigator.clipboard.writeText(toCopy);
    toast(toCopy);
  });
}

// colour variants
for (const details of document.querySelectorAll('.variants details')) {
  details.addEventListener('toggle', function(event) {
    event.target.closest('tr.variants')?.classList.toggle('open', event.target.open);
  });
}

let lastToast;

async function toast(message) {
  await import('@rhds/elements/rh-alert/rh-alert.js');
  const alert = document.createElement('rh-alert');
  alert.dismissable = true;
  alert.state = 'info';
  const heading = document.createElement('h2');
  heading.textContent = 'Copied';
  heading.slot = 'header';
  alert.append(heading);
  alert.append(message);
  alert.style.position = 'fixed';
  alert.style.margin = '0';
  alert.style.setProperty('z-index', '1000');
  alert.style.setProperty('inset-inline-end', 'var(--rh-space-xl)');
  alert.style.setProperty('inset-block-start', 'var(--rh-space-xl)');
  alert.animate([
    { translate: '100% 0' },
    { translate: '0 0' },
  ], { duration: 200 });
  await lastToast;
  lastToast = new Promise(r => setTimeout(() => {
    alert.remove();
    r();
  }, 8000));
  document.body.append(alert);
}
