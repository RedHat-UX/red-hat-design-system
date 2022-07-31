import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { classMap } from 'lit/directives/class-map.js';
import { observed } from '@patternfly/pfe-core/decorators/observed.js';
import { PfeModal } from '@patternfly/pfe-modal';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';

import styles from './rh-dialog.css';

/**
 * Dialog
 */
@customElement('rh-dialog')
export class RhDialog extends PfeModal {
  static readonly version = '{{version}}';

  static readonly styles = [...PfeModal.styles, styles];

  protected static closeOnOutsideClick = true;

  #screenSize = new ScreenSizeController(this);

  @property({ reflect: true }) type?: 'video';

  @observed
  @property({ reflect: true, type: Boolean }) open = false;

  render() {
    const { mobile } = this.#screenSize;
    return html`
      <div id="rhds-wrapper" class=${classMap({ mobile })}>
        ${super.render()}
      </div>
    `;
  }

  protected async _openChanged(oldValue?: boolean, newValue?: boolean): Promise<void> {
    super._openChanged(oldValue, newValue);
    if (this.type === 'video' && oldValue === true && newValue === false) {
      this.querySelector('video')?.pause?.();
      const iframe = this.querySelector('iframe');
      if (iframe?.src.match(/youtube/)) {
        const { pauseVideo } = await import('./yt-api.js');
        pauseVideo(iframe);
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-dialog': RhDialog;
  }
}
