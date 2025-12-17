import type { IconNameFor } from '@rhds/icons';

import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import style from './rh-footer-social-link.css' with { type: 'css' };


/**
 * Social media links for Red Hat Footer
 */
@customElement('rh-footer-social-link')
export class RhFooterSocialLink extends LitElement {
  static readonly styles = style;

  /** Icon for this social link e.g. `'facebook'` */
  @property() icon?: IconNameFor<'social'>;

  /** Social link address */
  @property() href?: string;

  /** Textual label for the social link e.g. "Instagram" */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'listitem');
  }

  render() {
    return html`
      <a href="${ifDefined(this.href)}" aria-label="${ifDefined(this.accessibleLabel)}">
        <!-- Optional icon for social link. Use only when suitable icon is unavailable with \`<rh-icon>\` -->
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
