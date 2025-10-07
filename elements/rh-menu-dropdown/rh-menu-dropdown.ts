import { LitElement, html, isServer, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import styles from './rh-menu-dropdown.css';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { queryAll } from 'lit/decorators/query-all.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import '@rhds/elements/rh-button/rh-button.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-menu/rh-menu.js';
import { RhMenuItem } from './rh-menu-item.js';

/**
 * Menu Dropdown
 * @alias menu-dropdown
 * @slot - Place element content here
 */
@customElement('rh-menu-dropdown')
export class RhMenuDropdown extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];
  private static instances = new Set<RhMenuDropdown>();
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ attribute: 'variant', reflect: true }) variant: 'open' | null = null;
  @property({ attribute: 'layout', reflect: true }) layout: 'compact' | null = null;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @query('#menu-toggle') menuToggleButton!: HTMLElement;
  @query('#menu-list') menuList!: HTMLElement;
  @queryAll('slot') slotElement!: NodeListOf<HTMLSlotElement>;

  static override readonly shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  static {
    if (!isServer) {
      document.addEventListener('click', function(event) {
        for (const instance of RhMenuDropdown.instances) {
          instance.#outsideClick(event);
        }
      });
    }
  }

  connectedCallback() {
    super.connectedCallback();
    RhMenuDropdown.instances.add(this);
  }

  disconnectedCallback() {
    RhMenuDropdown.instances.delete(this);
  }

  firstUpdated() {
    this.updateComplete.then(() => {
      this.#validateSlotContent();
    });
  }

  get #items() {
    return this.items;
  }

  #outsideClick(event: MouseEvent) {
    const path = event.composedPath();
    if (!path.includes(this)) {
      if (this.open) {
        this.open = false;
      }
    }
  }

  #validateSlotContent() {
    this.slotElement?.forEach((slot: HTMLSlotElement) => {
      const assignedElements = slot.assignedElements({ flatten: true });
      assignedElements.forEach(el => {
        if ( el instanceof HTMLHRElement) {
          el.inert = true;
        }
      });
    });
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
      <div @focusout=${this.#onFocusOut} class="menu-dropdown-container">
        <button
          id="menu-toggle"
          aria-haspopup="true"
          aria-expanded="${this.open}"
          @click="${this.#toggleMenu}"
          aria-controls="menu-list"
          aria-disabled="${this.disabled}"
          @keydown="${this.#onToggleKeydown}"
          class="${this.variant !== 'open' ? 'boxed' : ''}
           ${this.layout === 'compact' ? 'compact' : ''} 
           ${this.disabled ? 'disabled' : ''}
           ${this.open ? 'open' : ''}">
            ${this.layout === 'compact' ?
              html`<rh-icon set="ui" icon="ellipsis-vertical-fill"></rh-icon>`
              : html` 
              <span class="info-section"> 
                <slot name="label"></slot>
              </span>
              <span class="action-icon"> 
                ${this.open ?
                  html`<rh-icon set="microns" icon="caret-up"></rh-icon>`
                  : html`<rh-icon set="microns" icon="caret-down"></rh-icon>`
                }
              </span>
              `
            }
        </button>
        <rh-menu
          id="menu-list"
          role="menu"
          @click=${this.#onSelect}
          @keydown=${this.#onKeyDown}
        >
          <slot></slot>
        </rh-menu>
      </div>
    `;
  }

  #toggleMenu() {
    this.open = !this.open;

    if (this.open) {
      this.updateComplete.then(() => {
        this.#focusFirstItem();
        this.#positionPopover();
      });
    }
  }

  #positionPopover() {
    const {
      top: toggleTop,
      bottom: toggleBottom,
      left: toggleLeft,
      right: toggleRight,
    } = this.menuToggleButton.getBoundingClientRect();

    const { offsetWidth: menuWidth, offsetHeight: menuHeight } = this.menuList;
    const { innerWidth: viewportWidth, innerHeight: viewportHeight, scrollX, scrollY } = window;
    const spacing = 2;

    let top: number;
    let left: number;

    // ----------- Vertical positioning -----------
    if (toggleBottom + menuHeight + spacing > viewportHeight) {
      // Position the menulist above the toggle if there isn't enough space below
      top = toggleTop - menuHeight - spacing;
    } else {
      // Position below the toggle
      top = toggleBottom + spacing;
    }

    // ----------- Horizontal positioning -----------
    if (toggleLeft + menuWidth <= viewportWidth) {
      // Enough space to the right, position the menu starting from the left edge of the button.
      left = toggleLeft;
    } else {
      // Not enough space to the right, align right edge of popover to button's right
      left = toggleRight - menuWidth;

      // Prevent menu from going off-screen left
      if (left < 0) {
        left = spacing;
      }
    }

    this.menuList.style.top = `${top + scrollY}px`;
    this.menuList.style.left = `${left + scrollX}px`;
  }

  get items(): HTMLElement[] {
    const menuItems = Array.from(this.querySelectorAll('rh-menu-item'))
        .map(item => item.shadowRoot?.querySelector('[role="menuitem"]'))
        .filter((el): el is HTMLElement => el instanceof HTMLElement);

    return menuItems;
  }

  #focusFirstItem() {
    this.items[0]?.focus();
  }

  #onToggleKeydown(e: KeyboardEvent) {
    if (!this.disabled) {
      if (['Enter', ' ', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();
        this.open = true;
        this.updateComplete.then(() => {
          this.#focusFirstItem();
          this.#positionPopover();
        });
      }
    }
  }

  #handleSelection(target: RhMenuItem) {
    this.open = false;
    this.menuToggleButton.focus();
    this.dispatchEvent(new CustomEvent('select', {
      detail: { text: target.textContent },
      bubbles: true,
      composed: true,
    }));
  }

  #onSelect(event: KeyboardEvent & { target: RhMenuItem }) {
    if (event.target instanceof RhMenuItem) {
      this.#handleSelection(event.target);
    }
  }

  #onKeyDown(event: KeyboardEvent & { target: RhMenuItem }) {
    if (event.key === 'Escape') {
      if (this.open) {
        this.open = false;
        this.menuToggleButton.focus();
      }
    } else if (
      event.target instanceof RhMenuItem
      && (event.key === 'Enter' || event.key === ' ')
      && !event.target.disabled
    ) {
      event.preventDefault();
      this.#handleSelection(event.target);
    }
  }

  #onFocusOut(event: FocusEvent) {
    const relatedTarget = event.relatedTarget as Node | null;

    // If the next focused element is outside this component, close the dropdown
    if (
      relatedTarget !== this.menuToggleButton
      && relatedTarget !== this.menuList
      && relatedTarget && !this.contains(relatedTarget)
    ) {
      if (this.open) {
        this.open = false;
      }
    }

    // Also close if nothing is focused (focus left the document)
    if (!relatedTarget) {
      this.open = false;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-menu-dropdown': RhMenuDropdown;
  }
}
