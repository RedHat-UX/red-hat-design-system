import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { BaseLabel } from '@patternfly/elements/pf-label/BaseLabel.js';

import '@patternfly/elements/pf-icon/pf-icon.js';

import styles from './rh-tag.css';

export type TagColor = (
  | 'blue'
  | 'cyan'
  | 'green'
  | 'orange'
  | 'purple'
  | 'red'
  | 'grey'
)


/**
 * A tag is a caption added to an element for better clarity and user convenience.
 * @property {string} [icon=''] - The icon to display in the label.
 * @property {string} [variant='filled']  - The variant of the label.
 * @property {string} [color=''] - The color of the label.
 * @cssprop --rh-tag-margin-inline-end {@default 4px}
 * @cssprop --rh-tag-padding-block-start {@default 4px}
 * @cssprop --rh-tag-padding-block-end {@default 4px}
 * @cssprop --rh-tag-padding-inline-start {@default 8px}
 * @cssprop --rh-tag-padding-inline-end {@default 8px}
 *
 */
@customElement('rh-tag')
export class RhTag extends BaseLabel {
  static readonly styles = [styles];

  @property() icon?: string;

  @property() variant?: 'filled';

  @property() color?: TagColor;

  /**
   * RhIcon does not yet exist, so we are using pfe-icon until available
   * <rh-icon ?hidden=${!this.icon} icon=${this.icon} set="${this.set}" size="sm"></rh-icon>
   */
  protected renderDefaultIcon() {
    return !this.icon ? '' : html`
      <pf-icon ?hidden=${!this.icon} icon="${this.icon}"></pf-icon>
    `;
  }

  protected renderSuffix() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tag': RhTag;
  }
}
