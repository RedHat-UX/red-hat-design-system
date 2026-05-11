import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import '@rhds/elements/rh-icon/rh-icon.js';
export type NavigationPrimaryPalette = Extract<ColorPalette, ('lightest' | 'darkest')>;
/**
 * Primary navigation provides a persistent bar for orienting users and
 * navigating across websites and domains. It groups primary links,
 * dropdown menus, event promotions, and utility actions into a single
 * responsive bar. There must not be more than one on a page. The element
 * uses the ARIA `navigation` landmark role and should have a unique
 * `accessible-label` when multiple navigation landmarks exist on the page,
 * so screen readers can distinguish between them. Keyboard users navigate
 * items with Tab/Shift+Tab and close open dropdowns with Escape.
 *
 * @summary Persistent bar for orienting users and navigating across sites
 *
 * @alias Navigation (primary)
 *
 */
export declare class RhNavigationPrimary extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * We should start in compact mode (mobile first)
     * Later, after the element has fully hydrated, we can recompute
     * whether to use the compact layout based on the viewport
     * @internal
     */
    compact: boolean;
    linksCompact: boolean;
    private _overlayOpen;
    private _hamburgerOpen;
    private _linksMenuOpen;
    private _hamburger;
    private _linksMenu;
    private _hamburgerSummary;
    private _linksMenuSummary;
    private _title;
    /**
     * Accessible label for the mobile hamburger toggle. Must be set when the
     * navigation is served in a non-English locale. Defaults to `'Menu'`.
     */
    mobileToggleLabel: string;
    /**
     * Accessible label for the mobile links (bento box) toggle. Must be set
     * when the navigation is served in a non-English locale. Defaults to
     * `'Explore Red Hat'`.
     */
    mobileLinksToggleLabel: string;
    /**
     * Sets the color palette for the navigation and its child components.
     * Should only use `lightest` or `darkest` to match the page theme.
     * Defaults to `undefined` (inherits from the page color scheme).
     * Should not be set when user's color-scheme preference is respected.
     */
    colorPalette?: NavigationPrimaryPalette;
    /**
     * Accessible label applied to the navigation landmark. Must be set when the
     * navigation is served in a non-English locale, and should be set when the
     * page contains multiple navigation landmarks, to provide unique identification
     * for assistive technology. Defaults to `'Main navigation'`.
     */
    accessibleLabel: string;
    /**
     * Sets the visible sub-domain title displayed beside the Red Hat logo
     * lockup. Both `site-name` and `site-href` must be set to enable the
     * sub-domain variation; when either is missing the sub-domain area is
     * hidden. Defaults to `undefined`.
     */
    siteName?: string;
    /**
     * Sets the URL for the sub-domain title link. Both `site-href` and
     * `site-name` must be set to enable the sub-domain variation; when
     * either is missing the sub-domain area is hidden. Defaults to
     * `undefined`.
     */
    siteHref?: string;
    /**
     * Sets the `href` for the default logo link. Avoid changing this value
     * unless the site requires a non-root landing page for the logo. Defaults
     * to `'/'`.
     */
    logoHref: string;
    constructor();
    protected firstUpdated(): void;
    connectedCallback(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
    protected compactChanged(oldVal: boolean, newVal: boolean): void;
    protected linksCompactChanged(oldVal: boolean, newVal: boolean): void;
    /**
     * Close Menus
     * @param skip Boolean - closes hamburger menu if true and in a small viewport, default false;
     */
    close(skip?: boolean): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-navigation-primary': RhNavigationPrimary;
    }
}
