import { LitElement } from 'lit';
/**
 * A menu section which auto upgrades accessibility for headers and sibling list
 * @summary 'A menu section which auto upgrades accessibility for headers and sibling list'
 * @slot header     - Adds a header tag to section, expects `<h1> | <h2> | <h3> | <h4> | <h5> | <h6>` element
 * @slot links      - Adds a ul tag to section, expects `<ul> | <ol>` element
 * @slot cta        - Adds a section level CTA, expects `<rh-cta>` element
 * @csspart container    - container, <section> element
 */
export declare class RhNavigationSecondaryMenuSection extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
/** @deprecated use rh-navigation-secondary-menu-section */
declare class RhSecondaryNavMenuSection extends RhNavigationSecondaryMenuSection {
    #private;
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-navigation-secondary-menu-section': RhNavigationSecondaryMenuSection;
        'rh-secondary-nav-menu-section': RhSecondaryNavMenuSection;
    }
}
export {};