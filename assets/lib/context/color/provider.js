var _ColorContextProvider_instances, _ColorContextProvider_attribute, _ColorContextProvider_callbacks, _ColorContextProvider_mo, _ColorContextProvider_style, _ColorContextProvider_initialized, _ColorContextProvider_logger, _ColorContextProvider_consumer, _ColorContextProvider_local_get, _ColorContextProvider_isColorContextEvent, _ColorContextProvider_onChildContextEvent;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { contextEvents, ColorContextController, } from './controller.js';
import { ColorContextConsumer } from './consumer.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
/**
 * `ColorContextProvider` is responsible to derive a context value from CSS and provide it to its
 * descendents.
 */
export class ColorContextProvider extends ColorContextController {
    get local() {
        return __classPrivateFieldGet(this, _ColorContextProvider_instances, "a", _ColorContextProvider_local_get);
    }
    get value() {
        return __classPrivateFieldGet(this, _ColorContextProvider_instances, "a", _ColorContextProvider_local_get) ?? __classPrivateFieldGet(this, _ColorContextProvider_consumer, "f").value;
    }
    constructor(host, options) {
        const { attribute = 'color-palette', ...rest } = options ?? {};
        super(host, rest);
        _ColorContextProvider_instances.add(this);
        _ColorContextProvider_attribute.set(this, void 0);
        /** Cache of context callbacks. Call each to update consumers */
        _ColorContextProvider_callbacks.set(this, new Set());
        /** Mutation observer which updates consumers when `color-palette` attribute change. */
        _ColorContextProvider_mo.set(this, new MutationObserver(() => this.update()));
        /**
         * Cached (live) computed style declaration
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
         */
        _ColorContextProvider_style.set(this, void 0);
        _ColorContextProvider_initialized.set(this, false);
        _ColorContextProvider_logger.set(this, void 0);
        _ColorContextProvider_consumer.set(this, void 0);
        __classPrivateFieldSet(this, _ColorContextProvider_consumer, new ColorContextConsumer(host, { callback: value => this.update(value) }), "f");
        __classPrivateFieldSet(this, _ColorContextProvider_logger, new Logger(host), "f");
        __classPrivateFieldSet(this, _ColorContextProvider_style, window.getComputedStyle(host), "f");
        __classPrivateFieldSet(this, _ColorContextProvider_attribute, attribute, "f");
        if (__classPrivateFieldGet(this, _ColorContextProvider_attribute, "f") !== 'color-palette') {
            __classPrivateFieldGet(this, _ColorContextProvider_logger, "f").warn('color context currently supports the `color-palette` attribute only.');
        }
    }
    /**
       * When a context provider connects, it listens for context-request events
       * it also fires all previously fired context-request events from their hosts,
       * in case this context provider upgraded after and is closer to a given consumer.
       */
    async hostConnected() {
        this.host.addEventListener('context-request', e => __classPrivateFieldGet(this, _ColorContextProvider_instances, "m", _ColorContextProvider_onChildContextEvent).call(this, e));
        __classPrivateFieldGet(this, _ColorContextProvider_mo, "f").observe(this.host, { attributes: true, attributeFilter: [__classPrivateFieldGet(this, _ColorContextProvider_attribute, "f")] });
        for (const [host, fired] of contextEvents) {
            host.dispatchEvent(fired);
        }
        await this.host.updateComplete;
        this.update();
    }
    hostUpdated() {
        __classPrivateFieldSet(this, _ColorContextProvider_initialized, __classPrivateFieldGet(this, _ColorContextProvider_initialized, "f") || (this.update(), true), "f");
        if (__classPrivateFieldGet(this, _ColorContextProvider_instances, "a", _ColorContextProvider_local_get) && this.value !== __classPrivateFieldGet(this, _ColorContextProvider_consumer, "f").value) {
            __classPrivateFieldGet(this, _ColorContextProvider_consumer, "f").update(__classPrivateFieldGet(this, _ColorContextProvider_instances, "a", _ColorContextProvider_local_get));
            this.update();
        }
    }
    /**
     * When a context provider disconnects, it disconnects its mutation observer
     */
    hostDisconnected() {
        __classPrivateFieldGet(this, _ColorContextProvider_callbacks, "f").forEach(x => __classPrivateFieldGet(this, _ColorContextProvider_callbacks, "f").delete(x));
        __classPrivateFieldGet(this, _ColorContextProvider_mo, "f").disconnect();
    }
    /** Calls the context callback for all consumers */
    async update(force) {
        const { value } = this;
        for (const cb of __classPrivateFieldGet(this, _ColorContextProvider_callbacks, "f")) {
            cb(force ?? value);
        }
    }
}
_ColorContextProvider_attribute = new WeakMap(), _ColorContextProvider_callbacks = new WeakMap(), _ColorContextProvider_mo = new WeakMap(), _ColorContextProvider_style = new WeakMap(), _ColorContextProvider_initialized = new WeakMap(), _ColorContextProvider_logger = new WeakMap(), _ColorContextProvider_consumer = new WeakMap(), _ColorContextProvider_instances = new WeakSet(), _ColorContextProvider_local_get = function _ColorContextProvider_local_get() {
    return ColorContextProvider.contexts.get(this.host.getAttribute(__classPrivateFieldGet(this, _ColorContextProvider_attribute, "f")) ?? '');
}, _ColorContextProvider_isColorContextEvent = function _ColorContextProvider_isColorContextEvent(event) {
    return (event.target !== this.host &&
        event.context.name === `${this.prefix}-color-context`);
}, _ColorContextProvider_onChildContextEvent = 
/**
 * Provider part of context API
 * When a child connects, claim its context-request event
 * and add its callback to the Set of children if it requests multiple updates
 */
async function _ColorContextProvider_onChildContextEvent(event) {
    // only handle ContextEvents relevant to colour context
    if (__classPrivateFieldGet(this, _ColorContextProvider_instances, "m", _ColorContextProvider_isColorContextEvent).call(this, event)) {
        // claim the context-request event for ourselves (required by context protocol)
        event.stopPropagation();
        // Run the callback to initialize the child's colour-context
        event.callback(this.host.getAttribute(__classPrivateFieldGet(this, _ColorContextProvider_attribute, "f")) ?? __classPrivateFieldGet(this, _ColorContextProvider_consumer, "f").value);
        // Cache the callback for future updates, if requested
        if (event.multiple) {
            __classPrivateFieldGet(this, _ColorContextProvider_callbacks, "f").add(event.callback);
        }
    }
};
ColorContextProvider.contexts = new Map(Object.entries({
    darkest: 'dark',
    darker: 'dark',
    dark: 'dark',
    light: 'light',
    lighter: 'light',
    lightest: 'light',
}));
/** Makes this element a color context provider which updates its consumers when the decorated field changes */
export function colorContextProvider(options) {
    return function (proto, _propertyName) {
        const propertyName = _propertyName;
        const klass = proto.constructor;
        const propOpts = klass.getPropertyOptions(_propertyName);
        const attribute = typeof propOpts.attribute === 'boolean' ? undefined : propOpts.attribute;
        klass.addInitializer(instance => {
            const controller = new ColorContextProvider(instance, { propertyName, attribute, ...options });
            // @ts-expect-error: this assignment is strictly for debugging purposes
            instance.__DEBUG_colorContextProvider = controller;
        });
    };
}
//# sourceMappingURL=provider.js.map