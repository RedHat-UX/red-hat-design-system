import { LitElement } from 'lit';
/**
 * A badge provides a small numeric count on a pill for labels, filters, or lists. Set `state`
 * when the count carries severity:
 *
 *  - `neutral` - Indicates generic information or a message with no severity.
 *  - `danger` - Indicates a danger state, like an error that is blocking a user from completing a task.
 *  - `warning` - Indicates a warning state, like a non-blocking error that might need to be fixed.
 *  - `caution` - Indicates an action or notice which should immediately draw the attention
 *  - `info` - Indicates helpful information or a message with very little to no severity.
 *  - `success` - Indicates a success state, like if a process was completed without errors.
 *
 * It must not take focus or act as a control; it has no implicit ARIA role. Provide context in
 * surrounding text. Avoid color-only meaning (WCAG 1.4.1). Use `threshold` with `number` for values
 * like `999+`.
 *
 * @summary Non-interactive numeric pill badge for counts and status
 */
export declare class RhBadge extends LitElement {
    static readonly styles: CSSStyleSheet[];
    /**
     * Background severity: `danger`, `warning`, `caution`, `neutral`, `success`, or `info`.
     * Defaults to `neutral`.
     *
     * Legacy values are normalized: `moderate` → `warning`, `important` → `caution`,
     * `critical` → `danger`, `note` → `info`.
     *
     * @see [Guidelines](https://ux.redhat.com/elements/badge/guidelines/)
     */
    state: 'danger' | 'warning' | 'caution' | 'neutral' | 'success' | 'info';
    /**
     * Numeric count rendered in the badge. With `threshold`, values above the threshold display
     * as `threshold+`. For text-only labels without a count, use `rh-tag` instead.
     */
    number?: number;
    /**
     * Upper bound for `number`; when `number` is greater, the badge shows `threshold+`.
     */
    threshold?: number;
    /** Normalizes `state` to supported values (including deprecated aliases). */
    private stateChanged;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-badge': RhBadge;
    }
}
