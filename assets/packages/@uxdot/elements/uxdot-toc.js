var _UxdotTocList_internals, _UxdotTocItem_internals;
import { __decorate } from "tslib";
/* eslint-disable no-unused-private-class-members */
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `:host{display:block;container-type:inline-size;container-name:host;position:relative}@container main (min-width: 1440px){#container{height:calc(100dvh - var(--uxdot-masthead-max-height) - var(--rh-space-2xl, 32px)*5);overflow-y:scroll}}details{display:flex;flex-direction:column;padding-inline:var(--rh-space-xl,24px);border-inline-start:var(--rh-border-width-lg,3px) solid #0000;border:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle)}details[open]:after{content:"";position:absolute;inset-block:0;inset-inline-start:0;inset-block-start:-1px;width:var(--rh-border-width-lg,3px);background-color:var(--rh-color-brand-red-on-light,#e00)}summary{list-style:none;display:inline-flex;gap:var(--rh-space-sm,6px);align-items:center;padding-block:var(--rh-space-lg,16px)}.summary,summary{font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-body-text-xl,1.25rem)!important;font-weight:var(--rh-font-weight-body-text-medium,500)}summary:before{content:"";width:1rem;height:1rem;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 10 15' fill='none'%3E%3Cg clip-path='url(%23clip0_232_19576)'%3E%3Cpath d='M2.5 14.5L0.5 12.5L5.5 7.5L0.5 2.5L2.5 0.5L9.5 7.5L2.5 14.5Z' fill='%23707070'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_232_19576'%3E%3Crect width='10' height='14' fill='white' transform='matrix(-1 0 0 1 10 0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");background-repeat:no-repeat;background-size:contain;transition:.2s}summary::-webkit-details-marker,summary::marker{display:none}details[open]>summary:before{transform:rotate(90deg)}nav{margin-block-end:var(--rh-space-lg,16px)}#expanded{display:none}@media (min-width:568px){details{display:none}#expanded{display:block}}`;
const listStyles = css `:host{display:block;columns:16rem;padding:0;margin-block:var(--rh-space-lg,16px) 0}@container main (min-width: 1440px){:host{columns:unset}}`;
const itemStyles = css `:host{display:block;break-inside:avoid}@container main (min-width: 1440px){:host(:first-of-type){padding-block-start:var(--_uxdot-toc-item-first-padding-block-start,var(--rh-space-md,8px))}}a{position:relative;outline:none;padding-block-end:var(--_uxdot-toc-item-padding-block-end,var(--rh-space-lg,16px));text-decoration:none;color:var(--rh-color-interactive-primary-default);font-size:var(--_uxdot-toc-item-font-size,var(--rh-font-size-body-text-lg,1.125rem));display:inline-flex;gap:var(--rh-space-lg,16px);align-items:first baseline}a svg{display:var(--_uxdot-toc-item-show-arrow,block);min-width:16px}a:hover{color:var(--rh-color-interactive-primary-hover)}a:focus-within{color:var(--rh-color-interactive-primary-focus)}a:active{color:var(--rh-color-interactive-primary-active)}a:focus-visible:after{content:"";position:absolute;inset:0;border:var(--rh-border-width-md,2px) solid var(--rh-color-interactive-primary-default);border-radius:var(--rh-border-radius-default,3px);pointer-events:none}a:visited{color:var(--rh-color-interactive-primary-visited-default)}a:visited:hover{color:var(--rh-color-interactive-primary-visited-hover)}a:visited:focus-within{color:var(--rh-color-interactive-primary-visited-focus)}a:visited:active{color:var(--rh-color-interactive-primary-visited-active)}slot[name=details],slot[name=expanded]{display:none}@container main (min-width: 1440px){slot[name=expanded]{display:contents}}::slotted(uxdot-toc-list){--_uxdot-toc-item-padding-block-end:var(--rh-space-md,8px);--_uxdot-toc-item-first-padding-block-start:0;--_uxdot-toc-item-show-arrow:none;--_uxdot-toc-item-font-size:var(--rh-font-size-body-text-md,1rem);margin-block-start:0;margin-inline-start:var(--rh-space-2xl,32px)}`;
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
let UxdotToc = class UxdotToc extends LitElement {
    render() {
        return html `
      <div id="container" part="container">
        <details>
          <summary id="summary-sm" class="summary">${this.summary}</summary>
          <nav aria-labelledby="summary-sm">
            <slot name="details"></slot>
          </nav>
        </details>
        <div id="expanded">
          <div id="summary-expanded" class="summary">${this.summary}</div>
          <nav aria-labelledby="summary-expanded">
            <slot name="expanded"></slot>
          </nav>
        </div>
      </div>
    `;
    }
};
UxdotToc.styles = [styles];
__decorate([
    property()
], UxdotToc.prototype, "summary", void 0);
UxdotToc = __decorate([
    themable,
    customElement('uxdot-toc')
], UxdotToc);
export { UxdotToc };
let UxdotTocList = class UxdotTocList extends LitElement {
    constructor() {
        super(...arguments);
        _UxdotTocList_internals.set(this, InternalsController.of(this, { role: 'list' }));
    }
    render() {
        return html `<slot></slot>`;
    }
};
_UxdotTocList_internals = new WeakMap();
UxdotTocList.styles = [listStyles];
UxdotTocList = __decorate([
    customElement('uxdot-toc-list')
], UxdotTocList);
export { UxdotTocList };
let UxdotTocItem = class UxdotTocItem extends LitElement {
    constructor() {
        super(...arguments);
        _UxdotTocItem_internals.set(this, InternalsController.of(this, { role: 'listitem' }));
    }
    render() {
        return html `
      <div id="container">
        <a href="${this.href}">
          <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 31.56 31.56"
              role="presentation"
              fill="currentColor"
              focusable="false"
              width="16px"
              aria-hidden="true">
            <path d="M15.78 0l-3.1 3.1 10.5 10.49H0v4.38h23.18l-10.5 10.49 3.1 3.1 15.78-15.78L15.78 0z"></path>
          </svg>
          <slot></slot>
        </a>
        <slot name="details"></slot>
        <slot name="expanded"></slot>
      </div>
    `;
    }
};
_UxdotTocItem_internals = new WeakMap();
UxdotTocItem.styles = [itemStyles];
__decorate([
    property()
], UxdotTocItem.prototype, "href", void 0);
UxdotTocItem = __decorate([
    themable,
    customElement('uxdot-toc-item')
], UxdotTocItem);
export { UxdotTocItem };
//# sourceMappingURL=uxdot-toc.js.map