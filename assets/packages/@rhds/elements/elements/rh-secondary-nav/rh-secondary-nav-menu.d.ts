import { LitElement } from 'lit';
import { ScreenSizeController } from '../../lib/ScreenSizeController.js';
/**
 * @summary 'A pop up menu for secondary nav, available in full-width and fixed-with sizes'
 *
 * @slot section          - Section, expects `<ul>, <ol>, <rh-secondary-nav-section>` elements, applies auto grid styles on full-width
 * @slot cta              - Menu level CTA, expects a `<rh-cta>`
 *
 * @csspart container     - container - <div> element, wrapper for menus
 * @csspart full-width    - container - <div> element, wrapper for full-width menus
 * @csspart fixed-width   - container - <div> element, wrapper for fixed-width menus
 * @csspart sections      - container - <div> element, wrapper for menu sections
 * @csspart cta           - container - <div> element, wrapper for cta
 */
export declare class RhSecondaryNavMenu extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    layout: 'fixed-width' | 'full-width';
    _container?: HTMLElement;
    /**
     * `compact` property is true when viewport `(min-width: ${tabletLandscapeBreakpoint})`.
     * Property is observed for changes, and its value is updated using matchMediaController
     * when viewport changes at breakpoint or first load of the component.
     */
    private _compact;
    /**
     * ScreenSizeController effects callback to set _compact
     */
    protected screenSize: ScreenSizeController;
    /**
     * `visible` property is false initially then when a dropdown is clicked is toggled
     */
    visible: boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-secondary-nav-menu': RhSecondaryNavMenu;
    }
}
