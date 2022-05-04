import { html, css, LitElement } from 'lit';

export class RhFooterCopyright extends LitElement {
  static get tag() {
    return 'rh-footer-copyright';
  }

  static get styles() {
    return css`
      :host {
        flex: 1 1 auto;
        display: block;
        width: 100%;
      }
    `;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return html` <slot>&copy; ${currentYear} Red Hat, Inc.</slot> `;
  }
}

customElements.define(RhFooterCopyright.tag, RhFooterCopyright);
