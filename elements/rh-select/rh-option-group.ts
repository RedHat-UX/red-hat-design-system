import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';

import { RhOption } from './rh-option.js';

import styles from './rh-option-group.css';

/**
 * Groups related rh-option elements within a rh-select for visual organization.
 * Must be a child of rh-select. Should include a label attribute or label slot
 * to identify the group. When disabled, all child options are automatically disabled.
 * @summary Groups related rh-option elements within a select
 * @alias option-group
 */
@customElement('rh-option-group')
export class RhOptionGroup extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  /**
   * Group label text displayed above the option group for identification.
   * Should be used to describe the category or purpose of grouped options.
   * Overridden by the label slot if provided. Required for accessibility.
   */
  @property() label?: string;

  /**
   * Whether the option group and all its child options are disabled.
   * When true, automatically disables all rh-option children, preventing
   * selection of any options within this group.
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  @query('slot:not([name])') private defaultSlot!: HTMLSlotElement;

  // eslint-disable-next-line no-unused-private-class-members
  #internals = InternalsController.of(this, { role: 'group' });

  #optionEls: RhOption[] = [];

  override firstUpdated() {
    if (!isServer) {
      this.#optionEls = this.#getChildOptions();
      this.#disableChildren();
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

  @observes('disabled')
  private disabledChanged() {
    this.#updateDisabledChildren();
  }

  /**
   * Returns each rh-option in rh-option-group's default slot
   */
  #getChildOptions(): RhOption[] {
    const assignedElements = this.defaultSlot?.assignedElements?.() ?? [];

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
   * Updates disabled state of child options when rh-option-group disabled state changes
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
