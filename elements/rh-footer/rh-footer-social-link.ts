import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import style from './rh-footer-social-link.css';

@customElement('rh-footer-social-link')
export class RhFooterSocialLink extends LitElement {
  static readonly styles = style;

  @property() icon?: string;

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
      /* Temporary fix for x-twitter icon and pf-icon not supporting that icon given font awesome v5 */
      if (this.icon === 'twitter') {
        newDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" height="24" width="24" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg><span hidden>${newDiv.innerHTML}</span>`;
      } else {
        // NB: icons are restricted to fab set, so as not to require a minor release
        // rh-icon is slated to deal with this problem in-house
        newDiv.innerHTML = `<pf-icon icon="${this.icon ?? ''}"
                                    set="fab"
                                    loading="eager">${newDiv.innerHTML}</pf-icon>`;
      }
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
