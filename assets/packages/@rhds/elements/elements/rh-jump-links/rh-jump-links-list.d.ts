import { LitElement, type TemplateResult } from 'lit';
/**
 */
export declare class RhJumpLinksList extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** Whether the layout of children is vertical or horizontal. */
    private orientation?;
    /** Whether this item is active. */
    active: boolean;
    protected activeChanged(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-jump-links-list': RhJumpLinksList;
    }
}
