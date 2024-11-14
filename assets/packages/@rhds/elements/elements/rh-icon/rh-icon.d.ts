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
 * Icons represents general concepts and can support text as a decorative
 * element. The icon element is a container that allows users to add icons of
 * varying dimensions in the same area without shifting surrounding content.
 * @summary Decorative element which supports related content
 * @slot - Slotted content is used as a fallback in case the icon doesn't load
 * @fires load - Fired when an icon is loaded and rendered
 * @fires error - Fired when an icon fails to load
 * @csspart fallback - Container for the fallback (i.e. slotted) content
 * @cssprop --rh-icon-size - Override default icon size
 */
export declare class RhIcon extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private static onIntersect;
    private static io;
    private static instances;
    static resolve: IconResolverFunction;
    /** Icon set */
    set?: IconSetName;
    /** Icon name */
    icon?: IconNameFor<IconSetName>;
    /**
     * Defines a string value that labels the icon element.
     * Adds role="img" to element.
     */
    accessibleLabel?: string;
    /**
     * Controls how eager the element will be to load the icon data
     * - `eager`: eagerly load the icon, blocking the main thread
     * - `idle`: wait for the browser to attain an idle state before loading
     * - `lazy` (default): wait for the element to enter the viewport before loading
     */
    loading?: 'idle' | 'lazy' | 'eager';
    /** Icon content. Any value that lit can render */
    private content?;
    connectedCallback(): void;
    render(): TemplateResult;
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
