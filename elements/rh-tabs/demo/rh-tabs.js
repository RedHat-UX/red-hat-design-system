
import '@rhds/elements/rh-tabs/rh-tabs.js';
import '@rhds/elements/rh-context-provider/rh-context-provider.js';

import '@patternfly/pfe-icon';

const main = document.querySelector('main');
const root = main?.shadowRoot ?? document;

const tabs = root.querySelectorAll('rh-tabs');
const providers = root.querySelectorAll('rh-context-provider');
const inset = document.querySelector('rh-tabs[inset]');

function variantToggle() {
  tabs.forEach(t => {
    t.toggleAttribute('box');
  });
}
for (const input of document.querySelectorAll('input[name="variant"]')) {
  input.addEventListener('change', variantToggle);
}

function surfaceToggle(event) {
  providers.forEach(surface => {
    if (event.target.value === 'darkest') {
      main.classList.add('dark');
    } else {
      main.classList.remove('dark');
    }
    surface.setAttribute('color-palette', event.target.value);
  });
}
for (const input of document.querySelectorAll('input[name="surface"]')) {
  input.addEventListener('change', surfaceToggle);
}

function themeToggle(event) {
  tabs.forEach(t => {
    if (event.target.value === 'base') {
      t.setAttribute('theme', event.target.value);
    } else {
      t.removeAttribute('theme');
    }
  });
}
for (const input of document.querySelectorAll('input[name="theme"]')) {
  input.addEventListener('change', themeToggle);
}

function insetToggle(event) {
  inset.inset = event.target.value;
}

for (const input of document.querySelectorAll('input[name="inset"]')) {
  input.addEventListener('change', insetToggle);
}
