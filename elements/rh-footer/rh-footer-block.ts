import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import style from './rh-footer-block.css' with { type: 'css' };

/**
 * Sidebar content block for prose, promotions, or calls to action
 * within `<rh-footer>`. Use when the footer needs content alongside
 * link columns. Should contain a heading in the `header` slot for
 * accessible labeling via `aria-labelledby`. Tab navigates
 * interactive children.
 *
 * @summary Sidebar content block for footer prose or promotions
 */
@customElement('rh-footer-block')
export class RhFooterBlock extends LitElement {
  static readonly styles = style;

  render() {
    return html`
      <div class="base" part="base">
        <div class="header" part="header">
          <!-- summary: block heading
               description: |
                 Expects a block elements heading (h2-h5) labeling this content block.
                 Provides visual and semantic grouping for screen readers. Should be
                 provided for accessibility. -->
          <slot name="header"></slot>
        </div>
        <div class="content" part="content">
          <!-- summary: block body content
               description: |
                 Expects block elements: prose text, links, or promotional content.
                 Screen readers announce content in DOM order. Tab navigates
                 interactive children. -->
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-footer-block': RhFooterBlock;
  }
}
