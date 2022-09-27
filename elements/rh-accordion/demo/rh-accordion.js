import '@patternfly/pfe-band';
import '@rhds/elements/rh-cta/rh-cta.js';
import '@rhds/elements/rh-accordion/rh-accordion.js';
import '@rhds/elements/rh-accordion/rh-accordion-header.js';
import '@rhds/elements/rh-accordion/rh-accordion-panel.js';

const root = document.querySelector('[data-demo="rh-accordion"]')?.shadowRoot ?? document;

root.querySelector('rh-accordion');
