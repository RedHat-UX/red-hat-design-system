import { LitElement } from 'lit';
export declare abstract class BaseTabPanel extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
}
