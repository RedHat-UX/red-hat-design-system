import { LitElement } from 'lit';
export declare abstract class BaseBadge extends LitElement {
    static readonly styles: import("lit").CSSResult[];
    abstract state?: string;
    /**
     * Sets a numeric value for a badge.
     *
     * You can pair it with `threshold` attribute to add a `+` sign
     * if the number exceeds the threshold value.
     */
    abstract number?: number;
    /**
     * Sets a threshold for the numeric value and adds `+` sign if
     * the numeric value exceeds the threshold value.
     */
    abstract threshold?: number;
    render(): import("lit-html").TemplateResult<1>;
}
