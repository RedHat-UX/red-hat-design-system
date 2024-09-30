import type { IconNameFor } from '@rhds/icons';
import { LitElement } from 'lit';
export declare class RhFooterSocialLink extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet;
    /** Icon for this social link e.g. `'facebook'` */
    icon?: IconNameFor<'social'>;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    updated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-footer-social-link': RhFooterSocialLink;
    }
}
