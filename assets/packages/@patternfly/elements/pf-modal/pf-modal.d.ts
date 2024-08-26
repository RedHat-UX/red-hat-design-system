import { LitElement, type TemplateResult } from 'lit';
import { ComposedEvent } from '@patternfly/pfe-core';
export declare class ModalCancelEvent extends ComposedEvent {
    constructor();
}
export declare class ModalCloseEvent extends ComposedEvent {
    constructor();
}
export declare class ModalOpenEvent extends ComposedEvent {
    /** The trigger element which triggered the modal to open */
    trigger: HTMLElement | null;
    constructor(
    /** The trigger element which triggered the modal to open */
    trigger: HTMLElement | null);
}
/**
 * A **modal** displays important information to a user without requiring them to navigate
 * to a new page.
 * @summary Displays information or helps a user focus on a task
 * @slot - The default slot can contain any type of content. When the header is not present this unnamed slot appear at the top of the modal window (to the left of the close button). Otherwise it will appear beneath the header.
 * @slot header - The header is an optional slot that appears at the top of the modal window. It should be a header tag (h2-h6).
 * @slot footer - Optional footer content. Good place to put action buttons.
 * @fires {ModalOpenEvent} open - Fires when a user clicks on the trigger or manually opens a modal.
 * @fires {ModalCloseEvent} close - Fires when either a user clicks on either the close button or the overlay or manually closes a modal.
 * @csspart overlay - The modal overlay which lies under the dialog and above the page body
 * @csspart dialog - The dialog element
 * @csspart content - The container for the dialog content
 * @csspart header - The container for the optional dialog header
 * @csspart description - The container for the optional dialog description in the header
 * @csspart close-button - The modal's close button
 * @csspart footer - Actions footer container
 * @cssprop {<length>} [--pf-c-modal-box--ZIndex=500]
 * @cssprop {<length>} [--pf-c-modal-box--Width=calc(100 - 2rem)] - Width of the modal
 * @cssprop {<length>} [--pf-c-modal-box--MaxWidth=calc(100 - 2rem)] - Max width of the modal
 * @cssprop {<length>} [--pf-c-modal-box--m-sm--sm--MaxWidth=35rem] - Max width of the small variant modal
 * @cssprop {<length>} [--pf-c-modal-box--m-md--MaxWidth=52.5rem] - Max width of the small variant modal
 * @cssprop {<length>} [--pf-c-modal-box--m-lg--lg--MaxWidth=70rem] - Max width of the large variant modal
 * @cssprop {<length>} [--pf-c-modal-box--MaxHeight=calc(100 - 3rem)] - Max height of the modal
 * @cssprop {<length>} [--pf-c-modal-box--BoxShadow=var(--pf-global--BoxShadow--xl)] -
 * @cssprop {<length>} [--pf-c-modal-box__title--FontSize=1.5rem] -
 * @cssprop {<length>} [--pf-c-modal-box--m-align-top--MarginTop=2rem] -
 * @cssprop {<length>} --pf-c-modal-box--m-align-top--MaxWidth
 * @cssprop {<length>} --pf-c-modal-box--m-align-top--MaxHeight
 * @cssprop {<color>} [--pf-c-modal-box--BackgroundColor=#fff] -
 * @cssprop --pf-c-modal-box__title--FontFamily - default font family for header-slotted headings
 */
export declare class PfModal extends LitElement implements HTMLDialogElement {
    #private;
    static readonly shadowRootOptions: ShadowRootInit;
    static readonly styles: CSSStyleSheet[];
    /** Should the dialog close when user clicks outside the dialog? */
    protected static closeOnOutsideClick: boolean;
    /**
     * The `variant` controls the width of the modal.
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
    /** @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue */
    returnValue: string;
    private overlay?;
    private dialog?;
    private closeButton?;
    connectedCallback(): void;
    render(): TemplateResult<1>;
    disconnectedCallback(): void;
    protected _init(): Promise<void>;
    protected openChanged(oldValue?: boolean, newValue?: boolean): Promise<void>;
    protected triggerChanged(): void;
    private onTriggerClick;
    private onClick;
    private onKeydown;
    private cancel;
    setTrigger(element: HTMLElement): void;
    /**
     * Manually toggles the modal.
     * ```js
     * modal.toggle();
     * ```
     */
    toggle(): void;
    /**
     * Manually opens the modal.
     * ```js
     * modal.open();
     * ```
     */
    show(): void;
    showModal(): void;
    /**
     * Manually closes the modal.
     * ```js
     * modal.close();
     * ```
     * @param returnValue dialog return value
     */
    close(returnValue?: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-modal': PfModal;
    }
}
