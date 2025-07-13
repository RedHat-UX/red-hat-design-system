import { LitElement } from 'lit';
export declare class UxdotDemo extends LitElement {
    #private;
    static styles: CSSStyleSheet[];
    /** For these tags, do not center the primary-demo content in the frame */
    private static tagsWithFullWidthDemos;
    tag: string;
    demo: string;
    attributeKnobs: string[];
    demoTitle: string;
    demoUrl: string;
    demoSourceUrl: string;
    demoFilePath: string;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
    setDemoElementAttribute(name: string, value: string | boolean | null): Promise<void>;
    getDemoElementAttribute(name: string): Promise<string | null>;
}
declare global {
    interface HTMLElementTagNameMap {
        'uxdot-demo': UxdotDemo;
    }
}
