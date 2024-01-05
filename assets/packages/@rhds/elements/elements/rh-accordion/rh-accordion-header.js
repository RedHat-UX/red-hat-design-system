var _RhAccordionHeader_instances, _RhAccordionHeader_generatedHtag, _RhAccordionHeader_logger, _RhAccordionHeader_header, _RhAccordionHeader_dir, _RhAccordionHeader_initHeader, _RhAccordionHeader_renderAfterButton, _RhAccordionHeader_renderHeaderContent, _RhAccordionHeader_getOrCreateHeader, _RhAccordionHeader_onClick;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ComposedEvent } from '@patternfly/pfe-core';
import { DirController } from '../../lib/DirController.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { css } from "lit";
const styles = css `:host{--_padding-block-start:var(--rh-space-lg, 16px);--_padding-inline-end:var(--rh-space-xl, 24px);--_padding-block-end:var(--rh-space-lg, 16px);--_padding-inline-start:var(--rh-space-xl, 24px);--_text-color:var(--rh-color-text-primary-on-light, #151515);--_active-text-color:var(--rh-color-text-primary-on-light, #151515);--_background-color:var(--rh-color-surface-lightest, #ffffff);--_active-background-color:var(--_rhds-background-color, #f2f2f2);--_font-size:var(--rh-font-size-body-text-md, 1rem);--_after-background-color:transparent;--_expanded-background-color:var(--rh-color-accent-brand-on-light, #ee0000);--_isRTL:-1}#heading{font-size:100%;padding:0;margin:0;color:var(--rh-color-text-primary-on-light,#151515);background-color:var(--_rhds-background-color,var(--rh-color-surface-lightest,#fff));font-weight:var(--rh-font-weight-heading-medium,500)}a,button{cursor:pointer}.dark{--_text-color:var(--rh-color-text-primary-on-dark, #ffffff);--_background-color:var(--rh-color-surface-darkest, #151515);--_active-background-color:var(--rh-color-surface-darkest, #151515);--_active-text-color:var(--rh-color-text-primary-on-dark, #ffffff);--_expanded-background-color:var(--rh-color-accent-brand-on-dark, #ee0000);--_border-inline-end-color:var(--rh-color-border-subtle-on-dark, #707070)}.rtl{--_isRTL:1}:host([large]){--_font-size:var(--rh-font-size-body-text-lg, 1.125rem);--_padding-block-start:var(--rh-space-lg, 16px);--_padding-inline-end:var(--rh-space-xl, 24px);--_padding-block-end:var(--rh-space-lg, 16px);--_padding-inline-start:var(--rh-space-xl, 24px)}:host([expanded]){border-inline-end:var(--rh-border-width-sm,1px) solid var(--_border-inline-end-color,#c7c7c7)}:host(.animating) #button,:host([expanded]) #button{border-inline-end-color:var(--rh-color-border-subtle-on-light,#c7c7c7);border-inline-start-color:var(--rh-color-border-subtle-on-light,#c7c7c7)}#button,#button:after,#button:before{background-color:var(--_background-color,transparent)}#icon{width:16px;height:16px;will-change:rotate;transition:rotate .2s ease-in 0s}#button{padding:var(--_padding-block-start) var(--_padding-inline-end) var(--_padding-block-end) var(--_padding-inline-start);font-family:var(--rh-font-family-body-text, RedHatText, "Red Hat Text", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif);font-size:var(--_font-size, var(--rh-font-size-body-text-md, 1rem));font-weight:var(--rh-font-weight-heading-medium,500);color:var(--_text-color)}#button #icon{fill:var(--_text-color)}#button[aria-expanded=true]{--_after-background-color:var(--_expanded-background-color)}#button:after{inset-block-start:-1px;width:var(--rh-border-width-lg,3px);background-color:var(--_after-background-color)}span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - var(--rh-space-xl,24px));text-align:start}#button[aria-expanded=true] #icon{rotate:calc(var(--_isRTL,-1) * 180deg)}#button:active,#button:focus,#button:hover{background-color:var(--_active-background-color)}#button:active span,#button:focus span,#button:hover span{color:var(--_active-text-color)}.toggle,.toggle:after,.toggle:before{padding:0;margin:0}.toggle{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;border:0}.toggle:after{content:"";position:absolute;inset-block:0;inset-inline-start:0}`;
import { BaseAccordion } from './BaseAccordion.js';
const isPorHeader = (el) => el instanceof HTMLElement && !!el.tagName.match(/P|^H[1-6]/);
export class AccordionHeaderChangeEvent extends ComposedEvent {
    constructor(expanded, toggle, accordion) {
        super('change');
        this.expanded = expanded;
        this.toggle = toggle;
        this.accordion = accordion;
    }
}
/**
 * Accordion Header
 *
 * @csspart text - inline element containing the heading text or slotted heading content
 * @csspart accents - container for accents within the header
 * @csspart icon - caret icon
 *
 * @slot
 *       We expect the light DOM of the rh-accordion-header to be a heading level tag (h1, h2, h3, h4, h5, h6)
 * @slot accents
 *       These elements will appear inline with the accordion header, between the header and the chevron
 *       (or after the chevron and header in disclosure mode).
 *
 * @fires {AccordionHeaderChangeEvent} change - when the open panels change
 *
 */
let RhAccordionHeader = class RhAccordionHeader extends LitElement {
    constructor() {
        super(...arguments);
        _RhAccordionHeader_instances.add(this);
        this.expanded = false;
        this.icon = 'angle-down';
        _RhAccordionHeader_generatedHtag.set(this, void 0);
        _RhAccordionHeader_logger.set(this, new Logger(this));
        _RhAccordionHeader_header.set(this, void 0);
        _RhAccordionHeader_dir.set(this, new DirController(this));
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('click', __classPrivateFieldGet(this, _RhAccordionHeader_instances, "m", _RhAccordionHeader_onClick));
        this.hidden = true;
        this.id || (this.id = getRandomId(this.localName));
        __classPrivateFieldGet(this, _RhAccordionHeader_instances, "m", _RhAccordionHeader_initHeader).call(this);
    }
    render() {
        const { on = '' } = this;
        const rtl = __classPrivateFieldGet(this, _RhAccordionHeader_dir, "f").dir === 'rtl';
        const res = [];
        res.push(html `<div id="container" class="${classMap({ [on]: !!on, rtl })}" part="container">`);
        switch (this.headingTag) {
            case 'h1':
                res.push(html `<h1 id="heading">${__classPrivateFieldGet(this, _RhAccordionHeader_instances, "m", _RhAccordionHeader_renderHeaderContent).call(this)}</h1>`);
                break;
            case 'h2':
                res.push(html `<h2 id="heading">${__classPrivateFieldGet(this, _RhAccordionHeader_instances, "m", _RhAccordionHeader_renderHeaderContent).call(this)}</h2>`);
                break;
            case 'h3':
                res.push(html `<h3 id="heading">${__classPrivateFieldGet(this, _RhAccordionHeader_instances, "m", _RhAccordionHeader_renderHeaderContent).call(this)}</h3>`);
                break;
            case 'h4':
                res.push(html `<h4 id="heading">${__classPrivateFieldGet(this, _RhAccordionHeader_instances, "m", _RhAccordionHeader_renderHeaderContent).call(this)}</h4>`);
                break;
            case 'h5':
                res.push(html `<h5 id="heading">${__classPrivateFieldGet(this, _RhAccordionHeader_instances, "m", _RhAccordionHeader_renderHeaderContent).call(this)}</h5>`);
                break;
            case 'h6':
                res.push(html `<h6 id="heading">${__classPrivateFieldGet(this, _RhAccordionHeader_instances, "m", _RhAccordionHeader_renderHeaderContent).call(this)}</h6>`);
                break;
            default: res.push(__classPrivateFieldGet(this, _RhAccordionHeader_instances, "m", _RhAccordionHeader_renderHeaderContent).call(this));
        }
        res.push(html `</div>`);
        return res;
    }
};
_RhAccordionHeader_generatedHtag = new WeakMap(), _RhAccordionHeader_logger = new WeakMap(), _RhAccordionHeader_header = new WeakMap(), _RhAccordionHeader_dir = new WeakMap(), _RhAccordionHeader_instances = new WeakSet(), _RhAccordionHeader_initHeader = async function _RhAccordionHeader_initHeader() {
    if (this.headingText && !this.headingTag) {
        this.headingTag = 'h3';
    }
    __classPrivateFieldSet(this, _RhAccordionHeader_header, __classPrivateFieldGet(this, _RhAccordionHeader_instances, "m", _RhAccordionHeader_getOrCreateHeader).call(this), "f");
    // prevent double-logging
    if (__classPrivateFieldGet(this, _RhAccordionHeader_header, "f") !== __classPrivateFieldGet(this, _RhAccordionHeader_generatedHtag, "f")) {
        __classPrivateFieldSet(this, _RhAccordionHeader_generatedHtag, undefined, "f");
    }
    do {
        await this.updateComplete;
    } while (!await this.updateComplete);
    // Remove the hidden attribute after upgrade
    this.hidden = false;
}, _RhAccordionHeader_renderAfterButton = function _RhAccordionHeader_renderAfterButton() {
    // Font-Awesome free angle-down
    // TODO: use rh-icon when it's ready
    return html `
      <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
      </svg>
    `;
}, _RhAccordionHeader_renderHeaderContent = function _RhAccordionHeader_renderHeaderContent() {
    const headingText = this.headingText?.trim() ?? __classPrivateFieldGet(this, _RhAccordionHeader_header, "f")?.textContent?.trim();
    return html `
      <button id="button"
              class="toggle"
              aria-expanded="${String(!!this.expanded)}">
        <span part="text">${headingText ?? html `
          <slot></slot>`}
        </span>
        ${__classPrivateFieldGet(this, _RhAccordionHeader_instances, "m", _RhAccordionHeader_renderAfterButton)?.call(this)}
      </button>
    `;
}, _RhAccordionHeader_getOrCreateHeader = function _RhAccordionHeader_getOrCreateHeader() {
    // Check if there is no nested element or nested textNodes
    if (!this.firstElementChild && !this.firstChild) {
        return void __classPrivateFieldGet(this, _RhAccordionHeader_logger, "f").warn('No header content provided');
    }
    else if (this.firstElementChild) {
        const [heading, ...otherContent] = Array.from(this.children)
            .filter((x) => !x.hasAttribute('slot') && isPorHeader(x));
        // If there is no content inside the slot, return empty with a warning
        // else, if there is more than 1 element in the slot, capture the first h-tag
        if (!heading) {
            return void __classPrivateFieldGet(this, _RhAccordionHeader_logger, "f").warn('No heading information was provided.');
        }
        else if (otherContent.length) {
            __classPrivateFieldGet(this, _RhAccordionHeader_logger, "f").warn('Heading currently only supports 1 tag; extra tags will be ignored.');
        }
        return heading;
    }
    else {
        if (!__classPrivateFieldGet(this, _RhAccordionHeader_generatedHtag, "f")) {
            __classPrivateFieldGet(this, _RhAccordionHeader_logger, "f").warn('Header should contain at least 1 heading tag for correct semantics.');
        }
        __classPrivateFieldSet(this, _RhAccordionHeader_generatedHtag, document.createElement('h3'), "f");
        // If a text node was provided but no semantics, default to an h3
        // otherwise, incorrect semantics were used, create an H3 and try to capture the content
        if (this.firstChild?.nodeType === Node.TEXT_NODE) {
            __classPrivateFieldGet(this, _RhAccordionHeader_generatedHtag, "f").textContent = this.firstChild.textContent;
        }
        else {
            __classPrivateFieldGet(this, _RhAccordionHeader_generatedHtag, "f").textContent = this.textContent;
        }
        return __classPrivateFieldGet(this, _RhAccordionHeader_generatedHtag, "f");
    }
}, _RhAccordionHeader_onClick = function _RhAccordionHeader_onClick(event) {
    const expanded = !this.expanded;
    const acc = event.composedPath().find(BaseAccordion.isAccordion);
    if (acc) {
        this.dispatchEvent(new AccordionHeaderChangeEvent(expanded, this, acc));
    }
};
RhAccordionHeader.version = '{{version}}';
RhAccordionHeader.styles = [styles];
RhAccordionHeader.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
__decorate([
    property({ type: Boolean, reflect: true })
], RhAccordionHeader.prototype, "expanded", void 0);
__decorate([
    property({ reflect: true, attribute: 'heading-text' })
], RhAccordionHeader.prototype, "headingText", void 0);
__decorate([
    property({ reflect: true, attribute: 'heading-tag' })
], RhAccordionHeader.prototype, "headingTag", void 0);
__decorate([
    property({ reflect: true })
], RhAccordionHeader.prototype, "icon", void 0);
__decorate([
    colorContextConsumer()
], RhAccordionHeader.prototype, "on", void 0);
RhAccordionHeader = __decorate([
    customElement('rh-accordion-header')
], RhAccordionHeader);
export { RhAccordionHeader };
//# sourceMappingURL=rh-accordion-header.js.map