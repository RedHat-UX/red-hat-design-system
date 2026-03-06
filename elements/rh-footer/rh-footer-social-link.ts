import type { IconNameFor } from '@rhds/icons';

import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import style from './rh-footer-social-link.css' with { type: 'css' };


/**
 * Renders a single social media icon link within the footer social links
 * region. Sets `role="listitem"` on connection for accessible list semantics.
 * MUST provide `accessible-label` for screen readers (e.g. "LinkedIn").
 * USE `icon` to select from the `social` icon set, or slot a custom icon.
 * Tab navigates between social links; `aria-label` on the anchor announces
 * the platform name to assistive technology.
 *
 * @summary Single social media icon link for the footer
 *
 * @slot - Optional custom icon content. Overrides the `icon` property rendering.
 */
@customElement('rh-footer-social-link')
export class RhFooterSocialLink extends LitElement {
  static readonly styles = style;

  /**
   * Name of the social media icon from the `social` icon set (e.g.
   * `'facebook'`, `'twitter'`, `'linkedin'`). Renders an `<rh-icon>`
   * in the default slot if no custom icon is slotted. Defaults to undefined.
   */
  @property() icon?: IconNameFor<'social'>;

  /**
   * URL of the social media profile or page. Applied to the anchor element's
   * `href` attribute. MUST be a valid URL. Defaults to undefined.
   */
  @property() href?: string;

  /**
   * Accessible text label announced by screen readers for the social link
   * (e.g. "LinkedIn", "YouTube"). Applied as `aria-label` on the anchor.
   * MUST be provided for accessibility. Defaults to undefined.
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'listitem');
  }

  render() {
    return html`
      <a href="${ifDefined(this.href)}" aria-label="${ifDefined(this.accessibleLabel)}">
        <!-- summary: custom social icon content
             description: |
               Optional slot for a custom icon when the built-in \`<rh-icon>\` social set
               does not include the desired platform. Screen readers rely on the parent
               anchor's \`aria-label\` rather than this icon content. -->
        <slot>${this.icon ? html`<rh-icon set="social" icon="${this.icon}"></rh-icon>` : ''}</slot>
      </a>
    `;
  }

  updated() {
    let oldDiv;
    if (!isServer && (oldDiv = this.querySelector('a'))) {
      const newDiv = oldDiv.cloneNode(true) as Element;
      // remove the _rendered content
      newDiv.querySelectorAll('[_rendered]').forEach(i => i.remove());
      // NB: icons are restricted to social set, so as not to require a minor release
      // rh-icon is slated to deal with this problem in-house
      newDiv.innerHTML =
        `<rh-icon icon="${this.icon ?? ''}" set="social" loading="eager">${newDiv.innerHTML}</rh-icon>`;
      // add a11y settings
      newDiv.setAttribute('aria-label', newDiv.textContent || '');
      oldDiv.parentNode?.replaceChild(newDiv, oldDiv);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-footer-social-link': RhFooterSocialLink;
  }
}
