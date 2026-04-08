import { LitElement } from 'lit';
export { RhFooterUniversal } from './rh-footer-universal.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-accordion/rh-accordion.js';
import './rh-footer-social-link.js';
import './rh-footer-links.js';
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
 * @alias footer
 *
 * @cssprop --rh-footer-nojs-min-height - Minimum height when JavaScript is disabled. @deprecated target `rh-footer:not(:defined)` directly
 * @cssprop --rh-footer-icon-color - Default icon color. Uses --rh-color-gray-40 design token
 * @cssprop --rh-footer-icon-color-hover - Icon color on hover/focus. Uses --rh-color-gray-30 design token
 * @cssprop --rh-footer-border-color - Border color for section dividers. Uses --rh-color-border-subtle-on-dark design token
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
     * Isomorphic import.meta.url function
     * Requires a node.js dom shim that sets window.location
     */
    static getImportURL(relativeLocation: string | URL): string | URL;
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
