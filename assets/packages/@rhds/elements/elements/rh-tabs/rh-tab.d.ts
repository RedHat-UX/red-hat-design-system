import { BaseTab } from '@patternfly/elements/pf-tabs/BaseTab.js';
/**
 * Tabs
 * @slot - Place element content here
 */
export declare class RhTab extends BaseTab {
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult[];
    /**
     * Sets color theme based on parent context
     */
    private on?;
    active: boolean;
    disabled: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-tab': RhTab;
    }
}
