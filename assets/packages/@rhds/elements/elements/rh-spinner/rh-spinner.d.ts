import { LitElement } from 'lit';
export type SpinnerSize = RhSpinner['size'];
/**
 * A spinner indicates that an action is in progress.
 * It appears as an animated circle over the section that is loading,
 * and it may include a text label
 * @summary Notifies users their action is being processed or loaded
 * @slot - Optional text label below the animated circle.
 */
export declare class RhSpinner extends LitElement {
    static readonly styles: CSSStyleSheet[];
    /**
     * Preset sizes for the spinner
     */
    size: 'sm' | 'md' | 'lg';
    /**
     * Sets color theme based on parent context
     */
    private on?;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-spinner': RhSpinner;
    }
}