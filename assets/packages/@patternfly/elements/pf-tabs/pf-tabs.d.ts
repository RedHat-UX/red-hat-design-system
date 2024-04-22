import { LitElement, type PropertyValues } from 'lit';
import { PfTab } from './pf-tab.js';
import { TabExpandEvent } from './context.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
/**
 * **Tabs** allow users to navigate between views within the same page or context.
 *
 * @csspart container - outer container
 * @csspart tabs-container - tabs container
 * @csspart tabs - tablist
 * @csspart panels - panels
 *
 * @slot tab - Must contain one or more `<pf-tab>`
 * @slot - Must contain one or more `<pf-panel>`
 *
 * @cssprop     {<length>} --pf-c-tabs--Width {@default `auto`}
 * @cssprop     {<length>} --pf-c-tabs--inset {@default `0`}
 *
 * @cssprop     {<color>}   --pf-c-tabs--before--BorderColor       {@default `#d2d2d2`}
 * @cssprop     {<length>}  --pf-c-tabs--before--BorderTopWidth    {@default `0`}
 * @cssprop     {<length>}  --pf-c-tabs--before--BorderRightWidth  {@default `0`}
 * @cssprop     {<length>}  --pf-c-tabs--before--BorderBottomWidth {@default `1px`}
 * @cssprop     {<length>}  --pf-c-tabs--before---BorderLeftWidth  {@default `0`}
 *
 * @cssprop     {<length>}  --pf-c-tabs--m-vertical--MaxWidth      {@default `15.625rem`}
 *
 * @cssprop     {<color>}   --pf-c-tabs--m-vertical__list--before--BorderColor       {@default `#d2d2d2`}
 * @cssprop     {<length>}  --pf-c-tabs--m-vertical__list--before--BorderTopWidth    {@default `0`}
 * @cssprop     {<length>}  --pf-c-tabs--m-vertical__list--before--BorderRightWidth  {@default `0`}
 * @cssprop     {<length>}  --pf-c-tabs--m-vertical__list--before--BorderBottomWidth {@default `0`}
 * @cssprop     {<length>}  --pf-c-tabs--m-vertical__list--before--BorderLeftWidth   {@default `1px`}
 *
 * @cssprop     {<length>}  --pf-c-tabs--m-vertical--m-box--inset  {@default `2rem`}
 *
 * @cssprop     {<display>} --pf-c-tabs__list--Display  {@default `flex`}
 *
 * @cssprop     {<length>}  --pf-c-tabs__scroll-button--Width                         {@default `3rem`}
 * @cssprop     {<color>}   --pf-c-tabs__scroll-button--Color                         {@default `#151515`}
 * @cssprop     {<color>}   --pf-c-tabs__scroll-button--BackgroundColor               {@default `#ffffff`}
 * @cssprop     {<length>}  --pf-c-tabs__scroll-button--OutlineOffset                 {@default `-0.25rem`}
 * @cssprop     {<time>}    --pf-c-tabs__scroll-button--TransitionDuration--margin    {@default `.125s`}
 * @cssprop     {<time>}    --pf-c-tabs__scroll-button--TransitionDuration--transform {@default `.125s`}
 * @cssprop     {<color>}   --pf-c-tabs__scroll-button--hover--Color                  {@default `#06c`}
 *
 * @cssprop     {<color>}   --pf-c-tabs__scroll-button--before--BorderColor           {@default `#d2d2d2`}
 * @cssprop     {<length>}  --pf-c-tabs__scroll-button--before--BorderRightWidth      {@default `0`}
 * @cssprop     {<length>}  --pf-c-tabs__scroll-button--before--BorderBottomWidth     {@default `1px`}
 * @cssprop     {<length>}  --pf-c-tabs__scroll-button--before--BorderLeftWidth       {@default `0`}
 * @cssprop     {<length>}  --pf-c-tabs__scroll-button--before--border-width--base    {@default `1px`}
 *
 * @cssprop     {<color>} --pf-c-tabs__scroll-button--disabled--Color                 {@default `#d2d2d2`}
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
    /**
     * The index of the active tab
     */
    activeIndex: number;
    activeTab?: PfTab;
    get tabs(): PfTab[];
    private tabsContainer;
    private ctx;
    connectedCallback(): void;
    protected getUpdateComplete(): Promise<boolean>;
    willUpdate(changed: PropertyValues<this>): void;
    protected updated(changed: PropertyValues<this>): void;
    protected firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
    select(option: PfTab | number): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-tabs': PfTabs;
    }
}
