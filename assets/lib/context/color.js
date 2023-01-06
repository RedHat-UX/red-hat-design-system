var _ColorContextProvider_instances, _ColorContextProvider_onChildContextEvent;
import { __classPrivateFieldGet } from "tslib";
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { StyleController } from '@patternfly/pfe-core/controllers/style-controller.js';
import { createContext, ContextEvent } from './event.js';
import CONTEXT_BASE_STYLES from "./context-color.css.js";
// TODO: CSS
// 1. move sass that maps from palette to theme from _colors.scss:198+ to color-context.scss (and rename them)
// 2. except don't because hard, wait for design tokens instead
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
 * which can be set by the `on` attribute, but *must* be set by the `color-palette` attribute
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
        this.prefix = options?.prefix ?? 'rh-';
        this.context = createContext(`${this.prefix}-color-context`);
        this.logger = new Logger(host);
        this.styleController = new StyleController(host, CONTEXT_BASE_STYLES);
        host.addController(this);
    }
}
/**
 * `ColorContextProvider` is responsible to derive a context value from CSS and provide it to its
 * descendents.
 */
export class ColorContextProvider extends ColorContextController {
    /** Return the current CSS `--context` value, or null */
    get contextVariable() {
        return this.style.getPropertyValue('--context').trim() || null;
    }
    constructor(host, options) {
        super(host, options);
        _ColorContextProvider_instances.add(this);
        /** Cache of context callbacks. Call each to update consumers */
        this.callbacks = new Set();
        /** Mutation observer which updates consumers when `on` or `color-palette` attributes change. */
        this.mo = new MutationObserver(() => this.update(this.contextVariable));
        this.style = window.getComputedStyle(host);
        this.attribute = options?.attribute || 'color-palette';
    }
    /**
     * When a context provider connects, it listens for context-request events
     * it also fires all previously fired context-request events from their hosts,
     * in case this context provider upgraded after and is closer to a given consumer.
     */
    hostConnected() {
        this.host.addEventListener('context-request', e => __classPrivateFieldGet(this, _ColorContextProvider_instances, "m", _ColorContextProvider_onChildContextEvent).call(this, e));
        this.mo.observe(this.host, {
            attributes: true,
            attributeFilter: [this.attribute, 'on'].filter(x => typeof x === 'string')
        });
        this.update(this.contextVariable);
        for (const [host, fired] of contextEvents) {
            host.dispatchEvent(fired);
        }
    }
    /**
     * When a context provider disconnects, it disconnects its mutation observer
     */
    hostDisconnected() {
        this.callbacks.forEach(x => this.callbacks.delete(x));
        this.mo.disconnect();
    }
    /** Was the context event fired requesting our colour-context context? */
    isColorContextEvent(event) {
        return (event.target !== this.host &&
            event.context.name === `${this.prefix}-color-context`);
    }
    /** Sets the `on` attribute on the host and any children that requested multiple updates */
    update(next) {
        for (const cb of this.callbacks) {
            cb(next);
        }
    }
}
_ColorContextProvider_instances = new WeakSet(), _ColorContextProvider_onChildContextEvent = function _ColorContextProvider_onChildContextEvent(event) {
    // only handle ContextEvents relevant to colour context
    if (this.isColorContextEvent(event)) {
        // claim the context-request event for ourselves (required by context protocol)
        event.stopPropagation();
        // Run the callback to initialize the child's colour-context
        event.callback(this.contextVariable);
        // Cache the callback for future updates, if requested
        if (event.multiple) {
            this.callbacks.add(event.callback);
        }
    }
};
/**
 * A color context consumer receives sets it's `on` attribute based on the context provided
 * by the closes color context provider.
 * The consumer has no direct access to the context, it must receive it from the provider.
 */
export class ColorContextConsumer extends ColorContextController {
    constructor(host, options) {
        super(host, options);
        this.options = options;
        this.override = null;
        this.attribute ?? (this.attribute = options?.attribute || 'on');
        this.propertyName = options?.propertyName;
    }
    /**
     * When a color context consumer connects,
     * it requests colour context from the closest context provider,
     * then updates it's host's `on` attribute
     */
    hostConnected() {
        const event = new ContextEvent(this.context, e => this.contextCallback(e), true);
        this.override = (this.options?.attribute !== false ? this.host[this.propertyName]
            : this.host.getAttribute(this.attribute));
        this.host.dispatchEvent(event);
        contextEvents.set(this.host, event);
    }
    /**
     * When a color context consumer disconnects,
     * it removes itself from the collection of components which request color context
     * then updates it's host's `on` attribute
     */
    hostDisconnected() {
        this.dispose?.();
        this.dispose = undefined;
        contextEvents.delete(this.host);
    }
    /** Register the dispose callback for hosts that requested multiple updates, then update the colour-context */
    contextCallback(value, dispose) {
        // protect against changing providers
        if (dispose && dispose !== this.dispose) {
            this.dispose?.();
            this.dispose = dispose;
        }
        this.update(value);
    }
    /** Sets the `on` attribute on the host and any children that requested multiple updates */
    update(next) {
        if (!this.override && next !== this.last) {
            this.last = next;
            this.logger.log(`setting context from ${this.host.getAttribute(this.attribute)} to ${next}`);
            if (next == null) {
                if (this.options?.attribute === false) {
                    // @ts-expect-error: we know that propertyName is an accessible key because we got it from the decorator
                    this.host[this.propertyName] = undefined;
                    this.host.requestUpdate();
                }
                else {
                    this.host.removeAttribute(this.attribute);
                }
            }
            else {
                if (this.propertyName) {
                    // @ts-expect-error: we know that propertyName is an accessible key because we got it from the decorator
                    this.host[this.propertyName] = next;
                    this.host.requestUpdate();
                }
                else {
                    this.host.setAttribute(this.attribute, next);
                }
            }
        }
    }
}
const DEFAULT_OPTIONS = { attribute: false };
export function colorContextProvider(options) {
    return function (proto, propertyName) {
        proto.constructor.addInitializer(instance => {
            // @ts-expect-error: this is strictly for debugging purposes
            instance.__colorContextProvider =
                new ColorContextProvider(instance, { propertyName, ...DEFAULT_OPTIONS, ...options });
        });
    };
}
export function colorContextConsumer(options) {
    return function (proto, propertyName) {
        proto.constructor.addInitializer(instance => {
            // @ts-expect-error: this is strictly for debugging purposes
            instance.__colorContextConsumer =
                new ColorContextConsumer(instance, { propertyName, ...DEFAULT_OPTIONS, ...options });
        });
    };
}
//# sourceMappingURL=color.js.map