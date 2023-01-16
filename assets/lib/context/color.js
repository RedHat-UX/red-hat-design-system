var _ColorContextProvider_instances, _ColorContextProvider_attribute, _ColorContextProvider_callbacks, _ColorContextProvider_mo, _ColorContextProvider_style, _ColorContextProvider_initialized, _ColorContextProvider_contextVariable_get, _ColorContextProvider_isColorContextEvent, _ColorContextProvider_onChildContextEvent, _ColorContextConsumer_instances, _ColorContextConsumer_propertyName, _ColorContextConsumer_propertyValue_get, _ColorContextConsumer_propertyValue_set, _ColorContextConsumer_dispose, _ColorContextConsumer_override, _ColorContextConsumer_contextCallback;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { StyleController } from '@patternfly/pfe-core/controllers/style-controller.js';
import { createContext, ContextEvent } from './event.js';
import CONTEXT_BASE_STYLES from "./context-color.css.js";
// TODO: QA
// 1. verify elements
//   rh-band - (easy)
//   rh-card - (easy)
//   rh-tabs - (easy)
//   rh-jump-links - (potentially fraught)
//   rh-autocomplete - (anyways broken)
//   rh-cta - (anyways broken)
/**
* Maps from consumer host elements to already-fired request events
* We hold these in memory in order to re-fire the events every time a new provider connects.
* This is a hedge against cases where an early-upgrading provider claims an early-upgrading
* consumer before a late-upgrading provider has a chance to register as the rightful provider
* @example Monkey-in-the-middle error
*          In this example, we must re-fire the event from eager-consumer when late-provider
*          upgrades, so as to ensure that late-provider claims it for itself
*          ```html
*          <early-provider>
*            <late-provider>
*              <eager-consumer>
*            </late-provider>
*          </early-provider>
*          ```
*/
const contextEvents = new Map();
/**
 * Color context is derived from the `--context` css custom property,
 * which *must* be set by the `color-palette` attribute
 * This property is set (in most cases) in `color-context.scss`,
 * which is added to components via `StyleController`.
 *
 * In this way, we avoid the need to execute javascript in order to convert from a given
 * `ColorPalette` to a given `ColorTheme`, since those relationships are specified in CSS.
 */
class ColorContextController {
    constructor(host, options) {
        this.host = host;
        /** Prefix for colour context. Set this in Options to create a separate context */
        this.prefix = 'rh-';
        /** The last-known color context on the host */
        this.last = null;
        this.logger = new Logger(host);
        this.prefix = options?.prefix ?? 'rh-';
        this.context = createContext(`${this.prefix}-color-context`);
        this.styleController = new StyleController(host, CONTEXT_BASE_STYLES);
        host.addController(this);
    }
}
/**
 * `ColorContextProvider` is responsible to derive a context value from CSS and provide it to its
 * descendents.
 */
export class ColorContextProvider extends ColorContextController {
    constructor(host, options) {
        const { attribute = 'color-palette', ...rest } = options ?? {};
        super(host, rest);
        _ColorContextProvider_instances.add(this);
        _ColorContextProvider_attribute.set(this, void 0);
        /** Cache of context callbacks. Call each to update consumers */
        _ColorContextProvider_callbacks.set(this, new Set());
        /** Mutation observer which updates consumers when `on` or `color-palette` attributes change. */
        _ColorContextProvider_mo.set(this, new MutationObserver(() => this.update(__classPrivateFieldGet(this, _ColorContextProvider_instances, "a", _ColorContextProvider_contextVariable_get))));
        /**
         * Cached (live) computed style declaration
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
         */
        _ColorContextProvider_style.set(this, void 0);
        _ColorContextProvider_initialized.set(this, false);
        __classPrivateFieldSet(this, _ColorContextProvider_style, window.getComputedStyle(host), "f");
        __classPrivateFieldSet(this, _ColorContextProvider_attribute, attribute, "f");
        if (__classPrivateFieldGet(this, _ColorContextProvider_attribute, "f") !== 'color-palette') {
            this.logger.warn('color context currently supports the `color-palette` attribute only.');
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
        __classPrivateFieldSet(this, _ColorContextProvider_initialized, __classPrivateFieldGet(this, _ColorContextProvider_initialized, "f") ?? (this.update(), true), "f");
    }
    /**
     * When a context provider disconnects, it disconnects its mutation observer
     */
    hostDisconnected() {
        __classPrivateFieldGet(this, _ColorContextProvider_callbacks, "f").forEach(x => __classPrivateFieldGet(this, _ColorContextProvider_callbacks, "f").delete(x));
        __classPrivateFieldGet(this, _ColorContextProvider_mo, "f").disconnect();
    }
    /** Calls the context callback for all consumers */
    update(next = __classPrivateFieldGet(this, _ColorContextProvider_instances, "a", _ColorContextProvider_contextVariable_get)) {
        for (const cb of __classPrivateFieldGet(this, _ColorContextProvider_callbacks, "f")) {
            cb(next);
        }
    }
}
_ColorContextProvider_attribute = new WeakMap(), _ColorContextProvider_callbacks = new WeakMap(), _ColorContextProvider_mo = new WeakMap(), _ColorContextProvider_style = new WeakMap(), _ColorContextProvider_initialized = new WeakMap(), _ColorContextProvider_instances = new WeakSet(), _ColorContextProvider_contextVariable_get = function _ColorContextProvider_contextVariable_get() {
    return __classPrivateFieldGet(this, _ColorContextProvider_style, "f").getPropertyValue('--context').trim() || null;
}, _ColorContextProvider_isColorContextEvent = function _ColorContextProvider_isColorContextEvent(event) {
    return (event.target !== this.host &&
        event.context.name === `${this.prefix}-color-context`);
}, _ColorContextProvider_onChildContextEvent = function _ColorContextProvider_onChildContextEvent(event) {
    // only handle ContextEvents relevant to colour context
    if (__classPrivateFieldGet(this, _ColorContextProvider_instances, "m", _ColorContextProvider_isColorContextEvent).call(this, event)) {
        // claim the context-request event for ourselves (required by context protocol)
        event.stopPropagation();
        // Run the callback to initialize the child's colour-context
        event.callback(__classPrivateFieldGet(this, _ColorContextProvider_instances, "a", _ColorContextProvider_contextVariable_get));
        // Cache the callback for future updates, if requested
        if (event.multiple) {
            __classPrivateFieldGet(this, _ColorContextProvider_callbacks, "f").add(event.callback);
        }
    }
};
/**
 * A color context consumer receives sets it's context property based on the context provided
 * by the closest color context provider.
 * The consumer has no direct access to the context, it must receive it from the provider.
 */
export class ColorContextConsumer extends ColorContextController {
    constructor(host, options) {
        super(host, options);
        this.options = options;
        _ColorContextConsumer_instances.add(this);
        _ColorContextConsumer_propertyName.set(this, void 0);
        _ColorContextConsumer_dispose.set(this, void 0);
        _ColorContextConsumer_override.set(this, null);
        __classPrivateFieldSet(this, _ColorContextConsumer_propertyName, options?.propertyName ?? 'on', "f");
    }
    /** When a consumer connects, it requests colour context from the closest provider. */
    async hostConnected() {
        const event = new ContextEvent(this.context, e => __classPrivateFieldGet(this, _ColorContextConsumer_instances, "m", _ColorContextConsumer_contextCallback).call(this, e), true);
        __classPrivateFieldSet(this, _ColorContextConsumer_override, __classPrivateFieldGet(this, _ColorContextConsumer_instances, "a", _ColorContextConsumer_propertyValue_get), "f");
        this.host.dispatchEvent(event);
        contextEvents.set(this.host, event);
        await this.host.updateComplete;
        __classPrivateFieldSet(this, _ColorContextConsumer_override, null, "f");
    }
    /** When a consumer disconnects, it's removed from the list of consumers. */
    hostDisconnected() {
        __classPrivateFieldGet(this, _ColorContextConsumer_dispose, "f")?.call(this);
        __classPrivateFieldSet(this, _ColorContextConsumer_dispose, undefined, "f");
        contextEvents.delete(this.host);
    }
    /** Sets the `on` attribute on the host and any children that requested multiple updates */
    update(next) {
        if (!__classPrivateFieldGet(this, _ColorContextConsumer_override, "f") && next !== this.last) {
            this.last = next;
            this.logger.log(`setting context from ${__classPrivateFieldGet(this, _ColorContextConsumer_instances, "a", _ColorContextConsumer_propertyValue_get)} to ${next}`);
            __classPrivateFieldSet(this, _ColorContextConsumer_instances, (next ?? undefined), "a", _ColorContextConsumer_propertyValue_set);
        }
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
//# sourceMappingURL=color.js.map