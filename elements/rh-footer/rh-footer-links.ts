import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import style from './rh-footer-links.css' with { type: 'css' };

/**
 * Groups a set of navigation links under a heading within the footer.
 * Auto-wires `aria-labelledby` between the slotted heading and `<ul>` for
 * screen reader users. Used in both the main footer link columns and social
 * link regions. On mobile, these groups collapse into accordion panels.
 * Tab navigates through links; heading provides group context to assistive
 * technology. MUST contain a `<ul>` with links and SHOULD contain a heading
 * in the `header` slot.
 *
 * @summary Accessible link group with heading for footer navigation
 *
 * @slot header - Group heading element (h2-h5). Automatically linked via aria-labelledby.
 * @slot panel - Alternative content slot for accordion panel usage.
 * @slot - Default slot for the `<ul>` of links.
 */
@customElement('rh-footer-links')
export class RhFooterLinks extends LitElement {
  static readonly styles = style;

  /**
   * Visually hides the header slot content while preserving it for screen
   * readers. The `aria-labelledby` association remains active regardless
   * of this setting. USE when the heading should be accessible but not
   * visible (e.g. social links group). Defaults to false.
   */
  @property({
    type: Boolean,
    attribute: 'header-hidden',
    reflect: true,
  }) headerHidden = false;

  #mo = new MutationObserver(() => this.updateAccessibility());

  protected slots = new SlotController(this, 'header');

  connectedCallback() {
    super.connectedCallback();
    if (!isServer) {
      this.updateAccessibility();
    }
    this.#mo.observe(this, { childList: true });
  }

  updateAccessibility() {
    // ensure we've rendered to our shadowroot
    const header = this.querySelector('[slot="header"]');
    const ul = this.querySelector('ul');
    if (header && ul) {
      // ensure there is an id on the header slot
      header.id ||= getRandomId('rh-footer-links');
      ul.setAttribute('aria-labelledby', header.id);
    }
  }

  render() {
    return html`
      <div part="header" class="header">
        <!-- summary: link group heading
             description: |
               Heading element (h2-h5) labeling this link group. Automatically linked
               to the `<ul>` via `aria-labelledby` for screen reader users. Visually
               hidden when `header-hidden` attribute is set. -->
        <slot name="header"></slot>
      </div>
      <div part="default" class="default">
        <!-- summary: accordion panel content
             description: |
               Alternative content slot used when links are rendered inside an accordion
               panel on mobile viewports. Screen readers navigate panel content after
               the accordion header is expanded. -->
        <slot name="panel"></slot>
        <!-- summary: link list
             description: |
               Default slot for the `<ul>` of navigation links. Each link is focusable
               via Tab. The list SHOULD have `aria-labelledby` pointing to the header
               (auto-wired by the component). -->
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-footer-links': RhFooterLinks;
  }
}
