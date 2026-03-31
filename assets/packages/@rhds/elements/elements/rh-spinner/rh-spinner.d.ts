import { LitElement } from 'lit';
export type SpinnerSize = RhSpinner['size'];
/**
 * Provides an animated loading indicator for when content is being
 * processed or fetched. A spinner should be used when loading takes
 * fewer than ten seconds and the content structure is unknown.
 * Authors must not use a spinner for indeterminate loading over ten
 * seconds; use a progress bar instead. Authors should avoid omitting
 * a text label, as screen readers rely on `role="status"` to announce
 * the ARIA live region. The element is not keyboard-focusable.
 *
 * @summary Notifies users their action is being processed or loaded
 *
 * @alias spinner
 */
export declare class RhSpinner extends LitElement {
    static readonly styles: CSSStyleSheet[];
    /**
     * Preset sizes for the spinner
     */
    size: 'sm' | 'md' | 'lg';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-spinner': RhSpinner;
    }
}
