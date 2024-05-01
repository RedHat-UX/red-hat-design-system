import { __decorate } from "tslib";
import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ComposedEvent } from '@patternfly/pfe-core';
import { BaseLabel } from './BaseLabel.js';
import '@patternfly/elements/pf-button/pf-button.js';
import { css } from "lit";
const styles = css `#pf-container {\n  display: contents;\n}\n\n#container {\n  --pf-global--icon--FontSize--sm: 14px;\n\n  padding-top: var(--pf-c-label--PaddingTop, var(--pf-global--spacer--xs, 0.25rem));\n  padding-left: var(--pf-c-label--PaddingLeft, var(--pf-global--spacer--sm, 0.5rem));\n  padding-bottom: var(--pf-c-label--PaddingBottom, var(--pf-global--spacer--xs, 0.25rem));\n  padding-right: var(--pf-c-label--PaddingRight, var(--pf-global--spacer--sm, 0.5rem));\n  font-size: var(--pf-c-label--FontSize, 0.875em);\n  color: var(--pf-c-label--Color, var(--pf-global--Color--100, #151515));\n  background-color: var(--pf-c-label--BackgroundColor, var(--pf-global--palette--black-150, #f5f5f5));\n  border-radius: var(--pf-c-label--BorderRadius, 30em);\n  max-width: var(--pf-c-label__content--MaxWidth, 100%);\n  color: var(--pf-c-label__content--Color, var(--pf-global--Color--100, #151515));\n}\n\n#container::before {\n  border-radius: var(--pf-c-label--BorderRadius, 30em);\n  border: var(--pf-c-label__content--before--BorderWidth, 1px) solid var(--pf-c-label__content--before--BorderColor, var(--pf-global--palette--black-300, #d2d2d2));\n}\n\n.compact {\n  --pf-c-label--PaddingTop: var(--pf-c-label--m-compact--PaddingTop, 0);\n  --pf-c-label--PaddingRight: var(--pf-c-label--m-compact--PaddingRight, var(--pf-global--spacer--sm, 0.5rem));\n  --pf-c-label--PaddingBottom: var(--pf-c-label--m-compact--PaddingBottom, 0);\n  --pf-c-label--PaddingLeft: var(--pf-c-label--m-compact--PaddingLeft, var(--pf-global--spacer--sm, 0.5rem));\n  --pf-global--icon--FontSize--sm: 12px;\n}\n\n\n.blue {\n  --pf-c-label__content--Color: var(--pf-c-label--m-blue__content--Color, var(--pf-global--info-color--200, #002952));\n  --pf-c-label--BackgroundColor: var(--pf-c-label--m-blue--BackgroundColor, var(--pf-global--palette--blue-50, #e7f1fa));\n  --pf-c-label__content--before--BorderColor: var(--pf-c-label--m-blue__content--before--BorderColor, var(--pf-global--palette--blue-100, #bee1f4));\n}\n\n.blue.outline {\n  --pf-c-label__content--Color: var(--pf-c-label--m-outline__content--Color, var(--pf-c-label--m-outline--m-blue__content--Color, var(--pf-global--primary-color--100, #06c)));\n}\n\n.cyan {\n  --pf-c-label__content--Color: var(--pf-c-label--m-cyan__content--Color, var(--pf-global--default-color--300, #003737));\n  --pf-c-label--BackgroundColor: var(--pf-c-label--m-cyan--BackgroundColor, var(--pf-global--palette--cyan-50, #f2f9f9));\n  --pf-c-label__content--before--BorderColor: var(--pf-c-label--m-cyan__content--before--BorderColor, var(--pf-global--palette--cyan-100, #a2d9d9));\n}\n\n.cyan.outline {\n  --pf-c-label__content--Color: var(--pf-c-label--m-outline__content--Color, var(--pf-c-label--m-outline--m-cyan__content--Color, var(--pf-global--palette--cyan-400, #005f60)))\n}\n\n.green {\n  --pf-c-label__content--Color: var(--pf-c-label--m-green__content--Color,var(--pf-global--success-color--200, #1e4f18));\n  --pf-c-label--BackgroundColor: var(--pf-c-label--m-green--BackgroundColor, var(--pf-global--palette--green-50, #f3faf2));\n  --pf-c-label__content--before--BorderColor: var(--pf-c-label--m-green__content--before--BorderColor, var(--pf-global--palette--green-100, #bde5b8));\n}\n\n.green.outline{\n  --pf-c-label__content--Color: var(--pf-c-label--m-outline__content--Color, var(--pf-c-label--m-outline--m-green__content--Color, var(--pf-global--success-color--100, #3e8635)))\n}\n\n.orange {\n  --pf-c-label__content--Color: var(--pf-c-label--m-orange__content--Color, var(--pf-global--palette--orange-700, #3b1f00));\n  --pf-c-label--BackgroundColor: var(--pf-c-label--m-orange--BackgroundColor, var(--pf-global--palette--orange-50, #fff6ec));\n  --pf-c-label__content--before--BorderColor: var(--pf-c-label--m-orange__content--before--BorderColor, var(--pf-global--palette--orange-100, #f4b678));\n}\n\n.orange.outline {\n  --pf-c-label__content--Color: var(--pf-c-label--m-outline__content--Color, var(--pf-c-label--m-outline--m-orange__content--Color, var(--pf-global--palette--orange-500, #8f4700)))\n}\n\n.purple {\n  --pf-c-label__content--Color: var(--pf-c-label--m-purple__content--Color, var(--pf-global--palette--purple-700, #1f0066));\n  --pf-c-label--BackgroundColor: var(--pf-c-label--m-purple--BackgroundColor, var(--pf-global--palette--purple-50, #f2f0fc));\n  --pf-c-label__content--before--BorderColor: var(--pf-c-label--m-purple__content--before--BorderColor, var(--pf-global--palette--purple-100, #cbc1ff));\n}\n\n.purple.outline {\n  --pf-c-label__content--Color: var(--pf-c-label--m-purple__content--Color, var(--pf-global--palette--purple-500, #6753ac));\n  --pf-c-label__content--Color: var(--pf-c-label--m-outline__content--Color, var(--pf-c-label--m-outline--m-purple__content--Color, var(--pf-global--palette--purple-500, #6753ac)))\n}\n\n.red {\n  --pf-c-label__content--Color: var(--pf-c-label--m-red__content--Color, var(--pf-global--palette--red-300, #7d1007));\n  --pf-c-label--BackgroundColor: var(--pf-c-label--m-red--BackgroundColor, var(--pf-global--palette--red-50, #faeae8));\n  --pf-c-label__content--before--BorderColor: var(--pf-c-label--m-red__content--before--BorderColor, var(--pf-global--palette--red-100, #c9190b));\n}\n\n.red.outline {\n  --pf-c-label__content--Color: var(--pf-c-label--m-outline__content--Color, var(--pf-c-label--m-outline--m-red__content--Color, var(--pf-global--danger-color--100, #c9190b)))\n}\n\n.gold {\n  --pf-c-label__content--Color: var(--pf-c-label--m-gold__content--Color, var(--pf-global--palette--gold-700, #3d2c00));\n  --pf-c-label--BackgroundColor: var(--pf-c-label--m-gold--BackgroundColor, var(--pf-global--palette--gold-50, #fdf7e7));\n  --pf-c-label__content--before--BorderColor: var(--pf-c-label--m-gold__content--before--BorderColor, var(--pf-global--palette--gold-100, #f9e0a2));\n}\n\n.gold.outline {\n  --pf-c-label__content--Color: var(--pf-c-label--m-outline__content--Color, var(--pf-c-label--m-outline--m-gold__content--Color, var(--pf-global--palette--gold-600, #795600)))\n}\n\n.outline {\n  --pf-c-label--BackgroundColor: var(--pf-c-label--m-outline--BackgroundColor, #ffffff);\n  --pf-c-label__content--before--BorderColor: var(--pf-global--palette--black-300, #d2d2d2);\n}\n\n.hasIcon [part=icon] {\n  left: var(--pf-c-label--PaddingLeft, var(--pf-global--spacer--md, 1rem));\n  margin-inline-end: var(--pf-c-label__icon--MarginRight, var(--pf-global--spacer--xs, 0.25rem));\n}\n\n.blue .hasIcon [part=icon] {\n  color: var(--pf-c-label__icon--Color, var(--pf-c-label--m-blue__icon--Color, var(--pf-global--primary-color--100, #06c)));\n}\n\n.cyan .hasIcon [part=icon] {\n  color: var(--pf-c-label__icon--Color, var(--pf-c-label--m-cyan__icon--Color, var(--pf-global--default-color--200, #009596)));\n}\n\n.green .hasIcon [part=icon] {\n  color: var(--pf-c-label__icon--Color, var(--pf-c-label--m-green__icon--Color, var(--pf-global--success-color--100, #3e8635)));\n}\n\n.orange .hasIcon [part=icon] {\n  color: var(--pf-c-label__icon--Color, var(--pf-c-label--m-orange__icon--Color, var(--pf-global--palette--orange-300, #ec7a08)));\n}\n\n.purple .hasIcon [part=icon] {\n  color: var(--pf-c-label__icon--Color, var(--pf-c-label--m-purple__icon--Color, var(--pf-global--palette--purple-500, #6753ac)));\n}\n\n.red .hasIcon [part=icon] {\n  color: var(--pf-c-label__icon--Color, var(--pf-c-label--m-red__icon--Color, var(--pf-global--danger-color--100, #c9190b)));\n}\n\n.gold .hasIcon [part=icon] {\n  color: var(--pf-c-label__icon--Color, var(--pf-c-label--m-gold__icon--Color, var(--pf-global--palette--gold-400, #f0ab00)));\n}\n\npf-button {\n  --pf-c-button--FontSize: var(--pf-c-label__c-button--FontSize,\n    var(--pf-global--FontSize--xs, 0.75rem));\n  --pf-c-button--PaddingTop: var(--pf-c-label__c-button--PaddingTop,\n    var(--pf-global--spacer--xs, 0.25rem));\n  --pf-c-button--PaddingRight: var(--pf-c-label__c-button--PaddingRight,\n    var(--pf-global--spacer--sm, 0.5rem));\n  --pf-c-button--PaddingBottom: var(--pf-c-label__c-button--PaddingBottom,\n    var(--pf-global--spacer--xs, 0.25rem));\n  --pf-c-button--PaddingLeft: var(--pf-c-label__c-button--PaddingLeft,\n    var(--pf-global--spacer--sm, 0.5rem));\n    margin-top: var(--pf-c-label__c-button--MarginTop, -0.5rem);\n    margin-right: var(--pf-c-label__c-button--MarginRight, -0.5rem);\n    margin-bottom: var(--pf-c-label__c-button--MarginBottom, -0.5rem);\n    margin-left: var(--pf-c-label__c-button--MarginLeft, 0.25rem);\n}\n\nsvg {\n  vertical-align:-0.125em;\n  fill: currentColor;\n  height: 1em;\n  width: 1em;\n}\n`;
/**
 * The **label** component allows users to add specific element captions for user
 * clarity and convenience.
 * @summary Allows users to display meta data in a stylized form.
 * @fires close - when a removable label's close button is clicked
 * @cssprop {<length>} --pf-c-label--FontSize   {@default `0.875em`}
 * @cssprop {<length>} --pf-c-label--PaddingTop     {@default `0.25rem`}
 * @cssprop {<length>} --pf-c-label--PaddingRight   {@default `0.5rem`}
 * @cssprop {<length>} --pf-c-label--PaddingBottom  {@default `0.25rem`}
 * @cssprop {<length>} --pf-c-label--PaddingLeft    {@default `0.5rem`}
 * @cssprop {<color>} --pf-c-label--Color           {@default `#151515`}
 * @cssprop {<color>} --pf-c-label--BackgroundColor {@default `#f5f5f5`}
 * @cssprop {<length>} --pf-c-label--BorderRadius {@default `30em`}
 * @cssprop {<length>} --pf-c-label__content--MaxWidth            {@default `100%`}
 * @cssprop {<color>} --pf-c-label__content--Color                {@default `#151515`}
 * @cssprop {<length>} --pf-c-label__content--before--BorderWidth {@default `1px`}
 * @cssprop {<color>} --pf-c-label__content--before--BorderColor  {@default `#d2d2d2`}
 * @cssprop {<color>} --pf-c-label--m-outline__content--Color  {@default `#151515`}
 * @cssprop {<color>} --pf-c-label--m-outline--BackgroundColor {@default `#ffffff`}
 * @cssprop {<color>} --pf-c-label--m-blue__content--Color                {@default `#002952`}
 * @cssprop {<color>} --pf-c-label--m-blue--BackgroundColor               {@default `#e7f1fa`}
 * @cssprop {<color>} --pf-c-label--m-blue__content--before--BorderColor  {@default `#bee1f4`}
 * @cssprop {<color>} --pf-c-label--m-outline--m-blue__content--Color      {@default `#06c`}
 * @cssprop {<color>} --pf-c-label--m-cyan__content--Color                {@default `#3b1f00`}
 * @cssprop {<color>} --pf-c-label--m-cyan--BackgroundColor               {@default `#f2f9f9`}
 * @cssprop {<color>} --pf-c-label--m-cyan__content--before--BorderColor  {@default `#a2d9d9`}
 * @cssprop {<color>} --pf-c-label--m-outline--m-cyan__content--Color      {@default `#005f60`}
 * @cssprop {<color>} --pf-c-label--m-green__content--Color                {@default `#1e4f18`}
 * @cssprop {<color>} --pf-c-label--m-green--BackgroundColor               {@default `#f3faf2`}
 * @cssprop {<color>} --pf-c-label--m-green__content--before--BorderColor  {@default `#bde5b8`}
 * @cssprop {<color>} --pf-c-label--m-outline--m-green__content--Color     {@default `#3e8635`}
 * @cssprop {<color>} --pf-c-label--m-orange__content--Color                {@default `#003737`}
 * @cssprop {<color>} --pf-c-label--m-orange--BackgroundColor               {@default `#fff6ec`}
 * @cssprop {<color>} --pf-c-label--m-orange__content--before--BorderColor  {@default `#f4b678`}
 * @cssprop {<color>} --pf-c-label--m-outline--m-orange__content--Color     {@default `#8f4700`}
 * @cssprop {<color>} --pf-c-label--m-purple__content--Color                {@default `#1f0066`}
 * @cssprop {<color>} --pf-c-label--m-purple--BackgroundColor               {@default `#f2f0fc`}
 * @cssprop {<color>} --pf-c-label--m-purple__content--before--BorderColor  {@default `#cbc1ff`}
 * @cssprop {<color>} --pf-c-label--m-outline--m-purple__content--Color     {@default `#6753ac`}
 * @cssprop {<color>} --pf-c-label--m-red__content--Color                {@default `#7d1007`}
 * @cssprop {<color>} --pf-c-label--m-red--BackgroundColor               {@default `#faeae8`}
 * @cssprop {<color>} --pf-c-label--m-red__content--before--BorderColor  {@default `#c9190b`}
 * @cssprop {<color>} --pf-c-label--m-outline--m-red__content--Color     {@default `#c9190b`}
 * @cssprop {<color>} --pf-c-label--m-gold__content--Color                {@default `#3d2c00`}
 * @cssprop {<color>} --pf-c-label--m-gold--BackgroundColor               {@default `#fdf7e7`}
 * @cssprop {<color>} --pf-c-label--m-gold__content--before--BorderColor  {@default `#f9e0a2`}
 * @cssprop {<color>} --pf-c-label--m-outline--m-gold__content--Color     {@default `#795600`}
 * @cssprop {<color>} --pf-c-label--m-blue__icon--Color {@default `#06c`}
 * @cssprop {<color>} --pf-c-label--m-cyan__icon--Color {@default `#009596`}
 * @cssprop {<color>} --pf-c-label--m-green__icon--Color {@default `#3e8635`}
 * @cssprop {<color>} --pf-c-label--m-orange__icon--Color {@default `#ec7a08`}
 * @cssprop {<color>} --pf-c-label--m-red__icon--Color {@default `#c9190b`}
 * @cssprop {<color>} --pf-c-label--m-gold__icon--Color {@default `#f0ab00`}
 * @csspart icon - container for the label icon
 * @csspart close-button - container for removable labels' close button
 * @slot icon
 *       Contains the labels's icon, e.g. web-icon-alert-success.
 * @slot
 *       Must contain the text for the label.
 * @cssprop {<length>} --pf-c-label--m-compact--PaddingTop     {@default `0`}
 * @cssprop {<length>} --pf-c-label--m-compact--PaddingRight   {@default `0.5rem`}
 * @cssprop {<length>} --pf-c-label--m-compact--PaddingBottom  {@default `0`}
 * @cssprop {<length>} --pf-c-label--m-compact--PaddingLeft    {@default `0.5rem`}
 */
let PfLabel = class PfLabel extends BaseLabel {
    constructor() {
        super(...arguments);
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
    }
    render() {
        const { compact, truncated } = this;
        return html `
      <span id="pf-container" class="${classMap({ compact, truncated })}">${super.render()}</span>
    `;
    }
    renderDefaultIcon() {
        return !this.icon ? '' : html `
      <pf-icon icon="${this.icon}" size="sm"></pf-icon>
    `;
    }
    renderSuffix() {
        return !this.removable ? '' : html `
      <span part="close-button" ?hidden=${!this.removable}>
        <pf-button plain
                    @click="${() => this.dispatchEvent(new ComposedEvent('close'))}"
                    label="${this.closeButtonLabel ?? 'remove'}">
          <svg viewBox="0 0 352 512">
            <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
          </svg>
        </pf-button>
      </span>
    `;
    }
};
PfLabel.styles = [...BaseLabel.styles, styles];
PfLabel.shadowRootOptions = {
    ...BaseLabel.shadowRootOptions,
    delegatesFocus: true,
};
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