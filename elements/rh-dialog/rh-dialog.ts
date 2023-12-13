import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { classMap } from 'lit/directives/class-map.js';
import { observed } from '@patternfly/pfe-core/decorators/observed.js';
import { PfModal } from '@patternfly/elements/pf-modal/pf-modal.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';

import styles from './rh-dialog.css';

import '@rhds/elements/lib/elements/rh-context-provider/rh-context-provider.js';

async function pauseYoutube(iframe: HTMLIFrameElement) {
  const { pauseVideo } = await import('./yt-api.js');
  await pauseVideo(iframe);
}

function openChanged(this: RhDialog, oldValue: unknown) {
  if (this.type === 'video' && oldValue === true && this.open === false) {
    this.querySelector('video')?.pause?.();
    const iframe = this.querySelector('iframe');
    if (iframe?.src.match(/youtube/)) {
      pauseYoutube(iframe);
    }
  }
}

/**
 * A dialog displays important information to users without requiring them to navigate away from the page.
 * @summary Communicates information requiring user input or action
 *
 * @cssprop {<number>} --rh-dialog-video-aspect-ratio
 * @cssprop {<color>} --rh-dialog-close-button-color
 *           Sets the dialog close button color.
 *          {@default `var(--rh-color-icon-secondary-on-dark, #ffffff)`}
 */
@customElement('rh-dialog')
export class RhDialog extends PfModal {
  static readonly version = '{{version}}';

  static readonly styles = [...PfModal.styles, styles];

  protected static closeOnOutsideClick = true;

  #screenSize = new ScreenSizeController(this);

  @property({ reflect: true }) type?: 'video';

  @observed(openChanged)
  @property({ reflect: true, type: Boolean }) open = false;

  render() {
    const { mobile } = this.#screenSize;
    return html`
      <rh-context-provider id="rhds-wrapper"
                           class="${classMap({ mobile })}"
                           color-palette="lightest">
        ${super.render()}
      </rh-context-provider>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-dialog': RhDialog;
  }
}
