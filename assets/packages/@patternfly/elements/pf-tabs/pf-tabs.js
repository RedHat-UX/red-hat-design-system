import { __decorate } from "tslib";
import { customElement, property } from 'lit/decorators.js';
import { cascades } from '@patternfly/pfe-core/decorators.js';
import { BaseTabs } from './BaseTabs.js';
import { PfTab } from './pf-tab.js';
import { PfTabPanel } from './pf-tab-panel.js';
import { css } from "lit";
const styles = css `[part=tabs-container]{width:var(--pf-c-tabs--Width,auto);padding-inline-end:var(--pf-c-tabs--inset,0);padding-inline-start:var(--pf-c-tabs--inset,0)}[part=tabs-container]::before{border-color:var(--pf-c-tabs--before--BorderColor,var(--pf-global--BorderColor--100,#d2d2d2));border-block-start-width:var(--pf-c-tabs--before--BorderTopWidth,0);border-inline-end-width:var(--pf-c-tabs--before--BorderRightWidth,0);border-block-end-width:var(--pf-c-tabs--before--BorderBottomWidth,var(--pf-c-tabs--before--border-width--base,var(--pf-global--BorderWidth--sm,1px)));border-inline-start-width:var(--pf-c-tabs--before--BorderLeftWidth,0)}:host(:not([vertical])) ::slotted(pf-tab[aria-disabled=true]:last-of-type){translate:calc(-1 * var(--pf-c-tabs__link--disabled--before--BorderRightWidth,1px)) 0}:host(:not([vertical])) ::slotted(pf-tab[aria-disabled=true]:first-of-type){translate:var(--pf-c-tabs__link--disabled--before--BorderRightWidth,1px) 0}:host([box]) [part=tabs-container]{--pf-c-tabs__link--BackgroundColor:var(--pf-c-tabs--m-box__link--BackgroundColor, var(--pf-global--BackgroundColor--200, #f0f0f0));--pf-c-tabs__link--disabled--BackgroundColor:var(--pf-c-tabs--m-box__link--disabled--BackgroundColor, var(--pf-global--disabled-color--200, #d2d2d2));--pf-c-tabs__link--before--BorderBottomWidth:var(--pf-c-tabs__link--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px));--pf-c-tabs__link--before--BorderRightWidth:var(--pf-c-tabs__link--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px));--pf-c-tabs__link--disabled--before--BorderRightWidth:var(--pf-c-tabs__link--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px));--pf-c-tabs__link--after--Top:0;--pf-c-tabs__link--after--Bottom:auto}:host([box]) ::slotted(pf-tab:last-of-type){--pf-c-tabs__link--before--BorderRightWidth:0}:host([box]) button:nth-of-type(2)::before{left:calc(var(--pf-c-tabs__link--before--border-width--base,var(--pf-global--BorderWidth--sm,1px)) * -1)}:host([box]) pf-tab[aria-selected=true]+pf-tab{--pf-c-tabs__link--before--Left:0}:host([box=light]) [part=tabs-container]{--pf-c-tabs__link--BackgroundColor:var(--pf-c-tabs--m-color-scheme--light-300__link--BackgroundColor, transparent);--pf-c-tabs__item--m-current__link--BackgroundColor:var(--pf-c-tabs--m-color-scheme--light-300__item--m-current__link--BackgroundColor, var(--pf-global--BackgroundColor--light-300, #f0f0f0));--pf-c-tabs__link--disabled--BackgroundColor:var(--pf-c-tabs--m-color-scheme--light-300__link--disabled--BackgroundColor, var(--pf-global--palette--black-150, #f5f5f5))}:host([vertical]) [part=tabs-container]{--pf-c-tabs--Width:var(--pf-c-tabs--m-vertical--Width, 100%);--pf-c-tabs--inset:var(--pf-c-tabs--m-vertical--inset, var(--pf-global--spacer--lg, 1.5rem));--pf-c-tabs--before--BorderBottomWidth:0;--pf-c-tabs__link--PaddingTop:var(--pf-c-tabs--m-vertical__link--PaddingTop, var(--pf-global--spacer--md, 1rem));--pf-c-tabs__link--PaddingBottom:var(--pf-c-tabs--m-vertical__link--PaddingBottom, var(--pf-global--spacer--md, 1rem));--pf-c-tabs__link--before--Left:0;--pf-c-tabs__link--disabled--before--BorderBottomWidth:0;--pf-c-tabs__link--disabled--before--BorderLeftWidth:var(--pf-c-tabs--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px));--pf-c-tabs__link--after--Top:0;--pf-c-tabs__link--after--Right:auto;display:inline-flex;flex-direction:column;height:100%;padding:0;overflow:visible}:host([vertical]) [part=tabs]{position:relative;flex-direction:column;flex-grow:1;max-width:var(--pf-c-tabs--m-vertical--MaxWidth,15.625rem)}:host([vertical]) [part=tabs]::before{position:absolute;right:auto;border-style:solid;border-color:var(--pf-c-tabs--m-vertical__list--before--BorderColor,var(--pf-c-tabs--before--BorderColor,var(--pf-global--BorderColor--100,#d2d2d2)));border-block-start-width:var(--pf-c-tabs--m-vertical__list--before--BorderTopWidth,0);border-inline-end-width:var(--pf-c-tabs--m-vertical__list--before--BorderRightWidth,0);border-block-end-width:var(--pf-c-tabs--m-vertical__list--before--BorderBottomWidth,0);border-inline-start-width:var(--pf-c-tabs--m-vertical__list--before--BorderLeftWidth,var(--pf-c-tabs--before--border-width--base,var(--pf-global--BorderWidth--sm,1px)))}:host([vertical]) ::slotted(pf-tab:first-of-type){margin-block-start:var(--pf-c-tabs--inset,0)}:host([vertical]) ::slotted(pf-tab:last-of-type){margin-block-end:var(--pf-c-tabs--inset,0)}:host([box][vertical]) [part=tabs-container]{--pf-c-tabs--inset:var(--pf-c-tabs--m-vertical--m-box--inset, var(--pf-global--spacer--xl, 2rem));--pf-c-tabs--m-vertical__list--before--BorderLeftWidth:0;--pf-c-tabs--m-vertical__list--before--BorderRightWidth:var(--pf-c-tabs--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px));--pf-c-tabs__link--disabled--before--BorderRightWidth:var(--pf-c-tabs--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px));--pf-c-tabs__link--disabled--before--BorderLeftWidth:0}:host([box][vertical]) [part=tabs]::before{right:0;left:auto}:host([box][vertical]) ::slotted(pf-tab:last-of-type){--pf-c-tabs__link--before--BorderBottomWidth:0;--pf-c-tabs__link--before--BorderRightWidth:var(--pf-c-tabs__link--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px))}:host([box][vertical]) ::slotted(pf-tab[aria-selected=true]){--pf-c-tabs__link--before--BorderRightColor:var(--pf-c-tabs__item--m-current__link--BackgroundColor, var(--pf-global--BackgroundColor--100, #ffffff));--pf-c-tabs__link--before--BorderBottomColor:var(--pf-c-tabs__link--before--border-color--base, var(--pf-global--BorderColor--100, #d2d2d2));--pf-c-tabs__link--before--BorderBottomWidth:var(--pf-c-tabs__link--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px))}:host([box][vertical]) ::slotted(pf-tab[aria-selected=true]:first-of-type){--pf-c-tabs__link--before--BorderTopWidth:var(--pf-c-tabs__link--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px))}[part=tabs]{display:var(--pf-c-tabs__list--Display,flex)}button{width:var(--pf-c-tabs__scroll-button--Width,var(--pf-global--spacer--2xl,3rem));color:var(--pf-c-tabs__scroll-button--Color,var(--pf-global--Color--100,#151515));background-color:var(--pf-c-tabs__scroll-button--BackgroundColor,var(--pf-global--BackgroundColor--100,#fff));outline-offset:var(--pf-c-tabs__scroll-button--OutlineOffset,calc(-1 * var(--pf-global--spacer--xs,0.25rem)));transition:margin var(--pf-c-tabs__scroll-button--TransitionDuration--margin, .125s),translate var(--pf-c-tabs__scroll-button--TransitionDuration--transform, .125s),opacity var(--pf-c-tabs__scroll-button--TransitionDuration--opacity, .125s)}button:hover{--pf-c-tabs__scroll-button--Color:var(--pf-c-tabs__scroll-button--hover--Color, var(--pf-global--active-color--100, #06c))}button::before{border-color:var(--pf-c-tabs__scroll-button--before--BorderColor,var(--pf-c-tabs--before--BorderColor,var(--pf-global--BorderColor--100,#d2d2d2)));border-inline-end-width:var(--pf-c-tabs__scroll-button--before--BorderRightWidth,0);border-block-end-width:var(--pf-c-tabs__scroll-button--before--BorderBottomWidth,var(--pf-c-tabs__scroll-button--before--border-width--base,var(--pf-global--BorderWidth--sm,1px)));border-inline-start-width:var(--pf-c-tabs__scroll-button--before--BorderLeftWidth,0)}button:first-of-type{--pf-c-tabs__scroll-button--before--BorderRightWidth:var(--pf-c-tabs__scroll-button--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px));margin-inline-end:calc(var(--pf-c-tabs__scroll-button--Width,var(--pf-global--spacer--2xl,3rem)) * -1)}button:nth-of-type(2){--pf-c-tabs__scroll-button--before--BorderLeftWidth:var(--pf-c-tabs__scroll-button--before--border-width--base, var(--pf-global--BorderWidth--sm, 1px));margin-inline-start:calc(var(--pf-c-tabs__scroll-button--Width,var(--pf-global--spacer--2xl,3rem)) * -1)}button:disabled{--pf-c-tabs__scroll-button--Color:var(--pf-c-tabs__scroll-button--disabled--Color, var(--pf-global--disabled-color--200, #d2d2d2))}:host(:not[vertical]) [part=tabs-container]{--pf-c-tabs--inset:0;--pf-c-tabs--m-vertical--inset:0;--pf-c-tabs--m-vertical--m-box--inset:0}:host([fill]) [part=tabs]{flex-basis:100%}:host([fill]) ::slotted(pf-tab){flex-grow:1}:host([fill]) ::slotted(pf-tab:first-of-type){--pf-c-tabs--m-box__item--m-current--first-child__link--before--BorderLeftWidth:0}:host([fill]) ::slotted(pf-tab:last-of-type){--pf-c-tabs--m-box__item--m-current--last-child__link--before--BorderRightWidth:0}:host([border-bottom=false]) [part=tabs-container]{--pf-c-tabs--before--BorderBottomWidth:0;--pf-c-tabs__link--before--BorderBottomWidth:0}`;
/**
 * Tabs allow users to navigate between views within the same page or context. Variants include
 * horizontal, vertical, inset, and filled. Most tab variations are available as open (default) or
 * box style tabs. Box style tabs also feature a light and dark variation.
 *
 * @attr {number} active-key - DOM Property: `activeKey` {@default `0`}
 *
 * @csspart container - outer container
 * @csspart tabs-container - tabs container
 * @csspart tabs - tablist
 * @csspart panels - panels
 *
 * @slot tab - Must contain one or more `<pf-tab>`
 * @slot - Must contain one or more `<pf-panel>`
 *
 * @cssprop     {<length>} --pf-c-tabs--Width {@default `auto`}
 * @cssprop     {<length>} --pf-c-tabs--inset {@default `0`}
 *
 * @cssprop     {<color>}   --pf-c-tabs--before--BorderColor       {@default `#d2d2d2`}
 * @cssprop     {<length>}  --pf-c-tabs--before--BorderTopWidth    {@default `0`}
 * @cssprop     {<length>}  --pf-c-tabs--before--BorderRightWidth  {@default `0`}
 * @cssprop     {<length>}  --pf-c-tabs--before--BorderBottomWidth {@default `1px`}
 * @cssprop     {<length>}  --pf-c-tabs--before---BorderLeftWidth  {@default `0`}
 *
 * @cssprop     {<length>}  --pf-c-tabs--m-vertical--MaxWidth      {@default `15.625rem`}
 *
 * @cssprop     {<color>}   --pf-c-tabs--m-vertical__list--before--BorderColor       {@default `#d2d2d2`}
 * @cssprop     {<length>}  --pf-c-tabs--m-vertical__list--before--BorderTopWidth    {@default `0`}
 * @cssprop     {<length>}  --pf-c-tabs--m-vertical__list--before--BorderRightWidth  {@default `0`}
 * @cssprop     {<length>}  --pf-c-tabs--m-vertical__list--before--BorderBottomWidth {@default `0`}
 * @cssprop     {<length>}  --pf-c-tabs--m-vertical__list--before--BorderLeftWidth   {@default `1px`}
 *
 * @cssprop     {<length>}  --pf-c-tabs--m-vertical--m-box--inset  {@default `2rem`}
 *
 * @cssprop     {<display>} --pf-c-tabs__list--Display  {@default `flex`}
 *
 * @cssprop     {<length>}  --pf-c-tabs__scroll-button--Width                         {@default `3rem`}
 * @cssprop     {<color>}   --pf-c-tabs__scroll-button--Color                         {@default `#151515`}
 * @cssprop     {<color>}   --pf-c-tabs__scroll-button--BackgroundColor               {@default `#ffffff`}
 * @cssprop     {<length>}  --pf-c-tabs__scroll-button--OutlineOffset                 {@default `-0.25rem`}
 * @cssprop     {<time>}    --pf-c-tabs__scroll-button--TransitionDuration--margin    {@default `.125s`}
 * @cssprop     {<time>}    --pf-c-tabs__scroll-button--TransitionDuration--transform {@default `.125s`}
 * @cssprop     {<color>}   --pf-c-tabs__scroll-button--hover--Color                  {@default `#06c`}
 *
 * @cssprop     {<color>}   --pf-c-tabs__scroll-button--before--BorderColor           {@default `#d2d2d2`}
 * @cssprop     {<length>}  --pf-c-tabs__scroll-button--before--BorderRightWidth      {@default `0`}
 * @cssprop     {<length>}  --pf-c-tabs__scroll-button--before--BorderBottomWidth     {@default `1px`}
 * @cssprop     {<length>}  --pf-c-tabs__scroll-button--before--BorderLeftWidth       {@default `0`}
 * @cssprop     {<length>}  --pf-c-tabs__scroll-button--before--border-width--base    {@default `1px`}
 *
 * @cssprop     {<color>} --pf-c-tabs__scroll-button--disabled--Color                 {@default `#d2d2d2`}
 */
let PfTabs = class PfTabs extends BaseTabs {
    constructor() {
        super(...arguments);
        this.box = null;
        this.vertical = false;
        this.fill = false;
        this.borderBottom = 'true';
    }
    static isTab(element) {
        return element instanceof PfTab;
    }
    static isPanel(element) {
        return element instanceof PfTabPanel;
    }
    get canShowScrollButtons() {
        return !this.vertical;
    }
};
PfTabs.styles = [...BaseTabs.styles, styles];
PfTabs.scrollTimeoutDelay = 150;
__decorate([
    cascades('pf-tab', 'pf-tab-panel'),
    property({ reflect: true })
], PfTabs.prototype, "box", void 0);
__decorate([
    cascades('pf-tab', 'pf-tab-panel'),
    property({ reflect: true, type: Boolean })
], PfTabs.prototype, "vertical", void 0);
__decorate([
    cascades('pf-tab'),
    property({ reflect: true, type: Boolean })
], PfTabs.prototype, "fill", void 0);
__decorate([
    cascades('pf-tab'),
    property({ attribute: 'border-bottom' })
], PfTabs.prototype, "borderBottom", void 0);
PfTabs = __decorate([
    customElement('pf-tabs')
], PfTabs);
export { PfTabs };
//# sourceMappingURL=pf-tabs.js.map