import { LitElement } from 'lit';
/**
 * A breadcrumb navigation is a secondary navigation element consisting of a list
 * of links to the parent pages of the current page in hierarchical order. It
 * helps users find their place within a website or web application.
 * @summary Links displaying a hierarchical location
 *
 * @alias breadcrumb
 * @cssprop [--rh-breadcrumb-caret-image={svg encoded as data URI}] -
 * The default `mask-image` separating each breadcrumb item
 * @cssprop [--rh-breadcrumb-li-padding-inline-end=var(--rh-space-lg, 16px)] -
 * Sets the spacing between each breadcrumb item.
 * @cssprop [--rh-breadcrumb-link-color=var(--rh-color-interactive-primary-default)] -
 * The link color for each anchor in the list
 */
export declare class RhBreadcrumb extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Customize the default `aria-label` on the `<nav>` container.
     * Defaults to "Breadcrumb" if no attribute/property is set.
     */
    accessibleLabel?: string;
    /**
     * Sets variants to breadcrumbs
     */
    variant?: 'subtle';
    /**
   * Breadcrumbs over four items will be truncated and include a button to expand the middle breadcrumb items
   */
    truncate?: boolean | undefined;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-breadcrumb': RhBreadcrumb;
    }
}
