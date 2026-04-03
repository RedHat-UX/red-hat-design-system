import { LitElement } from 'lit';
import { ComposedEvent } from '@patternfly/pfe-core';
export declare class SecondaryNavDropdownExpandEvent extends ComposedEvent {
    expanded: boolean;
    toggle: RhNavigationSecondaryDropdown;
    constructor(expanded: boolean, toggle: RhNavigationSecondaryDropdown);
}
/**
 * Wraps a top-level nav link to add expandable dropdown menu functionality.
 * Upgrades the slotted `<a>` with `role="button"`, `aria-expanded`, and
 * `aria-controls` for accessibility. Highlights with a red top border when
 * the dropdown contains the current page (`aria-current="page"`). Keyboard:
 * Enter/Space toggles the dropdown; Tab moves through menu items; Escape
 * closes. Must contain an `<a>` in the `link` slot and an
 * `<rh-navigation-secondary-menu>` in the `menu` slot.
 *
 * @summary Expandable dropdown wrapper for secondary nav links
 *
 * @fires {SecondaryNavDropdownExpandEvent} expand-request - Fires when the dropdown link is
 *        clicked. Detail: `expanded` (boolean), `toggle` (RhNavigationSecondaryDropdown).
 *
 * @slot link - The dropdown trigger link. Expects `<a>` element.
 * @slot menu - The dropdown menu. Expects `<rh-navigation-secondary-menu>` element.
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
