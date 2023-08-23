import { LitElement, type PropertyValues } from 'lit';
export type BannerVariant = ('default' | 'info' | 'warning' | 'danger' | 'success');
/**
 * A banner is a 1-line, full color, full width container that can be used to communicate short snippets of information to users.
 * Banners are un-intrusive and non-dismissible.
 *
 * @summary Allows users to display a stylized banner.
 *
 * @cssprop {<length>} --pf-c-banner--PaddingTop  {@default `0.25rem`}
 * @cssprop {<length>} --pf-c-banner--PaddingRight  {@default `1rem`}
 * @cssprop {<length>} --pf-c-banner--PaddingBottom  {@default `0.25rem`}
 * @cssprop {<length>} --pf-c-banner--PaddingLeft  {@default `1rem`}
 *
 * @cssprop {<length>} --pf-c-banner--md--PaddingRight  {@default `1.5rem`}
 * @cssprop {<length>} --pf-c-banner--md--PaddingLeft  {@default `1.5rem`}
 *
 * @cssprop {<length>} --pf-c-banner--FontSize {@default `0.875rem`}
 *
 * @cssprop {<color>} --pf-c-banner--BackgroundColor  {@default `#4f5255`}
 * @cssprop {<color>} --pf-c-banner--m-info--BackgroundColor  {@default `#73bcf7`}
 * @cssprop {<color>} --pf-c-banner--m-danger--BackgroundColor  {@default `#c9190b`}
 * @cssprop {<color>} --pf-c-banner--m-success--BackgroundColor  {@default `#3e8635`}
 * @cssprop {<color>} --pf-c-banner--m-warning--BackgroundColor  {@default `#f0ab00`}
 *
 * @cssprop --pf-c-banner--m-sticky--ZIndex  {@default `300`}
 *
 * @cssprop --pf-c-banner--m-sticky--BoxShadow {@default `0 0.5rem 0.5rem -0.375rem rgba(3, 3, 3, 0.18)`}
 *
 * @csspart container - The container of the banner
 *
 * @slot icon
 *       Contains the labels's icon, e.g. web-icon-alert-success.
 * @slot
 *       Contains the text for the banner
 */
export declare class PfBanner extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    /** Changes the visual appearance of the banner. */
    variant?: BannerVariant;
    /** Shorthand for the `icon` slot, the value is icon name */
    icon?: string;
    /** Shorthand for the `icon` slot, the value is icon name */
    sticky: boolean;
    willUpdate(changed: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-banner': PfBanner;
    }
}
