var _PfChip_instances, _PfChip_onClick;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import '@patternfly/elements/pf-button/pf-button.js';
import { css } from "lit";
const styles = css `:host {\n  --pf-c-chip--PaddingTop: var(--pf-global--spacer--xs, 0.25rem);\n  --pf-c-chip--PaddingRight: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-chip--PaddingBottom: var(--pf-global--spacer--xs, 0.25rem);\n  --pf-c-chip--PaddingLeft: var(--pf-global--spacer--sm, 0.5rem);\n  --pf-c-chip--BackgroundColor: var(--pf-global--Color--light-100, #fff);\n  --pf-c-chip--BorderRadius: var(--pf-global--BorderRadius--sm, 3px);\n  --pf-c-chip--before--BorderColor: var(--pf-global--BorderColor--300, #f0f0f0);\n  --pf-c-chip--before--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);\n  --pf-c-chip--before--BorderRadius: var(--pf-c-chip--BorderRadius);\n  --pf-c-chip--m-overflow__text--Color: var(--pf-global--primary-color--100, #06c);\n  --pf-c-chip--m-draggable--BackgroundColor: var(--pf-global--BackgroundColor--200, #f0f0f0);\n  --pf-c-chip--m-draggable--BoxShadow: var(--pf-global--BoxShadow--sm, 0 0.0625rem 0.125rem 0 rgba(3, 3, 3, 0.12), 0 0 0.125rem 0 rgba(3, 3, 3, 0.06));\n  --pf-c-chip--m-draggable__icon--FontSize: var(--pf-global--icon--FontSize--sm, 0.625rem);\n  --pf-c-chip__text--FontSize: var(--pf-global--FontSize--xs, 0.75rem);\n  --pf-c-chip__text--Color: var(--pf-global--Color--100, #151515);\n  --pf-c-chip__text--MaxWidth: 16ch;\n  --pf-c-chip__icon--MarginLeft: var(--pf-global--spacer--sm, 0.5rem);\n  color: var(--pf-global--Color--100, #151515);\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  min-width: 0;\n  list-style: none;\n  background-color: var(--pf-c-chip--BackgroundColor);\n  border-radius: var(--pf-c-chip--BorderRadius);\n  padding:\n\t  var(--pf-c-chip--PaddingTop)\n\t  var(--pf-c-chip--PaddingRight)\n\t  var(--pf-c-chip--PaddingBottom)\n\t  var(--pf-c-chip--PaddingLeft);\n}\n\n[hidden],\n:host([hidden]) {\n  display: none !important;\n}\n\ndiv#outer {\n  display: contents;\n}\n\n#outer:before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: "";\n  border: var(--pf-c-chip--before--BorderWidth) solid var(--pf-c-chip--before--BorderColor);\n  border-radius: var(--pf-c-chip--before--BorderRadius);\n}\n\nspan {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  position: relative;\n  max-width: var(--pf-c-chip__text--MaxWidth);\n  font-size: var(--pf-c-chip__text--FontSize);\n  color: var(--pf-c-chip__text--Color);\n}\n\n:host([readonly]) span {\n  color: var(--pf-global--Color--200, #6a6e73);\n}\n\n/* OVERFLOW */\n\nbutton#outer {\n  display: flex;\n  background: none;\n  border: 1px solid transparent;\n}\n\nbutton#outer span {\n  color: var(--pf-c-chip--m-overflow__text--Color);\n}\n\n/* CLOSE */\n\n#close-button {\n  --pf-icon--size: 12px;\n  --pf-c-button--PaddingTop: var(--pf-c-chip__c-button--PaddingTop);\n  --pf-c-button--PaddingRight: var(--pf-c-chip__c-button--PaddingRight);\n  --pf-c-button--PaddingBottom: var(--pf-c-chip__c-button--PaddingBottom);\n  --pf-c-button--PaddingLeft: var(--pf-c-chip__c-button--PaddingLeft);\n  --pf-c-button--FontSize: var(--pf-c-chip__c-button--FontSize);\n  margin-top: var(--pf-c-chip__c-button--MarginTop);\n  margin-right: var(--pf-c-chip__c-button--MarginRight);\n  margin-bottom: var(--pf-c-chip__c-button--MarginBottom);\n  inset-block-start: 0.125em;\n}\n\n::slotted(pf-badge) {\n  font-size: var(--pf-global--FontSize--xs, 12px);\n  margin: 0 0 0 var(--pf-global--spacer--xs, 0.25rem) !important;\n  min-width: unset;\n}\n`;
import shared from "./pf-chip-shared.css.js";
export class PfChipRemoveEvent extends Event {
    constructor(chip) {
        super('remove', { bubbles: true });
        this.chip = chip;
    }
}
let PfChip = class PfChip extends LitElement {
    constructor() {
        super(...arguments);
        _PfChip_instances.add(this);
        /**
         * Accessible label for close button
         */
        this.accessibleCloseLabel = 'Close';
        /**
         * Flag indicating if chip is read-only and cannot be removed
         */
        this.readonly = false;
        /**
         * Flag indicating if chip is read-only and cannot be removed
         */
        this.overflowChip = false;
    }
    render() {
        return this.overflowChip ? html `
      <button id="outer">
        <span part="text">
          <slot></slot>
        </span>
      </button>
    ` : html `
      <div id="outer">
        <span id="chip-text" part="text">
          <slot></slot>
        </span>
        <pf-button id="close-button"
                plain
                icon="close" icon-set="patternfly"
                label="${this.accessibleCloseLabel}"
                aria-describedby="chip-text"
                ?hidden="${this.readonly || this.overflowChip}"
                @click="${__classPrivateFieldGet(this, _PfChip_instances, "m", _PfChip_onClick)}"></pf-button>
      </div>
    `;
    }
};
_PfChip_instances = new WeakSet();
_PfChip_onClick = function _PfChip_onClick() {
    if (this.dispatchEvent(new PfChipRemoveEvent(this))) {
        this.remove();
    }
};
PfChip.styles = [shared, styles];
PfChip.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
PfChip.version = "4.1.0";
__decorate([
    property({ attribute: 'accessible-close-label', type: String })
], PfChip.prototype, "accessibleCloseLabel", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfChip.prototype, "readonly", void 0);
__decorate([
    property({ attribute: 'overflow-chip', reflect: true, type: Boolean })
], PfChip.prototype, "overflowChip", void 0);
PfChip = __decorate([
    customElement('pf-chip')
], PfChip);
export { PfChip };
//# sourceMappingURL=pf-chip.js.map