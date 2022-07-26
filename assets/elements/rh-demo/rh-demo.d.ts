import { LitElement } from 'lit';
export declare class RhDemo extends LitElement {
    static readonly styles: import("lit").CSSResult;
    constructor();
    protected createRenderRoot(): Element | ShadowRoot;
    firstUpdated(): void;
    syncCodeEditor(): void;
    syncPreview(): void;
    render(): import("lit-html").TemplateResult<1>;
}
