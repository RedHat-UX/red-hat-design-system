import { LitElement } from 'lit';
/**
 * A statistic showcases a data point or quick fact visually.
 *
 * @summary Displays a statistic with an optional icon, title, statistic, and call to action.
 *
 * @slot icon - Optional icon
 * @slot title - Statistic title
 * @slot statistic - Statistic data
 * @slot cta - Call to action
 * @slot - Description of the stat
 * @cssprop --pf-icon--size
 * @cssprop --rh-color-icon-secondary-on-dark
 * @cssprop --rh-color-icon-secondary-on-light
 * @cssprop --rh-color-text-brand-on-light
 * @cssprop --rh-color-text-primary-on-dark
 * @cssprop --rh-font-family-heading
 * @cssprop --rh-font-family-text
 * @cssprop --rh-font-size-body-text-lg
 * @cssprop --rh-font-size-body-text-xl
 * @cssprop --rh-font-size-heading-2xl
 * @cssprop --rh-font-size-heading-lg
 * @cssprop --rh-font-weight-regular
 * @cssprop --rh-size-icon-04
 * @cssprop --rh-space-lg
 * @cssprop --rh-space-sm
 *
 */
export declare class RhStat extends LitElement {
    #private;
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult[];
    private on?;
    /** The icon to display in the statistic */
    icon?: string;
    /** Whether the title or statistic should be displayed on top in the statistic */
    top: 'default' | 'statistic';
    /** The size of the statistic */
    size: 'default' | 'large';
    /** Whether the statistic is in a mobile view or not for styling */
    isMobile: boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-stat': RhStat;
    }
}
