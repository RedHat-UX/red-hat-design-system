import { LitElement } from 'lit';
import { RhTab } from './rh-tab.js';
import { RhTabPanel } from './rh-tab-panel.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { type ColorPalette } from '../../lib/context/color/provider.js';
export { RhTab };
/**
 * Tabs are used to organize and navigate between sections of content.
 * They feature a horizontal or a vertical list of section text labels
 * with a content panel below or to the right of the component.
 * @summary Arranges content in a contained view on the same page
 * @csspart container - outer container
 * @csspart tabs-container - tabs container
 * @csspart tabs - tablist
 * @csspart panels - panels
 * @slot tab - Must contain one or more `<rh-tab>`
 * @slot - Must contain one or more `<rh-tab-panel>`
 * @cssprop {<color>} [--rh-tabs-border-color=#c7c7c7] - Tabs Border color
 * @cssprop {<length>} [--rh-tabs-inset=auto] - Tabs inset
 */
export declare class RhTabs extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Label for the scroll left button
     */
    labelScrollLeft: string;
    /**
     * Label for the scroll right button
     */
    labelScrollRight: string;
    /**
     * Tabs can be either [automatic](https://w3c.github.io/aria-practices/examples/tabs/tabs-automatic.html) activated
     * or [manual](https://w3c.github.io/aria-practices/examples/tabs/tabs-manual.html)
     */
    manual: boolean;
    /**
     * Index of the active tab
     */
    get activeIndex(): number;
    set activeIndex(v: number);
    activeTab?: RhTab;
    /**
     * Sets color context for child components, overrides parent context
     */
    colorPalette?: ColorPalette;
    /**
     * Aligns tabs to the center
     */
    centered?: boolean | undefined;
    /**
     * Sets tabs to a boxed style with or without an inset
     */
    box?: 'box' | 'inset';
    /**
     * Sets the alignment of the tabs vertical
     */
    vertical: boolean;
    /**
     * Sets the theme for the tabs and panels
     * @deprecated attribute will be removed in future release, please use the `--rh-tabs-active-border-color` css property directly.
     */
    theme?: 'base' | null;
    /**
     * Sets color theme based on parent context
     */
    private on?;
    private tabList;
    protected get canShowScrollButtons(): boolean;
    get tabs(): RhTab[];
    get panels(): (RhTabPanel | undefined)[];
    private ctx;
    connectedCallback(): void;
    willUpdate(): void;
    firstUpdated(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
    protected activeTabChanged(old?: RhTab, activeTab?: RhTab): void;
    select(option: RhTab | number): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-tabs': RhTabs;
    }
}
