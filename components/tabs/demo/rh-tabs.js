import '@rhds/elements/rh-tabs/rh-tabs.js';
import '@rhds/elements/rh-context-provider/rh-context-provider.js';

import '@patternfly/elements/pf-icon/pf-icon.js';

const tabs = document.querySelectorAll('rh-tabs');
const inset = document.querySelector('#inset');

function variantToggle() {
  tabs.forEach(t => {
    if (t === inset) {
      return;
    }
    t.toggleAttribute('box');
  });
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

function insetToggle(event) {
  inset.inset = event.target.value;
}

for (const input of document.querySelectorAll('input[name="variant"]')) {
  input.addEventListener('change', variantToggle);
}

for (const input of document.querySelectorAll('input[name="theme"]')) {
  input.addEventListener('change', themeToggle);
}

for (const input of document.querySelectorAll('input[name="inset"]')) {
  input.addEventListener('change', insetToggle);
}
