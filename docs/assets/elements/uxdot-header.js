import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

class UxdotHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      background-color: var(--rh-color-surface-lighter, #f2f2f2);
      color: var(--rh-color-text-primary-on-light, #151515);
      margin-block-end: var(--rh-space-5xl, 80px);
      container-type: inline-size;
      container-name: header;
    }

    #container {
      max-width: 1300px;
      padding-block-start: var(--rh-space-2xl, 32px);
      padding-inline: var(--rh-space-2xl, 32px);
    }

    #container:not(.has-subnav) {
      padding-block-end: var(--rh-space-2xl, 32px);
    }

    ::slotted(h1) {
      font-family: var(--rh-font-family-heading, RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);
      font-size: var(--rh-font-size-heading-2xl, 3rem);
      font-weight: var(--rh-font-weight-heading-regular, 300);
      line-height: var(--rh-line-height-heading, 1.3);
    }

    ::slotted([slot="subnav"]) {
      margin-block-start: var(--rh-space-2xl, 32px);
    }

    @container header (min-width: 992px) {
      #container {
        padding-inline: var(--rh-space-5xl, 80px);
        padding-block-start: var(--rh-space-5xl, 80px);
      }

      #container:not(.has-subnav) {
        padding-block-end: var(--rh-space-5xl, 80px);
      }
    }

  `;

  static properties = {
    hasSubNav: { type: Boolean },
  };

  constructor() {
    super();
    this.hasSubNav = false;
  }

  firstUpdated() {
    const slot = this.shadowRoot.querySelector('slot[name="subnav"]');
    const nodes = slot.assignedNodes();
    if (nodes.length > 0) {
      this.hasSubNav = true;
    }
  }

  render() {
    const classes = classMap({ 'has-subnav': this.hasSubNav });
    return html`
      <div id="container" class=${classes} part="container">
        <slot part="heading"></slot>
        <slot name="subnav" part="subnav"></slot>
      </div>
    `;
  }
}

customElements.define('uxdot-header', UxdotHeader);
