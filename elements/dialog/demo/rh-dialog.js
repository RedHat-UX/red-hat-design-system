import '@rhds/elements/rh-button/rh-button.js';
import '@rhds/elements/rh-cta/rh-cta.js';
import '@rhds/elements/rh-dialog/rh-dialog.js';
import '@patternfly/elements/pf-panel/pf-panel.js';
import '@patternfly/elements/pf-button/pf-button.js';
import '@patternfly/elements/pf-card/pf-card.js';

const customTriggerModal = document.querySelector('#custom-modal');

customTriggerModal?.setTrigger(document.querySelector('#custom-trigger'));
