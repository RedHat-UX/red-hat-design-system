import type { ReactiveController, ReactiveElement } from 'lit';
import { ColorContextController, type ColorContextOptions } from './controller.js';
/**
   * A Color theme is a context-specific restriction on the available color palettes
   *
   * `ColorTheme` is associated with the `on` attribute and the `--context` css property
   */
export type ColorTheme = ('dark' | 'light' | 'saturated');
interface ColorContextConsumerOptions<T extends ReactiveElement> extends ColorContextOptions<T> {
    /** Private callback for instances where a consumer is also a provider. */
    callback?: (value: ColorTheme) => void;
}
/**
 * A color context consumer receives sets it's context property based on the context provided
 * by the closest color context provider.
 * The consumer has no direct access to the context, it must receive it from the provider.
 */
export declare class ColorContextConsumer<T extends ReactiveElement> extends ColorContextController<T> implements ReactiveController {
    #private;
    private options?;
    get value(): ColorTheme;
    constructor(host: T, options?: ColorContextConsumerOptions<T> | undefined);
    /** When a consumer connects, it requests colour context from the closest provider. */
    hostConnected(): Promise<void>;
    /** When a consumer disconnects, it's removed from the list of consumers. */
    hostDisconnected(): void;
    /** Sets the `on` attribute on the host and any children that requested multiple updates */
    update(next: ColorTheme | null): void;
}
export declare function colorContextConsumer<T extends ReactiveElement>(options?: ColorContextOptions<T>): (proto: T, _propertyName: string | keyof T) => void;
export {};
