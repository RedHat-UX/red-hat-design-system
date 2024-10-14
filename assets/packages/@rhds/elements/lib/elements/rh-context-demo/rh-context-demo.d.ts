import { LitElement, type PropertyValues } from 'lit';
import { type ColorPalette } from '../../context/color/provider.js';
import '@rhds/elements/rh-surface/rh-surface.js';
export declare class RhContextDemo extends LitElement {
    #private;
    static readonly styles: (CSSStyleSheet | import("lit").CSSResult)[];
    static formAssociated: boolean;
    value: ColorPalette;
    label: string;
    colorPalette: ColorPalette;
    protected render(): import("lit-html").TemplateResult<1>;
    protected willUpdate(changed: PropertyValues<this>): void;
    protected formStateRestoreCallback(state: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-context-demo': RhContextDemo;
    }
}
