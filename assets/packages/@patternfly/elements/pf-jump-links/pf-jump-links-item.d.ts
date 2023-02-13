import { LitElement } from 'lit';
/**
 * @cssprop --pf-c-jump-links__link--PaddingTop -- padding around the link
 * @cssprop --pf-c-jump-links__link--PaddingRight
 * @cssprop --pf-c-jump-links__link--PaddingBottom
 * @cssprop --pf-c-jump-links__link--PaddingLeft
 * @cssprop --pf-c-jump-links__link--OutlineOffset
 * @cssprop --pf-c-jump-links__link-text--Color
 */
export declare class PfJumpLinksItem extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    link: HTMLAnchorElement;
    active: boolean;
    href?: string;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    focus(): void;
    private activeChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-jump-links-item': PfJumpLinksItem;
    }
}
