function isARIAMixinProp(key) {
    return key === 'role' || key.startsWith('aria');
}
class InternalsController {
    #internals;
    #formDisabled = false;
    /** True when the control is disabled via it's containing fieldset element */
    get formDisabled() {
        return this.host.matches(':disabled') || this.#formDisabled;
    }
    static { this.protos = new WeakMap(); }
    get labels() {
        return this.#internals.labels;
    }
    get validity() {
        return this.#internals.validity;
    }
    constructor(host, options) {
        this.host = host;
        this.#internals = host.attachInternals();
        // We need to polyfill :disabled
        // see https://github.com/calebdwilliams/element-internals-polyfill/issues/88
        const orig = host.formDisabledCallback;
        host.formDisabledCallback = disabled => {
            this.#formDisabled = disabled;
            orig?.call(host, disabled);
        };
        // proxy the internals object's aria prototype
        for (const key of Object.keys(Object.getPrototypeOf(this.#internals))) {
            if (isARIAMixinProp(key)) {
                Object.defineProperty(this, key, {
                    get() {
                        return this.#internals[key];
                    },
                    set(value) {
                        this.#internals[key] = value;
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
    setFormValue(...args) {
        return this.#internals.setFormValue(...args);
    }
    setValidity(...args) {
        return this.#internals.setValidity(...args);
    }
    checkValidity(...args) {
        return this.#internals.checkValidity(...args);
    }
    reportValidity(...args) {
        return this.#internals.reportValidity(...args);
    }
    submit() {
        this.#internals.form?.requestSubmit();
    }
    reset() {
        this.#internals.form?.reset();
    }
}
export { InternalsController };
//# sourceMappingURL=internals-controller.js.map