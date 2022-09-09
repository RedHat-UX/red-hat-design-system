import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { BaseLabel } from '@patternfly/pfe-label/BaseLabel.js';

import styles from './rh-label.css';

export type LabelVariant = (
  | 'filled'
);

export type LabelColor = (
  | 'blue'
  | 'cyan'
  | 'green'
  | 'orange'
  | 'purple'
  | 'red'
  | 'grey'
)

/**
 * Tooltip
 * @slot - Place element content here
 */
@customElement('rh-label')
export class RhLabel extends BaseLabel {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  /**
   * If rh-icon uses the set attribute from pfe-icon proposal
   * we'll need to pass the set along to the embedded rh-icon
   * however this will be updated in the BaseLabel class and would
   * not appear here.  Acting only as a reminder.
   */
  /* @property({ reflect: true }) set = ''; */

  /**
   * RhIcon does not yet exist, so we are using pfe-icon until available
   * <rh-icon ?hidden=${!this.icon} icon=${this.icon} set="${this.set}" size="sm"></rh-icon>
   */
  protected renderDefaultIcon() {
    return !this.icon ? '' : html`
      <pfe-icon ?hidden=${!this.icon} icon=${this.icon} size="sm"></pfe-icon>
    `;
  }

  protected renderSuffix() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-label': RhLabel;
  }
}
