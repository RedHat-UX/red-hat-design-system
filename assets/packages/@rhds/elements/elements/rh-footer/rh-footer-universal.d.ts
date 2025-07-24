import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import './rh-footer-copyright.js';
export declare class RhFooterUniversal extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    colorPalette: ColorPalette;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-footer-universal': RhFooterUniversal;
    }
}
