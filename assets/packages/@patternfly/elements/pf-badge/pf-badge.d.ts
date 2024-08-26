import { LitElement, type TemplateResult } from 'lit';
/**
 * A **badge** is used to annotate other information like a label or an object name.
 * @cssprop {<length>} [--pf-c-badge--BorderRadius=180em]
 * @cssprop {<length>} [--pf-c-badge--MinWidth=2rem]
 * @cssprop {<length>} [--pf-c-badge--PaddingLeft=0.5rem]
 * @cssprop {<length>} [--pf-c-badge--PaddingRight=0.5rem]
 * @cssprop {<length>} [--pf-c-badge--FontSize=0.85em]
 * @cssprop {<length>} [--pf-c-badge--LineHeight=1.5]
 * @cssprop {<length>} [--pf-c-badge--FontWeight=700]
 * @cssprop {<color>} [--pf-c-badge--Color=#151515]
 * @cssprop {<color>} [--pf-c-badge--BackgroundColor=#f0f0f0]
 * @cssprop {<color>} [--pf-c-badge--m-read--Color=#151515]
 * @cssprop {<color>} [--pf-c-badge--m-read--BackgroundColor=#f0f0f0]
 * @cssprop {<color>} [--pf-c-badge--m-unread--Color=#fff]
 * @cssprop {<color>} [--pf-c-badge--m-unread--BackgroundColor=#06c]
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
