import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';

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
 * @cssprop [--rh-chip-xyz-XYZ-xyz=none] - Example variable description
 */
@customElement('rh-chip')
export class RhChip extends LitElement {
  static readonly styles = [styles];

  /**
   * Whether the chip is checked.
   */
  @property({ type: Boolean, reflect: true }) checked = false;

  /**
   * Set a custom value for the input's `name` attribute, defaults to `chip-checkbox`.
   */
  @property({ reflect: true, attribute: 'chip-name' }) chipName?: string;

  @query('input[type="checkbox"]') private _checkbox!: HTMLInputElement;

  render() {
    const attrName = this.chipName ? this.chipName : 'chip-checkbox';
    return html`
      <label part="chip">
        <slot></slot>
        <input type="checkbox" name=${attrName}
               @input=${this.#onChecked} ?checked=${this.checked}>
        <rh-icon id="close-icon" set="microns" icon="close"></rh-icon>
      </label>
    `;
  }

  #onChecked() {
    this.checked = this._checkbox.checked;
    this.dispatchEvent(new ChipCheckedEvent(this.checked));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-chip': RhChip;
  }
}
