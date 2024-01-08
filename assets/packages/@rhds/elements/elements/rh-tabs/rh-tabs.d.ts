import { LitElement } from 'lit';
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
 * @attr [label-scroll-left="Scroll left"] - accessible label for the tab panel's scroll left button.
 * @attr [label-scroll-right="Scroll right"] - accessible label for the tab panel's scroll right button.
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
 */
export declare class RhTabs extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    static isTab(element: HTMLElement): element is RhTab;
    static isPanel(element: HTMLElement): element is RhTabPanel;
    /** Time in milliseconds to debounce between scroll events and updating scroll button state */
    protected static readonly scrollTimeoutDelay: number;
    /** Icon name to use for the scroll left button */
    protected static readonly scrollIconLeft: string;
    /** Icon name to use for the scroll right button */
    protected static readonly scrollIconRight: string;
    /** Icon set to use for the scroll buttons */
    protected static readonly scrollIconSet: string;
    private static instances;
    /**
     * Tab activation
     * Tabs can be either [automatic](https://w3c.github.io/aria-practices/examples/tabs/tabs-automatic.html) activated
     * or [manual](https://w3c.github.io/aria-practices/examples/tabs/tabs-manual.html)
     */
    manual: boolean;
    get activeIndex(): number;
    set activeIndex(index: number);
    /**
     * Sets color context for child components, overrides parent context
     */
    colorPalette?: ColorPalette;
    centered?: boolean | undefined;
    /**
     * Sets the theme for the tabs and panels
     * @deprecated attribute will be removed in future release, please use the `--rh-tabs-active-border-color` css property directly.
     */
    theme?: 'base' | null;
    box?: 'box' | 'inset' | null;
    vertical: boolean;
    protected get canShowScrollButtons(): boolean;
    /**
     * Sets color theme based on parent context
     */
    private on?;
    private tabs;
    private panels;
    private tabList;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(): void;
    firstUpdated(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-tabs': RhTabs;
    }
}
