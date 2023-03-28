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
    static readonly shadowRootOptions: ShadowRootInit;
    /** Whether this item is active. */
    active: boolean;
    /** hypertext reference for this link */
    href?: string;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private activeChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-jump-links-item': PfJumpLinksItem;
    }
}
