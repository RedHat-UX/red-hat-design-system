import { LitElement, type TemplateResult } from 'lit';
/**
 * @cssprop --pf-c-jump-links__list__list__link--PaddingTop -- padding around each link
 * @cssprop --pf-c-jump-links__list__list__link--PaddingBottom
 * @cssprop --pf-c-jump-links__list__list__link--PaddingLeft
 */
export declare class PfJumpLinksList extends LitElement {
    static readonly styles: CSSStyleSheet[];
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-jump-links-list': PfJumpLinksList;
    }
}
