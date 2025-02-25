import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { RhChip } from './rh-chip.js';

import styles from './rh-chip-group.css';

/**
 * Chip Group
 * @slot - Place individual rh-chips inside rh-chip-group
 */
@customElement('rh-chip-group')
export class RhChipGroup extends LitElement {
  static readonly styles = [styles];

  /**
   * Set the size of the chip to `sm` or `lg`
   */
  @property({ reflect: true }) size?: 'sm' | 'lg';

  render() {
    return html`
      <div id="container">
        <fieldset>
          <legend part="legend">
            <slot name="accessible-label"></slot>
          </legend>
          <slot></slot>
        </fieldset>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-chip-group': RhChipGroup;
  }
}
