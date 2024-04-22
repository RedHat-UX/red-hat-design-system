import { LitElement } from 'lit';
/**
 * Caption
 * @slot - Place element content here
 */
export declare class PfCaption extends LitElement {
    static readonly styles: CSSStyleSheet[];
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-caption': PfCaption;
    }
}
