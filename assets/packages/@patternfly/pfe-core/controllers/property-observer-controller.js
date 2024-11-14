var _PropertyObserverController_instances, _PropertyObserverController_neverRan, _PropertyObserverController_init;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { notEqual } from 'lit';
const UNINITIALIZED = Symbol('uninitialized');
export class PropertyObserverController {
    constructor(host, options) {
        _PropertyObserverController_instances.add(this);
        this.host = host;
        this.options = options;
        this.oldVal = UNINITIALIZED;
        _PropertyObserverController_neverRan.set(this, true);
    }
    hostConnected() {
        __classPrivateFieldGet(this, _PropertyObserverController_instances, "m", _PropertyObserverController_init).call(this);
    }
    /** Set any cached valued accumulated between constructor and connectedCallback */
    async hostUpdate() {
        __classPrivateFieldGet(this, _PropertyObserverController_instances, "m", _PropertyObserverController_init).call(this);
        const { oldVal, options: { waitFor, propertyName, callback } } = this;
        if (!callback) {
            throw new Error(`no callback for ${propertyName}`);
        }
        const newVal = this.host[propertyName];
        this.oldVal = newVal;
        if (newVal !== oldVal) {
            switch (waitFor) {
                case 'connected':
                    if (!this.host.isConnected) {
                        const origConnected = this.host.connectedCallback;
                        await new Promise(resolve => {
                            this.host.connectedCallback = function () {
                                resolve(origConnected?.call(this));
                            };
                        });
                    }
                    break;
                case 'firstUpdated':
                    if (!this.host.hasUpdated) {
                        await this.host.updateComplete;
                    }
                    break;
                case 'updated':
                    await this.host.updateComplete;
                    break;
            }
        }
        const Class = this.host.constructor;
        const hasChanged = Class
            .getPropertyOptions(this.options.propertyName)
            .hasChanged ?? notEqual;
        if (__classPrivateFieldGet(this, _PropertyObserverController_neverRan, "f") || hasChanged(oldVal, newVal)) {
            callback.call(this.host, oldVal, newVal);
            __classPrivateFieldSet(this, _PropertyObserverController_neverRan, false, "f");
        }
    }
}
_PropertyObserverController_neverRan = new WeakMap(), _PropertyObserverController_instances = new WeakSet(), _PropertyObserverController_init = function _PropertyObserverController_init() {
    if (this.oldVal === UNINITIALIZED) {
        this.oldVal = this.host[this.options.propertyName];
    }
};
//# sourceMappingURL=property-observer-controller.js.map