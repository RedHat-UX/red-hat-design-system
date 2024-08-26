import { LitElement, type TemplateResult } from 'lit';
/**
 * Caption
 * @slot - Place element content here
 */
export declare class PfCaption extends LitElement {
    static readonly styles: CSSStyleSheet[];
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-caption': PfCaption;
    }
}
