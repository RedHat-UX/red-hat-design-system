var _PfAccordionHeader_instances, _PfAccordionHeader_generatedHtag, _PfAccordionHeader_logger, _PfAccordionHeader_header, _PfAccordionHeader_slots, _PfAccordionHeader_initHeader, _PfAccordionHeader_getOrCreateHeader, _PfAccordionHeader_onClick;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { css } from "lit";
const style = css `:host {\n  --pf-icon--size: var(--pf-c-accordion__toggle--IconSize, 10px);\n\n  color: var(--pf-c-accordion__toggle--Color, var(--pf-global--Color--100, #151515));\n  background-color: var(--pf-global--BackgroundColor--100, #ffffff);\n}\n\n:host([large]) {\n  --pf-c-accordion__toggle--PaddingTop: var(--pf-global--spacer--md, 1rem);\n  --pf-c-accordion__toggle--PaddingRight: var(--pf-global--spacer--md, 1rem);\n  --pf-c-accordion__toggle--PaddingBottom: var(--pf-global--spacer--md, 1rem);\n  --pf-c-accordion__toggle--PaddingLeft: var(--pf-global--spacer--lg, 1.5rem);\n  --pf-c-accordion__toggle--FontFamily:\n    var(--pf-global--FontFamily--redhat-updated--heading--sans-serif,\n      "RedHatDisplayUpdated",\n      "Overpass",\n      overpass,\n      helvetica,\n      arial,\n      sans-serif\n    );\n  --pf-c-accordion__toggle--FontSize: var(--pf-global--FontSize--xl, 1.25rem);\n  --pf-c-accordion__toggle--hover-text--Color: var(--pf-global--Color--100, #151515);\n  --pf-c-accordion__toggle--active-text--Color: var(--pf-global--Color--100, #151515);\n  --pf-c-accordion__toggle--active-text--FontWeight: var(--pf-global--FontWeight--normal, 400);\n  --pf-c-accordion__toggle--focus-text--Color: var(--pf-global--Color--100, #151515);\n  --pf-c-accordion__toggle--focus-text--FontWeight: var(--pf-global--FontWeight--normal, 400);\n  --pf-c-accordion__toggle--expanded-text--Color: var(--pf-global--Color--100, #151515);\n  --pf-c-accordion__toggle--expanded-text--FontWeight: var(--pf-global--FontWeight--normal, 400);\n  --pf-icon--size: var(--pf-c-accordion__toggle--IconSize, 12px);\n}\n\n#heading {\n  font-weight: var(--pf-c-accordion__toggle--FontWeight, var(--pf-global--FontWeight--normal, 400));\n  font-size: 100%;\n  padding: 0;\n  margin: 0;\n}\n\nbutton,\na {\n  cursor: pointer;\n}\n\n.toggle,\n.toggle:before,\n.toggle:after {\n  padding: 0;\n  margin: 0;\n  background-color: var(--pf-c-accordion__toggle--BackgroundColor, transparent);\n}\n\n.icon {\n  transition: var(--pf-c-accordion__toggle-icon--Transition, 0.2s ease-in 0s);\n}\n\n.toggle {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  border: 0;\n  padding:\n    var(--pf-c-accordion__toggle--PaddingTop, var(--pf-global--spacer--md, 0.5rem))\n    var(--pf-c-accordion__toggle--PaddingRight, var(--pf-global--spacer--md, 1rem))\n    var(--pf-c-accordion__toggle--PaddingBottom, var(--pf-global--spacer--sm, 0.5rem))\n    var(--pf-c-accordion__toggle--PaddingLeft, var(--pf-global--spacer--md, 1rem));\n  font-family:\n    var(--pf-c-accordion__toggle--FontFamily,\n      var(--pf-global--FontFamily--redhat-updated--heading--sans-serif,\n        "RedHatTextUpdated",\n        helvetica,\n        arial,\n        sans-serif));\n  font-size: var(--pf-c-accordion__toggle--FontSize, var(--pf-global--FontSize--lg, 1rem));\n  font-weight: var(--pf-c-accordion__toggle--FontWeight, var(--pf-global--FontWeight--normal, 400));\n  color: var(--pf-c-accordion__toggle--Color, var(--pf-global--Color--100, #151515));\n}\n\n.toggle[aria-expanded="true"] {\n  --pf-c-accordion__toggle--after--BackgroundColor:\n    var(\n      --pf-c-accordion__toggle--expanded--before--BackgroundColor,\n      var(\n        --pf-global--primary-color--100,\n        #0066cc\n      )\n    );\n}\n\n.toggle:after {\n  top: var(--pf-c-accordion__toggle--before--Top, -1px);\n  width: var(--pf-c-accordion__toggle--before--Width, var(--pf-global--BorderWidth--lg, 3px));\n  background-color: var(--pf-c-accordion__toggle--after--BackgroundColor, transparent);\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\nspan {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: var(--pf-c-accordion__toggle-text--MaxWidth,\n    calc(100% - var(--pf-global--spacer--lg, 1.5rem)));\n}\n\n.toggle[aria-expanded="true"] .icon {\n  rotate: var(--pf-c-accordion__toggle--expanded-icon--Rotate, 90deg);\n}\n\n.toggle:hover,\n.toggle:active,\n.toggle:focus {\n  background-color:\n    var(--pf-c-accordion__toggle--active--BackgroundColor,\n      var(--pf-global--BackgroundColor--200, #f0f0f0));\n}\n\n.toggle:hover span,\n.toggle:focus span,\n.toggle:active span {\n  color: var(--pf-c-accordion__toggle--active-text--Color, var(--pf-global--link--Color, #0066cc));\n}\n\n.toggle:focus span,\n.toggle:active span {\n  font-weight: var(--pf-c-accordion__toggle--active-text--FontWeight,\n      var(--pf-global--FontWeight--semi-bold, 700));\n}\n`;
import '@patternfly/elements/pf-icon/pf-icon.js';
const isPorHeader = (el) => el instanceof HTMLElement && !!el.tagName.match(/P|^H[1-6]/);
export class PfAccordionHeaderChangeEvent extends Event {
    constructor(expanded, toggle, accordion) {
        super('change', { bubbles: true });
        this.expanded = expanded;
        this.toggle = toggle;
        this.accordion = accordion;
    }
}
let PfAccordionHeader = class PfAccordionHeader extends LitElement {
    constructor() {
        super(...arguments);
        _PfAccordionHeader_instances.add(this);
        this.expanded = false;
        _PfAccordionHeader_generatedHtag.set(this, void 0);
        _PfAccordionHeader_logger.set(this, new Logger(this));
        _PfAccordionHeader_header.set(this, void 0);
        _PfAccordionHeader_slots.set(this, new SlotController(this, 'accents', null));
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId(this.localName));
        __classPrivateFieldGet(this, _PfAccordionHeader_instances, "m", _PfAccordionHeader_initHeader).call(this);
    }
    render() {
        const headingText = this.headingText?.trim() ?? __classPrivateFieldGet(this, _PfAccordionHeader_header, "f")?.textContent?.trim();
        const content = html `
      <button id="button"
              class="toggle"
              @click="${__classPrivateFieldGet(this, _PfAccordionHeader_instances, "m", _PfAccordionHeader_onClick)}"
              aria-expanded="${String(!!this.expanded)}">
        <span part="text">${headingText ?? html `
          <slot></slot>`}
        </span>
        <span part="accents" ?hidden="${__classPrivateFieldGet(this, _PfAccordionHeader_slots, "f").isEmpty('accents')}">
          <slot name="accents"></slot>
        </span>
        <pf-icon part="icon"
                 class="icon"
                 size="lg"
                 set="${this.iconSet ?? 'fas'}"
                 icon="${this.icon ?? 'angle-right'}"
        ></pf-icon>
      </button>
    `;
        switch (this.headingTag) {
            case 'h1': return html `<h1 id="heading">${content}</h1>`;
            case 'h2': return html `<h2 id="heading">${content}</h2>`;
            case 'h3': return html `<h3 id="heading">${content}</h3>`;
            case 'h4': return html `<h4 id="heading">${content}</h4>`;
            case 'h5': return html `<h5 id="heading">${content}</h5>`;
            case 'h6': return html `<h6 id="heading">${content}</h6>`;
            default: return content;
        }
    }
};
_PfAccordionHeader_generatedHtag = new WeakMap();
_PfAccordionHeader_logger = new WeakMap();
_PfAccordionHeader_header = new WeakMap();
_PfAccordionHeader_slots = new WeakMap();
_PfAccordionHeader_instances = new WeakSet();
_PfAccordionHeader_initHeader = async function _PfAccordionHeader_initHeader() {
    if (this.headingText) {
        this.headingTag || (this.headingTag = 'h3');
    }
    __classPrivateFieldSet(this, _PfAccordionHeader_header, __classPrivateFieldGet(this, _PfAccordionHeader_instances, "m", _PfAccordionHeader_getOrCreateHeader).call(this), "f");
    // prevent double-logging
    if (__classPrivateFieldGet(this, _PfAccordionHeader_header, "f") !== __classPrivateFieldGet(this, _PfAccordionHeader_generatedHtag, "f")) {
        __classPrivateFieldSet(this, _PfAccordionHeader_generatedHtag, undefined, "f");
    }
    do {
        await this.updateComplete;
    } while (!await this.updateComplete);
    // Remove the hidden attribute after upgrade
    this.hidden = false;
};
_PfAccordionHeader_getOrCreateHeader = function _PfAccordionHeader_getOrCreateHeader() {
    // Check if there is no nested element or nested textNodes
    if (!this.firstElementChild && !this.firstChild) {
        return void __classPrivateFieldGet(this, _PfAccordionHeader_logger, "f").warn('No header content provided');
    }
    else if (this.firstElementChild) {
        const [heading, ...otherContent] = Array.from(this.children)
            .filter((x) => !x.hasAttribute('slot') && isPorHeader(x));
        // If there is no content inside the slot, return empty with a warning
        // else, if there is more than 1 element in the slot, capture the first h-tag
        if (!heading) {
            return void __classPrivateFieldGet(this, _PfAccordionHeader_logger, "f").warn('No heading information was provided.');
        }
        else if (otherContent.length) {
            __classPrivateFieldGet(this, _PfAccordionHeader_logger, "f").warn('Heading currently only supports 1 tag; extra tags will be ignored.');
        }
        return heading;
    }
    else {
        if (!__classPrivateFieldGet(this, _PfAccordionHeader_generatedHtag, "f")) {
            __classPrivateFieldGet(this, _PfAccordionHeader_logger, "f").warn('Header should contain at least 1 heading tag for correct semantics.');
        }
        __classPrivateFieldSet(this, _PfAccordionHeader_generatedHtag, document.createElement('h3'), "f");
        // If a text node was provided but no semantics, default to an h3
        // otherwise, incorrect semantics were used, create an H3 and try to capture the content
        if (this.firstChild?.nodeType === Node.TEXT_NODE) {
            __classPrivateFieldGet(this, _PfAccordionHeader_generatedHtag, "f").textContent = this.firstChild.textContent;
        }
        else {
            __classPrivateFieldGet(this, _PfAccordionHeader_generatedHtag, "f").textContent = this.textContent;
        }
        return __classPrivateFieldGet(this, _PfAccordionHeader_generatedHtag, "f");
    }
};
_PfAccordionHeader_onClick = function _PfAccordionHeader_onClick() {
    const expanded = !this.expanded;
    const acc = this.closest('pf-accordion');
    if (acc) {
        this.dispatchEvent(new PfAccordionHeaderChangeEvent(expanded, this, acc));
    }
};
PfAccordionHeader.styles = [style];
PfAccordionHeader.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
PfAccordionHeader.version = "4.1.0";
__decorate([
    property({ reflect: true })
], PfAccordionHeader.prototype, "bordered", void 0);
__decorate([
    property({ reflect: true })
], PfAccordionHeader.prototype, "icon", void 0);
__decorate([
    property({ reflect: true, attribute: 'icon-set' })
], PfAccordionHeader.prototype, "iconSet", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfAccordionHeader.prototype, "expanded", void 0);
__decorate([
    property({ reflect: true, attribute: 'heading-text' })
], PfAccordionHeader.prototype, "headingText", void 0);
__decorate([
    property({ reflect: true, attribute: 'heading-tag' })
], PfAccordionHeader.prototype, "headingTag", void 0);
PfAccordionHeader = __decorate([
    customElement('pf-accordion-header')
], PfAccordionHeader);
export { PfAccordionHeader };
//# sourceMappingURL=pf-accordion-header.js.map