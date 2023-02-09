import type { ReactiveController, ReactiveElement } from 'lit';
import { ColorContextController, type ColorContextOptions } from './controller.js';
import { type ColorTheme } from './consumer.js';
/**
 * A `ColorPalette` is a collection of specific color values
 * Choosing a palette sets both color properties and, if the component is a context provider,
 * implies a color theme for descendents.
 *
 * `ColorPalette` is associated with the `color-palette` attribute
 */
export type ColorPalette = ('base' | 'accent' | 'complement' | 'lighter' | 'lightest' | 'dark' | 'darker' | 'darkest');
export interface ColorContextProviderOptions<T extends ReactiveElement> extends ColorContextOptions<T> {
    /** Attribute to set context. Providers only */
    attribute?: string;
}
/**
 * `ColorContextProvider` is responsible to derive a context value from CSS and provide it to its
 * descendents.
 */
export declare class ColorContextProvider<T extends ReactiveElement> extends ColorContextController<T> implements ReactiveController {
    #private;
    static contexts: Map<string, "dark" | "light">;
    get local(): "dark" | "light" | undefined;
    get value(): ColorTheme;
    constructor(host: T, options?: ColorContextProviderOptions<T>);
    /**
       * When a context provider connects, it listens for context-request events
       * it also fires all previously fired context-request events from their hosts,
       * in case this context provider upgraded after and is closer to a given consumer.
       */
    hostConnected(): Promise<void>;
    hostUpdated(): void;
    /**
     * When a context provider disconnects, it disconnects its mutation observer
     */
    hostDisconnected(): void;
    /** Calls the context callback for all consumers */
    update(force?: ColorTheme): Promise<void>;
}
/** Makes this element a color context provider which updates its consumers when the decorated field changes */
export declare function colorContextProvider<T extends ReactiveElement>(options?: ColorContextOptions<T>): (proto: T, _propertyName: string) => void;
