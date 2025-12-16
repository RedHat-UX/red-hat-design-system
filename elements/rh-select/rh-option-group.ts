import { LitElement, html, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { RhOption } from './rh-option.js';

import styles from './rh-option-group.css';

/**
 * Group of options within a select / listbox
 * @alias option-group
 */
@customElement('rh-option-group')
export class RhOptionGroup extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  /** Group description. Overridden by `label` slot. */
  @property() label?: string;

  /** Whether group is disabled */
  @property({ type: Boolean, reflect: true }) disabled = false;

  @query('slot:not([name])') private defaultSlot!: HTMLSlotElement;

  // eslint-disable-next-line no-unused-private-class-members
  #internals = InternalsController.of(this, { role: 'group' });

  #optionEls: RhOption[] = [];

  override firstUpdated() {
    this.#optionEls = this.#getChildOptions();
    this.#disableChildren();
  }

  override updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('disabled')) {
      this.#updateDisabledChildren();
    }
  }

  render() {
    return html`
      <div id="label-container"
           role="presentation">
        <!-- Group label. Overrides the \`label\` attribute. -->
        <slot name="label">${this.label}</slot>
      </div>
      <!-- Insert \`<rh-option>\` or \`<hr>\` elements -->
      <slot></slot>
    `;
  }

  /**
   * Get each rh-option in rh-option-group's default slot
   */
  #getChildOptions(): RhOption[] {
    if (!this.defaultSlot) {
      return [];
    }

    const assignedElements = this.defaultSlot.assignedElements();
    return assignedElements.filter((element): element is RhOption =>
      element instanceof RhOption
    );
  }

  /**
   * Disable each child `rh-option` element when `rh-option-group` is disabled
   */
  #disableChildren(): void {
    if (!this.disabled) {
      return;
    }

    for (const childOption of this.#optionEls) {
      childOption.disabled = true;
    }
  }

  /**
   * Toggle `disabled` attributes on slotted `rh-option` elements when `disabled` is added or
   * removed from the parent `rh-option-group`.`
  */
  #updateDisabledChildren(): void {
    for (const childOption of this.#optionEls) {
      if (this.disabled) {
        childOption.disabled = true;
      } else {
        childOption.disabled = false;
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-option-group': RhOptionGroup;
  }
}
