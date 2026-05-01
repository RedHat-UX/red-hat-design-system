import type { ColorPalette } from '@rhds/elements/lib/color-palettes.js';

import { html, LitElement, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { themable } from '@rhds/elements/lib/themable.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import {
  ContextChangeEvent,
  ColorPaletteListConverter,
  paletteNames,
} from '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';

export { ContextChangeEvent, ColorPaletteListConverter, paletteNames };

import styles from './uxdot-context-select.css';

@customElement('uxdot-context-select')
@themable
export class UxdotContextSelect extends LitElement {
  static formAssociated = true;

  static readonly styles = [styles];

  declare shadowRoot: ShadowRoot;

  /** ID of context element to toggle (same root) */
  @property() target?: string | HTMLElement;

  @property() value: ColorPalette | '' = '';

  @property({ converter: ColorPaletteListConverter })
  allow = paletteNames;

  /** Accessible label for the select */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  #internals = InternalsController.of(this);

  #target: HTMLElement | null = null;

  /**
   * Renders a native `<select>` enhanced with `appearance: base-select`.
   * During SSR the `<select>` is rendered without the base-select children
   * (`<button>`, `<selectedcontent>`, swatch `<span>`s) because the browser
   * HTML parser strips non-conforming `<select>` children from SSR markup,
   * which would cause a Lit hydration mismatch. On first client update the
   * base-select elements are injected into the live DOM.
   */
  render() {
    const { allow, value } = this;
    const label = this.accessibleLabel
                || this.#internals.computedLabelText
                || 'Color palette';
    return html`
      <select aria-label="${label}"
              @change="${this.#onChange}">
        <option value="" ?selected="${value === ''}">System</option>
        ${allow.map(palette => html`
        <option value="${palette}" ?selected="${value === palette}">${palette}</option>`)}
      </select>
    `;
  }

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
  }

  protected override updated() {
    this.#ensureBaseSelectDOM();
  }

  /** Inject base-select children (`<button>`, `<selectedcontent>`, swatches) into the live DOM */
  #ensureBaseSelectDOM() {
    if (isServer) {
      return;
    }
    const select = this.shadowRoot.querySelector('select');
    if (!select) {
      return;
    }
    if (!select.querySelector(':scope > button')) {
      const btn = document.createElement('button');
      btn.setAttribute('type', 'button');
      const sc = document.createElement('selectedcontent');
      const caret = document.createElement('rh-icon');
      caret.setAttribute('set', 'microns');
      caret.setAttribute('icon', 'caret-down-fill');
      caret.classList.add('caret');
      btn.appendChild(sc);
      btn.appendChild(caret);
      select.prepend(btn);
    }
    for (const option of select.options) {
      if (!option.querySelector('.swatch') && !option.querySelector('rh-icon')) {
        if (option.value === '') {
          const icon = document.createElement('rh-icon');
          icon.setAttribute('set', 'ui');
          icon.setAttribute('icon', 'auto-light-dark-mode');
          icon.classList.add('system-icon');
          option.prepend(icon);
        } else {
          const swatch = document.createElement('span');
          swatch.className = `swatch ${option.value}`;
          option.prepend(swatch);
        }
      }
    }
  }

  formStateRestoreCallback(state: string) {
    if (state) {
      this.#setValue(state as this['value']);
    }
  }

  #onChange(event: Event) {
    if (event.target instanceof HTMLSelectElement) {
      event.stopPropagation();
      this.#setValue(event.target.value as this['value']);
    }
  }

  #setValue(value: this['value']) {
    this.#internals.setFormValue(value);
    if (value !== this.value
        && this.dispatchEvent(new ContextChangeEvent(value as ColorPalette, this.#target))) {
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
