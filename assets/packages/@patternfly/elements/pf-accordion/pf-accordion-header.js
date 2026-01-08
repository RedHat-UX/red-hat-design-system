var _PfAccordionHeader_instances, _PfAccordionHeader_generatedHtag, _PfAccordionHeader_logger, _PfAccordionHeader_header, _PfAccordionHeader_slots, _PfAccordionHeader_initHeader, _PfAccordionHeader_getOrCreateHeader, _PfAccordionHeader_onClick;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { css } from "lit";
const style = css `:host {
  --pf-icon--size: var(--pf-c-accordion__toggle--IconSize, 10px);

  /**
   * Sets the font color for the accordion header.
   */
  color: var(--pf-c-accordion__toggle--Color, var(--pf-global--Color--100, #151515));
  background-color: var(--pf-global--BackgroundColor--100, #ffffff);
}

:host([large]) {
  /** Sets the top padding for the accordion header. */
  --pf-c-accordion__toggle--PaddingTop: var(--pf-global--spacer--md, 1rem);
  /** Sets the right padding for the accordion header. */
  --pf-c-accordion__toggle--PaddingRight: var(--pf-global--spacer--md, 1rem);
  /** Sets the bottom padding for the accordion header. */
  --pf-c-accordion__toggle--PaddingBottom: var(--pf-global--spacer--md, 1rem);
  /** Sets the left padding for the accordion header. */
  --pf-c-accordion__toggle--PaddingLeft: var(--pf-global--spacer--lg, 1.5rem);
  /** Sets the font family for the accordion header. */
  --pf-c-accordion__toggle--FontFamily:
    var(--pf-global--FontFamily--redhat-updated--heading--sans-serif,
      "RedHatDisplayUpdated",
      "Overpass",
      overpass,
      helvetica,
      arial,
      sans-serif
    );
  /** Sets the font size for the accordion header. */
  --pf-c-accordion__toggle--FontSize: var(--pf-global--FontSize--xl, 1.25rem);
  --pf-c-accordion__toggle--hover-text--Color: var(--pf-global--Color--100, #151515);
  --pf-c-accordion__toggle--active-text--Color: var(--pf-global--Color--100, #151515);
  --pf-c-accordion__toggle--active-text--FontWeight: var(--pf-global--FontWeight--normal, 400);
  --pf-c-accordion__toggle--focus-text--Color: var(--pf-global--Color--100, #151515);
  --pf-c-accordion__toggle--focus-text--FontWeight: var(--pf-global--FontWeight--normal, 400);
  --pf-c-accordion__toggle--expanded-text--Color: var(--pf-global--Color--100, #151515);
  --pf-c-accordion__toggle--expanded-text--FontWeight: var(--pf-global--FontWeight--normal, 400);
  --pf-icon--size: var(--pf-c-accordion__toggle--IconSize, 12px);
}

#heading {
  font-weight: var(--pf-c-accordion__toggle--FontWeight, var(--pf-global--FontWeight--normal, 400));
  font-size: 100%;
  padding: 0;
  margin: 0;
}

button,
a {
  cursor: pointer;
}

.toggle,
.toggle:before,
.toggle:after {
  padding: 0;
  margin: 0;
  /** Sets the background color for the accordion header toggle element. */
  background-color: var(--pf-c-accordion__toggle--BackgroundColor, transparent);
}

.icon {
  /**
   * Sets the transition animation for the accordion header.
   */
  transition: var(--pf-c-accordion__toggle-icon--Transition, 0.2s ease-in 0s);
}

.toggle {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 0;
  padding:
    var(--pf-c-accordion__toggle--PaddingTop, var(--pf-global--spacer--md, 0.5rem))
    var(--pf-c-accordion__toggle--PaddingRight, var(--pf-global--spacer--md, 1rem))
    var(--pf-c-accordion__toggle--PaddingBottom, var(--pf-global--spacer--sm, 0.5rem))
    var(--pf-c-accordion__toggle--PaddingLeft, var(--pf-global--spacer--md, 1rem));
  font-family:
    var(--pf-c-accordion__toggle--FontFamily,
      var(--pf-global--FontFamily--redhat-updated--heading--sans-serif,
        "RedHatTextUpdated",
        helvetica,
        arial,
        sans-serif));
  font-size: var(--pf-c-accordion__toggle--FontSize, var(--pf-global--FontSize--lg, 1rem));
  /**
   * Sets the font weight for the accordion header.
   */
  font-weight: var(--pf-c-accordion__toggle--FontWeight, var(--pf-global--FontWeight--normal, 400));
  color: var(--pf-c-accordion__toggle--Color, var(--pf-global--Color--100, #151515));
}

.toggle[aria-expanded="true"] {
  --pf-c-accordion__toggle--after--BackgroundColor:
    /**
     * Sets the hover expanded before background color for the accordion header.
     */
    var(
      --pf-c-accordion__toggle--expanded--before--BackgroundColor,
      var(
        --pf-global--primary-color--100,
        #0066cc
      )
    );
}

.toggle:after {
  top: var(--pf-c-accordion__toggle--before--Top, -1px);
  /**
   * Sets the sidebar width for the accordion header.
   */
  width: var(--pf-c-accordion__toggle--before--Width, var(--pf-global--BorderWidth--lg, 3px));
  /**
   * Sets the background color for the after element for the accordion header toggle element.
   */
  background-color: var(--pf-c-accordion__toggle--after--BackgroundColor, transparent);
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
}

span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /**
   * Sets the max width for the text inside the accordion header.
   */
  max-width: var(--pf-c-accordion__toggle-text--MaxWidth,
    calc(100% - var(--pf-global--spacer--lg, 1.5rem)));
}

.toggle[aria-expanded="true"] .icon {
  /**
   * Sets the expanded icon rotation degrees for the accordion header.
   */
  rotate: var(--pf-c-accordion__toggle--expanded-icon--Rotate, 90deg);
}

.toggle:hover,
.toggle:active,
.toggle:focus {
  /**
   * Sets the active background color for the accordion header.
   */
  background-color:
    var(--pf-c-accordion__toggle--active--BackgroundColor,
      var(--pf-global--BackgroundColor--200, #f0f0f0));
}

.toggle:hover span,
.toggle:focus span,
.toggle:active span {
  /**
   * Sets the active text color for the accordion header.
   */
  color: var(--pf-c-accordion__toggle--active-text--Color, var(--pf-global--link--Color, #0066cc));
}

.toggle:focus span,
.toggle:active span {
  font-weight: var(--pf-c-accordion__toggle--active-text--FontWeight,
      var(--pf-global--FontWeight--semi-bold, 700));
}
`;
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
        <!-- summary: inline element containing the heading text or slotted heading content -->
        <span part="text">${headingText ?? html `
          <!-- summary: A heading level tag (h1, h2, h3, h4, h5, h6) -->
          <slot></slot>`}
        </span>
        <!-- summary: container for accents within the header -->
        <span part="accents" ?hidden="${__classPrivateFieldGet(this, _PfAccordionHeader_slots, "f").isEmpty('accents')}">
          <!-- summary: Header accent elements like tag or icon
               description: |
                 These elements will appear inline with the accordion header,
                 between the header and the chevron
                 (or after the chevron and header in disclosure mode). -->
          <slot name="accents"></slot>
        </span>
        <!-- summary: caret icon -->
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
PfAccordionHeader.version = "4.3.0";
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