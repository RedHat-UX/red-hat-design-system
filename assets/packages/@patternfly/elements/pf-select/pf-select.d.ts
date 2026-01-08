import type { Placement } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
import type { TemplateResult } from 'lit';
import { LitElement } from 'lit';
import { PfOption } from './pf-option.js';
export declare class PfSelectChangeEvent extends Event {
    constructor();
}
/**
 * A select list enables users to select one or more items from a list.
 *
 * A select component consists of a toggle control to open and close a menu of actions or links.
 * Selects differ from dropdowns in that they persist selection,
 * whereas dropdowns are typically used to present a list of actions or links.
 * @alias Select
 * @fires open - when the menu toggles open
 * @fires close - when the menu toggles closed
 */
export declare class PfSelect extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly formAssociated = true;
    static readonly shadowRootOptions: ShadowRootInit;
    /** Variant of rendered Select */
    variant: 'single' | 'checkbox' | 'typeahead' | 'typeaheadmulti';
    /** Accessible label for the select */
    accessibleLabel?: string;
    /** Accessible label for chip group used to describe chips */
    accessibleCurrentSelectionsLabel: string;
    /** Multi listbox button text */
    itemsSelectedText: string;
    /** Whether the select is disabled */
    disabled: boolean;
    /** Whether the select listbox is expanded */
    expanded: boolean;
    /**
     * Enable to flip listbox when it reaches boundary
     */
    enableFlip: boolean;
    /** Current form value */
    value?: string;
    /** Placeholder entry. Overridden by the `placeholder` slot */
    placeholder?: string;
    /**
     * Indicates initial popover position.
     * There are 6 options: `bottom`, `top`, `top-start`, `top-end`, `bottom-start`, `bottom-end`.
     * Default is `bottom`.
     */
    position: Placement;
    /** Flag indicating if selection badge should be hidden for checkbox variant,default false */
    checkboxSelectionBadgeHidden: boolean;
    private _chipGroup?;
    private _toggleInput?;
    private _toggleButton?;
    private _listbox?;
    private _listboxContainer?;
    private _placeholder?;
    /**
     * Single select option value for single select menus,
     * or array of select option values for multi select.
     */
    set selected(selected: PfOption | PfOption[]);
    get selected(): PfOption[];
    /** List of options */
    get options(): PfOption[];
    render(): TemplateResult<1>;
    private disabledChanged;
    private expandedChanged;
    private selectedChanged;
    private variantChanged;
    private valueChanged;
    private focusChips;
    /**
     * Opens the dropdown
     */
    show(): Promise<void>;
    /**
     * Closes listbox
     */
    hide(): Promise<void>;
    /**
     * toggles popup based on current state
     */
    toggle(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-select': PfSelect;
    }
}
