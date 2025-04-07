var _InternalsController_instances, _InternalsController_polyfillDisabledPseudo;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { isServer, } from 'lit';
function isARIAMixinProp(key) {
    return key === 'role' || key.startsWith('aria');
}
const protos = new WeakMap();
let constructingAllowed = false;
/**
 * reactively forward the internals object's aria mixin prototype
 * @param target
 * @param key
 */
function aria(target, key) {
    if (!protos.has(target)) {
        protos.set(target, new Set());
    }
    if (protos.get(target).has(key)) {
        return;
    }
    if (!isARIAMixinProp(key)) {
        throw new Error('@aria can only be called on ARIAMixin properties');
    }
    // typescript experimental decorator
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: false,
        get() {
            // @ts-expect-error: because i'm bad, i'm bad
            const internals = this.attachOrRetrieveInternals();
            return internals[key];
        },
        set(value) {
            // @ts-expect-error: ya know it!
            const internals = this.attachOrRetrieveInternals();
            // @ts-expect-error: shamone!
            internals[key] = value;
            this.host.requestUpdate();
        },
    });
    protos.get(target).add(key);
}
function getLabelText(label) {
    if (label.hidden) {
        return '';
    }
    else {
        const ariaLabel = label.getAttribute?.('aria-label');
        return ariaLabel ?? label.textContent;
    }
}
export class InternalsController {
    static getLabels(host) {
        return Array.from(this.instances.get(host)?.internals.labels ?? []);
    }
    static of(host, options) {
        constructingAllowed = true;
        // implement the singleton pattern
        // using a public static constructor method is much easier to manage,
        // due to the quirks of our typescript config
        const instance = InternalsController.instances.get(host)
            ?? new InternalsController(host, options);
        instance.initializeOptions(options);
        constructingAllowed = false;
        return instance;
    }
    /** True when the control is disabled via it's containing fieldset element */
    get formDisabled() {
        if (isServer) {
            return this._formDisabled;
        }
        else {
            return this.element?.matches(':disabled') || this._formDisabled;
        }
    }
    get labels() {
        return this.internals.labels;
    }
    get validity() {
        return this.internals.validity;
    }
    /** A best-attempt based on observed behaviour in FireFox 115 on fedora 38 */
    get computedLabelText() {
        return this.internals.ariaLabel
            || Array.from(this.internals.labels)
                .reduce((acc, label) => `${acc}${getLabelText(label)}`, '');
    }
    get element() {
        if (isServer) {
            // FIXME(bennyp): a little white lie, which may break
            // when the controller is applied to non-lit frameworks.
            return this.host;
        }
        else {
            return this.host instanceof HTMLElement ? this.host : this.options?.getHTMLElement?.();
        }
    }
    constructor(host, options) {
        _InternalsController_instances.add(this);
        this.host = host;
        this.options = options;
        this.role = null;
        this.ariaActivedescendant = null;
        this.ariaAtomic = null;
        this.ariaAutoComplete = null;
        this.ariaBusy = null;
        this.ariaBrailleLabel = null;
        this.ariaBrailleRoleDescription = null;
        this.ariaChecked = null;
        this.ariaColCount = null;
        this.ariaColIndex = null;
        this.ariaColIndexText = null;
        this.ariaColSpan = null;
        this.ariaCurrent = null;
        this.ariaDescription = null;
        this.ariaDisabled = null;
        this.ariaExpanded = null;
        this.ariaHasPopup = null;
        this.ariaHidden = null;
        this.ariaInvalid = null;
        this.ariaKeyShortcuts = null;
        this.ariaLabel = null;
        this.ariaLevel = null;
        this.ariaLive = null;
        this.ariaModal = null;
        this.ariaMultiLine = null;
        this.ariaMultiSelectable = null;
        this.ariaOrientation = null;
        this.ariaPlaceholder = null;
        this.ariaPosInSet = null;
        this.ariaPressed = null;
        this.ariaReadOnly = null;
        this.ariaRequired = null;
        this.ariaRoleDescription = null;
        this.ariaRowCount = null;
        this.ariaRowIndex = null;
        this.ariaRowIndexText = null;
        this.ariaRowSpan = null;
        this.ariaSelected = null;
        this.ariaSetSize = null;
        this.ariaSort = null;
        this.ariaValueMax = null;
        this.ariaValueMin = null;
        this.ariaValueNow = null;
        this.ariaValueText = null;
        /** WARNING: be careful of cross-root ARIA browser support */
        this.ariaActiveDescendantElement = null;
        /** WARNING: be careful of cross-root ARIA browser support */
        this.ariaControlsElements = null;
        /** WARNING: be careful of cross-root ARIA browser support */
        this.ariaDescribedByElements = null;
        /** WARNING: be careful of cross-root ARIA browser support */
        this.ariaDetailsElements = null;
        /** WARNING: be careful of cross-root ARIA browser support */
        this.ariaErrorMessageElements = null;
        /** WARNING: be careful of cross-root ARIA browser support */
        this.ariaFlowToElements = null;
        /** WARNING: be careful of cross-root ARIA browser support */
        this.ariaLabelledByElements = null;
        /** WARNING: be careful of cross-root ARIA browser support */
        this.ariaOwnsElements = null;
        this._formDisabled = false;
        if (!constructingAllowed) {
            throw new Error('InternalsController must be constructed with `InternalsController.for()`');
        }
        if (!this.element) {
            throw new Error(`InternalsController must be instantiated with an HTMLElement or a \`getHTMLElement\` function`);
        }
        this.attachOrRetrieveInternals();
        this.initializeOptions(options);
        InternalsController.instances.set(host, this);
        __classPrivateFieldGet(this, _InternalsController_instances, "m", _InternalsController_polyfillDisabledPseudo).call(this);
    }
    /**
     * Typescript (with experimental decorators) will compile the class
     * such that the order of operations is:
     * 1. set up constructor parameter fields
     * 2. run decorated field setters with initializers as the value
     * 3. run the rest of the constructor
     * Because of that, `this.internals` may not be available in the decorator setter
     * so we cheat here with nullish coalescing assignment operator `??=`;
     */
    attachOrRetrieveInternals() {
        this.internals ?? (this.internals = this.element.attachInternals());
        return this.internals;
    }
    initializeOptions(options) {
        var _a;
        this.options ?? (this.options = options ?? {});
        const { getHTMLElement, ...aria } = this.options;
        (_a = this.options).getHTMLElement ?? (_a.getHTMLElement = getHTMLElement);
        for (const [key, val] of Object.entries(aria)) {
            if (isARIAMixinProp(key)) {
                this[key] = val;
            }
        }
    }
    setFormValue(...args) {
        return this.internals.setFormValue(...args);
    }
    setValidity(...args) {
        return this.internals.setValidity(...args);
    }
    checkValidity(...args) {
        return this.internals.checkValidity(...args);
    }
    reportValidity(...args) {
        return this.internals.reportValidity(...args);
    }
    submit() {
        this.internals.form?.requestSubmit();
    }
    reset() {
        this.internals.form?.reset();
    }
}
_InternalsController_instances = new WeakSet(), _InternalsController_polyfillDisabledPseudo = function _InternalsController_polyfillDisabledPseudo() {
    // START polyfill-disabled
    // We need to polyfill :disabled
    // see https://github.com/calebdwilliams/element-internals-polyfill/issues/88
    const orig = this.element.formDisabledCallback;
    this.element.formDisabledCallback = disabled => {
        this._formDisabled = disabled;
        orig?.call(this.host, disabled);
        // END polyfill-disabled
    };
};
InternalsController.instances = new WeakMap();
InternalsController.isSafari = !isServer && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
__decorate([
    aria
], InternalsController.prototype, "role", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaActivedescendant", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaAtomic", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaAutoComplete", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaBusy", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaBrailleLabel", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaBrailleRoleDescription", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaChecked", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaColCount", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaColIndex", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaColIndexText", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaColSpan", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaCurrent", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaDescription", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaDisabled", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaExpanded", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaHasPopup", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaHidden", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaInvalid", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaKeyShortcuts", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaLabel", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaLevel", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaLive", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaModal", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaMultiLine", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaMultiSelectable", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaOrientation", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaPlaceholder", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaPosInSet", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaPressed", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaReadOnly", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaRequired", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaRoleDescription", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaRowCount", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaRowIndex", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaRowIndexText", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaRowSpan", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaSelected", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaSetSize", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaSort", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaValueMax", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaValueMin", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaValueNow", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaValueText", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaActiveDescendantElement", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaControlsElements", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaDescribedByElements", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaDetailsElements", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaErrorMessageElements", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaFlowToElements", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaLabelledByElements", void 0);
__decorate([
    aria
], InternalsController.prototype, "ariaOwnsElements", void 0);
//# sourceMappingURL=internals-controller.js.map