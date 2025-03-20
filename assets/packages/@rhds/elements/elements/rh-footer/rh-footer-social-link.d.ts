import type { IconNameFor } from '@rhds/icons';
import { LitElement } from 'lit';
/**
 * Displays a linked icon to a social media property
 * @summary Displays a linked icon to a social media property
 * @slot    - Add an anchor tag linking to a social media property
*/
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
