import { LitElement, type TemplateResult } from 'lit';
/**
 * @slot - Tab panel content
 * @cssprop {<color>} [--pf-c-tab-content--m-light-300=#f0f0f0]
 * @csspart container - container for the panel content
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
