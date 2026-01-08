import { LitElement, type TemplateResult } from 'lit';
import { PfTab } from './pf-tab.js';
import { TabExpandEvent } from './context.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
/**
 * **Tabs** allow users to navigate between views within the same page or context.
 * @alias Tabs
 */
export declare class PfTabs extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    protected static readonly scrollTimeoutDelay = 150;
    static isExpandEvent(event: Event): event is TabExpandEvent<PfTab>;
    /**
     * Aria Label for the left scroll button
     */
    labelScrollLeft: string;
    /**
     * Aria Label for the right scroll button
     */
    labelScrollRight: string;
    /**
     * Box styling on tabs. Defaults to null
     */
    box: 'light' | 'dark' | null;
    /**
     * Set to true to enable vertical tab styling.
     */
    vertical: boolean;
    /**
     * Set to true to enable filled tab styling.
     */
    fill: boolean;
    /**
     * Border bottom tab styling on tabs. To remove the bottom border, set this prop to false.
     */
    borderBottom: 'true' | 'false';
    /**
     * Set's the tabs to be manually activated. This means that the tabs will not automatically select
     * unless a user clicks on them or uses the keyboard space or enter key to select them.  Roving
     * tabindex will still update allowing user to keyboard navigate through the tabs with arrow keys.
     */
    manual: boolean;
    /** The index of the active tab */
    get activeIndex(): number;
    set activeIndex(v: number);
    activeTab?: PfTab;
    get tabs(): PfTab[];
    private tabsContainer;
    private ctx;
    connectedCallback(): void;
    protected getUpdateComplete(): Promise<boolean>;
    protected willUpdate(): void;
    protected activeTabChanged(old?: PfTab, activeTab?: PfTab): void;
    protected firstUpdated(): void;
    render(): TemplateResult<1>;
    select(tab: PfTab | number): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-tabs': PfTabs;
    }
}
