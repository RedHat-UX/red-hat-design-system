import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { consume } from '@lit/context';

import { context, type RhChipGroupContext } from './context.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-chip.css';

export class ChipChangeEvent extends Event {
  constructor(public checked: boolean) {
    super('change', {
      bubbles: true,
      cancelable: true,
    });
  }
}

/**
 * Chip
 * A chip is a clickable surface that acts like a checkbox.
 * @summary Creates a checkable surface
 * @fires {ChipCheckedEvent} chip-checked - when chip is checked/unchecked
 * @csspart chip - The main chip container
 * @slot - The label of the checkbox
 */
@customElement('rh-chip')
export class RhChip extends LitElement {
  static readonly styles = [styles];

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  /**
   * Whether the chip is checked.
   */
  @property({
    type: Boolean, reflect: true,
    hasChanged(newVal: boolean, oldVal: boolean) {
      return newVal !== oldVal;
    },
  })

  set checked(value: boolean) {
    const oldValue = this.#checked;
    this.#checked = value;
    if (this.chipInput) {
      this.chipInput.checked = value;
    }
    this.requestUpdate('checked', oldValue);
  }

  get checked(): boolean {
    return this.#checked;
  }

  /**
   * Whether the chip is disabled.
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * Set a custom string for the input's `value` attribute. Defaults to `on`.
   */
  @property({ reflect: true, attribute: 'value' }) chipValue?: string;

  @query('input') private chipInput!: HTMLInputElement;

  @consume({ context, subscribe: true })
  @property({ attribute: false })
  private ctx?: RhChipGroupContext;

  #checked = false;

  render() {
    const { on = 'light' } = this;
    const { size } = this.ctx ?? {};
    return html`
      <label part="chip" class=${classMap({ on: true, [on]: true, [`size-${size}`]: !!size })}>
        <slot></slot>
        <input type="checkbox"
               value="${ifDefined(this.chipValue)}"
               @change="${this.#onChecked}"
               ?checked="${this.checked}"
               aria-disabled="${String(this.disabled) as 'true' | 'false'}">
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
      this.checked = this.chipInput.checked;
    }
  }

  updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);

    // Match input's checked state with component's checked property
    if (changedProperties.has('checked') && this.chipInput) {
      this.chipInput.checked = this.checked;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-chip': RhChip;
  }
}
