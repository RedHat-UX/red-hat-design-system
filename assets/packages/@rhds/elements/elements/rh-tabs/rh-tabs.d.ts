import { BaseTabs } from '@patternfly/elements/pf-tabs/BaseTabs.js';
import { RhTab } from './rh-tab.js';
import { RhTabPanel } from './rh-tab-panel.js';
import { type ColorPalette } from '../../lib/context/color/provider.js';
export { RhTab };
/**
 * Tabs are used to organize and navigate between sections of content.
 * They feature a horizontal or a vertical list of section text labels
 * with a content panel below or to the right of the component.
 *
 * @summary Arranges content in a contained view on the same page
 *
 * @csspart container - outer container
 * @csspart tabs-container - tabs container
 * @csspart tabs - tablist
 * @csspart panels - panels
 *
 * @slot tab - Must contain one or more `<rh-tab>`
 * @slot - Must contain one or more `<rh-tab-panel>`
 *
 * @cssprop {<color>} --rh-tabs-border-color - Tabs Border color {@default `#c7c7c7`}
 * @cssprop {<length>} --rh-tabs-inset - Tabs inset {@default `auto`}
 *
 * @cssprop --rh-border-width-lg
 * @cssprop --rh-border-width-sm
 * @cssprop --rh-color-accent-base-on-dark
 * @cssprop --rh-color-accent-base-on-light
 * @cssprop --rh-color-border-subtle-on-dark
 * @cssprop --rh-color-border-subtle-on-light
 * @cssprop --rh-color-gray-40
 * @cssprop --rh-color-text-primary-on-dark
 * @cssprop --rh-color-text-primary-on-light
 * @cssprop --rh-color-text-secondary-on-dark
 * @cssprop --rh-color-text-secondary-on-light
 * @cssprop --rh-space-2xl
 * @cssprop --rh-space-xl
 *
 */
export declare class RhTabs extends BaseTabs {
    static readonly styles: import("lit").CSSResult[];
    static isTab(element: HTMLElement): element is RhTab;
    static isPanel(element: HTMLElement): element is RhTabPanel;
    /**
     * Sets color theme based on parent context
     */
    private on?;
    /**
     * Sets color context for child components, overrides parent context
     */
    colorPalette?: ColorPalette;
    centered?: boolean | undefined;
    theme?: 'base' | null;
    box?: 'box' | 'inset' | null;
    vertical: boolean;
    protected get canShowScrollButtons(): boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-tabs': RhTabs;
    }
}
