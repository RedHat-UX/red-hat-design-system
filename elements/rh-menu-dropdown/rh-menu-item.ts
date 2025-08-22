import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import styles from './rh-menu-item.css';
import { property } from 'lit/decorators.js';

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
      return html`<a href="${this.href}" role="menuitem" tabindex="-1"><slot></slot></a>`;
    }

    return html`<div role="menuitem" tabindex="-1"><slot></slot></div>`;
  }

  focus() {
    const el = this.shadowRoot?.querySelector('[role="menuitem"]') as HTMLElement | null;
    el?.focus();
  }

  click() {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('item-selected', {
        detail: { text: this.textContent?.trim() },
        bubbles: true,
        composed: true
      }));
    }
  } 
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-menu-item': RhMenuItem;
  }
}