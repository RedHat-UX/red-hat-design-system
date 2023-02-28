var _RhPagination_instances, _RhPagination_mo, _RhPagination_screen, _RhPagination_logger, _RhPagination_ol, _RhPagination_links, _RhPagination_firstLink, _RhPagination_lastLink, _RhPagination_nextLink, _RhPagination_prevLink, _RhPagination_currentLink, _RhPagination_currentIndex, _RhPagination_currentPage_get, _RhPagination_update, _RhPagination_getOverflow, _RhPagination_getCurrentLink, _RhPagination_updateLightDOMRefs, _RhPagination_checkValidity, _RhPagination_go, _RhPagination_onKeyup, _RhPagination_onChange;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
import { css } from "lit";
const styles = css `:host{display:block;min-height:4em}[hidden]{display:none!important}#container{display:flex;gap:calc(var(--rh-space-xs,4px)/ 2);flex-wrap:wrap}nav{display:contents}svg{fill:currentcolor}.stepper{display:flex;align-items:center;justify-content:center;height:50px;width:50px;background:var(--rh-color-surface-light,#f0f0f0);outline:0;color:var(--rh-pagination-stepper-color,var(--rh-color-black-600,#6a6e73));box-sizing:border-box}.stepper:focus{border:2px solid var(--rh-color-border-interactive-on-light,#06c)}.stepper svg{height:14px}:is(#next,#last) svg{rotate:180deg}.stepper[inert]{pointer-events:none;color:var(--rh-pagination-background-focused,var(--rh-color-black-300,#d2d2d2))}.mobile .stepper:hover{background:var(--rh-color-black-300,#d2d2d2)}#numeric{margin-block-start:var(--rh-space-2xl,32px);width:100%;display:flex;align-items:center;flex:1 1 100%;gap:.5em}input{height:var(--rh-length-2xl,32px);width:var(--rh-length-4xl,64px);font-size:var(--rh-font-size-body-text-md, 1rem);background:var(--rh-color-surface-lightest,#fff);border:1px solid var(--rh-color-black-300,#d2d2d2);border-block-end:1px solid var(--rh-color-black-600,#6a6e73);box-sizing:border-box;padding:2px}input:focus{outline:0;border:2px solid var(--rh-pagination-accent-color,var(--rh-color-interactive-blue,#06c));padding:1px}input:invalid{border-block-end:1px solid var(--rh-color-border-danger-on-light,#ee0000)}:host([on=dark]) input:invalid{border-block-end:1px solid var(--rh-color-border-danger-on-dark,#ff442b)}#numeric a{text-decoration:none;color:var(--rh-color-interactive-blue-darker,#06c)}#numeric a:hover{color:var(--rh-color-interactive-blue-darkest,#004080)}#numeric a:visited{color:var(--rh-color-interactive-purple-darker,#6753ac)}#numeric a:visited:hover{color:var(--rh-color-interactive-purple-darkest,#1f0066)}@media (min-width:700px){#numeric{margin-block-start:0;margin-inline-start:var(--rh-space-xl,24px);flex:1 0 0%}#container{flex-wrap:nowrap}}`;
const L1 = html `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 14">
    <path d="M.3 6.26 6.24.3C6.63-.1 7.3-.1 7.7.3l.99.99c.4.4.4 1.07 0 1.48L4.49 7l4.2 4.22c.41.4.41 1.07 0 1.48l-.98 1c-.41.4-1.07.4-1.48 0L.31 7.73a1.05 1.05 0 0 1 0-1.48Z"/>
  </svg>`;
const L2 = html `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.44 14">
    <path d="M8.7 6.26 14.66.3a1.05 1.05 0 0 1 1.49 0l.98.99c.42.4.42 1.07 0 1.48L12.92 7l4.2 4.22c.42.4.42 1.07 0 1.48l-.98 1c-.41.4-1.08.4-1.48 0L8.7 7.73a1.05 1.05 0 0 1 0-1.48zM.3 7.74l5.96 5.95c.4.41 1.07.41 1.48 0l.99-.99c.4-.4.4-1.07 0-1.48L4.52 7l4.21-4.22c.41-.4.41-1.07 0-1.48l-.99-1a1.05 1.05 0 0 0-1.48 0L.31 6.27a1.05 1.05 0 0 0 0 1.48z"/>
  </svg>`;
/**
 * Pagination
 * @slot - Place element content here
 */
let RhPagination = class RhPagination extends LitElement {
    constructor() {
        super(...arguments);
        _RhPagination_instances.add(this);
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
        _RhPagination_mo.set(this, new MutationObserver(() => __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_update).call(this)));
        _RhPagination_screen.set(this, new ScreenSizeController(this));
        _RhPagination_logger.set(this, new Logger(this));
        _RhPagination_ol.set(this, this.querySelector('ol'));
        _RhPagination_links.set(this, __classPrivateFieldGet(this, _RhPagination_ol, "f")?.querySelectorAll('li a'));
        _RhPagination_firstLink.set(this, null);
        _RhPagination_lastLink.set(this, null);
        _RhPagination_nextLink.set(this, null);
        _RhPagination_prevLink.set(this, null);
        _RhPagination_currentLink.set(this, __classPrivateFieldGet(this, _RhPagination_instances, "m", _RhPagination_getCurrentLink).call(this));
        _RhPagination_currentIndex.set(this, 0);
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
        const { mobile, size } = __classPrivateFieldGet(this, _RhPagination_screen, "f");
        const { label, labelFirst, labelPrevious, labelNext, labelLast } = this;
        const firstHref = __classPrivateFieldGet(this, _RhPagination_currentLink, "f") === __classPrivateFieldGet(this, _RhPagination_firstLink, "f") ? undefined : __classPrivateFieldGet(this, _RhPagination_firstLink, "f")?.href;
        const prevHref = __classPrivateFieldGet(this, _RhPagination_prevLink, "f")?.href;
        const nextHref = __classPrivateFieldGet(this, _RhPagination_nextLink, "f")?.href;
        const lastHref = __classPrivateFieldGet(this, _RhPagination_currentLink, "f") === __classPrivateFieldGet(this, _RhPagination_lastLink, "f") ? undefined : __classPrivateFieldGet(this, _RhPagination_lastLink, "f")?.href;
        const currentPage = __classPrivateFieldGet(this, _RhPagination_instances, "a", _RhPagination_currentPage_get).toString();
        return html `
      <div id="container" class=${classMap({ mobile, [size]: true })}>
        <a id="first" class="stepper" href=${ifDefined(firstHref)} ?inert=${!firstHref} aria-label=${labelFirst}>${L2}</a>
        <a id="prev" class="stepper" href=${ifDefined(prevHref)} ?inert=${!prevHref} aria-label=${labelPrevious}>${L1}</a>

        <nav ?hidden=${mobile} ?inert=${mobile} aria-label=${label}>
          <slot></slot>
        </nav>

        <a id="next" class="stepper" href=${ifDefined(nextHref)} ?inert=${!nextHref} aria-label=${labelNext}>${L1}</a>
        <a id="last" class="stepper" href=${ifDefined(lastHref)} ?inert=${!lastHref} aria-label=${labelLast}>${L2}</a>

        <div id="numeric">
          <span id="go-to-page">
            <slot name="go-to-page">Go to page</slot>
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
};
_RhPagination_mo = new WeakMap(), _RhPagination_screen = new WeakMap(), _RhPagination_logger = new WeakMap(), _RhPagination_ol = new WeakMap(), _RhPagination_links = new WeakMap(), _RhPagination_firstLink = new WeakMap(), _RhPagination_lastLink = new WeakMap(), _RhPagination_nextLink = new WeakMap(), _RhPagination_prevLink = new WeakMap(), _RhPagination_currentLink = new WeakMap(), _RhPagination_currentIndex = new WeakMap(), _RhPagination_instances = new WeakSet(), _RhPagination_currentPage_get = function _RhPagination_currentPage_get() {
    return __classPrivateFieldGet(this, _RhPagination_currentIndex, "f") + 1;
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
        if (url.pathname === location.pathname && url.search === location.search && url.hash === location.hash) {
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
    if (!__classPrivateFieldGet(this, _RhPagination_ol, "f") || this.children.length > 1) {
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
RhPagination.version = '{{version}}';
RhPagination.styles = [styles];
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
    query('input')
], RhPagination.prototype, "input", void 0);
RhPagination = __decorate([
    customElement('rh-pagination')
], RhPagination);
export { RhPagination };
//# sourceMappingURL=rh-pagination.js.map