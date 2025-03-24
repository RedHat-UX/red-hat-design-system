import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { provide } from '@lit/context';
import { rhChipGroupSizeCtx } from './context.js';
import { query } from 'lit/decorators/query.js';

import { RhChip, ChipChangeEvent } from './rh-chip.js';

import styles from './rh-chip-group.css';

/**
 * Chip Group
 * @slot - Place individual `rh-chips` inside `rh-chip-group`
 * @slot accessible-label
 *       An accessible label for the chip group.
 *       Content for this slot is put into the `<legend>` element.
 *       Also available as an attribute.
 * @slot clear-all
 *       Customized text for the "Clear all" button
 */
@customElement('rh-chip-group')
export class RhChipGroup extends LitElement {
  static readonly styles = [styles];

  /**
   * Decreases the font-size of the chip's label
   */
  @provide({ context: rhChipGroupSizeCtx })
  @property({ reflect: true }) size?: 'sm';

  /**
   * The accessible label for the form control / `rh-chip-group`
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  @query('slot:not([name])') private defaultSlot!: HTMLSlotElement;

  render() {
    const label = this.accessibleLabel ? this.accessibleLabel : 'Filter by:';
    return html`
      <fieldset>
        <legend part="legend">
          <slot name="accessible-label">${label}</slot>
        </legend>
        <slot></slot>
        <button class="btn-link" type="button" @click="${this.#uncheckAllChips}">
          <slot name="clear-all">Clear all</slot>
        </button>
      </fieldset>
    `;
  }

  #uncheckAllChips() {
    const chips = this.#getChipElements();
    const checkedChips = chips.filter(chip => chip.checked && !chip.disabled);

    checkedChips.forEach(chip => {
      chip.checked = false;
      chip.dispatchEvent(new ChipChangeEvent(false));
    });
  }

  /**
   * Get rh-chip elements that are direct children of this rh-chip-group
   * @returns {RhChip[]} Array of chip elements
   */
  #getChipElements(): RhChip[] {
    if (!this.defaultSlot) {
      return [];
    }

    const assignedElements = this.defaultSlot.assignedElements();
    return assignedElements.filter((element): element is RhChip =>
      element instanceof RhChip
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-chip-group': RhChipGroup;
  }
}
