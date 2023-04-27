import { __decorate } from "tslib";
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { BaseTooltip } from './BaseTooltip.js';
import { css } from "lit";
const styles = css `:host{--_timestamp-text-decoration:underline dashed 1px;--_timestamp-text-underline-offset:4px}#tooltip{--_timestamp-text-decoration:none;--_timestamp-text-underline-offset:initial;line-height:var(--pf-c-tooltip--line-height, 1.5);max-width:var(--pf-c-tooltip--MaxWidth,18.75rem);box-shadow:var(--pf-c-tooltip--BoxShadow,var(--pf-global--BoxShadow--md,0 .25rem .5rem 0 rgba(3,3,3,.12),0 0 .25rem 0 rgba(3,3,3,.06)));padding:var(--pf-c-tooltip__content--PaddingTop,var(--pf-global--spacer--sm,.5rem)) var(--pf-c-tooltip__content--PaddingRight,var(--pf-global--spacer--sm,.5rem)) var(--pf-c-tooltip__content--PaddingBottom,var(--pf-global--spacer--sm,.5rem)) var(--pf-c-tooltip__content--PaddingLeft,var(--pf-global--spacer--sm,.5rem));font-size:var(--pf-c-tooltip__content--FontSize,\n    var(--pf-global--FontSize--sm, .875rem));color:var(--pf-c-tooltip__content--Color,var(--pf-global--Color--light-100,#fff));background-color:var(--pf-c-tooltip__content--BackgroundColor,var(--pf-global--BackgroundColor--dark-100,#151515))}#container{--_floating-arrow-size:var(--pf-c-tooltip__arrow--Width, 0.5rem)}#tooltip::after{background-color:var(--pf-c-tooltip__content--BackgroundColor,var(--pf-global--BackgroundColor--dark-100,#151515))}`;
/**
 * A **tooltip** is in-app messaging used to identify elements on a page with short,
 * clarifying text.
 *
 * @summary Toggle the visibility of helpful or contextual information.
 *
 * @slot
 *       This slot wraps around the element that should be used to invoke the tooltip content to display.
 *       Typically this would be an icon, button, or other small sized element.
 * @slot content
 *       This slot renders the content that will be displayed inside of the tooltip.
 *       Typically this would include a string of text without any additional elements.
 *       This element is wrapped with a div inside of the component to give it the stylings and background colors.
 *
 * @cssprop     {<color>} --pf-c-tooltip__content--BackgroundColor
 *              Sets the background color for the tooltip content.
 *              {@default `#1b1d21`}
 * @cssprop     {<color>} --pf-c-tooltip__content--Color
 *              Sets the font color for the tooltip content.
 *              {@default `#e0e0e0`}
 * @cssprop     {<number>} --pf-c-tooltip--line-height
 *              Sets the font color for the tooltip content.
 *              {@default `1.5`}
 * @cssprop     {<length>} --pf-c-tooltip--MaxWidth
 *              Maximum width for the tooltip.
 *              {@default `18.75rem`}
 * @cssprop     --pf-c-tooltip--BoxShadow
 *              Box shadow for the tooltip.
 *              {@default `0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06)`}
 * @cssprop     {<length>} --pf-c-tooltip__content--PaddingTop
 *              Top padding for the tooltip.
 *              {@default `0.5rem`}
 * @cssprop     {<length>} --pf-c-tooltip__content--PaddingRight
 *              Right padding for the tooltip.
 *              {@default `0.5rem`}
 * @cssprop     {<length>} --pf-c-tooltip__content--PaddingBottom
 *              Bottom padding for the tooltip.
 *              {@default `0.5rem`}
 * @cssprop     {<length>} --pf-c-tooltip__content--PaddingLeft
 *              Left Padding for the tooltip.
 *              {@default `0.5rem`}
 * @cssprop     --pf-c-tooltip__content--FontSize
 *              Font size for the tooltip content.
 *              {@default `0.875rem`}
 * @cssprop     {<length>} --pf-c-tooltip__arrow--Width
 *              Tooltip arrow width.
 *              {@default `0.5rem`}
 * @cssprop     {<length>} --pf-c-tooltip__arrow--Height
 *              Tooltip arrow height.
 *              {@default `0.5rem`}
 * @cssprop     --pf-c-tooltip__arrow--m-top--TranslateX
 *              Positions the tooltip arrow along the x axis for `top` positioned arrows.
 *              {@default `-50%`}
 * @cssprop     --pf-c-tooltip__arrow--m-top--TranslateY
 *              Positions the tooltip arrow along the y axis for `top` positioned arrows.
 *              {@default `50%`}
 * @cssprop     --pf-c-tooltip__arrow--m-top--Rotate
 *              Rotates the tooltip arrow based on degrees of movement for `top` positioned arrows.
 *              {@default `45deg`}
 * @cssprop     --pf-c-tooltip__arrow--m-right--TranslateX
 *              Positions the tooltip arrow along the x axis for `right` positioned arrows.
 *              {@default `-50%`}
 * @cssprop     --pf-c-tooltip__arrow--m-right--TranslateY
 *              Positions the tooltip arrow along the y axis for `right` positioned arrows.
 *              {@default `-50%`}
 * @cssprop     --pf-c-tooltip__arrow--m-right--Rotate
 *              Rotates the tooltip arrow based on degrees of movement for `right` positioned arrows.
 *              {@default `45deg`}
 * @cssprop     --pf-c-tooltip__arrow--m-bottom--TranslateX
 *              Positions the tooltip arrow along the x axis for `bottom` positioned arrows.
 *              {@default `-50%`}
 * @cssprop     --pf-c-tooltip__arrow--m-bottom--TranslateY
 *              Positions the tooltip arrow along the y axis for `bottom` positioned arrows.
 *              {@default `-50%`}
 * @cssprop     --pf-c-tooltip__arrow--m-bottom--Rotate
 *              Rotates the tooltip arrow based on degrees of movement for `bottom` positioned arrows.
 *              {@default `45deg`}
 * @cssprop     --pf-c-tooltip__arrow--m-left--TranslateX
 *              Positions the tooltip arrow along the x axis for `left` positioned arrows.
 *              {@default `50%`}
 * @cssprop     --pf-c-tooltip__arrow--m-left--TranslateY
 *              Positions the tooltip arrow along the y axis for `left` positioned arrows.
 *              {@default `-50%`}
 * @cssprop     --pf-c-tooltip__arrow--m-left--Rotate
 *              Rotates the tooltip arrow based on degrees of movement for `left` positioned arrows.
 *              {@default `45deg`}
 */
let PfTooltip = class PfTooltip extends BaseTooltip {
    constructor() {
        super(...arguments);
        this.position = 'top';
    }
};
PfTooltip.styles = [...BaseTooltip.styles, styles];
__decorate([
    property()
], PfTooltip.prototype, "position", void 0);
__decorate([
    property()
], PfTooltip.prototype, "content", void 0);
PfTooltip = __decorate([
    customElement('pf-tooltip')
], PfTooltip);
export { PfTooltip };
//# sourceMappingURL=pf-tooltip.js.map