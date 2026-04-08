import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { css } from "lit";
const style = css `:host{display:block;position:relative}:host(:not(:last-of-type,:first-of-type)):after{content:"";display:block;height:1px;width:100%;margin-block-start:var(--rh-space-2xl,32px);background:var(--_border-color)}::slotted(*){color:var(--rh-color-text-primary-on-dark,#fff);font-size:var(--rh-font-size-body-text-sm,.875rem);text-decoration:none;max-width:650px}::slotted(:is(h1,h2,h3,h4,h5)){font-weight:var(--rh-font-weight-heading-medium,500)!important;font-size:var(--rh-font-size-body-text-sm,.875rem)!important;margin-block:0 var(--rh-space-lg,16px)!important;color:var(--rh-color-text-primary-on-dark,#fff)!important}::slotted(:last-child){margin-block-end:0!important}.content ::slotted(*){color:var(--rh-color-text-secondary-on-dark,#c7c7c7);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-weight:var(--rh-font-weight-body-text-regular,400)}`;
/**
 * Sidebar content block for prose, promotions, or calls to action
 * within `<rh-footer>`. Use when the footer needs content alongside
 * link columns. Should contain a heading in the `header` slot for
 * accessible labeling via `aria-labelledby`. Tab navigates
 * interactive children.
 *
 * @summary Sidebar content block for footer prose or promotions
 */
let RhFooterBlock = class RhFooterBlock extends LitElement {
    render() {
        return html `
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
};
RhFooterBlock.styles = style;
RhFooterBlock = __decorate([
    customElement('rh-footer-block')
], RhFooterBlock);
export { RhFooterBlock };
//# sourceMappingURL=rh-footer-block.js.map