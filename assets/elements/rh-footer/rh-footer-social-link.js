import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { css } from "lit";
const style = css `:host{display:block;--pf-icon--size:var(--rh-footer--social-icon--size, var(--rh-size-icon-02, 24px))}::slotted(a){color:var(--_icon-color)!important}::slotted(a:is(:hover,:focus-within)){color:var(--_icon-color-hover)!important}`;
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
            // NB: icons are restricted to fab set, so as not to require a minor release
            // rh-icon is slated to deal with this problem in-house
            newDiv.innerHTML = `<pf-icon icon="${this.icon}" set="fab" loading="eager">${newDiv.innerHTML}</pf-icon>`;
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