import { BaseBadge } from '@patternfly/elements/pf-badge/BaseBadge.js';
/**
 * A badge is used to annotate other information with numerical content.
 */
export declare class RhBadge extends BaseBadge {
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult[];
    /**
     * Denotes the state-of-affairs this badge represents
     * Options include read and unread
     */
    state?: 'info' | 'success' | 'moderate' | 'important' | 'critical';
    number?: number;
    threshold?: number;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-badge': RhBadge;
    }
}
