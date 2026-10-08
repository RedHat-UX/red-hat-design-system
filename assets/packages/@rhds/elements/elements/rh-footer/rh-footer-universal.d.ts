import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import './rh-footer-copyright.js';
import '@rhds/elements/rh-icon/rh-icon.js';
/** Default Red Hat homepage URL for the logo link and empty `logo-href` fallback. */
export declare const DEFAULT_LOGO_HREF = "https://www.redhat.com/en";
/**
 * Global Red Hat footer bar for consistent branding across all
 * properties. Authors must not customize content per-site. The
 * `secondary-start` slot should contain `<rh-footer-copyright>`.
 * Renders a `<footer>` with ARIA landmark semantics and a
 * visually-hidden `<h2>` so screen readers can identify the region.
 * Tab navigates link groups.
 *
 * @summary Global Red Hat universal footer with logo, links, and copyright
 */
export declare class RhFooterUniversal extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Sets color palette, which affects the universal footer's styles and
     * descendants' color scheme. Overrides parent color context. Accepts all
     * six palettes. Surfaces collapse via `light-dark()` to lightest (light)
     * / darkest (dark). Defaults to undefined so a nested universal footer
     * inherits from `<rh-footer>`. Standalone use may set the attribute.
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
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-footer-universal': RhFooterUniversal;
    }
}
