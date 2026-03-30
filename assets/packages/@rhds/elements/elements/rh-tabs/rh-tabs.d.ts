import { LitElement } from 'lit';
import { RhTab } from './rh-tab.js';
import { RhTabPanel } from './rh-tab-panel.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
export { RhTab };
/**
 * Tabs provide a way for users to organize and navigate between
 * sections of content on the same page. Each tab must be paired
 * with a corresponding `rh-tab-panel`. When using keyboard
 * navigation, arrow keys move focus between tabs following the
 * WAI-ARIA Tabs pattern. The component allows horizontal,
 * vertical, and boxed layouts, and overflow scroll buttons
 * appear when tabs exceed the available width.
 *
 * @summary Arranges content in a contained view on the same page
 *
 * @alias tabs
 *
 * @fires {TabExpandEvent} expand - when a tab is selected.
 *        The event detail shape includes `active` (boolean)
 *        indicating prior state and `tab` (RhTab) referencing
 *        the expanded element. Cancelable with
 *        `preventDefault()`.
 *
 * @csspart container - outer container element
 * @csspart tabs-container - wrapper around the tab list and scroll buttons
 * @csspart tabs - the scrollable tab list (has `role="tablist"`)
 * @csspart panels - container for `rh-tab-panel` elements
 *
 */
export declare class RhTabs extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Accessible label for the scroll-left overflow button.
     * Authors should localize this string for non-English pages.
     */
    labelScrollLeft: string;
    /**
     * Accessible label for the scroll-right overflow button.
     * Authors should localize this string for non-English pages.
     */
    labelScrollRight: string;
    /**
     * When true, tabs use
     * [manual](https://w3c.github.io/aria-practices/examples/tabs/tabs-manual.html)
     * activation, requiring the user to press Enter or click to activate
     * a focused tab. When false (default), tabs use
     * [automatic](https://w3c.github.io/aria-practices/examples/tabs/tabs-automatic.html)
     * activation, where focus immediately selects the tab.
     */
    manual: boolean;
    /**
     * Zero-based index of the currently active tab. Setting this
     * property programmatically selects the tab at that index.
     * Defaults to -1 (no tab selected).
     */
    get activeIndex(): number;
    set activeIndex(v: number);
    activeTab?: RhTab;
    /**
     * Sets the color palette for child components, overriding any
     * inherited context from parent elements.
     */
    colorPalette?: ColorPalette;
    /**
     * When true, centers the tab list within the container.
     * Authors should avoid centering when there are many tabs,
     * as it may cause layout issues with overflow.
     */
    centered?: boolean | undefined;
    /**
     * Sets the tab style to boxed (`box`) or boxed with inset
     * padding (`inset`). When unset, tabs use the default open style.
     */
    box?: 'box' | 'inset';
    /**
     * When true, displays the tab list vertically to the left of
     * the panels. On small viewports (below 768px), vertical tabs
     * revert to horizontal layout.
     */
    vertical: boolean;
    private firstTab;
    private lastTab;
    private tabList;
    protected get canShowScrollButtons(): boolean;
    get tabs(): RhTab[];
    get panels(): (RhTabPanel | undefined)[];
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
