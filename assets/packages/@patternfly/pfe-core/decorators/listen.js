/**
 * Listens for a given event on the custom element.
 * equivalent to calling `this.addEventListener` in the constructor
 * @param type event type e.g. `click`
 * @param options event listener options object e.g. `{ passive: true }`
 */
export function listen(type, options) {
    return function (proto, methodName) {
        const origConnected = proto.connectedCallback;
        const origDisconnected = proto.disconnectedCallback;
        const listener = proto[methodName];
        proto.connectedCallback = function () {
            origConnected?.call(this);
            this.addEventListener(type, listener, options);
        };
        proto.disconnectedCallback = function () {
            origDisconnected?.call(this);
            this.removeEventListener(type, listener, options);
        };
    };
}
//# sourceMappingURL=listen.js.map