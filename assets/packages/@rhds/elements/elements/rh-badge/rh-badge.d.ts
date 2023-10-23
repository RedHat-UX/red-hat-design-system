import { LitElement } from 'lit';
/**
 * A badge is used to annotate other information like a label or an object name.
 *
 * - **info**: Indicates informative or low impact
 * - **success**: Indicates stability or completion
 * - **moderate**: Indicates caution
 * - **important**: Indicates an error
 * - **critical**: Indicates danger or something critical
 *
 * @summary Annotates information like a label or object
 *
 */
export declare class RhBadge extends LitElement {
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult[];
    /**
     * Denotes the state-of-affairs this badge represents
     */
    state?: 'info' | 'success' | 'moderate' | 'important' | 'critical';
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
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-badge': RhBadge;
    }
}
