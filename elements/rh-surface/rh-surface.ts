import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { colorSchemeProvider, type ColorPalette } from '../../lib/context/color/provider.js';
import { colorSchemeConsumer } from '../../lib/context/color/consumer.js';

import styles from './rh-surface.css';

/**
 * Surfaces are content containers with a color palette which provide a theme
 * (i.e. a background color as well as accessible font colors) to their child
 * elements. Use surface only when other containers like card or accordion
 * are inappropriate.
 *
 * @summary Provides background color context for elements placed on top
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
@colorSchemeProvider
@colorSchemeConsumer
export class RhSurface extends LitElement {
  static readonly styles = [styles];

  /**
   * Sets color palette, which affects the element's styles as well as
   * descendants' color theme. The default surface color palette is 'lightest',
   * Surface always overrides the parent's color context.
   * Your theme will influence these colors so check there first if you are seeing inconsistencies.
   * See [CSS Custom Properties](#css-custom-properties) for default values
   */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  render() {
    return html`<slot id="slot" @slotchange=${this.#onSlotchange}></slot>`;
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
