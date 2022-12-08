import '@rhds/elements/rh-tabs/rh-tabs.js';
import '@rhds/elements/rh-context-provider/rh-context-provider.js';

const main = document.querySelector('main');

const root = main?.shadowRoot ?? document;

const surfaceInput = root.querySelectorAll('input[name="surface"]');
const themeInput = root.querySelectorAll('input[name="theme"]');
const variantInput = root.querySelectorAll('input[name="variant"]');

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
surfaceInput.forEach(input => input.addEventListener('change', surfaceToggle));

function themeToggle(event) {
  tabs.forEach(t => {
    if (event.target.value === 'base') {
      t.setAttribute('theme', event.target.value);
    } else {
      t.removeAttribute('theme');
    }
  });
}
themeInput.forEach(input => input.addEventListener('change', themeToggle));

const insetInput = root.querySelectorAll('input[name="inset"]');
function insetToggle(event) {
  const insets = root.querySelectorAll('rh-tabs[inset]');
  insets.forEach(inset => {
    inset.setAttribute('inset', event.target.value);
  });
}
insetInput.forEach(input => input.addEventListener('change', insetToggle));
