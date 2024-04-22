import { LitElement, type PropertyValues } from 'lit';
import { type ColorPalette } from '../../context/color/provider.js';
import '@rhds/elements/rh-surface/rh-surface.js';
export declare class RhContextDemo extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    static formAssociated: boolean;
    value: ColorPalette;
    label: string;
    colorPalette: ColorPalette;
    render(): import("lit").TemplateResult<1>;
    willUpdate(changed: PropertyValues<this>): void;
    formStateRestoreCallback(state: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-context-demo': RhContextDemo;
    }
}
