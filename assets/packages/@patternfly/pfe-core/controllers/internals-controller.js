var _InternalsController_internals, _InternalsController_formDisabled;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
function isARIAMixinProp(key) {
    return key === 'role' || key.startsWith('aria');
}
export class InternalsController {
    /** True when the control is disabled via it's containing fieldset element */
    get formDisabled() {
        return this.host.matches(':disabled') || __classPrivateFieldGet(this, _InternalsController_formDisabled, "f");
    }
    constructor(host, options) {
        this.host = host;
        _InternalsController_internals.set(this, void 0);
        _InternalsController_formDisabled.set(this, false);
        __classPrivateFieldSet(this, _InternalsController_internals, host.attachInternals(), "f");
        // We need to polyfill :disabled
        // see https://github.com/calebdwilliams/element-internals-polyfill/issues/88
        const orig = host.formDisabledCallback;
        host.formDisabledCallback = disabled => {
            __classPrivateFieldSet(this, _InternalsController_formDisabled, disabled, "f");
            orig?.call(host, disabled);
        };
        // proxy the internals object's aria prototype
        for (const key of Object.keys(Object.getPrototypeOf(__classPrivateFieldGet(this, _InternalsController_internals, "f")))) {
            if (isARIAMixinProp(key)) {
                Object.defineProperty(this, key, {
                    get() {
                        return __classPrivateFieldGet(this, _InternalsController_internals, "f")[key];
                    },
                    set(value) {
                        __classPrivateFieldGet(this, _InternalsController_internals, "f")[key] = value;
                        this.host.requestUpdate();
                    }
                });
            }
        }
        for (const [key, val] of Object.entries(options ?? {})) {
            if (isARIAMixinProp(key)) {
                this[key] = val;
            }
        }
    }
    submit() {
        __classPrivateFieldGet(this, _InternalsController_internals, "f").form?.requestSubmit();
    }
    reset() {
        __classPrivateFieldGet(this, _InternalsController_internals, "f").form?.reset();
    }
}
_InternalsController_internals = new WeakMap(), _InternalsController_formDisabled = new WeakMap();
InternalsController.protos = new WeakMap();
//# sourceMappingURL=internals-controller.js.map