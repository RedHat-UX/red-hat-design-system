import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import './rh-footer-copyright.js';
/**
 * Global Red Hat footer bar for consistent branding across all
 * properties. Authors must not customize content per-site. The
 * `secondary-start` slot should contain `<rh-footer-copyright>`.
 * Renders a `<footer>` with ARIA landmark semantics and a
 * visually-hidden `<h2>` so screen readers can identify the region.
 * Tab navigates link groups.
 *
 * @summary Global Red Hat universal footer with logo, links, and copyright
 * @alias footer-universal
 */
export declare class RhFooterUniversal extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Color palette for the universal footer. Defaults to `'darker'`.
     * Valid values: `'lighter'`, `'light'`, `'dark'`, `'darker'`, `'darkest'`.
     * The universal footer typically renders on the darkest surface.
     */
    colorPalette: ColorPalette;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-footer-universal': RhFooterUniversal;
    }
}
