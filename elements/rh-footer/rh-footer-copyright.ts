import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import style from './rh-footer-copyright.css' with { type: 'css' };

const currentYear = new Date().getFullYear();

/**
 * Copyright notice for `<rh-footer-universal>`. Use when the footer
 * requires a legal copyright line. Authors should avoid overriding.
 *
 * @summary Copyright notice with auto-updating year
 */
@customElement('rh-footer-copyright')
export class RhFooterCopyright extends LitElement {
  static readonly styles = style;

  render() {
    return html`<!-- summary: copyright text content (default slot)
         description: |
           Expects inline text containing the copyright notice. Defaults to
           "© [current year] Red Hat" if not provided. Screen readers announce
           this text within the footer landmark; it is not focusable via Tab.
           Override for a different entity or localized text. -->
      <slot>&copy; ${currentYear} Red Hat</slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-footer-copyright': RhFooterCopyright;
  }
}

