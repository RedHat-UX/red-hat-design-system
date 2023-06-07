import { type ColorPalette } from '../../context/color/provider.js';
import { LitElement, type PropertyValues } from 'lit';
export declare class RhContextPicker extends LitElement {
    #private;
    static formAssociated: boolean;
    static readonly styles: import("lit").CSSResult[];
    static readonly palettes: ColorPalette[];
    shadowRoot: ShadowRoot;
    /** ID of context element to toggle (same root) */
    target?: string;
    value?: ColorPalette;
    range?: HTMLInputElement;
    render(): import("lit-html").TemplateResult<1>;
    formStateRestoreCallback(state: string): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    sync(): void;
}
