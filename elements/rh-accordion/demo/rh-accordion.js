import '@rhds/elements/rh-context-provider/rh-context-provider.js';
import '@patternfly/pfe-accordion';
import '@rhds/elements/rh-cta/rh-cta.js';
import '@rhds/elements/rh-accordion/rh-accordion.js';

const root = document.querySelector('[data-demo="rh-accordion"]')?.shadowRoot ?? document;

root.querySelector('rh-accordion');
