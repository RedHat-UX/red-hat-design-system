var _RhFooterSocialLink_logger;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { LitElement, html, nothing } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { css } from "lit";
const style = css `:host{display:block;--pf-icon--size:var(--rh-footer--social-icon--size, var(--rh-size-icon-02, 24px))}::slotted(a){color:var(--_icon-color)!important}::slotted(a:is(:hover,:focus-within)){color:var(--_icon-color-hover)!important}`;
let RhFooterSocialLink = class RhFooterSocialLink extends LitElement {
    constructor() {
        super(...arguments);
        _RhFooterSocialLink_logger.set(this, new Logger(this));
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'listitem');
    }
    render() {
        return html `<slot></slot>`;
    }
    updated() {
        const oldDiv = this.querySelector('a');
        if (oldDiv) {
            const newDiv = oldDiv.cloneNode(true);
            // remove the _rendered content
            newDiv.querySelectorAll('[_rendered]').forEach(i => i.remove());
            // NB: icons are restricted to fab set, so as not to require a minor release
            // rh-icon is slated to deal with this problem in-house
            newDiv.innerHTML = `<pf-icon icon="${this.icon ?? nothing}"
                                   set="fab"
                                   loading="eager">${newDiv.innerHTML}</pf-icon>`;
            // add a11y settings
            newDiv.setAttribute('aria-label', newDiv.textContent || '');
            if (!newDiv.getAttribute('aria-label')) {
                __classPrivateFieldGet(this, _RhFooterSocialLink_logger, "f").warn('Must add aria-label to links');
            }
            oldDiv.parentNode?.replaceChild(newDiv, oldDiv);
        }
    }
};
_RhFooterSocialLink_logger = new WeakMap();
RhFooterSocialLink.styles = style;
__decorate([
    property()
], RhFooterSocialLink.prototype, "icon", void 0);
RhFooterSocialLink = __decorate([
    customElement('rh-footer-social-link')
], RhFooterSocialLink);
export { RhFooterSocialLink };
//# sourceMappingURL=rh-footer-social-link.js.map