import { LitElement } from 'lit';
export declare class RhFooterSocialLink extends LitElement {
    static readonly styles: import("lit").CSSResult;
    private logger;
    icon: string | null;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    updated(): void;
    private updateLightdom;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-footer-social-link': RhFooterSocialLink;
    }
}
