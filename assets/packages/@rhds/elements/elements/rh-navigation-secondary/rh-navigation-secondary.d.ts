import { LitElement } from 'lit';
import '../rh-context-provider/rh-context-provider.js';
import './rh-navigation-secondary-menu-section.js';
import './rh-navigation-secondary-overlay.js';
import { ComposedEvent } from '@patternfly/pfe-core';
import { RhNavigationSecondaryDropdown } from './rh-navigation-secondary-dropdown.js';
import { type ColorPalette } from '../../lib/context/color/provider.js';
export declare class SecondaryNavOverlayChangeEvent extends ComposedEvent {
    open: boolean;
    toggle: HTMLElement;
    constructor(open: boolean, toggle: HTMLElement);
}
export type NavPalette = Extract<ColorPalette, ('lighter' | 'dark')>;
/**
 * The Secondary navigation is used to connect a series of pages together. It displays wayfinding content and links relevant to the page it is placed on. It should be used in conjunction with the [Primary navigation](../navigation-primary).
 *
 * @summary  Connects a series of pages across web properties
 *
 * @slot logo           - Logo added to the main nav bar, expects `<a>Text</a> | <a><svg/></a> | <a><img/></a>` element
 * @slot nav            - Navigation list added to the main nav bar, expects `<ul>` element
 * @slot cta            - Nav bar level CTA, expects `<rh-cta>` element
 * @slot mobile-menu    - Text label for the mobile menu button, for l10n. Defaults to "Menu"
 *
 * @csspart nav         - container, `<nav>` element
 * @csspart container   - container, `<div>` element
 * @csspart cta         - container, `<div>` element
 *
 * @fires {SecondaryNavOverlayChangeEvent} overlay-change -
 *                                         Fires when an dropdown is opened or closed in desktop
 *                                         view or when the mobile menu button is toggled in mobile
 *                                         view.
 *
 * @cssprop {<integer>} --rh-navigation-secondary-z-index - z-index of the navigation-secondary {@default `102`}
 * @cssprop {<integer>} --rh-navigation-secondary-overlay-z-index - z-index of the navigation-secondary-overlay {@default `-1`}
 *
 * @cssprop --rh-font-family-body-text
 * @cssprop --rh-font-size-body-text-md
 * @cssprop --rh-color-text-brand-on-light
 * @cssprop --rh-color-text-primary-on-light
 * @cssprop --rh-color-text-primary-on-dark
 * @cssprop --rh-color-border-subtle-on-dark
 * @cssprop --rh-color-surface-lightest
 * @cssprop --rh-color-surface-lighter
 * @cssprop --rh-color-surface-dark
 * @cssprop --rh-color-gray-90-rgb
 * @cssprop --rh-opacity-80
 * @cssprop --rh-space-md
 * @cssprop --rh-space-lg
 * @cssprop --rh-space-2xl
 * @cssprop --rh-border-width-lg
 *
 */
export declare class RhNavigationSecondary extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    /**
     * Color palette darker | lighter (default: lighter)
     */
    colorPalette: NavPalette;
    /**
     * `mobileMenuExpanded` property is toggled when the mobile menu button is clicked,
     * a focusout event occurs, or on an overlay click event.  It also switches state
     * when the viewport changes breakpoints depending on if a dropdown is open or not.
     */
    private mobileMenuExpanded;
    private overlayOpen;
    /**
     * Checks if passed in element is a RhNavigationSecondaryDropdown
     * @param element:
     * @returns {boolean}
     */
    static isDropdown(element: Element | null): element is RhNavigationSecondaryDropdown;
    connectedCallback(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * Opens a specific dropdown based on index.
     * Closes all open dropdowns before opening specified.
     * Toggles overlay to open
     */
    open(index: number): void;
    /**
     * Closes all open dropdowns
     */
    close(): void;
}
declare class RhSecondaryNav extends RhNavigationSecondary {
    #private;
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-navigation-secondary': RhNavigationSecondary;
        'rh-secondary-nav': RhSecondaryNav;
    }
}
export {};
