import { __decorate } from "tslib";
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseLabel } from '@patternfly/pfe-label/BaseLabel.js';
import '@patternfly/pfe-icon';
import styles from "./rh-tag.css.js";
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
      <pfe-icon ?hidden=${!this.icon} icon="${this.icon}"></pfe-icon>
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