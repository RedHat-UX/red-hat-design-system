import { html, LitElement, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import style from './rh-jump-links-list.css';

/**
 */
@customElement('rh-jump-links-list')
export class RhJumpLinksList extends LitElement {
  static readonly styles: CSSStyleSheet[] = [style];

  render(): TemplateResult<1> {
    // TODO: add label
    // eslint-disable-next-line lit-a11y/accessible-name
    return html`<div id="container" role="listbox"><slot></slot></div>`;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'rh-jump-links-list': RhJumpLinksList;
  }
}
