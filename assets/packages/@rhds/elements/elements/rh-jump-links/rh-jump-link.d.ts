import { LitElement, type TemplateResult } from 'lit';
export declare class RhJumpLink extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static readonly shadowRootOptions: ShadowRootInit;
    /** Whether the layout of children is vertical or horizontal. */
    private orientation?;
    /** Whether this item is active. */
    active: boolean;
    /** hypertext reference for this link */
    href?: string;
    connectedCallback(): void;
    render(): TemplateResult<1>;
    protected activeChanged(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-jump-link': RhJumpLink;
    }
}
