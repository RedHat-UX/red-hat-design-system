import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import contextStyle from '../../lib/context/color/context-color.css';
import styles from './rh-surface.css';

/**
 * Surfaces are content containers with a color palette which provide a theme
 * (i.e. a background color as well as accessible font colors) to their child
 * elements. Use surfaces only when other containers like `<rh-card>` or
 * `<rh-accordion>` are inappropriate.
 *
 * @slot - The `<rh-surface>` element has a single anonymous slot which accepts any content and does not provide additional layout styling
 *
 * @example A surface providing a theme to a spinner
 *          ```html
 *          <rh-surface color-palette="light">
 *            <rh-spinner>Loading...</rh-spinner>
 *          </rh-surface>
 *          ```
 */
@customElement('rh-surface')
export class RhSurface extends LitElement {
  static readonly styles = [contextStyle, styles];

  /**
   * Sets color palette, which affects the element's styles as well as descendants' color theme.
   * Overrides parent color context.
   * Your theme will influence these colors so check there first if you are seeing inconsistencies.
   * See [CSS Custom Properties](#css-custom-properties) for default values
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  render() {
    return html`<slot @slotchange=${this.#onSlotchange}></slot>`;
  }

  #onSlotchange() {
    this.requestUpdate('colorPalette');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-surface': RhSurface;
  }
}
