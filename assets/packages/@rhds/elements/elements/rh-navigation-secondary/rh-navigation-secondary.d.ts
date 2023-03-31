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
 * Red Hat Secondary Nav
 *
 * @summary  Connects a series of pages across web properties
 *
 * @slot logo           - Logo added to the main nav bar, expects a `<a> | <a><svg/></a> | <a><img/></a>`
 * @slot nav            - Navigation list added to the main nav bar, expects a `<ul>`
 * @slot cta            - Nav bar level CTA, expects a `<rh-cta>
 * @slot mobile-menu    - Text label for the mobile menu button, for l10n. Defaults to "Menu"
 *
 * @csspart nav         - container, <nav> element
 * @csspart container   - container, <div> element
 * @csspart cta         - container, <div> element
 *
 * @fires {SecondaryNavOverlayChangeEvent} overlay-change -
 *                                         Fires when an dropdown is opened or closed in desktop
 *                                         view or when the mobile menu button is toggled in mobile
 *                                         view.
 */
export declare class RhNavigationSecondary extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
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
     * Public API, opens a specific dropdown based on index.
     * Closes all open dropdowns before opening specified.
     * Toggles overlay to open
     */
    open(index: number): void;
    /**
     * Public API, closes all open dropdowns
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
