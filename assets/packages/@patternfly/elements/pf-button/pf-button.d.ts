import { LitElement, type TemplateResult } from 'lit';
import '@patternfly/elements/pf-icon/pf-icon.js';
import '@patternfly/elements/pf-spinner/pf-spinner.js';
export type ButtonVariant = ('primary' | 'secondary' | 'tertiary' | 'control' | 'link');
/**
 * A **button** is a box area or text that communicates and triggers user actions when
 * clicked or selected. Buttons can be used to communicate and immediately trigger
 * actions a user can take in an application, like submitting a form, canceling a
 * process, or creating a new object. Buttons can also be used to take a user to a
 * new location, like another page inside of a web application, or an external site
 * such as help or documentation..
 * @summary Allows users to perform an action when triggered
 * @alias Button
 * @attr {string} [loading-label='loading'] - ARIA label for the loading indicator
 */
export declare class PfButton extends LitElement {
    #private;
    static readonly formAssociated = true;
    static readonly styles: CSSStyleSheet[];
    type?: 'button' | 'submit' | 'reset';
    /** Accessible name for the button, use when the button does not have slotted text */
    label?: string;
    /** Form value for the button */
    value?: string;
    /** Form element name for the button */
    name?: string;
    /** Disables the button */
    disabled: boolean;
    /** Represents the state of a stateful button */
    loading: boolean;
    /** Changes the size of the button. */
    size?: 'small' | 'large';
    /** Not as urgent as danger */
    warning: boolean;
    /**
     * Use danger buttons for actions a user can take that are potentially
     * destructive or difficult/impossible to undo, like deleting or removing
     * user data.
     */
    danger: boolean;
    /** Applies plain styles */
    plain: boolean;
    /**
     * Changes the style of the button.
     * - Primary: Used for the most important call to action on a page. Try to
     *   limit primary buttons to one per page.
     * - Secondary: Use secondary buttons for general actions on a page, that
     *   don’t require as much emphasis as primary button actions. For example,
     *   you can use secondary buttons where there are multiple actions, like in
     *   toolbars or data lists.
     * - Tertiary: Tertiary buttons are flexible and can be used as needed.
     */
    variant: ButtonVariant;
    inline: boolean;
    block: boolean;
    /** Shorthand for the `icon` slot, the value is icon name */
    icon?: string;
    /** Icon set for the `icon` property */
    iconSet?: string;
    /** Store the URL Link */
    href?: string;
    /**  Redirecting the URL Link to new Tab */
    target?: string;
    connectedCallback(): void;
    protected willUpdate(): void;
    formDisabledCallback(): Promise<void>;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-button': PfButton;
    }
}
