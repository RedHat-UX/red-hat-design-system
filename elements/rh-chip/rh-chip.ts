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

export class ChipCheckedEvent extends CustomEvent<{ checked: boolean }> {
  constructor(checked: boolean) {
    super('chip-checked', {
      bubbles: true,
      composed: true,
      detail: { checked },
    });
  }
}

/**
 * Chip
 * A chip is a clickable surface that acts like a checkbox.
 * @summary Creates a checkable surface
 * @fires {ChipCheckedEvent} chip-checked - when chip is checked/unchecked
 * @csspart chip - The main chip container
 * @slot - Place the label of the checkbox here
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
  @property({ type: Boolean, reflect: true }) checked = false;

  /**
   * Whether the chip is disabled.
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * Set a custom string for the input's `name` attribute. Defaults to `chip-checkbox`.
   */
  @property({ reflect: true, attribute: 'name' }) chipName?: string;

  /**
   * Set a custom string for the input's `value` attribute. Defaults to `on`.
   */
  @property({ reflect: true, attribute: 'value' }) chipValue?: string;

  @query('input') private chipInput!: HTMLInputElement;

  @consume({ context, subscribe: true })
  @property({ attribute: false })
  private ctx?: RhChipGroupContext;

  render() {
    const { on = 'light' } = this;
    const attrName = this.chipName ? this.chipName : 'chip-checkbox';
    const { size, color } = this.ctx ?? {};
    return html`
      <label part="chip" class=${classMap({ on: true, [on]: true, [`size-${size}`]: !!size, [`color-${color}`]: !!color })}>
        <slot></slot>
        <input type="checkbox"
               name=${attrName}
               value=${ifDefined(this.chipValue)}
               @change=${this.#onChecked}
               @keydown=${this.#handleKeydown}
               ?checked=${!this.disabled && this.checked}
               aria-disabled=${!!this.disabled}>
        <rh-icon id="close-icon" set="ui" icon="close-circle"></rh-icon>
      </label>
    `;
  }

  #onChecked(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      (event.target as HTMLInputElement).checked = this.checked;
      return;
    }

    this.checked = this.chipInput.checked;
    this.dispatchEvent(new ChipCheckedEvent(this.checked));
  }

  #handleKeydown(event: KeyboardEvent) {
    // Prevent checking via keyboard when disabled
    if (this.disabled && event.key === 'Spacebar') {
      event.preventDefault();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-chip': RhChip;
  }
}
