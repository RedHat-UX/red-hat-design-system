import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { pfelement } from '@patternfly/pfe-core/decorators.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import styles from './rh-secondary-nav-menu-section.css';

// TODO: Rh-footer uses this method as well, should be abstracted into functions. (pfe-core/functions?)
function isHeader(tagName: string) {
  return !!tagName.match(/^H[1-6]$/i);
}

@customElement('rh-secondary-nav-menu-section') @pfelement()
export class RhSecondaryNavMenuSection extends LitElement {
  static readonly styles = [styles];

  #logger = new Logger(this);

  connectedCallback(): void {
    super.connectedCallback();

    this.#updateAccessibility();
  }

  render() {
    return html`
      <section>
        <slot name="header"></slot>
        <slot name="links"></slot>
        <slot name="cta"></slot>
      </section>
    `;
  }

  #updateAccessibility() {
    const listSelector = ':is([slot="links"]):is(ul)';

    for (const list of this.querySelectorAll(listSelector)) {
      if (!list.hasAttribute('aria-labelledby')) {
        const header = isHeader(list.previousElementSibling?.tagName ?? '') ? list.previousElementSibling : null;
        if (!header) {
          return this.#logger.warn('This links set doesn\'t have a valid header associated with it.');
        } else {
          // add an ID to the header if we need it
          header.id ||= getRandomId('rh-secondary-nav-menu-section');
          // add that header id to the aria-labelledby tag
          list.setAttribute('aria-labelledby', header.id);
        }
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-secondary-nav-menu-section': RhSecondaryNavMenuSection;
  }
}
