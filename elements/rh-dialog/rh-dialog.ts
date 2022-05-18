import { customElement, property } from 'lit/decorators.js';

import { PfeModal } from '@patternfly/pfe-modal';

import styles from './rh-dialog.css';

/**
 * Dialog
 */
@customElement('rh-dialog')
export class RhDialog extends PfeModal {
  static readonly version = '{{version}}';

  static readonly styles = [...PfeModal.styles, styles];

  @property({ reflect: true }) variant?: 'video';
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-dialog': RhDialog;
  }
}
