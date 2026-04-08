import type { IconNameFor } from '@rhds/icons';
import { LitElement } from 'lit';
/**
 * Social media icon link for the footer. Authors must set
 * `accessible-label` so screen readers announce the platform name
 * via ARIA. Uses `role="listitem"` for list semantics. Tab
 * navigates between links; use `icon` or slot a custom SVG.
 *
 * @summary Single social media icon link for the footer
 */
export declare class RhFooterSocialLink extends LitElement {
    static readonly styles: CSSStyleSheet;
    /**
     * Name of the social media icon from the `social` icon set (e.g.
     * `'facebook'`, `'twitter'`, `'linkedin'`). Renders an `<rh-icon>`
     * in the default slot if no custom icon is slotted. Defaults to undefined.
     */
    icon?: IconNameFor<'social'>;
    /**
     * URL of the social media profile or page. Applied to the anchor element's
     * `href` attribute. Must be a valid URL. Defaults to undefined.
     */
    href?: string;
    /**
     * Accessible text label announced by screen readers for the social link
     * (e.g. "LinkedIn", "YouTube"). Applied as `aria-label` on the anchor.
     * Must be provided for accessibility. Defaults to undefined.
     */
    accessibleLabel?: string;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    updated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-footer-social-link': RhFooterSocialLink;
    }
}
