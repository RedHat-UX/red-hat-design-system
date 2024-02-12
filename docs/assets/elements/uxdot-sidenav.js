import { LitElement, html, css } from 'lit';


/* ************* */
/* UXDOT-SIDENAV */
/* ************* */
class UxdotSideNav extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <nav part="nav">
        <slot></slot>
      </nav>
    `;
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

