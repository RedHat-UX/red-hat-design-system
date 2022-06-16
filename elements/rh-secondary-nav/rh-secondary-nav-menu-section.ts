import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import { isHeadingElement } from '../../lib/functions.js';

import styles from './rh-secondary-nav-menu-section.css';

/**
 * @summary 'A menu secion which auto upgrades header and sibling link list accessibility attributes'
 *
 * @slot header     - Adds a header tag to section, expects `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>`
 * @slot links      - Adds a ul tag to section, expects `<ul>, <ol>`
 * @slot cta        - Adds a section level CTA, expects `<pfe-cta>`
 *
 * @csspart base    - container, <section> element
**/
@customElement('rh-secondary-nav-menu-section')
export class RhSecondaryNavMenuSection extends LitElement {
  static readonly styles = [styles];

  #logger = new Logger(this);

  connectedCallback(): void {
    super.connectedCallback();

    this.#updateAccessibility();
  }

  render() {
    return html`
      <section part="container">
        <slot name="header"></slot>
        <slot name="links"></slot>
        <slot name="cta"></slot>
      </section>
    `;
  }

  /**
   * Finds all list elements `<ul>, <ol>` and if the list does not have an
   * `aria-labelledby` attribute finds the previousElementSibling header
   * `<h1-6>` tags if avaialble assigns an id or uses preexisting id
   * to that header, then uses that id to the list on the `aria-lablledby`.
   * @returns {void}
   */
  #updateAccessibility(): void {
    const lists = this.querySelectorAll(':is([slot="links"]):is(ul, ol)');

    for (const list of lists) {
      if (!list.hasAttribute('aria-labelledby')) {
        const header = isHeadingElement(list.previousElementSibling) ? list.previousElementSibling : null;
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
