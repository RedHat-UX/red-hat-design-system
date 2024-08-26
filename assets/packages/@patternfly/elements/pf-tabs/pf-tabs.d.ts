import { LitElement, type TemplateResult } from 'lit';
import { PfTab } from './pf-tab.js';
import { TabExpandEvent } from './context.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
/**
 * **Tabs** allow users to navigate between views within the same page or context.
 * @csspart container - outer container
 * @csspart tabs-container - tabs container
 * @csspart tabs - tablist
 * @csspart panels - panels
 * @slot tab - Must contain one or more `<pf-tab>`
 * @slot - Must contain one or more `<pf-panel>`
 * @cssprop     {<length>} [--pf-c-tabs--Width=auto]
 * @cssprop     {<length>} [--pf-c-tabs--inset=0]
 * @cssprop     {<color>}   [--pf-c-tabs--before--BorderColor=#d2d2d2]
 * @cssprop     {<length>}  [--pf-c-tabs--before--BorderTopWidth=0]
 * @cssprop     {<length>}  [--pf-c-tabs--before--BorderRightWidth=0]
 * @cssprop     {<length>}  [--pf-c-tabs--before--BorderBottomWidth=1px]
 * @cssprop     {<length>}  [--pf-c-tabs--before---BorderLeftWidth=0]
 * @cssprop     {<length>}  [--pf-c-tabs--m-vertical--MaxWidth=15.625rem]
 * @cssprop     {<color>}   [--pf-c-tabs--m-vertical__list--before--BorderColor=#d2d2d2]
 * @cssprop     {<length>}  [--pf-c-tabs--m-vertical__list--before--BorderTopWidth=0]
 * @cssprop     {<length>}  [--pf-c-tabs--m-vertical__list--before--BorderRightWidth=0]
 * @cssprop     {<length>}  [--pf-c-tabs--m-vertical__list--before--BorderBottomWidth=0]
 * @cssprop     {<length>}  [--pf-c-tabs--m-vertical__list--before--BorderLeftWidth=1px]
 * @cssprop     {<length>}  [--pf-c-tabs--m-vertical--m-box--inset=2rem]
 * @cssprop     {<display>} [--pf-c-tabs__list--Display=flex]
 * @cssprop     {<length>}  [--pf-c-tabs__scroll-button--Width=3rem]
 * @cssprop     {<color>}   [--pf-c-tabs__scroll-button--Color=#151515]
 * @cssprop     {<color>}   [--pf-c-tabs__scroll-button--BackgroundColor=#ffffff]
 * @cssprop     {<length>}  [--pf-c-tabs__scroll-button--OutlineOffset=-0.25rem]
 * @cssprop     {<time>}    [--pf-c-tabs__scroll-button--TransitionDuration--margin=.125s]
 * @cssprop     {<time>}    [--pf-c-tabs__scroll-button--TransitionDuration--transform=.125s]
 * @cssprop     {<color>}   [--pf-c-tabs__scroll-button--hover--Color=#06c]
 * @cssprop     {<color>}   [--pf-c-tabs__scroll-button--before--BorderColor=#d2d2d2]
 * @cssprop     {<length>}  [--pf-c-tabs__scroll-button--before--BorderRightWidth=0]
 * @cssprop     {<length>}  [--pf-c-tabs__scroll-button--before--BorderBottomWidth=1px]
 * @cssprop     {<length>}  [--pf-c-tabs__scroll-button--before--BorderLeftWidth=0]
 * @cssprop     {<length>}  [--pf-c-tabs__scroll-button--before--border-width--base=1px]
 * @cssprop     {<color>} [--pf-c-tabs__scroll-button--disabled--Color=#d2d2d2]
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
