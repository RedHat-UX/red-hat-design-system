import { LitElement } from 'lit';
import { RhOption } from './rh-option.js';
import './rh-option-group.js';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * Event type for the `change` event from rh-select. The select shall dispatch
 * this event when the selected value changes (e.g. after the user picks an
 * option or the value is updated programmatically). The event shall bubble and
 * provides no `detail` payload; listeners should read the new value from the
 * select's `value` property. Consumers must use this class when they need to
 * construct a synthetic change event.
 * @summary Event fired when the select value changes
 */
export declare class RhSelectChangeEvent extends Event {
    constructor();
}
/**
 * A select element allows users to Select from an expandable list.
 * @summary A control that provides a menu of options
 * @fires {Event} open - Fires when the dropdown listbox opens. Does not bubble. The event has no `detail` payload.
 * @fires {Event} close - Fires when the dropdown listbox closes. Does not bubble. The event has no `detail` payload.
 * @fires {RhSelectChangeEvent} change - Fires when the selected value changes. Bubbles. The event has no `detail` payload; read the new value from the `value` property.
 */
export declare class RhSelect extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly formAssociated = true;
    static readonly shadowRootOptions: ShadowRootInit;
    /**
     * Accessible label text for screen readers and assistive technologies.
     * Should be used when the select lacks an associated `<label>` element.
     * Required for accessibility compliance when no visible label is present.
     */
    accessibleLabel?: string;
    /**
     * Whether the select control is disabled and non-interactive.
     * When true, prevents user interaction and excludes the value from form submission.
     */
    disabled: boolean;
    /**
     * Whether the dropdown listbox is currently expanded and visible.
     * Automatically managed by keyboard and mouse interactions. Should not be
     * manually set in most cases.
     */
    expanded: boolean;
    /**
     * When true, the user must select an option with a non-empty value before the
     * form can be submitted. Syncs to aria-required and constraint validation so
     * the browser can show "Please fill out this field" when the value is empty.
     */
    required: boolean;
    /**
     * Current form value representing the selected option's value attribute.
     * Updates automatically when selection changes. Use for form submission
     * and programmatic value access.
     */
    value?: string;
    /**
     * Form control name. Submitted with the form as the key for this control's
     * value in FormData. Reflects to the name attribute.
     */
    name?: string;
    /**
     * Placeholder text displayed when no option is selected.
     * Should provide guidance about expected input. Overridden by the placeholder
     * slot if provided. Used as fallback accessible label when no accessible-label
     * or associated label is present.
     */
    placeholder?: string;
    /**
     * Help text displayed below the control. Content slotted into the help-text
     * slot overrides this attribute.
     */
    helpText?: string;
    /**
     * Visual and semantic state of the form control for user feedback.
     * Use 'danger' for blocking errors that prevent form submission, 'warning' for
     * non-blocking issues requiring attention, and 'success' for valid selections.
     * Affects styling.
     */
    state?: 'danger' | 'success' | 'warning';
    /**
     * The currently selected rh-option element. Accepts a single option.
     * Setting this property programmatically updates the visual selection and form value.
     */
    set selected(selected: RhOption | RhOption[]);
    get selected(): RhOption[];
    /** List of options */
    get options(): RhOption[];
    set options(v: RhOption[]);
    private _toggleButton?;
    private _listbox?;
    private _listboxContainer?;
    private _placeholder?;
    connectedCallback(): void;
    willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
    updated(): void;
    disconnectedCallback(): void;
    protected formResetCallback(): void;
    protected formDisabledCallback(disabled: boolean): void;
    /**
     * Returns true if the element's value passes constraint validation.
     * Participates in the Constraint Validation API; updates validity state
     * before checking.
     */
    checkValidity(): boolean;
    /**
     * Returns true if the element's value passes constraint validation.
     * If invalid, reports the problem (e.g. browser "Please fill out this field")
     * and returns false. Participates in the Constraint Validation API.
     */
    reportValidity(): boolean;
    private disabledChanged;
    private expandedChanged;
    private selectedChanged;
    private valueChanged;
    private requiredChanged;
    /**
     * Opens the dropdown
     */
    show(): Promise<void>;
    /**
     * Closes the dropdown
     */
    hide(): Promise<void>;
    /**
     * Toggles the dropdown based on current state
     */
    toggle(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-select': RhSelect;
    }
}
