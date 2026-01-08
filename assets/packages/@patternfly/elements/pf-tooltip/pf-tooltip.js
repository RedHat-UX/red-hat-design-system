var _PfTooltip_instances, _PfTooltip_invoker_get, _PfTooltip_content_get, _PfTooltip_referenceTrigger, _PfTooltip_float, _PfTooltip_invokerChanged, _PfTooltip_getReferenceTrigger, _PfTooltip_updateTrigger;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { FloatingDOMController, } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
import { bound } from '@patternfly/pfe-core/decorators/bound.js';
import { StringListConverter } from '@patternfly/pfe-core';
import { css } from "lit";
const styles = css `:host {
  --_timestamp-text-decoration: underline dashed 1px;
  --_timestamp-text-underline-offset: 4px;
  display: inline;
}

* { box-sizing: border-box; }

#container {
  display: inline-flex;
  position: relative;
  max-width: 100%;
  /** Tooltip arrow width */
  --_floating-arrow-size: var(--pf-c-tooltip__arrow--Width, 0.5rem);
}

#tooltip,
#tooltip::after {
  position: absolute;
}

#tooltip {
  --_timestamp-text-decoration: none;
  --_timestamp-text-underline-offset: initial;
  user-select: none;
  display: block;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  transition: opacity 300ms cubic-bezier(0.54, 1.5, 0.38, 1.11) 0s;
  text-align: center;
  word-break: break-word;
  translate: var(--_floating-content-translate);
  max-width: calc(100vw - 10px);
  width: max-content;
  top: 0;
  left: 0;
  will-change: opacity;
  /** Sets the font color for the tooltip content */
  line-height: var(--pf-c-tooltip--line-height, 1.5);
  /** Maximum width for the tooltip */
  max-width: var(--pf-c-tooltip--MaxWidth, 18.75rem);
  /** Box shadow for the tooltip */
  box-shadow: var(--pf-c-tooltip--BoxShadow,
    var(--pf-global--BoxShadow--md,
      0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12),
      0 0 0.25rem 0 rgba(3, 3, 3, 0.06)));
  /** Tooltip padding (top, right, bottom, left) */
  padding:
    var(--pf-c-tooltip__content--PaddingTop,
      var(--pf-global--spacer--sm, 0.5rem))
    var(--pf-c-tooltip__content--PaddingRight,
      var(--pf-global--spacer--sm, 0.5rem))
    var(--pf-c-tooltip__content--PaddingBottom,
      var(--pf-global--spacer--sm, 0.5rem))
    var(--pf-c-tooltip__content--PaddingLeft,
      var(--pf-global--spacer--sm, 0.5rem));
  /** Font size for the tooltip content */
  font-size: var(--pf-c-tooltip__content--FontSize,
    var(--pf-global--FontSize--sm, 0.875rem));
  /** Sets the font color for the tooltip content */
  color: var(--pf-c-tooltip__content--Color,
    var(--pf-global--Color--light-100, #ffffff));
  /** Sets the background color for the tooltip content */
  background-color: var(--pf-c-tooltip__content--BackgroundColor,
    var(--pf-global--BackgroundColor--dark-100, #151515));
}

#tooltip::after {
  display: block;
  content: '';
  rotate: 45deg;
  width: var(--_floating-arrow-size);
  height: var(--_floating-arrow-size);
  will-change: left top right bottom;
  background-color: var(--pf-c-tooltip__content--BackgroundColor,
    var(--pf-global--BackgroundColor--dark-100, #151515));
}

.open #tooltip {
  opacity: 1;
  user-select: initial;
}

/* LEFT */
.left #tooltip::after          { right: calc(-0.5 * var(--_floating-arrow-size)); }
.left.center #tooltip::after   { top: calc(50% - 0.5 * var(--_floating-arrow-size)); }
.left.start #tooltip::after    { top: var(--_floating-arrow-size); }
.left.end #tooltip::after      { bottom: var(--_floating-arrow-size); }

/* TOP */
.top #tooltip::after           { top: calc(100% - 0.5 * var(--_floating-arrow-size)); }
.top.center #tooltip::after    { right: calc(50% - 0.5 * var(--_floating-arrow-size)); }
.top.start #tooltip::after     { left: var(--_floating-arrow-size); }
.top.end #tooltip::after       { right: var(--_floating-arrow-size); }

/* RIGHT */
.right #tooltip::after         { right: calc(100% - 0.5 * var(--_floating-arrow-size)); }
.right.center #tooltip::after  { top: calc(50% - 0.5 * var(--_floating-arrow-size)); }
.right.start #tooltip::after   { top: var(--_floating-arrow-size); }
.right.end #tooltip::after     { bottom: var(--_floating-arrow-size); }

/* BOTTOM */
.bottom #tooltip::after        { bottom: calc(100% - 0.5 * var(--_floating-arrow-size)); }
.bottom.center #tooltip::after { right: calc(50% - 0.5 * var(--_floating-arrow-size)); }
.bottom.start #tooltip::after  { left: var(--_floating-arrow-size); }
.bottom.end #tooltip::after    { right: var(--_floating-arrow-size); }

`;
const EnterEvents = ['focusin', 'tap', 'click', 'mouseenter'];
const ExitEvents = ['focusout', 'blur', 'mouseleave'];
let PfTooltip = class PfTooltip extends LitElement {
    constructor() {
        super(...arguments);
        _PfTooltip_instances.add(this);
        /** The position of the tooltip, relative to the invoking content */
        this.position = 'top';
        /** If false, prevents the tooltip from trying to remain in view by flipping itself when necessary */
        this.noFlip = false;
        _PfTooltip_referenceTrigger.set(this, void 0);
        _PfTooltip_float.set(this, new FloatingDOMController(this, {
            content: () => __classPrivateFieldGet(this, _PfTooltip_instances, "a", _PfTooltip_content_get),
            invoker: () => {
                if (__classPrivateFieldGet(this, _PfTooltip_referenceTrigger, "f")) {
                    return __classPrivateFieldGet(this, _PfTooltip_referenceTrigger, "f");
                }
                else if (__classPrivateFieldGet(this, _PfTooltip_instances, "a", _PfTooltip_invoker_get) instanceof HTMLSlotElement
                    && __classPrivateFieldGet(this, _PfTooltip_instances, "a", _PfTooltip_invoker_get).assignedElements().length > 0) {
                    return __classPrivateFieldGet(this, _PfTooltip_instances, "a", _PfTooltip_invoker_get).assignedElements().at(0);
                }
                else {
                    return __classPrivateFieldGet(this, _PfTooltip_instances, "a", _PfTooltip_invoker_get);
                }
            },
        }));
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldGet(this, _PfTooltip_instances, "m", _PfTooltip_invokerChanged).call(this);
        __classPrivateFieldGet(this, _PfTooltip_instances, "m", _PfTooltip_updateTrigger).call(this);
    }
    /**
     * Removes event listeners from the old trigger element and attaches
     * them to the new trigger element.
     * @param changed changed properties
     */
    willUpdate(changed) {
        if (changed.has('trigger')) {
            __classPrivateFieldGet(this, _PfTooltip_instances, "m", _PfTooltip_updateTrigger).call(this);
        }
    }
    render() {
        const { alignment, anchor, open, styles } = __classPrivateFieldGet(this, _PfTooltip_float, "f");
        const blockInvoker = __classPrivateFieldGet(this, _PfTooltip_instances, "a", _PfTooltip_invoker_get)?.assignedElements().length === 0
            && __classPrivateFieldGet(this, _PfTooltip_instances, "a", _PfTooltip_invoker_get)?.assignedNodes().length > 0;
        const display = blockInvoker ? 'block' : 'contents';
        return html `
      <div id="container"
           style="${styleMap(styles)}"
           class="${classMap({ open,
            [anchor]: !!anchor,
            [alignment]: !!alignment })}">
        <div role="tooltip"
             style="${styleMap({ display })}"
             aria-labelledby="tooltip">
          <!-- This slot wraps around the element that should be used to invoke the tooltip content to display. Typically this would be an icon, button, or other small sized element. -->
          <slot id="invoker" @slotchange="${__classPrivateFieldGet(this, _PfTooltip_instances, "m", _PfTooltip_invokerChanged)}"></slot>
        </div>
        <div ?inert="${!open}">
          <!-- This slot renders the content that will be displayed inside of the tooltip. Typically this would include a string of text without any additional elements. -->
          <slot id="tooltip" name="content">${this.content}</slot>
        </div>
      </div>
    `;
    }
    async show() {
        await this.updateComplete;
        const placement = this.position;
        const offset = !placement?.match(/top|bottom/) ? 15
            : { mainAxis: 15, alignmentAxis: -4 };
        await __classPrivateFieldGet(this, _PfTooltip_float, "f").show({
            offset,
            placement,
            flip: !this.noFlip,
            fallbackPlacements: this.flipBehavior,
        });
    }
    async hide() {
        await __classPrivateFieldGet(this, _PfTooltip_float, "f").hide();
    }
};
_PfTooltip_referenceTrigger = new WeakMap();
_PfTooltip_float = new WeakMap();
_PfTooltip_instances = new WeakSet();
_PfTooltip_invoker_get = function _PfTooltip_invoker_get() {
    return this.shadowRoot?.querySelector?.('#invoker') ?? null;
};
_PfTooltip_content_get = function _PfTooltip_content_get() {
    return this.shadowRoot?.querySelector?.('#tooltip') ?? null;
};
_PfTooltip_invokerChanged = function _PfTooltip_invokerChanged() {
    this.requestUpdate();
};
_PfTooltip_getReferenceTrigger = function _PfTooltip_getReferenceTrigger() {
    return this.getRootNode()
        .getElementById(this.trigger?.normalize() ?? '');
};
_PfTooltip_updateTrigger = function _PfTooltip_updateTrigger() {
    if (!isServer) {
        const oldReferenceTrigger = __classPrivateFieldGet(this, _PfTooltip_referenceTrigger, "f");
        __classPrivateFieldSet(this, _PfTooltip_referenceTrigger, this.trigger instanceof HTMLElement ? this.trigger
            : typeof this.trigger === 'string' ? __classPrivateFieldGet(this, _PfTooltip_instances, "m", _PfTooltip_getReferenceTrigger).call(this)
                : null, "f");
        for (const evt of EnterEvents) {
            if (__classPrivateFieldGet(this, _PfTooltip_referenceTrigger, "f")) {
                this.removeEventListener(evt, this.show);
                __classPrivateFieldGet(this, _PfTooltip_referenceTrigger, "f").addEventListener(evt, this.show);
            }
            else {
                oldReferenceTrigger?.removeEventListener(evt, this.show);
                this.addEventListener(evt, this.show);
            }
        }
        for (const evt of ExitEvents) {
            if (__classPrivateFieldGet(this, _PfTooltip_referenceTrigger, "f")) {
                this.removeEventListener(evt, this.hide);
                __classPrivateFieldGet(this, _PfTooltip_referenceTrigger, "f").addEventListener(evt, this.hide);
            }
            else {
                oldReferenceTrigger?.removeEventListener(evt, this.hide);
                this.addEventListener(evt, this.hide);
            }
        }
    }
};
PfTooltip.styles = [styles];
PfTooltip.version = "4.3.0";
__decorate([
    property()
], PfTooltip.prototype, "position", void 0);
__decorate([
    property()
], PfTooltip.prototype, "content", void 0);
__decorate([
    property({ type: Boolean, attribute: 'no-flip' })
], PfTooltip.prototype, "noFlip", void 0);
__decorate([
    property()
], PfTooltip.prototype, "trigger", void 0);
__decorate([
    property({
        attribute: 'flip-behavior',
        converter: StringListConverter,
    })
], PfTooltip.prototype, "flipBehavior", void 0);
__decorate([
    bound
], PfTooltip.prototype, "show", null);
__decorate([
    bound
], PfTooltip.prototype, "hide", null);
PfTooltip = __decorate([
    customElement('pf-tooltip')
], PfTooltip);
export { PfTooltip };
//# sourceMappingURL=pf-tooltip.js.map