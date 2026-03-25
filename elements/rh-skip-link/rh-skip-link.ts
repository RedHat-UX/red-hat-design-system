import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import { property } from 'lit/decorators/property.js';

import styles from './rh-skip-link.css' with { type: 'css' };

/**
 * A skip link provides keyboard and screen reader users a way to bypass
 * repetitive navigation and jump directly to main content. Use it when
 * a page has many navigation items preceding the main content area.
 * It SHOULD be the first focusable element on the page, and authors
 * MUST provide either an `href` attribute or a slotted `<a>` element.
 *
 * @summary Allows users to skip repetitive navigation for accessibility.
 *
 * @slot - An anchor element (`<a>`) linking to the main content area.
 *         When `href` is set on the host, the slot accepts plain text instead.
 *         Slotted anchors MUST have an accessible name for screen readers,
 *         and SHOULD use a descriptive label like "Skip to main content".
 *
 * @alias skip-link
 */
@customElement('rh-skip-link')
export class RhSkipLink extends LitElement {
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  static readonly styles = [styles];

  /**
   * URL fragment (e.g. `#main-content`) identifying the target element to
   * skip to. When set, the component renders its own anchor in shadow DOM
   * and the default slot accepts plain text for the link label.
   */
  @property({ reflect: true }) href?: string;

  render() {
    const slot = html`<!-- An anchor element targeting the main page content,
         or plain text when the \`href\` attribute is set on the host.
         Slotted anchors MUST have an accessible name for screen readers. --><slot></slot>`;
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
