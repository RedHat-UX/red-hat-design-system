import { LitElement, type PropertyValues } from 'lit';
import { type ColorPalette } from '../../context/color/provider.js';
import '@rhds/elements/lib/elements/rh-context-provider/rh-context-provider.js';
export declare class RhContextDemo extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    static formAssociated: boolean;
    value: ColorPalette;
    label: string;
    colorPalette: ColorPalette;
    render(): import("lit-html").TemplateResult<1>;
    willUpdate(changed: PropertyValues<this>): void;
    formStateRestoreCallback(state: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-context-demo': RhContextDemo;
    }
}
