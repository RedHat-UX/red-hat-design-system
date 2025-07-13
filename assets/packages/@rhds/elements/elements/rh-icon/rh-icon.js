var _RhIcon_instances, _a, _RhIcon_intersecting, _RhIcon_logger, _RhIcon_internals, _RhIcon_getContent, _RhIcon_lazyLoad, _RhIcon_dispatchLoad, _RhIcon_load;
var RhIcon_1;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { observes } from '@patternfly/pfe-core/decorators/observes.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { css } from "lit";
const style = css `:host{line-height:0;aspect-ratio:1/1;display:inline-flex;place-content:center}#container{display:contents}svg{width:var(--rh-icon-size,var(--rh-size-icon-01,16px));fill:currentcolor;aspect-ratio:1/1}.standard svg{width:var(--rh-icon-size,var(--rh-size-icon-04,40px))}.microns svg{min-width:8px;max-width:12px;width:var(--rh-icon-size,12px)}`;
if (isServer) {
    await import('./ssr.js');
}
/**
 * requestIdleCallback when available, requestAnimationFrame when not
 * @param f callback
 */
const ric = globalThis.requestIdleCallback
    ?? globalThis.requestAnimationFrame
    ?? (async (f) => Promise.resolve().then(f));
/** Fired when an icon fails to load */
export class IconResolveErrorEvent extends ErrorEvent {
    constructor(set, icon, 
    /** The original error when importing the icon module */
    originalError) {
        super('error', { message: `Could not load icon "${icon}" from set "${set}".` });
        this.originalError = originalError;
    }
}
/**
 * Icons represents general concepts and can support text as a decorative
 * element. The icon element is a container that allows users to add icons of
 * varying dimensions in the same area without shifting surrounding content.
 * @summary Decorative element which supports related content
 * @slot - Slotted content is used as a fallback in case the icon doesn't load
 * @fires load - Fired when an icon is loaded and rendered
 * @fires error - Fired when an icon fails to load
 * @csspart fallback - Container for the fallback (i.e. slotted) content
 * @cssprop --rh-icon-size - Override default icon size
 */
let RhIcon = RhIcon_1 = _a = class RhIcon extends LitElement {
    constructor() {
        super(...arguments);
        _RhIcon_instances.add(this);
        /** Icon set */
        this.set = 'standard';
        /**
         * Controls how eager the element will be to load the icon data
         * - `eager`: eagerly load the icon, blocking the main thread
         * - `idle`: wait for the browser to attain an idle state before loading
         * - `lazy` (default): wait for the element to enter the viewport before loading
         */
        this.loading = 'lazy';
        _RhIcon_intersecting.set(this, false);
        _RhIcon_logger.set(this, new Logger(this));
        _RhIcon_internals.set(this, InternalsController.of(this));
    }
    connectedCallback() {
        super.connectedCallback();
        RhIcon_1.instances.add(this);
    }
    render() {
        const { set } = this;
        const content = __classPrivateFieldGet(this, _RhIcon_instances, "m", _RhIcon_getContent).call(this);
        return html `
      <div id="container"
           aria-hidden="${String(!!content)}"
           class="${classMap({ [set]: true })}">${!isServer ? content
            : unsafeHTML(content)}<span part="fallback" ?hidden="${content}"><slot></slot></span>
      </div>
    `;
    }
    updated() {
        // this is a workaround for an apparent webkit / lit-ssr bug
        const [, ...duplicateContainers] = this.shadowRoot?.querySelectorAll('#container') ?? [];
        for (const dupe of duplicateContainers) {
            dupe.remove();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        RhIcon_1.io.unobserve(this);
        RhIcon_1.instances.delete(this);
    }
    iconChanged() {
        __classPrivateFieldGet(this, _RhIcon_instances, "m", _RhIcon_dispatchLoad).call(this);
    }
    accessibleLabelChanged() {
        __classPrivateFieldGet(this, _RhIcon_internals, "f").ariaLabel = this.accessibleLabel ?? null;
        if (this.accessibleLabel) {
            __classPrivateFieldGet(this, _RhIcon_internals, "f").role = 'img';
        }
        else {
            __classPrivateFieldGet(this, _RhIcon_internals, "f").role = 'presentation';
        }
    }
    async contentChanged(old) {
        if (old !== this.content) {
            await this.updateComplete;
            this.dispatchEvent(new Event('load', { bubbles: true }));
        }
    }
};
_RhIcon_intersecting = new WeakMap();
_RhIcon_logger = new WeakMap();
_RhIcon_internals = new WeakMap();
_RhIcon_instances = new WeakSet();
_RhIcon_getContent = function _RhIcon_getContent() {
    if (isServer) {
        const { set = 'standard', icon } = this;
        return globalThis.RH_ICONS.get(set)?.get(icon) ?? '';
    }
    else {
        return this.content ?? '';
    }
};
_RhIcon_lazyLoad = function _RhIcon_lazyLoad(shouldObserve = true) {
    if (shouldObserve) {
        RhIcon_1.io.observe(this);
    }
    if (__classPrivateFieldGet(this, _RhIcon_intersecting, "f")) {
        __classPrivateFieldGet(this, _RhIcon_instances, "m", _RhIcon_load).call(this);
    }
};
_RhIcon_dispatchLoad = function _RhIcon_dispatchLoad(shouldObserve = true) {
    switch (this.loading) {
        case 'idle': return void ric(() => __classPrivateFieldGet(this, _RhIcon_instances, "m", _RhIcon_load).call(this));
        case 'lazy': return void __classPrivateFieldGet(this, _RhIcon_instances, "m", _RhIcon_lazyLoad).call(this, shouldObserve);
        case 'eager': return void __classPrivateFieldGet(this, _RhIcon_instances, "m", _RhIcon_load).call(this);
    }
};
_RhIcon_load = async function _RhIcon_load() {
    const { set = 'standard', icon } = this;
    if (set && icon) {
        try {
            this.content = await RhIcon_1.resolve?.(set, icon);
        }
        catch (error) {
            if (error instanceof Error) {
                __classPrivateFieldGet(this, _RhIcon_logger, "f").error(error.message);
                this.dispatchEvent(new IconResolveErrorEvent(set, icon, error));
            }
        }
    }
};
RhIcon.styles = [style];
RhIcon.onIntersect = records => records.forEach(({ isIntersecting, target }) => {
    const icon = target;
    __classPrivateFieldSet(icon, _RhIcon_intersecting, isIntersecting, "f");
    __classPrivateFieldGet(icon, _RhIcon_instances, "m", _RhIcon_dispatchLoad).call(icon, false);
});
RhIcon.io = new IntersectionObserver(RhIcon_1.onIntersect);
RhIcon.instances = new Set();
RhIcon.resolve = (set, icon) => import(`@rhds/icons/${set}/${icon}.js`)
    .then(mod => mod.default.cloneNode(true));
__decorate([
    property({ type: String, reflect: true })
], RhIcon.prototype, "set", void 0);
__decorate([
    property({ type: String, reflect: true })
], RhIcon.prototype, "icon", void 0);
__decorate([
    property({ attribute: 'accessible-label' })
], RhIcon.prototype, "accessibleLabel", void 0);
__decorate([
    property()
], RhIcon.prototype, "loading", void 0);
__decorate([
    state()
], RhIcon.prototype, "content", void 0);
__decorate([
    observes('icon'),
    observes('set')
], RhIcon.prototype, "iconChanged", null);
__decorate([
    observes('accessibleLabel')
], RhIcon.prototype, "accessibleLabelChanged", null);
__decorate([
    observes('content')
], RhIcon.prototype, "contentChanged", null);
RhIcon = RhIcon_1 = __decorate([
    customElement('rh-icon')
], RhIcon);
export { RhIcon };
//# sourceMappingURL=rh-icon.js.map