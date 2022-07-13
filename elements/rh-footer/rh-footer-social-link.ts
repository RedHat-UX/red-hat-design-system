import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import style from './rh-footer-social-link.css';

@customElement('rh-footer-social-link')
export class RhFooterSocialLink extends LitElement {
  static readonly styles = style;

  private logger = new Logger(this);

  @property() icon: string | null = null;

  constructor() {
    super();
    this.setAttribute('role', 'listitem');
  }

  render() {
    return html`<slot></slot>`;
  }

  updated() {
    this.updateLightdom();
  }

  private updateLightdom() {
    const oldDiv = this.querySelector('a');
    if (oldDiv) {
      const newDiv = oldDiv.cloneNode(true) as Element;
      // remove the _rendered content
      newDiv.querySelectorAll('[_rendered]').forEach(i => i.remove());
      newDiv.innerHTML = `<pfe-icon icon="${this.icon}">${newDiv.innerHTML}</pfe-icon>`;
      // add a11y settings
      /** @todo add logging that warns the user there is an empty label */
      newDiv.setAttribute('aria-label', newDiv.textContent || '');
      if (!newDiv.getAttribute('aria-label')) {
        this.logger.warn('Must add aria-label to links');
      }
      if (oldDiv.parentNode) {
        oldDiv.parentNode.replaceChild(newDiv, oldDiv);
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-footer-social-link': RhFooterSocialLink;
  }
}
