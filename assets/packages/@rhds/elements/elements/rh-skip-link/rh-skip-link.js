import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const styles = css `#container{display:block;z-index:1000}a#container{position:fixed}div#container{position:relative}::slotted(a),a{background-color:var(--rh-color-surface-lightest,#fff)!important;border-block-start-width:0!important;border-block-end:var(--rh-border-width-sm,1px) solid var(--rh-color-border-interactive-on-light,#06c)!important;border-inline-start:var(--rh-border-width-sm,1px) solid var(--rh-color-border-interactive-on-light,#06c)!important;border-inline-end:var(--rh-border-width-sm,1px) solid var(--rh-color-border-interactive-on-light,#06c)!important;border-end-start-radius:var(--rh-border-radius-default,3px)!important;border-end-end-radius:var(--rh-border-radius-default,3px)!important;clip:rect(0,0,0,0)!important;color:var(--rh-color-interactive-primary-default-on-light,#06c)!important;font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif)!important;font-size:var(--rh-font-size-body-text-md,1rem)!important;font-weight:var(--rh-font-weight-heading-bold,700)!important;height:1px!important;left:50%!important;margin:-1px!important;outline:0!important;overflow:hidden!important;padding:0!important;text-decoration:none!important;top:-40px!important;transform:translateX(-50%)!important;transition:top .05s ease-in!important;white-space:nowrap!important;width:1px!important}::slotted(a){position:fixed!important}::slotted(a:is(:active,:focus)),a:is(:active,:focus){border-width:var(--rh-border-width-md,2px)!important;clip:auto!important;height:auto!important;margin:0!important;overflow:visible!important;padding:var(--rh-space-lg,16px) var(--rh-space-2xl,32px)!important;top:0!important;white-space:inherit!important;width:auto!important}::slotted(a:is(:active,:hover)),a:is(:active,:hover){text-decoration:underline!important}@media (prefers-reduced-motion:reduce){::slotted(a),a{transition-duration:.001ms!important}}`;
/**
 * A skip link is used to skip repetitive content on a page.
 * It is hidden by default and can be activated by hitting
 * the "Tab" key after loading/refreshing a page.
 *
 * @summary Skip to the main content of a page
 *
 * @slot - An anchor tag targeting the main page content by id hash.
 *         Or, if the `href` attribute is set, the text of the link.
 */
let RhSkipLink = class RhSkipLink extends LitElement {
    render() {
        return this.href ?
            html `<a id="container" href="${this.href}"><slot></slot></a>`
            : html `<div id="container"><slot></slot></div>`;
    }
};
RhSkipLink.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
RhSkipLink.styles = [styles];
__decorate([
    property({ reflect: true })
], RhSkipLink.prototype, "href", void 0);
RhSkipLink = __decorate([
    customElement('rh-skip-link')
], RhSkipLink);
export { RhSkipLink };
//# sourceMappingURL=rh-skip-link.js.map