var _PfIcon_instances, _a, _PfIcon_intersecting, _PfIcon_logger, _PfIcon_lazyLoad, _PfIcon_load, _PfIcon_contentChanged;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { css } from "lit";
const style = css `:host {\n  position: relative;\n  display:  inline-block;\n  line-height:  0;\n  height: fit-content !important;\n  width: fit-content !important;\n}\n\n#container {\n  display: grid;\n  grid-template: 1fr / 1fr;\n  place-content: center;\n}\n\n#container.content ::slotted(*) {\n  display: none;\n}\n\nsvg {\n  fill: currentcolor;\n}\n\n:host([size=sm]) #container { --_size: var(--pf-global--icon--FontSize--sm, 10px); }\n:host([size=md]) #container { --_size: var(--pf-global--icon--FontSize--md, 18px); }\n:host([size=lg]) #container { --_size: var(--pf-global--icon--FontSize--lg, 24px); }\n:host([size=xl]) #container { --_size: var(--pf-global--icon--FontSize--xl, 54px); }\n\n#container, svg {\n  width: var(--pf-icon--size, var(--_size));\n  height: var(--pf-icon--size, var(--_size));\n  min-width: var(--pf-icon--size, var(--_size));\n  min-height: var(--pf-icon--size, var(--_size));\n}\n\n`;
/**
 * requestIdleCallback when available, requestAnimationFrame when not
 * @param f callback
 */
const ric = globalThis.requestIdleCallback
    ?? globalThis.requestAnimationFrame
    ?? (async (f) => Promise.resolve().then(f));
/** Fired when an icon fails to load */
export class IconResolveError extends ErrorEvent {
    constructor(set, icon, 
    /** The original error when importing the icon module */
    originalError) {
        super('error', { message: `Could not load icon "${icon}" from set "${set}".` });
        this.originalError = originalError;
    }
}
let PfIcon = _a = class PfIcon extends LitElement {
    constructor() {
        super(...arguments);
        _PfIcon_instances.add(this);
        /** Icon set */
        this.set = 'fas';
        /** Icon name */
        this.icon = '';
        /** Size of the icon */
        this.size = 'sm';
        /**
         * Controls how eager the element will be to load the icon data
         * - `eager`: eagerly load the icon, blocking the main thread
         * - `idle`: wait for the browser to attain an idle state before loading
         * - `lazy` (default): wait for the element to enter the viewport before loading
         */
        this.loading = 'lazy';
        _PfIcon_intersecting.set(this, false);
        _PfIcon_logger.set(this, new Logger(this));
    }
    /**
     * Register a new icon set
     * @param setName - The name of the icon set
     * @param resolver - A function that returns the URL of an icon
     * @example returning a URL object
     *          ```js
     *          PfIcon.addIconSet('rh', (set, icon) =>
     *            new URL(`./icons/${set}/${icon}.js`, import.meta.url));
     *          ```
     * @example returning a string
     *          ```js
     *          PfIcon.addIconSet('rh', (set, icon) =>
     *            `/assets/icons/${set}/${icon}.js`);
     *          ```
     */
    static addIconSet(setName, resolver) {
        if (typeof setName !== 'string') {
            Logger.warn(`[${this.name}]: the first argument to addIconSet must be a string.`);
        }
        else if (typeof resolver !== 'function') {
            Logger.warn(`[${this.name}]: the second argument to addIconSet must be a function.`);
        }
        else {
            this.resolvers.set(setName, resolver);
            for (const instance of this.instances) {
                __classPrivateFieldGet(instance, _PfIcon_instances, "m", _PfIcon_load).call(instance);
            }
        }
    }
    /** Removes all added icon sets and resets resolve function */
    static reset() {
        this.resolvers.clear();
        this.resolve = this.defaultResolve;
    }
    connectedCallback() {
        super.connectedCallback();
        PfIcon.instances.add(this);
    }
    willUpdate(changed) {
        if (changed.has('icon')) {
            __classPrivateFieldGet(this, _PfIcon_instances, "m", _PfIcon_load).call(this);
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        PfIcon.io.unobserve(this);
        PfIcon.instances.delete(this);
    }
    render() {
        const content = this.content ?? '';
        return html `
      <div id="container" aria-hidden="true">${content}<span part="fallback"
          ?hidden=${!!content}><slot></slot>
        </span>
      </div>
    `;
    }
    async load() {
        const { set, icon } = this;
        const resolver = PfIcon.resolvers.get(set) ?? PfIcon.resolve;
        if (set && icon && typeof resolver === 'function') {
            try {
                this.content = await resolver(set, icon);
                __classPrivateFieldGet(this, _PfIcon_instances, "m", _PfIcon_contentChanged).call(this);
            }
            catch (error) {
                __classPrivateFieldGet(this, _PfIcon_logger, "f").error(error.message);
                this.dispatchEvent?.(new IconResolveError(set, icon, error));
            }
        }
    }
};
_PfIcon_intersecting = new WeakMap();
_PfIcon_logger = new WeakMap();
_PfIcon_instances = new WeakSet();
_PfIcon_lazyLoad = function _PfIcon_lazyLoad() {
    PfIcon.io.observe(this);
    if (__classPrivateFieldGet(this, _PfIcon_intersecting, "f")) {
        this.load();
    }
};
_PfIcon_load = function _PfIcon_load() {
    switch (this.loading) {
        case 'idle': return void ric(() => this.load());
        case 'lazy': return void __classPrivateFieldGet(this, _PfIcon_instances, "m", _PfIcon_lazyLoad).call(this);
        case 'eager': return void this.load();
    }
};
_PfIcon_contentChanged = async function _PfIcon_contentChanged() {
    await this.updateComplete;
    this.dispatchEvent?.(new Event('load', { bubbles: true }));
};
PfIcon.styles = [style];
PfIcon.onIntersect = records => records.forEach(({ isIntersecting, target }) => {
    const icon = target;
    __classPrivateFieldSet(icon, _PfIcon_intersecting, isIntersecting, "f");
    ric(() => {
        if (__classPrivateFieldGet(icon, _PfIcon_intersecting, "f")) {
            __classPrivateFieldGet(icon, _PfIcon_instances, "m", _PfIcon_load).call(icon);
        }
    });
});
PfIcon.defaultResolve = (set, icon) => import(`@patternfly/icons/${set}/${icon}.js`)
    .then(mod => mod.default.cloneNode(true));
PfIcon.io = new IntersectionObserver(PfIcon.onIntersect);
PfIcon.resolvers = new Map();
PfIcon.instances = new Set();
/**
 * Gets a renderable icon. Override this to customize how icons are resolved.
 * @param set - The name of the icon set
 * @param icon - The name of the icon
 * @returns The icon content, a node or anything else which lit-html can render
 * @example resolving an icon node from an icon module
 *          ```js
 *          PfIcon.resolve = (set, icon) =>
 *            import(`/assets/icons/${set}/${icon}.js`)
 *              .then(mod => mod.default.cloneNode(true));
 *          ```
 * @example resolving a named export from an icon collection module
 *          ```js
 *          PfIcon.resolve = (set, icon) =>
 *            import(`/assets/icons.js`)
 *              .then(module => module[icon]?.cloneNode(true));
 *          ```
 * @example resolving a new node from an svg file
 *          ```js
 *          const iconCacne = new Map();
 *          function getCachedIconOrNewNode(set, icon, svg) {
 *            const key = `${set}_${icon}`;
 *            if (!iconCache.has(key)) {
 *              const template = document.createElement('template');
 *                    template.innerHTML = svg;
 *              iconCache.set(key, template);
 *            }
 *            return iconCache.get(key);
 *          }
 *          PfIcon.resolve = (set, icon) =>
 *            fetch(`/assets/icons/${set}/${icon}.svg`)
 *              .then(response => response.text())
 *              .then(svg => getCachedIconOrNewNode(set, icon, svg))
 *              .then(node => node.content.cloneNode(true));
 *          ```
 */
PfIcon.resolve = PfIcon.defaultResolve;
PfIcon.version = "4.0.2";
__decorate([
    property()
], PfIcon.prototype, "set", void 0);
__decorate([
    property({ reflect: true })
], PfIcon.prototype, "icon", void 0);
__decorate([
    property({ reflect: true })
], PfIcon.prototype, "size", void 0);
__decorate([
    property()
], PfIcon.prototype, "loading", void 0);
__decorate([
    state()
], PfIcon.prototype, "content", void 0);
PfIcon = __decorate([
    customElement('pf-icon')
], PfIcon);
export { PfIcon };
//# sourceMappingURL=pf-icon.js.map