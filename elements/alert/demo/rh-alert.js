import '@rhds/elements/rh-context-provider/rh-context-provider.js';
import '@rhds/elements/rh-alert/rh-alert.js';

const dismissiableAlerts = document.querySelectorAll('rh-alert[dismissable]:not([prevent-default])');
const preventDefaultAlerts = document.querySelectorAll('rh-alert[prevent-default]');

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
