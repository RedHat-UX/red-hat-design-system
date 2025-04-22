import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import './rh-navigation-primary-overlay.js';
import '@rhds/elements/rh-icon/rh-icon.js';
export type NavigationPrimaryPalette = Extract<ColorPalette, ('lightest' | 'darkest')>;
/**
 * The Primary navigation is a container of menus and utilities, it allows
 * visitors to orient themselves and move through a website. It is persistent on
 * every page to ensure a consistent user experience across websites.
 *
 * @summary       Primary navigation
 * @slot          - Use this slot for `<rh-primary-navigation-item>` hamburger menu links and dropdowns
 * @slot          logo -
 *                Use this slot to override the link and logo image for translations and sub sites.
 * @slot          event -
 *                Use this slot for event promotion.  Images such as SVGs and links are most often slotted here.
 *                Slot these items using the `<rh-navigation-primary-item slot="event">` element.
 * @slot          links -
 *                Use this slot for quick links to other sites not directly associated with the page the
 *                navigation is on.  Common use cases are developers docs and support. Slot these items using
 *                the `<rh-navigation-primary-item slot="links">` element.
 * @slot          dropdowns -
 *                Use this slot for search, for you, and account dropdowns. Slot these items using the
 *                `<rh-navigation-primary-item slot="dropdown" variant="dropdown">` element.
 * @cssprop       [--rh-navigation-primary-z-index, 102]
 *                The initial z-index for the primary navigation element, default is 102.
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
    private _overlayOpen;
    private _hamburger;
    /**
     * Sets the mobile toggle (hamburger) text, used for translations, defaults to 'Menu'
     */
    mobileToggleLabel: string;
    /** Sets color context for child components, overrides parent context */
    colorPalette?: NavigationPrimaryPalette;
    /**
     * Customize the default `aria-label` on the `<nav>` container.
     * Defaults to "main" if no attribute/property is set.
     */
    accessibleLabel: string;
    static focusableChildElements(parent: HTMLElement): NodeListOf<HTMLElement>;
    constructor();
    protected firstUpdated(): void;
    connectedCallback(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
    protected compactChanged(oldVal: boolean, newVal: boolean): void;
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
