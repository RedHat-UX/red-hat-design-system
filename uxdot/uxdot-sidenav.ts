import { LitElement, html, isServer } from 'lit';

import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './uxdot-sidenav.css';
import schemeStyles from '@rhds/tokens/css/color-scheme.css.js';
import itemStyles from './uxdot-sidenav-item.css';
import dropdownStyles from './uxdot-sidenav-dropdown.css';
import dropdownMenuStyles from './uxdot-sidenav-dropdown-menu.css';
import dropdownMenuItemStyles from './uxdot-sidenav-dropdown-menu-item.css';

@customElement('uxdot-sidenav')
export class UxdotSideNav extends LitElement {
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  static styles = [styles, schemeStyles];

  @property({ type: Boolean, reflect: true }) open = false;

  @property() trigger?: string;

  #triggerElement: HTMLElement | null = null;

  #closeButton: HTMLElement | null = null;

  async connectedCallback() {
    super.connectedCallback();

    const root = this.getRootNode() as Document | ShadowRoot;
    if (this.trigger) {
      this.#triggerElement = root.getElementById(this.trigger);
    }
    if (!isServer) {
      this.#triggerElement?.addEventListener('click', this.#onTriggerClick.bind(this));
      this.addEventListener('click', this.#onClick.bind(this));
      this.addEventListener('keydown', this.#onKeydown.bind(this));
      window.addEventListener('keyup', this.#onKeyup.bind(this));
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#triggerElement?.removeEventListener('click', this.#onTriggerClick.bind(this));
    window.removeEventListener('keyup', this.#onKeyup);
  }

  render() {
    return html`
      <div id="container" part="container">
        <div id="close-button-container">
          <button id="close-button"
              part="close-button"
              aria-label="Close dialog"
              @keydown=${this.#onKeydownCloseButton}
              @click=${this.toggle}>
            <rh-icon set="ui" icon="close" size="lg"></rh-icon>
          </button>
        </div>
        <nav part="nav" aria-label="Main menu">
          <slot></slot>
        </nav>
      </div>
      <div id="overlay" part="overlay" ?hidden=${!this.open}></div>
    `;
  }

  updated() {
    this.#closeButton = this.shadowRoot?.getElementById('close-button') ?? null;
  }

  async toggle(trapFocus = true) {
    this.open = !this.open;
    await this.updateComplete;

    if (trapFocus) {
      if (this.open) {
        this.#closeButton?.focus();
      } else {
        this.#triggerElement?.focus();
      }
    }
  }

  #onTriggerClick(event: Event) {
    event.preventDefault();
    this.toggle();
  }

  #onClick(event: Event) {
    const path = event.composedPath();
    if (!path.includes(this)) {
      this.toggle();
    }
  }

  #onKeydownCloseButton(event: KeyboardEvent) {
    switch (event.key) {
      case 'Enter':
        event.preventDefault();
        this.toggle();
        return;
    }
  }

  #onKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape': {
        if (!this.open) {
          return;
        }
        this.toggle();
        break;
      }
      default:
        break;
    }
  }

  #onKeyup(event: KeyboardEvent) {
    switch (event.key) {
      case 'Tab':
        this.#onTabKeyup(event);
        break;
      default:
        break;
    }
  }

  close(trapFocus = true) {
    if (!this.open) {
      return;
    }
    this.toggle(trapFocus);
  }

  #onTabKeyup(event: KeyboardEvent) {
    const { target } = event;
    if (target instanceof Node && !this.contains(target)) {
      this.close(false);
    }
  }
}

@customElement('uxdot-sidenav-item')
export class UxdotSideNavItem extends LitElement {
  static styles = [itemStyles];

  @property({ type: Boolean, reflect: true })
  active = false;

  @property()
  href: string | undefined;

  render() {
    const { active } = this;
    return html`
      <a class="${classMap({ active })}" href="${this.href}"><slot></slot></a>
    `;
  }
}

@customElement('uxdot-sidenav-dropdown')
export class UxdotSideNavDropdown extends LitElement {
  static styles = [dropdownStyles];

  @property({ type: Boolean, reflect: true })
  expanded = false;

  connectedCallback() {
    super.connectedCallback();
    if (!isServer) {
      this.addEventListener('click', this.#onClick);
    }
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

  async #onClick(event: Event) {
    if (!event.composedPath().some(node => node instanceof HTMLAnchorElement)) {
      event.preventDefault();
      this.expanded = !this.expanded;
      this.querySelector('details')?.toggleAttribute('open', this.expanded);
      // trigger change event which evokes the mutation on this.expanded
      this.dispatchEvent(new CustomEvent('expand', {
        bubbles: true,
        composed: true,
        detail: {
          expanded: this.expanded,
          toggle: this,
        },
      }));
    }
  }
}

@customElement('uxdot-sidenav-dropdown-menu')
export class UxdotSideNavDropdownMenu extends LitElement {
  static styles = [dropdownMenuStyles];

  render() {
    return html`
      <slot></slot>
    `;
  }
}

@customElement('uxdot-sidenav-dropdown-menu-item')
export class UxdotSideNavDropdownMenuItem extends UxdotSideNavItem {
  static styles = [itemStyles, dropdownMenuItemStyles];
}
