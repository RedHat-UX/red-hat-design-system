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
    /** The trigger element which triggered the dialog to open */
    trigger: HTMLElement | null;
    constructor(
    /** The trigger element which triggered the dialog to open */
    trigger: HTMLElement | null);
}
/**
 * A dialog displays important information to users without requiring them to navigate away from the page.
 * @summary Communicates information requiring user input or action
 * @fires {DialogOpenEvent} open - Fires when a user clicks on the trigger or manually opens a dialog.
 * @fires {DialogCloseEvent} close - Fires when either a user clicks on either the close button or manually closes a dialog.
 * @fires {DialogCancelEvent} cancel - Fires when a user clicks outside the dialog or hits ESC on their keyboard.
 * @slot - The default slot can contain any type of content. When the header is not present this unnamed slot appear at the top of the dialog window (to the left of the close button). Otherwise it will appear beneath the header.
 * @slot header - The header is an optional slot that appears at the top of the dialog window. It should be a header tag (h2-h6).
 * @slot footer - Optional footer content. Good place to put action buttons.
 * @csspart dialog - The dialog element
 * @csspart content - The container for the dialog content
 * @csspart header - The container for the optional dialog header
 * @csspart description - The container for the optional dialog description in the header
 * @csspart close-button - The dialog's close button
 * @csspart footer - Actions footer container
 * @cssprop {<number>} [--rh-dialog-video-aspect-ratio=16/9]
 *          Aspect ratio for the video inside the dialog
 * @cssprop {<color>} [--rh-dialog-close-button-color=var(--rh-color-icon-secondary-on-dark, #ffffff)]
 *          Sets the dialog close button color.
 */
export declare class RhDialog extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * The `variant` controls the width of the dialog.
     * There are three options: `small`, `medium` and `large`. The default is `large`.
     */
    variant?: 'small' | 'medium' | 'large';
    /**
     * `position="top"` aligns the dialog with the top of the page
     */
    position?: 'top';
    /**
     * Use `accessible-label="My custom label"` to specify the dialog's accessible name.
     * Defaults to the name of the dialog trigger if no attribute is set and no headings exist in the modal.
     * See Dialog's Accessibility page for more info.
     */
    accessibleLabel?: string;
    /**
     * `open` / `open="open"` declaratively opens the dialog
     */
    open: boolean;
    /** Optional ID of the trigger element */
    trigger?: string;
    /** Use `type="video"` to embed a video player into a dialog. */
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
    private cancel;
    setTrigger(element: HTMLElement): void;
    /**
     * Manually toggles the dialog.
     * ```js
     * dialog.toggle();
     * ```
     */
    toggle(): void;
    /**
     * Manually opens the dialog.
     * ```js
     * dialog.show();
     * ```
     */
    show(): void;
    showModal(): void;
    /**
     * Manually closes the dialog.
     * @param [returnValue] dialog return value.
     * @example ```js
     *          dialog.close();
     *          ```
     */
    close(returnValue?: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-dialog': RhDialog;
    }
}
