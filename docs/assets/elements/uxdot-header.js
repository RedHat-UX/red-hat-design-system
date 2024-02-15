import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

class UxdotHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: var(--rh-color-surface-lighter, #f2f2f2);
      color: var(--rh-color-text-primary-on-light, #151515);
      margin-block-end: var(--rh-space-5xl, 80px);
      container-type: inline-size;
      container-name: header;
    }

    #container {
      display: block;
      position: sticky;
      top: -56px;
      z-index: 2;
      max-width: 1140px;
      padding-block-start: var(--rh-space-2xl, 32px);
      padding-inline: var(--rh-space-2xl, 32px);
    }

    #container:not(.has-subnav) {
      padding-block-end: var(--rh-space-2xl, 32px);
    }

    #container.has-search {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-areas: 'heading' 'search';
      gap: var(--rh-space-2xl, 32px);
    }

    [part="heading"] {
      grid-area: heading;
    }

    ::slotted([slot="search"]) {
      grid-area: search;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    ::slotted(h1) {
      font-family: var(--uxdot-heading-font-family, var(--rh-font-family-heading, RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif)) !important;
      font-size: var(--uxdot-heading-heading-size, var(--rh-font-size-heading-2xl, 3rem)) !important;
      font-weight: var(--uxdot-heading-font-weight, var(--rh-font-weight-heading-regular, 300)) !important;
      line-height: var(--uxdot-heading-line-height, var(--rh-line-height-heading, 1.3)) !important;
    }

    ::slotted([slot="subnav"]) {
      margin-block-start: var(--rh-space-2xl, 32px);
    }

    @container header (min-width: 992px) {
      #container {
        top: 100px;
        padding-inline: var(--rh-space-5xl, 80px);
        padding-block-start: var(--rh-space-5xl, 80px);
      }

      #container:not(.has-subnav) {
        padding-block-end: var(--rh-space-5xl, 80px);
      }

      #container.has-search {
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 'heading search';
      }
    }
  `;

  static properties = {
    hasSubNav: { type: Boolean },
    hasSearch: { type: Boolean },
  };

  constructor() {
    super();
    this.hasSubNav = false;
    this.hasSearch = false;
  }

  firstUpdated() {
    const searchSlot = this.shadowRoot.querySelector('slot[name="search"]');
    const subNavSlot = this.shadowRoot.querySelector('slot[name="subnav"]');
    const subNavNodes = subNavSlot.assignedNodes();
    const searchNodes = searchSlot.assignedNodes();
    this.hasSearch = searchNodes.length > 0;
    this.hasSubNav = subNavNodes.length > 0;
  }

  render() {
    const classes = classMap({ 'has-subnav': this.hasSubNav, 'has-search': this.hasSearch });
    return html`
      <div id="container" class=${classes} part="container">
        <slot part="heading"></slot>
        <slot name="search" part="search"></slot>
        <slot name="subnav" part="subnav"></slot>
      </div>
    `;
  }
}

customElements.define('uxdot-header', UxdotHeader);
