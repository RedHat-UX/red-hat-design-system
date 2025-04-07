var _RhBackToTop_instances, _RhBackToTop_scrollSpy, _RhBackToTop_visible, _RhBackToTop_scrollElement, _RhBackToTop_rootNode_get, _RhBackToTop_removeScrollListener, _RhBackToTop_addScrollListener, _RhBackToTop_toggleVisibility;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { css } from "lit";
const styles = css `:host{position:fixed;z-index:1000;inset-inline-end:var(--rh-space-xl,24px);inset-block-end:var(--rh-space-xl,24px)}[part=trigger]{display:inline-flex;align-items:center;justify-content:center;color:var(--rh-color-text-primary-on-dark,#fff);background-color:var(--rh-back-to-top-background-color,var(--rh-color-accent-base-on-light,#06c));text-decoration:none;font-size:var(--rh-font-size-body-text-xs,.75rem);padding-inline:var(--rh-space-md,8px);padding-block:var(--rh-space-xs,4px);border-radius:var(--rh-border-radius-pill,64px);gap:var(--rh-space-xs,4px);line-height:var(--rh-line-height-body-text,1.5);outline:var(--rh-border-width-md,2px) solid #0000;border:var(--rh-border-width-md,2px) solid #0000;pointer-events:all}[part=trigger]:is(:hover,:focus){outline:var(--rh-border-width-md,2px) solid var(--rh-color-interactive-primary-hover-on-light,#036);border:var(--rh-border-width-md,2px) solid var(--rh-color-border-strong-on-dark,#fff);background-color:var(--rh-color-interactive-primary-hover-on-light,#036)}[part=trigger][hidden]{display:none}rh-icon{--rh-icon-size:var(--rh-font-size-body-text-xs,0.75rem);vertical-align:-.125rem}span{display:inline-flex;align-items:center;justify-content:center;gap:var(--rh-space-xs,4px)}@media (min-width:768px){:host{inset-inline-end:var(--rh-space-3xl,48px);inset-block-end:var(--rh-space-3xl,48px)}}`;
/**
 * Back to top component is a fragment link that allows users to quickly navigate
 * to the top of a lengthy content page.
 *
 * @summary A shortcut to the top of the page content
 * @csspart trigger - back to top link anchor element
 * @slot - Text for the back to top link
 */
let RhBackToTop = class RhBackToTop extends LitElement {
    constructor() {
        super(...arguments);
        _RhBackToTop_instances.add(this);
        /** Distance from the top of the scrollable element to trigger the visibility of the back to top button */
        this.scrollDistance = 400;
        _RhBackToTop_scrollSpy.set(this, false);
        _RhBackToTop_visible.set(this, false);
        _RhBackToTop_scrollElement.set(this, void 0);
        _RhBackToTop_toggleVisibility.set(this, () => {
            if (this.visible && this.visible === 'always') {
                __classPrivateFieldSet(this, _RhBackToTop_visible, true, "f");
                this.requestUpdate();
                return;
            }
            const previousVisibility = __classPrivateFieldGet(this, _RhBackToTop_visible, "f");
            if (__classPrivateFieldGet(this, _RhBackToTop_scrollElement, "f")) {
                const scrolled = (__classPrivateFieldGet(this, _RhBackToTop_scrollElement, "f") instanceof Window) ?
                    __classPrivateFieldGet(this, _RhBackToTop_scrollElement, "f").scrollY
                    : __classPrivateFieldGet(this, _RhBackToTop_scrollElement, "f").scrollTop;
                __classPrivateFieldSet(this, _RhBackToTop_visible, (scrolled > this.scrollDistance), "f");
                if (previousVisibility !== __classPrivateFieldGet(this, _RhBackToTop_visible, "f")) {
                    this.requestUpdate();
                }
            }
        });
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _RhBackToTop_instances, "m", _RhBackToTop_addScrollListener).call(this);
        if (this.href && this.href.charAt(0) !== '#') {
            this.href = `#${this.href}`;
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        __classPrivateFieldGet(this, _RhBackToTop_instances, "m", _RhBackToTop_removeScrollListener).call(this);
    }
    willUpdate(changed) {
        if (changed.has('scrollableSelector')) {
            __classPrivateFieldGet(this, _RhBackToTop_instances, "m", _RhBackToTop_addScrollListener).call(this);
        }
        if (changed.has('visible')) {
            __classPrivateFieldGet(this, _RhBackToTop_toggleVisibility, "f").call(this);
        }
    }
    render() {
        return html `
      <a href="${ifDefined(this.href)}" ?hidden="${!__classPrivateFieldGet(this, _RhBackToTop_visible, "f")}" part="trigger">
        <slot>Back to top</slot>
        <rh-icon set="ui" icon="caret-up"></rh-icon>
      </a>
    `;
    }
};
_RhBackToTop_scrollSpy = new WeakMap();
_RhBackToTop_visible = new WeakMap();
_RhBackToTop_scrollElement = new WeakMap();
_RhBackToTop_toggleVisibility = new WeakMap();
_RhBackToTop_instances = new WeakSet();
_RhBackToTop_rootNode_get = function _RhBackToTop_rootNode_get() {
    const root = this.getRootNode();
    if (root instanceof Document || root instanceof ShadowRoot) {
        return root;
    }
    else {
        return document;
    }
};
_RhBackToTop_removeScrollListener = function _RhBackToTop_removeScrollListener() {
    __classPrivateFieldGet(this, _RhBackToTop_scrollElement, "f")?.removeEventListener('scroll', __classPrivateFieldGet(this, _RhBackToTop_toggleVisibility, "f"));
};
_RhBackToTop_addScrollListener = function _RhBackToTop_addScrollListener() {
    __classPrivateFieldGet(this, _RhBackToTop_instances, "m", _RhBackToTop_removeScrollListener).call(this);
    // scrollable-selector attribute cannot be empty:
    if (this.scrollableSelector?.trim() === '') {
        return;
    }
    __classPrivateFieldSet(this, _RhBackToTop_scrollSpy, !!this.scrollableSelector, "f");
    if (__classPrivateFieldGet(this, _RhBackToTop_scrollSpy, "f") && this.scrollableSelector) {
        const scrollableElement = __classPrivateFieldGet(this, _RhBackToTop_instances, "a", _RhBackToTop_rootNode_get).querySelector(this.scrollableSelector);
        if (!scrollableElement) {
            return;
        }
        __classPrivateFieldSet(this, _RhBackToTop_scrollElement, scrollableElement, "f");
    }
    else {
        __classPrivateFieldSet(this, _RhBackToTop_scrollElement, window, "f");
    }
    __classPrivateFieldGet(this, _RhBackToTop_scrollElement, "f").addEventListener('scroll', __classPrivateFieldGet(this, _RhBackToTop_toggleVisibility, "f"), { passive: true });
    __classPrivateFieldGet(this, _RhBackToTop_toggleVisibility, "f").call(this);
};
RhBackToTop.styles = [styles];
__decorate([
    property({ reflect: true, attribute: 'visible' })
], RhBackToTop.prototype, "visible", void 0);
__decorate([
    property({ reflect: true, attribute: 'scrollable-selector' })
], RhBackToTop.prototype, "scrollableSelector", void 0);
__decorate([
    property({ type: Number, attribute: 'scroll-distance' })
], RhBackToTop.prototype, "scrollDistance", void 0);
__decorate([
    property({ reflect: true })
], RhBackToTop.prototype, "href", void 0);
RhBackToTop = __decorate([
    customElement('rh-back-to-top')
], RhBackToTop);
export { RhBackToTop };
//# sourceMappingURL=rh-back-to-top.js.map