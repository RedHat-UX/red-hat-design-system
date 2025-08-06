import type { IconNameFor } from '@rhds/icons';
import { LitElement } from 'lit';
/**
 * Social media links for Red Hat Footer
 */
export declare class RhFooterSocialLink extends LitElement {
    static readonly styles: CSSStyleSheet;
    /** Icon for this social link e.g. `'facebook'` */
    icon?: IconNameFor<'social'>;
    /** Social link address */
    href?: string;
    /** Textual label for the social link e.g. "Instagram" */
    accessibleLabel?: string;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    updated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-footer-social-link': RhFooterSocialLink;
    }
}
