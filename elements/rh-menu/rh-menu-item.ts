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

  /**
   * Whether the menu item is disabled.
   * Disabled items are not interactive and are visually indicated as such.
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * Specifies the destination URL for the menu item.
   * If specified, the menu item behaves as a hyperlink.
   */
  @property({ type: String }) href = '';

  #internals = InternalsController.of(this);

  static override readonly shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
  };

  connectedCallback() {
    super.connectedCallback();
    this.#internals.role = 'menuitem';
    this.#internals.ariaDisabled = this.disabled.toString();
  }

  render(): TemplateResult<1> {
    const label = html`
      <!-- 
        Slot for an icon displayed alongside the menu item.
        The icon will appear to the left of the menu item text in left-to-right (LTR) layouts.
      -->
      <slot name="icon"></slot>
      <!-- 
        Use this slot to provide the text content inside menu item.
      -->
      <slot></slot>
    `;
    const content = this.href ?
      html`<a class="menu-item" href="${this.href}">
      ${label}
    </a>`
      : html`<div class="menu-item">
      ${label}
    </div>`;

    return html`
      <div aria-disabled="${this.disabled}" class="menu-item-content">
        ${content}
        <!-- 
          Use this slot to provide the description inside menu item.
        -->
        <slot id="description" name="description"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-menu-item': RhMenuItem;
  }
}
