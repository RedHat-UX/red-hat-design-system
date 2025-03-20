var _RhFooterSocialLink_logger;
import { __classPrivateFieldGet } from "tslib";
import { LitElement, html } from 'lit';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { css } from "lit";
const style = css `:host{display:block;--rh-icon-size:var(--rh-footer--social-icon--size,var(--rh-size-icon-02,24px))}[hidden]{display:none!important}::slotted(a){color:var(--_icon-color)!important}::slotted(a:is(:hover,:focus-within)){color:var(--_icon-color-hover)!important}`;
/**
 * Displays a linked icon to a social media property
 * @summary Displays a linked icon to a social media property
 * @slot    - Add an anchor tag linking to a social media property
*/
export class RhFooterSocialLink extends LitElement {
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
            // NB: icons are restricted to social set, so as not to require a minor release
            // rh-icon is slated to deal with this problem in-house
            newDiv.innerHTML =
                `<rh-icon icon="${this.icon ?? ''}" set="social" loading="eager">${newDiv.innerHTML}</rh-icon>`;
            // add a11y settings
            newDiv.setAttribute('aria-label', newDiv.textContent || '');
            if (!newDiv.getAttribute('aria-label')) {
                __classPrivateFieldGet(this, _RhFooterSocialLink_logger, "f").warn('Must add aria-label to links');
            }
            oldDiv.parentNode?.replaceChild(newDiv, oldDiv);
        }
    }
}
_RhFooterSocialLink_logger = new WeakMap();
RhFooterSocialLink.properties = {
    icon: {}
};
RhFooterSocialLink.styles = style;
customElements.define("rh-footer-social-link", RhFooterSocialLink);
//# sourceMappingURL=rh-footer-social-link.js.map