import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property } from 'lit/decorators/property.js';
import { consume } from '@lit/context';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { rhChipGroupSizeCtx } from './context.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-chip.css' with { type: 'css' };

import '@rhds/elements/rh-icon/rh-icon.js';
import { observes } from '@patternfly/pfe-core/decorators.js';

/**
 * Event fired when a chip's checked state changes.
 * The `checked` property indicates the chip's state before the change.
 */
export class ChipChangeEvent extends Event {
  constructor(
    /** The checked state of the chip before the change occurred. */
    public checked: boolean,
  ) {
    super('change', {
      bubbles: true,
      cancelable: true,
    });
  }
}

/**
 * A chip provides a toggle for filtering content or indicating a selection.
 * Each chip MUST contain short inline text. Authors SHOULD use
 * `rh-chip-group` for multiple related chips. The chip renders a hidden
 * checkbox for form participation and screen reader accessibility.
 * Users MAY press Tab to navigate and Enter or Space to toggle.
 *
 * @summary Filter information or indicate that a selection was made
 *
 * @alias chip
 *
 * @fires {ChipChangeEvent} change - Fires when the chip is checked or
 *        unchecked. The event's `checked` property contains the previous
 *        checked state (boolean). This event bubbles and is cancelable.
 *
 * @csspart chip - The outer `<label>` container for the chip,
 *          styled with the `--rh-border-radius-pill` token.
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
      <label part="chip" class=${classMap({ [`size-${this.size}`]: !!this.size })}>
        <!-- Short inline text for the chip label -->
        <slot></slot>
        <input type="checkbox"
               value="${ifDefined(this.value)}"
               @change="${this.#onChecked}"
               .checked="${this.checked}"
               aria-disabled="${String(this.disabled || this.#formDisabled) as 'true' | 'false'}">
        <rh-icon id="close-icon" set="ui" icon="close-circle"></rh-icon>
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
