import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { classMap } from 'lit/directives/class-map.js';
import { observed } from '@patternfly/pfe-core/decorators/observed.js';
import { PfModal } from '@patternfly/elements/pf-modal/pf-modal.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';

import styles from './rh-dialog.css';

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
 * @summary Displays important information to users without requiring them to navigate away from the page
 *
 * @cssprop {<color>} --rh-dialog-close-button-color
 *           Sets the dialog close button color.
 *          {@default `var(--rh-color-icon-secondary-on-dark, #ffffff)`}
 * @cssprop --rh-border-radius-default
 * @cssprop --rh-color-gray-90-rgb
 * @cssprop --rh-color-icon-secondary-on-dark
 * @cssprop --rh-color-icon-secondary-on-light
 * @cssprop --rh-color-icon-subtle
 * @cssprop --rh-color-surface-lightest
 * @cssprop --rh-color-text-primary-on-light
 * @cssprop --rh-modal-video-aspect-ratio
 * @cssprop --rh-opacity-60
 * @cssprop --rh-space-md
 * @cssprop --rh-space-sm
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
      <div id="rhds-wrapper" class=${classMap({ mobile })}>
        ${super.render()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-dialog': RhDialog;
  }
}
