import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import styles from './rh-menu-dropdown.css';

/**
 * Menu Dropdown
 * @slot - Place element content here
 */
@customElement('rh-menu-dropdown')
export class RhMenuDropdown extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  render(): TemplateResult<1> {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-menu-dropdown': RhMenuDropdown;
  }
}
