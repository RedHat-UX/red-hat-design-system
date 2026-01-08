var _PfLabel_instances, _PfLabel_slots, _PfLabel_onClickClose;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import '@patternfly/elements/pf-button/pf-button.js';
import { css } from "lit";
const styles = css `:host {
  position: relative;
  white-space: nowrap;
  border: 0;
}

pf-icon, ::slotted(pf-icon) {
  color: currentColor;
}

:host,
#container {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}

#container {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-width: 0;
  /** label top padding */
  padding-top: var(--pf-c-label--PaddingTop, var(--pf-global--spacer--xs, 0.25rem));
  /** label left padding */
  padding-left: var(--pf-c-label--PaddingLeft, var(--pf-global--spacer--sm, 0.5rem));
  /** label bottom padding */
  padding-bottom: var(--pf-c-label--PaddingBottom, var(--pf-global--spacer--xs, 0.25rem));
  /** label right padding */
  padding-right: var(--pf-c-label--PaddingRight, var(--pf-global--spacer--sm, 0.5rem));
  /** label font size */
  font-size: var(--pf-c-label--FontSize, var(--pf-global--FontSize--sm, 0.875rem));
  /** label text color */
  color: var(--pf-c-label--Color, var(--pf-global--Color--100, #151515));
  /** label background color */
  background-color: var(--pf-c-label--BackgroundColor, var(--pf-global--palette--black-150, #f5f5f5));
  /** label border radius */
  border-radius: var(--pf-c-label--BorderRadius, 30em);
  /** label content max width */
  max-width: var(--pf-c-label__content--MaxWidth, 100%);
  /** label content text color */
  color: var(--pf-c-label__content--Color, var(--pf-global--Color--100, #151515));

  --pf-global--icon--FontSize--sm: 14px;
}

#container::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  content: "";
  border-radius: var(--pf-c-label--BorderRadius, 30em);
  /** label content border width and color */
  border: var(--pf-c-label__content--before--BorderWidth, 1px) solid var(--pf-c-label__content--before--BorderColor, var(--pf-global--palette--black-300, #d2d2d2));
}

[part=icon] {
  display: none;
  pointer-events: none;
}

.hasIcon [part=icon] {
  display: inline-flex;
  width: 1em;
}

.compact {
  /** compact label top padding */
  --pf-c-label--PaddingTop: var(--pf-c-label--m-compact--PaddingTop, 0);
  /** compact label right padding */
  --pf-c-label--PaddingRight: var(--pf-c-label--m-compact--PaddingRight, var(--pf-global--spacer--sm, 0.5rem));
  /** compact label bottom padding */
  --pf-c-label--PaddingBottom: var(--pf-c-label--m-compact--PaddingBottom, 0);
  /** compact label left padding */
  --pf-c-label--PaddingLeft: var(--pf-c-label--m-compact--PaddingLeft, var(--pf-global--spacer--sm, 0.5rem));
  --pf-global--icon--FontSize--sm: 12px;
}

.blue {
  /** blue label content text color */
  --pf-c-label__content--Color: var(--pf-c-label--m-blue__content--Color, var(--pf-global--info-color--200, #002952));
  /** blue label background color */
  --pf-c-label--BackgroundColor: var(--pf-c-label--m-blue--BackgroundColor, var(--pf-global--palette--blue-50, #e7f1fa));
  /** blue label content border color */
  --pf-c-label__content--before--BorderColor: var(--pf-c-label--m-blue__content--before--BorderColor, var(--pf-global--palette--blue-100, #bee1f4));
}

.blue.outline {
  /** outline blue label content text color */
  --pf-c-label__content--Color: var(--pf-c-label--m-outline__content--Color, var(--pf-c-label--m-outline--m-blue__content--Color, var(--pf-global--primary-color--100, #06c)));
}

.cyan {
  /** cyan label content text color */
  --pf-c-label__content--Color: var(--pf-c-label--m-cyan__content--Color, var(--pf-global--default-color--300, #003737));
  /** cyan label background color */
  --pf-c-label--BackgroundColor: var(--pf-c-label--m-cyan--BackgroundColor, var(--pf-global--palette--cyan-50, #f2f9f9));
  /** cyan label content border color */
  --pf-c-label__content--before--BorderColor: var(--pf-c-label--m-cyan__content--before--BorderColor, var(--pf-global--palette--cyan-100, #a2d9d9));
}

.cyan.outline {
  /** outline cyan label content text color */
  --pf-c-label__content--Color: var(--pf-c-label--m-outline__content--Color, var(--pf-c-label--m-outline--m-cyan__content--Color, var(--pf-global--palette--cyan-400, #005f60)))
}

.green {
  /** green label content text color */
  --pf-c-label__content--Color: var(--pf-c-label--m-green__content--Color,var(--pf-global--success-color--200, #1e4f18));
  /** green label background color */
  --pf-c-label--BackgroundColor: var(--pf-c-label--m-green--BackgroundColor, var(--pf-global--palette--green-50, #f3faf2));
  /** green label content border color */
  --pf-c-label__content--before--BorderColor: var(--pf-c-label--m-green__content--before--BorderColor, var(--pf-global--palette--green-100, #bde5b8));
}

.green.outline{
  /** outline green label content text color */
  --pf-c-label__content--Color: var(--pf-c-label--m-outline__content--Color, var(--pf-c-label--m-outline--m-green__content--Color, var(--pf-global--success-color--100, #3e8635)))
}

.orange {
  /** orange label content text color */
  --pf-c-label__content--Color: var(--pf-c-label--m-orange__content--Color, var(--pf-global--palette--orange-700, #3b1f00));
  /** orange label background color */
  --pf-c-label--BackgroundColor: var(--pf-c-label--m-orange--BackgroundColor, var(--pf-global--palette--orange-50, #fff6ec));
  /** orange label content border color */
  --pf-c-label__content--before--BorderColor: var(--pf-c-label--m-orange__content--before--BorderColor, var(--pf-global--palette--orange-100, #f4b678));
}

.orange.outline {
  /** outline orange label content text color */
  --pf-c-label__content--Color: var(--pf-c-label--m-outline__content--Color, var(--pf-c-label--m-outline--m-orange__content--Color, var(--pf-global--palette--orange-500, #8f4700)))
}

.purple {
  /** purple label content text color */
  --pf-c-label__content--Color: var(--pf-c-label--m-purple__content--Color, var(--pf-global--palette--purple-700, #1f0066));
  /** purple label background color */
  --pf-c-label--BackgroundColor: var(--pf-c-label--m-purple--BackgroundColor, var(--pf-global--palette--purple-50, #f2f0fc));
  /** purple label content border color */
  --pf-c-label__content--before--BorderColor: var(--pf-c-label--m-purple__content--before--BorderColor, var(--pf-global--palette--purple-100, #cbc1ff));
}

.purple.outline {
  /** outline purple label content text color */
  --pf-c-label__content--Color: var(--pf-c-label--m-outline__content--Color, var(--pf-c-label--m-outline--m-purple__content--Color, var(--pf-global--palette--purple-500, #6753ac)))
}

.red {
  /** red label content text color */
  --pf-c-label__content--Color: var(--pf-c-label--m-red__content--Color, var(--pf-global--palette--red-300, #7d1007));
  /** red label background color */
  --pf-c-label--BackgroundColor: var(--pf-c-label--m-red--BackgroundColor, var(--pf-global--palette--red-50, #faeae8));
  /** red label content border color */
  --pf-c-label__content--before--BorderColor: var(--pf-c-label--m-red__content--before--BorderColor, var(--pf-global--palette--red-100, #c9190b));
}

.red.outline {
  /** outline red label content text color */
  --pf-c-label__content--Color: var(--pf-c-label--m-outline__content--Color, var(--pf-c-label--m-outline--m-red__content--Color, var(--pf-global--danger-color--100, #c9190b)))
}

.gold {
  /** gold label content text color */
  --pf-c-label__content--Color: var(--pf-c-label--m-gold__content--Color, var(--pf-global--palette--gold-700, #3d2c00));
  /** gold label background color */
  --pf-c-label--BackgroundColor: var(--pf-c-label--m-gold--BackgroundColor, var(--pf-global--palette--gold-50, #fdf7e7));
  /** gold label content border color */
  --pf-c-label__content--before--BorderColor: var(--pf-c-label--m-gold__content--before--BorderColor, var(--pf-global--palette--gold-100, #f9e0a2));
}

.gold.outline {
  /** outline gold label content text color */
  --pf-c-label__content--Color: var(--pf-c-label--m-outline__content--Color, var(--pf-c-label--m-outline--m-gold__content--Color, var(--pf-global--palette--gold-600, #795600)))
}

.outline {
  /** outline label background color */
  --pf-c-label--BackgroundColor: var(--pf-c-label--m-outline--BackgroundColor, #ffffff);
  --pf-c-label__content--before--BorderColor: var(--pf-global--palette--black-300, #d2d2d2);
}

.hasIcon [part=icon] {
  left: var(--pf-c-label--PaddingLeft, var(--pf-global--spacer--md, 1rem));
  margin-inline-end: var(--pf-c-label__icon--MarginRight, var(--pf-global--spacer--xs, 0.25rem));
}

.blue .hasIcon [part=icon] {
  /** blue label icon color */
  color: var(--pf-c-label__icon--Color, var(--pf-c-label--m-blue__icon--Color, var(--pf-global--primary-color--100, #06c)));
}

.cyan .hasIcon [part=icon] {
  /** cyan label icon color */
  color: var(--pf-c-label__icon--Color, var(--pf-c-label--m-cyan__icon--Color, var(--pf-global--default-color--200, #009596)));
}

.green .hasIcon [part=icon] {
  /** green label icon color */
  color: var(--pf-c-label__icon--Color, var(--pf-c-label--m-green__icon--Color, var(--pf-global--success-color--100, #3e8635)));
}

.orange .hasIcon [part=icon] {
  /** orange label icon color */
  color: var(--pf-c-label__icon--Color, var(--pf-c-label--m-orange__icon--Color, var(--pf-global--palette--orange-300, #ec7a08)));
}

.purple .hasIcon [part=icon] {
  /** purple label icon color */
  color: var(--pf-c-label__icon--Color, var(--pf-c-label--m-purple__icon--Color, var(--pf-global--palette--purple-500, #6753ac)));
}

.red .hasIcon [part=icon] {
  /** red label icon color */
  color: var(--pf-c-label__icon--Color, var(--pf-c-label--m-red__icon--Color, var(--pf-global--danger-color--100, #c9190b)));
}

.gold .hasIcon [part=icon] {
  /** gold label icon color */
  color: var(--pf-c-label__icon--Color, var(--pf-c-label--m-gold__icon--Color, var(--pf-global--palette--gold-400, #f0ab00)));
}

pf-button {
  --pf-c-button--FontSize: var(--pf-c-label__c-button--FontSize,
    var(--pf-global--FontSize--xs, 0.75rem));
  --pf-c-button--PaddingTop: var(--pf-c-label__c-button--PaddingTop,
    var(--pf-global--spacer--xs, 0.25rem));
  --pf-c-button--PaddingRight: var(--pf-c-label__c-button--PaddingRight,
    var(--pf-global--spacer--sm, 0.5rem));
  --pf-c-button--PaddingBottom: var(--pf-c-label__c-button--PaddingBottom,
    var(--pf-global--spacer--xs, 0.25rem));
  --pf-c-button--PaddingLeft: var(--pf-c-label__c-button--PaddingLeft,
    var(--pf-global--spacer--sm, 0.5rem));
    margin-top: var(--pf-c-label__c-button--MarginTop, -0.5rem);
    margin-right: var(--pf-c-label__c-button--MarginRight, -0.5rem);
    margin-bottom: var(--pf-c-label__c-button--MarginBottom, -0.5rem);
    margin-left: var(--pf-c-label__c-button--MarginLeft, 0.25rem);
}

svg {
  vertical-align:-0.125em;
  fill: currentColor;
  height: 1em;
  width: 1em;
}
`;
export class LabelCloseEvent extends Event {
    constructor() {
        super('close', { bubbles: true, cancelable: true });
    }
}
let PfLabel = class PfLabel extends LitElement {
    constructor() {
        super(...arguments);
        _PfLabel_instances.add(this);
        /**
         * Changes the style of the label.
         * - Filled: Colored background with colored border.
         * - Outline: White background with colored border.
         */
        this.variant = 'filled';
        /**
         * Changes the color of the label
         */
        this.color = 'grey';
        /** Flag indicating the label is compact */
        this.compact = false;
        /** Flag indicating the label text should be truncated */
        this.truncated = false;
        /** Flag indicating the label is removable */
        this.removable = false;
        /** Represents the state of the anonymous and icon slots */
        _PfLabel_slots.set(this, new SlotController(this, null, 'icon'));
    }
    render() {
        const { compact, truncated } = this;
        const { variant, color, icon } = this;
        const hasIcon = !!icon || __classPrivateFieldGet(this, _PfLabel_slots, "f").hasSlotted('icon');
        return html `
      <span id="container"
            class="${classMap({
            hasIcon,
            compact,
            truncated,
            [variant ?? '']: !!variant,
            [color ?? '']: !!color
        })}">
        <!-- slot:
               summary: Contains the labels's icon, e.g. web-icon-alert-success.
             part:
               summary: container for the label icon
        -->
        <slot name="icon" part="icon">
          <pf-icon ?hidden="${!icon}"
                   size="sm"
                   .icon="${this.icon || undefined}"></pf-icon>
        </slot>
        <!-- summary: Must contain the text for the label. -->
        <slot id="text"></slot>
        <!-- summary: container for removable labels' close button -->
        <span part="close-button" ?hidden=${!this.removable}>
          <pf-button plain
                     @click="${__classPrivateFieldGet(this, _PfLabel_instances, "m", _PfLabel_onClickClose)}"
                     label="${this.closeButtonLabel ?? 'remove'}">
            <svg viewBox="0 0 352 512">
              <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
            </svg>
          </pf-button>
        </span>
      </span>
    `;
    }
};
_PfLabel_slots = new WeakMap();
_PfLabel_instances = new WeakSet();
_PfLabel_onClickClose = function _PfLabel_onClickClose() {
    if (this.removable && this.dispatchEvent(new LabelCloseEvent())) {
        this.remove();
    }
};
PfLabel.styles = [styles];
PfLabel.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
PfLabel.version = "4.3.0";
__decorate([
    property()
], PfLabel.prototype, "variant", void 0);
__decorate([
    property()
], PfLabel.prototype, "color", void 0);
__decorate([
    property()
], PfLabel.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean })
], PfLabel.prototype, "compact", void 0);
__decorate([
    property({ type: Boolean })
], PfLabel.prototype, "truncated", void 0);
__decorate([
    property({ type: Boolean })
], PfLabel.prototype, "removable", void 0);
__decorate([
    property({ attribute: 'close-button-label' })
], PfLabel.prototype, "closeButtonLabel", void 0);
PfLabel = __decorate([
    customElement('pf-label')
], PfLabel);
export { PfLabel };
//# sourceMappingURL=pf-label.js.map