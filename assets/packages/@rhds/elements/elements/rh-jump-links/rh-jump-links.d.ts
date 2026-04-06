import { LitElement, type TemplateResult } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * Persistent in-page navigation for jumping to content sections.
 * Renders a `role="navigation"` landmark with `aria-label` from
 * `accessible-label` (required per WCAG 1.3.6 when multiple nav
 * landmarks exist). Supports vertical and horizontal orientations
 * with ScrollSpy auto-highlighting. Avoid nesting more than one
 * level deep.
 *
 * @alias jump-links
 *
 * @summary Persistent navigation links to page sections
 *
 * @fires toggle - Fired when the `expanded` disclosure widget is toggled.
 *   Does not carry additional detail data.
 */
export declare class RhJumpLinks extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Controls the layout direction of jump link items.
     *
     * - `vertical` (default) - Links are stacked vertically, typically displayed on the side of the page
     * - `horizontal` - Links are arranged in a row, with overflow scroll controls when needed
     *
     * ## Usage guidelines
     * - Use `vertical` for sidebar navigation on desktop layouts
     * - Use `horizontal` for mobile-friendly layouts or when space is limited
     * - When horizontal, scroll buttons appear automatically to navigate overflowing links
     * - The orientation cascades to child `<rh-jump-link>` and `<rh-jump-links-list>` elements
     *
     * @see [Orientation](https://ux.redhat.com/elements/jump-links/style/#orientation) in Style documentation
     */
    orientation: 'horizontal' | 'vertical';
    /**
     * Accessible name for the navigation landmark.
     *
     * Provides an `aria-label` for the jump links navigation element, helping screen reader
     * users identify and navigate to this section. This is especially important when multiple
     * navigation landmarks exist on the page.
     *
     * ## Usage guidelines
     * - Use a descriptive label like "On this page" or "Page sections"
     * - Ensure the label is unique if you have multiple `<rh-jump-links>` on the page
     * - Keep labels concise and meaningful for screen reader users
     *
     * ## Accessibility
     * - Jump links use `role="navigation"` creating a navigation landmark
     * - The accessible label helps distinguish this navigation from others on the page
     * - Without an accessible label, screen readers will announce "navigation" without context
     *
     * @see [Accessibility](https://ux.redhat.com/elements/jump-links/accessibility/) documentation
     */
    accessibleLabel?: string;
    connectedCallback(): void;
    firstUpdated(): void;
    protected labelChanged(): void;
    render(): TemplateResult<1>;
    orientationChanged(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-jump-links': RhJumpLinks;
    }
}
