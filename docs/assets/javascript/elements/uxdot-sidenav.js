import { LitElement, html, css, isServer } from 'lit';

import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';

if (!isServer) {
  import('@patternfly/elements/pf-icon/pf-icon.js');
}

/* ************* */
/* UXDOT-SIDENAV */
/* ************* */
class UxdotSideNav extends LitElement {
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
  static properties = {
    open: { type: Boolean, reflect: true },
    trigger: { type: String },
  };

  static styles = css`
    :host {
      --_padding-start: var(--uxdot-sidenav-padding-start, var(--rh-space-2xl, 32px));
      --_padding-end: var(--uxdot-sidenav-padding-end, var(--rh-space-2xl, 32px));
      --_max-height: 100dvh;

      width: 100%;
      height: var(--_max-height);
      top: 0;
      z-index: var(--uxdot-sidenav-z-index, 2);
    }

    :host([open]) {
      display: block !important;
      position: fixed !important;
    }

    :host(:not([open])) {
      display: none;
    }

    [part="close-button"] {
      color: var(--rh-color-text-on-light, #151515);
      background-color: transparent;
      border: none;
      margin: 0;
      padding: var(--rh-space-md, 8px);
      line-height: 0 !important;
    }

    #container {
      position: relative;
      background-color: var(--rh-color-surface-lightest, #ffffff);
      width: auto;
    }

    #close-button-container {
      padding-inline: var(--rh-space-md, 8px);
      padding-block: var(--rh-space-lg, 16px);
      max-height: var(--uxdot-masthead-max-height, 72px);
    }

    #close-button:focus {
      outline: var(--rh-border-width-md, 2px) solid var(--rh-color-border-interactive-on-light, #0066cc);
      border-radius: var(--rh-border-radius-default, 3px);
    }

    [part="overlay"] {
      --_gray-90-rgb: var(--rh-color-gray-90-rgb, 31 31 31);

      display: none;
      background-color: rgb(var(--_gray-90-rgb) / var(--rh-opacity-60, 60%));
      position: fixed;
      top: 0;
      height: 100dvh;
      width: 100dvw;
      z-index: -1;
    }

    ::slotted(ul) {
      padding-inline: 0;
      padding-block-start: var(--_padding-start);
      padding-block-end: var(--_padding-end);
      list-style: none;
      margin-block: 0 !important;
      height: var(--_max-height);
      overflow-y: scroll;
      background-color: var(--rh-color-surface-lightest, #ffffff);
    }

    :host([open]) [part="overlay"] {
      display: block;
    }

    @media (min-width: 320px) {

      :host {
        --uxdot-sidenav-width: 320px;

        width: var(--uxdot-sidenav-width);
        box-shadow: var(--rh-box-shadow-lg, 0 6px 8px 2px rgba(21, 21, 21, 0.3));
      }

      #container {
        width: var(--uxdot-sidenav-width, 320px);
      }
    }

    @media (min-width: 576px) {
      #close-button-container {
        padding: var(--rh-space-lg, 16px);
      }
    }

    @media (min-width: 992px) {
      :host {
        --uxdot-siznav-z-index: 1;

        position: fixed;
        top: var(--uxdot-masthead-max-height, 72px);
        height: calc(var(--_max-height) - var(--uxdot-masthead-max-height, 72px));
        box-shadow: unset;
      }

      :host(:not([open])) {
        display: block;
      }

      #close-button-container {
        display: none;
      }

      :host([open]) [part="overlay"] {
        display: none;
      }
    }
  `;


  static isDropdown(element) {
    return element instanceof UxdotSideNavDropdown;
  }

  #triggerElement = null;

  #closeButton = null;

  #tabindex = new RovingTabindexController(this, {
    getItems: () => {
      if (isServer) {
        return [];
      }
      const slot = this.shadowRoot?.querySelector('slot').assignedElements({ flatten: true }) ?? [];
      return slot?.flatMap(slotted => {
        return Array.from(slotted.querySelectorAll(`uxdot-sidenav-dropdown > details > summary, uxdot-sidenav-item > a, details[open] uxdot-sidenav-dropdown-menu-item > a`)) ?? [];
      });
    },
  });

  async connectedCallback() {
    super.connectedCallback();

    this.#triggerElement = (this.getRootNode()).getElementById(this.trigger);
    if (!isServer) {
      this.#triggerElement.addEventListener('click', this.#onTriggerClick.bind(this));
      this.addEventListener('click', this.#onClick.bind(this));
      this.addEventListener('expand', this.#onExpandRequest);
      this.addEventListener('keydown', this.#onKeydown.bind(this));
      window.addEventListener('keyup', this.#onKeyup.bind(this));
      this.#tabindex.updateItems();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#triggerElement.removeEventListener('click', this.#onTriggerClick.bind(this));
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
            <pf-icon set="patternfly" icon="close" size="lg"></pf-icon>
          </button>
        </div>
        <nav part="nav" aria-label="Main menu">
          <slot @slotchange="${() => this.#tabindex.updateItems()}"></slot>
        </nav>
      </div>
      <div id="overlay" part="overlay" ?hidden=${!this.open}></div>
    `;
  }

  updated() {
    this.#closeButton = this.shadowRoot?.getElementById('close-button');
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

  #onTriggerClick(event) {
    event.preventDefault();
    this.toggle();
  }

  #onClick(event) {
    const path = event.composedPath();
    if (!path.includes(this)) {
      this.toggle();
    }
  }

  async #onExpandRequest(event) {
    if (UxdotSideNav.isDropdown(event.target)) {
      const detailsOpen = event.target.querySelector('details').hasAttribute('open');
      this.#tabindex.updateItems();
      this.#tabindex.setActiveItem(event.target.querySelector('summary'));
    }
  }

  #onKeydownCloseButton(event) {
    switch (event.key) {
      case 'Enter':
        event.preventDefault();
        this.toggle();
        return;
    }
  }

  #onKeydown(event) {
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

  #onKeyup(event) {
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

  #onTabKeyup(event) {
    const { target } = event;
    if (!this.contains(target)) {
      this.close(false);
    }
  }
}

/* ****************** */
/* UXDOT-SIDENAV-ITEM */
/* ****************** */
class UxdotSideNavItem extends LitElement {
  static styles = css`
    :host {
      display: block;
      border-inline-start:
        var(--rh-border-width-lg, 3px)
        solid
        transparent;
    }

    :host:hover {
      background: var(--rh-color-surface-lighter, #f2f2f2);
      border-inline-start-color: var(--rh-color-border-subtle-on-light, #c7c7c7);
    }

    :host([active]) {
      background: var(--rh-color-surface-lighter, #f2f2f2);
      border-inline-start-color: var(--rh-color-accent-brand-on-light, #ee0000);
    }

    ::slotted(a) {
      display: block;
      text-decoration: none;
      color: var(--rh-color-text-primary-on-light, #151515) !important;
      font-size: var(--rh-font-size-body-text-lg, 1.125rem);
      padding: var(--rh-space-lg, 16px) var(--rh-space-2xl, 32px);
    }

    ::slotted(a:hover) {
      background: var(--rh-color-surface-lighter, #f2f2f2);
      border-inline-start-color: var(--rh-color-border-subtle-on-light, #c7c7c7);
    }
  `;

  static properties = {
    active: { type: Boolean },
  };

  constructor() {
    super();
    this.active = false;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

/* *************************** */
/* UXDOT-SIDENAV-DROPDOWN */
/* *************************** */
class UxdotSideNavDropdown extends LitElement {
  static styles = css`
    :host {
      /* styles here */
      z-index: var(--uxdot-sidenav-z-index, 102);
    }
  `;

  static properties = {
    expanded: { state: true },
  };

  constructor() {
    super();
    this.expanded = false;
  }

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

  async #onClick(event) {
    const { target } = event;
    if (target instanceof HTMLAnchorElement) {
      return;
    }
    event.preventDefault();
    this.expanded = !this.expanded;
    this.querySelector('details').toggleAttribute('open', this.expanded);
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


/* *************************** */
/* UXDOT-SIDENAV-DROPDOWN-MENU */
/* *************************** */
class UxdotSideNavDropdownMenu extends LitElement {
  static styles = css`
    ::slotted(ul) {
      margin: 0 !important;
      list-style: none;
      padding-inline-start: var(--rh-space-2xl, 32px);
    }
  `;

  render() {
    return html`
      <slot></slot>
    `;
  }
}

/* ******************************** */
/* UXDOT-SIDENAV-DROPDOWN-MENU-ITEM */
/* ******************************** */
class UxdotSideNavDropdownMenuItem extends LitElement {
  static styles = css`
    ::slotted(a) {
      display: inline-block;
      padding: var(--rh-space-md, 8px) 0 var(--rh-space-md, 8px) var(--rh-space-lg, 16px);
      width: 100%;
      border-inline-start:
        var(--rh-border-width-lg, 3px)
        solid
        transparent;
      font-size: var(--rh-font-size-body-text-md, 1rem);
      text-decoration: none;
      color: var(--rh-color-text-primary-on-light, #151515) !important;
    }

    :host([active]) ::slotted(a) {
      background: var(--rh-color-surface-lighter, #f2f2f2);
      border-inline-start-color: var(--rh-color-accent-brand-on-light, #ee0000);
    }

    ::slotted(a:hover) {
      background: var(--rh-color-surface-lighter, #f2f2f2);
      border-inline-start-color: var(--rh-color-border-subtle-on-light, #c7c7c7);
    }

    /* TODO: Remove i believe this is misplaced */
    /* ::slotted(ul) {
      list-style: none;
      padding-inline: var(--rh-space-2xl, 32px);
    } */
  `;

  static properties = {
    active: { type: Boolean },
  };

  constructor() {
    super();
    this.active = false;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('uxdot-sidenav', UxdotSideNav);
customElements.define('uxdot-sidenav-item', UxdotSideNavItem);
customElements.define('uxdot-sidenav-dropdown', UxdotSideNavDropdown);
customElements.define('uxdot-sidenav-dropdown-menu', UxdotSideNavDropdownMenu);
customElements.define('uxdot-sidenav-dropdown-menu-item', UxdotSideNavDropdownMenuItem);
