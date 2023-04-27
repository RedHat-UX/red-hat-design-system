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
 * Tag
 * @property {string} [icon=''] - The icon to display in the label.
 * @property {string} [variant='filled']  - The variant of the label.
 * @property {string} [color=''] - The color of the label.
 * @cssprop --rh-tag-margin-inline-end {@default 4px}
 * @cssprop --rh-tag-padding-block-start {@default 4px}
 * @cssprop --rh-tag-padding-block-end {@default 4px}
 * @cssprop --rh-tag-padding-inline-start {@default 8px}
 * @cssprop --rh-tag-padding-inline-end {@default 8px}
 * @cssprop --rh-border-radius-pill {@default 64px}
 * @cssprop --rh-border-width-sm {@default 1px}
 * @cssprop --rh-color-accent-base-on-light {@default #0066cc}
 * @cssprop --rh-color-blue-50 {@default #e7f1fa}
 * @cssprop --rh-color-blue-100 {@default #bee1f4}
 * @cssprop --rh-color-blue-600 {@default #002952}
 * @cssprop --rh-color-border-subtle-on-light {@default #c7c7c7}
 * @cssprop --rh-color-cyan-50 {@default #f2f9f9}
 * @cssprop --rh-color-cyan-100 {@default #a2d9d9}
 * @cssprop --rh-color-cyan-300 {@default #009596}
 * @cssprop --rh-color-cyan-500 {@default #003737}
 * @cssprop --rh-color-green-50 {@default #f3faf2}
 * @cssprop --rh-color-green-100 {@default #bde5b8}
 * @cssprop --rh-color-green-500 {@default #3e8635}
 * @cssprop --rh-color-green-600 {@default #1e4f18}
 * @cssprop --rh-color-orange-50 {@default #fff6ec}
 * @cssprop --rh-color-orange-100 {@default #f4b678}
 * @cssprop --rh-color-orange-300 {@default #ec7a08}
 * @cssprop --rh-color-orange-700 {@default #3b1f00}
 * @cssprop --rh-color-purple-50 {@default #f2f0fc}
 * @cssprop --rh-color-purple-100 {@default #cbc1ff}
 * @cssprop --rh-color-purple-500 {@default #6753ac}
 * @cssprop --rh-color-purple-700 {@default #1f0066}
 * @cssprop --rh-color-red-50 {@default #faeae8}
 * @cssprop --rh-color-red-600 {@default #be0000}
 * @cssprop --rh-color-red-800 {@default #5f0000}
 * @cssprop --rh-color-surface-lighter {@default #f2f2f2}
 * @cssprop --rh-color-text-primary-on-light {@default #151515}
 * @cssprop --rh-font-size-body-text-sm {@default 0.875rem}
 * @cssprop --rh-space-md {@default 8px}
 * @cssprop --rh-space-xs {@default 4px}
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
