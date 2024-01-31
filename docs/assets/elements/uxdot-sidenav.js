import { LitElement, html, css } from 'lit';


/* ************* */
/* UXDOT-SIDENAV */
/* ************* */
class UxdotSideNav extends LitElement {
  static styles = css`
    :host {
      --_top: var(--uxdot-sidenav-top, 63px);
      --_zindex: var(--uxdot-sidenav-zindex, 2);
      --_padding-block-start: var(--rh-space-2xl, 32px);
      --_padding-block-end: var(--rh-space-3xl, 48px);

      padding-block-start: var(--_padding-block-start);
      padding-block-end: var(--_padding-block-end);
    }

    nav {
      position: sticky;
      top: calc(var(--_top) + var(--rh-space-2xl, 32px));
      max-height: calc(100dvh - (var(--_top) + var(--_padding-block-start) + var(--_padding-block-end)));
      overflow-y: auto;
    }

    ::slotted(ul) {
      list-style: none;
      margin: 0;
      padding: 0;
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

