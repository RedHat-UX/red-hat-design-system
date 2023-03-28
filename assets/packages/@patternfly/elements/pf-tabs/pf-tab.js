import { __decorate } from "tslib";
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { observed } from '@patternfly/pfe-core/decorators.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { BaseTab } from './BaseTab.js';
import { css } from "lit";
const styles = css `:host{scroll-snap-align:var(--pf-c-tabs__item--ScrollSnapAlign,end)}:host([active]){--pf-c-tabs__link--Color:var(--pf-c-tabs__item--m-current__link--Color,  var(--pf-global--Color--100, #151515));--pf-c-tabs__link--after--BorderColor:var(--pf-c-tabs__item--m-current__link--after--BorderColor, var(--pf-global--active-color--100, #06c));--pf-c-tabs__link--after--BorderWidth:var(--pf-c-tabs__item--m-current__link--after--BorderWidth, var(--pf-global--BorderWidth--lg, 3px))}:host([box][active]){--pf-c-tabs__link--BackgroundColor:var(--pf-c-tabs__item--m-current__link--BackgroundColor, var(--pf-global--BackgroundColor--100, #ffffff));--pf-c-tabs__link--before--BorderBottomColor:var(--pf-c-tabs__link--BackgroundColor, transparent)}:host(.first[box][active]) #current::before{left:calc(var(--pf-c-tabs__link--before--border-width--base,var(--pf-global--BorderWidth--sm,1px)) * -1)}button{line-height:var(--pf-global--LineHeight--md, 1.5);color:var(--pf-global--Color--100,#151515);padding:var(--pf-c-tabs__link--PaddingTop,var(--pf-global--spacer--sm,.5rem)) var(--pf-c-tabs__link--PaddingRight,var(--pf-global--spacer--md,1rem)) var(--pf-c-tabs__link--PaddingBottom,var(--pf-global--spacer--sm,.5rem)) var(--pf-c-tabs__link--PaddingLeft,var(--pf-global--spacer--md,1rem));font-size:var(--pf-c-tabs__link--FontSize, var(--pf-global--FontSize--md, 1rem));color:var(--pf-c-tabs__link--Color,var(--pf-global--Color--200,#6a6e73));outline-offset:var(--pf-c-tabs__link--OutlineOffset,calc(-1 * 0.375rem));--pf-c-tabs__link--after--BorderBottomWidth:var(--pf-c-tabs__link--after--BorderWidth, 0);background-color:var(--pf-c-tabs__link--BackgroundColor,transparent)}button::before{border-block-start-width:var(--pf-c-tabs__link--before--BorderTopWidth,0);border-inline-end-width:var(--pf-c-tabs__link--before--BorderRightWidth,0);border-block-end-width:var(--pf-c-tabs__link--before--BorderBottomWidth,0);border-inline-start-width:var(--pf-c-tabs__link--before--BorderLeftWidth,0);border-block-start-color:var(--pf-c-tabs__link--before--BorderTopColor,var(--pf-c-tabs__link--before--border-color--base,var(--pf-global--BorderColor--100,#d2d2d2)));border-inline-end-color:var(--pf-c-tabs__link--before--BorderRightColor,var(--pf-c-tabs__link--before--border-color--base,var(--pf-global--BorderColor--100,#d2d2d2)));border-block-end-color:var(--pf-c-tabs__link--before--BorderBottomColor,var(--pf-c-tabs__link--before--border-color--base,var(--pf-global--BorderColor--100,#d2d2d2)));border-inline-start-color:var(--pf-c-tabs__link--before--BorderLeftColor,var(--pf-c-tabs__link--before--border-color--base,var(--pf-global--BorderColor--100,#d2d2d2)))}button::after{top:var(--pf-c-tabs__link--after--Top,auto);right:var(--pf-c-tabs__link--after--Right,0);bottom:var(--pf-c-tabs__link--after--Bottom,0);left:var(--pf-c-tabs__link--before--Left,0);border-color:var(--pf-c-tabs__link--after--BorderColor,var(--pf-global--BorderColor--light-100,#b8bbbe));border-block-start-width:var(--pf-c-tabs__link--after--BorderTopWidth,0);border-inline-end-width:var(--pf-c-tabs__link--after--BorderRightWidth,0);border-block-end-width:var(--pf-c-tabs__link--after--BorderBottomWidth);border-inline-start-width:var(--pf-c-tabs__link--after--BorderLeftWidth)}button:hover{--pf-c-tabs__link-toggle-icon--Color:var(--pf-c-tabs__link--hover__toggle-icon--Color);--pf-c-tabs__link--after--BorderWidth:var(--pf-c-tabs__link--hover--after--BorderWidth, var(--pf-global--BorderWidth--lg, 3px))}button:focus,button:focus-visible{outline-color:var(--pf-c-tabs__link--after--BorderColor,#06c);--pf-c-tabs__link--after--BorderWidth:var(--pf-c-tabs__link--focus--after--BorderWidth, var(--pf-global--BorderWidth--lg, 3px))}button:active{--pf-c-tabs__link--after--BorderWidth:var(--pf-c-tabs__link--active--after--BorderWidth, var(--pf-global--BorderWidth--lg, 3px))}:host([box]) button{--pf-c-tabs__link--after--BorderTopWidth:var(--pf-c-tabs__link--after--BorderWidth, 0)}:host([box]) button,:host([vertical]) button{--pf-c-tabs__link--after--BorderBottomWidth:0}:host([vertical]) button{--pf-c-tabs__link--after--Bottom:0;--pf-c-tabs__link--after--BorderTopWidth:0;--pf-c-tabs__link--after--BorderLeftWidth:var(--pf-c-tabs__link--after--BorderWidth, 0);max-width:100%;text-align:left}:host([box][vertical]) button::after{top:calc(var(--pf-c-tabs__link--before--border-width--base,var(--pf-global--BorderWidth--sm,1px)) * -1)}:host(.first[box][vertical]) button::after,:host([box][vertical][active]) button::after{top:0}:host([box][vertical][active]) button::before{--pf-c-tabs__link--before--BorderRightColor:var(--pf-c-tabs__item--m-current__link--BackgroundColor, var(--pf-global--BackgroundColor--100, #ffffff));--pf-c-tabs__link--before--BorderBottomWidth:var(--pf-c-tabs__link--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px));--pf-c-tabs__link--before--BorderBottomColor:var(--pf-c-tabs__link--before--border-color--base, var(--pf-global--BorderColor--100, #d2d2d2))}:host(.first[box][active]) button::before{border-block-start-width:var(--pf-c-tabs--m-box__item--m-current--first-child__link--before--BorderTopWidth,var(--pf-c-tabs__link--before--border-width--base,var(--pf-global--BorderWidth--sm,1px)));border-inline-start-width:var(--pf-c-tabs--m-box__item--m-current--first-child__link--before--BorderLeftWidth,var(--pf-c-tabs__link--before--border-width--base,var(--pf-global--BorderWidth--sm,1px)))}:host(.last[box][active]) button::before{border-inline-end-width:var(--pf-c-tabs--m-box__item--m-current--last-child__link--before--BorderRightWidth,var(--pf-c-tabs--before--border-width--base,var(--pf-global--BorderWidth--sm,1px)))}:host([aria-disabled=true]) button,:host([disabled]) button{--pf-c-tabs__link--Color:var(--pf-c-tabs__link--disabled--Color,  var(--pf-global--disabled-color--100, #6a6e73));--pf-c-tabs__link--BackgroundColor:var(--pf-c-tabs__link--disabled--BackgroundColor, var(--pf-global--palette--black-150, #f5f5f5));--pf-c-tabs__link--before--BorderRightWidth:var(--pf-c-tabs__link--disabled--before--BorderRightWidth, 0);--pf-c-tabs__link--before--BorderBottomWidth:var(--pf-c-tabs__link--disabled--before--BorderBottomWidth, var(--pf-c-tabs--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px)));--pf-c-tabs__link--before--BorderLeftWidth:var(--pf-c-tabs__link--disabled--before--BorderLeftWidth, 0);--pf-c-tabs__link--after--BorderWidth:0}[part=icon]{margin-inline-end:var(--pf-c-tabs__link--child--MarginRight,var(--pf-global--spacer--md,1rem))}[part=icon]:last-child{--pf-c-tabs__link--child--MarginRight:0}:host([aria-disabled=true][border-bottom=false]) button,:host([disabled][border-bottom=false]) button{--pf-c-tabs__link--before--BorderBottomWidth:0}`;
/**
 * Tab
 *
 * @slot icon
 *       Can contain an `<svg>` or `<pf-icon>`
 * @slot
 *       Tab title text
 *
 * @csspart button - button element
 * @csspart icon - span container for the icon
 * @csspart text - span container for the title text
 *
 * @cssprop     {<length>} --pf-c-tabs--m-box__item--m-current--first-child__link--before--BorderLeftWidth  {@default `1px`}
 * @cssprop     {<length>} --pf-c-tabs--m-box__item--m-current--last-child__link--before--BorderRightWidth  {@default `1px`}
 *
 * @cssprop     {<color>} --pf-c-tabs__link--BackgroundColor            {@default `#f0f0f0`}
 * @cssprop     {<color>} --pf-c-tabs__link--disabled--BackgroundColor  {@default `#d2d2d2`}
 *
 * @cssprop     {<length>} --pf-c-tabs__link--before--BorderTopWidth    {@default `1px`}
 * @cssprop     {<length>} --pf-c-tabs__link--before--BorderBottomWidth {@default `1px`}
 * @cssprop     {<length>} --pf-c-tabs__link--before--BorderLeftWidth   {@default `0`}
 * @cssprop     {<length>} --pf-c-tabs__link--before--BorderRightWidth  {@default `1px`}
 *
 * @cssprop     {<length>} --pf-c-tabs__link--disabled--before--BorderRightWidth  {@default `1px`}
 *
 * @cssprop     {<length>} --pf-c-tabs__link--after--Top    {@default `auto`}
 * @cssprop     {<length>} --pf-c-tabs__link--after--Right  {@default `0`}
 * @cssprop     {<length>} --pf-c-tabs__link--after--Bottom {@default `0`}
 * @cssprop     {<length>} --pf-c-tabs__link--before--Left  {@default `0`}
 *
 * @cssprop     {<length>} --pf-c-tabs__link--PaddingTop    {@default `1rem`}
 * @cssprop     {<length>} --pf-c-tabs__link--PaddingBottom {@default `1rem`}
 *
 * @cssprop     {<length>} --pf-c-tabs__link--disabled--before--BorderBottomWidth {@default `1px`}
 * @cssprop     {<length>} --pf-c-tabs__link--disabled--before--BorderLeftWidth   {@default `1px`}
 *
 * @cssprop     {<color>} --pf-c-tabs__link--before--BorderTopColor     {@default `#d2d2d2`}
 * @cssprop     {<color>} --pf-c-tabs__link--before--BorderRightColor   {@default `#d2d2d2`}
 * @cssprop     {<color>} --pf-c-tabs__link--before--BorderBottomColor  {@default `#d2d2d2`}
 * @cssprop     {<color>} --pf-c-tabs__link--before--BorderLeftColor    {@default `#d2d2d2`}
 *
 * @cssprop     {<length>}  --pf-c-tabs__link--FontSize      {@default `1rem`}
 * @cssprop     {<color>}   --pf-c-tabs__link--Color          {@default `#6a6e73`}
 * @cssprop     {<length>}  --pf-c-tabs__link--OutlineOffset {@default `-0.375rem`}
 *
 * @cssprop     {<color>}  --pf-c-tabs__link--after--BorderColor        {@default `#b8bbbe`}
 * @cssprop     {<length>} --pf-c-tabs__link--after--BorderTopWidth     {@default `0`}
 * @cssprop     {<length>} --pf-c-tabs__link--after--BorderRightWidth   {@default `0`}
 * @cssprop     {<length>} --pf-c-tabs__link--after--BorderBottomWidth  {@default `0`}
 * @cssprop     {<length>} --pf-c-tabs__link--after--BorderLeftWidth    {@default `0`}
 *
 * @cssprop     {<color>} --pf-c-tabs__item--m-current__link--Color {@default `#151515`}
 *
 * @cssprop     {<color>}   --pf-c-tabs__item--m-current__link--after--BorderColor {@default `#06c`}
 * @cssprop     {<length>}  --pf-c-tabs__item--m-current__link--after--BorderWidth {@default `3px`}
 *
 * @cssprop     {<length>} --pf-c-tabs__link--child--MarginRight  {@default `1rem`}
 *
 * @fires { TabExpandEvent } tab-expand - when a tab expands
 */
let PfTab = class PfTab extends BaseTab {
    constructor() {
        super(...arguments);
        this.active = false;
        this.disabled = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.id || (this.id = getRandomId('pf-tab'));
    }
};
PfTab.styles = [...BaseTab.styles, styles];
__decorate([
    observed,
    property({ reflect: true, type: Boolean })
], PfTab.prototype, "active", void 0);
__decorate([
    observed,
    property({ reflect: true, type: Boolean })
], PfTab.prototype, "disabled", void 0);
PfTab = __decorate([
    customElement('pf-tab')
], PfTab);
export { PfTab };
//# sourceMappingURL=pf-tab.js.map