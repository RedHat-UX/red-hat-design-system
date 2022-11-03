import '@patternfly/pfe-band';
import '@rhds/elements/rh-alert/rh-alert.js';

const root = document.querySelector('[data-demo="rh-alert"]')?.shadowRoot ?? document;

const dismissiableAlerts = root.querySelectorAll('rh-alert[dismissable]');

dismissiableAlerts.forEach(alert => {
  // eslint-disable-next-line no-console
  alert.addEventListener('close', () => console.log('close'));
});

