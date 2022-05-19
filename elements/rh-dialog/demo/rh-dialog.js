import '@rhds/elements/rh-dialog/rh-dialog.js';
import '@patternfly/pfe-band';
import '@patternfly/pfe-cta';
import '@patternfly/pfe-card';

const root = document.querySelector('[data-demo="rh-dialog"]')?.shadowRoot ?? document;

const dialogs = root.querySelectorAll('rh-dialog');

const customTriggerModal = root.querySelector('#custom-modal');

customTriggerModal?.setTrigger(root.querySelector('#custom-trigger'));


