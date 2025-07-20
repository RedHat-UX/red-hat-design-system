var _PfProgressStep_slots, _PfProgressStep_internals;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { css } from "lit";
const style = css `[hidden] {\n  display: none !important;\n}\n\n#icon {\n  z-index: var(--pf-c-progress-stepper__step-icon--ZIndex);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: var(--pf-c-progress-stepper__step-icon--Width);\n  height: var(--pf-c-progress-stepper__step-icon--Height);\n  color: var(--pf-c-progress-stepper__step-icon--Color);\n  background-color: var(--pf-c-progress-stepper__step-icon--BackgroundColor);\n  border: var(--pf-c-progress-stepper__step-icon--BorderWidth) solid var(--pf-c-progress-stepper__step-icon--BorderColor);\n  border-radius: 50%;\n  font-size: var(--pf-c-progress-stepper__step-icon--FontSize);\n  --pf-icon--size: 1.125em;\n}\n\n#main {\n  position: var(--pf-c-progress-stepper__step-main--Position, initial);\n  min-width: 0;\n  margin: var(--pf-c-progress-stepper__step-main--MarginTop) var(--pf-c-progress-stepper__step-main--MarginRight) var(--pf-c-progress-stepper__step-main--MarginBottom) var(--pf-c-progress-stepper__step-main--MarginLeft);\n  text-align: var(--pf-c-progress-stepper--step-main--TextAlign, auto);\n  overflow-wrap: anywhere;\n}\n\n:host(:not([current])) #main.compact {\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n  margin-bottom: var(--pf-c-progress-stepper--m-compact__step-main--MarginBottom);\n}\n\n:host([current]) #main.compact {\n  grid-column: 1/-1;\n  grid-row: 1/2;\n}\n\n#title {\n  font-size: var(--pf-c-progress-stepper__step-title--FontSize);\n  font-weight: var(--pf-c-progress-stepper__step-title--FontWeight);\n  color: var(--pf-c-progress-stepper__step-title--Color);\n  text-align: var(--pf-c-progress-stepper__step-title--TextAlign);\n  border: 0;\n}\n\n#description {\n  margin-top: var(--pf-c-progress-stepper__step-description--MarginTop);\n  font-size: var(--pf-c-progress-stepper__step-description--FontSize);\n  color: var(--pf-c-progress-stepper__step-description--Color);\n  text-align: var(--pf-c-progress-stepper__step-description--TextAlign);\n  display: block;\n}\n\n:host {\n  display: contents;\n}\n\n#connector {\n  position: relative;\n  display: flex;\n  justify-content: var(--pf-c-progress-stepper__step-connector--JustifyContent);\n  width: 100%;\n}\n\n#connector.compact {\n  min-width: var(--pf-c-progress-stepper--m-compact__step-connector--MinWidth);\n  grid-row: var(--pf-c-progress-stepper--m-compact__step-connector--GridRow);\n  padding-bottom: var(--pf-c-progress-stepper--m-compact__step-connector--PaddingBottom);\n}\n\n:host(:not(:last-of-type)) #main::before {\n  content: var(--pf-c-progress-stepper__step-main--before--Content);\n  position: absolute;\n  top: calc(100% + var(--pf-c-progress-stepper__step-main--MarginTop));\n  left: calc(50% - var(--pf-c-progress-stepper__step-connector--before--BorderRightWidth) / 2);\n  width: auto;\n  height: calc(var(--pf-c-progress-stepper__step-main--MarginTop) + var(--pf-c-progress-stepper__step-main--MarginBottom));\n  border-right: var(--pf-c-progress-stepper__step-connector--before--BorderRightWidth) solid var(--pf-c-progress-stepper__step-connector--before--BorderRightColor);\n}\n\n:host(:not(:last-of-type)) #connector::before {\n  position: absolute;\n  top: var(--pf-c-progress-stepper__step-connector--before--Top);\n  left: var(--pf-c-progress-stepper__step-connector--before--Left);\n  width: var(--pf-c-progress-stepper__step-connector--before--Width);\n  height: var(--pf-c-progress-stepper__step-connector--before--Height);\n  content: var(--pf-c-progress-stepper__step-connector--before--Content);\n  border-right: var(--pf-c-progress-stepper__step-connector--before--BorderRightWidth) solid var(--pf-c-progress-stepper__step-connector--before--BorderRightColor);\n  border-bottom: var(--pf-c-progress-stepper__step-connector--before--BorderBottomWidth) solid var(--pf-c-progress-stepper__step-connector--before--BorderBottomColor);\n  transform: var(--pf-c-progress-stepper__step-connector--before--Transform);\n}\n\n:host([current]) {\n  --pf-c-progress-stepper__step-title--FontWeight: var(--pf-c-progress-stepper__step--m-current__step-title--FontWeight);\n  --pf-c-progress-stepper__step-title--Color: var(--pf-c-progress-stepper__step--m-current__step-title--Color);\n}\n\n:host([variant="success"]) {\n  --pf-c-progress-stepper__step-icon--Color: var(--pf-global--success-color--100, #3e8635);\n}\n\n:host([variant="info"]) {\n  --pf-c-progress-stepper__step-icon--Color: var(--pf-global--info-color--100, #2b9af3);\n}\n\n:host([variant="warning"]) {\n  --pf-c-progress-stepper__step-icon--Color: var(--pf-global--warning-color--100, #f0ab00);\n}\n\n:host([variant="danger"]) {\n  --pf-c-progress-stepper__step-icon--Color: var(--pf-global--danger-color--100, #c9190b);\n  --pf-c-progress-stepper__step-title--Color: var(--pf-c-progress-stepper__step--m-danger__step-title--Color);\n  --pf-c-progress-stepper__step-title--m-help-text--hover--Color: var(--pf-c-progress-stepper__step--m-danger__step-title--m-help-text--hover--Color);\n  --pf-c-progress-stepper__step-title--m-help-text--focus--Color: var(--pf-c-progress-stepper__step--m-danger__step-title--m-help-text--focus--Color);\n  --pf-c-progress-stepper__step-title--m-help-text--TextDecorationColor: var(--pf-c-progress-stepper__step--m-danger__step-title--m-help-text--TextDecorationColor);\n  --pf-c-progress-stepper__step-title--m-help-text--hover--TextDecorationColor: var(--pf-c-progress-stepper__step--m-danger__step-title--m-help-text--hover--TextDecorationColor);\n  --pf-c-progress-stepper__step-title--m-help-text--focus--TextDecorationColor: var(--pf-c-progress-stepper__step--m-danger__step-title--m-help-text--focus--TextDecorationColor);\n}\n`;
const ICONS = new Map(Object.entries({
    success: { icon: 'check-circle' },
    danger: { icon: 'exclamation-circle' },
    warning: { icon: 'exclamation-triangle' },
    info: { icon: 'resources-full', set: 'patternfly' },
}));
let PfProgressStep = class PfProgressStep extends LitElement {
    constructor() {
        super(...arguments);
        /** Indicates if this item is the current active item. */
        this.current = false;
        _PfProgressStep_slots.set(this, new SlotController(this, 'title', 'description'));
        _PfProgressStep_internals.set(this, InternalsController.of(this, { role: 'listitem' }));
    }
    render() {
        const hasDescription = !!(this.description ?? __classPrivateFieldGet(this, _PfProgressStep_slots, "f").hasSlotted('description'));
        const icon = this.icon ?? ICONS.get(this.variant ?? 'default')?.icon;
        const set = this.iconSet ?? ICONS.get(this.variant ?? 'default')?.set;
        const { parentTagName } = this.constructor;
        const { compact = false } = this.closest?.(parentTagName) ?? {};
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
        if (changed.has('current')) {
            __classPrivateFieldGet(this, _PfProgressStep_internals, "f").ariaCurrent = String(!!this.current);
        }
    }
};
_PfProgressStep_slots = new WeakMap();
_PfProgressStep_internals = new WeakMap();
PfProgressStep.parentTagName = 'pf-progress-stepper';
PfProgressStep.styles = [style];
PfProgressStep.version = "4.1.0";
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
PfProgressStep = __decorate([
    customElement('pf-progress-step')
], PfProgressStep);
export { PfProgressStep };
//# sourceMappingURL=pf-progress-step.js.map