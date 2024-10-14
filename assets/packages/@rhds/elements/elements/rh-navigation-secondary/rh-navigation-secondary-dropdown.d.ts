import { LitElement } from 'lit';
import { ComposedEvent } from '@patternfly/pfe-core';
export declare class SecondaryNavDropdownExpandEvent extends ComposedEvent {
    expanded: boolean;
    toggle: RhNavigationSecondaryDropdown;
    constructor(expanded: boolean, toggle: RhNavigationSecondaryDropdown);
}
/**
 * Upgrades a top level nav link to include dropdown functionality
 * @summary Upgrades a top level nav link to include dropdown functionality
 * @slot link   - Link for dropdown, expects `<a>` element
 * @slot menu   - Menu for dropdown, expects `<rh-navigation-secondary-menu>` element
 * @fires { SecondaryNavDropdownExpandEvent } change - Fires when a dropdown is clicked
 */
export declare class RhNavigationSecondaryDropdown extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    _container?: HTMLElement;
    expanded: boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * When expanded property changes, check the new value, if true
     * run the `#open()` method, if false run the `#close()` method.
     * @param oldVal {string} - Boolean value in string form
     * @param newVal {string} - Boolean value in string form
     */
    protected _expandedChanged(oldVal?: 'false' | 'true', newVal?: 'false' | 'true'): void;
    /**
     * When a dropdown is clicked set expanded to the opposite of the expanded property
     * and then dispatch that value in a SecondaryNavDropdownExpandEvent
     * @param event {MouseEvent}
     */
    private _clickHandler;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-navigation-secondary-dropdown': RhNavigationSecondaryDropdown;
    }
}
