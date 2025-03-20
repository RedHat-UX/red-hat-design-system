import type { IconNameFor } from '@rhds/icons';

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import style from './rh-footer-social-link.css';

/**
 * Displays a linked icon to a social media property
 * @summary Displays a linked icon to a social media property
 * @slot    - Add an anchor tag linking to a social media property
*/

@customElement('rh-footer-social-link')
export class RhFooterSocialLink extends LitElement {
  static readonly styles = style;

  /** Icon for this social link e.g. `'facebook'` */
  @property() icon?: IconNameFor<'social'>;

  #logger = new Logger(this);

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'listitem');
  }

  render() {
    return html`<slot></slot>`;
  }

  updated() {
    const oldDiv = this.querySelector('a');
    if (oldDiv) {
      const newDiv = oldDiv.cloneNode(true) as Element;
      // remove the _rendered content
      newDiv.querySelectorAll('[_rendered]').forEach(i => i.remove());
      // NB: icons are restricted to social set, so as not to require a minor release
      // rh-icon is slated to deal with this problem in-house
      newDiv.innerHTML =
        `<rh-icon icon="${this.icon ?? ''}" set="social" loading="eager">${newDiv.innerHTML}</rh-icon>`;
      // add a11y settings
      newDiv.setAttribute('aria-label', newDiv.textContent || '');
      if (!newDiv.getAttribute('aria-label')) {
        this.#logger.warn('Must add aria-label to links');
      }
      oldDiv.parentNode?.replaceChild(newDiv, oldDiv);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-footer-social-link': RhFooterSocialLink;
  }
}
