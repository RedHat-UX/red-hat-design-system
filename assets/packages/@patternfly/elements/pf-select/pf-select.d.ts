import { LitElement, type PropertyValues } from 'lit';
import { type Placement } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
import { PfOption } from './pf-option.js';
export interface PfSelectUserOptions {
    id: string;
    value: string;
}
export declare class PfSelectChangeEvent extends Event {
    constructor();
}
/**
 * A select list enables users to select one or more items from a list.
 *
 * A select component consists of a toggle control to open and close a menu of actions or links.
 * Selects differ from dropdowns in that they persist selection,
 * whereas dropdowns are typically used to present a list of actions or links.
 * @slot - insert `pf-option` and/or `pf-option-groups` here
 * @slot placeholder - placeholder text for the select. Overrides the `placeholder` attribute.
 * @fires open - when the menu toggles open
 * @fires close - when the menu toggles closed
 */
export declare class PfSelect extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
        customElements?: CustomElementRegistry | undefined;
        registry?: CustomElementRegistry | undefined;
    };
    static readonly formAssociated = true;
    /** Variant of rendered Select */
    variant: 'single' | 'checkbox';
    /**
     * Accessible label for the select
     */
    accessibleLabel?: string;
    /**
     * Accessible label for chip group used to describe chips
     */
    accessibleCurrentSelectionsLabel: string;
    /**
     * multi listbox button text
     */
    itemsSelectedText: string;
    /**
     * whether select is disabled
     */
    disabled: boolean;
    /**
     * Whether the select listbox is expanded
     */
    expanded: boolean;
    /**
     * enable to flip listbox when it reaches boundary
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
    /**
     * Single select option value for single select menus,
     * or array of select option values for multi select.
     */
    set selected(optionsList: PfOption | PfOption[]);
    get selected(): PfOption | PfOption[] | undefined;
    /**
     * array of slotted options
     */
    get options(): PfOption[];
    private _toggle?;
    willUpdate(changed: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult<1>;
    updated(changed: PropertyValues<this>): void;
    firstUpdated(): void;
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
