import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import style from './rh-footer-block.css' with { type: 'css' };

/**
 * A content block for the footer sidebar, used to display prose, promotional
 * messages, or calls to action alongside link columns. Place in the
 * `main-secondary` slot of `<rh-footer>`. Blocks after the first display a
 * top border separator. Screen readers perceive content in DOM order.
 * Tab navigates through interactive children. SHOULD contain a heading
 * in the `header` slot for accessible labeling.
 *
 * @summary Sidebar content block for footer prose or promotions
 *
 * @slot header - Block heading (h2-h5). SHOULD be provided for context.
 * @slot - Default slot for block body content (text, links, CTAs).
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
                 Heading for the content block (h2-h5). Provides visual and semantic
                 grouping for screen readers. SHOULD be provided for accessibility. -->
          <slot name="header"></slot>
        </div>
        <div class="content" part="content">
          <!-- summary: block body content
               description: |
                 Default slot for prose text, links, or promotional content. Screen
                 readers announce content in DOM order. Tab navigates interactive children. -->
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
