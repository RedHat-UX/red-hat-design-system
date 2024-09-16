import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import { RhButton } from '@rhds/elements/rh-button/rh-button.js';
import { RhAlert } from '@rhds/elements/rh-alert/rh-alert.js';

document.addEventListener('click', async function(event) {
  const { icon, iconSet } = event.target;
  if (event.target instanceof RhButton && icon && iconSet) {
    const html = /* html*/`<rh-icon set="${iconSet}" icon="${icon}"></rh-icon>`;
    await navigator.clipboard.writeText(html);
    // TODO: syntax highlight this
    const message = html;
    await RhAlert.toast({ heading: 'Copied', message });
  }
});
