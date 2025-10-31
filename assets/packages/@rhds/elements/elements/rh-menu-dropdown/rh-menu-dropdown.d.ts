import { LitElement, type TemplateResult } from 'lit';
import '@rhds/elements/rh-button/rh-button.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-menu/rh-menu.js';
import { RhMenuItem } from '../rh-menu/rh-menu-item.js';
/** Fired when a user selects an action or link from the menu */
export declare class MenuDropdownSelectEvent extends Event {
    selectedItem: RhMenuItem;
    text: string;
    constructor(selectedItem: RhMenuItem, text: string);
}
/**
 * A menu dropdown presents a list of actions or links in a vertically stacked menu,
 * appearing when a user interacts with a toggle button.
 *
 * @summary A collapsible menu for presenting a list of options or actions
 *
 * @alias menu-dropdown
 */
export declare class RhMenuDropdown extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private static instances;
    /**
     * whether the dropdown is currently open.
     */
    open: boolean;
    /**
     * Defines the visual style of the dropdown.
     * Setting it to 'borderless' removes the default border styling.
     */
    variant?: 'borderless';
    /**
     * The 'compact' layout reduces spacing and add the rh-icon `ellipsis-vertical-fill`.
     */
    layout?: 'compact';
    /**
     * Disables user interaction with the dropdown. When true, the dropdown cannot
     * be opened or interacted with, and appears visually disabled.
     */
    disabled: boolean;
    /**
     * Provides an accessible name for the dropdown's trigger, improving screen reader support.
     * This label is announced to assistive technologies to describe the purpose of
     * the compact menu dropdown.
    */
    accessibleLabel: string;
    menuToggleButton: HTMLElement;
    menuList: HTMLElement;
    slotElement: NodeListOf<HTMLSlotElement>;
    static readonly shadowRootOptions: ShadowRootInit;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    /**
    * Moves focus to the currently active (focused) item.
    */
    focus(): void;
    render(): TemplateResult<1>;
    get items(): HTMLElement[];
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-menu-dropdown': RhMenuDropdown;
    }
}
