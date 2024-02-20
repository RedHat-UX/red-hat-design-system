import { LitElement, html, css } from 'lit';


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
      position: fixed !important;
      top: var(--_max-height);
    }

    [part="close-button"] {
      --_icon-size: var(--rh-size-icon-02, 24px);

      background: transparent;
      color: var(--rh-color-icon-subtle, #707070);
      border: none;
      width: var(--_icon-size);
      padding: var(--rh-space-sm, 4px);
      margin: var(--rh-space-md, 8px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: var(--_icon-size);
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
    }

    #container {
      position: relative;
      width: var(--uxdot-sidenav-width, 320px);
    }

    [part="overlay"] {
      --_gray-90-rgb: var(--rh-color-gray-90-rgb, 31 31 31);

      display: block;
      background-color: rgb(var(--_gray-90-rgb) / var(--rh-opacity-60, 60%));
      position: fixed;
      top: 0;
      height: 100dvh;
      width: 100dvw;
      z-index: -1;
    }

    @media (min-width: 992px) {
      :host(:not([open])) {
        display: block;
      }

      [part="close-button"] {
        display: none;
      }

      [part="overlay"] {
        display: none;
      }
    }
  `;

  #triggerElement = null;

  #closeElement = undefined;

  async connectedCallback() {
    super.connectedCallback();

    this.#triggerElement = (this.getRootNode()).getElementById(this.trigger);
    this.#triggerElement.addEventListener('click', this.#onTriggerClick.bind(this));
    this.addEventListener('click', this.#onClick.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#triggerElement.removeEventListener('click', this.#onTriggerClick.bind(this));
  }

  render() {
    return html`
      <div id="container" part="container">
        <nav part="nav">
          <button id="close-button"
              part="close-button"
              aria-label="Close dialog"
              @keydown=${this.onKeydownCloseButton}
              @click=${this.toggle}>
            <svg fill="currentColor" viewBox="0 80 352 352">
              <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
            </svg>
          </button>
          <slot></slot>
        </nav>
      </div>
      <div id="overlay" part="overlay" ?hidden=${!this.open}></div>
    `;
  }

  toggle() {
    this.open = !this.open;
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
