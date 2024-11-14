import { ReactiveElement } from 'lit';
import { type ColorTheme } from '@rhds/elements/lib/context/color/consumer.js';
import { type ColorPalette } from '@rhds/elements/lib/context/color/provider.js';
export declare class ContextConsumer extends ReactiveElement {
    on?: ColorTheme;
}
export declare class ContextConsumerProvider extends ReactiveElement {
    on?: ColorTheme;
    colorPalette?: ColorPalette;
}
export declare class ContextProviderConsumer extends ReactiveElement {
    colorPalette?: ColorPalette;
    on?: ColorTheme;
}
