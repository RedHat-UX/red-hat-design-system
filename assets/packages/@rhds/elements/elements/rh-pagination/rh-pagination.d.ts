import type { PropertyValues } from 'lit';
import { LitElement } from 'lit';
/**
 * A paginator allows users to navigate between pages of related content.
 *
 * @summary Allows users to navigate content divided into pages
 *
 * @slot            - An ordered list of links
 * @slot go-to-page - "Go to page" text
 * @slot out-of     - "of" text
 *
 * @cssprop {<color>} --rh-pagination-accent-color
 *          Sets the outline color when the page input has focus.
 *          {@default `var(--rh-color-interactive-blue, #0066cc)`}
 * @cssprop {<color>} --rh-pagination-background-focused
 *          Sets the disabled stepper color.
 *          {@default `var(--rh-color-gray-20, #c7c7c7)`}
 * @cssprop {<color>} --rh-pagination-stepper-color
 *           Sets the stepper color.
 *          {@default `var(--rh-color-icon-subtle, #707070)`}
 */
export declare class RhPagination extends LitElement {
    #private;
    static readonly version = "{{version}}";
    static readonly styles: CSSStyleSheet[];
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
    render(): import("lit").TemplateResult<1>;
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