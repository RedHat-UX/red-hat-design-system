import { BaseBadge } from './BaseBadge.js';
/**
 * A **badge** is used to annotate other information like a label or an object name.
 *
 * @cssprop {<length>} --pf-c-badge--BorderRadius               {@default `180em`}
 *
 * @cssprop {<length>} --pf-c-badge--MinWidth                   {@default `2rem`}
 *
 * @cssprop {<length>} --pf-c-badge--PaddingLeft                {@default `0.5rem`}
 * @cssprop {<length>} --pf-c-badge--PaddingRight               {@default `0.5rem`}
 *
 * @cssprop {<length>} --pf-c-badge--FontSize                   {@default `0.85em`}
 * @cssprop {<length>} --pf-c-badge--LineHeight                 {@default `1.5`}
 * @cssprop {<length>} --pf-c-badge--FontWeight                 {@default `700`}
 *
 * @cssprop {<color>} --pf-c-badge--Color                       {@default `#151515`}
 * @cssprop {<color>} --pf-c-badge--BackgroundColor             {@default `#f0f0f0`}
 *
 * @cssprop {<color>} --pf-c-badge--m-read--Color               {@default `#151515`}
 * @cssprop {<color>} --pf-c-badge--m-read--BackgroundColor     {@default `#f0f0f0`}
 *
 * @cssprop {<color>} --pf-c-badge--m-unread--Color             {@default `#fff`}
 * @cssprop {<color>} --pf-c-badge--m-unread--BackgroundColor   {@default `#06c`}
 */
export declare class PfBadge extends BaseBadge {
    static readonly styles: import("lit").CSSResult[];
    /**
     * Denotes the state-of-affairs this badge represents
     * Options include read and unread
     */
    state?: 'unread' | 'read';
    number?: number;
    threshold?: number;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-badge': PfBadge;
    }
}
