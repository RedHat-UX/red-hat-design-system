import { LitElement } from 'lit';
/**
 * A breadcrumb navigation is a secondary navigation element consisting of a list
 * of links to the parent pages of the current page in hierarchical order. It
 * helps users find their place within a website or web application.
 * @summary Links displaying a hierarchical location
 *
 * @alias breadcrumb
 *
 */
export declare class RhBreadcrumb extends LitElement {
    /**
     * Customize the default `aria-label` on the `<nav>` container.
     * Defaults to "Breadcrumb" if no attribute/property is set.
     */
    accessibleLabel?: string;
    /**
     * Sets variants to breadcrumbs
     */
    variant?: 'subtle';
    static readonly styles: CSSStyleSheet[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-breadcrumb': RhBreadcrumb;
    }
}
