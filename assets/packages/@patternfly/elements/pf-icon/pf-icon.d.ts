import { LitElement, type PropertyValues, type TemplateResult } from 'lit';
type Renderable = unknown;
export type IconResolverFunction = (set: string, icon: string) => Renderable | Promise<Renderable>;
/** Fired when an icon fails to load */
export declare class IconResolveError extends ErrorEvent {
    /** The original error when importing the icon module */
    originalError: Error;
    constructor(set: string, icon: string, 
    /** The original error when importing the icon module */
    originalError: Error);
}
/**
 * An **icon** component is a container that allows for icons of varying dimensions to
 * seamlessly replace each other without shifting surrounding content.
 * @slot - Slotted content is used as a fallback in case the icon doesn't load
 * @fires load - Fired when an icon is loaded and rendered
 * @fires error - Fired when an icon fails to load
 * @csspart fallback - Container for the fallback (i.e. slotted) content
 * @cssprop {<length>} --pf-icon--size - size of the icon
 */
export declare class PfIcon extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private static onIntersect;
    private static defaultResolve;
    private static io;
    private static resolvers;
    private static instances;
    /**
     * Register a new icon set
     * @param setName - The name of the icon set
     * @param resolver - A function that returns the URL of an icon
     * @example returning a URL object
     *          ```js
     *          PfIcon.addIconSet('rh', (set, icon) =>
     *            new URL(`./icons/${set}/${icon}.js`, import.meta.url));
     *          ```
     * @example returning a string
     *          ```js
     *          PfIcon.addIconSet('rh', (set, icon) =>
     *            `/assets/icons/${set}/${icon}.js`);
     *          ```
     */
    static addIconSet(setName: string, resolver: IconResolverFunction): void;
    /** Removes all added icon sets and resets resolve function */
    static reset(): void;
    /**
     * Gets a renderable icon. Override this to customize how icons are resolved.
     * @param set - The name of the icon set
     * @param icon - The name of the icon
     * @returns The icon content, a node or anything else which lit-html can render
     * @example resolving an icon node from an icon module
     *          ```js
     *          PfIcon.resolve = (set, icon) =>
     *            import(`/assets/icons/${set}/${icon}.js`)
     *              .then(mod => mod.default.cloneNode(true));
     *          ```
     * @example resolving a named export from an icon collection module
     *          ```js
     *          PfIcon.resolve = (set, icon) =>
     *            import(`/assets/icons.js`)
     *              .then(module => module[icon]?.cloneNode(true));
     *          ```
     * @example resolving a new node from an svg file
     *          ```js
     *          const iconCacne = new Map();
     *          function getCachedIconOrNewNode(set, icon, svg) {
     *            const key = `${set}_${icon}`;
     *            if (!iconCache.has(key)) {
     *              const template = document.createElement('template');
     *                    template.innerHTML = svg;
     *              iconCache.set(key, template);
     *            }
     *            return iconCache.get(key);
     *          }
     *          PfIcon.resolve = (set, icon) =>
     *            fetch(`/assets/icons/${set}/${icon}.svg`)
     *              .then(response => response.text())
     *              .then(svg => getCachedIconOrNewNode(set, icon, svg))
     *              .then(node => node.content.cloneNode(true));
     *          ```
     */
    static resolve: IconResolverFunction;
    /** Icon set */
    set: string;
    /** Icon name */
    icon: string;
    /** Size of the icon */
    size: 'sm' | 'md' | 'lg' | 'xl';
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
    render(): TemplateResult<1>;
    protected load(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-icon': PfIcon;
    }
}
export {};
