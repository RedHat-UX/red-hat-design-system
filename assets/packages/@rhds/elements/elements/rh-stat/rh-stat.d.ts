import { LitElement } from 'lit';
import type { IconNameFor, IconSetName } from '@rhds/icons';
/**
 * A statistic showcases a data point or quick fact visually.
 *
 * @summary Showcases a data point or quick fact visually
 *
 * @alias statistic
 */
export declare class RhStat extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * The icon to display in the statistic
     */
    icon?: IconNameFor<IconSetName>;
    /**
     * Icon set to display in the statistic
     */
    iconSet: IconSetName;
    /** Whether the title or statistic should be displayed on top in the statistic */
    top: 'default' | 'statistic';
    /** The size of the statistic */
    size: 'default' | 'large';
    /** Whether the statistic is in a mobile view or not for styling */
    isMobile: boolean;
    connectedCallback(): void;
    willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-stat': RhStat;
    }
}
