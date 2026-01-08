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
 * @alias Modal
 * @fires {ModalOpenEvent} open - Fires when a user clicks on the trigger or manually opens a modal.
 * @fires {ModalCloseEvent} close - Fires when either a user clicks on either the close button or the overlay or manually closes a modal.
 */
export declare class PfModal extends LitElement {
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
