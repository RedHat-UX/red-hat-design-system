import type { ColorPalette } from '@rhds/elements/lib/context/color/provider.js';
import type { ColorTheme } from '@rhds/elements/lib/context/color/consumer.js';

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { colorContextProvider } from '@rhds/elements/lib/context/color/provider.js';
import consumerStyles from '@rhds/tokens/css/color-context-consumer.css.js';

import styles from './rh-surface.css';
import { classMap } from 'lit/directives/class-map.js';

/**
 * Surfaces are content containers with a color palette which provide a theme
 * (i.e. a background color as well as accessible font colors) to their child
 * elements. Use surface only when other containers like card or accordion
 * are inappropriate.
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
  static readonly styles = [styles, consumerStyles];

  /**
   * Sets color palette, which affects the element's styles as well as descendants' color theme.
   * Overrides parent color context.
   * Your theme will influence these colors so check there first if you are seeing inconsistencies.
   * See [CSS Custom Properties](#css-custom-properties) for default values
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  get #on() {
    return this.colorPalette?.replace(/e(st|r)/, '') ?? 'light';
  }

  render() {
    return html`<slot class="${classMap({ on: true, [this.#on]: true })}" @slotchange=${this.#onSlotchange}></slot>`;
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
