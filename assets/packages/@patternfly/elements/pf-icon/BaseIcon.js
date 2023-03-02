var _BaseIcon_instances, _a, _BaseIcon_intersecting, _BaseIcon_logger, _BaseIcon_class_get, _BaseIcon_lazyLoad, _BaseIcon_iconChanged;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { css } from "lit";
const style = css `:host{position:relative;display:inline-block;line-height:0;height:fit-content!important;width:fit-content!important}#container{display:grid;grid-template:1fr/1fr;place-content:center}#container.content ::slotted(*){display:none}svg{fill:currentcolor}`;
/** requestIdleCallback when available, requestAnimationFrame when not */
const ric = window.requestIdleCallback ?? window.requestAnimationFrame;
/** Fired when an icon fails to load */
class IconLoadError extends ErrorEvent {
    constructor(pathname, 
    /** The original error when importing the icon module */
    originalError) {
        super('error', { message: `Could not load icon at ${pathname}` });
        this.originalError = originalError;
    }
}
/**
 * Icon component lazy-loads icons and allows custom icon sets
 *
 * @slot - Slotted content is used as a fallback in case the icon doesn't load
 * @fires load - Fired when an icon is loaded and rendered
 * @fires error - Fired when an icon fails to load
 * @csspart fallback - Container for the fallback (i.e. slotted) content
 */
export class BaseIcon extends LitElement {
    constructor() {
        super(...arguments);
        _BaseIcon_instances.add(this);
        /** Icon set */
        this.set = __classPrivateFieldGet(this, _BaseIcon_instances, "a", _BaseIcon_class_get).defaultIconSet;
        /** Icon name */
        this.icon = '';
        /**
         * Controls how eager the element will be to load the icon data
         * - `eager`: eagerly load the icon, blocking the main thread
         * - `idle`: wait for the browser to attain an idle state before loading
         * - `lazy` (default): wait for the element to enter the viewport before loading
         */
        this.loading = 'lazy';
        _BaseIcon_intersecting.set(this, false);
        _BaseIcon_logger.set(this, new Logger(this));
    }
    static addIconSet(setName, getter) {
        if (typeof getter !== 'function') {
            Logger.warn(`[${this.name}.addIconSet(setName, getter)]: getter must be a function`);
        }
        else {
            this.getters.set(setName, getter);
            for (const instance of this.instances) {
                instance.load();
            }
        }
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _BaseIcon_instances, "a", _BaseIcon_class_get).instances.add(this);
    }
    willUpdate(changed) {
        if (changed.has('icon')) {
            __classPrivateFieldGet(this, _BaseIcon_instances, "m", _BaseIcon_iconChanged).call(this);
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        __classPrivateFieldGet(this, _BaseIcon_instances, "a", _BaseIcon_class_get).instances.delete(this);
    }
    render() {
        const content = this.content ?? ''; /* eslint-disable indent */
        return html `
      <div id="container" aria-hidden="true">${content}<span part="fallback" ?hidden=${!!content}>
          <slot></slot>
        </span>
      </div>
    `; /* eslint-enable indent */
    }
    async load() {
        const { set, icon, } = this;
        const getter = __classPrivateFieldGet(this, _BaseIcon_instances, "a", _BaseIcon_class_get).getters.get(set) ?? __classPrivateFieldGet(this, _BaseIcon_instances, "a", _BaseIcon_class_get).getIconUrl;
        let pathname = 'UNKNOWN ICON';
        if (set && icon) {
            try {
                ({ pathname } = getter(set, icon));
                const mod = await import(pathname);
                this.content = mod.default instanceof Node ? mod.default.cloneNode(true) : mod.default;
                await this.updateComplete;
                this.dispatchEvent(new Event('load', { bubbles: true }));
            }
            catch (error) {
                const event = new IconLoadError(pathname, error);
                __classPrivateFieldGet(this, _BaseIcon_logger, "f").error(error.message);
                this.dispatchEvent(event);
            }
        }
    }
}
_a = BaseIcon, _BaseIcon_intersecting = new WeakMap(), _BaseIcon_logger = new WeakMap(), _BaseIcon_instances = new WeakSet(), _BaseIcon_class_get = function _BaseIcon_class_get() {
    return this.constructor;
}, _BaseIcon_lazyLoad = function _BaseIcon_lazyLoad() {
    __classPrivateFieldGet(this, _BaseIcon_instances, "a", _BaseIcon_class_get).io.observe(this);
    if (__classPrivateFieldGet(this, _BaseIcon_intersecting, "f")) {
        this.load();
    }
}, _BaseIcon_iconChanged = function _BaseIcon_iconChanged() {
    switch (this.loading) {
        case 'idle': return void ric(() => this.load());
        case 'lazy': return void __classPrivateFieldGet(this, _BaseIcon_instances, "m", _BaseIcon_lazyLoad).call(this);
        case 'eager': return void this.load();
    }
};
BaseIcon.styles = [style];
BaseIcon.getIconUrl = (set, icon) => new URL(`./icons/${set}/${icon}.js`, import.meta.url);
BaseIcon.onIntersect = records => records.forEach(({ isIntersecting, target }) => {
    const icon = target;
    __classPrivateFieldSet(icon, _BaseIcon_intersecting, isIntersecting, "f");
    ric(() => {
        if (__classPrivateFieldGet(icon, _BaseIcon_intersecting, "f")) {
            icon.load();
        }
    });
});
BaseIcon.io = new IntersectionObserver(_a.onIntersect);
BaseIcon.getters = new Map();
BaseIcon.instances = new Set();
__decorate([
    property()
], BaseIcon.prototype, "set", void 0);
__decorate([
    property({ reflect: true })
], BaseIcon.prototype, "icon", void 0);
__decorate([
    property()
], BaseIcon.prototype, "loading", void 0);
__decorate([
    state()
], BaseIcon.prototype, "content", void 0);
//# sourceMappingURL=BaseIcon.js.map