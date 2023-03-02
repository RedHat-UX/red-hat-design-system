/**
 * Context Protocol
 * @link https://github.com/webcomponents-cg/community-protocols/blob/main/proposals/context.md
 */
/**
 * A function which creates a Context value object
 */
export function createContext(name, initialValue) {
    return {
        name,
        initialValue,
    };
}
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
export class ContextEvent extends Event {
    constructor(context, callback, multiple) {
        super('context-request', { bubbles: true, composed: true });
        this.context = context;
        this.callback = callback;
        this.multiple = multiple;
    }
}
//# sourceMappingURL=event.js.map