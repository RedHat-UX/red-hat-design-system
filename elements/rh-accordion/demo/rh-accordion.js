import '@rhds/elements/rh-accordion/rh-accordion.js';

const root = document.querySelector('[data-demo="rh-accordion"]')?.shadowRoot ?? document;

/** @type {HTMLTemplateElement} */
const template = root.getElementById('new-panel');
const btn = root.querySelector('#addTabAndPanelBtn');
const RhAccordion = root.querySelector('rh-accordion#dynamic-accordion');

/** Append a new panel to the accordion */
function onClick() {
  RhAccordion.appendChild(template.content.cloneNode(true));
}

btn.addEventListener('click', onClick);
