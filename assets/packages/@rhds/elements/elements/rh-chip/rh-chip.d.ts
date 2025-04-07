import { LitElement } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
export declare class ChipChangeEvent extends Event {
    checked: boolean;
    constructor(checked: boolean);
}
/**
 * A chip is used to filter information or indicate that a selection was made.
 * @summary Filter information or indicate that a selection was made
 * @fires {ChipCheckedEvent} chip-checked - when chip is checked/unchecked
 * @csspart chip - The main chip container
 * @slot - The label of the checkbox
 */
export declare class RhChip extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static formAssociated: boolean;
    /**
     * Whether the chip is checked.
     */
    checked: boolean;
    /**
     * Whether the chip is disabled.
     */
    disabled: boolean;
    /**
     * Set a custom string for the input's `value` attribute. Defaults to `on`.
     */
    value?: string;
    private size?;
    protected formDisabledCallback(disabled: boolean): void;
    protected formStateRestoreCallback(state: boolean, mode: string): void;
    render(): import("lit-html").TemplateResult<1>;
    private checkedChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-chip': RhChip;
    }
}
