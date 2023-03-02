import { __decorate } from "tslib";
import { html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { BaseLabel } from '@patternfly/elements/pf-label/BaseLabel.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
import { css } from "lit";
const styles = css `:host{display:contents}#container{display:inline-flex;align-items:center;position:relative;padding:var(--rh-tag-padding-block-start,var(--rh-space-xs,4px)) var(--rh-tag-padding-inline-end,var(--rh-space-md,8px)) var(--rh-tag-padding-block-end,var(--rh-space-xs,4px)) var(--rh-tag-padding-inline-start,var(--rh-space-md,8px));font-size:var(--rh-font-size-body-text-sm, .875rem);background-color:var(--_background-color);border:0;border-radius:var(--rh-border-radius-pill,64px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;color:var(--_content-color);border-width:0;--_content-color:var(--rh-color-black-900, #151515);--_before-border-color:var(--rh-color-black-300, #d2d2d2);--_background-color:var(--rh-color-surface-lighter, #f5f5f5);--_icon-color:currentcolor}#container:before{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;content:"";border-radius:var(--rh-border-radius-pill,64px);border:var(--rh-border-width-sm,1px) solid var(--_before-border-color)}#container.blue{--_content-color:var(--rh-color-blue-600, #002952);--_background-color:var(--rh-color-blue-50, #e7f1fa);--_before-border-color:var(--rh-color-blue-100, #bee1f4);--_icon-color:var(--rh-color-accent-base-on-light, #0066cc)}#container.cyan{--_content-color:var(--rh-color-cyan-500, #003737);--_background-color:var(--rh-color-cyan-50, #f2f9f9);--_before-border-color:var(--rh-color-cyan-100, #a2d9d9);--_icon-color:var(--rh-color-cyan-300, #009596)}#container.green{--_content-color:var(--rh-color-green-600, #1e4f18);--_background-color:var(--rh-color-green-50, #f3faf2);--_before-border-color:var(--rh-color-green-100, #bde5b8);--_icon-color:var(--rh-color-green-500, #3e8635)}#container.orange{--_content-color:var(--rh-color-orange-700, #3b1f00);--_background-color:var(--rh-color-orange-50, #fff6ec);--_before-border-color:var(--rh-color-orange-100, #f4b678);--_icon-color:var(--rh-color-orange-300, #ec7a08)}#container.purple{--_content-color:var(--rh-color-purple-700, #1f0066);--_background-color:var(--rh-color-purple-50, #f2f0fc);--_before-border-color:var(--rh-color-purple-100, #cbc1ff);--_icon-color:var(--rh-color-purple-500, #6753ac)}#container.red{--_content-color:var(--rh-color-red-800, #5f0000);--_background-color:var(--rh-color-red-50, #faeae8);--_before-border-color:var(--rh-color-red-600, #be0000);--_icon-color:var(--rh-color-red-600, #be0000)}[part=icon]{display:none;pointer-events:none;font-size:.875rem;color:var(--_icon-color);margin-inline-end:var(--rh-tag-margin-inline-end,var(--rh-space-xs,4px));--pf-icon--size:0.875rem}.hasIcon [part=icon]{display:inline-flex;align-items:center}`;
/**
 * Tooltip
 * @slot icon - Contains the labels's icon, e.g. web-icon-alert-success.
 * @slot -  Must contain the text for the label.
 *
 * @csspart icon - container for the label icon
 *
 * @cssprop {<length>} --rh-tag-padding-block-start   {@default `4px`}
 * @cssprop {<length>} --rh-tag-padding-inline-end    {@default `8px`}
 * @cssprop {<length>} --rh-tag-padding-block-end     {@default `4px`}
 * @cssprop {<length>} --rh-tag-padding-inline-start  {@default `8px`}
 *
 * @cssprop {<length>} --rh-tag-margin-inline-end     {@default `4px`}
 *
 *
 */
let RhTag = class RhTag extends BaseLabel {
    /**
     * RhIcon does not yet exist, so we are using pfe-icon until available
     * <rh-icon ?hidden=${!this.icon} icon=${this.icon} set="${this.set}" size="sm"></rh-icon>
     */
    renderDefaultIcon() {
        return !this.icon ? '' : html `
      <pf-icon ?hidden=${!this.icon} icon="${this.icon}"></pf-icon>
    `;
    }
    renderSuffix() {
        return html ``;
    }
};
RhTag.styles = [styles];
__decorate([
    property()
], RhTag.prototype, "icon", void 0);
__decorate([
    property()
], RhTag.prototype, "variant", void 0);
__decorate([
    property()
], RhTag.prototype, "color", void 0);
RhTag = __decorate([
    customElement('rh-tag')
], RhTag);
export { RhTag };
//# sourceMappingURL=rh-tag.js.map