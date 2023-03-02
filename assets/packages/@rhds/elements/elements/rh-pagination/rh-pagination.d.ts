import type { PropertyValues } from 'lit';
import { LitElement } from 'lit';
/**
 * Pagination
 * @slot - Place element content here
 */
export declare class RhPagination extends LitElement {
    #private;
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult[];
    /**
     * Override `overflow` values set from HTML or JS.
     * `overflow` should ideally be private, but because
     * we can't do `::slotted(nav ol li)`, we need to reflect
     * it to a host attribute, so that lightdom CSS can target
     * the list items.
     */
    overflow: 'start' | 'end' | 'both' | null;
    /** Accessible label for the 'nav' element */
    label: string;
    /** Accessible label for the 'first page' button */
    labelFirst: string;
    /** Accessible label for the 'previous page' button */
    labelPrevious: string;
    /** Accessible label for the 'next page' button */
    labelNext: string;
    /** Accessible label for the 'last page' button */
    labelLast: string;
    private input?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    update(changed: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult<1>;
    /** Navigate to the first page */
    first(): Promise<number>;
    /** Navigate to the previous page */
    prev(): Promise<number>;
    /** Navigate to the next page */
    next(): Promise<number>;
    /** Navigate to the last page */
    last(): Promise<number>;
    /** Navigate to a specific page */
    go(page: 'first' | 'prev' | 'next' | 'last' | number): Promise<number>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-pagination': RhPagination;
    }
}
