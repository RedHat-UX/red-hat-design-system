import { LitElement } from 'lit';
import { ComposedEvent } from '@patternfly/pfe-core';
export declare class RequestSortEvent extends ComposedEvent {
    direction: 'asc' | 'desc';
    constructor(direction: 'asc' | 'desc');
}
/**
 * A button for sorting table columns in ascending or descending order.
 * Authors must place this element inside a `<th>` cell within an
 * `<rh-table>` element. The button provides a screen reader accessible
 * label announcing the current sort direction and column name.
 * Authors should set the `column` attribute to identify the sorted
 * column for assistive technology users.
 *
 * @summary Toggles column sort direction within a table header
 *
 * @fires {RequestSortEvent} request-sort - Fired when the user
 *        activates the sort button. The event detail includes a
 *        `direction` property set to `'asc'` or `'desc'`.
 *        Cancelling this event prevents the default sort behavior.
 */
export declare class RhSortButton extends LitElement {
    static readonly styles: CSSStyleSheet[];
    /** The button's sorting order */
    sortDirection?: 'asc' | 'desc';
    /**
     * Automatically set based on `sort-direction`.
     * Use this attribute or the `accessible-label` slot when localizing a table,
     * but be certain to update the text based on sort direction whenever it changes.
     */
    accessibleLabel?: string;
    /** The column name associated with this button (for screen readers) */
    column?: string;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * Dispatch a request-sort event in ascending (asc) or descending (desc) order
     */
    sort(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-sort-button': RhSortButton;
    }
}
