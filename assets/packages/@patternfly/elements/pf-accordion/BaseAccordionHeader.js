var _BaseAccordionHeader_instances, _BaseAccordionHeader_generatedHtag, _BaseAccordionHeader_logger, _BaseAccordionHeader_initHeader, _BaseAccordionHeader_getOrCreateHeader, _BaseAccordionHeader_onClick;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { unsafeStatic, html as staticH } from 'lit/static-html.js';
import { BaseAccordion } from './BaseAccordion.js';
import { ComposedEvent } from '@patternfly/pfe-core';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { css } from "lit";
const style = css `#heading{font-size:100%;padding:0;margin:0}a,button{cursor:pointer}.toggle,.toggle:after,.toggle:before{padding:0;margin:0}.toggle{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;border:0}.toggle:after{content:"";position:absolute;bottom:0;left:0}span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}`;
const isPorHeader = (el) => el instanceof HTMLElement && !!el.tagName.match(/P|^H[1-6]/);
export class AccordionHeaderChangeEvent extends ComposedEvent {
    constructor(expanded, toggle, accordion) {
        super('change');
        this.expanded = expanded;
        this.toggle = toggle;
        this.accordion = accordion;
    }
}
export class BaseAccordionHeader extends LitElement {
    constructor() {
        super(...arguments);
        _BaseAccordionHeader_instances.add(this);
        this.expanded = false;
        this.headingText = '';
        this.headingTag = 'h3';
        _BaseAccordionHeader_generatedHtag.set(this, void 0);
        _BaseAccordionHeader_logger.set(this, new Logger(this));
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('click', __classPrivateFieldGet(this, _BaseAccordionHeader_instances, "m", _BaseAccordionHeader_onClick));
        this.hidden = true;
        this.id || (this.id = getRandomId(this.localName));
        __classPrivateFieldGet(this, _BaseAccordionHeader_instances, "m", _BaseAccordionHeader_initHeader).call(this);
    }
    render() {
        const tag = unsafeStatic(this.headingTag);
        const ariaExpandedState = String(!!this.expanded);
        return staticH `
      <${tag} id="heading">
        <button id="button"
                class="toggle"
                aria-expanded="${ariaExpandedState}">
          <span part="text">${this.headingText || html `
            <slot></slot>`}
          </span>
          ${this.renderAfterButton?.()}
        </button>
      </${tag}>
    `;
    }
}
_BaseAccordionHeader_generatedHtag = new WeakMap(), _BaseAccordionHeader_logger = new WeakMap(), _BaseAccordionHeader_instances = new WeakSet(), _BaseAccordionHeader_initHeader = async function _BaseAccordionHeader_initHeader() {
    const header = __classPrivateFieldGet(this, _BaseAccordionHeader_instances, "m", _BaseAccordionHeader_getOrCreateHeader).call(this);
    // prevent double-logging
    if (header !== __classPrivateFieldGet(this, _BaseAccordionHeader_generatedHtag, "f")) {
        __classPrivateFieldSet(this, _BaseAccordionHeader_generatedHtag, undefined, "f");
    }
    this.headingTag = header?.tagName.toLowerCase() ?? 'h3';
    this.headingText = header?.textContent?.trim() ?? '';
    do {
        await this.updateComplete;
    } while (!await this.updateComplete);
    // Remove the hidden attribute after upgrade
    this.hidden = false;
}, _BaseAccordionHeader_getOrCreateHeader = function _BaseAccordionHeader_getOrCreateHeader() {
    // Check if there is no nested element or nested textNodes
    if (!this.firstElementChild && !this.firstChild) {
        return void __classPrivateFieldGet(this, _BaseAccordionHeader_logger, "f").warn('No header content provided');
    }
    else if (this.firstElementChild) {
        const [heading, ...otherContent] = Array.from(this.children)
            .filter((x) => !x.hasAttribute('slot') && isPorHeader(x));
        // If there is no content inside the slot, return empty with a warning
        // else, if there is more than 1 element in the slot, capture the first h-tag
        if (!heading) {
            return void __classPrivateFieldGet(this, _BaseAccordionHeader_logger, "f").warn('No heading information was provided.');
        }
        else if (otherContent.length) {
            __classPrivateFieldGet(this, _BaseAccordionHeader_logger, "f").warn('Heading currently only supports 1 tag; extra tags will be ignored.');
        }
        return heading;
    }
    else {
        if (!__classPrivateFieldGet(this, _BaseAccordionHeader_generatedHtag, "f")) {
            __classPrivateFieldGet(this, _BaseAccordionHeader_logger, "f").warn('Header should contain at least 1 heading tag for correct semantics.');
        }
        __classPrivateFieldSet(this, _BaseAccordionHeader_generatedHtag, document.createElement('h3'), "f");
        // If a text node was provided but no semantics, default to an h3
        // otherwise, incorrect semantics were used, create an H3 and try to capture the content
        if (this.firstChild?.nodeType === Node.TEXT_NODE) {
            __classPrivateFieldGet(this, _BaseAccordionHeader_generatedHtag, "f").textContent = this.firstChild.textContent;
        }
        else {
            __classPrivateFieldGet(this, _BaseAccordionHeader_generatedHtag, "f").textContent = this.textContent;
        }
        return __classPrivateFieldGet(this, _BaseAccordionHeader_generatedHtag, "f");
    }
}, _BaseAccordionHeader_onClick = function _BaseAccordionHeader_onClick(event) {
    const expanded = !this.expanded;
    const acc = event.composedPath().find(BaseAccordion.isAccordion);
    if (acc) {
        this.dispatchEvent(new AccordionHeaderChangeEvent(expanded, this, acc));
    }
};
BaseAccordionHeader.styles = [style];
BaseAccordionHeader.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
__decorate([
    property({ type: Boolean, reflect: true })
], BaseAccordionHeader.prototype, "expanded", void 0);
__decorate([
    property({ reflect: true, attribute: 'heading-text' })
], BaseAccordionHeader.prototype, "headingText", void 0);
__decorate([
    property({ reflect: true, attribute: 'heading-tag' })
], BaseAccordionHeader.prototype, "headingTag", void 0);
//# sourceMappingURL=BaseAccordionHeader.js.map