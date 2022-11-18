import '@rhds/elements/rh-tabs/rh-tabs.js';
import '@rhds/elements/rh-context-provider/rh-context-provider.js';

const page = document.querySelector('main');

const root = page?.shadowRoot ?? document;

const variantInput = root.querySelectorAll('input[name="variant"]');
const themeInput = root.querySelectorAll('input[name="theme"]');

const tabs = root.querySelectorAll('rh-tabs');
const providers = root.querySelectorAll('rh-context-provider');

function variantToggle(event) {
  tabs.forEach(t => {
    if (event.target.value === 'box') {
      t.setAttribute(event.target.value, '');
    } else {
      t.removeAttribute('box');
    }
  });
}
variantInput.forEach(input => input.addEventListener('change', variantToggle));

function themeToggle(event) {
  providers.forEach(t => {
    if (event.target.value === 'darkest') {
      page.classList.add('dark');
    } else {
      page.classList.remove('dark');
    }
    t.setAttribute('color-palette', event.target.value);
  });
}
themeInput.forEach(input => input.addEventListener('change', themeToggle));
