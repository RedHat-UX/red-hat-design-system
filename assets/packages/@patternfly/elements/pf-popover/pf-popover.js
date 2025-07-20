var _PfPopover_instances, _PfPopover_hideDialog, _PfPopover_referenceTrigger, _PfPopover_float, _PfPopover_slots, _PfPopover_getReferenceTrigger, _PfPopover_triggerChanged, _PfPopover_onKeydown, _PfPopover_outsideClick;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, nothing, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { FloatingDOMController } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { deprecation } from '@patternfly/pfe-core/decorators/deprecation.js';
import { bound } from '@patternfly/pfe-core/decorators/bound.js';
import { ComposedEvent, StringListConverter } from '@patternfly/pfe-core/core.js';
import '@patternfly/elements/pf-button/pf-button.js';
import { css } from "lit";
const styles = css `:host {\n  display: inline;\n  --_floating-arrow-size: var(--pf-c-popover__arrow--Width, var(--pf-global--arrow--width-lg, 1.5625rem));\n  --_header-text-color: var(--pf-c-popover__title-text--Color, inherit);\n  --_header-icon-color: var(--pf-c-popover__title-icon--Color, var(--pf-global--Color--100, #151515));\n  --_animation-speed: var(--pf-popover--animation-speed, 300ms);\n  --_z-index: var(--pf-popover--z-index, 9999);\n}\n\n.visually-hidden {\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n#container {\n  display: inline-flex;\n  position: relative;\n}\n\n#trigger {\n  display: inline-block;\n  position: relative;\n}\n\n#arrow {\n  display: block;\n  position: absolute;\n  background-color: var(--pf-c-popover__arrow--BackgroundColor, var(--pf-global--BackgroundColor--100, #fff));\n  box-shadow: var(\n    --pf-c-popover__arrow--BoxShadow,\n    var(--pf-global--BoxShadow--lg, 0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08))\n  );\n  content: '';\n  height: var(--pf-c-popover__arrow--Height, var(--pf-global--arrow--width-lg, 1.5625rem));\n  width: var(--pf-c-popover__arrow--Width, var(--pf-global--arrow--width-lg, 1.5625rem));\n  rotate: 45deg;\n  z-index: -1;\n  pointer-events: none;\n}\n\n#popover {\n  display: block;\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n  transition: visibility 0s, opacity var(--_animation-speed) cubic-bezier(0.54, 1.5, 0.38, 1.11) 0s;\n  left: 0;\n  top: 0;\n  translate: var(--_floating-content-translate);\n  box-shadow: var(\n    --pf-c-popover--BoxShadow,\n    var(--pf-global--BoxShadow--lg, 0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08))\n  );\n  border: 0;\n  padding: 0;\n  visibility: hidden;\n}\n\n#popover[open] {\n  opacity: 1;\n  z-index: var(--_z-index);\n  visibility: visible;\n}\n\n[part='content'] {\n  position: relative;\n  padding: var(--pf-c-popover__content--PaddingTop, var(--pf-global--spacer--md, 1rem))\n    var(--pf-c-popover__content--PaddingRight, var(--pf-global--spacer--md, 1rem))\n    var(--pf-c-popover__content--PaddingBottom, var(--pf-global--spacer--md, 1rem))\n    var(--pf-c-popover__content--PaddingLeft, var(--pf-global--spacer--md, 1rem));\n  word-break: break-word;\n  line-height: var(--pf-c-popover--line-height, 1.5);\n  font-size: var(--pf-c-popover__content--FontSize, var(--pf-global--FontSize--sm, 0.875rem));\n  color: var(--pf-c-popover__content--Color, var(--pf-global--Color--100, #151515));\n  background-color: var(--pf-c-popover__content--BackgroundColor, var(--pf-global--BackgroundColor--100, #fff));\n  max-width: var(\n    --pf-c-popover--MaxWidth,\n    calc(var(--pf-c-popover__content--PaddingLeft, 1rem) + var(--pf-c-popover__content--PaddingRight, 1rem) + 18.75rem)\n  );\n  min-width: var(\n    --pf-c-popover--MinWidth,\n    calc(var(--pf-c-popover__content--PaddingLeft, 1rem) + var(--pf-c-popover__content--PaddingRight, 1rem) + 18.75rem)\n  );\n  width: max-content;\n}\n\n[part='close-button'] {\n  cursor: pointer;\n  position: absolute;\n  right: var(\n    --pf-c-popover--c-button--Right,\n    calc(var(--pf-c-popover__content--PaddingRight, 1rem) - var(--pf-global--spacer--md, 1rem))\n  );\n  top: var(\n    --pf-c-popover--c-button--Top,\n    calc(var(--pf-c-popover__content--PaddingTop, 1rem) - var(--pf-global--spacer--form-element, 0.375rem))\n  );\n}\n\n[part='content'] > [part='close-button']:not([hidden]) ~ *:not([hidden]) {\n  padding-right: var(--pf-c-popover--c-button--sibling--PaddingRight, var(--pf-global--spacer--2xl, 3rem));\n}\n\n[part='header'] {\n  display: flex;\n  align-items: baseline;\n}\n\n[part='icon'] {\n  color: var(--_header-icon-color);\n  margin-right: var(--pf-c-popover__title-icon--MarginRight, var(--pf-global--spacer--sm, 0.5rem));\n}\n\n[part='icon'] ::slotted(*),\n[part='icon'] * {\n  vertical-align: -0.125em;\n}\n\n[part='icon'],\n[part='heading']::slotted(:is(h2, h3, h4, h5, h6)),\n[part='heading'] :is(h2, h3, h4, h5, h6) {\n  font-size: var(--pf-c-popover__title--FontSize, var(--pf-global--FontSize--md, 1rem));\n  font-weight: var(--pf-global--FontWeight--normal, 400);\n  --pf-icon--size: var(\n    --pf-c-popover__title--FontSize,\n    var(--pf-global--FontSize--md, var(--pf-global--icon--FontSize--md, 1em))\n  );\n}\n\n[part='heading']::slotted(:is(h2, h3, h4, h5, h6)),\n[part='heading'] :is(h2, h3, h4, h5, h6) {\n  color: var(--_header-text-color);\n  margin-top: 0;\n  margin-bottom: var(--pf-c-popover__title--MarginBottom, var(--pf-global--spacer--sm, 0.5rem));\n  line-height: var(--pf-c-popover__title--LineHeight, var(--pf-global--LineHeight--md, 1.5));\n  font-family: var(\n    --pf-c-popover__title--FontFamily,\n    var(\n      --pf-global--FontFamily--heading--sans-serif,\n      'RedHatDisplay',\n      'Overpass',\n      overpass,\n      helvetica,\n      arial,\n      sans-serif\n    )\n  );\n}\n\n[part='body'] {\n  display: block;\n  word-wrap: break-word;\n}\n\n[part='footer'] {\n  margin-top: var(--pf-c-popover__footer--MarginTop, var(--pf-global--spacer--md, 1rem));\n}\n\n:host([alert-severity='default']) {\n  --_header-text-color: var(--pf-c-popover--m-default__title-text--Color, var(--pf-global--default-color--300, #003737));\n  --_header-icon-color: var(--pf-c-popover--m-default__title-icon--Color, var(--pf-global--default-color--200, #009596));\n}\n\n:host([alert-severity='info']) {\n  --_header-text-color: var(--pf-c-popover--m-info__title-text--Color, var(--pf-global--info-color--200, #002952));\n  --_header-icon-color: var(--pf-c-popover--m-info__title-icon--Color, var(--pf-global--info-color--100, #2b9af3));\n}\n\n:host([alert-severity='warning']) {\n  --_header-icon-color: var(--pf-c-popover--m-warning__title-icon--Color, var(--pf-global--warning-color--100, #f0ab00));\n  --_header-text-color: var(--pf-c-popover--m-warning__title-text--Color, var(--pf-global--warning-color--200, #795600));\n}\n\n:host([alert-severity='success']) {\n  --_header-icon-color: var(--pf-c-popover--m-success__title-icon--Color, var(--pf-global--success-color--100, #3e8635));\n  --_header-text-color: var(--pf-c-popover--m-success__title-text--Color, var(--pf-global--success-color--200, #1e4f18));\n}\n\n:host([alert-severity='danger']) {\n  --_header-icon-color: var(--pf-c-popover--m-danger__title-icon--Color, var(--pf-global--danger-color--100, #c9190b));\n  --_header-text-color: var(--pf-c-popover--m-danger__title-text--Color, var(--pf-global--danger-color--200, #a30000));\n}\n`;
export class PopoverHideEvent extends ComposedEvent {
    constructor() {
        super('hide');
    }
}
export class PopoverHiddenEvent extends ComposedEvent {
    constructor() {
        super('hidden');
    }
}
export class PopoverShowEvent extends ComposedEvent {
    constructor() {
        super('show');
    }
}
export class PopoverShownEvent extends ComposedEvent {
    constructor() {
        super('shown');
    }
}
let PfPopover = class PfPopover extends LitElement {
    constructor() {
        super();
        _PfPopover_instances.add(this);
        /**
         * Indicates the initial popover position.
         * There are 12 options: `top`, `bottom`, `left`, `right`, `top-start`, `top-end`,
         * `bottom-start`, `bottom-end`, `left-start`, `left-end`,`right-start`, `right-end`.
         * The default is `top`.
         */
        this.position = 'top';
        /**
         * Disable the flip behavior. The default is `false`.
         */
        this.noFlip = false;
        /** True before the show animation begins and after the hide animation ends */
        _PfPopover_hideDialog.set(this, true);
        _PfPopover_referenceTrigger.set(this, null);
        _PfPopover_float.set(this, new FloatingDOMController(this, {
            content: () => this._popover,
            arrow: () => this._arrow,
            invoker: () => __classPrivateFieldGet(this, _PfPopover_referenceTrigger, "f") || this._slottedTrigger,
        }));
        _PfPopover_slots.set(this, new SlotController(this, null, 'icon', 'heading', 'body', 'footer'));
        _PfPopover_onKeydown.set(this, (event) => {
            switch (event.key) {
                case 'Escape':
                case 'Esc':
                    event.preventDefault();
                    this.hide();
                    return;
                case 'Enter':
                    if (event.target === __classPrivateFieldGet(this, _PfPopover_referenceTrigger, "f") || event.target === this._slottedTrigger) {
                        event.preventDefault();
                        this.show();
                    }
                    return;
            }
        });
        if (!isServer) {
            this.addEventListener('keydown', __classPrivateFieldGet(this, _PfPopover_onKeydown, "f"));
        }
    }
    render() {
        const { alignment, anchor, styles } = __classPrivateFieldGet(this, _PfPopover_float, "f");
        const hasFooter = __classPrivateFieldGet(this, _PfPopover_slots, "f").hasSlotted('footer') || !!this.footer;
        const hasHeading = __classPrivateFieldGet(this, _PfPopover_slots, "f").hasSlotted('heading') || !!this.heading;
        const hasIcon = __classPrivateFieldGet(this, _PfPopover_slots, "f").hasSlotted('icon') || !!this.icon || !!this.alertSeverity;
        // https://github.com/asyncLiz/minify-html-literals/issues/37
        let headingContent = html `<h6>${this.heading ?? ''}</h6>`;
        switch (this.headingLevel) {
            case 2:
                headingContent = html `<h2>${this.heading ?? ''}</h2>`;
                break;
            case 3:
                headingContent = html `<h3>${this.heading ?? ''}</h3>`;
                break;
            case 4:
                headingContent = html `<h4>${this.heading ?? ''}</h4>`;
                break;
            case 5:
                headingContent = html `<h5>${this.heading ?? ''}</h5>`;
                break;
        }
        const headingSlotWithFallback = html `
      <slot id="heading" name="heading" part="heading" ?hidden=${!hasHeading}>${headingContent}</slot>
    `;
        const headerIcon = this.icon
            ?? PfPopover.alertIcons.get(this.alertSeverity)
            ?? '';
        return html `
      <div id="container"
           style="${styleMap(styles)}"
           class="${classMap({ [anchor]: !!anchor, [alignment]: !!alignment })}">
        <slot id="trigger"
              @slotchange="${__classPrivateFieldGet(this, _PfPopover_instances, "m", _PfPopover_triggerChanged)}"
              @keydown="${__classPrivateFieldGet(this, _PfPopover_onKeydown, "f")}"
              @click="${this.toggle}"></slot>
        <dialog id="popover"
                ?hidden="${__classPrivateFieldGet(this, _PfPopover_hideDialog, "f")}"
                aria-labelledby="heading"
                aria-describedby="body"
                aria-label=${ifDefined(this.label)}>
          <div id="arrow"></div>
          <div id="content" part="content">
            <pf-button id="close-button"
                       part="close-button"
                       plain
                       label="${this.accessibleCloseLabel ?? this.closeButtonLabel ?? 'Close popover'}"
                       @click="${this.hide}"
                       @keydown="${__classPrivateFieldGet(this, _PfPopover_onKeydown, "f")}"
                       ?hidden="${this.hideClose}">
              <svg fill="currentColor" height="1em" width="1em" viewBox="0 0 352 512">
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
              </svg>
            </pf-button>
            ${!(hasHeading && hasIcon) ? headingSlotWithFallback : html `
            <header part="header">
              <span part="icon">
                <slot name="icon">
                  <pf-icon icon="${headerIcon}"
                           set="${ifDefined(this.iconSet)}"
                           size="md"></pf-icon>
                </slot>
              </span>${!this.alertSeverity ? nothing : html `
              <span class="visually-hidden">${this.alertSeverityText ?? `${this.alertSeverity} alert:`}</span>`}
              ${headingSlotWithFallback}
            </header>`}
            <slot id="body" part="body" name="body">${this.body ?? ''}</slot>
            <footer part="footer" ?hidden=${!hasFooter}>
              <slot name="footer">${this.footer}</slot>
            </footer>
          </div>
        </dialog>
      </div>
    `;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        PfPopover.instances.delete(this);
        __classPrivateFieldGet(this, _PfPopover_referenceTrigger, "f")?.removeEventListener('click', this.toggle);
        __classPrivateFieldGet(this, _PfPopover_referenceTrigger, "f")?.removeEventListener('keydown', __classPrivateFieldGet(this, _PfPopover_onKeydown, "f"));
    }
    /**
     * Removes event listeners from the old trigger element and attaches
     * them to the new trigger element.
     * @param changed changed props
     */
    willUpdate(changed) {
        if (changed.has('trigger')) {
            __classPrivateFieldGet(this, _PfPopover_instances, "m", _PfPopover_triggerChanged).call(this);
        }
    }
    /**
     * Toggle the popover
     */
    async toggle() {
        if (__classPrivateFieldGet(this, _PfPopover_float, "f").open) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    /**
     * Opens the popover
     */
    async show() {
        __classPrivateFieldSet(this, _PfPopover_hideDialog, false, "f");
        this.requestUpdate();
        this.dispatchEvent(new PopoverShowEvent());
        await this.updateComplete;
        await __classPrivateFieldGet(this, _PfPopover_float, "f").show({
            offset: this.distance ?? 25,
            placement: this.position,
            flip: !this.noFlip,
            fallbackPlacements: this.flipBehavior,
        });
        this._popover?.show();
        this.dispatchEvent(new PopoverShownEvent());
        PfPopover.instances.add(this);
    }
    /**
     * Closes the popover
     */
    async hide() {
        this.dispatchEvent(new PopoverHideEvent());
        await __classPrivateFieldGet(this, _PfPopover_float, "f").hide();
        this._popover?.close();
        this.dispatchEvent(new PopoverHiddenEvent());
        PfPopover.instances.delete(this);
        __classPrivateFieldSet(this, _PfPopover_hideDialog, true, "f");
        this.requestUpdate();
    }
};
_PfPopover_hideDialog = new WeakMap();
_PfPopover_referenceTrigger = new WeakMap();
_PfPopover_float = new WeakMap();
_PfPopover_slots = new WeakMap();
_PfPopover_onKeydown = new WeakMap();
_PfPopover_instances = new WeakSet();
_PfPopover_getReferenceTrigger = function _PfPopover_getReferenceTrigger() {
    if (isServer || !this.trigger) {
        return null;
    }
    else {
        return this.getRootNode().getElementById(this.trigger);
    }
};
_PfPopover_triggerChanged = function _PfPopover_triggerChanged() {
    const oldReferenceTrigger = __classPrivateFieldGet(this, _PfPopover_referenceTrigger, "f");
    __classPrivateFieldSet(this, _PfPopover_referenceTrigger, __classPrivateFieldGet(this, _PfPopover_instances, "m", _PfPopover_getReferenceTrigger).call(this), "f");
    if (oldReferenceTrigger !== __classPrivateFieldGet(this, _PfPopover_referenceTrigger, "f")) {
        oldReferenceTrigger?.removeEventListener('click', this.toggle);
        oldReferenceTrigger?.removeEventListener('keydown', __classPrivateFieldGet(this, _PfPopover_onKeydown, "f"));
        __classPrivateFieldGet(this, _PfPopover_referenceTrigger, "f")?.addEventListener('click', this.toggle);
        __classPrivateFieldGet(this, _PfPopover_referenceTrigger, "f")?.addEventListener('keydown', __classPrivateFieldGet(this, _PfPopover_onKeydown, "f"));
    }
};
_PfPopover_outsideClick = function _PfPopover_outsideClick(event) {
    const path = event.composedPath();
    if (!path.includes(this) && !path.includes(__classPrivateFieldGet(this, _PfPopover_referenceTrigger, "f"))) {
        this.hide();
    }
};
PfPopover.styles = [styles];
PfPopover.instances = new Set();
PfPopover.alertIcons = new Map(Object.entries({
    default: 'bell',
    info: 'circle-info',
    success: 'circle-check',
    warning: 'triangle-exclamation',
    danger: 'circle-exclamation',
}));
(() => {
    if (!isServer) {
        document.addEventListener('click', function (event) {
            for (const instance of PfPopover.instances) {
                if (!instance.noOutsideClick) {
                    __classPrivateFieldGet(instance, _PfPopover_instances, "m", _PfPopover_outsideClick).call(instance, event);
                }
            }
        });
    }
})();
PfPopover.version = "4.1.0";
__decorate([
    property({ reflect: true })
], PfPopover.prototype, "position", void 0);
__decorate([
    property({ reflect: true })
], PfPopover.prototype, "heading", void 0);
__decorate([
    property({ reflect: true })
], PfPopover.prototype, "body", void 0);
__decorate([
    property({ reflect: true })
], PfPopover.prototype, "footer", void 0);
__decorate([
    property({ reflect: true })
], PfPopover.prototype, "icon", void 0);
__decorate([
    property({ reflect: true })
], PfPopover.prototype, "label", void 0);
__decorate([
    property({ type: Number, reflect: true })
], PfPopover.prototype, "distance", void 0);
__decorate([
    property({
        attribute: 'flip-behavior',
        converter: StringListConverter,
    })
], PfPopover.prototype, "flipBehavior", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'no-flip' })
], PfPopover.prototype, "noFlip", void 0);
__decorate([
    property({
        type: Number,
        reflect: true,
        attribute: 'heading-level',
    })
], PfPopover.prototype, "headingLevel", void 0);
__decorate([
    property({ reflect: true, attribute: 'icon-set' })
], PfPopover.prototype, "iconSet", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'hide-close' })
], PfPopover.prototype, "hideClose", void 0);
__decorate([
    property({ reflect: true, attribute: 'alert-severity' })
], PfPopover.prototype, "alertSeverity", void 0);
__decorate([
    property({ reflect: true, attribute: 'accessible-close-label' })
], PfPopover.prototype, "accessibleCloseLabel", void 0);
__decorate([
    deprecation({
        alias: 'accessible-close-label',
        attribute: 'close-label',
    })
], PfPopover.prototype, "closeButtonLabel", void 0);
__decorate([
    property({ reflect: true, attribute: 'alert-severity-text' })
], PfPopover.prototype, "alertSeverityText", void 0);
__decorate([
    property({
        type: Boolean,
        reflect: true,
        attribute: 'no-outside-click',
    })
], PfPopover.prototype, "noOutsideClick", void 0);
__decorate([
    property({ reflect: true })
], PfPopover.prototype, "trigger", void 0);
__decorate([
    query('#popover')
], PfPopover.prototype, "_popover", void 0);
__decorate([
    query('#trigger')
], PfPopover.prototype, "_slottedTrigger", void 0);
__decorate([
    query('#arrow')
], PfPopover.prototype, "_arrow", void 0);
__decorate([
    bound
], PfPopover.prototype, "toggle", null);
__decorate([
    bound
], PfPopover.prototype, "show", null);
__decorate([
    bound
], PfPopover.prototype, "hide", null);
PfPopover = __decorate([
    customElement('pf-popover')
], PfPopover);
export { PfPopover };
//# sourceMappingURL=pf-popover.js.map