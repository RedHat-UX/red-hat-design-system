import { LitElement } from 'lit';
import '../rh-context-provider/rh-context-provider.js';
import './rh-secondary-nav-menu-section.js';
import type { RhSecondaryNavOverlay } from './rh-secondary-nav-overlay.js';
import { RhSecondaryNavDropdown } from './rh-secondary-nav-dropdown.js';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
export declare type NavPalette = ('lighter' | 'darker');
/**
 * Red Hat Secondary Nav
 *
 * @summary A non primary navigation bar.
 *
 * @slot logo           - Logo added to the main nav bar, expects a `<a> | <a><svg/></a> | <a><img/></a>`
 * @slot nav            - Navigation list added to the main nav bar, expects a `<ul>`
 * @slot cta            - Nav bar level CTA, expects a `<rh-cta>
 *
 * @csspart nav         - container, <nav> element
 * @csspart container   - container, <div> element
 * @csspart cta         - container, <div> element
 *
 * @fires { SecondaryNavOverlayChangeEvent } overlay-change - Fires when an dropdown is opened or closed in desktop view or when
 *                                        the mobile menu button is toggled in mobile view.
 */
export declare class RhSecondaryNav extends LitElement {
    #private;
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult[];
    /**
     * executes this.shadowRoot.querySelector('rh-secondary-nav-overlay')
     */
    _overlay: RhSecondaryNavOverlay;
    /**
     * executes this.shadowRoot.querySelector('#container')
     */
    _container?: HTMLElement;
    /**
     * executes this.shadowRoot.querySelector('nav');
     */
    _nav?: HTMLElement;
    /**
     * executes this.shadowRoot.querySelector('button')
     */
    _mobileMenuButton?: HTMLButtonElement;
    /**
     * `_compact` property is true when viewport `(min-width: ${tabletLandscapeBreakpoint})`.
     * Property is observed for changes, and its value is updated using matchMediaController
     * when viewport changes at breakpoint or first load of the component.
     */
    private _compact;
    /**
     * ScreenSizeController effects callback to set _compact
     */
    protected screenSize: ScreenSizeController;
    /**
     * `_mobileMenuExpanded` property is toggled when the mobile menu button is clicked,
     * a focusout event occurs, or on an overlay click event.  It also switches state
     * when the viewport changes breakpoints depending on if a dropdown is open or not.
     */
    private _mobileMenuExpanded;
    /**
     * Define custom attribute 'main' and watch for DOM changes of the attribute
     */
    mainNav: boolean;
    colorPalette: NavPalette;
    /**
     * If the host color-palette="lighter", the cta color context should be on="light"
     * by default.  However when the host color-palette="darker", the cta context should be
     * on="dark" when in desktop mode, but on="light" when in mobile compact mode because the cta shifts
     * to a white background in the mobile compact nav. This state property is set on firstUpdated()
     * and __compactChanged() and is used on a wrapping `<rh-context-provider>` around the cta allowing
     * it to dynamically change with viewport changes.
     */
    private _ctaColorPalette;
    /**
     * Checks if passed in element is a RhSecondaryNavDropdown
     * @param element:
     * @returns {boolean}
     */
    static isDropdown(element: Element | null): element is RhSecondaryNavDropdown;
    connectedCallback(): Promise<void>;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * Public API, opens a specific dropdown based on index.
     * Closes all open dropdowns before opening specified.
     * Toggles overlay to open
     * @param index
     * @returns {void}
     */
    open(index: number): void;
    /**
     * Public API, closes all open dropdowns
     * @returns {void}
     */
    close(): void;
    /**
     * When dropdown event is triggered gets dropdown index that triggered
     * event then closes all dropdowns.
     * If the event is to open a dropdown, run #expand(index)
     * If isMobile is set dispatch an SecondaryNavOverlayChangeEvent event
     * to open the overlay
     * @param event - {SecondaryNavDropdownExpandEvent}
     * @return {void}
     */
    private _dropdownChangeHandler;
    /**
     * Handles when focus changes outside of the navigation
     * If _compact is set, close the mobileMenu
     * Closes all dropdowns and toggles overlay to closed
     * @param event {FocusEvent}
     */
    private _focusOutHandler;
    /**
     * Handles when the overlay receives a click event
     * Closes all dropdowns and toggles overlay to closed
     * If _compact then closes mobile menu to closed
     * @param event {PointerEvent}
     */
    private _overlayClickHandler;
    /**
     * When _compact value is changed
     * Get all open navMenus
     * If _compact is true, open mobile menu
     * If _compact is false, close mobile menu and close overlay
     * @param oldVal {boolean | undefined}
     * @param newVal {boolean | undefined}
     * @returns {void}
     */
    private __compactChanged;
    /**
     * Closes dropdown menu on keydown, then places
     * focus on last button clicked
     * @param event {KeyboardEvent}
     */
    private _keyboardControls;
    /**
     * Toggles the overlay triggered by eventListener
     * @param event {SecondaryNavOverlayChangeEvent}
     */
    private _toggleNavOverlay;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-secondary-nav': RhSecondaryNav;
    }
}
