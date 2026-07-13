import type { ReactiveController, ReactiveElement } from 'lit';
/**
 * @deprecated use context, especially via `@patternfly/pfe-core/functions/context.js`;
 */
export interface Options<E extends ReactiveElement> {
    properties: Partial<Record<keyof E, string | string[]>>;
    prefix?: string;
}
/**
 * @deprecated use context, especially via `@patternfly/pfe-core/functions/context.js`;
 */
export declare class CascadeController<E extends ReactiveElement> implements ReactiveController {
    host: E;
    options?: Options<E> | undefined;
    private class;
    private logger;
    static instances: WeakMap<ReactiveElement, CascadeController<ReactiveElement>>;
    mo: MutationObserver;
    cache: Map<string, string[]>;
    constructor(host: E, options?: Options<E> | undefined);
    hostUpdated(): void;
    hostConnected(): void;
    hostDisconnected(): void;
    /**
     * Handles the cascading of properties to nested components when new elements are added
     * Attribute updates/additions are handled by the attribute callback
     * @param [nodeList=this.host.children]
     */
    cascadeProperties(nodeList?: HTMLCollection | NodeList): void;
    /**
     * Gets the configured attribute name for the decorated property,
     * falling back to the lowercased property name, and caches the attribute name
     * with it's designated child selectors for value-propagation on change
     * @param propName
     * @param cascade
     */
    initProp(propName: string, cascade: string | string[]): void;
    private parse;
    /**
     * Copy the named attribute to a target element.
     * @param name attr name
     * @param el element
     */
    private _copyAttribute;
    private _cascadeAttributes;
    /**
     * Trigger a cascade of the named attribute to any child elements that match
     * the `to` selector.  The selector can match elements in the light DOM and
     * shadow DOM.
     * @param  name The name of the attribute to cascade (not necessarily the same as the property name).
     * @param  to A CSS selector that matches the elements that should received the cascaded attribute.  The selector will be applied within `this` element's light and shadow DOM trees.
     */
    private _cascadeAttribute;
}
