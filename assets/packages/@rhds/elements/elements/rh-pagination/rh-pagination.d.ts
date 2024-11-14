import type { PropertyValues } from 'lit';
import { LitElement } from 'lit';
/**
 * A paginator allows users to navigate between pages of related content.
 * @summary Allows users to navigate content divided into pages
 * @slot            - An ordered list of links
 * @slot go-to-page - "Go to page" text, defaults to "Page"
 * @slot out-of     - "of" text
 * @csspart container - pagination container
 * @csspart numeric-middle - container for the numeric control at medium screen widths
 * @csspart numeric-end - container for the numeric control at small and large screen widths
 * @csspart numeric - shared container for the numeric controls at all widths
 * @cssprop [--rh-pagination-accent-color=var(--rh-color-interactive-blue, #0066cc)]
 *          Sets the outline color when the page input has focus.
 * @cssprop [--rh-pagination-background-focused=var(--rh-color-gray-20, #c7c7c7)]
 *          Sets the disabled stepper color.
 * @cssprop [--rh-pagination-stepper-color=var(--rh-color-icon-subtle, #707070)]
 *           Sets the stepper color.
 */
export declare class RhPagination extends LitElement {
    #private;
    static readonly version = "{{version}}";
    /** Sets color theme based on parent context */
    private on?;
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
    /** Change pagination size to small */
    size: 'sm' | null;
    /** "Open" variant */
    variant?: 'open' | null;
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
