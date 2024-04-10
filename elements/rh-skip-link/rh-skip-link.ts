import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import styles from './rh-skip-link.css';

/**
 * A skip link is used to skip repetitive content on a page.
 * It is hidden by default and can be activated by hitting
 * the "Tab" key after loading/refreshing a page.
 *
 * @summary Skip to the main content of a page
 *
 * @slot - Place an anchor tag with an `href` that targets an ID of the main content on the page.
 */
@customElement('rh-skip-link')
export class RhSkipLink extends LitElement {
  static readonly styles = [styles];

  render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-skip-link': RhSkipLink;
  }
}
