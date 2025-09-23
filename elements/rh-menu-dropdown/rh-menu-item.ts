import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import styles from './rh-menu-item.css';

/**
 * Menu Dropdown Item
 * @alias Menu Dropdown Item
 */
@customElement('rh-menu-item')
export class RhMenuItem extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) href = '';

  render(): TemplateResult<1> {
    const content = this.href && !this.disabled ?
    html`<a class="menu-item" href="${this.href}" role="menuitem" tabindex="-1">
      <slot name="icon"></slot>
      <slot></slot>
    </a>`
    : html`<div aria-disabled="${this.disabled}" class="menu-item" role="menuitem" tabindex="-1">
      <slot name="icon"></slot>
      <slot></slot>
    </div>`;

    return html`
      ${content}
      <slot id="description" name="description"></slot>
    `;
  }

  focus() {
    const el = this.shadowRoot?.querySelector('[role="menuitem"]') as HTMLElement | null;
    el?.focus();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-menu-item': RhMenuItem;
  }
}
