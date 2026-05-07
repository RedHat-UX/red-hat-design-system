import { LitElement } from 'lit';
import type { IconNameFor, IconSetName } from '@rhds/icons';
/**
 * A statistic showcases a data point or quick fact visually.
 * Elements must include a `statistic` slot and body text.
 * Icons, titles, and CTAs should be consistent when grouped.
 * Adapts color for WCAG contrast in light and dark contexts.
 * Only the CTA receives Tab focus; screen readers read DOM order.
 *
 * @summary Showcases a data point or quick fact visually
 *
 * @alias Statistic
 */
export declare class RhStat extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * The icon name to display above the statistic.
     * When set, the component dynamically imports `rh-icon`
     * and renders it using the specified icon set.
     */
    icon?: IconNameFor<IconSetName>;
    /**
     * The icon set from which to load the icon.
     * Only applies when the `icon` attribute is set.
     */
    iconSet: IconSetName;
    /**
     * Controls the visual ordering of the title and
     * statistic slots. When set to `statistic`, the data
     * value appears above the title text.
     */
    top: 'default' | 'statistic';
    /**
     * The size variant of the statistic. The `large` size
     * increases the data text font size and icon dimensions.
     */
    size: 'default' | 'large';
    /**
     * Whether the statistic renders in a mobile layout with
     * reduced font sizes. Managed internally via
     * ScreenSizeController but can be set explicitly.
     */
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
