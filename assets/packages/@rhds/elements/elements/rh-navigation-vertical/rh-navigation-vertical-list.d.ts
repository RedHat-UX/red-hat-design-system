import { LitElement, type TemplateResult } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-navigation-link/rh-navigation-link.js';
/**
 * A collapsible group for organizing related links within an
 * `<rh-navigation-vertical>` element. Allows users to expand and
 * collapse sections. Authors should set `summary` to provide a
 * label. Pressing Escape closes the group and returns focus to the
 * summary. Uses an ARIA `listitem` role for screen readers.
 *
 * @summary Vertical navigation group
 *
 * @fires {Event} toggle - Fires when the group opens or closes. The
 *        event has no detail; check the `open` property on the element
 *        to determine the current state.
 */
export declare class RhNavigationVerticalList extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private static readonly preventEscElements;
    /**
     * Optional open attribute that sets the open state of the group.
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
