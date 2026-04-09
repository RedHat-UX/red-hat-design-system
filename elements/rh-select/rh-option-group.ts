import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';

import { themable } from '@rhds/elements/lib/themable.js';

import { RhOption } from './rh-option.js';

import styles from './rh-option-group.css';

/**
 * Groups related `rh-option` elements within an `rh-select` for organizing
 * options into categories. Provides visual separation when used with `<hr>`.
 * Should include a `label` for screen readers (ARIA `group` role). When
 * `disabled`, all child options are disabled. Arrow keys and Tab navigate
 * through grouped options the same way as ungrouped options.
 * @summary Groups related rh-option elements within a select
 * @alias option-group
 * @demo https://ux.redhat.com/elements/select/demo/option-group/ - Options organized into labeled groups
 */
@customElement('rh-option-group')
@themable
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

  override firstUpdated() {
    if (!isServer && this.disabled) {
      this.#updateDisabledChildren();
    }
  }

  render() {
    return html`
      <div id="label-container"
           role="presentation">
        <!-- Group label as inline text. Overrides the \`label\` attribute. Screen readers announce this text when the group receives focus. -->
        <slot name="label">${this.label}</slot>
      </div>
      <!-- Insert \`<rh-option>\` elements. Each option must have accessible text content for screen readers. -->
      <slot @slotchange="${this.#onDefaultSlotChange}"></slot>
    `;
  }

  @observes('disabled')
  private disabledChanged() {
    this.#updateDisabledChildren();
  }

  /**
   * When options are added or removed, refresh child disabled state if this
   * group is disabled. We only sync when `disabled` is true so we do not clear
   * per-option `disabled` on children while the group is enabled.
   */
  #onDefaultSlotChange(): void {
    if (this.disabled) {
      this.#updateDisabledChildren();
    }
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
   * Syncs disabled state of child options to match rh-option-group.
   * Always reads the current default-slot assignment so the list stays correct
   * after DOM changes.
   */
  #updateDisabledChildren(): void {
    const options = this.#getChildOptions();
    for (const childOption of options) {
      childOption.disabled = this.disabled;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-option-group': RhOptionGroup;
  }
}
