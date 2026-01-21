import { html, isServer, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import { isHeadingElement } from '../../lib/functions.js';

import styles from './rh-navigation-secondary-menu-section.css';

/**
 * A menu section which auto upgrades accessibility for headers and sibling list
 * @summary 'A menu section which auto upgrades accessibility for headers and sibling list'
 */
@customElement('rh-navigation-secondary-menu-section')
export class RhNavigationSecondaryMenuSection extends LitElement {
  static readonly styles = [styles];

  #logger = new Logger(this);

  connectedCallback(): void {
    super.connectedCallback();
    if (!isServer) {
      this.#updateAccessibility();
    }
  }

  render() {
    return html`
      <!-- summary: menu section container
           description: |
             The semantic container for a menu section, grouping related navigation links
             under a common header. This part corresponds to a \`<section>\` element that
             provides structure and automatic accessibility enhancements.

             **Styling:**
             - Use this part to customize individual menu section appearance
             - Controls spacing and layout of header, links, and CTA
             - Sections are organized in a grid when multiple sections exist
             - Automatically applies aria-labelledby to link lists

             **Accessibility:**
             - Automatically associates heading with list using aria-labelledby
             - Generates IDs for headers if not present
             - Ensures semantic structure for screen reader users

             @see [Navigation](https://ux.redhat.com/elements/navigation/) documentation -->
      <section part="container">
        <!-- Adds a header tag to section, expects \`<h1> | <h2> | <h3> | <h4> | <h5> | <h6>\` element -->
        <slot name="header"></slot>
        <!-- Adds a ul tag to section, expects \`<ul> | <ol>\` element -->
        <slot name="links"></slot>
        <!-- Adds a section level CTA, expects \`<rh-cta>\` element -->
        <slot name="cta"></slot>
      </section>
    `;
  }

  /**
   * Finds all list elements `<ul>, <ol>` and if the list does not have an
   * `aria-labelledby` attribute finds the previousElementSibling header
   * `<h1-6>` tags if available assigns an id or uses preexisting id
   * to that header, then uses that id to the list on the `aria-labelledby`.
   */
  #updateAccessibility() {
    const lists = this.querySelectorAll(':is([slot="links"]):is(ul, ol)');

    for (const list of lists) {
      if (!list.hasAttribute('aria-labelledby')) {
        const header = isHeadingElement(list.previousElementSibling) ?
          list.previousElementSibling
          : null;
        if (!header) {
          return this.#logger.warn(
            'This links set doesn\'t have a valid header associated with it.'
          );
        } else {
          // add an ID to the header if we need it
          header.id ||= getRandomId('rh-navigation-secondary-menu-section');
          // add that header id to the aria-labelledby tag
          list.setAttribute('aria-labelledby', header.id);
        }
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-secondary-menu-section': RhNavigationSecondaryMenuSection;
  }
}
