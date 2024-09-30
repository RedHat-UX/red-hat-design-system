import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/context/color/provider.js';
import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-code-block/rh-code-block.js';
import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
export declare class UxdotPattern extends LitElement {
    #private;
    static styles: CSSStyleSheet[];
    colorPalette: ColorPalette;
    private on?;
    target: string;
    noColorPicker: boolean;
    stacked: boolean;
    allow: ColorPalette[];
    render(): import("lit-html").TemplateResult<1>;
}
