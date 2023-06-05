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
 * @cssprop --rh-border-radius-pill
 * @cssprop --rh-color-accent-base-on-light
 * @cssprop --rh-color-green-500
 * @cssprop --rh-color-red-600
 * @cssprop --rh-color-red-700
 * @cssprop --rh-color-surface-lighter
 * @cssprop --rh-color-text-primary-on-dark
 * @cssprop --rh-color-text-primary-on-light
 * @cssprop --rh-font-size-body-text-xs
 * @cssprop --rh-length-2xl
 * @cssprop --rh-line-height-body-text
 * @cssprop --rh-space-md
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
