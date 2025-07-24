import { LitElement } from 'lit';
export declare class TabExpandEvent extends Event {
    active: boolean;
    tab: RhTab;
    constructor(active: boolean, tab: RhTab);
}
/**
 * The tab button for use within a rh-tabs element, must be paired with a rh-tab-panel.
 * @fires { TabExpandEvent } expand - when a tab expands
 */
export declare class RhTab extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** True when the tab is selected */
    active: boolean;
    /** True when the tab is disabled */
    disabled: boolean;
    private box;
    private vertical;
    private manual;
    private activeTab;
    private firstTab;
    private lastTab;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private activeChanged;
    /**
     * if a tab is disabled, then it is also aria-disabled
     * if a tab is removed from disabled its not necessarily
     * not still aria-disabled so we don't remove the aria-disabled
     */
    private disabledChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-tab': RhTab;
    }
}
