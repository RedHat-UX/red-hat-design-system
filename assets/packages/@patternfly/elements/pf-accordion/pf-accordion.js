import { __decorate } from "tslib";
import { observed } from '@patternfly/pfe-core/decorators.js';
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { BaseAccordion } from './BaseAccordion.js';
import { BaseAccordionHeader } from './BaseAccordionHeader.js';
export * from './pf-accordion-header.js';
export * from './pf-accordion-panel.js';
import { css } from "lit";
const style = css `:host{--accordion__bordered--Color:var(--rh-color-black-300, #d2d2d2);color:var(--pf-global--Color--100,#151515);background-color:var(--pf-global--BackgroundColor--100,#fff)}:host([bordered]) ::slotted(pf-accordion-header:first-child),:host([large]) ::slotted(pf-accordion-header:first-child){display:block;border-top:1px solid var(--accordion__bordered--Color);border-bottom:1px solid var(--accordion__bordered--Color)}:host([bordered]) ::slotted(pf-accordion-header:not(:first-child)),:host([large]) ::slotted(pf-accordion-header:not(:first-child)){display:block;border-bottom:1px solid var(--accordion__bordered--Color)}:host([bordered]) ::slotted(pf-accordion-header:is([expanded])),:host([large]) ::slotted(pf-accordion-header:is([expanded])){display:block;border-bottom:0}:host([bordered]) ::slotted(pf-accordion-panel:is([expanded])),:host([large]) ::slotted(pf-accordion-panel:is([expanded])){display:block;border-bottom:1px solid var(--accordion__bordered--Color)}`;
/**
 * An **accordion** is an interactive container that expands and collapses to hide or reveal nested content. It takes advantage of progressive disclosure to help reduce page scrolling, by allowing users to choose whether they want to show or hide more detailed information as needed.
 *
 * @summary Toggle the visibility of sections of content
 *
 * @fires {AccordionExpandEvent} expand - when a panel expands
 * @fires {AccordionCollapseEvent} collapse - when a panel collapses
 *
 *
 * @slot
 *       Place the `pf-accordion-header` and `pf-accordion-panel` elements here.
 *
 * @cssproperty {<color>} --accordion__bordered--Color
 *              Color for the borders between accordion headers when using bordered or large attributes
 *              {@default `var(--rh-color-black-300, #d2d2d2)`}
 */
let PfAccordion = class PfAccordion extends BaseAccordion {
    constructor() {
        super(...arguments);
        /** When true, only one accordion panel may be expanded at a time */
        this.single = false;
        /** Whether to apply the `bordered` style variant */
        this.bordered = false;
        /** Whether to apply the `large` style variant */
        this.large = false;
        this.fixed = false;
    }
    async firstUpdated() {
        let index = null;
        if (this.single) {
            const allHeaders = [...this.querySelectorAll('pf-accordion-header')];
            const lastExpanded = allHeaders.filter(x => x.hasAttribute('expanded')).pop();
            if (lastExpanded) {
                index = allHeaders.indexOf(lastExpanded);
            }
        }
        await super.firstUpdated();
        if (index !== null) {
            this.headers.forEach((_, i) => {
                this.headers.at(i)?.toggleAttribute('expanded', i === index);
                this.panels.at(i)?.toggleAttribute('expanded', i === index);
            });
        }
    }
    async expand(index, parentAccordion) {
        if (index === -1) {
            return;
        }
        const allHeaders = this.headers;
        // Get all the headers and capture the item by index value
        if (this.single) {
            await Promise.all([
                ...allHeaders.map((header, index) => header.expanded && this.collapse(index)),
            ]);
        }
        await super.expand(index, parentAccordion);
    }
};
PfAccordion.styles = [...BaseAccordion.styles, style];
__decorate([
    property({ reflect: true, type: Boolean })
], PfAccordion.prototype, "single", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfAccordion.prototype, "bordered", void 0);
__decorate([
    observed(function largeChanged() {
        [...this.headers, ...this.panels].forEach(el => el.toggleAttribute('large', this.large));
    }),
    property({ type: Boolean, reflect: true })
], PfAccordion.prototype, "large", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfAccordion.prototype, "fixed", void 0);
PfAccordion = __decorate([
    customElement('pf-accordion')
], PfAccordion);
export { PfAccordion };
//# sourceMappingURL=pf-accordion.js.map