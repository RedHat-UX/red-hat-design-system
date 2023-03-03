import { BaseTabPanel } from '@patternfly/elements/pf-tabs/BaseTabPanel.js';
import { type ColorPalette } from '../../lib/context/color/provider.js';
/**
 * Tabs
 * @slot - Place element content here
 */
export declare class RhTabPanel extends BaseTabPanel {
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult[];
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
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-tab-panel': RhTabPanel;
    }
}
