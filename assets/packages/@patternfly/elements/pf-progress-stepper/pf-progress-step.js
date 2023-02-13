var _PfProgressStep_slots, _PfProgressStep_internals;
var PfProgressStep_1;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { css } from "lit";
const style = css `[hidden]{display:none!important}#icon{z-index:var(--pf-c-progress-stepper__step-icon--ZIndex);display:flex;align-items:center;justify-content:center;width:var(--pf-c-progress-stepper__step-icon--Width);height:var(--pf-c-progress-stepper__step-icon--Height);color:var(--pf-c-progress-stepper__step-icon--Color);background-color:var(--pf-c-progress-stepper__step-icon--BackgroundColor);border:var(--pf-c-progress-stepper__step-icon--BorderWidth) solid var(--pf-c-progress-stepper__step-icon--BorderColor);border-radius:50%;font-size:var(--pf-c-progress-stepper__step-icon--FontSize);--pf-icon--size:1.125em}#main{position:var(--pf-c-progress-stepper__step-main--Position,initial);min-width:0;margin:var(--pf-c-progress-stepper__step-main--MarginTop) var(--pf-c-progress-stepper__step-main--MarginRight) var(--pf-c-progress-stepper__step-main--MarginBottom) var(--pf-c-progress-stepper__step-main--MarginLeft);text-align:var(--pf-c-progress-stepper--step-main--TextAlign,auto);overflow-wrap:anywhere}:host(:not([current])) #main.compact{position:fixed;top:0;left:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;margin-bottom:var(--pf-c-progress-stepper--m-compact__step-main--MarginBottom)}:host([current]) #main.compact{grid-column:1/-1;grid-row:1/2}#title{font-size:var(--pf-c-progress-stepper__step-title--FontSize);font-weight:var(--pf-c-progress-stepper__step-title--FontWeight);color:var(--pf-c-progress-stepper__step-title--Color);text-align:var(--pf-c-progress-stepper__step-title--TextAlign);border:0}#description{margin-top:var(--pf-c-progress-stepper__step-description--MarginTop);font-size:var(--pf-c-progress-stepper__step-description--FontSize);color:var(--pf-c-progress-stepper__step-description--Color);text-align:var(--pf-c-progress-stepper__step-description--TextAlign);display:block}:host{display:contents}#connector{position:relative;display:flex;justify-content:var(--pf-c-progress-stepper__step-connector--JustifyContent);width:100%}#connector.compact{min-width:var(--pf-c-progress-stepper--m-compact__step-connector--MinWidth);grid-row:var(--pf-c-progress-stepper--m-compact__step-connector--GridRow);padding-bottom:var(--pf-c-progress-stepper--m-compact__step-connector--PaddingBottom)}:host(:not(:last-of-type)) #main::before{content:var(--pf-c-progress-stepper__step-main--before--Content);position:absolute;top:calc(100% + var(--pf-c-progress-stepper__step-main--MarginTop));left:calc(50% - var(--pf-c-progress-stepper__step-connector--before--BorderRightWidth)/ 2);width:auto;height:calc(var(--pf-c-progress-stepper__step-main--MarginTop) + var(--pf-c-progress-stepper__step-main--MarginBottom));border-right:var(--pf-c-progress-stepper__step-connector--before--BorderRightWidth) solid var(--pf-c-progress-stepper__step-connector--before--BorderRightColor)}:host(:not(:last-of-type)) #connector::before{position:absolute;top:var(--pf-c-progress-stepper__step-connector--before--Top);left:var(--pf-c-progress-stepper__step-connector--before--Left);width:var(--pf-c-progress-stepper__step-connector--before--Width);height:var(--pf-c-progress-stepper__step-connector--before--Height);content:var(--pf-c-progress-stepper__step-connector--before--Content);border-right:var(--pf-c-progress-stepper__step-connector--before--BorderRightWidth) solid var(--pf-c-progress-stepper__step-connector--before--BorderRightColor);border-bottom:var(--pf-c-progress-stepper__step-connector--before--BorderBottomWidth) solid var(--pf-c-progress-stepper__step-connector--before--BorderBottomColor);transform:var(--pf-c-progress-stepper__step-connector--before--Transform)}:host([current]){--pf-c-progress-stepper__step-title--FontWeight:var(--pf-c-progress-stepper__step--m-current__step-title--FontWeight);--pf-c-progress-stepper__step-title--Color:var(--pf-c-progress-stepper__step--m-current__step-title--Color)}:host([variant=success]){--pf-c-progress-stepper__step-icon--Color:var(--pf-global--success-color--100, #3e8635)}:host([variant=info]){--pf-c-progress-stepper__step-icon--Color:var(--pf-global--info-color--100, #2b9af3)}:host([variant=warning]){--pf-c-progress-stepper__step-icon--Color:var(--pf-global--warning-color--100, #f0ab00)}:host([variant=danger]){--pf-c-progress-stepper__step-icon--Color:var(--pf-global--danger-color--100, #c9190b);--pf-c-progress-stepper__step-title--Color:var(--pf-c-progress-stepper__step--m-danger__step-title--Color);--pf-c-progress-stepper__step-title--m-help-text--hover--Color:var(--pf-c-progress-stepper__step--m-danger__step-title--m-help-text--hover--Color);--pf-c-progress-stepper__step-title--m-help-text--focus--Color:var(--pf-c-progress-stepper__step--m-danger__step-title--m-help-text--focus--Color);--pf-c-progress-stepper__step-title--m-help-text--TextDecorationColor:var(--pf-c-progress-stepper__step--m-danger__step-title--m-help-text--TextDecorationColor);--pf-c-progress-stepper__step-title--m-help-text--hover--TextDecorationColor:var(--pf-c-progress-stepper__step--m-danger__step-title--m-help-text--hover--TextDecorationColor);--pf-c-progress-stepper__step-title--m-help-text--focus--TextDecorationColor:var(--pf-c-progress-stepper__step--m-danger__step-title--m-help-text--focus--TextDecorationColor)}`;
const ICONS = new Map(Object.entries({
    success: { icon: 'circle-check' },
    danger: { icon: 'circle-exclamation' },
    warning: { icon: 'triangle-exclamation' },
    info: { icon: 'resources-full', set: 'patternfly' },
}));
/**
 * @slot -
 *       Short description of the current step.
 * @slot description
 *       Longer description of the current step.
 * @slot icon
 *       Overrides the icon property
 *
 */
let PfProgressStep = PfProgressStep_1 = class PfProgressStep extends LitElement {
    constructor() {
        super(...arguments);
        /** Indicates if this item is the current active item. */
        this.current = false;
        _PfProgressStep_slots.set(this, new SlotController(this, 'title', 'description'));
        _PfProgressStep_internals.set(this, new InternalsController(this, {
            role: 'listitem',
        }));
    }
    render() {
        const hasDescription = !!this.description ?? __classPrivateFieldGet(this, _PfProgressStep_slots, "f").hasSlotted('description');
        const icon = this.icon ?? ICONS.get(this.variant ?? 'default')?.icon;
        const set = this.iconSet ?? ICONS.get(this.variant ?? 'default')?.set;
        const { parentTagName } = this.constructor;
        const { compact = false } = this.closest(parentTagName) ?? {};
        return html `
      <div id="connector" class="${classMap({ compact })}">
        <slot id="icon" name="icon">
          <pf-icon ?hidden="${!icon}"
                    icon="${ifDefined(icon)}"
                    set="${ifDefined(set)}"></pf-icon>
        </slot>
      </div>
      <div id="main" class="${classMap({ compact })}">
        <slot id="title"></slot>
        <slot id="description" name="description" ?hidden="${!hasDescription}">${this.description}</slot>
      </div>
    `;
    }
    updated(changed) {
        super.updated?.(changed);
        if (changed.has('current')) {
            __classPrivateFieldGet(this, _PfProgressStep_internals, "f").ariaCurrent = String(!!this.current);
        }
    }
};
_PfProgressStep_slots = new WeakMap(), _PfProgressStep_internals = new WeakMap();
PfProgressStep.parentTagName = 'pf-progress-stepper';
PfProgressStep.styles = [style];
__decorate([
    property()
], PfProgressStep.prototype, "description", void 0);
__decorate([
    property()
], PfProgressStep.prototype, "icon", void 0);
__decorate([
    property({ attribute: 'icon-set' })
], PfProgressStep.prototype, "iconSet", void 0);
__decorate([
    property({ reflect: true })
], PfProgressStep.prototype, "variant", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PfProgressStep.prototype, "current", void 0);
PfProgressStep = PfProgressStep_1 = __decorate([
    customElement('pf-progress-step')
], PfProgressStep);
export { PfProgressStep };
//# sourceMappingURL=pf-progress-step.js.map