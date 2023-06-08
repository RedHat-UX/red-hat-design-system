import { BaseTabPanel } from '@patternfly/elements/pf-tabs/BaseTabPanel.js';
import { type ColorPalette } from '../../lib/context/color/provider.js';
/**
 * The tab panel for use within a rh-tabs element, must be paired with a rh-tab.
 *
 * @slot - Panel content should follow guidelines for [tab panel content layout](../guidelines)
 *
 * @cssprop --rh-space-2xl
 * @cssprop --rh-space-3xl
 * @cssprop --rh-space-4xl
 */
export declare class RhTabPanel extends BaseTabPanel {
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult[];
    /**
     * Sets color theme based on parent context
     */
    private on?;
    /**
     * Sets color context for child components, overrides parent context
     */
    colorPalette?: ColorPalette;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-tab-panel': RhTabPanel;
    }
}
