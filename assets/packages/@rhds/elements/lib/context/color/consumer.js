var _ColorContextConsumer_instances, _ColorContextConsumer_propertyName, _ColorContextConsumer_propertyValue_get, _ColorContextConsumer_propertyValue_set, _ColorContextConsumer_dispose, _ColorContextConsumer_override, _ColorContextConsumer_contextCallback;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { isServer } from 'lit';
import { contextEvents, ColorContextController, } from './controller.js';
import { ContextRequestEvent } from '../event.js';
import styles from '@rhds/tokens/css/color-context-consumer.css.js';
/**
 * A color context consumer receives sets it's context property based on the context provided
 * by the closest color context provider.
 * The consumer has no direct access to the context, it must receive it from the provider.
 */
export class ColorContextConsumer extends ColorContextController {
    get value() {
        return __classPrivateFieldGet(this, _ColorContextConsumer_instances, "a", _ColorContextConsumer_propertyValue_get);
    }
    constructor(host, options) {
        super(host, styles);
        _ColorContextConsumer_instances.add(this);
        this.options = options;
        _ColorContextConsumer_propertyName.set(this, void 0);
        _ColorContextConsumer_dispose.set(this, void 0);
        _ColorContextConsumer_override.set(this, null);
        __classPrivateFieldSet(this, _ColorContextConsumer_propertyName, options?.propertyName ?? 'on', "f");
    }
    /** When a consumer connects, it requests colour context from the closest provider. */
    async hostConnected() {
        const { context } = ColorContextController;
        const event = new ContextRequestEvent(context, e => __classPrivateFieldGet(this, _ColorContextConsumer_instances, "m", _ColorContextConsumer_contextCallback).call(this, e), true);
        __classPrivateFieldSet(this, _ColorContextConsumer_override, __classPrivateFieldGet(this, _ColorContextConsumer_instances, "a", _ColorContextConsumer_propertyValue_get), "f");
        contextEvents.set(this.host, event);
        await this.host.updateComplete;
        this.host.dispatchEvent(event);
        __classPrivateFieldSet(this, _ColorContextConsumer_override, null, "f");
    }
    async hostUpdated() {
        if (!isServer && !this.host.hasUpdated) {
            // This is definitely overkill, but it's the only
            // way we've found so far to work around lit-ssr hydration woes
            const original = __classPrivateFieldGet(this, _ColorContextConsumer_instances, "a", _ColorContextConsumer_propertyValue_get);
            if (original) {
                await this.host.updateComplete;
                __classPrivateFieldSet(this, _ColorContextConsumer_instances, '__LIT_SSR_WORKAROUND__', "a", _ColorContextConsumer_propertyValue_set);
                await this.host.updateComplete;
                __classPrivateFieldSet(this, _ColorContextConsumer_instances, original, "a", _ColorContextConsumer_propertyValue_set);
            }
        }
    }
    /** When a consumer disconnects, it's removed from the list of consumers. */
    hostDisconnected() {
        __classPrivateFieldGet(this, _ColorContextConsumer_dispose, "f")?.call(this);
        __classPrivateFieldSet(this, _ColorContextConsumer_dispose, undefined, "f");
        contextEvents.delete(this.host);
    }
    /**
     * Sets the `on` attribute on the host and any children that requested multiple updates
     * @param next the color theme
     */
    update(next) {
        const { last } = this;
        if (!__classPrivateFieldGet(this, _ColorContextConsumer_override, "f") && next !== last) {
            this.last = next;
            __classPrivateFieldSet(this, _ColorContextConsumer_instances, (next ?? undefined), "a", _ColorContextConsumer_propertyValue_set);
        }
        this.options?.callback?.(__classPrivateFieldGet(this, _ColorContextConsumer_instances, "a", _ColorContextConsumer_propertyValue_get));
    }
}
_ColorContextConsumer_propertyName = new WeakMap(), _ColorContextConsumer_dispose = new WeakMap(), _ColorContextConsumer_override = new WeakMap(), _ColorContextConsumer_instances = new WeakSet(), _ColorContextConsumer_propertyValue_get = function _ColorContextConsumer_propertyValue_get() {
    return this.host[__classPrivateFieldGet(this, _ColorContextConsumer_propertyName, "f")];
}, _ColorContextConsumer_propertyValue_set = function _ColorContextConsumer_propertyValue_set(x) {
    this.host[__classPrivateFieldGet(this, _ColorContextConsumer_propertyName, "f")] = x;
    this.host.requestUpdate();
}, _ColorContextConsumer_contextCallback = function _ColorContextConsumer_contextCallback(value, dispose) {
    // protect against changing providers
    if (dispose && dispose !== __classPrivateFieldGet(this, _ColorContextConsumer_dispose, "f")) {
        __classPrivateFieldGet(this, _ColorContextConsumer_dispose, "f")?.call(this);
        __classPrivateFieldSet(this, _ColorContextConsumer_dispose, dispose, "f");
    }
    this.update(value);
};
/**
 * Makes this element a color context consumer
 * @param options options
 */
export function colorContextConsumer(options) {
    return function (proto, _propertyName) {
        const propertyName = _propertyName;
        proto.constructor.addInitializer(instance => {
            const controller = new ColorContextConsumer(instance, { propertyName, ...options });
            // @ts-expect-error: this assignment is strictly for debugging purposes
            instance.__DEBUG_colorContextConsumer = controller;
        });
    };
}
//# sourceMappingURL=consumer.js.map