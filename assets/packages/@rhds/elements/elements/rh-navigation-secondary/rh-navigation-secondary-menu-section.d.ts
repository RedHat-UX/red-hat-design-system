import { LitElement } from 'lit';
/**
 * @summary 'A menu section which auto upgrades header and sibling link list accessibility attributes'
 *
 * @slot header     - Adds a header tag to section, expects `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>`
 * @slot links      - Adds a ul tag to section, expects `<ul>, <ol>`
 * @slot cta        - Adds a section level CTA, expects `<rh-cta>`
 *
 * @csspart base    - container, <section> element
**/
export declare class RhNavigationSecondaryMenuSection extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
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
