import { LitElement } from 'lit';
export declare class UxdotToc extends LitElement {
    static styles: CSSStyleSheet[];
    summary?: string;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class UxdotTocList extends LitElement {
    #private;
    static styles: CSSStyleSheet[];
    render(): import("lit-html").TemplateResult<1>;
}
export declare class UxdotTocItem extends LitElement {
    #private;
    static styles: CSSStyleSheet[];
    href?: string;
    render(): import("lit-html").TemplateResult<1>;
}
