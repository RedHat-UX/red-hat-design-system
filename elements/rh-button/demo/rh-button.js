/* eslint-disable no-console */
import '@rhds/elements/rh-button/rh-button.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
Logger.debugLog(true);

const form = document.getElementById('form');
const fieldset = document.getElementById('form-set');
const submit = document.getElementById('submit');

/** @this {HTMLFormElement} */
function onSubmit(event) {
  event.preventDefault();
  this.elements.output.textContent = 'Submitted';
}

/** @this {HTMLFormElement} */
function onReset() {
  fieldset.disabled = false;
  this.elements.output.textContent = 'Pending';
}

/** @this{HTMLInputElement} */
function onChange({ target: { checked, dataset: { controls } } }) {
  const disabled = checked;
  switch (controls) {
    case 'fieldset':
      console.log('Setting fieldset disabled', disabled);
      fieldset.disabled = disabled;
      break;
    case 'button':
      console.log('Setting button disabled', disabled);
      submit.disabled = disabled;
      break;
  }
}

form.addEventListener('submit', onSubmit);
form.addEventListener('reset', onReset);
form.addEventListener('change', onChange);

