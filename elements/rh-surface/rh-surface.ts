import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { colorPalettes, type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-surface.css' with { type: 'css' };

/**
 * A surface provides color context to descendants via `color-palette`.
 * Authors MUST set a `color-palette` and SHOULD use surface only when
 * containers like `rh-card` are not appropriate. Each palette provides
 * WCAG-compliant contrast. Surface is non-interactive: Tab and focus
 * pass through to focusable children. Screen reader users perceive
 * no additional ARIA semantics from this element.
 *
 * @summary Provides background color and theming context for children
 *
 * @alias surface
 *
 * @slot - Accepts any content. Slotted interactive elements
 *         MUST provide their own ARIA roles and screen reader
 *         labels to remain accessible.
 */
@customElement('rh-surface')
@colorPalettes
@themable
export class RhSurface extends LitElement {
  static readonly styles = [styles];

  /**
   * Sets the color palette, which controls the element's background color
   * and propagates accessible text and interactive colors to descendants.
   * Accepted values are `lightest`, `lighter`, `light`, `dark`, `darker`,
   * and `darkest`. Surface always overrides the parent's color context.
   * Your theme will influence these colors so check there first if you
   * are seeing inconsistencies.
   * See [CSS Custom Properties](#css-custom-properties) for default values.
   */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  render() {
    return html`<!-- Accepts any content. Slotted interactive elements
      MUST provide their own ARIA roles and screen reader labels. --><slot id="slot" @slotchange=${this.#onSlotchange}></slot>`;
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
