import { LitElement, type PropertyValues, type TemplateResult } from 'lit';
export type BannerVariant = ('default' | 'info' | 'warning' | 'danger' | 'success');
/**
 * A banner is a 1-line, full color, full width container that can be used to communicate short snippets of information to users.
 * Banners are un-intrusive and non-dismissible.
 * @summary Allows users to display a stylized banner.
 * @alias Banner
 */
export declare class PfBanner extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** Changes the visual appearance of the banner. */
    variant?: BannerVariant;
    /** Shorthand for the `icon` slot, the value is icon name */
    icon?: string;
    /** Shorthand for the `icon` slot, the value is icon name */
    sticky: boolean;
    willUpdate(changed: PropertyValues<this>): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-banner': PfBanner;
    }
}
