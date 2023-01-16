import type { Context } from './event.js';
import type { ReactiveController, ReactiveElement } from 'lit';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { StyleController } from '@patternfly/pfe-core/controllers/style-controller.js';
/**
 * A `ColorPalette` is a collection of specific color values
 * Choosing a palette sets both color properties and, if the component is a context provider,
 * implies a color theme for descendents.
 *
 * `ColorPalette` is associated with the `color-palette` attribute
 */
export type ColorPalette = ('base' | 'accent' | 'complement' | 'lighter' | 'lightest' | 'darker' | 'darkest');
/**
 * A Color theme is a context-specific restriction on the available color palettes
 *
 * `ColorTheme` is associated with the `on` attribute and the `--context` css property
 */
export type ColorTheme = ('dark' | 'light' | 'saturated');
export interface ColorContextOptions<T extends ReactiveElement> {
    prefix?: string;
    propertyName?: keyof T;
}
export interface ColorContextProviderOptions<T extends ReactiveElement> extends ColorContextOptions<T> {
    /** Attribute to set context. Providers only */
    attribute?: string;
}
/**
 * Color context is derived from the `--context` css custom property,
 * which *must* be set by the `color-palette` attribute
 * This property is set (in most cases) in `color-context.scss`,
 * which is added to components via `StyleController`.
 *
 * In this way, we avoid the need to execute javascript in order to convert from a given
 * `ColorPalette` to a given `ColorTheme`, since those relationships are specified in CSS.
 */
declare abstract class ColorContextController<T extends ReactiveElement> implements ReactiveController {
    protected host: T;
    abstract update(next: ColorTheme | null): void;
    /** The context object which describes the host's colour context */
    protected context: Context<ColorTheme | null>;
    /** The style controller which provides the necessary CSS. */
    protected styleController: StyleController;
    /** Prefix for colour context. Set this in Options to create a separate context */
    protected prefix: string;
    /** The last-known color context on the host */
    protected last: ColorTheme | null;
    protected logger: Logger;
    hostUpdate?(): void;
    constructor(host: T, options?: ColorContextOptions<T>);
}
/**
 * `ColorContextProvider` is responsible to derive a context value from CSS and provide it to its
 * descendents.
 */
export declare class ColorContextProvider<T extends ReactiveElement> extends ColorContextController<T> implements ReactiveController {
    #private;
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
    update(next?: ColorTheme | null): void;
}
/**
 * A color context consumer receives sets it's context property based on the context provided
 * by the closest color context provider.
 * The consumer has no direct access to the context, it must receive it from the provider.
 */
export declare class ColorContextConsumer<T extends ReactiveElement> extends ColorContextController<T> implements ReactiveController {
    #private;
    private options?;
    constructor(host: T, options?: ColorContextOptions<T> | undefined);
    /** When a consumer connects, it requests colour context from the closest provider. */
    hostConnected(): Promise<void>;
    /** When a consumer disconnects, it's removed from the list of consumers. */
    hostDisconnected(): void;
    /** Sets the `on` attribute on the host and any children that requested multiple updates */
    update(next: ColorTheme | null): void;
}
export declare function colorContextProvider<T extends ReactiveElement>(options?: ColorContextOptions<T>): (proto: T, _propertyName: string) => void;
export declare function colorContextConsumer<T extends ReactiveElement>(options?: ColorContextOptions<T>): (proto: T, _propertyName: string | keyof T) => void;
export {};
