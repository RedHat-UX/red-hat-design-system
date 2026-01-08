import { LitElement, type TemplateResult } from 'lit';
import '@patternfly/elements/pf-icon/pf-icon.js';
import '@patternfly/elements/pf-button/pf-button.js';
export declare class PfAlertCloseEvent extends Event {
    reason: 'closed' | 'timeout';
    constructor(reason?: 'closed' | 'timeout');
}
/**
 * An **alert** is a notification that provides brief information to the user
 * without blocking their workflow.
 *
 * @fires close - When an alert is closed e.g. when close button is clicked or when the alert times
 *                out. Cancel the event to prevent the alert from being removed.
 */
export declare class PfAlert extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Use the `timeout` property to automatically dismiss an alert after a period
     * of time. If set to `true`, the timeout will be 8000 milliseconds. Provide a
     * specific value to dismiss the alert after a different number of
     * milliseconds.
     */
    timeout: number | true;
    /**
     * PatternFly supports several alert variants for different scenarios.
     * Each variant has an associated status icon, background, and alert title
     * coded to communicate the severity of an alert. Use the variant property to
     * apply the following styling options. If no variant is specified, then the
     * variant will be set to "default".
     *
     * - **Default** - Use for generic messages with no associated severity
     * - **Info** - Use for general informational messages
     * - **Success** - Use to indicate that a task or process has been completed successfully
     * - **Warning** - Use to indicate that a non-critical error has occurred
     * - **Danger** - Use to indicate that a critical or blocking error has occurred
     */
    variant: 'warning' | 'custom' | 'neutral' | 'info' | 'success' | 'danger';
    /**
     * Use the `icon` attribute to replace a default alert icon with a custom icon.
     * The `icon` attribute is overridden by the `icon` slot.
     */
    icon?: string;
    /**
     * The title of the alert. Overridden by the title slot.
     */
    titleText?: string;
    /**
     * The heading level of the alert's title. Overridden by the title slot.
     * Default: 3
     */
    titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Use inline alerts to display an alert inline with content. All alert
     * variants may use the `inline` attribute to position alerts in content-heavy
     * areas, such as within forms, wizards, or drawers.
     */
    inline: boolean;
    /**
     * Use the `plain` attribute to make any inline alert plain. Plain styling
     * removes the colored background but keeps colored text and icons.
     */
    plain: boolean;
    /**
     * An alert can contain additional, hidden information that is made visible
     * when users click a caret icon. This information can be expanded and
     * collapsed each time the icon is clicked.
     *
     * It is not recommended to use an expandable alert with a timeout in a toast
     * alert group because the alert could timeout before users have time to
     * interact with and view the entire alert.
     *
     * See the toast alert considerations section of the alert accessibility
     * documentation to understand the accessibility risks associated with using
     * toast alerts.
     */
    expandable: boolean;
    /**
     * True when an expandable alert is expanded
     */
    expanded: boolean;
    /**
     * When true, the alert displays a close button
     * Clicking the close button removes the alert
     */
    dismissable: boolean;
    disconnectedCallback(): void;
    render(): TemplateResult<1>;
    protected timeoutChanged(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-alert': PfAlert;
    }
}
