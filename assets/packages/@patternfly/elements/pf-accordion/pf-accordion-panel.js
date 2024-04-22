import { __decorate } from "tslib";
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { BaseAccordionPanel } from './BaseAccordionPanel.js';
import { css } from "lit";
const style = css `:host {\n  color: var(--pf-global--Color--100, #151515);\n  background-color:\n    var(\n      --pf-c-accordion--BackgroundColor,\n      var(--pf-global--BackgroundColor--light-100, #ffffff)\n    );\n}\n\n.body {\n  padding:\n    var(--pf-c-accordion__panel-body--PaddingTop, var(--pf-global--spacer--sm, 0.5rem))\n    var(--pf-c-accordion__panel-body--PaddingRight, var(--pf-global--spacer--md, 1rem))\n    var(--pf-c-accordion__panel-body--PaddingBottom, var(--pf-global--spacer--sm, 0.5rem))\n    var(--pf-c-accordion__panel-body--PaddingLeft, var(--pf-global--spacer--md, 1rem));\n}\n\n.body:after {\n  width: var(--pf-c-accordion__panel-body--before--Width, var(--pf-global--BorderWidth--lg, 3px));\n  background-color: var(--pf-c-accordion__panel-body--before--BackgroundColor, transparent);\n}\n\n:host([large]) {\n  --pf-c-accordion__panel-body--PaddingTop:\n    var(--pf-c-accordion--m-display-lg__expanded-content-body--PaddingTop, 0);\n  --pf-c-accordion__panel-body--PaddingRight:\n    var(--pf-c-accordion--m-display-lg__expanded-content-body--PaddingRight, 1rem);\n  --pf-c-accordion__panel-body--PaddingBottom:\n    var(--pf-c-accordion--m-display-lg__expanded-content-body--PaddingBottom, 1.5rem);\n  --pf-c-accordion__panel-body--PaddingLeft:\n    var(--pf-c-accordion--m-display-lg__expanded-content-body--PaddingLeft, 1.5rem);\n  --pf-c-accordion__panel--FontSize:\n    var(--pf-c-accordion--m-display-lg__expanded-content--FontSize, 1rem);\n  --pf-c-accordion__panel--Color:\n    var(--pf-c-accordion--m-display-lg__expanded-content--Color, #151515);\n}\n\n:host([large]) .body:last-child {\n  --pf-c-accordion__panel-body--PaddingBottom:\n    var(--pf-c-accordion--m-display-lg__expanded-content-body--last-child--PaddingBottom, 1.5rem);\n}\n\n.content {\n  color: var(--pf-c-accordion__panel--Color, var(--pf-global--Color--dark-200, #6a6e73));\n  font-size: var(--pf-c-accordion__panel--FontSize, var(--pf-global--FontSize--sm, 0.875rem));\n}\n\n:host([fixed]) {\n  max-height: var(--pf-c-accordion__panel--m-fixed--MaxHeight, 9.375rem);\n}\n\n.content[expanded],\n:host([expanded]) .content {\n  --pf-c-accordion__panel-body--before--BackgroundColor:\n    var(\n      --pf-c-accordion__panel--content-body--before--BackgroundColor,\n      var(--pf-global--primary-color--100, #0066cc));\n}\n`;
/**
 * Accordion Panel
 *
 * @slot - Panel content
 * @cssprop     {<color>} --pf-c-accordion--BackgroundColor
 *              Sets the background color for the panel content.
 *              {@default `var(--pf-global--BackgroundColor--light-100, #ffffff)`}
 * @cssprop     {<color>} --pf-c-accordion__panel--Color
 *              Sets the font color for the panel content.
 *              {@default `var(--pf-global--Color--dark-200, #6a6e73)`}
 * @cssprop     {<length>} --pf-c-accordion__panel--FontSize
 *              Sets the font size for the panel content.
 *              {@default `var(--pf-global--FontSize--sm, 0.875rem)`}
 * @cssprop     {<color>} --pf-c-accordion__panel--content-body--before--BackgroundColor
 *              Sets the sidebar color for the panel when the context is expanded.
 *              {@default `var(--pf-global--primary-color--100, #0066cc)`}
 * @cssprop     {<length>} --pf-c-accordion__panel--m-fixed--MaxHeight
 *              Sets the maximum height for the panel content.
 *              Will only be used if the `fixed` attribute is used.
 *              {@default `9.375rem`}
 * @cssprop     {<length>} --pf-c-accordion__panel-body--PaddingTop
 *              Sets the padding top for the panel content.
 *              {@default `var(--pf-global--spacer--sm, 0.5rem)`}
 * @cssprop     {<length>} --pf-c-accordion__panel-body--PaddingRight
 *              Sets the padding right for the panel content.
 *              {@default `var(--pf-global--spacer--md, 1rem)`}
 * @cssprop     {<length>} --pf-c-accordion__panel-body--PaddingBottom
 *              Sets the padding bottom for the panel content.
 *              {@default `var(--pf-global--spacer--sm, 0.5rem)`}
 * @cssprop     {<length>} --pf-c-accordion__panel-body--PaddingLeft
 *              Sets the padding left for the panel content.
 *              {@default `var(--pf-global--spacer--md, 1rem)`}
 * @cssprop     {<color>} --pf-c-accordion__panel-body--before--BackgroundColor
 *              Sets the background color for the panel content.
 *              {@default `transparent`}
 * @cssprop     --pf-c-accordion__panel-body--before--Width
 *              Sets the before width for the panel content.
 *              {@default `var(--pf-global--BorderWidth--lg, 3px)`}
 */
let PfAccordionPanel = class PfAccordionPanel extends BaseAccordionPanel {
};
PfAccordionPanel.styles = [...BaseAccordionPanel.styles, style];
__decorate([
    property({ reflect: true })
], PfAccordionPanel.prototype, "bordered", void 0);
PfAccordionPanel = __decorate([
    customElement('pf-accordion-panel')
], PfAccordionPanel);
export { PfAccordionPanel };
//# sourceMappingURL=pf-accordion-panel.js.map