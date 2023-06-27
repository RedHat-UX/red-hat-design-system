import { BaseBadge } from '@patternfly/elements/pf-badge/BaseBadge.js';
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
export declare class RhBadge extends BaseBadge {
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult[];
    /**
     * Denotes the state-of-affairs this badge represents
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
