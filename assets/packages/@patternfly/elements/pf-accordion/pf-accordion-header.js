var _PfAccordionHeader_slots;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { BaseAccordionHeader } from './BaseAccordionHeader.js';
import { css } from "lit";
const style = css `:host {\n  --pf-icon--size: var(--pf-c-accordion__toggle--IconSize, 10px);\n\n  color: var(--pf-c-accordion__toggle--Color, var(--pf-global--Color--100, #151515));\n  background-color: var(--pf-global--BackgroundColor--100, #ffffff);\n}\n\n:host([large]) {\n  --pf-c-accordion__toggle--PaddingTop: var(--pf-global--spacer--md, 1rem);\n  --pf-c-accordion__toggle--PaddingRight: var(--pf-global--spacer--md, 1rem);\n  --pf-c-accordion__toggle--PaddingBottom: var(--pf-global--spacer--md, 1rem);\n  --pf-c-accordion__toggle--PaddingLeft: var(--pf-global--spacer--lg, 1.5rem);\n  --pf-c-accordion__toggle--FontFamily:\n    var(--pf-global--FontFamily--redhat-updated--heading--sans-serif,\n      "RedHatDisplayUpdated",\n      "Overpass",\n      overpass,\n      helvetica,\n      arial,\n      sans-serif\n    );\n  --pf-c-accordion__toggle--FontSize: var(--pf-global--FontSize--xl, 1.25rem);\n  --pf-c-accordion__toggle--hover-text--Color: var(--pf-global--Color--100, #151515);\n  --pf-c-accordion__toggle--active-text--Color: var(--pf-global--Color--100, #151515);\n  --pf-c-accordion__toggle--active-text--FontWeight: var(--pf-global--FontWeight--normal, 400);\n  --pf-c-accordion__toggle--focus-text--Color: var(--pf-global--Color--100, #151515);\n  --pf-c-accordion__toggle--focus-text--FontWeight: var(--pf-global--FontWeight--normal, 400);\n  --pf-c-accordion__toggle--expanded-text--Color: var(--pf-global--Color--100, #151515);\n  --pf-c-accordion__toggle--expanded-text--FontWeight: var(--pf-global--FontWeight--normal, 400);\n  --pf-icon--size: var(--pf-c-accordion__toggle--IconSize, 12px);\n}\n\n#heading {\n  font-weight: var(--pf-c-accordion__toggle--FontWeight, var(--pf-global--FontWeight--normal, 400));\n}\n\n.toggle,\n.toggle:before,\n.toggle:after {\n  background-color: var(--pf-c-accordion__toggle--BackgroundColor, transparent);\n}\n\n.icon {\n  transition: var(--pf-c-accordion__toggle-icon--Transition, 0.2s ease-in 0s);\n}\n\n.toggle {\n  padding:\n    var(--pf-c-accordion__toggle--PaddingTop, var(--pf-global--spacer--md, 0.5rem))\n    var(--pf-c-accordion__toggle--PaddingRight, var(--pf-global--spacer--md, 1rem))\n    var(--pf-c-accordion__toggle--PaddingBottom, var(--pf-global--spacer--sm, 0.5rem))\n    var(--pf-c-accordion__toggle--PaddingLeft, var(--pf-global--spacer--md, 1rem));\n  font-family:\n    var(--pf-c-accordion__toggle--FontFamily,\n      var(--pf-global--FontFamily--redhat-updated--heading--sans-serif,\n        "RedHatTextUpdated",\n        helvetica,\n        arial,\n        sans-serif));\n  font-size: var(--pf-c-accordion__toggle--FontSize, var(--pf-global--FontSize--lg, 1rem));\n  font-weight: var(--pf-c-accordion__toggle--FontWeight, var(--pf-global--FontWeight--normal, 400));\n  color: var(--pf-c-accordion__toggle--Color, var(--pf-global--Color--100, #151515));\n}\n\n.toggle[aria-expanded="true"] {\n  --pf-c-accordion__toggle--after--BackgroundColor:\n    var(\n      --pf-c-accordion__toggle--expanded--before--BackgroundColor,\n      var(\n        --pf-global--primary-color--100,\n        #0066cc\n      )\n    );\n}\n\n.toggle:after {\n  top: var(--pf-c-accordion__toggle--before--Top, -1px);\n  width: var(--pf-c-accordion__toggle--before--Width, var(--pf-global--BorderWidth--lg, 3px));\n  background-color: var(--pf-c-accordion__toggle--after--BackgroundColor, transparent);\n}\n\nspan {\n  max-width: var(--pf-c-accordion__toggle-text--MaxWidth,\n    calc(100% - var(--pf-global--spacer--lg, 1.5rem)));\n}\n\n.toggle[aria-expanded="true"] .icon {\n  rotate: var(--pf-c-accordion__toggle--expanded-icon--Rotate, 90deg);\n}\n\n.toggle:hover,\n.toggle:active,\n.toggle:focus {\n  background-color:\n    var(--pf-c-accordion__toggle--active--BackgroundColor,\n      var(--pf-global--BackgroundColor--200, #f0f0f0));\n}\n\n.toggle:hover span,\n.toggle:focus span,\n.toggle:active span {\n  color: var(--pf-c-accordion__toggle--active-text--Color, var(--pf-global--link--Color, #0066cc));\n}\n\n.toggle:focus span,\n.toggle:active span {\n  font-weight: var(--pf-c-accordion__toggle--active-text--FontWeight,\n      var(--pf-global--FontWeight--semi-bold, 700));\n}\n`;
import '@patternfly/elements/pf-icon/pf-icon.js';
/**
 * Accordion Header
 *
 * @csspart text - inline element containing the heading text or slotted heading content
 * @csspart accents - container for accents within the header
 * @csspart icon - caret icon
 *
 * @slot
 *       We expect the light DOM of the pf-accordion-header to be a heading level tag (h1, h2, h3, h4, h5, h6)
 * @slot accents
 *       These elements will appear inline with the accordion header, between the header and the chevron
 *       (or after the chevron and header in disclosure mode).
 *
 * @fires {AccordionHeaderChangeEvent} change - when the open panels change
 *
 * @cssprop     {<color>} --pf-c-accordion__toggle--Color
 *              Sets the font color for the accordion header.
 *              {@default `var(--pf-global--Color--100, #151515)`}
 * @cssprop     {<color>} --pf-c-accordion__toggle--BackgroundColor
 *              Sets the background color for the accordion header toggle element.
 *              {@default `transparent`}
 * @cssprop     {<color>} --pf-c-accordion__toggle--after--BackgroundColor
 *              Sets the background color for the after element for the accordion header toggle element.
 *              {@default `transparent`}
 * @cssprop     {<length>} --pf-c-accordion__toggle--PaddingTop
 *              Sets the top padding for the accordion header.
 *              {@default `var(--pf-global--spacer--sm, 0.5rem)`}
 * @cssprop     {<length>} --pf-c-accordion__toggle--PaddingRight
 *              Sets the right padding for the accordion header.
 *              {@default `var(--pf-global--spacer--md, 1rem)`}
 * @cssprop     {<length>} --pf-c-accordion__toggle--PaddingBottom
 *              Sets the bottom padding for the accordion header.
 *              {@default `var(--pf-global--spacer--sm, 0.5rem)`}
 * @cssprop     {<length>} --pf-c-accordion__toggle--PaddingLeft
 *              Sets the left padding for the accordion header.
 *              {@default `var(--pf-global--spacer--md, 1rem)`}
 * @cssprop     {<length>} --pf-c-accordion__toggle--FontSize
 *              Sets the sidebar background color for the accordion header.
 *              {@default `var(--pf-global--FontSize--lg, 1rem)`}
 * @cssprop     {<color>} --pf-c-accordion__toggle--FontFamily
 *              Sets the font family for the accordion header.
 *              {@default `var(--pf-global--FontFamily--redhat-updated--heading--sans-serif, "RedHatDisplayUpdated", helvetica, arial, sans-serif)`}
 * @cssprop     --pf-c-accordion__toggle--FontWeight
 *              Sets the font weight for the accordion header.
 *              {@default `var(--pf-global--FontWeight--normal, 400)`}
 * @cssprop     {<color>} --pf-c-accordion__toggle--active--BackgroundColor
 *              Sets the active backgrdound color for the accordion header.
 *              {@default `var(--pf-global--BackgroundColor--200, #f0f0f0)`}
 * @cssprop     {<color>} --pf-c-accordion__toggle--active-text--Color
 *              Sets the active text color for the accordion header.
 *              {@default `var(--pf-global--link--Color, #0066cc)`}
 * @cssprop     --pf-c-accordion__toggle--active-text--FontWeight
 *              Sets the active text font weight for the accordion header.
 *              {@default `var(--pf-global--FontWeight--semi-bold, 700)`}
 * @cssprop     {<color>} --pf-c-accordion__toggle--expanded--before--BackgroundColor
 *              Sets the hover expanded before background color for the accordion header.
 *              {@default `var(--pf-global--link--Color, #0066cc)`}
 * @cssprop     --pf-c-accordion__toggle--expanded-icon--Rotate
 *              Sets the expanded icon rotation degrees for the accordion header.
 *              {@default `90deg`}
 * @cssprop     {<length>} --pf-c-accordion__toggle-text--MaxWidth
 *              Sets the max width for the text inside the accordion header.
 *              {@default `calc(100% - var(--pf-global--spacer--lg, 1.5rem))`}
 * @cssprop     --pf-c-accordion__toggle--before--Width
 *              Sets the sidebar width for the accordion header.
 *              {@default `var(--pf-global--BorderWidth--lg, 3px)`}
 * @cssprop     --pf-c-accordion__toggle-icon--Transition
 *              Sets the transition animation for the accordion header.
 *              {@default `0.2s ease-in 0s`}
 */
let PfAccordionHeader = class PfAccordionHeader extends BaseAccordionHeader {
    constructor() {
        super(...arguments);
        _PfAccordionHeader_slots.set(this, new SlotController(this, 'accents', null));
    }
    renderAfterButton() {
        return html `${!__classPrivateFieldGet(this, _PfAccordionHeader_slots, "f").hasSlotted('accents') ? '' : html `
      <span part="accents">
        <slot name="accents"></slot>
      </span>`}
      <pf-icon part="icon"
                icon="${this.icon ?? 'angle-right'}"
                set="${this.iconSet ?? 'fas'}"
                class="icon"
                size="lg"></pf-icon>
    `;
    }
};
_PfAccordionHeader_slots = new WeakMap();
PfAccordionHeader.styles = [...BaseAccordionHeader.styles, style];
__decorate([
    property({ reflect: true })
], PfAccordionHeader.prototype, "bordered", void 0);
__decorate([
    property({ reflect: true })
], PfAccordionHeader.prototype, "icon", void 0);
__decorate([
    property({ reflect: true, attribute: 'icon-set' })
], PfAccordionHeader.prototype, "iconSet", void 0);
PfAccordionHeader = __decorate([
    customElement('pf-accordion-header')
], PfAccordionHeader);
export { PfAccordionHeader };
//# sourceMappingURL=pf-accordion-header.js.map