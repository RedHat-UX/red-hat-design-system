import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
export { RhFooterUniversal } from './rh-footer-universal.js';
import '@rhds/elements/rh-accordion/rh-accordion.js';
import './rh-footer-links.js';
import './rh-footer-social-link.js';
import './rh-footer-block.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
/**
 * Site footer for navigation links, social icons, and legal content.
 * Use when a page needs branded footer navigation. Must slot an
 * `rh-footer-universal` in the `universal` slot and should contain
 * `rh-footer-links` groups and `rh-footer-block` sections. Uses a
 * `<footer>` landmark with `aria-labelledby` auto-wired to headers.
 * Tab navigates links. On mobile, collapses to accordion.
 *
 * @summary Site footer with navigation links, social icons, and legal content
 *
 * @cssprop --rh-footer-icon-color - Default icon color. Uses --rh-color-icon-subtle design token
 * @cssprop --rh-footer-icon-color-hover - Icon color on hover/focus. Uses --rh-color-icon-subtle-hover design token
 * @cssprop --rh-footer-border-color - Border color for section dividers. Uses --rh-color-border-subtle design token
 * @cssprop --rh-footer-accent-color - Accent color for emphasis. Uses --rh-color-accent-brand-on-light design token
 * @cssprop --rh-footer-section-side-gap - Horizontal padding for footer sections. Responsive: 16px / 32px / 64px
 * @cssprop --rh-footer-links-gap - Vertical spacing between footer link items. Defaults to --rh-space-lg
 * @cssprop --rh-footer-link-header-font-size - Font size for link column headers. Defaults to --rh-font-size-body-text-sm
 */
export declare class RhFooter extends LitElement {
    #private;
    static readonly version = "{{version}}";
    static readonly styles: CSSStyleSheet[];
    /**
     * Accessible name for the default social links list (`slot="social-links"`).
     * Applied as `accessible-label` on the inner `<rh-footer-links>`. Localize
     * surrounding words; keep "Red Hat" except in Simplified Chinese (`红帽`).
     * Override only when the accounts are not corporate Red Hat. Has no effect
     * when authors replace `header-secondary` or put social links in the
     * universal `tertiary` slot. Defaults to `'Red Hat social media links'`.
     */
    socialLinksLabel: string;
    /**
     * Isomorphic import.meta.url function
     * Requires a node.js dom shim that sets window.location
     */
    static getImportURL(relativeLocation: string | URL): string | URL;
    /**
     * Sets color palette, which affects the footer's styles and descendants'
     * color scheme. Overrides parent color context. Accepts all six palettes.
     * Surfaces collapse via `light-dark()`: domain header/main use lighter
     * (light) / darker (dark); universal uses lightest (light) / darkest (dark).
     * Defaults to undefined (inherits from parent; light on a bare page).
     * Apply `color-palette="darkest"` to keep a dark footer.
     * @see https://ux.redhat.com/theming/color-palettes/
     */
    colorPalette?: ColorPalette;
    /**
     * Sets the `href` for the logo link. Applies whether or not the `logo` slot
     * is overridden. Avoid changing this value except for a locale-specific
     * redhat.com homepage (e.g. `https://www.redhat.com/ja`). Defaults to
     * `'https://www.redhat.com/en'`.
     */
    logoHref: string;
    /**
     * Optional accessible name for the logo link. When set, applied as
     * `aria-label` on the wrapping `<a>` and overrides slotted text, SVG
     * `<title>`, or `img` `alt`. Leave unset so the slotted mark or the
     * default SVG title names the link. Defaults to `''`.
     */
    logoLabel: string;
    /**
     * ScreenSizeController effects callback to set #compact is true when viewport
     * `(min-width: ${tabletLandscapeBreakpoint})`.
     */
    protected screenSize: ScreenSizeController;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private static LISTS_SELECTOR;
    /**
     * Get any `<ul>`s that are in the designated link slots
     * and synchronously update each list and header if we need to.
     */
    updateAccessibility(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-footer': RhFooter;
    }
}
