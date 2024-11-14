import { LitElement, type TemplateResult } from 'lit';
/**
 * A **background image** allows you to place an image in the background of your page or area of a page.
 * @summary Allows users to place an image in the background of your page or area of a page.
 * @slot filter - Overrides the default svg filter for the background image.
 * @cssprop {<color>} [--pf-c-background-image--BackgroundColor=#151515]
 * @cssprop [--pf-c-background-image--Filter=url("#image_overlay")]
 * @cssprop --pf-c-background-image--BackgroundImage
 * @cssprop --pf-c-background-image--BackgroundImage-2x
 * @cssprop --pf-c-background-image--BackgroundImage--sm
 * @cssprop --pf-c-background-image--BackgroundImage--sm-2x
 * @cssprop --pf-c-background-image--BackgroundImage--lg
 */
export declare class PfBackgroundImage extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * The URL for the image shown on mobile
     */
    src?: string;
    /**
     * The image shown on mobile with 2x DPI
     */
    src2x?: string;
    /**
     * The URL for the image shown on small screens (min-width: 576px)
     */
    srcSm?: string;
    /**
     * The URL for the image shown on small screens (min-width: 576px) with 2x DPI
     */
    srcSm2x?: string;
    /**
     * The URL for the image shown on large screens (min-width: 992px)
     */
    srcLg?: string;
    /**
     * Apply SVG Filter to the image
     */
    filter: boolean;
    private _svg?;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-background-image': PfBackgroundImage;
    }
}
