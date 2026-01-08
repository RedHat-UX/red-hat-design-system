import { LitElement, type TemplateResult } from 'lit';
export declare class PfJumpLinksList extends LitElement {
    static readonly styles: CSSStyleSheet[];
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-jump-links-list': PfJumpLinksList;
    }
}
