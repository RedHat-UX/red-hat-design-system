import { LitElement, html, isServer, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import styles from './rh-menu-dropdown.css';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
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
  private static instances = new Set<RhMenuDropdown>();
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ attribute: 'variant', reflect: true }) variant: 'open' | null = null;
  @property({ attribute: 'layout', reflect: true }) layout: 'compact' | null = null;
  @query('#menu-toggle') menuToggleButton!: HTMLElement;
  @query('#menu-list') menuList!: HTMLElement;
  @query('slot') slotElement!: HTMLSlotElement;

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
    this.validateSlotContent();
    this.slotElement.addEventListener('slotchange', () => this.validateSlotContent());
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

  private validateSlotContent() {
    const assignedElements = this.slotElement.assignedElements({ flatten: true });

    assignedElements.forEach(el => {
      if (!this.isValidMenuDropdownChild(el)) {
        // eslint-disable-next-line no-console
        console.error(`Invalid slotted element:`, el);
        // el.remove();
      }
    });
  }

  private isValidMenuDropdownChild(el: Element): boolean {
    if ( el instanceof HTMLHRElement) {
      el.inert = true;
    }
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
          @keydown="${this.onToggleKeydown}"
          class=${this.variant !== 'open' ? 'boxed' : ''}>
            ${ this.layout === 'compact' ? 
              html`<rh-icon set="ui" icon="ellipsis-vertical-fill"></rh-icon>`: 
              html` 
              <span class="info-section"> 
                <slot name="label"></slot>
              </span>
              <span class="action-icon"> 
                ${ this.open ? 
                  html`<rh-icon set="ui" icon="caret-up"></rh-icon>` 
                  : html`<rh-icon set="ui" icon="caret-down"></rh-icon>`
                }
              </span>
              `
            }
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
      this.updateComplete.then(() => {
        this.focusFirstItem();
        this.positionPopover();
      });
    }
  }

  positionPopover() {
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
    if (event.target instanceof RhMenuItem) {
      this.open = false;
      this.menuToggleButton.focus();
      this.dispatchEvent(new CustomEvent('select', {
        detail: { text: event.target.textContent },
        bubbles: true,
        composed: true,
      }));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-menu-dropdown': RhMenuDropdown;
  }
}
