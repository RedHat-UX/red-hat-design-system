import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import { property } from 'lit/decorators/property.js';

import styles from './rh-skip-link.css' with { type: 'css' };

/**
 * A skip link is used to skip repetitive content on a page.
 * It is hidden by default and can be activated by hitting
 * the "Tab" key after loading/refreshing a page.
 *
 * @summary Skip to the main content of a page
 *
 * @alias skip-link
 */
@customElement('rh-skip-link')
export class RhSkipLink extends LitElement {
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  static readonly styles = [styles];

  @property({ reflect: true }) href?: string;

  render() {
    const slot = html`<!--
        An anchor tag targeting the main page content by id hash.
        Or, if the \`href\` attribute is set, the text of the link.
    --><slot></slot>`;
    return this.href ?
        html`<a id="container" href="${this.href}">${slot}</a>`
      : html`<div id="container">${slot}</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-skip-link': RhSkipLink;
  }
}
