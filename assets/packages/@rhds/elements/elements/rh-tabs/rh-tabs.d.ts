import { BaseTabs } from '@patternfly/elements/pf-tabs/BaseTabs.js';
import { RhTab } from './rh-tab.js';
import { RhTabPanel } from './rh-tab-panel.js';
import { type ColorPalette } from '../../lib/context/color/provider.js';
export { RhTab };
/**
 * Tabs
 * @summary Arranges content in a contained view on the same page
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
     * Sets color palette, which affects the element's styles as well as descendants' color theme.
     * Overrides parent color context.
     * Your theme will influence these colors so check there first if you are seeing inconsistencies.
     * See [CSS Custom Properties](#css-custom-properties) for default values
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
