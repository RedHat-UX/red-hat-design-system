import type { Placement } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
import type { TemplateResult } from 'lit';
import { LitElement } from 'lit';
import { PfOption } from '../pf-select/pf-option.js';
/** Fired when a `<pf-search-input>` element's value changes */
export declare class PfSearchChangeEvent extends Event {
    constructor();
}
/**
 * A search input lets users type in words to find specific items or information.
 * As they type, it can show matching results to help them quickly find what they are looking for.
 *
 * A search input consists of a text field where users can type to find specific content or items.
 * Unlike selects or dropdowns, which offer predefined options, a search input lets users enter
 * their own keywords to filter or locate results. It includes a clear (×) button to easily
 * remove the current input, allowing users to start a new search quickly.
 *
 * @summary Allows users to search through a list for specific search terms
 * @alias Search Input
 *
 * @fires open - when the menu toggles open
 * @fires close - when the menu toggles closed
 */
export declare class PfSearchInput extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly formAssociated = true;
    static readonly shadowRootOptions: ShadowRootInit;
    /** Accessible label for the search input */
    accessibleLabel?: string;
    /** Whether the search input is disabled */
    disabled: boolean;
    /** Whether the search input's listbox is expanded */
    expanded: boolean;
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
    private _toggleInput?;
    private _toggleButton?;
    private _listbox?;
    private _listboxContainer?;
    private _placeholder?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /** List of options */
    get options(): PfOption[];
    render(): TemplateResult<1>;
    private disabledChanged;
    private expandedChanged;
    private valueChanged;
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
        'pf-search-input': PfSearchInput;
    }
}
