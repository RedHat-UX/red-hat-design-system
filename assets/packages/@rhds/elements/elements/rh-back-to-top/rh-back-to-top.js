var _RhBackToTop_instances, _RhBackToTop_scrollSpy, _RhBackToTop_visible, _RhBackToTop_scrollElement, _RhBackToTop_rootNode_get, _RhBackToTop_removeScrollListener, _RhBackToTop_addScrollListener, _RhBackToTop_toggleVisibility;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@rhds/elements/rh-icon/rh-icon.js';
import { css } from "lit";
const styles = css `:host{position:fixed;z-index:1000;inset-inline-end:var(--rh-space-xl,24px);inset-block-end:var(--rh-space-xl,24px)}[part=trigger]{display:inline-flex;align-items:center;justify-content:center;color:light-dark(var(--rh-color-text-primary-on-dark,#fff),var(--rh-color-text-primary-on-light,#151515));background-color:var(--rh-back-to-top-background-color,var(--rh-color-accent-base));text-decoration:none;font-size:var(--rh-font-size-body-text-xs,.75rem);padding-inline:var(--rh-space-md,8px);padding-block:var(--rh-space-xs,4px);border-radius:var(--rh-border-radius-pill,64px);gap:var(--rh-space-xs,4px);line-height:var(--rh-line-height-body-text,1.5);outline:var(--rh-border-width-md,2px) solid #0000;border:var(--rh-border-width-md,2px) solid #0000;pointer-events:all}[part=trigger]:is(:hover,:focus){outline:var(--rh-border-width-md,2px) solid var(--rh-color-interactive-primary-hover);border:var(--rh-border-width-md,2px) solid light-dark(var(--rh-color-border-strong-on-dark,#fff),var(--rh-color-border-strong-on-light,#151515));background-color:var(--rh-color-interactive-primary-hover)}[part=trigger][hidden]{display:none}rh-icon{--rh-icon-size:var(--rh-font-size-body-text-xs,0.75rem);vertical-align:-.125rem}@media (min-width:768px){:host{inset-inline-end:var(--rh-space-3xl,48px);inset-block-end:var(--rh-space-3xl,48px)}}`;
/**
 * Provides a fixed-position anchor link for scrolling back to the top of
 * long pages. Appears after a configurable scroll threshold; should be
 * last in tab order. Renders an `<a>` element so screen readers announce
 * it as a navigation link. Keyboard-accessible via Tab and Enter (WCAG 2.1.1).
 * Avoid placing more than one instance per page.
 *
 * @summary Fixed anchor link for returning to page top on long pages
 *
 * @cssprop --rh-back-to-top-background-color
 * Background color for the back to top button. Defaults to `--rh-color-accent-base`,
 * which uses the design system's primary interactive blue color and automatically
 * adapts to light and dark color schemes (Blue 60 in light, Blue 30 in dark).
 * Custom values must maintain 4.5:1 contrast ratio with text.
 */
let RhBackToTop = class RhBackToTop extends LitElement {
    constructor() {
        super(...arguments);
        _RhBackToTop_instances.add(this);
        /**
         * Distance in pixels from the top of the scrollable element to trigger button visibility.
         *
         * The button appears when the user scrolls past this threshold and disappears when
         * scrolling back above it. Default is 400px.
         *
         * ## Usage guidelines
         * - Default 400px works well for most standard page layouts
         * - Increase for longer pages where users need more scroll before the button appears
         * - Decrease for shorter pages or containers where users reach the bottom quickly
         * - Consider page fold height and content length when customizing
         *
         * @example Custom scroll threshold
         * ```html
         * <rh-back-to-top scroll-distance="800">Back to top</rh-back-to-top>
         * ```
         */
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
        if (!isServer) {
            __classPrivateFieldGet(this, _RhBackToTop_instances, "m", _RhBackToTop_addScrollListener).call(this);
        }
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
      <!-- summary: anchor link that triggers scroll to top
           description: |
             The clickable link element that navigates to the top of the page or specified target.
             This part can be styled to customize the button's appearance including hover states,
             borders, shadows, and positioning. The button uses a pill shape with the accent color
             background and includes both text and an upward caret icon. -->
      <a href="${ifDefined(this.href)}" ?hidden="${!__classPrivateFieldGet(this, _RhBackToTop_visible, "f")}" part="trigger">
        <!-- summary: link text content (default slot)
             description: |
               Text displayed within the back to top button. Defaults to
               "Back to top" if not provided. Serves as the ARIA accessible
               name for the anchor link (per WCAG 2.5.3 Label in Name).
               Use visible, descriptive text so screen readers announce
               the link purpose; avoid icon-only content without a label. -->
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