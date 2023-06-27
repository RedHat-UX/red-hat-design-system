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
 * @summary  Highlights an element to add clarity or draw attention
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
