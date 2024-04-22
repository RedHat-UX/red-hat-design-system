import { LitElement } from 'lit';
/**
 * A statistic showcases a data point or quick fact visually.
 *
 * @summary Displays a statistic with an optional icon, title, statistic, and call to action.
 *
 * @summary Showcases a data point or quick fact visually
 *
 * @slot icon - Optional icon
 * @slot title - Statistic title
 * @slot statistic - Statistic data
 * @slot cta - Call to action
 * @slot - Description of the stat
 * @cssprop --pf-icon--size
 *
 */
export declare class RhStat extends LitElement {
    #private;
    static readonly version = "{{version}}";
    static readonly styles: CSSStyleSheet[];
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
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-stat': RhStat;
    }
}
