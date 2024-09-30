import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/context/color/provider.js';
export declare class UxdotExample extends LitElement {
    static styles: CSSStyleSheet[];
    /**
     * Sets color context for child components, overrides parent context
     */
    colorPalette?: ColorPalette;
    /**
     * Sets color theme based on parent context
     */
    private on?;
    transparent: boolean;
    variant?: 'full';
    widthAdjustment: string;
    noBorder: boolean;
    danger: boolean;
    alignment: string;
    render(): import("lit-html").TemplateResult<1>;
}
