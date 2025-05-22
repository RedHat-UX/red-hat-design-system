import { LitElement, html, isServer } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import '@rhds/elements/rh-button/rh-button.js';

import styles from './uxdot-search.css';

interface Item {
  label: string;
  value: string;
}

@customElement('uxdot-search')
export class UxdotSearch extends LitElement {
  static formAssociated = true;

  static styles = [styles];

  @property() placeholder?: string;

  @property({ type: Array, attribute: false }) items: Item[] = [];

  @property({ type: Boolean, state: true }) expanded = false;

  @property({ type: Number, state: true }) activeIndex?: number;

  private static instances = new Set<UxdotSearch>();

  static {
    globalThis?.addEventListener?.('click', event => {
      for (const instance of UxdotSearch.instances) {
        instance.#onOutsideClick(event);
      }
    });
  }

  #internals = !isServer ? this.attachInternals() : null;

  #ariaLabel = '';

  get form() {
    return this.#internals?.form ?? null;
  }

  @property()
  get value() {
    return this.#input?.value ?? '';
  }

  set value(value) {
    if (this.#input) {
      this.#input.value = value ?? '';
    }
  }

  get #input() {
    return this.shadowRoot?.getElementById('input') as HTMLInputElement | null ?? null;
  }

  get #firstLink(): HTMLAnchorElement | null {
    return this.shadowRoot?.querySelector('li a') ?? null;
  }

  get #lastLink(): HTMLAnchorElement | null {
    return this.shadowRoot?.querySelector('li:last-of-type a') ?? null;
  }

  get selectedItem() {
    return this.shadowRoot?.querySelector('[aria-selected="true"]');
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keydown', this.#onKeydown);
    this.addEventListener('blur', this.#onBlur);
    this.#ariaLabel = this.getAttribute('aria-label') ?? '';
    this.removeAttribute('aria-label');
    if (this.#ariaLabel) {
      this.setAttribute('original-aria-label', this.#ariaLabel);
    }
    this.requestUpdate();
  }

  render() {
    return html`
      <input id="input"
             @input="${this.#onInput}"
             aria-autocomplete="list"
             aria-controls="listbox"
             aria-expanded="${String(this.expanded)}"
             aria-label="${ifDefined(this.#ariaLabel)}"
             placeholder="${ifDefined(this.placeholder)}"
             role="combobox">
      <div id="container" ?hidden="${!this.expanded}" tabindex="-1">
        <ol id="listbox"
            aria-labelledby="input"
            role="listbox">${this.items.map((item, i) => !item ? '' : html`
          <li aria-selected="${this.activeIndex === i}"
              data-i="${i}"
              role="option">
            <a id="i-${i}"
               @blur="${this.#onBlur}"
               href="${item.value}"
               tabindex="${this.activeIndex === i ? 0 : -1}">${item.label}</a>
          </li>`)}
        </ol>
      </div>
      <rh-button id="button"
                 @click="${this.#onClickSearch}"
                 aria-controls="listbox"
                 aria-expanded="${String(this.expanded)}">Search</rh-button>
    `;
  }

  #onOutsideClick(event: Event) {
    if (event.composedPath().every(x => x !== this)) {
      this.expanded = false;
    }
  }

  #onClickSearch() {
    this.expanded = true;
    if (this.value && !isServer) {
      this.form?.requestSubmit();
    }
  }

  async #onBlur() {
    await this.updateComplete;
    if (!this.shadowRoot?.activeElement) {
      await this.updateComplete;
      this.expanded = false;
      if (this.selectedItem) {
        this.value = this.selectedItem.textContent?.trim() ?? '';
      }
    }
  }

  #onInput() {
    this.#internals?.setFormValue(this.value);
    if (this.value) {
      this.expanded = true;
    }
  }

  #onKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowUp': {
        this.expanded = true;
        return this.#focus(event);
      }
      case 'Escape': this.expanded = false; break;
      case 'Enter': this.form?.requestSubmit();
    }
  }

  #focus(event: KeyboardEvent) {
    event.preventDefault();
    this.activeIndex ??= -1;
    const d = ({ ArrowDown: 1, ArrowUp: -1 })[event.key]!;
    const activeElement = this.shadowRoot?.activeElement;
    if (activeElement === this.#input) {
      ({ ArrowUp: this.#lastLink, ArrowDown: this.#firstLink })[event.key]?.focus();
      this.activeIndex = d > 0 ? 0 : this.items.length - 1;
    } else if (activeElement instanceof HTMLAnchorElement) {
      const nextIndex = this.activeIndex + d;
      const nextItem = this.items[nextIndex];
      const nextFocus = this.shadowRoot?.getElementById(`i-${nextIndex}`) ?? this.#input;
      this.activeIndex = nextItem ? nextIndex : -1;
      nextFocus?.focus();
    }
  }
}

