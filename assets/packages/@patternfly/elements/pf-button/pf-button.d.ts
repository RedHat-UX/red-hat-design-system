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
 * @cssprop {<length>} [--pf-c-button--FontSize=1rem]
 * @cssprop            [--pf-c-button--FontWeight=400]
 * @cssprop {<number>} [--pf-c-button--LineHeight=1.5]
 * @cssprop {<length>} [--pf-c-button--PaddingTop=0.375rem]
 * @cssprop {<length>} [--pf-c-button--PaddingLeft=1rem]
 * @cssprop {<length>} [--pf-c-button--PaddingBottom=0.375rem]
 * @cssprop {<length>} [--pf-c-button--PaddingRight=1rem]
 * @cssprop {<length>|<percentage>} [--pf-c-button--BorderRadius=3px]
 * @cssprop {<color>}  [--pf-c-button--after--BorderColor=transparent]
 * @cssprop {<length>} [--pf-c-button--after--BorderRadius=3px]
 * @cssprop {<length>} [--pf-c-button--after--BorderWidth=1px]
 * @cssprop {<length>} [--pf-c-button--active--after--BorderWidth=2px]
 * @cssprop {<length>} [--pf-c-button--hover--after--BorderWidth=2px]
 * @cssprop {<length>} [--pf-c-button--focus--after--BorderWidth=2px]
 * @cssprop {<color>}  [--pf-c-button--m-primary--Color=#fff]
 * @cssprop {<color>}  [--pf-c-button--m-primary--BackgroundColor=#06c]
 * @cssprop {<color>}  [--pf-c-button--m-primary--active--Color=#fff]
 * @cssprop {<color>}  [--pf-c-button--m-primary--active--BackgroundColor=#004080]
 * @cssprop {<color>}  [--pf-c-button--m-primary--focus--Color=#fff]
 * @cssprop {<color>}  [--pf-c-button--m-primary--focus--BackgroundColor=#004080]
 * @cssprop {<color>}  [--pf-c-button--m-primary--hover--Color=#fff]
 * @cssprop {<color>}  [--pf-c-button--m-primary--hover--BackgroundColor=#004080]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--Color=#06c]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--BackgroundColor=transparent]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--active--Color=#06c]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--active--BackgroundColor=transparent]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--active--BorderColor=#06c]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--focus--Color=#06c]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--focus--BackgroundColor=transparent]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--focus--BorderColor=#06c]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--hover--Color=#06c]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--hover--BackgroundColor=transparent]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--hover--BorderColor=#06c]
 * @cssprop {<color>}  [--pf-c-button--m-tertiary--Color=#151515]
 * @cssprop {<color>}  [--pf-c-button--m-tertiary--BackgroundColor=transparent]
 * @cssprop {<color>}  [--pf-c-button--m-tertiary--active--Color=#151515]
 * @cssprop {<color>}  [--pf-c-button--m-tertiary--active--BackgroundColor=transparent]
 * @cssprop {<color>}  [--pf-c-button--m-tertiary--active--BorderColor=#151515]
 * @cssprop {<color>}  [--pf-c-button--m-tertiary--focus--Color=#151515]
 * @cssprop {<color>}  [--pf-c-button--m-tertiary--focus--BackgroundColor=transparent]
 * @cssprop {<color>}  [--pf-c-button--m-tertiary--focus--BorderColor=#151515]
 * @cssprop {<color>}  [--pf-c-button--m-tertiary--hover--Color=#151515]
 * @cssprop {<color>}  [--pf-c-button--m-tertiary--hover--BackgroundColor=transparent]
 * @cssprop {<color>}  [--pf-c-button--m-tertiary--hover--BorderColor=#151515]
 * @cssprop {<color>}  [--pf-c-button--m-danger--Color=#fff]
 * @cssprop {<color>}  [--pf-c-button--m-danger--BackgroundColor=#c9190b]
 * @cssprop {<color>}  [--pf-c-button--m-danger--active--Color=#fff]
 * @cssprop {<color>}  [--pf-c-button--m-danger--active--BackgroundColor=#a30000]
 * @cssprop {<color>}  [--pf-c-button--m-danger--focus--Color=#fff]
 * @cssprop {<color>}  [--pf-c-button--m-danger--focus--BackgroundColor=#a30000]
 * @cssprop {<color>}  [--pf-c-button--m-danger--hover--Color=#fff]
 * @cssprop {<color>}  [--pf-c-button--m-danger--hover--BackgroundColor=#a30000]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--m-danger--Color=#c9190b]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--m-danger--BackgroundColor=transparent]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--m-danger--BorderColor=#c9190b]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--m-danger--active--Color=#a30000]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--m-danger--active--BackgroundColor=transparent]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--m-danger--active--BorderColor=#c9190b]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--m-danger--focus--Color=#a30000]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--m-danger--focus--BackgroundColor=transparent]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--m-danger--focus--BorderColor=#c9190b]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--m-danger--hover--Color=#a30000]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--m-danger--hover--BackgroundColor=transparent]
 * @cssprop {<color>}  [--pf-c-button--m-secondary--m-danger--hover--BorderColor=#c9190b]
 * @cssprop {<color>}  [--pf-c-button--m-control--disabled--BackgroundColor=#f0f0f0]
 * @cssprop {<length>} [--pf-c-button--m-control--BorderRadius=0]
 * @cssprop {<length>} [--pf-c-button--m-control--after--BorderWidth=1px]
 * @cssprop {<color>}  [--pf-c-button--m-control--after--BorderTopColor=#f0f0f0]
 * @cssprop {<color>}  [--pf-c-button--m-control--after--BorderRightColor=#f0f0f0]
 * @cssprop {<color>}  [--pf-c-button--m-control--after--BorderBottomColor=#8a8d90]
 * @cssprop {<color>}  [--pf-c-button--m-control--after--BorderLeftColor=#f0f0f0]
 * @cssprop {<color>}  [--pf-c-button--m-control--Color=#151515]
 * @cssprop {<color>}  [--pf-c-button--m-control--BackgroundColor=#fff]
 * @cssprop {<color>}  [--pf-c-button--m-control--active--Color=#151515]
 * @cssprop {<color>}  [--pf-c-button--m-control--active--BackgroundColor=#fff]
 * @cssprop {<color>}  [--pf-c-button--m-control--active--BorderBottomColor=#06c]
 * @cssprop {<length>} [--pf-c-button--m-control--active--after--BorderBottomWidth=2px]
 * @cssprop {<color>}  [--pf-c-button--m-control--focus--Color=#151515]
 * @cssprop {<color>}  [--pf-c-button--m-control--focus--BackgroundColor=#fff]
 * @cssprop {<color>}  [--pf-c-button--m-control--focus--BorderBottomColor=#06c]
 * @cssprop {<length>} [--pf-c-button--m-control--focus--after--BorderBottomWidth=2px]
 * @cssprop {<color>}  [--pf-c-button--m-control--hover--Color=#151515]
 * @cssprop {<color>}  [--pf-c-button--m-control--hover--BackgroundColor=#fff]
 * @cssprop {<color>}  [--pf-c-button--m-control--hover--BorderBottomColor=#06c]
 * @cssprop {<length>} [--pf-c-button--m-control--hover--after--BorderBottomWidth=2px]
 * @cssprop {<color>}  [--pf-c-button--disabled--Color=#6a6e73]
 * @cssprop {<color>}  [--pf-c-button--disabled--BackgroundColor=#d2d2d2]
 * @cssprop {<color>}  [--pf-c-button--disabled--after--BorderColor=transparent]
 * @cssprop {<color>}  [--pf-c-button--m-warning--Color=#151515]
 * @cssprop {<color>}  [--pf-c-button--m-warning--BackgroundColor=#f0ab00]
 * @cssprop {<color>}  [--pf-c-button--m-warning--active--Color=#151515]
 * @cssprop {<color>}  [--pf-c-button--m-warning--active--BackgroundColor=#c58c00]
 * @cssprop {<color>}  [--pf-c-button--m-warning--focus--Color=#151515]
 * @cssprop {<color>}  [--pf-c-button--m-warning--focus--BackgroundColor=#c58c00]
 * @cssprop {<color>}  [--pf-c-button--m-warning--hover--Color=#151515]
 * @cssprop {<color>}  [--pf-c-button--m-warning--hover--BackgroundColor=#c58c00]
 * @cssprop {<color>}  [--pf-c-button--m-plain--BackgroundColor=transparent]
 * @cssprop {<color>}  [--pf-c-button--m-plain--Color=#6a6e73]
 * @cssprop {<color>}  [--pf-c-button--m-plain--hover--BackgroundColor=transparent]
 * @cssprop {<color>}  [--pf-c-button--m-plain--hover--Color=#151515]
 * @cssprop {<color>}  [--pf-c-button--m-plain--focus--BackgroundColor=transparent]
 * @cssprop {<color>}  [--pf-c-button--m-plain--focus--Color=#151515]
 * @cssprop {<color>}  [--pf-c-button--m-plain--active--BackgroundColor=transparent]
 * @cssprop {<color>}  [--pf-c-button--m-plain--active--Color=#151515]
 * @cssprop {<color>}  [--pf-c-button--m-plain--disabled--Color=#d2d2d2]
 * @cssprop {<color>}  [--pf-c-button--m-plain--disabled--BackgroundColor=transparent]
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
