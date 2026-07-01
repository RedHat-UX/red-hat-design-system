import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import styles from './rh-menu-item.css' with { type: 'css' };

/**
 * A menu item provides a single action or link within an `rh-menu`.
 * It renders with the ARIA `menuitem` role for screen reader users.
 * Authors must provide visible text content in the default slot.
 * When `href` is set, the item behaves as a hyperlink; authors should
 * set the `external` attribute for links that open in a new tab. Focus
 * is managed by the parent `rh-menu` via roving tabindex, so keyboard
 * users can navigate items with Arrow keys.
 *
 * @summary A single action or link within a menu
 *
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
      <!-- summary: Menu item label
           description: |
             Inline text label for the menu item. Must contain visible
             text for screen reader accessibility. -->
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
          <!-- summary: Icon slot
               description: |
                 An icon displayed alongside the menu item label.
                 Appears before the text in LTR layouts. Screen reader
                 users should receive an accessible label via
                 the icon element itself. -->
          <slot name="icon"></slot>
          ${content}
        </div>
        <!-- summary: Description slot
             description: |
               Supplementary description text displayed below the menu
               item label. Screen reader users will perceive this as
               additional context for the menu item. -->
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
