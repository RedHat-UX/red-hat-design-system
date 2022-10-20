import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

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
 * @slot icon - Contains the labels's icon, e.g. web-icon-alert-success.
 * @slot -  Must contain the text for the label.
 *
 * @csspart icon - container for the label icon
 *
 * @cssprop {<length>} --rh-label-padding-block-start   {@default `4px`}
 * @cssprop {<length>} --rh-label-padding-inline-end    {@default `8px`}
 * @cssprop {<length>} --rh-label-padding-block-end     {@default `4px`}
 * @cssprop {<length>} --rh-label-padding-inline-start  {@default `8px`}
 *
 * @cssprop {<length>} --rh-label-margin-inline-end     {@default `4px`}
 *
 *
 */
@customElement('rh-label')
export class RhLabel extends BaseLabel {
  static readonly styles = [styles];

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
