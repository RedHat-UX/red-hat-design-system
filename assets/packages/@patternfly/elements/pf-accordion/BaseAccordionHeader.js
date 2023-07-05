import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
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
class BaseAccordionHeader extends LitElement {
    constructor() {
        super(...arguments);
        this.expanded = false;
        this.#logger = new Logger(this);
    }
    static { this.styles = [style]; }
    static { this.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true }; }
    #generatedHtag;
    #logger;
    #header;
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('click', this.#onClick);
        this.hidden = true;
        this.id ||= getRandomId(this.localName);
        this.#initHeader();
    }
    async #initHeader() {
        if (this.headingText && !this.headingTag) {
            this.headingTag = 'h3';
        }
        this.#header = this.#getOrCreateHeader();
        // prevent double-logging
        if (this.#header !== this.#generatedHtag) {
            this.#generatedHtag = undefined;
        }
        do {
            await this.updateComplete;
        } while (!await this.updateComplete);
        // Remove the hidden attribute after upgrade
        this.hidden = false;
    }
    render() {
        switch (this.headingTag) {
            case 'h1': return html `<h1 id="heading">${this.#renderHeaderContent()}</h1>`;
            case 'h2': return html `<h2 id="heading">${this.#renderHeaderContent()}</h2>`;
            case 'h3': return html `<h3 id="heading">${this.#renderHeaderContent()}</h3>`;
            case 'h4': return html `<h4 id="heading">${this.#renderHeaderContent()}</h4>`;
            case 'h5': return html `<h5 id="heading">${this.#renderHeaderContent()}</h5>`;
            case 'h6': return html `<h6 id="heading">${this.#renderHeaderContent()}</h6>`;
            default: return this.#renderHeaderContent();
        }
    }
    #renderHeaderContent() {
        const headingText = this.headingText?.trim() ?? this.#header?.textContent?.trim();
        return html `
      <button id="button"
              class="toggle"
              aria-expanded="${String(!!this.expanded)}">
        <span part="text">${headingText ?? html `
          <slot></slot>`}
        </span>
        ${this.renderAfterButton?.()}
      </button>
    `;
    }
    #getOrCreateHeader() {
        // Check if there is no nested element or nested textNodes
        if (!this.firstElementChild && !this.firstChild) {
            return void this.#logger.warn('No header content provided');
        }
        else if (this.firstElementChild) {
            const [heading, ...otherContent] = Array.from(this.children)
                .filter((x) => !x.hasAttribute('slot') && isPorHeader(x));
            // If there is no content inside the slot, return empty with a warning
            // else, if there is more than 1 element in the slot, capture the first h-tag
            if (!heading) {
                return void this.#logger.warn('No heading information was provided.');
            }
            else if (otherContent.length) {
                this.#logger.warn('Heading currently only supports 1 tag; extra tags will be ignored.');
            }
            return heading;
        }
        else {
            if (!this.#generatedHtag) {
                this.#logger.warn('Header should contain at least 1 heading tag for correct semantics.');
            }
            this.#generatedHtag = document.createElement('h3');
            // If a text node was provided but no semantics, default to an h3
            // otherwise, incorrect semantics were used, create an H3 and try to capture the content
            if (this.firstChild?.nodeType === Node.TEXT_NODE) {
                this.#generatedHtag.textContent = this.firstChild.textContent;
            }
            else {
                this.#generatedHtag.textContent = this.textContent;
            }
            return this.#generatedHtag;
        }
    }
    #onClick(event) {
        const expanded = !this.expanded;
        const acc = event.composedPath().find(BaseAccordion.isAccordion);
        if (acc) {
            this.dispatchEvent(new AccordionHeaderChangeEvent(expanded, this, acc));
        }
    }
}
__decorate([
    property({ type: Boolean, reflect: true })
], BaseAccordionHeader.prototype, "expanded", void 0);
__decorate([
    property({ reflect: true, attribute: 'heading-text' })
], BaseAccordionHeader.prototype, "headingText", void 0);
__decorate([
    property({ reflect: true, attribute: 'heading-tag' })
], BaseAccordionHeader.prototype, "headingTag", void 0);
export { BaseAccordionHeader };
//# sourceMappingURL=BaseAccordionHeader.js.map