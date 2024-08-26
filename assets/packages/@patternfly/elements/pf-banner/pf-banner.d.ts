import { LitElement, type PropertyValues, type TemplateResult } from 'lit';
export type BannerVariant = ('default' | 'info' | 'warning' | 'danger' | 'success');
/**
 * A banner is a 1-line, full color, full width container that can be used to communicate short snippets of information to users.
 * Banners are un-intrusive and non-dismissible.
 * @summary Allows users to display a stylized banner.
 * @cssprop {<length>} [--pf-c-banner--PaddingTop=0.25rem]
 * @cssprop {<length>} [--pf-c-banner--PaddingRight=1rem]
 * @cssprop {<length>} [--pf-c-banner--PaddingBottom=0.25rem]
 * @cssprop {<length>} [--pf-c-banner--PaddingLeft=1rem]
 * @cssprop {<length>} [--pf-c-banner--md--PaddingRight=1.5rem]
 * @cssprop {<length>} [--pf-c-banner--md--PaddingLeft=1.5rem]
 * @cssprop {<length>} [--pf-c-banner--FontSize=0.875rem]
 * @cssprop {<color>} [--pf-c-banner--BackgroundColor=#4f5255]
 * @cssprop {<color>} [--pf-c-banner--m-info--BackgroundColor=#73bcf7]
 * @cssprop {<color>} [--pf-c-banner--m-danger--BackgroundColor=#c9190b]
 * @cssprop {<color>} [--pf-c-banner--m-success--BackgroundColor=#3e8635]
 * @cssprop {<color>} [--pf-c-banner--m-warning--BackgroundColor=#f0ab00]
 * @cssprop [--pf-c-banner--m-sticky--ZIndex=300]
 * @cssprop [--pf-c-banner--m-sticky--BoxShadow=0 0.5rem 0.5rem -0.375rem rgba(3, 3, 3, 0.18)]
 * @csspart container - The container of the banner
 * @slot icon
 *       Contains the labels's icon, e.g. web-icon-alert-success.
 * @slot
 *       Contains the text for the banner
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
