import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { provide } from '@lit/context';
import { context, type RhChipGroupContext } from './context.js';

import { RhChip } from './rh-chip.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';

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

  /**
   * Set the color of the chip to be light blue
   */
  @property({ reflect: true }) color?: 'light-blue';

  @provide({ context }) private ctx = this.#makeContext();

  #makeContext(): RhChipGroupContext {
    const { size, color } = this;
    return { size, color };
  }

  @observes('size')
  @observes('color')
  private contextChanged() {
    this.ctx = this.#makeContext();
  }

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
