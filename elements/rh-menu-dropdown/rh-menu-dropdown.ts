import { LitElement, html, isServer, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { queryAll } from 'lit/decorators/query-all.js';

import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';

import '@rhds/elements/rh-button/rh-button.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-menu/rh-menu.js';

import { RhMenuItem } from '../rh-menu/rh-menu-item.js';

import styles from './rh-menu-dropdown.css';

/** Fired when a user selects an action or link from the menu */
export class MenuDropdownSelectEvent extends Event {
  constructor(
    public selectedItem: RhMenuItem,
    public text: string
  ) {
    super('select', { bubbles: true, composed: true });
  }
}


/**
 * A menu dropdown presents a list of actions or links in a vertically stacked menu,
 * appearing when a user interacts with a toggle button.
 *
 * @summary A collapsible menu for presenting a list of options or actions
 *
 * @alias menu-dropdown
 * @slot - Place element content here
 */
@customElement('rh-menu-dropdown')
export class RhMenuDropdown extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];
  private static instances = new Set<RhMenuDropdown>();

  /**
   * whether the dropdown is currently open.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * Defines the visual style of the dropdown.
   * Setting it to 'borderless' removes the default border styling.
   */
  @property({ reflect: true }) variant: 'borderless' | null = null;

  /**
   * The 'compact' layout reduces spacing and add the rh-icon `ellipsis-vertical-fill`.
   */
  @property({ attribute: 'layout', reflect: true }) layout: 'compact' | null = null;

  /**
   * Disables user interaction with the dropdown. When true, the dropdown cannot
   * be opened or interacted with, and appears visually disabled.
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * Provides an accessible name for the dropdown, improving screen reader support.
   * This label is announced to assistive technologies to describe the purpose of
   * the compact menu dropdown.
  */
  @property({ attribute: 'accessible-label', reflect: true }) accessibleLabel = 'Toggle menu';

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

  /**
  * Moves focus to the currently active (focused) item.
  */
  focus() {
    this.#tabindex.items[this.#tabindex.atFocusedItemIndex]?.focus();
  }

  render(): TemplateResult<1> {
    return html`
    
      <div @focusout=${this.#onFocusOut} class="menu-dropdown-container">
        <button
          id="menu-toggle"
          type="button"
          aria-haspopup="menu"
          aria-expanded="${this.open}"
          @click="${this.#toggleMenu}"
          aria-controls="menu-list"
          aria-disabled="${this.disabled}"
          @keydown="${this.#onToggleKeydown}"
          class="${this.variant !== 'borderless' ? 'boxed' : ''}
           ${this.layout === 'compact' ? 'compact' : ''} 
           ${this.disabled ? 'disabled' : ''}
           ${this.open ? 'open' : ''}">
            ${this.layout === 'compact' ?
              html`<rh-icon set="ui" accessible-label=${this.accessibleLabel} icon="ellipsis-vertical-fill"></rh-icon>`
              : html` 
              <span class="info-section"> 
                <!-- Use this slot for the toggle label. Keep toggle labels short and succinct. -->
                <slot name="toggle-label"></slot>
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
        <div
          id="menu-list"
          @click=${this.#onSelect}
          @keydown=${this.#onKeyDown}
        >
          <rh-menu role="menu" aria-labelledby="menu-toggle">
            <!-- 
              Use this slot to provide the menu content. Use the "rh-menu" component 
              for the menu panel, and use "rh-menu-items" to define the individual menu items.
              To organize menu items into groups, use the "rh-menu-item-group" component.
            -->
            <slot></slot>
          </rh-menu>
        </div>
      </div>
    
    `;
  }

  #toggleMenu() {
    if (!this.disabled) {
      this.open = !this.open;

      if (this.open) {
        this.updateComplete.then(() => {
          this.#focusFirstItem();
          this.#positionPopover();
        });
      }
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
    return Array.from(this.querySelectorAll('rh-menu-item')) as HTMLElement[];
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
    this.dispatchEvent(new MenuDropdownSelectEvent(
      target,
      target.textContent ? target.textContent : ''
    ));
    if (target.href) {
      if (target.external) {
        window.open(target.href, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = target.href;
      }
    }
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
