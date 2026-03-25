import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { provide } from '@lit/context';
import { rhChipGroupSizeCtx } from './context.js';
import { query } from 'lit/decorators/query.js';

import { RhChip, ChipChangeEvent } from './rh-chip.js';

import styles from './rh-chip-group.css' with { type: 'css' };

/**
 * A chip group provides a `<fieldset>` container for related `rh-chip`
 * elements. It renders a `<legend>` for screen reader accessibility.
 * Authors MUST provide an accessible label when "Filter by:" is not
 * appropriate. Authors SHOULD AVOID placing non-chip elements in the
 * default slot. Users MAY press Tab to navigate between chips.
 *
 * @summary Groups related chips with a label and clear-all action
 *
 * @slot - Expects `rh-chip` elements. Non-chip content SHOULD
 *         NOT be placed here, as the fieldset groups its children
 *         for screen readers and ARIA landmark navigation.
 * @slot accessible-label - Inline text for the chip group legend.
 *       Content is placed into the `<legend>` element for
 *       screen reader accessibility and ARIA labeling.
 * @slot clear-all - Inline text to customize the "Clear all"
 *       button label. Screen readers announce this text when the
 *       button receives focus. Defaults to "Clear all".
 *
 * @csspart legend - The `<legend>` element containing the
 *          accessible label, styled with `--rh-font-size-body-text-md`.
 *
 * @demo https://ux.redhat.com/elements/chip/demo/chip-group/ Chip Group
 */
@customElement('rh-chip-group')
export class RhChipGroup extends LitElement {
  static readonly styles = [styles];

  /**
   * Decreases the font-size of the chip's label
   */
  @property({ reflect: true })
  @provide({ context: rhChipGroupSizeCtx })
  size?: 'sm';

  /**
   * The accessible label for the form control / `rh-chip-group`
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  @query('slot:not([name])') private defaultSlot!: HTMLSlotElement;

  firstUpdated(): void {
    if (this.size === 'sm' && !this.hasUpdated) {
      this.size = undefined;
      this.size = 'sm';
    }
  }

  render() {
    const label = this.accessibleLabel ? this.accessibleLabel : 'Filter by:';
    return html`
      <fieldset>
        <legend part="legend">
          <!--
            summary: Accessible label for the chip group
            description: |
              Inline text for the chip group legend. Content is placed
              into the \`<legend>\` element for screen reader
              accessibility. Also available as the
              \`accessible-label\` attribute.
          -->
          <slot name="accessible-label">${label}</slot>
        </legend>
        <!--
          summary: Default slot for chip elements
          description: |
            Expects \`rh-chip\` elements. Place individual chips
            inside \`rh-chip-group\` to group them as a fieldset.
        -->
        <slot></slot>
        <button class="btn-link" type="button" @click="${this.#uncheckAllChips}">
          <!--
            summary: Clear all button label
            description: |
              Inline text to customize the "Clear all" button label.
              Defaults to "Clear all".
          -->
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
