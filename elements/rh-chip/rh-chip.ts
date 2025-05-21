import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property } from 'lit/decorators/property.js';
import { consume } from '@lit/context';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { rhChipGroupSizeCtx } from './context.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-chip.css';

import '@rhds/elements/rh-icon/rh-icon.js';
import { observes } from '@patternfly/pfe-core/decorators.js';

export class ChipChangeEvent extends Event {
  constructor(public checked: boolean) {
    super('change', {
      bubbles: true,
      cancelable: true,
    });
  }
}

/**
 * A chip is used to filter information or indicate that a selection was made.
 * @summary Filter information or indicate that a selection was made
 * @fires {ChipCheckedEvent} chip-checked - when chip is checked/unchecked
 * @csspart chip - The main chip container
 * @slot - The label of the checkbox
 */
@customElement('rh-chip')
@themable
export class RhChip extends LitElement {
  static readonly styles = [styles];

  static formAssociated = true;

  /**
   * Whether the chip is checked.
   */
  @property({ type: Boolean, reflect: true }) checked = false;

  /**
   * Whether the chip is disabled.
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * Set a custom string for the input's `value` attribute. Defaults to `on`.
   */
  @property({ reflect: true }) value?: string;

  #internals = InternalsController.of(this);

  #formDisabled = false;

  @consume({ context: rhChipGroupSizeCtx, subscribe: true })
  private size?: 'sm';

  protected formDisabledCallback(disabled: boolean) {
    this.#formDisabled = disabled;
    this.requestUpdate();
  }

  protected formStateRestoreCallback(state: boolean, mode: string) {
    this.checked = !!state;
  }

  render() {
    return html`
      <label class=${classMap({ [`size-${this.size}`]: !!this.size })} part="chip">
        <slot></slot>
        <input type="checkbox"
               .checked="${this.checked}"
               @change="${this.#onChecked}"
               aria-disabled="${String(this.disabled || this.#formDisabled) as 'true' | 'false'}"
               value="${ifDefined(this.value)}">
        <rh-icon id="close-icon" icon="close-circle" set="ui"></rh-icon>
      </label>
    `;
  }

  #onChecked(event: Event) {
    event.stopPropagation();
    if (this.disabled) {
      event.preventDefault();
      (event.target as HTMLInputElement).checked = this.checked;
      return;
    }

    if (this.dispatchEvent(new ChipChangeEvent(this.checked))) {
      this.checked = (event.target as HTMLInputElement).checked;
    }
  }

  @observes('checked')
  private checkedChanged() {
    if (this.checked) {
      this.#internals.setFormValue(this.value ?? this.textContent);
    } else {
      this.#internals.setFormValue(null);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-chip': RhChip;
  }
}
