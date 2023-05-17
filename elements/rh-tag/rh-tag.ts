import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

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
  | 'white'
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

  @colorContextConsumer() private on?: ColorTheme;

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

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
