import { LitElement } from 'lit';
export declare class TabExpandEvent extends Event {
    active: boolean;
    tab: RhTab;
    constructor(active: boolean, tab: RhTab);
}
/**
 * The tab button for use within a rh-tabs element, must be paired with a rh-tab-panel.
 * @slot icon - Can contain an `<svg>` or `<rh-icon>`
 * @slot - Tab title text
 * @csspart button - element that contains the interactive part of a tab
 * @csspart icon - icon `<span>` element
 * @csspart text - tile text `<span>` element
 * @cssprop {<color>} [--rh-tabs-link-color=#4d4d4d] - Tab link text color
 * @cssprop {<color>} [--rh-tabs-active-border-color=#ff442b] - Tab active border color
 * @cssprop {<length>} [--rh-tabs-link-padding-inline-start=32px] - Tab padding inline start
 * @cssprop {<length>} [--rh-tabs-link-padding-block-start=16px] - Tab padding block start
 * @cssprop {<length>} [--rh-tabs-link-padding-inline-end=32px`] - Tab padding inline end
 * @cssprop {<length>} [--rh-tabs-link-padding-block-end=16px] - Tab padding block end
 * @fires { TabExpandEvent } expand - when a tab expands
 */
export declare class RhTab extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** True when the tab is selected */
    active: boolean;
    /** True when the tab is disabled */
    disabled: boolean;
    private ctx?;
    private icons;
    private button;
    private first;
    private last;
    connectedCallback(): void;
    willUpdate(): void;
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
