import { LitElement } from 'lit';
import '@rhds/elements/rh-surface/rh-surface.js';
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
 * @fires {DialogCloseEvent} close - Fires when either a user clicks on either the close button or the overlay or manually closes a dialog.
 * @fires {DialogCancelEvent} cancel
 * @slot - The default slot can contain any type of content. When the header is not present this unnamed slot appear at the top of the dialog window (to the left of the close button). Otherwise it will appear beneath the header.
 * @slot header - The header is an optional slot that appears at the top of the dialog window. It should be a header tag (h2-h6).
 * @slot footer - Optional footer content. Good place to put action buttons.
 * @csspart overlay - The dialog overlay which lies under the dialog and above the page body
 * @csspart dialog - The dialog element
 * @csspart content - The container for the dialog content
 * @csspart header - The container for the optional dialog header
 * @csspart description - The container for the optional dialog description in the header
 * @csspart close-button - The dialog's close button
 * @csspart footer - Actions footer container
 * @cssprop {<number>} --rh-dialog-video-aspect-ratio
 * @cssprop {<color>} [--rh-dialog-close-button-color=var(--rh-color-icon-secondary-on-dark, #ffffff)]
 *           Sets the dialog close button color.
 */
export declare class RhDialog extends LitElement {
    #private;
    static readonly version = "{{version}}";
    static readonly styles: CSSStyleSheet[];
    protected static closeOnOutsideClick: boolean;
    /**
     * The `variant` controls the width of the dialog.
     * There are three options: `small`, `medium` and `large`. The default is `large`.
     */
    variant?: 'small' | 'medium' | 'large';
    /**
     * `position="top"` aligns the dialog with the top of the page
     */
    position?: 'top';
    open: boolean;
    /** Optional ID of the trigger element */
    trigger?: string;
    type?: 'video';
    /** @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue */
    returnValue: string;
    private overlay?;
    private dialog?;
    private closeButton?;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    disconnectedCallback(): void;
    protected _init(): Promise<void>;
    protected _openChanged(oldValue?: boolean, open?: boolean): Promise<void>;
    protected _triggerChanged(): void;
    private onTriggerClick;
    private onClick;
    private onKeydown;
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
