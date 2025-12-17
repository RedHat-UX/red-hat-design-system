import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import styles from './rh-menu-item.css' with { type: 'css' };

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

  /**
   * Whether the link should open externally.
   * When true, the link opens in a new browser tab or window
   * and includes appropriate security attributes (`target="_blank"` and `rel="noopener noreferrer"`).
  */
  @property({ type: Boolean }) external = false;


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
    const target = this.external ? '_blank' : '_self';
    const rel = this.external ? 'noopener noreferrer' : null;

    const srLabel = this.external ?
      'Link, opens in a new tab'
      : 'Link';

    const label = html`
      <!-- 
        Use this slot to provide the text content inside menu item.
      -->
      <slot></slot>
    `;
    const content = this.href ?
      html`
        <div id="menu-link">
          <a id="item" href="${this.href}" target=${target} rel=${ifDefined(rel)}>
            ${label}
            ${!this.disabled ? html`<span class="visually-hidden">${srLabel}</span>` : ''}
          </a>
          ${this.external && !this.disabled ? html`<rh-icon set="ui" icon="external-link"></rh-icon>` : ''}
        </div>`
      : html`
        <div id="item">
        ${label}
        </div>
      `;

    return html`
      <div aria-disabled="${this.disabled}" class="menu-item-content">
        <div class="menu-item-label">
          <!-- 
            Slot for an icon displayed alongside the menu item.
            The icon will appear to the left of the menu item text in left-to-right (LTR) layouts.
          -->
          <slot name="icon"></slot>
          ${content}
        </div>
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
