import { LitElement } from 'lit';
import { BaseTab } from './BaseTab.js';
import { BaseTabPanel } from './BaseTabPanel.js';
/**
 * BaseTabs
 *
 * @attr [label-scroll-left="Scroll left"] - accessible label for the tab panel's scroll left button.
 * @attr [label-scroll-right="Scroll right"] - accessible label for the tab panel's scroll right button.
 *
 */
export declare abstract class BaseTabs extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    static isTab(element: BaseTab): element is BaseTab;
    static isPanel(element: BaseTabPanel): element is BaseTabPanel;
    /** Time in milliseconds to debounce between scroll events and updating scroll button state */
    protected static readonly scrollTimeoutDelay: number;
    /** Icon name to use for the scroll left button */
    protected static readonly scrollIconLeft: string;
    /** Icon name to use for the scroll right button */
    protected static readonly scrollIconRight: string;
    /** Icon set to use for the scroll buttons */
    protected static readonly scrollIconSet: string;
    private tabs;
    private panels;
    private tabList;
    id: string;
    /**
     * Tab activation
     * Tabs can be either [automatic](https://w3c.github.io/aria-practices/examples/tabs/tabs-automatic.html) activated
     * or [manual](https://w3c.github.io/aria-practices/examples/tabs/tabs-manual.html)
     */
    manual: boolean;
    get activeIndex(): number;
    set activeIndex(index: number);
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): Promise<void>;
    /** override to prevent scroll buttons from showing */
    protected get canShowScrollButtons(): boolean;
}
