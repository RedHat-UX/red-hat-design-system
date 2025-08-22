import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import styles from './rh-menu-dropdown.css';
import { property, query, queryAll } from 'lit/decorators.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import type { RhMenuItem } from './rh-menu-item.js';

/**
 * Menu Dropdown
 * @slot - Place element content here
 */
@customElement('rh-menu-dropdown')
export class RhMenuDropdown extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];
  @property({ type: Boolean, reflect: true }) open = false;
  @query('#toggle') toggleButton!: HTMLElement;

  get #items() {
    return this.items;
  }

  #tabindex = RovingTabindexController.of(this, {
    getItems: () => this.#items,
  });

  get activeItem() {
    return this.#tabindex.items.at(this.#tabindex.atFocusedItemIndex);
  }

  activateItem(item: RhMenuItem) {
    this.#tabindex.atFocusedItemIndex = this.#tabindex.items.indexOf(item);
  }

  focus() {
    this.#tabindex.items[this.#tabindex.atFocusedItemIndex]?.focus();
  }

  render(): TemplateResult<1> {
    return html`
      <button
        id="toggle"
        aria-haspopup="true"
        aria-expanded="${this.open}"
        @click="${this.toggleMenu}"
        @keydown="${this.onToggleKeydown}"
      >
        Menu 
      </button>
      <div
        id="menu"
        role="menu"
        @item-selected="${this.onItemSelected}"
      >
        <slot></slot>
      </div>
    `;
  }

  toggleMenu() {
    this.open = !this.open;
    if (this.open) {
      this.updateComplete.then(() => this.focusFirstItem());
    }
  }

  get items(): RhMenuItem[] {
    return Array.from(this.querySelectorAll('rh-menu-item'));
  }

  focusFirstItem() {
    this.items[0]?.focus();
  }

  onToggleKeydown(e: KeyboardEvent) {
    if (['Enter', ' ', 'ArrowDown'].includes(e.key)) {
      e.preventDefault();
      this.open = true;
      this.updateComplete.then(() => this.focusFirstItem());
    }
  }

  onItemSelected(e: CustomEvent) {
    this.open = false;
    this.toggleButton.focus();
    this.dispatchEvent(new CustomEvent('select', {
      detail: e.detail,
      bubbles: true,
      composed: true
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-menu-dropdown': RhMenuDropdown;
  }
}
