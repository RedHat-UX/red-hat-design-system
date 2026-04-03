import type { IconNameFor, IconSetName } from '@rhds/icons';
import { LitElement, type TemplateResult } from 'lit';
type Renderable = unknown;
export type IconResolverFunction = (set: string, icon: string) => Renderable | Promise<Renderable>;
/** Fired when an icon fails to load */
export declare class IconResolveErrorEvent extends ErrorEvent {
    /** The original error when importing the icon module */
    originalError: Error;
    constructor(set: string, icon: string, 
    /** The original error when importing the icon module */
    originalError: Error);
}
/**
 * Use to display Red Hat brand icons as decorative or informational elements.
 * Hidden from assistive technology by default (role="presentation"). When
 * `accessible-label` is set, gains role="img" and aria-label for screen
 * readers. Must not be the sole interactive element; wrap in a button or
 * link for keyboard access. Supports lazy, idle, and eager loading. Avoid
 * setting aria-hidden manually.
 *
 * @summary Displays Red Hat brand icons with configurable size and loading
 *
 * @alias icon
 *
 * @fires load - Fired when icon SVG content is loaded and rendered. Bubbles.
 *   No detail payload; check the element's `icon` and `set` properties.
 * @fires error - Fired when icon fails to load. Instance of
 *   {@link IconResolveErrorEvent} with `originalError` containing the
 *   import failure and `message` describing the icon and set.
 *
 * @cssprop [--rh-icon-size] - Controls both width and height (square aspect
 *          ratio). Defaults vary by set: ui icons use `--rh-size-icon-01`
 *          (16px), standard icons use `--rh-size-icon-04` (40px), microns
 *          use 12px (range 8-12px).
 */
export declare class RhIcon extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private static onIntersect;
    private static io;
    private static instances;
    static resolve: IconResolverFunction;
    /**
     * Icon set to load from. Accepts 'standard' | 'ui' | 'microns' or any
     * registered custom set name. Controls default sizing: standard=40px,
     * ui=16px, microns=12px. Defaults to 'standard'.
     */
    set: IconSetName;
    /**
     * Name of the icon within the specified set. When changed, triggers a
     * new icon load. Setting to undefined clears the rendered icon.
     * Defaults to undefined.
     */
    icon?: IconNameFor<IconSetName>;
    /**
     * Accessible label for the icon. When set, applies `role="img"` and
     * `aria-label` so screen readers announce the icon. When absent, the
     * icon uses `role="presentation"` and is hidden from assistive technology.
     * USE for icons that convey meaning not present in surrounding text.
     * Defaults to undefined.
     */
    accessibleLabel?: string;
    /**
     * Controls when the icon data is fetched.
     * - `eager`: loads immediately, blocking the main thread
     * - `idle`: waits for browser idle via requestIdleCallback
     * - `lazy` (default): waits for the element to enter the viewport
     *   via IntersectionObserver. Defaults to 'lazy'.
     */
    loading?: 'idle' | 'lazy' | 'eager';
    /** Icon content. Any value that lit can render */
    private content?;
    connectedCallback(): void;
    render(): TemplateResult;
    updated(): void;
    disconnectedCallback(): void;
    private iconChanged;
    private accessibleLabelChanged;
    private contentChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-icon': RhIcon;
    }
}
export {};
