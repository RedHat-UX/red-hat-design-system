import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
export declare class UxdotExample extends LitElement {
    static styles: CSSStyleSheet[];
    /**
     * Sets color context for child components, overrides parent context
     */
    colorPalette?: ColorPalette;
    transparent: boolean;
    variant?: 'full';
    widthAdjustment: string;
    noBorder: boolean;
    danger: boolean;
    alignment: string;
    render(): import("lit-html").TemplateResult<1>;
}
