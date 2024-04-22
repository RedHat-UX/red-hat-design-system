import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { css } from "lit";
const styles = css `#container{display:block!important;position:relative!important}::slotted(a){background-color:var(--rh-color-surface-lightest,#fff)!important;border-block-start-width:0!important;border-block-end:var(--rh-border-width-sm,1px) solid var(--rh-color-border-interactive-on-light,#0066cc)!important;border-inline-start:var(--rh-border-width-sm,1px) solid var(--rh-color-border-interactive-on-light,#0066cc)!important;border-inline-end:var(--rh-border-width-sm,1px) solid var(--rh-color-border-interactive-on-light,#0066cc)!important;border-end-start-radius:var(--rh-border-radius-default,3px)!important;border-end-end-radius:var(--rh-border-radius-default,3px)!important;clip:rect(0,0,0,0)!important;color:var(--rh-color-interactive-blue-darker,#06c)!important;font-family:var(--rh-font-family-heading, RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif)!important;font-size:var(--rh-font-size-body-text-md, 1rem)!important;font-weight:var(--rh-font-weight-heading-bold,700)!important;height:1px!important;left:50%!important;margin:-1px!important;outline:0!important;overflow:hidden!important;padding:0!important;position:absolute!important;text-decoration:none!important;top:-40px!important;transform:translateX(-50%)!important;transition:top 50ms ease-in!important;white-space:nowrap!important;width:1px!important}::slotted(a:is(:active,:focus)){border-width:var(--rh-border-width-md,2px)!important;clip:auto!important;height:auto!important;margin:0!important;overflow:visible!important;padding:var(--rh-space-lg,16px) var(--rh-space-2xl,32px)!important;top:0!important;white-space:inherit!important;width:auto!important}::slotted(a:is(:active,:hover)){text-decoration:underline!important}@media (prefers-reduced-motion:reduce){::slotted(a){transition-duration:0s!important}}`;
/**
 * A skip link is used to skip repetitive content on a page.
 * It is hidden by default and can be activated by hitting
 * the "Tab" key after loading/refreshing a page.
 *
 * @summary Skip to the main content of a page
 *
 * @slot - Place an anchor tag with an `href` that targets an ID of the main content on the page.
 */
let RhSkipLink = class RhSkipLink extends LitElement {
    render() {
        return html `
      <div id="container">
        <slot></slot>
      </div>
    `;
    }
};
RhSkipLink.shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
RhSkipLink.styles = [styles];
RhSkipLink = __decorate([
    customElement('rh-skip-link')
], RhSkipLink);
export { RhSkipLink };
//# sourceMappingURL=rh-skip-link.js.map