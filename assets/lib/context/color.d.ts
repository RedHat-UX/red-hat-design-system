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
export interface ColorContextOptions {
    prefix?: string;
    attribute?: string | false;
    propertyName?: string;
}
/**
 * Color context is derived from the `--context` css custom property,
 * which can be set by the `on` attribute, but *must* be set by the `color-palette` attribute
 * This property is set (in most cases) in `color-context.scss`,
 * which is added to components via `StyleController`.
 *
 * In this way, we avoid the need to execute javascript in order to convert from a given
 * `ColorPalette` to a given `ColorTheme`, since those relationships are specified in CSS.
 */
declare abstract class ColorContextController implements ReactiveController {
    protected host: ReactiveElement;
    abstract update(next: ColorTheme | null): void;
    protected abstract attribute: string;
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
    constructor(host: ReactiveElement, options?: ColorContextOptions);
}
/**
 * `ColorContextProvider` is responsible to derive a context value from CSS and provide it to its
 * descendents.
 */
export declare class ColorContextProvider extends ColorContextController implements ReactiveController {
    #private;
    protected attribute: string;
    /** Cache of context callbacks. Call each to update consumers */
    private callbacks;
    /** Mutation observer which updates consumers when `on` or `color-palette` attributes change. */
    private mo;
    /**
     * Cached (live) computed style declaration
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
     */
    protected style: CSSStyleDeclaration;
    /** Return the current CSS `--context` value, or null */
    protected get contextVariable(): ColorTheme | null;
    constructor(host: ReactiveElement, options?: ColorContextOptions);
    /**
     * When a context provider connects, it listens for context-request events
     * it also fires all previously fired context-request events from their hosts,
     * in case this context provider upgraded after and is closer to a given consumer.
     */
    hostConnected(): void;
    /**
     * When a context provider disconnects, it disconnects its mutation observer
     */
    hostDisconnected(): void;
    /** Was the context event fired requesting our colour-context context? */
    private isColorContextEvent;
    /** Sets the `on` attribute on the host and any children that requested multiple updates */
    update(next: ColorTheme | null): void;
}
/**
 * A color context consumer receives sets it's `on` attribute based on the context provided
 * by the closes color context provider.
 * The consumer has no direct access to the context, it must receive it from the provider.
 */
export declare class ColorContextConsumer extends ColorContextController implements ReactiveController {
    private options?;
    protected attribute: string;
    protected propertyName?: string;
    private dispose?;
    private override;
    constructor(host: ReactiveElement, options?: ColorContextOptions | undefined);
    /**
     * When a color context consumer connects,
     * it requests colour context from the closest context provider,
     * then updates it's host's `on` attribute
     */
    hostConnected(): void;
    /**
     * When a color context consumer disconnects,
     * it removes itself from the collection of components which request color context
     * then updates it's host's `on` attribute
     */
    hostDisconnected(): void;
    /** Register the dispose callback for hosts that requested multiple updates, then update the colour-context */
    private contextCallback;
    /** Sets the `on` attribute on the host and any children that requested multiple updates */
    update(next: ColorTheme | null): void;
}
export declare function colorContextProvider<T extends ReactiveElement>(options?: ColorContextOptions): (proto: T, propertyName: string) => void;
export declare function colorContextConsumer<T extends ReactiveElement>(options?: ColorContextOptions): (proto: T, propertyName: string) => void;
export {};
