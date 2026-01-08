var _PfChip_instances, _PfChip_onClick;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import '@patternfly/elements/pf-button/pf-button.js';
import { css } from "lit";
const styles = css `:host {
  /** Top padding for chip */
  --pf-c-chip--PaddingTop: var(--pf-global--spacer--xs, 0.25rem);
  /** Right padding for chip */
  --pf-c-chip--PaddingRight: var(--pf-global--spacer--sm, 0.5rem);
  /** Bottom padding for chip */
  --pf-c-chip--PaddingBottom: var(--pf-global--spacer--xs, 0.25rem);
  /** Left padding for chip */
  --pf-c-chip--PaddingLeft: var(--pf-global--spacer--sm, 0.5rem);
  /** Background color for chip */
  --pf-c-chip--BackgroundColor: var(--pf-global--Color--light-100, #fff);
  /** Border radius for chip */
  --pf-c-chip--BorderRadius: var(--pf-global--BorderRadius--sm, 3px);
  /** Border color for chip */
  --pf-c-chip--before--BorderColor: var(--pf-global--BorderColor--300, #f0f0f0);
  /** Border width for chip */
  --pf-c-chip--before--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);
  /** Border radius for chip border (references chip border radius) */
  --pf-c-chip--before--BorderRadius: var(--pf-c-chip--BorderRadius);
  /** Text color for overflow chip */
  --pf-c-chip--m-overflow__text--Color: var(--pf-global--primary-color--100, #06c);
  /** Background color for draggable chip */
  --pf-c-chip--m-draggable--BackgroundColor: var(--pf-global--BackgroundColor--200, #f0f0f0);
  /** Box shadow for draggable chip */
  --pf-c-chip--m-draggable--BoxShadow: var(--pf-global--BoxShadow--sm, 0 0.0625rem 0.125rem 0 rgba(3, 3, 3, 0.12), 0 0 0.125rem 0 rgba(3, 3, 3, 0.06));
  /** Font size for draggable chip icon */
  --pf-c-chip--m-draggable__icon--FontSize: var(--pf-global--icon--FontSize--sm, 0.625rem);
  /** Font size for chip text */
  --pf-c-chip__text--FontSize: var(--pf-global--FontSize--xs, 0.75rem);
  /** Color for chip text */
  --pf-c-chip__text--Color: var(--pf-global--Color--100, #151515);
  /** Maximum width for chip text */
  --pf-c-chip__text--MaxWidth: 16ch;
  /** Left margin for chip icon */
  --pf-c-chip__icon--MarginLeft: var(--pf-global--spacer--sm, 0.5rem);
  color: var(--pf-global--Color--100, #151515);
  position: relative;
  display: inline-flex;
  align-items: center;
  min-width: 0;
  list-style: none;
  /** Background color of chip */
  background-color: var(--pf-c-chip--BackgroundColor);
  /** Border radius of chip */
  border-radius: var(--pf-c-chip--BorderRadius);
  padding:
\t  var(--pf-c-chip--PaddingTop)
\t  var(--pf-c-chip--PaddingRight)
\t  var(--pf-c-chip--PaddingBottom)
\t  var(--pf-c-chip--PaddingLeft);
}

[hidden],
:host([hidden]) {
  display: none !important;
}

div#outer {
  display: contents;
}

#outer:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: "";
  border:
    /** Border width */
    var(--pf-c-chip--before--BorderWidth)
    solid
    /** Border color */
    var(--pf-c-chip--before--BorderColor);
  /** Border radius of chip border */
  border-radius: var(--pf-c-chip--before--BorderRadius);
}

span {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  /** Maximum width of chip text */
  max-width: var(--pf-c-chip__text--MaxWidth);
  /** Font size of chip text */
  font-size: var(--pf-c-chip__text--FontSize);
  /** Color of chip text */
  color: var(--pf-c-chip__text--Color);
}

:host([readonly]) span {
  color: var(--pf-global--Color--200, #6a6e73);
}

/* OVERFLOW */

button#outer {
  display: flex;
  background: none;
  border: 1px solid transparent;
}

button#outer span {
  /** Color for overflow chip text */
  color: var(--pf-c-chip--m-overflow__text--Color);
}

/* CLOSE */

#close-button {
  --pf-icon--size: 12px;
  --pf-c-button--PaddingTop: var(--pf-c-chip__c-button--PaddingTop);
  --pf-c-button--PaddingRight: var(--pf-c-chip__c-button--PaddingRight);
  --pf-c-button--PaddingBottom: var(--pf-c-chip__c-button--PaddingBottom);
  --pf-c-button--PaddingLeft: var(--pf-c-chip__c-button--PaddingLeft);
  --pf-c-button--FontSize: var(--pf-c-chip__c-button--FontSize);
  margin-top: var(--pf-c-chip__c-button--MarginTop);
  margin-right: var(--pf-c-chip__c-button--MarginRight);
  margin-bottom: var(--pf-c-chip__c-button--MarginBottom);
  inset-block-start: 0.125em;
}

::slotted(pf-badge) {
  font-size: var(--pf-global--FontSize--xs, 12px);
  margin: 0 0 0 var(--pf-global--spacer--xs, 0.25rem) !important;
  min-width: unset;
}
`;
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
        <!-- container for chip text -->
        <span part="text">
          <!-- chip text -->
          <slot></slot>
        </span>
      </button>
    ` : html `
      <div id="outer">
        <!-- container for chip text -->
        <span id="chip-text" part="text">
          <!-- chip text -->
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
PfChip.version = "4.3.0";
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