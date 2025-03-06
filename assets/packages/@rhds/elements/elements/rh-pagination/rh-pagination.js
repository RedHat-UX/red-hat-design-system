var _RhPagination_instances, _RhPagination_dir, _RhPagination_mo, _RhPagination_logger, _RhPagination_ol, _RhPagination_links, _RhPagination_firstLink, _RhPagination_lastLink, _RhPagination_nextLink, _RhPagination_prevLink, _RhPagination_currentLink, _RhPagination_currentIndex, _RhPagination_currentPage_get, _RhPagination_numericContent, _RhPagination_update, _RhPagination_getOverflow, _RhPagination_getCurrentLink, _RhPagination_updateLightDOMRefs, _RhPagination_checkValidity, _RhPagination_go, _RhPagination_onKeyup, _RhPagination_onChange;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { DirController } from '../../lib/DirController.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { css } from "lit";
const styles = css `:host{--_stepper-size:var(--rh-length-3xl,48px);display:block;min-height:4em}:host([size=sm]){--_stepper-size:var(--rh-length-2xl,32px)}[hidden]{display:none!important}#container{container-name:pagination;container-type:inline-size;display:flex;gap:var(--rh-space-2xl,32px) calc(var(--rh-space-xs, 4px)/2);flex-wrap:wrap;--rh-pagination-accent-color:var(--rh-color-interactive-primary-default);--_numeric-a-color:var(--rh-pagination-accent-color);--_numeric-a-color-hover:var(--rh-color-interactive-primary-hover);--_numeric-a-color-focus:var(--rh-pagination-accent-color);--_numeric-a-color-focus-outline:var(--rh-pagination-accent-color);--_numeric-a-color-visited:var(--rh-color-interactive-primary-visited-default);--_numeric-a-color-visited-hover:var(--rh-color-interactive-primary-visited-hover);--_list-a-bg-color:var(--rh-color-surface-lighter,#f2f2f2);--_list-a-current-page-border-color:var(--rh-color-border-subtle);--_list-a-current-page-bg-color:var(--rh-color-surface-lightest,#fff);--_list-a-text-color:var(--rh-color-text-primary);--_stepper-bg-color:var(--rh-color-surface-lighter,#f2f2f2);--_stepper-hover-focus-color:var(--rh-color-text-primary-on-dark,#fff);--_border-top-hover-color:var(--rh-color-gray-60,#4d4d4d)}@container pagination (min-width: 768px){#container{flex-wrap:nowrap}}#container.dark{--rh-pagination-stepper-color:var(--rh-color-text-secondary-on-dark,#c7c7c7);--rh-pagination-background-focused:var(--rh-color-gray-50,#707070);--_list-a-bg-color:var(--rh-color-surface-dark-alt,#292929);--_list-a-current-page-bg-color:var(--rh-color-surface-darkest,#151515);--_border-top-hover-color:var(--rh-color-border-subtle-on-light,#c7c7c7);--_stepper-bg-color:var(--rh-color-surface-dark-alt,#292929);--_stepper-hover-focus-color:var(--rh-color-text-primary-on-dark,#fff)}.visually-hidden{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}@container pagination (min-width: 344px){.xxs-visually-hidden{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}}@container pagination (min-width: 768px){.sm-visually-visible{clip:auto;height:auto;margin:0;overflow:visible;padding:0;position:static;white-space:normal;width:auto}}nav{display:none}@container pagination (min-width: 768px){nav{display:contents}}svg{fill:currentcolor}.stepper{background-color:var(--_stepper-bg-color);border:var(--rh-border-width-sm,1px) solid #0000;color:var(--rh-pagination-stepper-color,var(--rh-color-gray-50,#707070));display:grid;font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-heading-xs,1.25rem);height:var(--_stepper-size);place-content:center;position:relative;text-decoration:none;width:var(--_stepper-size)}.stepper:focus{border-radius:var(--rh-border-radius-default,3px);outline-offset:-2px;outline:var(--rh-border-width-md,2px) solid #0000;outline-color:var(--rh-pagination-accent-color,var(--rh-color-interactive-primary-default))}.stepper:focus:after,.stepper:focus:before,.stepper:hover:after{border-block-start-style:solid;content:"";left:-1px;position:absolute;top:-1px;width:104%}.stepper:focus:before,.stepper:hover:after{border-block-color:var(--_border-top-hover-color);border-block-width:var(--rh-border-width-lg,3px)}.stepper:focus:after{border-block-color:var(--rh-pagination-accent-color,var(--rh-color-border-interactive));border-block-width:var(--rh-border-width-md,2px)}.stepper svg{height:14px}.rtl :not(#next,#last) svg,:is(#next,#last) svg{rotate:180deg}.rtl :is(#next,#last) svg{rotate:0deg}.stepper[inert]{pointer-events:none;color:var(--rh-pagination-background-focused,var(--rh-color-gray-30,#c7c7c7))}@container pagination (min-width: 768px){#last{margin-inline-end:var(--rh-space-2xl,32px)}}input{height:var(--rh-length-2xl,32px);width:var(--rh-length-4xl,64px);font-size:var(--rh-font-size-body-text-md,1rem);background:var(--rh-color-surface-lightest,#fff);border:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle);border-block-end-color:var(--rh-color-gray-40,#a3a3a3);box-sizing:border-box;padding-block:var(--rh-space-sm,6px);padding-inline:var(--rh-space-md,8px)}input:focus{border:var(--rh-border-width-md,2px) solid var(--rh-pagination-accent-color,var(--rh-color-interactive-primary-default));padding-block:calc(var(--rh-space-sm, 6px) - 1px);padding-inline:calc(var(--rh-space-md, 8px) - 1px);outline:none}input:invalid{border-block-end-color:var(--rh-color-red-60,#a60000)}input:invalid:focus{border-block-end-width:var(--rh-border-width-md,2px)}.dark input:invalid{border-block-end-color:var(--rh-color-red-40,#f56e6e)}#numeric-middle{display:none}#numeric-end{display:block;width:100%}#numeric{align-items:center;display:flex;flex:0;font-size:var(--rh-font-size-body-text-md,1rem);gap:.5em;margin-block:0;margin-inline:0 var(--rh-space-lg,16px);min-height:var(--_stepper-size);width:100%}#numeric input{align-self:stretch;height:auto}#numeric a{text-decoration:none;color:var(--_numeric-a-color)}#numeric a:hover{color:var(--_numeric-a-color-hover);text-decoration:underline}#numeric a:visited{color:var(--_numeric-a-color-visited)}#numeric a:focus{border-radius:var(--rh-border-radius-default,3px);color:var(--_numeric-a-color-focus);outline:var(--rh-border-width-md,2px) solid #0000;outline-color:var(--_numeric-a-color-focus-outline);text-decoration:underline}#numeric a:visited:hover{color:var(--_numeric-a-color-visited-hover)}@container pagination (min-width: 344px){#numeric-middle{display:contents}#numeric-end{display:none}#numeric{margin-inline-start:var(--rh-space-lg,16px)}}@container pagination (min-width: 768px){#numeric-middle{display:none}#numeric-end{display:contents}#numeric{margin-inline-start:0}}:host([variant|=open]) .stepper{--_stepper-bg-color:#0000}:host([variant|=open]) .stepper:focus:after,:host([variant|=open]) .stepper:focus:before,:host([variant|=open]) .stepper:hover:after{border-block-start-style:none;border-block-end-style:solid;inset-block-end:-1px}`;
const L1 = html `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 14">
    <path d="M.3 6.26 6.24.3C6.63-.1 7.3-.1 7.7.3l.99.99c.4.4.4 1.07 0 1.48L4.49 7l4.2 4.22c.41.4.41 1.07 0 1.48l-.98 1c-.41.4-1.07.4-1.48 0L.31 7.73a1.05 1.05 0 0 1 0-1.48Z"/>
  </svg>`;
const L2 = html `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.44 14">
    <path d="M8.7 6.26 14.66.3a1.05 1.05 0 0 1 1.49 0l.98.99c.42.4.42 1.07 0 1.48L12.92 7l4.2 4.22c.42.4.42 1.07 0 1.48l-.98 1c-.41.4-1.08.4-1.48 0L8.7 7.73a1.05 1.05 0 0 1 0-1.48zM.3 7.74l5.96 5.95c.4.41 1.07.41 1.48 0l.99-.99c.4-.4.4-1.07 0-1.48L4.52 7l4.21-4.22c.41-.4.41-1.07 0-1.48l-.99-1a1.05 1.05 0 0 0-1.48 0L.31 6.27a1.05 1.05 0 0 0 0 1.48z"/>
  </svg>`;
/**
 * A paginator allows users to navigate between pages of related content.
 * @summary Allows users to navigate content divided into pages
 * @slot            - An ordered list of links
 * @slot go-to-page - "Go to page" text, defaults to "Page"
 * @slot out-of     - "of" text
 * @csspart container - pagination container
 * @csspart numeric-middle - container for the numeric control at medium screen widths
 * @csspart numeric-end - container for the numeric control at small and large screen widths
 * @csspart numeric - shared container for the numeric controls at all widths
 * @cssprop [--rh-pagination-accent-color=var(--rh-color-interactive-blue, #0066cc)]
 *          Sets the outline color when the page input has focus.
 * @cssprop [--rh-pagination-background-focused=var(--rh-color-gray-20, #c7c7c7)]
 *          Sets the disabled stepper color.
 * @cssprop [--rh-pagination-stepper-color=var(--rh-color-icon-subtle, #707070)]
 *           Sets the stepper color.
 */
export class RhPagination extends LitElement {
    constructor() {
        super(...arguments);
        _RhPagination_instances.add(this);
        _RhPagination_dir.set(this, new DirController(this));
        _RhPagination_mo.set(this, new MutationObserver(() => __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_update).call(this)));
        _RhPagination_logger.set(this, new Logger(this));
        _RhPagination_ol.set(this, this.querySelector('ol'));
        _RhPagination_links.set(this, __classPrivateFieldGet(this, _RhPagination_ol, "f")?.querySelectorAll('li a'));
        _RhPagination_firstLink.set(this, null);
        _RhPagination_lastLink.set(this, null);
        _RhPagination_nextLink.set(this, null);
        _RhPagination_prevLink.set(this, null);
        _RhPagination_currentLink.set(this, __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_getCurrentLink).call(this));
        _RhPagination_currentIndex.set(this, 0);
        /**
         * Override `overflow` values set from HTML or JS.
         * `overflow` should ideally be private, but because
         * we can't do `::slotted(nav ol li)`, we need to reflect
         * it to a host attribute, so that lightdom CSS can target
         * the list items.
         */
        this.overflow = null;
        /** Accessible label for the 'nav' element */
        this.label = 'Page navigation';
        /** Accessible label for the 'first page' button */
        this.labelFirst = 'first page';
        /** Accessible label for the 'previous page' button */
        this.labelPrevious = 'previous page';
        /** Accessible label for the 'next page' button */
        this.labelNext = 'next page';
        /** Accessible label for the 'last page' button */
        this.labelLast = 'last page';
        /** Change pagination size to small */
        this.size = null;
        /** "Open" variant */
        this.variant = null;
    }
    get input() {
        return this.renderRoot?.querySelector("input") ?? null;
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _RhPagination_mo, "f").observe(this, { childList: true, subtree: true });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        __classPrivateFieldGet(this, _RhPagination_mo, "f").disconnect();
    }
    update(changed) {
        __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_update).call(this);
        super.update(changed);
    }
    render() {
        const { on = '' } = this;
        const { dir } = __classPrivateFieldGet(this, _RhPagination_dir, "f");
        const { label, labelFirst, labelPrevious, labelNext, labelLast } = this;
        const firstHref = __classPrivateFieldGet(this, _RhPagination_currentLink, "f") === __classPrivateFieldGet(this, _RhPagination_firstLink, "f") ? undefined : __classPrivateFieldGet(this, _RhPagination_firstLink, "f")?.href;
        const prevHref = __classPrivateFieldGet(this, _RhPagination_prevLink, "f")?.href;
        const nextHref = __classPrivateFieldGet(this, _RhPagination_nextLink, "f")?.href;
        const lastHref = __classPrivateFieldGet(this, _RhPagination_currentLink, "f") === __classPrivateFieldGet(this, _RhPagination_lastLink, "f") ? undefined : __classPrivateFieldGet(this, _RhPagination_lastLink, "f")?.href;
        const currentPage = __classPrivateFieldGet(this, _RhPagination_instances, "a", _RhPagination_currentPage_get).toString();
        return html `
      <div id="container" part="container"
           class=${classMap({ [dir]: true, [on]: !!on })}>
        <a id="first" class="stepper" href=${ifDefined(firstHref)} ?inert=${!firstHref} aria-label=${labelFirst}>${L2}</a>
        <a id="prev" class="stepper" href=${ifDefined(prevHref)} ?inert=${!prevHref} aria-label=${labelPrevious}>${L1}</a>
        <nav aria-label=${label}>
          <slot></slot>
        </nav>
        <div id="numeric-middle" part="numeric-middle">
          ${__classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_numericContent).call(this, currentPage, lastHref)}
        </div>
        <a id="next" class="stepper" href=${ifDefined(nextHref)} ?inert=${!nextHref} aria-label=${labelNext}>${L1}</a>
        <a id="last" class="stepper" href=${ifDefined(lastHref)} ?inert=${!lastHref} aria-label=${labelLast}>${L2}</a>
        <div id="numeric-end" part="numeric-end">
          ${__classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_numericContent).call(this, currentPage, lastHref)}
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
    /** Navigate to a specific page */
    go(page) {
        return __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_go).call(this, page);
    }
}
_RhPagination_dir = new WeakMap(), _RhPagination_mo = new WeakMap(), _RhPagination_logger = new WeakMap(), _RhPagination_ol = new WeakMap(), _RhPagination_links = new WeakMap(), _RhPagination_firstLink = new WeakMap(), _RhPagination_lastLink = new WeakMap(), _RhPagination_nextLink = new WeakMap(), _RhPagination_prevLink = new WeakMap(), _RhPagination_currentLink = new WeakMap(), _RhPagination_currentIndex = new WeakMap(), _RhPagination_instances = new WeakSet(), _RhPagination_currentPage_get = function _RhPagination_currentPage_get() {
    return __classPrivateFieldGet(this, _RhPagination_currentIndex, "f") + 1;
}, _RhPagination_numericContent = function _RhPagination_numericContent(currentPage, lastHref) {
    return html `
      <div id="numeric" part="numeric">
        <span id="go-to-page" class="xxs-visually-hidden sm-visually-visible">
          <slot name="go-to-page">
            Page
          </slot>
        </span>
        <input inputmode="numeric"
            required
            min=1 max=${__classPrivateFieldGet(this, _RhPagination_links, "f")?.length ?? 1}
            aria-labelledby="go-to-page"
            @change=${__classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_onChange)}
            @keyup=${__classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_onKeyup)}
            .value=${currentPage}>
        <slot name="out-of">of</slot>
        <a href=${ifDefined(lastHref)}>${__classPrivateFieldGet(this, _RhPagination_links, "f")?.length}</a>
      </div>
    `;
}, _RhPagination_update = function _RhPagination_update() {
    this.querySelector('[aria-current="page"]')?.removeAttribute('aria-current');
    __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_updateLightDOMRefs).call(this);
    this.overflow = __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_getOverflow).call(this);
    __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_checkValidity).call(this);
}, _RhPagination_getOverflow = function _RhPagination_getOverflow() {
    const overflowAt = 9;
    const length = __classPrivateFieldGet(this, _RhPagination_links, "f")?.length ?? 0;
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
}, _RhPagination_getCurrentLink = function _RhPagination_getCurrentLink() {
    const ariaCurrent = this.querySelector('li a[aria-current="page"]');
    if (ariaCurrent) {
        return ariaCurrent;
    }
    for (const link of __classPrivateFieldGet(this, _RhPagination_links, "f") ?? []) {
        const url = new URL(link.href);
        if (url.pathname === location.pathname
            && url.search === location.search
            && url.hash === location.hash) {
            return link;
        }
    }
    __classPrivateFieldGet(this, _RhPagination_logger, "f").warn('could not determine current link');
    return null;
}, _RhPagination_updateLightDOMRefs = function _RhPagination_updateLightDOMRefs() {
    // NB: order of operations! must set up state
    __classPrivateFieldSet(this, _RhPagination_ol, this.querySelector('ol'), "f");
    __classPrivateFieldSet(this, _RhPagination_links, this.querySelectorAll('li a'), "f");
    __classPrivateFieldSet(this, _RhPagination_firstLink, this.querySelector('li:first-child a'), "f");
    __classPrivateFieldSet(this, _RhPagination_lastLink, this.querySelector('li:last-child a'), "f");
    __classPrivateFieldSet(this, _RhPagination_currentLink, __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_getCurrentLink).call(this), "f");
    if (__classPrivateFieldGet(this, _RhPagination_currentLink, "f")) {
        const links = Array.from(__classPrivateFieldGet(this, _RhPagination_links, "f"));
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
}, _RhPagination_checkValidity = function _RhPagination_checkValidity() {
    let message = '';
    // Validate DOM
    if (!__classPrivateFieldGet(this, _RhPagination_ol, "f") || [...this.children].filter(x => !x.slot).length > 1) {
        message = 'must have a single <ol> element as it\'s only child';
    }
    // Validate user input
    if (this.input && __classPrivateFieldGet(this, _RhPagination_links, "f")) {
        if (Number.isNaN(__classPrivateFieldGet(this, _RhPagination_instances, "a", _RhPagination_currentPage_get))) {
            message = `${__classPrivateFieldGet(this, _RhPagination_instances, "a", _RhPagination_currentPage_get)} is not a valid page number`;
        }
        else if (__classPrivateFieldGet(this, _RhPagination_instances, "a", _RhPagination_currentPage_get) > __classPrivateFieldGet(this, _RhPagination_links, "f").length || __classPrivateFieldGet(this, _RhPagination_instances, "a", _RhPagination_currentPage_get) < 1) {
            message = `cannot navigate to page ${__classPrivateFieldGet(this, _RhPagination_instances, "a", _RhPagination_currentPage_get)}`;
        }
        this.input.setCustomValidity(message);
    }
    if (message) {
        __classPrivateFieldGet(this, _RhPagination_logger, "f").warn(this.input?.validationMessage || 'could not navigate');
    }
    this.input?.reportValidity();
    return !message;
}, _RhPagination_go = 
/**
 * 1. Normalize the element state
 * 2. validate and act on the input
 * 3. update the element in case a full browser navigation was prevented (e.g. SPA routing)
 */
async function _RhPagination_go(id) {
    await this.updateComplete;
    if (typeof id === 'number') {
        const link = __classPrivateFieldGet(this, _RhPagination_links, "f")?.[id - 1];
        link?.click?.();
    }
    else {
        this.shadowRoot?.getElementById(id)?.click();
    }
    this.requestUpdate();
    await this.updateComplete;
    return __classPrivateFieldGet(this, _RhPagination_currentIndex, "f");
}, _RhPagination_onKeyup = function _RhPagination_onKeyup(event) {
    if (!(event.target instanceof HTMLInputElement) || !__classPrivateFieldGet(this, _RhPagination_links, "f")) {
        return;
    }
    const max = __classPrivateFieldGet(this, _RhPagination_links, "f").length.toString();
    const input = event.target;
    if (parseInt(input.value) > parseInt(max)) {
        input.value = max;
    }
}, _RhPagination_onChange = function _RhPagination_onChange() {
    if (!this.input || !__classPrivateFieldGet(this, _RhPagination_links, "f")) {
        return;
    }
    const inputNum = parseInt(this.input.value);
    __classPrivateFieldSet(this, _RhPagination_currentIndex, inputNum - 1, "f");
    if (__classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_checkValidity).call(this)) {
        __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_go).call(this, __classPrivateFieldGet(this, _RhPagination_instances, "a", _RhPagination_currentPage_get));
    }
};
RhPagination.properties = {
    overflow: { reflect: true },
    label: {},
    labelFirst: { attribute: 'label-first' },
    labelPrevious: { attribute: 'label-previous' },
    labelNext: { attribute: 'label-next' },
    labelLast: { attribute: 'label-last' },
    size: { reflect: true },
    variant: { reflect: true }
};
RhPagination.version = '{{version}}';
RhPagination.styles = [styles];
__decorate([
    colorContextConsumer()
], RhPagination.prototype, "on", void 0);
customElements.define("rh-pagination", RhPagination);
//# sourceMappingURL=rh-pagination.js.map