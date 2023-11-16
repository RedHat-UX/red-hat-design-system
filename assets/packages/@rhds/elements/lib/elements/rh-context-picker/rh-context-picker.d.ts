import { LitElement } from 'lit';
import { type ColorPalette } from '../../context/color/provider.js';
import type { Color } from '@rhds/tokens/js/types.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
export declare class ContextChangeEvent extends Event {
    colorPalette: ColorPalette;
    constructor(colorPalette: ColorPalette);
}
export declare class RhContextPicker extends LitElement {
    #private;
    static formAssociated: boolean;
    static readonly styles: import("lit").CSSResult[];
    static readonly palettes: Map<ColorPalette, Color>;
    private static offsets;
    private static paletteNames;
    shadowRoot: ShadowRoot;
    /** ID of context element to toggle (same root) */
    target?: string;
    value: ColorPalette;
    private range?;
    private on?;
    allow: ColorPalette[];
    willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
    formStateRestoreCallback(state: string): void;
    firstUpdated(): void;
    sync(): void;
}
