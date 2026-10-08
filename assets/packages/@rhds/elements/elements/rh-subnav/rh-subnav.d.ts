import { LitElement } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * A subnavigation provides a horizontal list of links for navigating
 * related pages. Authors should slot `<rh-navigation-link>` elements as
 * children. Each link must have visible text content for accessibility.
 * When more than one subnav appears on a page, authors should set
 * `accessible-label` so screen readers can distinguish them.
 *
 * Overflow scroll buttons appear when links exceed the available space.
 * All links are keyboard accessible via Tab and Enter.
 *
 * @summary Displays a horizontal list of navigation links for related pages
 *
 * @alias Subnavigation
 *
 */
export declare class RhSubnav extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private static instances;
    /**
     * Customize the default `aria-label` on the `<nav>` container.
     * Defaults to "subnavigation" if no attribute/property is set.
     */
    accessibleLabel: string;
    /**
     * Label for the scroll back button
     */
    labelScrollLeft: string;
    /**
     * Label for the scroll forward button
     */
    labelScrollRight: string;
    private linkList;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-subnav': RhSubnav;
    }
}
