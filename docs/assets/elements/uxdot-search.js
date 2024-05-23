import '@rhds/elements/rh-button/rh-button.js';

import { LitElement, html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

class UxdotSearch extends LitElement {
  static formAssociated = true;

  static properties = {
    placeholder: {},
    value: {},
    items: { type: Array, attribute: false },
    expanded: { type: Boolean, state: true },
    activeIndex: { type: Number, state: true },
  };

  static styles = css`
    :host {
      display: grid;
      gap: var(--rh-space-lg, 16px);
      grid-template: 1fr / 1fr max-content;
      font-family: var(--rh-font-family-body-text, RedHatText, "Red Hat Text", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);
      position: relative;
    }

    [hidden] { display: none !important; }

    input {
      border: var(--rh-border-width-sm, 1px) solid var(--rh-color-gray-20, #c7c7c7);
      border-bottom-color: var(--rh-color-gray-50, #4d4d4d);
      padding: var(--rh-space-md, 8px);
    }

    input:focus {
      border-bottom-color: var(--rh-color-interactive-blue-darker, #0066cc);
      border-bottom-width: var(--rh-border-width-md, 2px);
    }

    input::placeholder {
      font-family: inherit;
      font-size: var(--rh-font-size-body-text-md, 1rem);
    }

    #container {
      position: absolute;
      max-height: 300px;
      overflow-y: scroll;
      z-index: 2;
      grid-column: 1/2;
      width: calc(100% + 2 * var(--rh-border-width-md, 2px));
      inset-block-start: var(--rh-length-2xl, 32px);
      inset-inline-start: calc(-1 * var(--rh-space-md, 8px));
      padding: var(--rh-space-sm, 6px) var(--rh-space-md, 8px);
    }

    ol {
      list-style-type: none;
      flex-flow: column nowrap;
      padding-inline-start: 0;
      border: var(--rh-border-width-sm, 1px) solid var(--rh-color-gray-20, #c7c7c7);
      background: var(--rh-color-surface-lightest, #ffffff);
      margin: 0;
      height: calc(100% - var(--rh-space-md, 8px));
      width: calc(100% - 2 * var(--rh-border-width-md, 2px));
    }

    a {
      color: inherit;
      text-decoration: none;
      font-size: var(--rh-font-size-body-text-sm, 0.875rem);
    }

    a:focus {
      outline: none;
    }

    li {
      padding: var(--rh-space-md, 8px);
    }

    li:focus-within {
      outline: var(--rh-border-width-md, 2px) solid var(--rh-color-interactive-blue-darker, #0066cc);
    }
  `;

  /** @type {Set<UxdotSearch>} */
  static #instances = new Set();

  static {
    window.addEventListener('click', event => {
      for (const instance of this.#instances) {
        instance.#onOutsideClick(event);
      }
    });
  }

  #internals = this.attachInternals();

  #ariaLabel = '';

  get form() {
    return this.#internals.form;
  }

  get value() {
    return this.#input.value;
  }

  set value(value) {
    this.#input.value = value ?? '';
  }

  get #input() {
    return this.shadowRoot.getElementById('input');
  }

  get #firstLink() {
    return this.shadowRoot.querySelector('li a');
  }

  get #lastLink() {
    return this.shadowRoot.querySelector('li:last-of-type a');
  }

  get selectedItem() {
    return this.shadowRoot.querySelector('[aria-selected="true"]');
  }

  constructor() {
    super();
    this.items = [];
    this.addEventListener('keydown', this.#onKeydown);
    this.addEventListener('blur', this.#onBlur);
  }

  connectedCallback() {
    super.connectedCallback();
    this.#ariaLabel = this.getAttribute('aria-label') || undefined;
    this.removeAttribute('aria-label');
    if (this.#ariaLabel) {
      this.setAttribute('original-aria-label', this.#ariaLabel);
    }
    this.requestUpdate();
  }

  render() {
    return html`
      <input id="input"
             placeholder="${ifDefined(this.placeholder)}"
             role="combobox"
             aria-label="${ifDefined(this.#ariaLabel)}"
             aria-autocomplete="list"
             aria-controls="listbox"
             aria-expanded="${String(this.expanded)}"
             @input="${this.#onInput}">
      <div id="container" tabindex="-1" ?hidden="${!this.expanded}">
        <ol id="listbox" role="listbox" aria-labelledby="input">
          ${(this.items ?? []).map((item, i) => !item ? '' : html`
          <li role="option"
              data-i="${i}"
              aria-selected="${this.activeIndex === i}">
            <a id="i-${i}"
               tabindex="${this.activeIndex === i ? 0 : -1}"
               href="${item.value}"
               @blur="${this.#onBlur}">${item.label}</a>
          </li>
          `)}
        </ol>
      </div>
      <rh-button id="button"
                 aria-controls="listbox"
                 aria-expanded="${String(this.expanded)}"
                 @click="${this.#onClickSearch}">Search</rh-button>
    `;
  }

  #onOutsideClick(event) {
    if (event.composedPath().every(x => x !== this)) {
      this.expanded = false;
    }
  }

  #onClickSearch() {
    this.expanded = true;
    if (this.value) {
      this.form?.requestSubmit();
    }
  }

  async #onBlur() {
    await this.updateComplete;
    if (!this.shadowRoot.activeElement) {
      await this.updateComplete;
      this.expanded = false;
      if (this.selectedItem) {
        this.value = this.selectedItem.textContent?.trim();
      }
    }
  }

  #onInput() {
    this.#internals.setFormValue(this.value);
    if (this.value) {
      this.expanded = true;
    }
  }

  #onKeydown(event) {
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

  #focus(event) {
    event.preventDefault();
    this.activeIndex ??= -1;
    const d = ({ ArrowDown: 1, ArrowUp: -1 })[event.key];
    const { activeElement } = this.shadowRoot;
    if (activeElement === this.#input) {
      ({ ArrowUp: this.#lastLink, ArrowDown: this.#firstLink })[event.key]?.focus();
      this.activeIndex = d > 0 ? 0 : this.items.length - 1;
    } else if (activeElement instanceof HTMLAnchorElement) {
      const nextIndex = this.activeIndex + d;
      const nextItem = this.items[nextIndex];
      const nextFocus = this.shadowRoot.getElementById(`i-${nextIndex}`) ?? this.#input;
      this.activeIndex = nextItem ? nextIndex : -1;
      nextFocus.focus();
    }
  }
}

customElements.define('uxdot-search', UxdotSearch);
