import '@patternfly/pfe-band';
import '@rhds/elements/rh-alert/rh-alert.js';

const root = document.querySelector('[data-demo="rh-alert"]')?.shadowRoot ?? document;

const dismissiableAlerts = root.querySelectorAll('rh-alert[dismissable]:not([prevent-default])');
const preventDefaultAlerts = root.querySelectorAll('rh-alert[prevent-default]');

dismissiableAlerts.forEach(alert => {
  // eslint-disable-next-line no-console
  alert.addEventListener('close', () => console.log('close'));
});
preventDefaultAlerts.forEach(alert => {
  alert.addEventListener('close', evt => {
    evt.preventDefault();
    // eslint-disable-next-line no-console
    console.log('default prevented');
  });
});
