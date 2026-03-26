import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import styles from './rh-menu-item-group.css' with { type: 'css' };

/**
 * A menu item group provides a labeled section within an `rh-menu`, allowing
 * authors to organize related `rh-menu-item` elements under a visible heading.
 * The heading is rendered as a presentational span, so screen reader users
 * navigate items via the parent menubar role. Authors SHOULD set the
 * `group-heading` attribute when grouping items to provide visual context.
 * Focus management is handled by the parent `rh-menu` roving tabindex.
 *
 * @summary A labeled group of related menu items
 *
 * @alias Menu Dropdown
 */
@customElement('rh-menu-item-group')
export class RhMenuItemGroup extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  /**
   * The visible heading text for this group of menu items.
   * When set, a label appears above the grouped items to provide
   * visual context for the section.
   */
  @property({ attribute: 'group-heading', reflect: true }) groupHeading?: string;

  render(): TemplateResult<1> {
    return html`
      <span ?hidden="${!this.groupHeading}" role="presentation">${this.groupHeading}</span>
      <!-- summary: Group items
           description: |
             Accepts \`rh-menu-item\` elements. Authors MUST NOT place
             non-interactive content in this slot. Screen reader users
             navigate grouped items via the parent menu keyboard
             controls. -->
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-menu-item-group': RhMenuItemGroup;
  }
}
