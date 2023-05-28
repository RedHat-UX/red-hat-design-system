import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

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
 *
 * @summary  Displays a tag with a label and optional icon for additional context.
 * @cssprop  {<length>} --rh-tag-margin-inline-end
 *           The margin at the end of the direction parallel to the flow of the text.
 *           {@default 4px}
 * @cssprop  {<length>} --rh-tag-padding-block-start
 *           The padding at the start of the direction perpendicular to the flow of the text.
 *           {@default 4px}
 * @cssprop  {<length>} --rh-tag-padding-block-end
 *           The padding at the end of the direction perpendicular to the flow of the text.
 *           {@default 4px}
 * @cssprop  {<length>} --rh-tag-padding-inline-start
 *           The padding at the start of the direction parallel to the flow of the text.
 *           {@default 8px}
 * @cssprop  {<length>} --rh-tag-padding-inline-end
 *           The padding at the end of the direction parallel to the flow of the text.
 *           {@default 8px}
 * @cssprop --pf-icon--size
 * @cssprop --rh-border-radius-pill
 * @cssprop --rh-border-width-sm
 * @cssprop --rh-color-accent-base-on-light
 * @cssprop --rh-color-blue-50
 * @cssprop --rh-color-blue-100
 * @cssprop --rh-color-blue-400
 * @cssprop --rh-color-blue-600
 * @cssprop --rh-color-border-subtle-on-light
 * @cssprop --rh-color-cyan-50
 * @cssprop --rh-color-cyan-100
 * @cssprop --rh-color-cyan-300
 * @cssprop --rh-color-cyan-400
 * @cssprop --rh-color-cyan-500
 * @cssprop --rh-color-green-50
 * @cssprop --rh-color-green-100
 * @cssprop --rh-color-green-500
 * @cssprop --rh-color-green-600
 * @cssprop --rh-color-orange-50
 * @cssprop --rh-color-orange-100
 * @cssprop --rh-color-orange-300
 * @cssprop --rh-color-orange-500
 * @cssprop --rh-color-orange-700
 * @cssprop --rh-color-purple-50
 * @cssprop --rh-color-purple-100
 * @cssprop --rh-color-purple-500
 * @cssprop --rh-color-purple-700
 * @cssprop --rh-color-red-50
 * @cssprop --rh-color-red-600
 * @cssprop --rh-color-red-800
 * @cssprop --rh-color-surface-lighter
 * @cssprop --rh-color-surface-lightest
 * @cssprop --rh-color-text-primary-on-dark
 * @cssprop --rh-color-text-primary-on-light
 * @cssprop --rh-font-size-body-text-sm
 * @cssprop --rh-space-md
 * @cssprop --rh-space-xs
 *
 */
@customElement('rh-tag')
export class RhTag extends BaseLabel {
  static readonly styles = [styles];

  /** The icon to display in the label. */
  @property() icon?: string;

  /** The variant of the label. */
  @property() variant?: 'filled' | 'outline' = 'filled';

  /** The color of the label. */
  @property() color?: TagColor;

  @colorContextConsumer() private on?: ColorTheme;

  /**
   * RhIcon does not yet exist, so we are using pfe-icon until available
   * <rh-icon ?hidden=${!this.icon} icon=${this.icon} set="${this.set}" size="sm"></rh-icon>
   */
  protected renderDefaultIcon() {
    return !this.icon ? '' : html`
      <pf-icon ?hidden=${!this.icon} icon="${this.icon}"></pf-icon>
    `;
  }

  override render() {
    const { on = '' } = this;
    return html`
      <span class="${classMap({ [on]: !!on })}">${super.render()}</span>
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
