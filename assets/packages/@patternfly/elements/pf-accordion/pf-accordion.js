import { __decorate } from "tslib";
import { observed } from '@patternfly/pfe-core/decorators.js';
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { BaseAccordion } from './BaseAccordion.js';
import { BaseAccordionHeader } from './BaseAccordionHeader.js';
export * from './pf-accordion-header.js';
export * from './pf-accordion-panel.js';
import { css } from "lit";
const style = css `:host {\n\t--pf-c-accordion--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);\n\t--pf-c-accordion__toggle--PaddingTop: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-accordion__toggle--PaddingRight: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-accordion__toggle--PaddingBottom: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-accordion__toggle--PaddingLeft: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-accordion__toggle--before--BackgroundColor: transparent;\n\t--pf-c-accordion__toggle--before--Top: 0;\n\t--pf-c-accordion__toggle--hover--BackgroundColor: var(--pf-global--BackgroundColor--200, #f0f0f0);\n\t--pf-c-accordion__toggle--focus--BackgroundColor: var(--pf-global--BackgroundColor--200, #f0f0f0);\n\t--pf-c-accordion__toggle--active--BackgroundColor: var(--pf-global--BackgroundColor--200, #f0f0f0);\n\t--pf-c-accordion__toggle--before--Width: var(--pf-global--BorderWidth--lg, 3px);\n\t--pf-c-accordion__toggle--m-expanded--before--BackgroundColor: var(--pf-global--primary-color--100, #06c);\n\t--pf-c-accordion__toggle-text--MaxWidth: calc(100% - var(--pf-global--spacer--lg, 1.5rem));\n\t--pf-c-accordion__toggle--hover__toggle-text--Color: var(--pf-global--link--Color, #06c);\n\t--pf-c-accordion__toggle--active__toggle-text--Color: var(--pf-global--link--Color, #06c);\n\t--pf-c-accordion__toggle--active__toggle-text--FontWeight: var(--pf-global--FontWeight--semi-bold, 700);\n\t--pf-c-accordion__toggle--focus__toggle-text--Color: var(--pf-global--link--Color, #06c);\n\t--pf-c-accordion__toggle--focus__toggle-text--FontWeight: var(--pf-global--FontWeight--semi-bold, 700);\n\t--pf-c-accordion__toggle--m-expanded__toggle-text--Color: var(--pf-global--link--Color, #06c);\n\t--pf-c-accordion__toggle--m-expanded__toggle-text--FontWeight: var(--pf-global--FontWeight--semi-bold, 700);\n\t--pf-c-accordion__toggle-icon--Transition: .2s ease-in 0s;\n\t--pf-c-accordion__toggle--m-expanded__toggle-icon--Rotate: 90deg;\n\t--pf-c-accordion__expanded-content--Color: var(--pf-global--Color--200, #6a6e73);\n\t--pf-c-accordion__expanded-content--FontSize: var(--pf-global--FontSize--sm, 0.875rem);\n\t--pf-c-accordion__expanded-content--m-expanded__expanded-content-body--before--BackgroundColor: var(--pf-global--primary-color--100, #06c);\n\t--pf-c-accordion__expanded-content--m-fixed--MaxHeight: 9.375rem;\n\t--pf-c-accordion__expanded-content-body--PaddingTop: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-accordion__expanded-content-body--PaddingRight: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-accordion__expanded-content-body--PaddingBottom: var(--pf-global--spacer--sm, 0.5rem);\n\t--pf-c-accordion__expanded-content-body--PaddingLeft: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-accordion__expanded-content-body--expanded-content-body--PaddingTop: 0;\n\t--pf-c-accordion__expanded-content-body--before--BackgroundColor: transparent;\n\t--pf-c-accordion__expanded-content-body--before--Width: var(--pf-global--BorderWidth--lg, 3px);\n\t--pf-c-accordion__expanded-content-body--before--Top: 0;\n\t--pf-c-accordion--m-display-lg__toggle--PaddingTop: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-accordion--m-display-lg__toggle--PaddingRight: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-accordion--m-display-lg__toggle--PaddingBottom: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-accordion--m-display-lg__toggle--PaddingLeft: var(--pf-global--spacer--lg, 1.5rem);\n\t--pf-c-accordion--m-display-lg__toggle--FontFamily: var(--pf-global--FontFamily--heading--sans-serif, "RedHatDisplay", "Overpass", overpass, helvetica, arial, sans-serif);\n\t--pf-c-accordion--m-display-lg__toggle--FontSize: var(--pf-global--FontSize--xl, 1.25rem);\n\t--pf-c-accordion--m-display-lg__toggle--hover__toggle-text--Color: var(--pf-global--Color--100, #151515);\n\t--pf-c-accordion--m-display-lg__toggle--active__toggle-text--Color: var(--pf-global--Color--100, #151515);\n\t--pf-c-accordion--m-display-lg__toggle--active__toggle-text--FontWeight: var(--pf-global--FontWeight--normal, 400);\n\t--pf-c-accordion--m-display-lg__toggle--focus__toggle-text--Color: var(--pf-global--Color--100, #151515);\n\t--pf-c-accordion--m-display-lg__toggle--focus__toggle-text--FontWeight: var(--pf-global--FontWeight--normal, 400);\n\t--pf-c-accordion--m-display-lg__toggle--m-expanded__toggle-text--Color: var(--pf-global--Color--100, #151515);\n\t--pf-c-accordion--m-display-lg__toggle--m-expanded__toggle-text--FontWeight: var(--pf-global--FontWeight--normal, 400);\n\t--pf-c-accordion--m-display-lg__expanded-content--FontSize: var(--pf-global--FontSize--md, 1rem);\n\t--pf-c-accordion--m-display-lg__expanded-content--Color: var(--pf-global--Color--100, #151515);\n\t--pf-c-accordion--m-display-lg__expanded-content-body--PaddingTop: 0;\n\t--pf-c-accordion--m-display-lg__expanded-content-body--PaddingRight: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-accordion--m-display-lg__expanded-content-body--PaddingBottom: var(--pf-global--spacer--md, 1rem);\n\t--pf-c-accordion--m-display-lg__expanded-content-body--last-child--PaddingBottom: var(--pf-global--spacer--lg, 1.5rem);\n\t--pf-c-accordion--m-display-lg__expanded-content-body--PaddingLeft: var(--pf-global--spacer--lg, 1.5rem);\n\t--pf-c-accordion--m-bordered--BorderTopWidth: var(--pf-global--BorderWidth--sm, 1px);\n\t--pf-c-accordion--m-bordered--BorderTopColor: var(--pf-global--BorderColor--100, #d2d2d2);\n\t--pf-c-accordion--m-bordered__toggle--before--Top: calc(-1 * var(--pf-global--BorderWidth--sm, 1px));\n\t--pf-c-accordion--m-bordered__toggle--after--BorderColor: var(--pf-global--BorderColor--100, #d2d2d2);\n\t--pf-c-accordion--m-bordered__toggle--after--BorderTopWidth: 0;\n\t--pf-c-accordion--m-bordered__toggle--after--BorderBottomWidth: var(--pf-global--BorderWidth--sm, 1px);\n\t--pf-c-accordion--m-bordered__expanded-content--m-expanded__expanded-content-body--last-child--after--BorderBottomWidth: var(--pf-global--BorderWidth--sm, 1px);\n\t--pf-c-accordion--m-bordered__expanded-content--m-expanded__expanded-content-body--last-child--after--BorderBottomColor: var(--pf-global--BorderColor--100, #d2d2d2);\n\tcolor: var(--pf-global--Color--100, #151515);\n\tbackground-color: var(--pf-c-accordion--BackgroundColor);\n}\n\n:host([bordered]) ::slotted(pf-accordion-header:first-child),\n:host([large]) ::slotted(pf-accordion-header:first-child) {\n  display: block;\n  border-top: 1px solid var(--accordion__bordered--Color);\n  border-bottom: 1px solid var(--accordion__bordered--Color);\n}\n\n:host([bordered]) ::slotted(pf-accordion-header:not(:first-child)),\n:host([large]) ::slotted(pf-accordion-header:not(:first-child)) {\n  display: block;\n  border-bottom: 1px solid var(--accordion__bordered--Color);\n}\n\n:host([bordered]) ::slotted(pf-accordion-header:is([expanded])),\n:host([large]) ::slotted(pf-accordion-header:is([expanded])) {\n  display: block;\n  border-bottom: 0;\n}\n\n:host([bordered]) ::slotted(pf-accordion-panel:is([expanded])),\n:host([large]) ::slotted(pf-accordion-panel:is([expanded])) {\n  display: block;\n  border-bottom: 1px solid var(--accordion__bordered--Color);\n}\n`;
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
 * @cssprop --pf-c-accordion--BackgroundColor {@default var(--pf-global--BackgroundColor--100, #fff)}
 * @cssprop --pf-c-accordion__toggle--PaddingTop {@default var(--pf-global--spacer--sm, 0.5rem)}
 * @cssprop --pf-c-accordion__toggle--PaddingRight {@default var(--pf-global--spacer--md, 1rem)}
 * @cssprop --pf-c-accordion__toggle--PaddingBottom {@default var(--pf-global--spacer--sm, 0.5rem)}
 * @cssprop --pf-c-accordion__toggle--PaddingLeft {@default var(--pf-global--spacer--md, 1rem)}
 * @cssprop --pf-c-accordion__toggle--before--BackgroundColor {@default transparent}
 * @cssprop --pf-c-accordion__toggle--before--Top {@default 0}
 * @cssprop --pf-c-accordion__toggle--hover--BackgroundColor {@default var(--pf-global--BackgroundColor--200, #f0f0f0)}
 * @cssprop --pf-c-accordion__toggle--focus--BackgroundColor {@default var(--pf-global--BackgroundColor--200, #f0f0f0)}
 * @cssprop --pf-c-accordion__toggle--active--BackgroundColor {@default var(--pf-global--BackgroundColor--200, #f0f0f0)}
 * @cssprop --pf-c-accordion__toggle--before--Width {@default var(--pf-global--BorderWidth--lg, 3px)}
 * @cssprop --pf-c-accordion__toggle--m-expanded--before--BackgroundColor {@default var(--pf-global--primary-color--100, #06c)}
 * @cssprop --pf-c-accordion__toggle-text--MaxWidth {@default calc(100% - var(--pf-global--spacer--lg, 1.5rem))}
 * @cssprop --pf-c-accordion__toggle--hover__toggle-text--Color {@default var(--pf-global--link--Color, #06c)}
 * @cssprop --pf-c-accordion__toggle--active__toggle-text--Color {@default var(--pf-global--link--Color, #06c)}
 * @cssprop --pf-c-accordion__toggle--active__toggle-text--FontWeight {@default var(--pf-global--FontWeight--semi-bold, 700)}
 * @cssprop --pf-c-accordion__toggle--focus__toggle-text--Color {@default var(--pf-global--link--Color, #06c)}
 * @cssprop --pf-c-accordion__toggle--focus__toggle-text--FontWeight {@default var(--pf-global--FontWeight--semi-bold, 700)}
 * @cssprop --pf-c-accordion__toggle--m-expanded__toggle-text--Color {@default var(--pf-global--link--Color, #06c)}
 * @cssprop --pf-c-accordion__toggle--m-expanded__toggle-text--FontWeight {@default var(--pf-global--FontWeight--semi-bold, 700)}
 * @cssprop --pf-c-accordion__toggle-icon--Transition {@default .2s ease-in 0s}
 * @cssprop --pf-c-accordion__toggle--m-expanded__toggle-icon--Rotate {@default 90deg}
 * @cssprop --pf-c-accordion__expanded-content--Color {@default var(--pf-global--Color--200, #6a6e73)}
 * @cssprop --pf-c-accordion__expanded-content--FontSize {@default var(--pf-global--FontSize--sm, 0.875rem)}
 * @cssprop --pf-c-accordion__expanded-content--m-expanded__expanded-content-body--before--BackgroundColor {@default var(--pf-global--primary-color--100, #06c)}
 * @cssprop --pf-c-accordion__expanded-content--m-fixed--MaxHeight {@default 9.375rem}
 * @cssprop --pf-c-accordion__expanded-content-body--PaddingTop {@default var(--pf-global--spacer--sm, 0.5rem)}
 * @cssprop --pf-c-accordion__expanded-content-body--PaddingRight {@default var(--pf-global--spacer--md, 1rem)}
 * @cssprop --pf-c-accordion__expanded-content-body--PaddingBottom {@default var(--pf-global--spacer--sm, 0.5rem)}
 * @cssprop --pf-c-accordion__expanded-content-body--PaddingLeft {@default var(--pf-global--spacer--md, 1rem)}
 * @cssprop --pf-c-accordion__expanded-content-body--expanded-content-body--PaddingTop {@default 0}
 * @cssprop --pf-c-accordion__expanded-content-body--before--BackgroundColor {@default transparent}
 * @cssprop --pf-c-accordion__expanded-content-body--before--Width {@default var(--pf-global--BorderWidth--lg, 3px)}
 * @cssprop --pf-c-accordion__expanded-content-body--before--Top {@default 0}
 * @cssprop --pf-c-accordion--m-display-lg__toggle--PaddingTop {@default var(--pf-global--spacer--md, 1rem)}
 * @cssprop --pf-c-accordion--m-display-lg__toggle--PaddingRight {@default var(--pf-global--spacer--md, 1rem)}
 * @cssprop --pf-c-accordion--m-display-lg__toggle--PaddingBottom {@default var(--pf-global--spacer--md, 1rem)}
 * @cssprop --pf-c-accordion--m-display-lg__toggle--PaddingLeft {@default var(--pf-global--spacer--lg, 1.5rem)}
 * @cssprop --pf-c-accordion--m-display-lg__toggle--FontFamily {@default var(--pf-global--FontFamily--heading--sans-serif, "RedHatDisplay", "Overpass", overpass, helvetica, arial, sans-serif)}
 * @cssprop --pf-c-accordion--m-display-lg__toggle--FontSize {@default var(--pf-global--FontSize--xl, 1.25rem)}
 * @cssprop --pf-c-accordion--m-display-lg__toggle--hover__toggle-text--Color {@default var(--pf-global--Color--100, #151515)}
 * @cssprop --pf-c-accordion--m-display-lg__toggle--active__toggle-text--Color {@default var(--pf-global--Color--100, #151515)}
 * @cssprop --pf-c-accordion--m-display-lg__toggle--active__toggle-text--FontWeight {@default var(--pf-global--FontWeight--normal, 400)}
 * @cssprop --pf-c-accordion--m-display-lg__toggle--focus__toggle-text--Color {@default var(--pf-global--Color--100, #151515)}
 * @cssprop --pf-c-accordion--m-display-lg__toggle--focus__toggle-text--FontWeight {@default var(--pf-global--FontWeight--normal, 400)}
 * @cssprop --pf-c-accordion--m-display-lg__toggle--m-expanded__toggle-text--Color {@default var(--pf-global--Color--100, #151515)}
 * @cssprop --pf-c-accordion--m-display-lg__toggle--m-expanded__toggle-text--FontWeight {@default var(--pf-global--FontWeight--normal, 400)}
 * @cssprop --pf-c-accordion--m-display-lg__expanded-content--FontSize {@default var(--pf-global--FontSize--md, 1rem)}
 * @cssprop --pf-c-accordion--m-display-lg__expanded-content--Color {@default var(--pf-global--Color--100, #151515)}
 * @cssprop --pf-c-accordion--m-display-lg__expanded-content-body--PaddingTop {@default 0}
 * @cssprop --pf-c-accordion--m-display-lg__expanded-content-body--PaddingRight {@default var(--pf-global--spacer--md, 1rem)}
 * @cssprop --pf-c-accordion--m-display-lg__expanded-content-body--PaddingBottom {@default var(--pf-global--spacer--md, 1rem)}
 * @cssprop --pf-c-accordion--m-display-lg__expanded-content-body--last-child--PaddingBottom {@default var(--pf-global--spacer--lg, 1.5rem)}
 * @cssprop --pf-c-accordion--m-display-lg__expanded-content-body--PaddingLeft {@default var(--pf-global--spacer--lg, 1.5rem)}
 * @cssprop --pf-c-accordion--m-bordered--BorderTopWidth {@default var(--pf-global--BorderWidth--sm, 1px)}
 * @cssprop --pf-c-accordion--m-bordered--BorderTopColor {@default var(--pf-global--BorderColor--100, #d2d2d2)}
 * @cssprop --pf-c-accordion--m-bordered__toggle--before--Top {@default calc(-1 * var(--pf-global--BorderWidth--sm, 1px))}
 * @cssprop --pf-c-accordion--m-bordered__toggle--after--BorderColor {@default var(--pf-global--BorderColor--100, #d2d2d2)}
 * @cssprop --pf-c-accordion--m-bordered__toggle--after--BorderTopWidth {@default 0}
 * @cssprop --pf-c-accordion--m-bordered__toggle--after--BorderBottomWidth {@default var(--pf-global--BorderWidth--sm, 1px)}
 * @cssprop --pf-c-accordion--m-bordered__expanded-content--m-expanded__expanded-content-body--last-child--after--BorderBottomWidth {@default var(--pf-global--BorderWidth--sm, 1px)}
 * @cssprop --pf-c-accordion--m-bordered__expanded-content--m-expanded__expanded-content-body--last-child--after--BorderBottomColor {@default var(--pf-global--BorderColor--100, #d2d2d2)}
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
PfAccordion.styles = [style];
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