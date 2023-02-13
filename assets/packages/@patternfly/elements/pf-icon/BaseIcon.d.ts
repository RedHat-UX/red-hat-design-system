import type { PropertyValues } from 'lit';
import { LitElement } from 'lit';
export type URLGetter = (set: string, icon: string) => URL;
/**
 * Icon component lazy-loads icons and allows custom icon sets
 *
 * @slot - Slotted content is used as a fallback in case the icon doesn't load
 * @fires load - Fired when an icon is loaded and rendered
 * @fires error - Fired when an icon fails to load
 * @csspart fallback - Container for the fallback (i.e. slotted) content
 */
export declare abstract class BaseIcon extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    static addIconSet(setName: string, getter: typeof BaseIcon['getIconUrl']): void;
    static getIconUrl: URLGetter;
    private static onIntersect;
    private static io;
    private static getters;
    private static instances;
    static defaultIconSet: string;
    /** Icon set */
    set: string;
    /** Icon name */
    icon: string;
    /** Size of the icon */
    abstract size: string;
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
    willUpdate(changed: PropertyValues<this>): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    protected load(): Promise<void>;
}
