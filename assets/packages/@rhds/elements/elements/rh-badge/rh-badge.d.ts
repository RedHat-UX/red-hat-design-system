import { LitElement } from 'lit';
/**
 * A badge is used to annotate other information like a label or an object name.
 *
 *  - `neutral` - Indicates generic information or a message with no severity.
 *  - `danger` - Indicates a danger state, like an error that is blocking a user from completing a task.
 *  - `warning` - Indicates a warning state, like a non-blocking error that might need to be fixed.
 *  - `caution` - Indicates an action or notice which should immediately draw the attention
 *  - `info` - Indicates helpful information or a message with very little to no severity.
 *  - `success` - Indicates a success state, like if a process was completed without errors.
 *
 * @summary Annotates information like a label or object
 *
 */
export declare class RhBadge extends LitElement {
    static readonly styles: CSSStyleSheet[];
    /**
     * Denotes the state-of-affairs this badge represents
     * Note: 'moderate','important', and 'critical' will also work, but are deprecated
     */
    state: 'danger' | 'warning' | 'caution' | 'neutral' | 'success' | 'info';
    /**
     * Sets a numeric value for a badge.
     *
     * You can pair it with `threshold` attribute to add a `+` sign
     * if the number exceeds the threshold value.
     */
    number?: number;
    /**
     * Sets a threshold for the numeric value and adds `+` sign if
     * the numeric value exceeds the threshold value.
     */
    threshold?: number;
    /** Ensures that state is consistent, regardless of input */
    private stateChanged;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-badge': RhBadge;
    }
}
