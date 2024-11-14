var _PfBanner_slots;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { css } from "lit";
const styles = css `:host {\n  display: block;\n  --pf-c-banner--PaddingTop: var(--pf-global--spacer--xs, 0.25rem);\n  --pf-c-banner--PaddingRight: var(--pf-global--spacer--md, 1rem);\n  --pf-c-banner--md--PaddingRight: var(--pf-global--spacer--lg, 1.5rem);\n  --pf-c-banner--PaddingBottom: var(--pf-global--spacer--xs, 0.25rem);\n  --pf-c-banner--PaddingLeft: var(--pf-global--spacer--md, 1rem);\n  --pf-c-banner--md--PaddingLeft: var(--pf-global--spacer--lg, 1.5rem);\n  --pf-c-banner--FontSize: var(--pf-global--FontSize--sm, 0.875rem);\n  --pf-c-banner--Color: var(--pf-global--Color--100, #151515);\n  --pf-c-banner--BackgroundColor: var(--pf-global--BackgroundColor--dark-400, #4f5255);\n  --pf-c-banner--link--Color: var(--pf-c-banner--Color);\n  --pf-c-banner--link--TextDecoration: underline;\n  --pf-c-banner--link--hover--Color: var(--pf-c-banner--Color);\n  --pf-c-banner--link--hover--FontWeight: var(--pf-global--FontWeight--semi-bold, 700);\n  --pf-c-banner--link--disabled--Color: var(--pf-c-banner--Color);\n  --pf-c-banner--link--disabled--TextDecoration: none;\n  --pf-c-banner--m-info--BackgroundColor: var(--pf-global--palette--blue-200, #73bcf7);\n  --pf-c-banner--m-danger--BackgroundColor: var(--pf-global--danger-color--100, #c9190b);\n  --pf-c-banner--m-success--BackgroundColor: var(--pf-global--success-color--100, #3e8635);\n  --pf-c-banner--m-warning--BackgroundColor: var(--pf-global--warning-color--100, #f0ab00);\n  --pf-c-banner--m-sticky--ZIndex: var(--pf-global--ZIndex--md, 300);\n  --pf-c-banner--m-sticky--BoxShadow: var(--pf-global--BoxShadow--md-bottom);\n}\n\n#container,\n#container.default {\n  color: var(--pf-global--Color--100, var(--pf-global--Color--light-100, #ffffff));\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding:\n    var(--pf-c-banner--PaddingTop, var(--pf-global--spacer--xs, 0.25rem))\n    var(--pf-c-banner--PaddingRight, var(--pf-global--spacer--md, 1rem))\n    var(--pf-c-banner--PaddingBottom, var(--pf-global--spacer--xs, 0.25rem))\n    var(--pf-c-banner--PaddingLeft, var(--pf-global--spacer--md, 1rem));\n  font-size: var(--pf-c-banner--FontSize, var(--pf-global--FontSize--sm, 0.875rem));\n  color: var(--pf-global--Color--100, var(--pf-global--Color--light-100, #ffffff));\n  white-space: nowrap;\n  background-color: var(--pf-c-banner--BackgroundColor, var(--pf-global--BackgroundColor--dark-400, #4f5255));\n\n  --pf-icon--size: 1em;\n}\n\n#container.info {\n  color: var(--pf-global--Color--100, var(--pf-global--Color--dark-100, #151515));\n  --pf-c-banner--BackgroundColor: var(--pf-c-banner--m-info--BackgroundColor, var(--pf-global--palette--blue-200, #73bcf7));\n}\n\n#container.danger {\n  --pf-c-banner--BackgroundColor: var(--pf-c-banner--m-danger--BackgroundColor, var(--pf-global--danger-color--100, #c9190b));\n}\n\n#container.success {\n  --pf-c-banner--BackgroundColor: var(--pf-c-banner--m-success--BackgroundColor, var(--pf-global--success-color--100, #3e8635));\n}\n\n#container.warning {\n  color: var(--pf-global--Color--100, var(--pf-global--Color--dark-100, #151515));\n  --pf-c-banner--BackgroundColor: var(--pf-c-banner--m-warning--BackgroundColor, var(--pf-global--warning-color--100, #f0ab00));\n}\n\n#container.hasIcon {\n  display: var(--pf-l-flex--Display, flex);\n  flex-wrap: var(--pf-l-flex--FlexWrap, wrap);\n  align-items: var(--pf-l-flex--AlignItems, baseline);\n  gap: var(--pf-l-flex--spacer, var(--pf-l-flex--spacer--sm, var(--pf-global--spacer--sm, 0.5rem)));\n}\n\n:host([sticky]) {\n  position: sticky;\n  top: 0;\n  z-index: var(--pf-c-banner--m-sticky--ZIndex, var(--pf-global--ZIndex--md, 300));\n  box-shadow:\n    var(--pf-c-banner--m-sticky--BoxShadow,\n    var(--pf-global--BoxShadow--md-bottom, 0 0.5rem 0.5rem -0.375rem rgba(3, 3, 3, 0.18)));\n}\n\npf-icon,\n::slotted(pf-icon),\n::slotted(svg) {\n  position: relative;\n  inset-block-start: 0.125em;\n}\n\n::slotted(svg) {\n  height: 1em;\n  width: 1em;\n  fill: currentcolor;\n}\n\n@media (min-width: 768px) {\n  #container {\n    --pf-c-banner--PaddingRight: var(--pf-c-banner--md--PaddingRight, var(--pf-global--spacer--lg, 1.5rem));\n    --pf-c-banner--PaddingLeft: var(--pf-c-banner--md--PaddingLeft, var(--pf-global--spacer--lg, 1.5rem));\n  }\n}\n`;
let PfBanner = class PfBanner extends LitElement {
    constructor() {
        super(...arguments);
        /** Shorthand for the `icon` slot, the value is icon name */
        this.sticky = false;
        /** Represents the state of the anonymous and icon slots */
        _PfBanner_slots.set(this, new SlotController(this, null, 'icon'));
    }
    willUpdate(changed) {
        if (changed.has('icon') && this.icon) {
            import('@patternfly/elements/pf-icon/pf-icon.js');
        }
    }
    render() {
        const { variant, icon } = this;
        const hasIcon = !!icon || __classPrivateFieldGet(this, _PfBanner_slots, "f").hasSlotted('icon');
        return html `
      <div id="container" part="container"
            class=${classMap({ hasIcon, [variant ?? '']: !!variant })}>
        <slot name="icon" part="icon">${!this.icon ? '' : html `
          <pf-icon icon="${this.icon}"></pf-icon>`}
        </slot>
        <slot id="text"></slot>
      </div>
    `;
    }
};
_PfBanner_slots = new WeakMap();
PfBanner.styles = [styles];
PfBanner.version = "4.0.2";
__decorate([
    property({ reflect: true })
], PfBanner.prototype, "variant", void 0);
__decorate([
    property()
], PfBanner.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean })
], PfBanner.prototype, "sticky", void 0);
PfBanner = __decorate([
    customElement('pf-banner')
], PfBanner);
export { PfBanner };
//# sourceMappingURL=pf-banner.js.map