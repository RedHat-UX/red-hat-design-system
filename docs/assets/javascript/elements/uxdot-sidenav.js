import { LitElement, html, css } from 'lit';

import '@patternfly/elements/pf-icon/pf-icon.js';

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
    :host([open]) {
      display: block !important;
      top: var(--_max-height);
      position: fixed !important;
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

    :host([open]) [part="overlay"] {
      display: block;
    }

    @media (min-width: 320px) {
      #container {
        width: var(--uxdot-sidenav-width, 320px);
      }
    }

    @media (min-width: 567px) {
      #close-button-container {
        padding: var(--rh-space-lg, 16px);
      }
    }

    @media (min-width: 992px) {
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

  #triggerElement = null;

  #closeButton = null;

  async connectedCallback() {
    super.connectedCallback();

    this.#triggerElement = (this.getRootNode()).getElementById(this.trigger);
    this.#triggerElement.addEventListener('click', this.#onTriggerClick.bind(this));
    this.addEventListener('click', this.#onClick.bind(this));
    this.addEventListener('keydown', this.#onKeydown.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#triggerElement.removeEventListener('click', this.#onTriggerClick.bind(this));
  }

  render() {
    return html`
      <div id="container" part="container">
        <div id="close-button-container">
          <button id="close-button"
              part="close-button"
              aria-label="Close dialog"
              @keydown=${this.onKeydownCloseButton}
              @click=${this.toggle}>
            <pf-icon set="patternfly" icon="close" size="lg"></pf-icon>
          </button>
        </div>
        <nav part="nav">
          <slot></slot>
        </nav>
      </div>
      <div id="overlay" part="overlay" ?hidden=${!this.open}></div>
    `;
  }

  updated() {
    this.#closeButton = this.shadowRoot?.getElementById('close-button');
  }

  async toggle() {
    this.open = !this.open;
    await this.updateComplete;

    if (this.open) {
      this.#closeButton?.focus();
    } else {
      this.#triggerElement?.focus();
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
}

/* ****************** */
/* UXDOT-SIDENAV-ITEM */
/* ****************** */
class UxdotSideNavItem extends LitElement {
  static styles = css`
    :host {
      /* styles here */
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

  render() {
    return html`
      <slot></slot>
    `;
  }
}


/* *************************** */
/* UXDOT-SIDENAV-DROPDOWN-MENU */
/* *************************** */
class UxdotSideNavDropdownMenu extends LitElement {
  static styles = css`
    :host {
      /* styles here */
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
    ::slotted(ul) {
      list-style: none;
      padding-inline: var(--rh-space-2xl, 32px);
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

customElements.define('uxdot-sidenav', UxdotSideNav);
customElements.define('uxdot-sidenav-item', UxdotSideNavItem);
customElements.define('uxdot-sidenav-dropdown', UxdotSideNavDropdown);
customElements.define('uxdot-sidenav-dropdown-menu', UxdotSideNavDropdownMenu);
customElements.define('uxdot-sidenav-dropdown-menu-item', UxdotSideNavDropdownMenuItem);
