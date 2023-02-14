import '@rhds/elements/rh-dialog/rh-dialog.js';
import '@rhds/elements/rh-cta/rh-cta.js';
import '@patternfly/elements/pf-panel/pf-panel.js';
import '@patternfly/elements/pf-button/pf-button.js';
import '@patternfly/elements/pf-card/pf-card.js';

const root = document.querySelector('[data-demo="rh-dialog"]')?.shadowRoot ?? document;

const customTriggerModal = root.querySelector('#custom-modal');

customTriggerModal?.setTrigger(root.querySelector('#custom-trigger'));


