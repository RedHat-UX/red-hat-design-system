import { LitElement } from 'lit';
/**
 * A statistic showcases a data point or quick fact in a way that visually stands out.
 * It consists of a number/percentage and body text in its simplest form.
 * It can also include an icon, title, and a call to action.
 *
 * @slot icon - Optional icon
 * @slot title - Statistic title
 * @slot statistic - Statistic data
 * @slot cta - Call to action
 * @slot - Description of the stat
 *
 */
export declare class RhStat extends LitElement {
    #private;
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult[];
    private on;
    icon?: string;
    top: 'default' | 'statistic';
    size: 'default' | 'large';
    isMobile: boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-stat': RhStat;
    }
}
