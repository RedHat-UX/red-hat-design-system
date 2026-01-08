var _PfBanner_slots;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { css } from "lit";
const styles = css `:host {
  display: block;
  /** Top padding for banner */
  --pf-c-banner--PaddingTop: var(--pf-global--spacer--xs, 0.25rem);
  /** Right padding for banner */
  --pf-c-banner--PaddingRight: var(--pf-global--spacer--md, 1rem);
  /** Right padding for banner on medium screens */
  --pf-c-banner--md--PaddingRight: var(--pf-global--spacer--lg, 1.5rem);
  /** Bottom padding for banner */
  --pf-c-banner--PaddingBottom: var(--pf-global--spacer--xs, 0.25rem);
  /** Left padding for banner */
  --pf-c-banner--PaddingLeft: var(--pf-global--spacer--md, 1rem);
  /** Left padding for banner on medium screens */
  --pf-c-banner--md--PaddingLeft: var(--pf-global--spacer--lg, 1.5rem);
  /** Font size for banner */
  --pf-c-banner--FontSize: var(--pf-global--FontSize--sm, 0.875rem);
  /** Text color for banner */
  --pf-c-banner--Color: var(--pf-global--Color--100, #151515);
  /** Background color for banner */
  --pf-c-banner--BackgroundColor: var(--pf-global--BackgroundColor--dark-400, #4f5255);
  /** Link color for banner (references banner color) */
  --pf-c-banner--link--Color: var(--pf-c-banner--Color);
  /** Link text decoration for banner */
  --pf-c-banner--link--TextDecoration: underline;
  /** Link hover color for banner (references banner color) */
  --pf-c-banner--link--hover--Color: var(--pf-c-banner--Color);
  /** Link hover font weight for banner */
  --pf-c-banner--link--hover--FontWeight: var(--pf-global--FontWeight--semi-bold, 700);
  /** Disabled link color for banner (references banner color) */
  --pf-c-banner--link--disabled--Color: var(--pf-c-banner--Color);
  /** Disabled link text decoration for banner */
  --pf-c-banner--link--disabled--TextDecoration: none;
  /** Background color for info banner */
  --pf-c-banner--m-info--BackgroundColor: var(--pf-global--palette--blue-200, #73bcf7);
  /** Background color for danger banner */
  --pf-c-banner--m-danger--BackgroundColor: var(--pf-global--danger-color--100, #c9190b);
  /** Background color for success banner */
  --pf-c-banner--m-success--BackgroundColor: var(--pf-global--success-color--100, #3e8635);
  /** Background color for warning banner */
  --pf-c-banner--m-warning--BackgroundColor: var(--pf-global--warning-color--100, #f0ab00);
  /** Z-index for sticky banner */
  --pf-c-banner--m-sticky--ZIndex: var(--pf-global--ZIndex--md, 300);
  /** Box shadow for sticky banner */
  --pf-c-banner--m-sticky--BoxShadow: var(--pf-global--BoxShadow--md-bottom);
}

#container,
#container.default {
  color: var(--pf-global--Color--100, var(--pf-global--Color--light-100, #ffffff));
  overflow: hidden;
  text-overflow: ellipsis;
  padding:
    var(--pf-c-banner--PaddingTop, var(--pf-global--spacer--xs, 0.25rem))
    var(--pf-c-banner--PaddingRight, var(--pf-global--spacer--md, 1rem))
    var(--pf-c-banner--PaddingBottom, var(--pf-global--spacer--xs, 0.25rem))
    var(--pf-c-banner--PaddingLeft, var(--pf-global--spacer--md, 1rem));
  font-size: var(--pf-c-banner--FontSize, var(--pf-global--FontSize--sm, 0.875rem));
  color: var(--pf-global--Color--100, var(--pf-global--Color--light-100, #ffffff));
  white-space: nowrap;
  background-color: var(--pf-c-banner--BackgroundColor, var(--pf-global--BackgroundColor--dark-400, #4f5255));

  --pf-icon--size: 1em;
}

#container.info {
  color: var(--pf-global--Color--100, var(--pf-global--Color--dark-100, #151515));
  --pf-c-banner--BackgroundColor: var(--pf-c-banner--m-info--BackgroundColor, var(--pf-global--palette--blue-200, #73bcf7));
}

#container.danger {
  --pf-c-banner--BackgroundColor: var(--pf-c-banner--m-danger--BackgroundColor, var(--pf-global--danger-color--100, #c9190b));
}

#container.success {
  --pf-c-banner--BackgroundColor: var(--pf-c-banner--m-success--BackgroundColor, var(--pf-global--success-color--100, #3e8635));
}

#container.warning {
  color: var(--pf-global--Color--100, var(--pf-global--Color--dark-100, #151515));
  --pf-c-banner--BackgroundColor: var(--pf-c-banner--m-warning--BackgroundColor, var(--pf-global--warning-color--100, #f0ab00));
}

#container.hasIcon {
  display: var(--pf-l-flex--Display, flex);
  flex-wrap: var(--pf-l-flex--FlexWrap, wrap);
  align-items: var(--pf-l-flex--AlignItems, baseline);
  gap: var(--pf-l-flex--spacer, var(--pf-l-flex--spacer--sm, var(--pf-global--spacer--sm, 0.5rem)));
}

:host([sticky]) {
  position: sticky;
  top: 0;
  z-index: var(--pf-c-banner--m-sticky--ZIndex, var(--pf-global--ZIndex--md, 300));
  box-shadow:
    var(--pf-c-banner--m-sticky--BoxShadow,
    var(--pf-global--BoxShadow--md-bottom, 0 0.5rem 0.5rem -0.375rem rgba(3, 3, 3, 0.18)));
}

pf-icon,
::slotted(pf-icon),
::slotted(svg) {
  position: relative;
  inset-block-start: 0.125em;
}

::slotted(svg) {
  height: 1em;
  width: 1em;
  fill: currentcolor;
}

@media (min-width: 768px) {
  #container {
    --pf-c-banner--PaddingRight: var(--pf-c-banner--md--PaddingRight, var(--pf-global--spacer--lg, 1.5rem));
    --pf-c-banner--PaddingLeft: var(--pf-c-banner--md--PaddingLeft, var(--pf-global--spacer--lg, 1.5rem));
  }
}
`;
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
      <!-- The container of the banner -->
      <div id="container" part="container"
            class=${classMap({ hasIcon, [variant ?? '']: !!variant })}>
        <!-- Contains the labels's icon, e.g. web-icon-alert-success. -->
        <slot name="icon" part="icon">${!this.icon ? '' : html `
          <pf-icon icon="${this.icon}"></pf-icon>`}
        </slot>
        <!-- Contains the text for the banner -->
        <slot id="text"></slot>
      </div>
    `;
    }
};
_PfBanner_slots = new WeakMap();
PfBanner.styles = [styles];
PfBanner.version = "4.3.0";
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