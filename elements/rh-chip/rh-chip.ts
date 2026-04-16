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
 * A chip provides a toggle for filtering content or indicating a selection
 * when users choose from categories. Each chip must contain short inline
 * text and may be placed in an `rh-chip-group` of related chips. The
 * hidden checkbox allows form participation and provides screen reader
 * accessibility. Keyboard users press Tab to navigate between chips and
 * use Enter or Space to toggle.
 *
 * @summary Filter information or indicate that a selection was made
 *
 * @alias chip
 *
 * @fires {ChipChangeEvent} change - Fires when the chip is checked or
 *        unchecked. The event's `checked` property (boolean) holds the
 *        chip's state before the change. Cancelable — canceling prevents
 *        the state change.
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
        <!--
          summary: Chip label
          description: |
            Expects short inline text for the chip label. Should not
            contain block elements or interactive content.
        -->
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
