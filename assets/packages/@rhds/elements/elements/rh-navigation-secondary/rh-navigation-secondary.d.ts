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
 * The Secondary navigation is used to connect a series of pages together. It displays wayfinding content and links relevant to the page it is placed on. It should be used in conjunction with the [primary navigation](../navigation-primary).
 *
 * @summary Propagates related content across a series of pages
 *
 * @alias Navigation (secondary)
 *
 * @fires {SecondaryNavOverlayChangeEvent} overlay-change -
 *                                         Fires when an dropdown is opened or closed in desktop
 *                                         view or when the mobile menu button is toggled in mobile
 *                                         view.
 */
export declare class RhNavigationSecondary extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private static instances;
    /**
     * Color palette dark | lighter (default: lighter)
     */
    colorPalette: ColorPalette;
    /**
     * Customize the default `aria-label` on the `<nav>` container.
     * Defaults to "secondary" if no attribute/property is set.
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
