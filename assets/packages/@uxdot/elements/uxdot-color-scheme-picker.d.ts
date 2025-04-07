import { LitElement } from 'lit';
declare global {
    interface Storage {
        rhdsColorScheme: 'light' | 'dark' | 'light dark';
    }
}
export declare class UxdotColorSchemePicker extends LitElement {
    #private;
    static styles: CSSStyleSheet[];
    scheme?: 'light' | 'dark' | 'light dark';
    connectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
    private schemeChanged;
}
