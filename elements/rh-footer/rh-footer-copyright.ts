import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import style from './rh-footer-copyright.css';

const currentYear = new Date().getFullYear();

@customElement('rh-footer-copyright')
export class RhFooterCopyright extends LitElement {
  static readonly styles = style;

  render() {
    return html`<!-- summary: copyright text content (default slot)
         description: |
           Contains the copyright notice text. Defaults to "© [current year] Red Hat" if not provided.
           Override this slot to provide custom copyright text for your organization or application.

           **Usage guidelines:**
           - Include copyright symbol and year
           - Specify organization or entity name
           - Keep text concise and legally accurate
           - Consider using current year token for automatic updates -->
      <slot>&copy; ${currentYear} Red Hat</slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-footer-copyright': RhFooterCopyright;
  }
}

