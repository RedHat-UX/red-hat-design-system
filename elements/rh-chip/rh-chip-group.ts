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
 * @slot - Place individual `rh-chips` inside `rh-chip-group`
 * @slot accessible-label
 *       An accessible label for the chip group.
 *       Content for this slot is put into the `<legend>` element.
 *       Also available as an attribute.
 */
@customElement('rh-chip-group')
export class RhChipGroup extends LitElement {
  static readonly styles = [styles];

  /**
   * Decreases the font-size of the chip's label
   */
  @property({ reflect: true }) size?: 'sm';

  /**
   * The accessible label for the form control / `rh-chip-group`
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  @provide({ context }) private ctx = this.#makeContext();

  #makeContext(): RhChipGroupContext {
    const { size } = this;
    return { size };
  }

  @observes('size')
  private contextChanged() {
    this.ctx = this.#makeContext();
  }

  render() {
    const label = this.accessibleLabel ? this.accessibleLabel : 'Filter by:';
    return html`
      <fieldset>
        <legend part="legend">
          <slot name="accessible-label">${label}</slot>
        </legend>
        <slot></slot>
      </fieldset>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-chip-group': RhChipGroup;
  }
}
