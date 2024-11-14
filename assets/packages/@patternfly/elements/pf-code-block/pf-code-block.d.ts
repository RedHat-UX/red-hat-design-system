import { LitElement, type TemplateResult } from 'lit';
export declare class PfCodeBlock extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** Flag for whether the code block is expanded */
    expanded: boolean;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-code-block': PfCodeBlock;
    }
}
