var _PfBackToTop_instances, _PfBackToTop_scrollSpy, _PfBackToTop_visible, _PfBackToTop_scrollElement, _PfBackToTop_hasSlottedText, _PfBackToTop_logger, _PfBackToTop_rootNode_get, _PfBackToTop_ariaLabel_get, _PfBackToTop_onSlotchange, _PfBackToTop_removeScrollListener, _PfBackToTop_addScrollListener, _PfBackToTop_toggleVisibility;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import '@patternfly/elements/pf-button/pf-button.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
import { css } from "lit";
const styles = css `:host {\n  display: inline-block;\n  position: absolute;\n  right: var(--pf-c-back-to-top--Right, var(--pf-global--spacer--2xl, 3rem));\n  bottom: var(--pf-c-back-to-top--Bottom, var(--pf-global--spacer--lg, 1.5rem));\n}\n\n[part="trigger"] {\n  box-shadow: var(--pf-c-back-to-top--c-button--BoxShadow, var(--pf-global--BoxShadow--lg-bottom, 0 0.75rem 0.75rem -0.5rem rgba(3, 3, 3, 0.18)));\n\n  --pf-c-button--FontSize: var(--pf-c-back-to-top--c-button--FontSize, var(--pf-global--FontSize--xs, 0.75rem));\n  --pf-c-button--BorderRadius: var(--pf-c-back-to-top--c-button--BorderRadius,  var(--pf-global--BorderRadius--lg, 30em));\n  --pf-c-button--PaddingTop: var(--pf-c-back-to-top--c-button--PaddingTop, var(--pf-global--spacer--xs, 0.25rem));\n  --pf-c-button--PaddingRight: var(--pf-c-back-to-top--c-button--PaddingRight, var(--pf-global--spacer--sm, 0.5rem));\n  --pf-c-button--PaddingBottom: var(--pf-c-back-to-top--c-button--PaddingBottom, var(--pf-global--spacer--xs, 0.25rem));\n  --pf-c-button--PaddingLeft: var(--pf-c-back-to-top--c-button--PaddingLeft, var(--pf-global--spacer--sm, 0.5rem));\n}\n\na {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--pf-c-button--m-primary--Color, var(--pf-global--Color--light-100, #fff));\n  background-color: var(--pf-c-button--m-primary--BackgroundColor, var(--pf-global--primary-color--100, #06c));\n  text-decoration: none;\n  font-size: var(--pf-c-button--FontSize);\n  padding: var(--pf-c-button--PaddingTop) var(--pf-c-button--PaddingRight) var(--pf-c-button--PaddingBottom) var(--pf-c-button--PaddingLeft);\n  border-radius: var(--pf-c-button--BorderRadius);\n  gap: var(--pf-c-button__icon--m-end--MarginLeft, var(--pf-global--spacer--xs, 0.25rem));\n}\n\na:hover {\n  --pf-c-button--m-primary--Color: var(--pf-c-button--m-primary--hover--Color, var(--pf-global--Color--light-100, #fff));\n  --pf-c-button--m-primary--BackgroundColor: var(--pf-c-button--m-primary--hover--BackgroundColor, var(--pf-global--primary-color--200, #004080));\n}\n\na:focus {\n  --pf-c-button--m-primary--Color: var(--pf-c-button--m-primary--hover--Color, var(--pf-global--Color--light-100,#fff));\n  --pf-c-button--m-primary--BackgroundColor: var(--pf-c-button--m-primary--hover--BackgroundColor, var(--pf-global--primary-color--200, #004080));\n}\n\n[part="trigger"][hidden] {\n  display: none;\n}\n\npf-icon {\n  /* override icon size as default sm variant is incorrect */\n  --pf-icon--size: var(--pf-c-button--FontSize);\n  vertical-align: -0.125rem;\n}\n\nspan {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--pf-c-button__icon--m-end--MarginLeft, var(--pf-global--spacer--xs, 0.25rem));\n}\n\n@media (min-width: 768px) {\n  :host {\n    --pf-c-back-to-top--Bottom: var(--pf-c-back-to-top--md--Bottom, var(--pf-global--spacer--2xl, 3rem));\n  }\n}\n`;
let PfBackToTop = class PfBackToTop extends LitElement {
    constructor() {
        super(...arguments);
        _PfBackToTop_instances.add(this);
        /** Flag to always show back to top button, defaults to false. */
        this.alwaysVisible = false;
        /** Distance from the top of the scrollable element to trigger the visibility of the back to top button */
        this.scrollDistance = 400;
        _PfBackToTop_scrollSpy.set(this, false);
        _PfBackToTop_visible.set(this, false);
        _PfBackToTop_scrollElement.set(this, void 0);
        _PfBackToTop_hasSlottedText.set(this, false);
        _PfBackToTop_logger.set(this, new Logger(this));
        _PfBackToTop_toggleVisibility.set(this, () => {
            if (this.alwaysVisible) {
                __classPrivateFieldSet(this, _PfBackToTop_visible, true, "f");
                this.requestUpdate();
                return;
            }
            const previousVisibility = __classPrivateFieldGet(this, _PfBackToTop_visible, "f");
            if (__classPrivateFieldGet(this, _PfBackToTop_scrollElement, "f")) {
                const scrolled = (__classPrivateFieldGet(this, _PfBackToTop_scrollElement, "f") instanceof Window) ?
                    __classPrivateFieldGet(this, _PfBackToTop_scrollElement, "f").scrollY
                    : __classPrivateFieldGet(this, _PfBackToTop_scrollElement, "f").scrollTop;
                __classPrivateFieldSet(this, _PfBackToTop_visible, (scrolled > this.scrollDistance), "f");
                if (previousVisibility !== __classPrivateFieldGet(this, _PfBackToTop_visible, "f")) {
                    this.requestUpdate();
                }
            }
        });
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _PfBackToTop_instances, "m", _PfBackToTop_addScrollListener).call(this);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        __classPrivateFieldGet(this, _PfBackToTop_instances, "m", _PfBackToTop_removeScrollListener).call(this);
    }
    willUpdate(changed) {
        if (changed.has('scrollableSelector')) {
            __classPrivateFieldGet(this, _PfBackToTop_instances, "m", _PfBackToTop_addScrollListener).call(this);
        }
        if (changed.has('alwaysVisible')) {
            __classPrivateFieldGet(this, _PfBackToTop_toggleVisibility, "f").call(this);
        }
    }
    render() {
        // ensure href has a hash
        if (this.href && this.href.charAt(0) !== '#') {
            this.href = `#${this.href}`;
            __classPrivateFieldGet(this, _PfBackToTop_logger, "f").warn(`missing hash in href fragment link`);
        }
        if (this.href) {
            return html `
        <a href="${this.href}" ?hidden="${!__classPrivateFieldGet(this, _PfBackToTop_visible, "f")}" part="trigger" aria-label="${ifDefined(__classPrivateFieldGet(this, _PfBackToTop_instances, "a", _PfBackToTop_ariaLabel_get))}">
          <slot name="icon"></slot>
          <slot @slotchange="${__classPrivateFieldGet(this, _PfBackToTop_instances, "m", _PfBackToTop_onSlotchange)}"></slot>
          <pf-icon icon="angle-up" set="fas"></pf-icon>
        </a>
      `;
        }
        else {
            return html `
        <pf-button
            icon="${ifDefined(this.icon)}"
            icon-set="${ifDefined(this.iconSet)}"
            ?hidden="${!__classPrivateFieldGet(this, _PfBackToTop_visible, "f")}"
            tabindex="${__classPrivateFieldGet(this, _PfBackToTop_visible, "f") ? '0' : '-1'}"
            part="trigger"
            label="${ifDefined(__classPrivateFieldGet(this, _PfBackToTop_instances, "a", _PfBackToTop_ariaLabel_get))}"
          >
          <slot name="icon" slot="icon"></slot>
          <span>
            <slot></slot>
            <pf-icon icon="angle-up" set="fas"></pf-icon>
          </span>
        </pf-button>
      `;
        }
    }
};
_PfBackToTop_scrollSpy = new WeakMap();
_PfBackToTop_visible = new WeakMap();
_PfBackToTop_scrollElement = new WeakMap();
_PfBackToTop_hasSlottedText = new WeakMap();
_PfBackToTop_logger = new WeakMap();
_PfBackToTop_toggleVisibility = new WeakMap();
_PfBackToTop_instances = new WeakSet();
_PfBackToTop_rootNode_get = function _PfBackToTop_rootNode_get() {
    let root = null;
    if (isServer) {
        return null;
    }
    else if ((root = this.getRootNode()) instanceof Document || root instanceof ShadowRoot) {
        return root;
    }
    else {
        return document;
    }
};
_PfBackToTop_ariaLabel_get = function _PfBackToTop_ariaLabel_get() {
    if (__classPrivateFieldGet(this, _PfBackToTop_hasSlottedText, "f")) {
        return undefined;
    }
    return this.label ?? 'Back to top';
};
_PfBackToTop_onSlotchange = function _PfBackToTop_onSlotchange(event) {
    const slot = event.currentTarget;
    const nodes = slot.assignedNodes();
    __classPrivateFieldSet(this, _PfBackToTop_hasSlottedText, nodes.length > 0 ? true : false, "f");
    this.requestUpdate();
};
_PfBackToTop_removeScrollListener = function _PfBackToTop_removeScrollListener() {
    __classPrivateFieldGet(this, _PfBackToTop_scrollElement, "f")?.removeEventListener('scroll', __classPrivateFieldGet(this, _PfBackToTop_toggleVisibility, "f"));
};
_PfBackToTop_addScrollListener = function _PfBackToTop_addScrollListener() {
    __classPrivateFieldGet(this, _PfBackToTop_instances, "m", _PfBackToTop_removeScrollListener).call(this);
    if (this.scrollableSelector?.trim() === '') {
        __classPrivateFieldGet(this, _PfBackToTop_logger, "f").error(`scrollable-selector attribute cannot be empty`);
        return;
    }
    __classPrivateFieldSet(this, _PfBackToTop_scrollSpy, !!this.scrollableSelector, "f");
    if (isServer) {
        return;
    }
    else if (__classPrivateFieldGet(this, _PfBackToTop_scrollSpy, "f") && this.scrollableSelector) {
        const scrollableElement = __classPrivateFieldGet(this, _PfBackToTop_instances, "a", _PfBackToTop_rootNode_get)?.querySelector?.(this.scrollableSelector);
        if (!scrollableElement) {
            __classPrivateFieldGet(this, _PfBackToTop_logger, "f").error(`unable to find element with selector ${this.scrollableSelector}`);
            return;
        }
        __classPrivateFieldSet(this, _PfBackToTop_scrollElement, scrollableElement, "f");
    }
    else {
        __classPrivateFieldSet(this, _PfBackToTop_scrollElement, window, "f");
    }
    __classPrivateFieldGet(this, _PfBackToTop_scrollElement, "f").addEventListener('scroll', __classPrivateFieldGet(this, _PfBackToTop_toggleVisibility, "f"), { passive: true });
    __classPrivateFieldGet(this, _PfBackToTop_toggleVisibility, "f").call(this);
};
PfBackToTop.styles = [styles];
PfBackToTop.version = "4.1.0";
__decorate([
    property({ reflect: true })
], PfBackToTop.prototype, "icon", void 0);
__decorate([
    property({ attribute: 'icon-set' })
], PfBackToTop.prototype, "iconSet", void 0);
__decorate([
    property({ reflect: true, type: Boolean, attribute: 'always-visible' })
], PfBackToTop.prototype, "alwaysVisible", void 0);
__decorate([
    property({ reflect: true, attribute: 'scrollable-selector' })
], PfBackToTop.prototype, "scrollableSelector", void 0);
__decorate([
    property({ type: Number, attribute: 'scroll-distance' })
], PfBackToTop.prototype, "scrollDistance", void 0);
__decorate([
    property()
], PfBackToTop.prototype, "label", void 0);
__decorate([
    property({ reflect: true })
], PfBackToTop.prototype, "href", void 0);
PfBackToTop = __decorate([
    customElement('pf-back-to-top')
], PfBackToTop);
export { PfBackToTop };
//# sourceMappingURL=pf-back-to-top.js.map