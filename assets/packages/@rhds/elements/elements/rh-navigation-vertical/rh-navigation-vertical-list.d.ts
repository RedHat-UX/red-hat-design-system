import { LitElement, type TemplateResult } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-navigation-link/rh-navigation-link.js';
/**
 * A disclosure menu of grouped navigation items in a vertical navigation list.
 * @summary Vertical navigation group
 * @alias navigation-vertical-list
 */
export declare class RhNavigationVerticalList extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private static readonly preventEscElements;
    /**
     * Optional open attribute that, sets the open state of the group.
     * Defaults to false.
     */
    open: boolean;
    /**
     * Optional summary attribute, sets the summary text.
     * Overridden by the summary slot.
     */
    summary?: string;
    /**
     * Bolds the first `<rh-navigation-link>` of the group. Should not be used if the first child is a `<rh-navigation-vertical-list>`.
     * Defaults to false.
     */
    highlight: boolean;
    private detailsEl;
    private summaryEl;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-navigation-vertical-list': RhNavigationVerticalList;
    }
}
