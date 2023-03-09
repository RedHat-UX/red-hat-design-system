import { LitElement } from 'lit';
export declare class RhFooterSocialLink extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult;
    icon?: string;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    updated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-footer-social-link': RhFooterSocialLink;
    }
}
