import type { PropertyValues } from 'lit';
import { LitElement } from 'lit';
/**
 * Pagination allows users to navigate between pages of related content.
 * Use it when content is too long for a single view. Authors must
 * provide a single `<ol>` with `<li><a>` page links where the active
 * page should have `aria-current="page"`. Tab navigates between controls;
 * Enter activates. Supports box and open variants, default and small sizes.
 *
 * @summary Navigate between pages of content with steppers and input
 */
export declare class RhPagination extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private static instances;
    /**
     * Controls which end(s) of the page list are truncated with ellipsis.
     * Accepts `'start'` | `'end'` | `'both'` | `null`. Computed automatically
     * from page count and current index. Reflected to the host attribute so
     * light-DOM CSS can hide overflow `<li>` elements. Defaults to `null`.
     */
    overflow: 'start' | 'end' | 'both' | null;
    /** Accessible label for the `<nav>` landmark. Should be unique when multiple paginations exist on a page. Defaults to `'Page navigation'`. */
    label: string;
    /** Accessible label for the first-page stepper button. Used by screen readers. Defaults to `'first page'`. */
    labelFirst: string;
    /** Accessible label for the previous-page stepper button. Used by screen readers. Defaults to `'previous page'`. */
    labelPrevious: string;
    /** Accessible label for the next-page stepper button. Used by screen readers. Defaults to `'next page'`. */
    labelNext: string;
    /** Accessible label for the last-page stepper button. Used by screen readers. Defaults to `'last page'`. */
    labelLast: string;
    /** Controls pagination size. Accepts `'sm'` for smaller touch targets (WCAG AA) or `null` for default (WCAG AAA). Defaults to `null`. */
    size: 'sm' | null;
    /** Visual variant. Accepts `'borderless'` for transparent backgrounds with bottom borders, or `null` for the default box variant. Defaults to `null`. */
    variant?: 'borderless' | null;
    private input?;
    private total;
    private firstHref?;
    private lastHref?;
    private nextHref?;
    private prevHref?;
    private currentHref?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    update(changed: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(): void;
    render(): import("lit-html").TemplateResult<1>;
    /** Navigate to the first page */
    first(): Promise<void>;
    /** Navigate to the previous page */
    prev(): Promise<void>;
    /** Navigate to the next page */
    next(): Promise<void>;
    /** Navigate to the last page */
    last(): Promise<void>;
    /**
     * Navigate to a specific page
     * @param page
     */
    go(page: 'first' | 'prev' | 'next' | 'last' | number): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-pagination': RhPagination;
    }
}
