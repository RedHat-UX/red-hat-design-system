import { LitElement } from 'lit';
/**
 * A breadcrumb provides secondary navigation for showing the user's
 * hierarchical location within a site. Users must slot an `<ol>` with
 * `<li>` items containing `<a>` links. The last item should carry
 * `aria-current="page"` so screen readers announce the current page.
 * Keyboard users navigate breadcrumb links with Tab and activate
 * them with Enter.
 *
 * @summary Displays a hierarchical trail of links showing the user's
 *          location within a site
 *
 * @alias breadcrumb
 *
 * @cssprop [--rh-breadcrumb-caret-image={svg encoded as data URI}] -
 *          The `mask-image` separator icon between items; theme by
 *          providing an SVG data URI. Uses `--rh-color-icon-secondary`
 *          design token for the icon background color.
 * @cssprop [--rh-breadcrumb-li-padding-inline-end=var(--rh-space-lg, 16px)] -
 *          Inline-end spacing per item; defaults to the `--rh-space-lg`
 *          design token (16px)
 * @cssprop [--rh-breadcrumb-link-color=var(--rh-color-interactive-primary-default)] -
 *          Link color for anchors; defaults to the
 *          `--rh-color-interactive-primary-default` design token
 */
export declare class RhBreadcrumb extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Customizes the `aria-label` on the internal `<nav>` element.
     * Defaults to "Breadcrumb" when not set. Authors should override
     * this value when more than one breadcrumb navigation appears on
     * the same page so screen readers can distinguish between them.
     */
    accessibleLabel?: string;
    /**
     * Sets the visual variant for the breadcrumb. The `subtle` variant
     * uses secondary text color for the current-page item and a muted
     * separator icon, which authors should use on darker backgrounds
     * or when the breadcrumb should appear less prominent.
     */
    variant?: 'subtle';
    /**
     * When true, breadcrumb lists with five or more items are truncated:
     * middle items are hidden and replaced by an ellipsis button that
     * users can activate to reveal the full trail. Lists with fewer
     * than five items are not affected. The truncation button is
     * keyboard-accessible and announces its purpose to screen readers.
     */
    truncate?: boolean | undefined;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * After first render, applies truncation when the `truncate` attribute
     * is set and the list contains five or more items. Middle items
     * (all except the first and last two) are hidden and an ellipsis
     * button is inserted before them.
     */
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-breadcrumb': RhBreadcrumb;
    }
}
