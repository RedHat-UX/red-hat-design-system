import { __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { css } from "lit";
const style = css `:host{display:block;--rh-icon-size:var(--rh-footer--social-icon--size,var(--rh-size-icon-02,24px))}[hidden]{display:none!important}::slotted(a),a{color:var(--_icon-color)!important}::slotted(a:is(:hover,:focus-within)),a:is(:hover,:focus-within){color:var(--_icon-color-hover)!important}`;
/**
 * Social media links for Red Hat Footer
 */
let RhFooterSocialLink = class RhFooterSocialLink extends LitElement {
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'listitem');
    }
    render() {
        return html `
      <a href="${ifDefined(this.href)}" aria-label="${ifDefined(this.accessibleLabel)}">
        <!-- Optional icon for social link. Use only when suitable icon is unavailable with \`<rh-icon>\` -->
        <slot>${this.icon ? html `<rh-icon set="social" icon="${this.icon}"></rh-icon>` : ''}</slot>
      </a>
    `;
    }
    updated() {
        let oldDiv;
        if (!isServer && (oldDiv = this.querySelector('a'))) {
            const newDiv = oldDiv.cloneNode(true);
            // remove the _rendered content
            newDiv.querySelectorAll('[_rendered]').forEach(i => i.remove());
            // NB: icons are restricted to social set, so as not to require a minor release
            // rh-icon is slated to deal with this problem in-house
            newDiv.innerHTML =
                `<rh-icon icon="${this.icon ?? ''}" set="social" loading="eager">${newDiv.innerHTML}</rh-icon>`;
            // add a11y settings
            newDiv.setAttribute('aria-label', newDiv.textContent || '');
            oldDiv.parentNode?.replaceChild(newDiv, oldDiv);
        }
    }
};
RhFooterSocialLink.styles = style;
__decorate([
    property()
], RhFooterSocialLink.prototype, "icon", void 0);
__decorate([
    property()
], RhFooterSocialLink.prototype, "href", void 0);
__decorate([
    property({ attribute: 'accessible-label' })
], RhFooterSocialLink.prototype, "accessibleLabel", void 0);
RhFooterSocialLink = __decorate([
    customElement('rh-footer-social-link')
], RhFooterSocialLink);
export { RhFooterSocialLink };
//# sourceMappingURL=rh-footer-social-link.js.map