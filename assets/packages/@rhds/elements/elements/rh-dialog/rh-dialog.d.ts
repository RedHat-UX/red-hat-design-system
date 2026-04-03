import { LitElement } from 'lit';
import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-button/rh-button.js';
export declare class DialogCancelEvent extends Event {
    constructor();
}
export declare class DialogCloseEvent extends Event {
    constructor();
}
export declare class DialogOpenEvent extends Event {
    /** The element that opened the dialog, or null if opened programmatically. */
    trigger: HTMLElement | null;
    constructor(
    /** The element that opened the dialog, or null if opened programmatically. */
    trigger: HTMLElement | null);
}
/**
 * Modal overlay for confirming decisions or collecting input. Traps focus and
 * blocks page interaction. Must have a heading or `accessible-label` for screen
 * readers. Uses native `<dialog>` with `aria-labelledby`. Escape closes the
 * dialog; Tab cycles focus within it. Use sparingly to avoid disrupting workflow.
 *
 * @summary Modal dialog for confirmations, errors, or required input
 *
 * @alias dialog
 *
 * @fires {DialogOpenEvent} open - Fires when the dialog opens. The event's `trigger`
 *   property (HTMLElement | null) holds the element that opened it.
 * @fires {DialogCloseEvent} close - Fires when the dialog closes via close button
 *   or programmatic `close()`. No detail properties.
 * @fires {DialogCancelEvent} cancel - Fires when the user dismisses via backdrop
 *   click or Escape. No detail properties.
 */
export declare class RhDialog extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Fixed width: `small` (35 rem), `medium` (52.5 rem), or `large` (70 rem).
     * Defaults to `min(90%, 1140px)` when unset.
     */
    variant?: 'small' | 'medium' | 'large';
    /**
     * Vertical placement. Set to `top` to align to the top of the viewport
     * instead of center.
     */
    position?: 'top';
    /**
     * Accessible name for the dialog. Must be provided when no heading
     * exists in the header or default slot. Maps to `aria-label` on the
     * native `<dialog>`.
     */
    accessibleLabel?: string;
    /**
     * Whether the dialog is currently open.
     */
    open: boolean;
    /**
     * ID of the element that opens the dialog on click. Should exist in
     * the same document or shadow root. Its text is used as a fallback
     * accessible name when no heading or `accessible-label` is present.
     */
    trigger?: string;
    /**
     * Set to `video` for a 16:9 video dialog. Removes padding and pauses
     * `<video>` or YouTube `<iframe>` elements on close.
     */
    type?: 'video';
    /** @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue */
    returnValue: string;
    private dialog;
    private content;
    private closeButton;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    protected _init(): Promise<void>;
    protected _openChanged(oldValue?: boolean, open?: boolean): Promise<void>;
    protected _triggerChanged(): void;
    private onTriggerClick;
    /**
     * Cancels and closes the dialog, dispatching a cancel event.
     * @param [returnValue] dialog return value
     */
    cancel(returnValue?: string): Promise<void>;
    /**
     * Sets the trigger element programmatically.
     * @param element the element that should open the dialog on click
     */
    setTrigger(element: HTMLElement): void;
    /** Toggles the dialog open or closed. */
    toggle(): void;
    /** Opens the dialog as a modal. */
    show(): void;
    /** Opens the dialog as a modal. */
    showModal(): void;
    /**
     * Closes the dialog.
     * @param [returnValue] dialog return value
     */
    close(returnValue?: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-dialog': RhDialog;
    }
}
