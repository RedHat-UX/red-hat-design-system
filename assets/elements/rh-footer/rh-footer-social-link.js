import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import style from "./rh-footer-social-link.css.js";
let RhFooterSocialLink = class RhFooterSocialLink extends LitElement {
    constructor() {
        super();
        this.logger = new Logger(this);
        this.icon = null;
        this.setAttribute('role', 'listitem');
    }
    render() {
        return html `<slot></slot>`;
    }
    updated() {
        this.updateLightdom();
    }
    updateLightdom() {
        const oldDiv = this.querySelector('a');
        if (oldDiv) {
            const newDiv = oldDiv.cloneNode(true);
            // remove the _rendered content
            newDiv.querySelectorAll('[_rendered]').forEach(i => i.remove());
            newDiv.innerHTML = `<pfe-icon icon="${this.icon}">${newDiv.innerHTML}</pfe-icon>`;
            // add a11y settings
            /** @todo add logging that warns the user there is an empty label */
            newDiv.setAttribute('aria-label', newDiv.textContent || '');
            if (!newDiv.getAttribute('aria-label')) {
                this.logger.warn('Must add aria-label to links');
            }
            if (oldDiv.parentNode) {
                oldDiv.parentNode.replaceChild(newDiv, oldDiv);
            }
        }
    }
};
RhFooterSocialLink.styles = style;
__decorate([
    property()
], RhFooterSocialLink.prototype, "icon", void 0);
RhFooterSocialLink = __decorate([
    customElement('rh-footer-social-link')
], RhFooterSocialLink);
export { RhFooterSocialLink };
//# sourceMappingURL=rh-footer-social-link.js.map