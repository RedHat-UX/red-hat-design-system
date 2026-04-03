import { LitElement } from 'lit';
import { ComposedEvent } from '@patternfly/pfe-core';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import '@rhds/elements/rh-surface/rh-surface.js';
import './rh-navigation-secondary-menu-section.js';
import './rh-navigation-secondary-overlay.js';
import { RhNavigationSecondaryDropdown } from './rh-navigation-secondary-dropdown.js';
export declare class SecondaryNavOverlayChangeEvent extends ComposedEvent {
    open: boolean;
    toggle: HTMLElement;
    constructor(open: boolean, toggle: HTMLElement);
}
/**
 * Persistent wayfinding navigation for linking related pages below
 * `<rh-navigation-primary>`. Provides `role="navigation"` with a
 * configurable `aria-label` and light/dark color palettes. On mobile,
 * items collapse behind a menu button. Keyboard navigation with Tab, Escape,
 * Enter/Space. Should contain `logo`, `nav` (`<ul>`), and optional
 * `cta` slots. Avoid using more then 5 nav items.
 *
 * @summary Secondary level navigation bar for linking related pages
 *
 * @alias Navigation (secondary)
 *
 * @fires {SecondaryNavOverlayChangeEvent} overlay-change - Fires when a dropdown opens/closes
 *        in desktop view or mobile menu toggles. Detail: `open` (boolean), `toggle` (HTMLElement).
 */
export declare class RhNavigationSecondary extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private static instances;
    /**
     * Controls the visual color palette of the navigation bar. Valid values:
     * `'lighter'` (default) for light environments, `'dark'` for dark
     * environments. Light-family values (`'light'`, `'lightest'`) map to
     * `'lighter'`; dark-family values (`'darker'`, `'darkest'`) map to `'dark'`.
     * Should match the surrounding page color scheme. Defaults to `'lighter'`.
     */
    colorPalette: ColorPalette;
    /**
     * Sets the `aria-label` on the internal `<nav>` element for screen readers.
     * USE a descriptive label like the product name (e.g. "OpenShift navigation").
     * Must be unique if multiple navigations exist on the page. Defaults to `'secondary'`.
     */
    accessibleLabel: string;
    /**
     * `mobileMenuExpanded` property is toggled when the mobile menu button is clicked,
     * a focusout event occurs, or on an overlay click event.  It also switches state
     * when the viewport changes breakpoints depending on if a dropdown is open or not.
     */
    private mobileMenuExpanded;
    private overlayOpen;
    /**
     * Checks if passed in element is a RhNavigationSecondaryDropdown
     * @param element possibly an rh-navigation-secondary-dropdown
     */
    static isDropdown(element: Element | null): element is RhNavigationSecondaryDropdown;
    connectedCallback(): Promise<void>;
    firstUpdated(): Promise<void>;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * Opens a specific dropdown based on index.
     * Closes all open dropdowns before opening specified.
     * Toggles overlay to open
     * @param index - index of the dropdown to open
     */
    open(index: number): void;
    /**
     * Closes all open dropdowns
     */
    close(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-navigation-secondary': RhNavigationSecondary;
    }
}
