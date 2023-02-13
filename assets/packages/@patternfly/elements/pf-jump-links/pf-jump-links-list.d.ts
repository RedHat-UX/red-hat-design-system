import { LitElement } from 'lit';
/**
 * @cssprop --pf-c-jump-links__list__list__link--PaddingTop -- padding around each link
 * @cssprop --pf-c-jump-links__list__list__link--PaddingBottom
 * @cssprop --pf-c-jump-links__list__list__link--PaddingLeft
 */
export declare class PfJumpLinksList extends LitElement {
    static readonly styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-jump-links-list': PfJumpLinksList;
    }
}
