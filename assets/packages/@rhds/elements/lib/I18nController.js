var _I18nController_instances, _I18nController_defaultLanguage, _I18nController_logger, _I18nController_mo, _I18nController_microcopy, _I18nController_getLanguage, _I18nController_useDefaultLanguage, _I18nController_updateMicrocopy, _I18nController_ensure;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { isServer } from 'lit';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
export class I18nController {
    constructor(host, defaults) {
        _I18nController_instances.add(this);
        this.host = host;
        _I18nController_defaultLanguage.set(this, 'en-US');
        this.language = __classPrivateFieldGet(this, _I18nController_defaultLanguage, "f");
        _I18nController_logger.set(this, void 0);
        _I18nController_mo.set(this, new MutationObserver(() => this.update()));
        _I18nController_microcopy.set(this, new Map());
        __classPrivateFieldSet(this, _I18nController_logger, new Logger(host), "f");
        for (const [language, copy] of Object.entries(defaults)) {
            __classPrivateFieldGet(this, _I18nController_microcopy, "f").set(language, new Map(Object.entries(copy)));
        }
    }
    hostConnected() {
        __classPrivateFieldGet(this, _I18nController_mo, "f").observe(this.host, { childList: true, attributes: true, attributeFilter: ['lang'] });
        this.update();
    }
    hostDisconnected() {
        __classPrivateFieldGet(this, _I18nController_mo, "f").disconnect();
    }
    update() {
        this.language = __classPrivateFieldGet(this, _I18nController_instances, "m", _I18nController_getLanguage).call(this);
        __classPrivateFieldGet(this, _I18nController_instances, "m", _I18nController_updateMicrocopy).call(this);
        this.host.requestUpdate();
    }
    async loadTranslation(url, lang = this.language, force = false) {
        if (!!url && (!!force || !__classPrivateFieldGet(this, _I18nController_microcopy, "f").has(lang))) {
            try {
                const file = await fetch(url).then(result => result.json());
                return this.join(file, lang);
            }
            catch (e) {
                __classPrivateFieldGet(this, _I18nController_logger, "f").error(`Could not load microcopy for ${lang} from ${url}.`);
                __classPrivateFieldGet(this, _I18nController_instances, "m", _I18nController_useDefaultLanguage).call(this);
            }
        }
        this.update();
    }
    get(key, lang = this.language) {
        return __classPrivateFieldGet(this, _I18nController_microcopy, "f").get(lang)?.get(key) ?? key;
    }
    set(key, value, lang = this.language) {
        __classPrivateFieldGet(this, _I18nController_instances, "m", _I18nController_ensure).call(this, lang);
        __classPrivateFieldGet(this, _I18nController_microcopy, "f").get(lang)?.set(key, value);
        this.host.requestUpdate();
        return this;
    }
    clear(lang = this.language) {
        __classPrivateFieldGet(this, _I18nController_microcopy, "f").get(lang)?.clear();
        this.host.requestUpdate();
    }
    clearAll() {
        __classPrivateFieldGet(this, _I18nController_microcopy, "f").clear();
        this.host.requestUpdate();
    }
    delete(key, lang = this.language) {
        const r = __classPrivateFieldGet(this, _I18nController_microcopy, "f").get(lang)?.delete(key) ?? false;
        this.host.requestUpdate();
        return r;
    }
    join(obj, lang = this.language) {
        __classPrivateFieldGet(this, _I18nController_instances, "m", _I18nController_ensure).call(this, lang);
        const map = __classPrivateFieldGet(this, _I18nController_microcopy, "f").get(lang);
        for (const [key, value] of Object.entries(obj)) {
            map.set(key, value);
        }
        this.host.requestUpdate();
        return this;
    }
    toJSON() {
        return Object.fromEntries([...__classPrivateFieldGet(this, _I18nController_microcopy, "f").entries()].map(([k, v]) => [k, Object.fromEntries(v)]));
    }
}
_I18nController_defaultLanguage = new WeakMap(), _I18nController_logger = new WeakMap(), _I18nController_mo = new WeakMap(), _I18nController_microcopy = new WeakMap(), _I18nController_instances = new WeakSet(), _I18nController_getLanguage = function _I18nController_getLanguage() {
    if (isServer) {
        return __classPrivateFieldGet(this, _I18nController_defaultLanguage, "f");
    }
    let lang = this.host.getAttribute('lang')
        || this.host.closest('[lang]')?.getAttribute('lang');
    let root = this.host.getRootNode();
    while (!lang && root instanceof ShadowRoot) {
        lang = root.host.closest('[lang]')?.getAttribute('lang');
        root = root.host.getRootNode();
    }
    return lang ?? this.language;
}, _I18nController_useDefaultLanguage = function _I18nController_useDefaultLanguage() {
    __classPrivateFieldGet(this, _I18nController_logger, "f").log(`Using ${__classPrivateFieldGet(this, _I18nController_defaultLanguage, "f")} instead.`);
    if (this.language !== __classPrivateFieldGet(this, _I18nController_defaultLanguage, "f")) {
        this.language = __classPrivateFieldGet(this, _I18nController_defaultLanguage, "f");
        __classPrivateFieldGet(this, _I18nController_instances, "m", _I18nController_updateMicrocopy).call(this);
        this.host.requestUpdate();
    }
}, _I18nController_updateMicrocopy = function _I18nController_updateMicrocopy() {
    this.language = __classPrivateFieldGet(this, _I18nController_instances, "m", _I18nController_getLanguage).call(this);
    for (const script of this.host.querySelectorAll?.('script[type="application/json"][data-language]') ?? []) {
        const { language } = script.dataset;
        if (language) {
            let content = {};
            try {
                content = JSON.parse(script.textContent ?? '{}');
            }
            catch {
                __classPrivateFieldGet(this, _I18nController_logger, "f").error('Could not parse microcopy...', language);
                __classPrivateFieldGet(this, _I18nController_instances, "m", _I18nController_useDefaultLanguage).call(this);
            }
            __classPrivateFieldGet(this, _I18nController_microcopy, "f").set(language, new Map(Object.entries(content)));
        }
    }
}, _I18nController_ensure = function _I18nController_ensure(lang) {
    if (!__classPrivateFieldGet(this, _I18nController_microcopy, "f").has(lang)) {
        __classPrivateFieldGet(this, _I18nController_microcopy, "f").set(lang, new Map());
    }
};
//# sourceMappingURL=I18nController.js.map