import { __decorate } from "tslib";
import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { observed } from '@patternfly/pfe-core/decorators.js';
import { BaseTab } from '@patternfly/elements/pf-tabs/BaseTab.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { css } from "lit";
const styles = css `#rhds-container{display:flex;width:100%;--_button-text-color:var(--rh-tabs-link-color,\n    var(--rh-color-text-secondary-on-light, #4d4d4d));--_button-focus-outline-color:var(--rh-color-border-interactive-on-light, #0066cc)}#rhds-container.dark{--_button-text-color:var(--rh-tabs-link-color,\n    var(--rh-color-text-secondary-on-dark, #c7c7c7));--_button-focus-outline-color:var(--rh-color-border-interactive-on-dark, #73bcf7)}:host([active]) #rhds-container{--_button-text-color:var(--rh-tabs-link-color,\n    var(--rh-color-text-primary-on-light, #151515));--_active-tab-border-color:var(--rh-tabs-active-border-color,\n    var(--rh-color-accent-brand-on-light, #ee0000))}:host([active]) #rhds-container.dark{--_button-text-color:var(--rh-tabs-link-color,\n    var(--rh-color-text-primary-on-dark, #ffffff));--_active-tab-border-color:var(--rh-tabs-active-border-color,\n    var(--rh-color-accent-brand-on-dark, #ff442b))}:host([box]) #rhds-container{--_inactive-tab-background-color:var(--rh-color-surface-lighter, #f2f2f2)}:host([box]) #rhds-container.dark{--_inactive-tab-background-color:var(--rh-color-surface-dark, #383838)}:host([active][theme=base]) #rhds-container{--_active-tab-border-color:var(--rh-tabs-active-border-color,\n    var(--rh-color-border-interactive-on-light, #0066cc))}:host([active][theme=base]) #rhds-container.dark{--_active-tab-border-color:var(--rh-tabs-active-border-color,\n    var(--rh-color-border-interactive-on-dark, #73bcf7))}button{display:flex;align-items:center;background-color:inherit;color:var(--_button-text-color);padding-block-start:var(--rh-tabs-link-padding-block-start,var(--rh-space-lg,16px));padding-inline-start:var(--rh-tabs-link-padding-inline-start,var(--rh-space-2xl,32px));padding-block-end:var(--rh-tabs-link-padding-block-end,var(--rh-space-lg,16px));padding-inline-end:var(--rh-tabs-link-padding-inline-end,var(--rh-space-2xl,32px));max-width:200px;max-height:100%}button:focus-visible{outline:var(--rh-border-width-md,2px) solid var(--_button-focus-outline-color);outline-offset:-8px;border-radius:10px}button:before{border:0 solid transparent}button:after{background-color:transparent;border-inline:0 solid transparent;border-block-start:var(--rh-border-width-lg,3px) solid transparent;border-block-end:var(--rh-border-width-sm,1px) solid transparent}[part=icon]{margin-inline-end:var(--rh-space-md,8px)}:host([active]:not([box])) button:after{border-block-end:var(--rh-border-width-lg,3px) solid var(--_active-tab-border-color)}:host([active][box]) button:before{border-inline-color:var(--_border-color);border-inline-start-width:var(--rh-border-width-sm,1px)}:host([active][box]) button:after{border-block-start:var(--rh-border-width-lg,3px) solid var(--_active-tab-border-color);border-block-end:var(--rh-border-width-sm,1px) solid var(--_context-background-color,var(--rh-color-white,#ffffff))}:host([box]:not([active])) #rhds-container{background-color:var(--_inactive-tab-background-color)}:host([box]:not([active])) button:before{border-inline-color:var(--_border-color);border-inline-start-width:var(--rh-border-width-sm,1px)}:host([box]:not([active])) button:after{border-block-end-color:var(--_border-color)}:host(.first[box][active]) button:before{border-inline-start-color:var(--_border-color);border-inline-start-width:var(--rh-border-width-sm,1px)}:host(.first[box]:not([active])) button:before{border-inline-color:transparent}:host(.last[box][active]) button:before{border-inline-end-color:var(--_border-color);border-inline-end-width:var(--rh-border-width-sm,1px)}@media screen and (min-width:768px){:host([vertical]:not([box])) button{padding-block:var(--rh-tabs-link-padding-block-start,var(--rh-space-md,8px)) var(--rh-tabs-link-padding-block-start,var(--rh-space-md,8px))}:host([vertical][active]) button:after{border-block-end:transparent}:host([box]:not([vertical],[active])) button:before{border-inline-color:var(--_border-color);border-inline-start-width:var(--rh-border-width-sm,1px)}:host([box][vertical]:not([active])) button:before{border-inline-start-color:transparent;border-inline-end:var(--rh-border-width-sm,1px) solid var(--_border-color);border-block-start:var(--rh-border-width-sm,1px) solid var(--_border-color)}:host([box]:not([active],[vertical])) button:after{border-block-end-color:var(--_border-color)}:host([active][box][vertical]) button:after{border-block-start:var(--rh-border-width-sm,1px) solid var(--_border-color)}:host([box][vertical]:not([active])) button:after{border-block-end-color:transparent}:host(.first[vertical][box]){margin-block-start:var(--rh-space-2xl,32px)}:host(.last[vertical][box]){margin-block-end:var(--rh-space-2xl,32px)}:host(.first[vertical]:not([box])){margin-block-start:var(--rh-space-xl,24px)}:host(.last[vertical]:not([box])){margin-block-end:var(--rh-space-xl,24px)}:host([active][box]:not([vertical])) button:after{border-block-start:var(--rh-border-width-lg,3px) solid var(--_active-tab-border-color);border-block-end:var(--rh-border-width-sm,1px) solid var(--_context-background-color,var(--rh-color-white,#ffffff))}:host(.first[box][vertical][active]) button:after{border-block-start-color:var(--_border-color);border-block-start-width:var(--rh-border-width-sm,1px)}:host([box][vertical][active]) button:before{border-inline-start:var(--rh-border-width-lg,3px) solid var(--_active-tab-border-color);border-inline-end:var(--rh-border-width-sm,1px) solid var(--_context-background-color,var(--rh-color-white,#ffffff))}:host([vertical][active]:not([box])) button:before{border-inline-start:var(--rh-border-width-lg,3px) solid var(--_active-tab-border-color)}:host(.first[vertical][box]:not([active])) button:before{border-block-start-color:transparent}:host(.first[box][active]:not([vertical])) button:before{border-inline-start-color:var(--_border-color);border-inline-start-width:var(--rh-border-width-sm,1px)}:host(.last[box][active]:not([vertical])) button:before{border-inline-end-color:var(--_border-color);border-inline-end-width:var(--rh-border-width-sm,1px)}:host(.last[box][vertical][active]) button:before{border-block-end-color:var(--_border-color);border-block-end-width:var(--rh-border-width-sm,1px)}:host(.last[box][vertical]:not([active])) button:after{border-block-end:none}}`;
/**
 * The tab button for use within a rh-tabs element, must be paired with a rh-tab-panel.
 *
 * @slot icon - Can contain an `<svg>` or `<pf-icon>`
 * @slot - Tab title text
 *
 * @csspart button - `<button>` element
 * @csspart icon - icon `<span>` element
 * @csspart text - tile text `<span>` element
 *
 * @cssprop {<color>} --rh-tabs-link-color - Tab link text color {@default `#4d4d4d`}
 * @cssprop {<color>} --rh-tabs-active-border-color - Tab active border color {@default `#ff442b`}
 * @cssprop {<length>} --rh-tabs-link-padding-inline-start - Tab padding inline start {@default `32px`}
 * @cssprop {<length>} --rh-tabs-link-padding-block-start - Tab padding block start {@default `16px`}
 * @cssprop {<length>} --rh-tabs-link-padding-inline-end - Tab padding inline end {@default 32px`}
 * @cssprop {<length>} --rh-tabs-link-padding-block-end - Tab padding block end {@default `16px`}
 *
 * @cssprop --rh-border-width-lg
 * @cssprop --rh-border-width-md
 * @cssprop --rh-border-width-sm
 * @cssprop --rh-color-accent-brand-on-dark
 * @cssprop --rh-color-accent-brand-on-light
 * @cssprop --rh-color-border-interactive-on-dark
 * @cssprop --rh-color-border-interactive-on-light
 * @cssprop --rh-color-surface-dark
 * @cssprop --rh-color-surface-lighter
 * @cssprop --rh-color-text-primary-on-dark
 * @cssprop --rh-color-text-primary-on-light
 * @cssprop --rh-color-text-secondary-on-dark
 * @cssprop --rh-color-text-secondary-on-light
 * @cssprop --rh-color-white
 * @cssprop --rh-space-2xl
 * @cssprop --rh-space-lg
 * @cssprop --rh-space-md
 * @cssprop --rh-space-xl
 *
 * @fires { TabExpandEvent } tab-expand - when a tab expands
 */
let RhTab = class RhTab extends BaseTab {
    constructor() {
        super(...arguments);
        this.active = false;
        this.disabled = false;
    }
    render() {
        const { on = '' } = this;
        return html `
      <div id="rhds-container" class="${classMap({ [on]: !!on })}">${super.render()}</div>
    `;
    }
};
RhTab.version = '{{version}}';
RhTab.styles = [...BaseTab.styles, styles];
__decorate([
    colorContextConsumer()
], RhTab.prototype, "on", void 0);
__decorate([
    observed,
    property({ reflect: true, type: Boolean })
], RhTab.prototype, "active", void 0);
__decorate([
    observed,
    property({ reflect: true, type: Boolean })
], RhTab.prototype, "disabled", void 0);
RhTab = __decorate([
    customElement('rh-tab')
], RhTab);
export { RhTab };
//# sourceMappingURL=rh-tab.js.map