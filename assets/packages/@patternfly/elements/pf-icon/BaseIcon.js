import { __decorate } from "tslib";
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
class BaseIcon extends LitElement {
    constructor() {
        super(...arguments);
        /** Icon set */
        this.set = this.#class.defaultIconSet;
        /** Icon name */
        this.icon = '';
        /**
         * Controls how eager the element will be to load the icon data
         * - `eager`: eagerly load the icon, blocking the main thread
         * - `idle`: wait for the browser to attain an idle state before loading
         * - `lazy` (default): wait for the element to enter the viewport before loading
         */
        this.loading = 'lazy';
        this.#intersecting = false;
        this.#logger = new Logger(this);
    }
    static { this.styles = [style]; }
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
    static { this.getIconUrl = (set, icon) => new URL(`./icons/${set}/${icon}.js`, import.meta.url); }
    static { this.onIntersect = records => records.forEach(({ isIntersecting, target }) => {
        const icon = target;
        icon.#intersecting = isIntersecting;
        ric(() => {
            if (icon.#intersecting) {
                icon.load();
            }
        });
    }); }
    static { this.io = new IntersectionObserver(this.onIntersect); }
    static { this.getters = new Map(); }
    static { this.instances = new Set(); }
    #intersecting;
    #logger;
    get #class() {
        return this.constructor;
    }
    #lazyLoad() {
        this.#class.io.observe(this);
        if (this.#intersecting) {
            this.load();
        }
    }
    #iconChanged() {
        switch (this.loading) {
            case 'idle': return void ric(() => this.load());
            case 'lazy': return void this.#lazyLoad();
            case 'eager': return void this.load();
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.#class.instances.add(this);
    }
    willUpdate(changed) {
        if (changed.has('icon')) {
            this.#iconChanged();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.#class.instances.delete(this);
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
        const getter = this.#class.getters.get(set) ?? this.#class.getIconUrl;
        let spec = 'UNKNOWN ICON';
        if (set && icon) {
            try {
                const gotten = getter(set, icon);
                if (gotten instanceof URL) {
                    spec = gotten.pathname;
                }
                else {
                    spec = gotten;
                }
                const mod = await import(spec);
                this.content = mod.default instanceof Node ? mod.default.cloneNode(true) : mod.default;
                await this.updateComplete;
                this.dispatchEvent(new Event('load', { bubbles: true }));
            }
            catch (error) {
                const event = new IconLoadError(spec, error);
                this.#logger.error(error.message);
                this.dispatchEvent(event);
            }
        }
    }
}
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
export { BaseIcon };
//# sourceMappingURL=BaseIcon.js.map