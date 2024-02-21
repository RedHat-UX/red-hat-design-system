import { LitElement, html, css } from 'lit';

class UxdotSkipNavigation extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('uxdot-navigation', UxdotSkipNavigation);
