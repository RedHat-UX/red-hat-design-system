import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import { LitElement } from 'lit';
export declare class RhContextDemo extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static formAssociated: boolean;
    label: string;
    colorPalette: ColorPalette;
    protected render(): import("lit-html").TemplateResult<1>;
    protected colorPaletteChanged(): void;
    protected formStateRestoreCallback(state: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-context-demo': RhContextDemo;
    }
}
