import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import { RhButton } from '@rhds/elements/rh-button/rh-button.js';
import { RhAlert } from '@rhds/elements/rh-alert/rh-alert.js';

document.addEventListener('click', async function(event) {
  if (event.target instanceof RhButton) {
    const { icon, set } = event.target.parentElement.querySelector('rh-icon[icon][set]');
    if (icon && set) {
      const html = /* html*/`<rh-icon set="${set}" icon="${icon}"></rh-icon>`;
      await navigator.clipboard.writeText(html);
      const message = html;
      await RhAlert.toast({ heading: 'Copied', message });
    }
  }
});
