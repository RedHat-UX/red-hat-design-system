import { LitElement } from 'lit';
import { ComposedEvent } from '@patternfly/pfe-core';
export declare class RequestSortEvent extends ComposedEvent {
    direction: 'asc' | 'desc';
    constructor(direction: 'asc' | 'desc');
}
/**
 * Table sort button
 *
 * @csspart sort-button    - button element
 * @csspart sort-indicator - icon wrapper element
 *
 * @fires {RequestSortEvent} request-sort - when the button is clicked
 */
export declare class RhSortButton extends LitElement {
    static readonly styles: CSSStyleSheet[];
    private on?;
    /** The button's sorting order */
    sortDirection?: 'asc' | 'desc';
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
