import { LitElement, type TemplateResult } from 'lit';
/**
 * @slot - Tab panel content
 */
export declare class PfTabPanel extends LitElement {
    static readonly styles: CSSStyleSheet[];
    private ctx?;
    render(): TemplateResult<1>;
    connectedCallback(): void;
    willUpdate(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-tab-panel': PfTabPanel;
    }
}
