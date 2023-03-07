const form = document.getElementById('form');
const fieldset = document.getElementById('fieldset');

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
  // eslint-disable-next-line no-console
  console.log(`${controls}.disabled =`, checked);
  const el = document.getElementById(controls);
  if (el) {
    el.disabled = checked;
  }
}

form.addEventListener('submit', onSubmit);
form.addEventListener('reset', onReset);
form.addEventListener('change', onChange);
