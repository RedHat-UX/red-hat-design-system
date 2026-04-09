var _RhPagination_instances, _RhPagination_mo, _RhPagination_logger, _RhPagination_ol, _RhPagination_links, _RhPagination_firstLink, _RhPagination_lastLink, _RhPagination_nextLink, _RhPagination_prevLink, _RhPagination_currentLink, _RhPagination_currentIndex, _RhPagination_currentPage_get, _RhPagination_setStateFromLightDOM, _RhPagination_getOverflow, _RhPagination_getCurrentLink, _RhPagination_updateLightDOMRefs, _RhPagination_checkValidity, _RhPagination_go, _RhPagination_onClick, _RhPagination_onSubmit;
var RhPagination_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { themable } from '@rhds/elements/lib/themable.js';
import { css } from "lit";
const styles = css `*,:after,:before{box-sizing:border-box}:host{--_stepper-size:var(--rh-length-3xl,48px);display:block;min-block-size:4em}:host([size=sm]){--_stepper-size:var(--rh-length-2xl,32px)}.visually-hidden{border:0;clip:rect(0,0,0,0);block-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;inline-size:1px}[hidden]{display:none!important}#container{--_numeric-a-color:var(
        --rh-pagination-accent-color,var(--rh-color-interactive-primary-default)
      );--_numeric-a-color-hover:var(--rh-color-interactive-primary-hover);--_numeric-a-color-focus:var(
        --rh-pagination-accent-color,var(--rh-color-interactive-primary-default)
      );--_numeric-a-color-focus-outline:var(
        --rh-pagination-accent-color,var(--rh-color-interactive-primary-default)
      );--_numeric-a-color-visited:var(--rh-color-interactive-primary-visited-default);--_numeric-a-color-visited-hover:var(--rh-color-interactive-primary-visited-hover);--_list-a-bg-color:light-dark(var(--rh-color-surface-lighter,#f2f2f2),oklch(from var(--rh-color-surface-dark,#383838) calc(l * 0.82) c h));--_list-a-current-page-border-color:var(--rh-color-border-subtle);--_list-a-current-page-bg-color:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515));--_list-a-text-color:var(--rh-color-text-primary);--_stepper-bg-color:light-dark(var(--rh-color-surface-lighter,#f2f2f2),oklch(from var(--rh-color-surface-dark,#383838) calc(l * 0.82) c h));--_stepper-hover-focus-color:var(--rh-color-text-primary-on-dark,#fff);--_border-top-hover-color:light-dark(var(--rh-color-gray-60,#4d4d4d),var(--rh-color-border-subtle-on-light,#c7c7c7));--rh-pagination-stepper-color:light-dark(var(--rh-color-gray-50,#707070),var(--rh-color-text-secondary-on-dark,#c7c7c7));--rh-color-icon-status-disabled:light-dark(var(--rh-color-gray-40,#a3a3a3),var(--rh-color-gray-60,#4d4d4d));--rh-pagination-background-focused:var(--rh-color-icon-status-disabled);container-name:pagination;container-type:inline-size;display:flex;gap:var(--rh-space-xl,24px) calc(var(--rh-space-xs, 4px)/2);flex-wrap:wrap}@container pagination (min-width: 344px){#container{row-gap:var(--rh-space-2xl,32px)}}@container pagination (min-width: 768px){#container{flex-wrap:nowrap}}nav{display:none}@container pagination (min-width: 768px){nav{display:contents}}svg{fill:currentcolor}.stepper{background-color:var(--_stepper-bg-color);border:var(--rh-border-width-sm,1px) solid #0000;color:var(
        --rh-pagination-stepper-color,var(--rh-color-gray-50,#707070)
      );display:grid;font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-heading-xs,1.25rem);block-size:var(--_stepper-size);place-content:center;position:relative;text-decoration:none;inline-size:var(--_stepper-size)}.stepper:focus{border-radius:var(--rh-border-radius-default,3px);outline-offset:-2px;outline:var(--rh-border-width-md,2px) solid #0000;outline-color:var(
          --rh-pagination-accent-color,var(--rh-color-interactive-primary-default)
        )}.stepper:focus:after,.stepper:focus:before,.stepper:hover:after{border-block-start-style:solid;content:"";inset-inline-start:-1px;position:absolute;inset-block-start:-1px;inline-size:104%}.stepper:focus:before,.stepper:hover:after{border-block-color:var(--_border-top-hover-color);border-block-width:var(--rh-border-width-lg,3px)}.stepper:focus:after{border-block-color:var(
          --rh-pagination-accent-color,var(--rh-color-border-interactive)
        );border-block-width:var(--rh-border-width-md,2px)}.stepper svg{block-size:14px}.stepper[inert]{pointer-events:none;color:var(--rh-pagination-background-focused);background-color:var(--_stepper-bg-color)}:is(#next,#last) svg,:not(#next,#last) svg:dir(rtl){rotate:180deg}:is(#next,#last) svg:dir(rtl){rotate:0deg}@container pagination (min-width: 768px){#last{margin-inline-end:var(--rh-space-2xl,32px)}}input{block-size:100%;inline-size:var(--rh-length-4xl,64px);font-size:var(--rh-font-size-body-text-md,1rem);background:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515));border:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle);border-block-end-color:light-dark(var(--rh-color-gray-40,#a3a3a3),var(--rh-color-gray-60,#4d4d4d));box-sizing:border-box;padding-block:var(--rh-space-sm,6px);padding-inline:var(--rh-space-md,8px);color:var(--rh-color-text-primary)}input:focus{border:var(--rh-border-width-md,2px) solid var(
          --rh-pagination-accent-color,var(--rh-color-interactive-primary-default)
        );padding-block:calc(var(--rh-space-sm, 6px) - 1px);padding-inline:calc(var(--rh-space-md, 8px) - 1px);outline:none}input:invalid{border-block-end-color:light-dark(var(--rh-color-red-60,#a60000),var(--rh-color-red-40,#f56e6e))}input:invalid:focus{border-block-end-width:var(--rh-border-width-md,2px)}#numeric{align-items:center;display:flex;flex:0;font-size:var(--rh-font-size-body-text-md,1rem);gap:.5em;margin-block:0;margin-inline:0 var(--rh-space-lg,16px);min-block-size:var(--_stepper-size);inline-size:100%}#numeric form,#numeric input,#numeric label{place-items:center;place-content:center;min-block-size:var(--_stepper-size)}#numeric form{display:flex;flex-direction:row;gap:var(--rh-space-md)}#numeric a{text-decoration:underline dashed var(--rh-border-width-sm,1px);text-decoration-color:light-dark(var(--rh-color-gray-50),var(--rh-color-gray-40));text-underline-offset:max(5px,.28em);transition-timing-function:ease;transition-property:text-underline-offset,color,text-decoration-color;transition-duration:.3s;color:var(--_numeric-a-color)}:is(#numeric a):hover{color:var(--_numeric-a-color-hover);text-decoration-color:inherit;text-underline-offset:max(6px,.33em)}:is(#numeric a):focus{border-radius:var(--rh-border-radius-default,3px);color:var(--_numeric-a-color-focus);outline:var(--rh-border-width-md,2px) solid #0000;outline-color:var(--_numeric-a-color-focus-outline);text-decoration-color:inherit;text-underline-offset:max(6px,.33em)}:is(#numeric a):visited{color:var(--_numeric-a-color-visited)}:is(#numeric a):visited:hover{color:var(--_numeric-a-color-visited-hover)}@container pagination (min-width: 344px){.go-to-page-text{border:0;clip:rect(0,0,0,0);block-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;inline-size:1px}}@container pagination (min-width: 768px){.go-to-page-text{clip:auto;block-size:auto;margin:0;overflow:visible;padding:0;position:static;white-space:normal;inline-size:auto}#numeric{margin-inline-start:0}}:host(:is([variant|=borderless],[variant|=open])) .stepper{--_stepper-bg-color:#0000}:is(:host(:is([variant|=borderless],[variant|=open])) .stepper):focus:after,:is(:host(:is([variant|=borderless],[variant|=open])) .stepper):focus:before,:is(:host(:is([variant|=borderless],[variant|=open])) .stepper):hover:after{border-block-start-style:none;border-block-end-style:solid;inset-block-end:-1px}`;
const L1 = html `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 14">
    <path d="M.3 6.26 6.24.3C6.63-.1 7.3-.1 7.7.3l.99.99c.4.4.4 1.07 0 1.48L4.49 7l4.2 4.22c.41.4.41 1.07 0 1.48l-.98 1c-.41.4-1.07.4-1.48 0L.31 7.73a1.05 1.05 0 0 1 0-1.48Z"/>
  </svg>`;
const L2 = html `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.44 14">
    <path d="M8.7 6.26 14.66.3a1.05 1.05 0 0 1 1.49 0l.98.99c.42.4.42 1.07 0 1.48L12.92 7l4.2 4.22c.42.4.42 1.07 0 1.48l-.98 1c-.41.4-1.08.4-1.48 0L8.7 7.73a1.05 1.05 0 0 1 0-1.48zM.3 7.74l5.96 5.95c.4.41 1.07.41 1.48 0l.99-.99c.4-.4.4-1.07 0-1.48L4.52 7l4.21-4.22c.41-.4.41-1.07 0-1.48l-.99-1a1.05 1.05 0 0 0-1.48 0L.31 6.27a1.05 1.05 0 0 0 0 1.48z"/>
  </svg>`;
/**
 * Pagination allows users to navigate between pages of related content.
 * Use it when content is too long for a single view. Authors must
 * provide a single `<ol>` with `<li><a>` page links where the active
 * page should have `aria-current="page"`. Tab navigates between controls;
 * Enter activates. Supports box and open variants, default and small sizes.
 *
 * @summary Navigate between pages of content with steppers and input
 *
 * @alias pagination
 *
 */
let RhPagination = RhPagination_1 = class RhPagination extends LitElement {
    constructor() {
        super(...arguments);
        _RhPagination_instances.add(this);
        /**
         * Controls which end(s) of the page list are truncated with ellipsis.
         * Accepts `'start'` | `'end'` | `'both'` | `null`. Computed automatically
         * from page count and current index. Reflected to the host attribute so
         * light-DOM CSS can hide overflow `<li>` elements. Defaults to `null`.
         */
        this.overflow = null;
        /** Accessible label for the `<nav>` landmark. Should be unique when multiple paginations exist on a page. Defaults to `'Page navigation'`. */
        this.label = 'Page navigation';
        /** Accessible label for the first-page stepper button. Used by screen readers. Defaults to `'first page'`. */
        this.labelFirst = 'first page';
        /** Accessible label for the previous-page stepper button. Used by screen readers. Defaults to `'previous page'`. */
        this.labelPrevious = 'previous page';
        /** Accessible label for the next-page stepper button. Used by screen readers. Defaults to `'next page'`. */
        this.labelNext = 'next page';
        /** Accessible label for the last-page stepper button. Used by screen readers. Defaults to `'last page'`. */
        this.labelLast = 'last page';
        /** Controls pagination size. Accepts `'sm'` for smaller touch targets (WCAG AA) or `null` for default (WCAG AAA). Defaults to `null`. */
        this.size = null;
        /** Visual variant. Accepts `'borderless'` for transparent backgrounds with bottom borders, or `null` for the default box variant. Defaults to `null`. */
        this.variant = null;
        _RhPagination_mo.set(this, new MutationObserver(() => this.requestUpdate()));
        _RhPagination_logger.set(this, new Logger(this));
        _RhPagination_ol.set(this, isServer ? null : this.querySelector('ol'));
        _RhPagination_links.set(this, __classPrivateFieldGet(this, _RhPagination_ol, "f")?.querySelectorAll('li a'));
        _RhPagination_firstLink.set(this, null);
        _RhPagination_lastLink.set(this, null);
        _RhPagination_nextLink.set(this, null);
        _RhPagination_prevLink.set(this, null);
        _RhPagination_currentLink.set(this, __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_getCurrentLink).call(this));
        _RhPagination_currentIndex.set(this, 0);
        this.total = 0;
    }
    connectedCallback() {
        super.connectedCallback();
        RhPagination_1.instances.add(this);
        // Validate DOM
        if (!isServer) {
            __classPrivateFieldGet(this, _RhPagination_mo, "f").observe(this, { childList: true, subtree: true });
            if (!__classPrivateFieldGet(this, _RhPagination_ol, "f") || [...this.children].filter(x => !x.slot).length > 1) {
                __classPrivateFieldGet(this, _RhPagination_logger, "f").warn('must have a single <ol> element as it\'s only child');
            }
            __classPrivateFieldSet(this, _RhPagination_currentLink, __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_getCurrentLink).call(this), "f");
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        RhPagination_1.instances.delete(this);
        __classPrivateFieldGet(this, _RhPagination_mo, "f").disconnect();
    }
    update(changed) {
        if (!isServer && this.hasUpdated) {
            __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_setStateFromLightDOM).call(this);
        }
        super.update(changed);
    }
    firstUpdated() {
        if (!isServer) {
            __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_setStateFromLightDOM).call(this);
        }
    }
    updated() {
        if (!isServer && this.hasUpdated) {
            __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_checkValidity).call(this);
        }
    }
    render() {
        const { label, labelFirst, labelPrevious, labelNext, labelLast, firstHref, prevHref, nextHref, lastHref, } = this;
        const currentPage = __classPrivateFieldGet(this, _RhPagination_instances, "a", _RhPagination_currentPage_get).toString();
        return html `
      <!-- The outer flex container wrapping stepper buttons, nav, and numeric input -->
      <div id="container" part="container">
        <a id="first"
           class="stepper"
           href="${ifDefined(firstHref)}"
           ?inert="${!firstHref || __classPrivateFieldGet(this, _RhPagination_currentLink, "f") === __classPrivateFieldGet(this, _RhPagination_firstLink, "f")}"
           aria-label="${labelFirst}">${L2}</a>
        <a id="prev"
           class="stepper"
           href="${ifDefined(prevHref)}"
           ?inert="${!prevHref || __classPrivateFieldGet(this, _RhPagination_currentLink, "f") === __classPrivateFieldGet(this, _RhPagination_prevLink, "f") || __classPrivateFieldGet(this, _RhPagination_currentLink, "f") === __classPrivateFieldGet(this, _RhPagination_firstLink, "f")}"
           aria-label="${labelPrevious}">${L1}</a>
        <nav aria-label="${label}">
          <!-- summary: Page link list
               description: |
                 Expects a single \`<ol>\` containing \`<li><a>\` block
                 elements for each page. The active page link must have
                 \`aria-current="page"\` or match the current URL.
                 Authors should ensure each link has descriptive text
                 for assistive technology. The wrapping \`<nav>\` is
                 announced as a landmark labeled by the \`label\`
                 property; authors must keep labels unique when
                 multiple paginations exist on a page. -->
          <slot></slot>
        </nav>
        <a id="next"
           class="stepper"
           href="${ifDefined(nextHref)}"
           ?inert="${!nextHref || __classPrivateFieldGet(this, _RhPagination_currentLink, "f") === __classPrivateFieldGet(this, _RhPagination_nextLink, "f") || __classPrivateFieldGet(this, _RhPagination_currentLink, "f") === __classPrivateFieldGet(this, _RhPagination_lastLink, "f")}"
           aria-label="${labelNext}">${L1}</a>
        <a id="last"
           class="stepper"
           href="${ifDefined(lastHref)}"
           ?inert="${!lastHref || __classPrivateFieldGet(this, _RhPagination_currentLink, "f") === __classPrivateFieldGet(this, _RhPagination_lastLink, "f")}"
           aria-label="${labelLast}">${L2}</a>
        <!-- The container for the page input, separator text, and total page link -->
        <div id="numeric" part="numeric">
          <form @submit="${__classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_onSubmit)}">
            <label for="page" class="go-to-page-text">
              <!-- summary: page input label text (go-to-page slot)
                   description: |
                     Label text preceding the page number input field. Defaults to
                     "Page". Customize for internationalization. Visually hidden at
                     very small widths but always accessible to screen readers via
                     \`aria-labelledby\`. -->
              <slot name="go-to-page">
                Page
              </slot>
            </label>
            <input id="page"
                   type="number"
                   enterkeyhint="go"
                   required
                   name="page"
                   min=1
                   max="${this.total}"
                   @click="${__classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_onClick)}"
                   .value="${currentPage}">
          </form>
        <!-- summary: preposition text between page input and total (default: "of")
             description: |
               Contains the text displayed between the current page input field and the total page count.
               Defaults to "of" but can be customized for internationalization or alternate phrasing. -->
          <slot ?hidden="${!this.total}" name="out-of">of</slot>
          <a ?hidden="${!this.total}" href="${ifDefined(lastHref)}">${this.total}</a>
        </div>
      </div>
    `;
    }
    /** Navigate to the first page */
    first() {
        return __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_go).call(this, 'first');
    }
    /** Navigate to the previous page */
    prev() {
        return __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_go).call(this, 'prev');
    }
    /** Navigate to the next page */
    next() {
        return __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_go).call(this, 'next');
    }
    /** Navigate to the last page */
    last() {
        return __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_go).call(this, 'last');
    }
    /**
     * Navigate to a specific page
     * @param page
     */
    go(page) {
        return __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_go).call(this, page);
    }
};
_RhPagination_mo = new WeakMap();
_RhPagination_logger = new WeakMap();
_RhPagination_ol = new WeakMap();
_RhPagination_links = new WeakMap();
_RhPagination_firstLink = new WeakMap();
_RhPagination_lastLink = new WeakMap();
_RhPagination_nextLink = new WeakMap();
_RhPagination_prevLink = new WeakMap();
_RhPagination_currentLink = new WeakMap();
_RhPagination_currentIndex = new WeakMap();
_RhPagination_instances = new WeakSet();
_RhPagination_currentPage_get = function _RhPagination_currentPage_get() {
    return __classPrivateFieldGet(this, _RhPagination_currentIndex, "f") + 1;
};
_RhPagination_setStateFromLightDOM = function _RhPagination_setStateFromLightDOM() {
    __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_updateLightDOMRefs).call(this);
    this.total = __classPrivateFieldGet(this, _RhPagination_links, "f")?.length ?? 0;
    this.firstHref = __classPrivateFieldGet(this, _RhPagination_firstLink, "f")?.href;
    this.lastHref = __classPrivateFieldGet(this, _RhPagination_lastLink, "f")?.href;
    this.prevHref = __classPrivateFieldGet(this, _RhPagination_prevLink, "f")?.href;
    this.nextHref = __classPrivateFieldGet(this, _RhPagination_nextLink, "f")?.href;
    this.currentHref = __classPrivateFieldGet(this, _RhPagination_currentLink, "f")?.href;
    this.overflow = __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_getOverflow).call(this);
};
_RhPagination_getOverflow = function _RhPagination_getOverflow() {
    const overflowAt = 9;
    const length = this.total;
    if (length <= overflowAt) {
        return null;
    }
    const current = __classPrivateFieldGet(this, _RhPagination_currentIndex, "f") + 1;
    if (current > (overflowAt - 4) && current < (length - 4)) {
        return 'both';
    }
    else if (current <= (overflowAt - 4)) {
        return 'end';
    }
    else {
        return 'start';
    }
};
_RhPagination_getCurrentLink = function _RhPagination_getCurrentLink() {
    if (isServer) {
        return null;
    }
    for (const link of __classPrivateFieldGet(this, _RhPagination_links, "f") ?? []) {
        if (!link.href) {
            continue;
        }
        try {
            const url = new URL(link.href);
            if (url.pathname === location.pathname
                && url.search === location.search
                && url.hash === location.hash) {
                return link;
            }
        }
        catch {
            continue;
        }
    }
    return this.querySelector('li a[aria-current="page"]')
        ?? (__classPrivateFieldGet(this, _RhPagination_logger, "f").warn('could not determine current link'), null);
};
_RhPagination_updateLightDOMRefs = function _RhPagination_updateLightDOMRefs() {
    // NB: order of operations! must set up state
    __classPrivateFieldSet(this, _RhPagination_ol, this.querySelector('ol'), "f");
    __classPrivateFieldSet(this, _RhPagination_links, this.querySelectorAll('li a'), "f");
    __classPrivateFieldSet(this, _RhPagination_firstLink, this.querySelector('li:first-child a'), "f");
    __classPrivateFieldSet(this, _RhPagination_lastLink, this.querySelector('li:last-child a'), "f");
    __classPrivateFieldSet(this, _RhPagination_currentLink, __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_getCurrentLink).call(this), "f");
    if (__classPrivateFieldGet(this, _RhPagination_currentLink, "f")) {
        const links = Array.from(__classPrivateFieldGet(this, _RhPagination_links, "f"));
        // if any other links have aria-current="page", remove it unless it is the current link
        for (const link of links) {
            if (link === __classPrivateFieldGet(this, _RhPagination_currentLink, "f")) {
                continue;
            }
            if (link.getAttribute('aria-current') === 'page') {
                link.removeAttribute('aria-current');
            }
        }
        __classPrivateFieldSet(this, _RhPagination_currentIndex, links.indexOf(__classPrivateFieldGet(this, _RhPagination_currentLink, "f")), "f");
        __classPrivateFieldSet(this, _RhPagination_prevLink, __classPrivateFieldGet(this, _RhPagination_links, "f")[__classPrivateFieldGet(this, _RhPagination_currentIndex, "f") - 1], "f");
        __classPrivateFieldSet(this, _RhPagination_nextLink, __classPrivateFieldGet(this, _RhPagination_links, "f")[__classPrivateFieldGet(this, _RhPagination_currentIndex, "f") + 1], "f");
        for (const link of this.querySelectorAll('[data-page]')) {
            link.removeAttribute('data-page');
        }
        __classPrivateFieldGet(this, _RhPagination_currentLink, "f").closest('li')?.setAttribute('data-page', 'current');
        __classPrivateFieldGet(this, _RhPagination_prevLink, "f")?.closest('li')?.setAttribute('data-page', 'previous');
        __classPrivateFieldGet(this, _RhPagination_nextLink, "f")?.closest('li')?.setAttribute('data-page', 'next');
        if (__classPrivateFieldGet(this, _RhPagination_currentLink, "f")?.getAttribute('aria-current') !== 'page') {
            __classPrivateFieldGet(this, _RhPagination_currentLink, "f")?.setAttribute('aria-current', 'page');
        }
    }
};
_RhPagination_checkValidity = function _RhPagination_checkValidity() {
    let message = '';
    // Validate user input
    if (this.input && __classPrivateFieldGet(this, _RhPagination_links, "f")) {
        if (Number.isNaN(__classPrivateFieldGet(this, _RhPagination_instances, "a", _RhPagination_currentPage_get))) {
            message = `${__classPrivateFieldGet(this, _RhPagination_instances, "a", _RhPagination_currentPage_get)} is not a valid page number`;
        }
        else if (__classPrivateFieldGet(this, _RhPagination_instances, "a", _RhPagination_currentPage_get) > this.total || __classPrivateFieldGet(this, _RhPagination_instances, "a", _RhPagination_currentPage_get) < 1) {
            message = `cannot navigate to page ${__classPrivateFieldGet(this, _RhPagination_instances, "a", _RhPagination_currentPage_get)}`;
        }
        this.input.setCustomValidity(message);
    }
    if (message) {
        __classPrivateFieldGet(this, _RhPagination_logger, "f").warn(this.input?.validationMessage || 'could not navigate');
    }
    return !message;
};
_RhPagination_go = 
/**
 * Navigate by clicking the corresponding link element.
 * Numeric ids click light DOM links synchronously (preserving user gesture).
 * String ids click shadow DOM steppers after rendering ensures their href is set.
 * After the click, request an update in case a SPA prevented full navigation.
 * @param id stepper name or 1-based page number
 */
async function _RhPagination_go(id) {
    if (typeof id === 'number') {
        __classPrivateFieldGet(this, _RhPagination_links, "f")?.[id - 1]?.click();
    }
    else {
        await this.updateComplete;
        this.shadowRoot?.getElementById(id)?.click();
    }
    this.requestUpdate();
    await this.updateComplete;
};
_RhPagination_onClick = function _RhPagination_onClick(event) {
    if (event.target instanceof HTMLInputElement) {
        event.target.focus();
    }
};
_RhPagination_onSubmit = function _RhPagination_onSubmit(event) {
    event.preventDefault();
    const input = event.target?.querySelector('input');
    if (!input || !__classPrivateFieldGet(this, _RhPagination_links, "f")) {
        return;
    }
    const newValue = parseInt(input.value);
    __classPrivateFieldSet(this, _RhPagination_currentIndex, newValue - 1, "f");
    if (__classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_checkValidity).call(this)) {
        __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_go).call(this, __classPrivateFieldGet(this, _RhPagination_instances, "a", _RhPagination_currentPage_get));
    }
    else {
        input.reportValidity();
    }
};
RhPagination.styles = [styles];
RhPagination.instances = new Set();
(() => {
    if (!isServer) {
        globalThis.addEventListener('hashchange', () => {
            for (const instance of RhPagination_1.instances) {
                instance.requestUpdate();
            }
        });
    }
})();
__decorate([
    property({ reflect: true })
], RhPagination.prototype, "overflow", void 0);
__decorate([
    property()
], RhPagination.prototype, "label", void 0);
__decorate([
    property({ attribute: 'label-first' })
], RhPagination.prototype, "labelFirst", void 0);
__decorate([
    property({ attribute: 'label-previous' })
], RhPagination.prototype, "labelPrevious", void 0);
__decorate([
    property({ attribute: 'label-next' })
], RhPagination.prototype, "labelNext", void 0);
__decorate([
    property({ attribute: 'label-last' })
], RhPagination.prototype, "labelLast", void 0);
__decorate([
    property({ reflect: true })
], RhPagination.prototype, "size", void 0);
__decorate([
    property({ reflect: true, converter: {
            fromAttribute(value) {
                // Silent aliasing: convert 'open' to 'borderless'
                return value === 'open' ? 'borderless' : value;
            },
        } })
], RhPagination.prototype, "variant", void 0);
__decorate([
    query('input')
], RhPagination.prototype, "input", void 0);
__decorate([
    state()
], RhPagination.prototype, "total", void 0);
__decorate([
    state()
], RhPagination.prototype, "firstHref", void 0);
__decorate([
    state()
], RhPagination.prototype, "lastHref", void 0);
__decorate([
    state()
], RhPagination.prototype, "nextHref", void 0);
__decorate([
    state()
], RhPagination.prototype, "prevHref", void 0);
__decorate([
    state()
], RhPagination.prototype, "currentHref", void 0);
RhPagination = RhPagination_1 = __decorate([
    customElement('rh-pagination'),
    themable
], RhPagination);
export { RhPagination };
//# sourceMappingURL=rh-pagination.js.map