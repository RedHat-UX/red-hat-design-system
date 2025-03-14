/**
 * Context Protocol
 * @link https://github.com/webcomponents-cg/community-protocols/blob/main/proposals/context.md
 */

/**
 * A context key.
 *
 * A context key can be any type of object, including strings and symbols. The
 *  Context type brands the key type with the `__context__` property that
 * carries the type of the value the context references.
 */
export type Context<KeyType, ValueType> = KeyType & {
  __context__: ValueType;
};

/**
 * An unknown context type
 */
export type UnknownContext = Context<unknown, unknown>;

/**
 * A helper type which can extract a Context value type from a Context type
 */
export type ContextType<T extends UnknownContext> = T extends Context<infer _, infer V>
  ? V
  : never;

/**
 * A function which creates a Context value object
 * @param key context key
 */
export function createContext<ValueType>(
  key: unknown,
): Readonly<Context<typeof key, ValueType>> {
  return key as Context<typeof key, ValueType>;
}

/**
 * A callback which is provided by a context requester and is called with the value satisfying the request.
 * This callback can be called multiple times by context providers as the requested value is changed.
 */
export type ContextCallback<ValueType> = (
  value: ValueType,
  unsubscribe?: () => void
) => void;

/**
 * An event fired by a context requester to signal it desires a named context.
 *
 * A provider should inspect the `context` property of the event to determine if it has a value that can
 * satisfy the request, calling the `callback` with the requested value if so.
 *
 * If the requested context event contains a truthy `subscribe` value, then a provider can call the callback
 * multiple times if the value is changed, if this is the case the provider should pass an `unsubscribe`
 * function to the callback which requesters can invoke to indicate they no longer wish to receive these updates.
 */
export class ContextRequestEvent<T extends UnknownContext> extends Event {
  public constructor(
    public readonly context: T,
    public readonly callback: ContextCallback<ContextType<T>>,
    public readonly subscribe?: boolean
  ) {
    super('context-request', { bubbles: true, composed: true });
  }
}
