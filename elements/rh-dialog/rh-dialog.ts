import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { classMap } from 'lit/directives/class-map.js';
import { PfeModal } from '@patternfly/pfe-modal';
import { RHDSScreenSizeController } from '../../lib/RHDSScreenSizeController.js';

import styles from './rh-dialog.css';

/**
 * Dialog
 */
@customElement('rh-dialog')
export class RhDialog extends PfeModal {
  static readonly version = '{{version}}';

  static readonly styles = [...PfeModal.styles, styles];

  #screenSize = new RHDSScreenSizeController(this);

  @property({ reflect: true }) variant?: 'video';

  @property({ reflect: true, type: Boolean }) open = false;

  render() {
    const { mobile } = this.#screenSize;
    return html`
      <div id="rhds-wrapper" class=${classMap({ mobile })}>${super.render()}</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-dialog': RhDialog;
  }
}
