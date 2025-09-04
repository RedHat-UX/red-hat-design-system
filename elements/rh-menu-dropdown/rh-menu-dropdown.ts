import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import styles from './rh-menu-dropdown.css';
import { property, query } from 'lit/decorators.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import '@rhds/elements/rh-button/rh-button.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-menu/rh-menu.js';
import { RhMenuItem } from './rh-menu-item.js';

/**
 * Menu Dropdown
 * @alias Menu Dropdown
 */
@customElement('rh-menu-dropdown')
export class RhMenuDropdown extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];
  @property({ type: Boolean, reflect: true }) open = false;
  @query('#menu-toggle') menuToggleButton!: HTMLElement;
  @query('slot') slotElement!: HTMLSlotElement;

  firstUpdated() {
    this.validateSlotContent();
    this.slotElement.addEventListener('slotchange', () => this.validateSlotContent());
  }

  get #items() {
    return this.items;
  }

  private validateSlotContent() {
    const assignedElements = this.slotElement.assignedElements({ flatten: true });

    assignedElements.forEach(el => {
      if (!this.isValidMenuDropdownChild(el)) {
        console.error(`Invalid slotted element:`,el);
        //el.remove();
      }
    });
  }

  private isValidMenuDropdownChild(el: Element): boolean {
    return el instanceof RhMenuItem || el instanceof HTMLHRElement;
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
      <div class="menu-dropdown-container">
        <button
          id="menu-toggle"
          aria-haspopup="true"
          aria-expanded="${this.open}"
          @click="${this.toggleMenu}"
          @keydown="${this.onToggleKeydown}">
            <span> Basic toggle </span>
            <span> 
              ${ this.open ? 
                html`<rh-icon set="ui" icon="caret-up"></rh-icon>` 
                : html`<rh-icon set="ui" icon="caret-down"></rh-icon>`
              }
            </span>
        </button>
        <rh-menu
          id="menu-list"
          role="menu"
          @click=${this.onSelect}
        >
          <slot></slot>
        </rh-menu>
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

  onSelect(event: KeyboardEvent | Event & { target: RhMenuItem }) {
    if(event.target instanceof RhMenuItem){
      this.open = false;
      this.menuToggleButton.focus();
      this.dispatchEvent(new CustomEvent('select', {
        detail: {text: event.target.textContent},
        bubbles: true,
        composed: true
      }));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-menu-dropdown': RhMenuDropdown;
  }
}
