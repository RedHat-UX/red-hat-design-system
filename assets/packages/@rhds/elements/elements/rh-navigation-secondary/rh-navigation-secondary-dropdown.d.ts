import { LitElement } from 'lit';
import { ComposedEvent } from '@patternfly/pfe-core';
import { type ColorPalette } from '../../lib/context/color/provider.js';
export declare class SecondaryNavDropdownExpandEvent extends ComposedEvent {
    expanded: boolean;
    toggle: RhNavigationSecondaryDropdown;
    constructor(expanded: boolean, toggle: RhNavigationSecondaryDropdown);
}
/**
 * @summary A wrapper component to upgrade a top level nav link to include dropdown functionality
 *
 * @slot link   - Link for dropdown, expects `<a>`
 * @slot menu   - Menu for dropdown, expects `<rh-navigation-secondary-menu>`
 *
 * @fires { SecondaryNavDropdownExpandEvent } change - Fires when a dropdown is clicked
**/
export declare class RhNavigationSecondaryDropdown extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    _container?: HTMLElement;
    expanded: boolean;
    colorPalette: ColorPalette;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * When expanded property changes, check the new value, if true
     * run the `#open()` method, if false run the `#close()` method.
     * @param oldVal {string} - Boolean value in string form
     * @param newVal {string} - Boolean value in string form
     * @returns {void}
     */
    protected _expandedChanged(oldVal?: 'false' | 'true', newVal?: 'false' | 'true'): void;
    /**
     * When a dropdown is clicked set expanded to the opposite of the expanded property
     * and then dispatch that value in a SecondaryNavDropdownExpandEvent
     * @param event {MouseEvent}
     */
    private _clickHandler;
}
declare class RhSecondaryNavDropdown extends RhNavigationSecondaryDropdown {
    #private;
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-navigation-secondary-dropdown': RhNavigationSecondaryDropdown;
        'rh-secondary-nav-dropdown': RhSecondaryNavDropdown;
    }
}
export {};
