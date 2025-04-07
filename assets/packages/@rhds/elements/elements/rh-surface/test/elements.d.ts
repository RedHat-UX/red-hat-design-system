import { LitElement } from 'lit';
import { type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
declare class RendersText extends LitElement {
    #private;
    static styles: import("lit").CSSResult[];
    get on(): "light" | "dark" | "nothing";
    render(): import("lit-html").TemplateResult<1>;
}
export declare class ContextConsumer extends RendersText {
}
export declare class ContextConsumerProvider extends RendersText {
    colorPalette?: ColorPalette;
}
export declare class ContextProviderConsumer extends RendersText {
    colorPalette?: ColorPalette;
}
export {};
