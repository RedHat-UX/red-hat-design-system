import { LitElement } from 'lit';
import { type ColorPalette } from '../../lib/context/color/provider.js';
import './rh-footer-copyright.js';
/**
 * @csspart base
 * @csspart base
 * @slot    heading - text that describes the footer section to assistive tecchnology. Contains default text "Red Hat footer".
 * @slot    logo
 * @csspart logo
 * @slot    logo-image
 * @csspart logo-image
 * @slot    primary
 * @csspart primary
 * @slot    primary-start
 * @csspart primary-start
 * @slot    primary-end
 * @csspart primary-end
 * @slot    secondary
 * @csspart secondary
 * @slot    secondary-start
 * @csspart secondary-start
 * @slot    secondary-end
 * @csspart secondary-end
 * @slot    links-primary
 * @csspart links-primary
 * @slot    links-secondary
 * @csspart links-secondary
 * @slot    tertiary
 * @csspart tertiary
 */
export declare class RhFooterUniversal extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    colorPalette: ColorPalette;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-footer-universal': RhFooterUniversal;
    }
}
