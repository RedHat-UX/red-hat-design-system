import type { ColorPalette } from '@rhds/elements/lib/context/color/provider.js';
import type { Color } from '@rhds/tokens';
import { LitElement, type ComplexAttributeConverter } from 'lit';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
export declare class ContextChangeEvent extends Event {
    colorPalette: ColorPalette;
    /** the context provider targeted by this element */
    provider: HTMLElement | null;
    constructor(colorPalette: ColorPalette, 
    /** the context provider targeted by this element */
    provider: HTMLElement | null);
}
export declare const ColorPaletteListConverter: ComplexAttributeConverter;
export declare const paletteMap: Map<ColorPalette, Color>;
export declare const paletteNames: ColorPalette[];
export declare class RhContextPicker extends LitElement {
    #private;
    static formAssociated: boolean;
    static readonly styles: CSSStyleSheet[];
    shadowRoot: ShadowRoot;
    /** ID of context element to toggle (same root) */
    target?: string | HTMLElement;
    value: ColorPalette;
    private on?;
    allow: ColorPalette[];
    render(): import("lit-html").TemplateResult<1>;
    formStateRestoreCallback(state: string): void;
    firstUpdated(): void;
    focus(): void;
    sync(): void;
}
