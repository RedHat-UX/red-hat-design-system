import type { ColorPalette } from '@rhds/elements/lib/color-palettes.js';

import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { themable } from '@rhds/elements/lib/themable.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import {
  ColorPaletteListConverter,
  paletteNames,
} from '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';

export { ColorPaletteListConverter, paletteNames };

export class ContextChangeEvent extends Event {
  constructor(
    public colorPalette: ColorPalette | null,
    public provider: HTMLElement | null,
  ) {
    super('change', { bubbles: true, cancelable: true });
  }
}

import styles from './uxdot-context-select.css';

@customElement('uxdot-context-select')
@themable
export class UxdotContextSelect extends LitElement {
  static formAssociated = true;

  static readonly styles = [styles];

  declare shadowRoot: ShadowRoot;

  /** ID of context element to toggle (same root) */
  @property() target?: string | HTMLElement;

  @property() value: ColorPalette | null = null;

  @property({ converter: ColorPaletteListConverter })
  allow = paletteNames;

  /** Accessible label for the select */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  #internals = InternalsController.of(this);

  #target: HTMLElement | null = null;

  protected override firstUpdated() {
    for (const label of this.#internals.labels) {
      label.addEventListener('click', () => this.focus());
    }
    if (this.target instanceof HTMLElement) {
      this.#target = this.target;
      this.sync();
    } else if (this.target) {
      const root = this.getRootNode() as Document | ShadowRoot;
      if (root instanceof Document || root instanceof ShadowRoot) {
        this.#target = root.getElementById(this.target);
        this.sync();
      }
    } else {
      this.#target = this.closest('rh-surface');
    }
    this.requestUpdate();
  }

  /**
   * Before hydration (`hasUpdated` is false on both server and first
   * client render), emits a spec-conforming `<select>` with plain text
   * `<option>` children so HTML parsers won't discard non-conforming
   * elements. After hydration completes, `firstUpdated` triggers a
   * second render where `hasUpdated` is true and the full base-select
   * markup (button, selectedcontent, swatches) is emitted declaratively.
   */
  render() {
    const { allow, value } = this;
    const label = this.accessibleLabel
                || this.#internals.computedLabelText
                || 'Color palette';
    return this.hasUpdated ? html`
      <select aria-label="${label}"
              @change="${this.#onChange}">
        <button type="button">
          <selectedcontent></selectedcontent>
          <rh-icon set="microns" icon="caret-down-fill" class="caret"></rh-icon>
        </button>
        <option value="" ?selected="${value == null}">
          <rh-icon set="ui" icon="auto-light-dark-mode" class="system-icon"></rh-icon>
          System
        </option>
        ${allow.map(palette => html`
        <option value="${palette}" ?selected="${value === palette}">
          <span class="swatch ${palette}"></span>
          ${palette}
        </option>`)}
      </select>
    ` : html`
      <select aria-label="${label}"
              @change="${this.#onChange}">
        <option value="" ?selected="${value == null}">System</option>
        ${allow.map(palette => html`
        <option value="${palette}" ?selected="${value === palette}">${palette}</option>`)}
      </select>
    `;
  }

  formStateRestoreCallback(state: string) {
    this.#setValue((state || null) as this['value']);
  }

  #onChange(event: Event) {
    if (event.target instanceof HTMLSelectElement) {
      event.stopPropagation();
      this.#setValue((event.target.value || null) as this['value']);
    }
  }

  #setValue(value: this['value']) {
    this.#internals.setFormValue(value ?? '');
    if (value !== this.value
        && this.dispatchEvent(new ContextChangeEvent(value, this.#target))) {
      this.value = value;
      this.sync();
    }
  }

  override focus() {
    this.shadowRoot.querySelector('select')?.focus();
  }

  sync() {
    if (this.value) {
      this.#target?.setAttribute('color-palette', this.value);
    } else {
      this.#target?.removeAttribute('color-palette');
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uxdot-context-select': UxdotContextSelect;
  }
}
