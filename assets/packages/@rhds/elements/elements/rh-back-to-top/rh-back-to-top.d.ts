import { LitElement, type PropertyValues } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * Provides a fixed-position anchor link for scrolling back to the top of
 * long pages. Appears after a configurable scroll threshold; should be
 * last in tab order. Renders an `<a>` element so screen readers announce
 * it as a navigation link. Keyboard-accessible via Tab and Enter (WCAG 2.1.1).
 * Avoid placing more than one instance per page.
 *
 * @summary Fixed anchor link for returning to page top on long pages
 *
 * @cssprop --rh-back-to-top-background-color
 * Background color for the back to top button. Defaults to `--rh-color-accent-base`,
 * which uses the design system's primary interactive blue color and automatically
 * adapts to light and dark color schemes (Blue 60 in light, Blue 30 in dark).
 * Custom values must maintain 4.5:1 contrast ratio with text.
 */
export declare class RhBackToTop extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Controls the visibility behavior of the back to top button.
     *
     * - `undefined` (default) - Button appears automatically after scrolling past `scroll-distance`
     * - `always` - Button is always visible, ignoring scroll position
     *
     * ## Usage guidelines
     * - Use the default behavior for most cases to avoid cluttering the viewport
     * - Use `visible="always"` only for testing or special use cases where the button
     *   should be permanently visible regardless of scroll position
     *
     * @example Always visible
     * ```html
     * <rh-back-to-top visible="always">Back to top</rh-back-to-top>
     * ```
     */
    visible?: 'always' | undefined;
    /**
     * CSS selector for the element to monitor for scroll events.
     *
     * When not provided, the component monitors the window's scroll position (default behavior).
     * When provided, monitors the specified element's scroll position instead.
     *
     * ## Usage guidelines
     * - Use the default (window scrolling) for standard page layouts
     * - Set a selector when the main scrollable content is within a specific container element
     * - The selector must point to a scrollable element (with overflow: auto or scroll)
     * - Useful for single-page applications with scrollable panels
     *
     * @example Monitor a specific container
     * ```html
     * <rh-back-to-top scrollable-selector="#main-content">Back to top</rh-back-to-top>
     * ```
     */
    scrollableSelector?: string;
    /**
     * Distance in pixels from the top of the scrollable element to trigger button visibility.
     *
     * The button appears when the user scrolls past this threshold and disappears when
     * scrolling back above it. Default is 400px.
     *
     * ## Usage guidelines
     * - Default 400px works well for most standard page layouts
     * - Increase for longer pages where users need more scroll before the button appears
     * - Decrease for shorter pages or containers where users reach the bottom quickly
     * - Consider page fold height and content length when customizing
     *
     * @example Custom scroll threshold
     * ```html
     * <rh-back-to-top scroll-distance="800">Back to top</rh-back-to-top>
     * ```
     */
    scrollDistance: number;
    /**
     * Page fragment identifier (anchor) for the target element to scroll to.
     *
     * Must be a hash link pointing to an element ID on the page. The hash symbol (#)
     * is automatically prepended if not provided.
     *
     * ## Usage guidelines
     * - The target element should be near the top of the page (typically the page title or skip link)
     * - Ensure the target element has a matching `id` attribute
     * - Common targets: `#top`, `#main`, `#content`, or the page's main heading ID
     * - Without this attribute, clicking the button scrolls to the top of the page/container
     *
     * ## Accessibility
     * - The href creates a proper anchor link for keyboard and screen reader users
     * - Provides a fallback navigation method if JavaScript is disabled
     *
     * @example Link to page top
     * ```html
     * <rh-back-to-top href="#top">Back to top</rh-back-to-top>
     * ```
     */
    href?: string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changed: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-back-to-top': RhBackToTop;
    }
}
