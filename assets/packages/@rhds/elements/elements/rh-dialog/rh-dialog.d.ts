import { LitElement, type PropertyValues } from 'lit';
import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-button/rh-button.js';
export declare class DialogCancelEvent extends Event {
    constructor();
}
export declare class DialogCloseEvent extends Event {
    constructor();
}
export declare class DialogOpenEvent extends Event {
    /** Element from the `trigger` attribute or `setTrigger()`, or null if neither is set. */
    trigger: HTMLElement | null;
    constructor(
    /** Element from the `trigger` attribute or `setTrigger()`, or null if neither is set. */
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
 * @fires {DialogOpenEvent} open - Fired when the dialog opens. The `trigger`
 *   property is the element that opened the dialog, or null when no trigger
 *   is set. Listen for this when you should move focus inside the dialog; the
 *   close button takes focus by default. When the dialog closes, move focus
 *   back to `trigger` for keyboard and screen reader users. You must handle a
 *   null `trigger` when `show()` opens the dialog with no trigger set.
 * @fires {DialogCloseEvent} close - Fired when the dialog closes from the close
 *   button or `close()`. Use this when an action confirms a choice, and read
 *   `returnValue` on the dialog. Enter or Space on the close button fires this
 *   event; a screen reader announces that button as "Close Dialog". Escape
 *   fires `cancel` instead. `preventDefault()` does not keep the dialog open.
 * @fires {DialogCancelEvent} cancel - Fired when the user dismisses the dialog
 *   with the Escape key, a backdrop click, or `cancel()`. Listen for this when
 *   you should discard in-progress input. Screen reader and keyboard users both
 *   dismiss with Escape. The close button and `close()` fire `close` instead.
 *   `preventDefault()` does not keep the dialog open.
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
    /**
     * Native `<dialog>`. Null until the first render creates it.
     * `show()` must not set `open` or take the scroll lock while this is null,
     * or the page stays locked with no modal on screen.
     */
    private dialog;
    private content;
    private closeButton;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Finish a `show()` that ran before the native `<dialog>` existed.
     * The element is in the shadow root by this point. `show()` runs on the
     * next microtask so setting `open` is not inside this update. Lit warns
     * when a property changes in `firstUpdated`. The microtask still runs
     * before `updateComplete` resolves for the caller.
     * @param changedProperties properties changed on the first update
     */
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
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
    /**
     * Opens the dialog as a modal.
     * `open` and the document scroll lock are set only after the native dialog
     * exists and `showModal()` succeeds. A call before the first render is
     * applied from `firstUpdated`.
     */
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
