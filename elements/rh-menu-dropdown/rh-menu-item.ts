import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import styles from './rh-menu-item.css';

/**
 * Menu Dropdown
 * @alias Menu Dropdown
 */
@customElement('rh-menu-item')
export class RhMenuItem extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) href = '';

  render(): TemplateResult<1> {
    if (this.href && !this.disabled) {
      return html`<a class="menu-item" href="${this.href}" role="menuitem" tabindex="-1"><slot></slot></a>`;
    }

    return html`<div class="menu-item" role="menuitem" tabindex="-1"><slot></slot></div>`;
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
