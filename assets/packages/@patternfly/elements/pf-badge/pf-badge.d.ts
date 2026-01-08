import { LitElement, type TemplateResult } from 'lit';
/**
 * A **badge** is used to annotate other information like a label or an object name.
 * @alias Badge
 */
export declare class PfBadge extends LitElement {
    static readonly styles: CSSStyleSheet[];
    /**
     * Denotes the state-of-affairs this badge represents
     * Options include read and unread
     */
    state?: 'unread' | 'read';
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
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-badge': PfBadge;
    }
}
