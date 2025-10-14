import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
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

  #internals = InternalsController.of(this);

  static override readonly shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  connectedCallback() {
    super.connectedCallback();
    this.#internals.role = 'none';
    this.tabIndex = -1;
  }

  render(): TemplateResult<1> {
    const label = html`
      <slot name="icon"></slot>
      <slot></slot>
    `;
    const content = this.href && !this.disabled ?
      html`<a class="menu-item" href="${this.href}">
      ${label}
    </a>`
      : html`<div aria-disabled="${this.disabled}" class="menu-item">
      ${label}
    </div>`;

    return html`
      <div tabindex="-1" role="menuitem" class="menu-item-content">
        ${content}
        <slot id="description" name="description"></slot>
      </div>
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
