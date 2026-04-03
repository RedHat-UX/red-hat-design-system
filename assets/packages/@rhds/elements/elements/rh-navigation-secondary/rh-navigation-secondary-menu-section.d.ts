import { LitElement } from 'lit';
/**
 * Groups related links under a heading within a dropdown menu. Automatically
 * wires `aria-labelledby` between the slotted heading and adjacent `<ul>`/`<ol>`
 * for screen reader navigation. Renders as a `<section>` element. Must contain
 * a heading in the `header` slot and a list in the `links` slot. Should
 * provide an `id` on the heading or one will be auto-generated. Tab navigates
 * through links; the heading provides group context to assistive technology.
 *
 * @summary Accessible link group with heading for dropdown menus
 *
 * @slot header - Section heading (h1-h6). Auto-linked to list via aria-labelledby.
 * @slot links - Navigation link list. Expects `<ul>` or `<ol>` element.
 * @slot cta - Optional section-level call to action. Expects `<rh-cta>`.
 */
export declare class RhNavigationSecondaryMenuSection extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-navigation-secondary-menu-section': RhNavigationSecondaryMenuSection;
    }
}
