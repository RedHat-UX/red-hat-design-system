import '@rhds/elements/rh-dialog/rh-dialog.js';
import '@rhds/elements/rh-cta/rh-cta.js';
import '@patternfly/pfe-band';
import '@patternfly/pfe-button';
import '@patternfly/pfe-card';

const root = document.querySelector('[data-demo="rh-dialog"]')?.shadowRoot ?? document;

const dialogs = root.querySelectorAll('rh-dialog');

const customTriggerModal = root.querySelector('#custom-modal');

customTriggerModal?.setTrigger(root.querySelector('#custom-trigger'));


