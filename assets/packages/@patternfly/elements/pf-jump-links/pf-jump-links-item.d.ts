import { LitElement, type TemplateResult } from 'lit';
export declare class PfJumpLinksItem extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: ShadowRootInit;
    /** Whether this item is active. */
    active: boolean;
    /** hypertext reference for this link */
    href?: string;
    render(): TemplateResult<1>;
    protected activeChanged(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-jump-links-item': PfJumpLinksItem;
    }
}
