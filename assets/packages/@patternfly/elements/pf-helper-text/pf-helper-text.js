var _PfHelperText_slots;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
import { css } from "lit";
const styles = css `:host {
  display: flex;
  align-items: center;
  gap: var(--pf-c-helper-text--Gap, 0.25rem);
  font-size: var(--pf-c-helper-text--FontSize, 0.875rem);
  color: var(--pf-c-helper-text__item-text--Color, #151515);
  line-height: 1.4;
}

/* Color variants */
:host([variant='indeterminate']) {
  color: var(--pf-c-helper-text__item-text--m-indeterminate--Color, #6a6e73);
}

:host([variant='warning']) {
  color: var(--pf-c-helper-text__item-text--m-warning--Color, #795600);
}

:host([variant='success']) {
  color: var(--pf-c-helper-text__item-text--m-success--Color, #1e4f18);
}

:host([variant='error']) {
  color: var(--pf-c-helper-text__item-text--m-error--Color, #a30000);
}

::slotted(ul) {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

pf-icon {
  fill: currentColor;
}
`;
/** Map of status to default icons (Font Awesome solid set). */
const StatusIconMap = {
    success: 'check-circle',
    warning: 'exclamation-triangle',
    error: 'exclamation-circle',
    indeterminate: 'info-circle',
};
let PfHelperText = class PfHelperText extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Defines the helper text status and its corresponding color and icon.
         */
        this.variant = 'default';
        _PfHelperText_slots.set(this, new SlotController(this, 'icon', null));
    }
    /**
     * Determine the effective icon to display.
     */
    get _resolvedIcon() {
        if (this.icon) {
            return this.icon;
        }
        if (this.variant !== 'default') {
            return StatusIconMap[this.variant];
        }
        return undefined;
    }
    render() {
        const iconName = this._resolvedIcon;
        const showIcon = !!this.icon || __classPrivateFieldGet(this, _PfHelperText_slots, "f").hasSlotted('icon');
        return html `
      <span id="icon" ?hidden="${!showIcon}">
        <slot name="icon">
          <pf-icon icon="${iconName}"
                   set="${ifDefined(this.iconSet)}"
                   role="presentation"></pf-icon>
        </slot>
      </span>
      <span id="text" aria-live="polite">
        <slot></slot>
      </span>
    `;
    }
};
_PfHelperText_slots = new WeakMap();
PfHelperText.styles = [styles];
PfHelperText.version = "4.3.0";
__decorate([
    property({ reflect: true })
], PfHelperText.prototype, "variant", void 0);
__decorate([
    property()
], PfHelperText.prototype, "icon", void 0);
__decorate([
    property({ attribute: 'icon-set' })
], PfHelperText.prototype, "iconSet", void 0);
PfHelperText = __decorate([
    customElement('pf-helper-text')
], PfHelperText);
export { PfHelperText };
//# sourceMappingURL=pf-helper-text.js.map