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
const styles = css `:host {
  display: inline-block;
  position: absolute;
  /** Right position for back to top */
  right: var(--pf-c-back-to-top--Right, var(--pf-global--spacer--2xl, 3rem));
  /** Bottom position for back to top */
  bottom: var(--pf-c-back-to-top--Bottom, var(--pf-global--spacer--lg, 1.5rem));
}

[part="trigger"] {
  /** Box shadow for back to top button */
  box-shadow: var(--pf-c-back-to-top--c-button--BoxShadow, var(--pf-global--BoxShadow--lg-bottom, 0 0.75rem 0.75rem -0.5rem rgba(3, 3, 3, 0.18)));

  /** Font size for back to top button */
  --pf-c-button--FontSize: var(--pf-c-back-to-top--c-button--FontSize, var(--pf-global--FontSize--xs, 0.75rem));
  /** Border radius for back to top button */
  --pf-c-button--BorderRadius: var(--pf-c-back-to-top--c-button--BorderRadius,  var(--pf-global--BorderRadius--lg, 30em));
  /** Top padding for back to top button */
  --pf-c-button--PaddingTop: var(--pf-c-back-to-top--c-button--PaddingTop, var(--pf-global--spacer--xs, 0.25rem));
  /** Right padding for back to top button */
  --pf-c-button--PaddingRight: var(--pf-c-back-to-top--c-button--PaddingRight, var(--pf-global--spacer--sm, 0.5rem));
  /** Bottom padding for back to top button */
  --pf-c-button--PaddingBottom: var(--pf-c-back-to-top--c-button--PaddingBottom, var(--pf-global--spacer--xs, 0.25rem));
  /** Left padding for back to top button */
  --pf-c-button--PaddingLeft: var(--pf-c-back-to-top--c-button--PaddingLeft, var(--pf-global--spacer--sm, 0.5rem));
}

a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /** Primary color for back to top button */
  color: var(--pf-c-button--m-primary--Color, var(--pf-global--Color--light-100, #fff));
  /** Primary background color for back to top button */
  background-color: var(--pf-c-button--m-primary--BackgroundColor, var(--pf-global--primary-color--100, #06c));
  text-decoration: none;
  font-size: var(--pf-c-button--FontSize);
  padding: var(--pf-c-button--PaddingTop) var(--pf-c-button--PaddingRight) var(--pf-c-button--PaddingBottom) var(--pf-c-button--PaddingLeft);
  border-radius: var(--pf-c-button--BorderRadius);
  /** End icon margin left for back to top button */
  gap: var(--pf-c-button__icon--m-end--MarginLeft, var(--pf-global--spacer--xs, 0.25rem));
}

a:hover {
  --pf-c-button--m-primary--Color: var(--pf-c-button--m-primary--hover--Color, var(--pf-global--Color--light-100, #fff));
  --pf-c-button--m-primary--BackgroundColor: var(--pf-c-button--m-primary--hover--BackgroundColor, var(--pf-global--primary-color--200, #004080));
}

a:focus {
  --pf-c-button--m-primary--Color: var(--pf-c-button--m-primary--hover--Color, var(--pf-global--Color--light-100,#fff));
  --pf-c-button--m-primary--BackgroundColor: var(--pf-c-button--m-primary--hover--BackgroundColor, var(--pf-global--primary-color--200, #004080));
}

[part="trigger"][hidden] {
  display: none;
}

pf-icon {
  /* override icon size as default sm variant is incorrect */
  --pf-icon--size: var(--pf-c-button--FontSize);
  vertical-align: -0.125rem;
}

span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--pf-c-button__icon--m-end--MarginLeft, var(--pf-global--spacer--xs, 0.25rem));
}

@media (min-width: 768px) {
  :host {
    --pf-c-back-to-top--Bottom: var(--pf-c-back-to-top--md--Bottom, var(--pf-global--spacer--2xl, 3rem));
  }
}
`;
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
        <!-- The \`<a>\` or \`<pf-button>\` element -->
        <a href="${this.href}"
           ?hidden="${!__classPrivateFieldGet(this, _PfBackToTop_visible, "f")}"
           part="trigger"
           aria-label="${ifDefined(__classPrivateFieldGet(this, _PfBackToTop_instances, "a", _PfBackToTop_ariaLabel_get))}">
          <!-- Contains the prefix icon to display before the link or button. -->
          <slot name="icon"></slot>
          <!-- Text to display inside the link or button. -->
          <slot @slotchange="${__classPrivateFieldGet(this, _PfBackToTop_instances, "m", _PfBackToTop_onSlotchange)}"></slot>
          <pf-icon icon="angle-up" set="fas"></pf-icon>
        </a>
      `;
        }
        else {
            return html `
        <!-- The \`<a>\` or \`<pf-button>\` element -->
        <pf-button
            icon="${ifDefined(this.icon)}"
            icon-set="${ifDefined(this.iconSet)}"
            ?hidden="${!__classPrivateFieldGet(this, _PfBackToTop_visible, "f")}"
            tabindex="${__classPrivateFieldGet(this, _PfBackToTop_visible, "f") ? '0' : '-1'}"
            part="trigger"
            label="${ifDefined(__classPrivateFieldGet(this, _PfBackToTop_instances, "a", _PfBackToTop_ariaLabel_get))}"
          >
          <!-- Contains the prefix icon to display before the link or button. -->
          <slot name="icon" slot="icon"></slot>
          <span>
            <!-- Text to display inside the link or button. -->
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
PfBackToTop.version = "4.3.0";
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