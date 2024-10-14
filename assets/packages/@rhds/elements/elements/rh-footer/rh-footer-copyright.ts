import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import style from './rh-footer-copyright.css';

const currentYear = new Date().getFullYear();

@customElement('rh-footer-copyright')
export class RhFooterCopyright extends LitElement {
  static readonly styles = style;

  render() {
    return html`<slot>&copy; ${currentYear} Red Hat, Inc.</slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-footer-copyright': RhFooterCopyright;
  }
}

