import { LitElement, type TemplateResult } from 'lit';
import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-button/rh-button.js';
import '@rhds/elements/rh-icon/rh-icon.js';
interface AlertAction {
    action: 'dismiss' | 'confirm' | string;
    text: string;
}
interface ToastOptions {
    id?: string;
    /** Alert body content. Can be any value which lit-html can render. Simple strings are preferable */
    message: string | Node | TemplateResult | (string | Node | TemplateResult)[];
    /** Alert heading content. Must be a simple string. */
    heading?: string;
    /** Alert `state` attribute */
    state?: RhAlert['state'];
    /** Whether the alert should remain on screen until the user explicitly dismisses it */
    persistent?: boolean;
    /** One or more optional body actions */
    actions?: [] | [AlertAction] | [AlertAction, AlertAction];
}
export declare class AlertCloseEvent extends Event {
    action: 'close' | 'confirm' | 'dismiss' | string;
    constructor(action: 'close' | 'confirm' | 'dismiss' | string);
}
/**
 * An alert is a banner used to notify a user about a change in status
 * or communicate other information. It can be generated with or without
 * a user triggering an action first.
 *
 * @summary Notifies a user without blocking their workflow
 *
 * @fires {AlertCloseEvent} close - when the dismissable alert closes
 *
 * @slot         - Provide a description for the alert message
 * @slot header  - Provide a header for the alert message.
 * @slot actions - Provide actions that the user can take for the alert
 *
 */
export declare class RhAlert extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Toast a message with an rh-alert
     * @param options
     * @param options.message alert text
     * @param [options.actions] optional array of actions
     * @param [options.heading="Success"] alert heading
     * @param [options.state="info"] `<rh-alert state="...">`
     * @param [options.persistent=false] when true, toast remains on screen until dismissed
     */
    static toast({ message, persistent, heading, state, actions: _actions, }: Omit<ToastOptions, 'id'>): Promise<void>;
    /**
     * Communicates the urgency of a message and is denoted by various styling configurations.
     *
     *  - `neutral` - Indicates generic information or a message with no severity.
     *  - `danger` - Indicates a danger state, like an error that is blocking a user from completing a task.
     *  - `warning` - Indicates a warning state, like a non-blocking error that might need to be fixed.
     *  - `caution` - Indicates an action or notice which should immediately draw the attention
     *  - `info` - Indicates helpful information or a message with very little to no severity.
     *  - `success` - Indicates a success state, like if a process was completed without errors.
     *
     *  Note: 'note', 'default', and 'error' will also work, but are deprecated
     */
    state: 'danger' | 'warning' | 'caution' | 'neutral' | 'info' | 'success';
    /**
     * The alternate Inline alert style includes a border instead of a line which
     * can be used to express more urgency or better grab the attention of a user.
     *
     * A Toast alert is used to present a global message about an event,
     * update, or confirmation, like the result of a user action that cannot
     * be presented within a specific layout or component.
     */
    variant?: 'alternate' | 'toast' | 'inline';
    /**
     * Alert variants have different rules regarding their ability to be dismissed by a user.
     * Default, Info, and Success Inline alerts can be dismissed by a user selecting the close button.
     * Warning and Danger Inline alerts can be dismissed by a user resolving the issues caused by the alert.
     * All Toast alerts can be dismissed by a user selecting the close button or waiting for them to time out.
     */
    dismissable: boolean;
    connectedCallback(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-alert': RhAlert;
    }
}
export {};
