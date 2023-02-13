import { __decorate } from "tslib";
import { customElement, property } from 'lit/decorators.js';
import { BaseAccordionPanel } from './BaseAccordionPanel.js';
import { css } from "lit";
const style = css `:host{color:var(--pf-global--Color--100,#151515);background-color:var(--pf-c-accordion--BackgroundColor,var(--pf-global--BackgroundColor--light-100,#fff))}.body{padding:var(--pf-c-accordion__panel-body--PaddingTop,var(--pf-global--spacer--sm,.5rem)) var(--pf-c-accordion__panel-body--PaddingRight,var(--pf-global--spacer--md,1rem)) var(--pf-c-accordion__panel-body--PaddingBottom,var(--pf-global--spacer--sm,.5rem)) var(--pf-c-accordion__panel-body--PaddingLeft,var(--pf-global--spacer--md,1rem))}.body:after{width:var(--pf-c-accordion__panel-body--before--Width,var(--pf-global--BorderWidth--lg,3px));background-color:var(--pf-c-accordion__panel-body--before--BackgroundColor,transparent)}:host([large]){--pf-c-accordion__panel-body--PaddingTop:var(--pf-c-accordion--m-display-lg__expanded-content-body--PaddingTop, 0);--pf-c-accordion__panel-body--PaddingRight:var(--pf-c-accordion--m-display-lg__expanded-content-body--PaddingRight, 1rem);--pf-c-accordion__panel-body--PaddingBottom:var(--pf-c-accordion--m-display-lg__expanded-content-body--PaddingBottom, 1.5rem);--pf-c-accordion__panel-body--PaddingLeft:var(--pf-c-accordion--m-display-lg__expanded-content-body--PaddingLeft, 1.5rem);--pf-c-accordion__panel--FontSize:var(--pf-c-accordion--m-display-lg__expanded-content--FontSize, 1rem);--pf-c-accordion__panel--Color:var(--pf-c-accordion--m-display-lg__expanded-content--Color, #151515)}:host([large]) .body:last-child{--pf-c-accordion__panel-body--PaddingBottom:var(--pf-c-accordion--m-display-lg__expanded-content-body--last-child--PaddingBottom, 1.5rem)}.content{color:var(--pf-c-accordion__panel--Color,var(--pf-global--Color--dark-200,#6a6e73));font-size:var(--pf-c-accordion__panel--FontSize, var(--pf-global--FontSize--sm, .875rem))}:host([fixed]){max-height:var(--pf-c-accordion__panel--m-fixed--MaxHeight,9.375rem)}.content[expanded],:host([expanded]) .content{--pf-c-accordion__panel-body--before--BackgroundColor:var(\n      --pf-c-accordion__panel--content-body--before--BackgroundColor,\n      var(--pf-global--primary-color--100, #0066cc))}`;
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