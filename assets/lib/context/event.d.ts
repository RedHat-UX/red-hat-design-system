/**
 * Context Protocol
 * @link https://github.com/webcomponents-cg/community-protocols/blob/main/proposals/context.md
 */
/**
 * A Context object defines an optional initial value for a Context, as well as a name identifier for debugging purposes.
 */
export declare type Context<T> = {
    name: string;
    initialValue?: T;
};
/**
 * An unknown context typeU
 */
export declare type UnknownContext = Context<unknown>;
/**
 * A helper type which can extract a Context value type from a Context type
 */
export declare type ContextType<T extends UnknownContext> = T extends Context<infer Y> ? Y : never;
/**
 * A function which creates a Context value object
 */
export declare function createContext<T>(name: string, initialValue?: T): Readonly<Context<T>>;
/**
 * A callback which is provided by a context requester and is called with the value satisfying the request.
 * This callback can be called multiple times by context providers as the requested value is changed.
 */
export declare type ContextCallback<ValueType> = (value: ValueType, dispose?: () => void) => void;
/**
 * An event fired by a context requester to signal it desires a named context.
 *
 * A provider should inspect the `context` property of the event to determine if it has a value that can
 * satisfy the request, calling the `callback` with the requested value if so.
 *
 * If the requested context event contains a truthy `multiple` value, then a provider can call the callback
 * multiple times if the value is changed, if this is the case the provider should pass a `dispose`
 * method to the callback which requesters can invoke to indicate they no longer wish to receive these updates.
 */
export declare class ContextEvent<T extends UnknownContext> extends Event {
    readonly context: T;
    readonly callback: ContextCallback<ContextType<T>>;
    readonly multiple?: boolean | undefined;
    constructor(context: T, callback: ContextCallback<ContextType<T>>, multiple?: boolean | undefined);
}
declare global {
    interface HTMLElementEventMap {
        /**
         * A 'context-request' event can be emitted by any element which desires
         * a context value to be injected by an external provider.
         */
        'context-request': ContextEvent<UnknownContext>;
    }
}
