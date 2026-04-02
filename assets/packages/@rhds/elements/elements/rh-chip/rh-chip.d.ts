import { LitElement } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * Event fired when a chip's checked state changes.
 * The `checked` property indicates the chip's state before the change.
 */
export declare class ChipChangeEvent extends Event {
    /** The checked state of the chip before the change occurred. */
    checked: boolean;
    constructor(
    /** The checked state of the chip before the change occurred. */
    checked: boolean);
}
/**
 * A chip provides a toggle for filtering content or indicating a selection
 * when users choose from categories. Each chip must contain short inline
 * text and may be placed in an `rh-chip-group` of related chips. The
 * hidden checkbox allows form participation and provides screen reader
 * accessibility. Keyboard users press Tab to navigate between chips and
 * use Enter or Space to toggle.
 *
 * @summary Filter information or indicate that a selection was made
 *
 * @alias chip
 *
 * @fires {ChipChangeEvent} change - Fires when the chip is checked or
 *        unchecked. The event's `checked` property (boolean) holds the
 *        chip's state before the change. Cancelable — canceling prevents
 *        the state change.
 *
 * @csspart chip - The outer `<label>` container for the chip,
 *          styled with the `--rh-border-radius-pill` token.
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
