import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import styles from './rh-menu-item-group.css' with { type: 'css' };

/**
 * Menu Dropdown Item Group
 * @alias Menu Dropdown
 */
@customElement('rh-menu-item-group')
export class RhMenuItemGroup extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];
  @property({ attribute: 'group-heading', reflect: true }) groupHeading?: string;

  render(): TemplateResult<1> {
    return html`
      <span ?hidden="${!this.groupHeading}" role="presentation">${this.groupHeading}</span>
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-menu-item-group': RhMenuItemGroup;
  }
}
