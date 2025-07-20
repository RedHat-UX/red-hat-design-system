var _PfJumpLinks_instances, _PfJumpLinks_kids, _PfJumpLinks_items_get, _PfJumpLinks_tabindex, _PfJumpLinks_spy, _PfJumpLinks_onSlotChange, _PfJumpLinks_onSelect, _PfJumpLinks_setActiveItem, _PfJumpLinks_onToggle;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ScrollSpyController } from '@patternfly/pfe-core/controllers/scroll-spy-controller.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { PfJumpLinksItem } from './pf-jump-links-item.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
import { css } from "lit";
const style = css `[hidden] {\n  display: none !important;\n}\n\n:host {\n  display: block;\n}\n\n#container {\n  display: flex;\n  flex-wrap: wrap;\n  font-family: var(--pf-global--FontFamily--sans-serif, "RedHatTextUpdated", "Overpass", overpass, helvetica, arial, sans-serif);\n  font-size: var(--pf-global--FontSize--md, 16px);\n  font-weight: var(--pf-global--FontWeight--normal, 400);\n}\n\nslot {\n  position: relative;\n  display: var(--pf-c-jump-links__list--Display, flex);\n  flex-direction: var(--pf-c-jump-links__list--FlexDirection, row);\n  padding-block-start: var(--pf-c-jump-links__list--PaddingTop, 0);\n  padding-inline-end: var(--pf-c-jump-links__list--PaddingRight,\n    var(--pf-global--spacer--md, 1rem));\n  padding-block-end: var(--pf-c-jump-links__list--PaddingBottom, 0);\n  padding-inline-start: var(--pf-c-jump-links__list--PaddingLeft,\n    var(--pf-global--spacer--md, 1rem));\n  visibility: var(--pf-c-jump-links__list--Visibility, visible);\n}\n\nslot::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n  content: "";\n  border: solid var(--pf-c-jump-links__list--before--BorderColor,\n    var(--pf-global--BorderColor--100, #d2d2d2));\n  border-width:\n    var(--pf-c-jump-links__list--before--BorderTopWidth,\n      var(--pf-global--BorderWidth--sm, 1px))\n    var(--pf-c-jump-links__list--before--BorderRightWidth, 0)\n    var(--pf-c-jump-links__list--before--BorderBottomWidth, 0)\n    var(--pf-c-jump-links__list--before--BorderLeftWidth, 0);\n}\n\n:host([vertical]) #container {\n  --pf-c-jump-links__list--PaddingTop:\n    var(--pf-c-jump-links--m-vertical__list--PaddingTop,\n      var(--pf-global--spacer--md, 1rem)\n    );\n  --pf-c-jump-links__list--PaddingRight:\n    var(--pf-c-jump-links--m-vertical__list--PaddingRight,0);\n  --pf-c-jump-links__list--PaddingBottom:\n    var(--pf-c-jump-links--m-vertical__list--PaddingBottom,\n      var(--pf-global--spacer--md, 1rem)\n    );\n  --pf-c-jump-links__list--PaddingLeft:\n    var(--pf-c-jump-links--m-vertical__list--PaddingLeft, 0);\n  --pf-c-jump-links__list--before--BorderTopWidth:\n    var(--pf-c-jump-links--m-vertical__list--before--BorderTopWidth, 0);\n  --pf-c-jump-links__list--before--BorderLeftWidth:\n    var(--pf-c-jump-links--m-vertical__list--before--BorderLeftWidth,\n    var(--pf-global--BorderWidth--sm, 1px));\n  --pf-c-jump-links__item--m-current__link--before--BorderTopWidth:\n    var(--pf-c-jump-links--m-vertical__item--m-current__link--before--BorderTopWidth, 0);\n  --pf-c-jump-links__item--m-current__link--before--BorderLeftWidth:\n    var(--pf-c-jump-links--m-vertical__item--m-current__link--before--BorderLeftWidth,\n      var(--pf-global--BorderWidth--lg, 3px)\n    );\n  --pf-c-jump-links__list--FlexDirection: var(--pf-c-jump-links--m-vertical__list--FlexDirection, column);\n}\n\n:host([centered]) #container {\n  justify-content: center;\n}\n\n:host([centered]) #label {\n  text-align: center;\n}\n\n:host(:not([expandable])) #label {\n  display: block;\n  width: 100%;\n  margin-block-end: var(--pf-c-jump-links__label--MarginBottom,\n    var(--pf-global--spacer--md, 1rem));\n}\n\n:host([expandable]) {\n  --pf-c-jump-links--m-expanded__toggle--MarginBottom:\n    calc(var(--pf-c-jump-links__toggle--MarginBottom--base,\n      calc(-1 * var(--pf-global--spacer--form-element, 0.375rem))\n    ) + var(--pf-global--spacer--md, 1rem));\n}\n\nsummary {\n  display: block;\n  margin-block-start: var(--pf-c-jump-links__toggle--MarginTop,\n    calc(-1 * var(--pf-global--spacer--form-element, 0.375rem)));\n  margin-block-end: var(--pf-c-jump-links__toggle--MarginBottom,\n    var(--pf-c-jump-links__toggle--MarginBottom--base,\n      calc(-1 * var(--pf-global--spacer--form-element, 0.375rem))));\n  margin-inline-start: var(--pf-c-jump-links__toggle--MarginLeft);\n  color: var(--pf-c-jump-links__toggle-text--Color,\n    var(--pf-global--Color--100, #151515));\n  padding:\n    var(--pf-c-button--PaddingTop,\n      var(--pf-global--spacer--form-element, 0.375rem))\n    var(--pf-c-button--PaddingRight,\n      var(--pf-global--spacer--md, 1rem))\n    var(--pf-c-button--PaddingBottom,\n      var(--pf-global--spacer--form-element, 0.375rem))\n    var(--pf-c-button--PaddingLeft,\n      var(--pf-global--spacer--md, 1rem));\n}\n\nsummary pf-icon {\n  rotate: var(--pf-c-jump-links__toggle-icon--Rotate, 0);\n  transition: var(--pf-c-jump-links__toggle-icon--Transition,\n    var(--pf-global--Transition, all 250ms cubic-bezier(0.42, 0, 0.58, 1)));\n}\n\nsummary span {\n  margin-inline-start: var(--pf-c-jump-links__toggle-text--MarginLeft,\n    var(--pf-global--spacer--md, 1rem));\n}\n\n:host([expanded]) #container {\n  --pf-c-jump-links__toggle--MarginBottom: var(--pf-c-jump-links--m-expanded__toggle--MarginBottom,\n    calc(var(--pf-c-jump-links__toggle--MarginBottom--base,\n      calc(-1 * var(--pf-global--spacer--form-element, 0.375rem))) +\n      var(--pf-global--spacer--md, 1rem)));\n  --pf-c-jump-links__toggle-icon--Rotate: var(--pf-c-jump-links--m-expanded__toggle-icon--Rotate,\n    90deg);\n  --pf-c-jump-links__toggle-icon--Color: var(--pf-c-jump-links--m-expanded__toggle-icon--Color,\n    var(--pf-global--Color--100, #151515));\n  --pf-c-jump-links__toggle-icon--Rotate: 90deg;\n}\n`;
let PfJumpLinks = class PfJumpLinks extends LitElement {
    constructor() {
        super(...arguments);
        _PfJumpLinks_instances.add(this);
        /** Whether the element features a disclosure widget around the nav items */
        this.expandable = false;
        /** Whether the expandable element's disclosure widget is expanded */
        this.expanded = false;
        /** Whether the layout of children is vertical or horizontal. */
        this.vertical = false;
        /** Whether to center children. */
        this.centered = false;
        /** Offset to add to the scroll position, potentially for a masthead which content scrolls under. */
        this.offset = 0;
        _PfJumpLinks_kids.set(this, this.querySelectorAll?.(':is(pf-jump-links-item, pf-jump-links-list)'));
        _PfJumpLinks_tabindex.set(this, RovingTabindexController.of(this, {
            getItems: () => __classPrivateFieldGet(this, _PfJumpLinks_instances, "a", _PfJumpLinks_items_get),
        }));
        _PfJumpLinks_spy.set(this, new ScrollSpyController(this, {
            rootMargin: `${this.offset}px 0px 0px 0px`,
            tagNames: ['pf-jump-links-item'],
        }));
    }
    async getUpdateComplete() {
        const here = await super.getUpdateComplete();
        const ps = await Promise.all(Array.from(__classPrivateFieldGet(this, _PfJumpLinks_kids, "f"), x => x.updateComplete));
        return here && ps.every(x => !!x);
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('slotchange', __classPrivateFieldGet(this, _PfJumpLinks_instances, "m", _PfJumpLinks_onSlotChange));
        this.addEventListener('select', __classPrivateFieldGet(this, _PfJumpLinks_instances, "m", _PfJumpLinks_onSelect));
    }
    firstUpdated() {
        const active = this.querySelector?.('pf-jump-links-item[active]');
        if (active) {
            __classPrivateFieldGet(this, _PfJumpLinks_instances, "m", _PfJumpLinks_setActiveItem).call(this, active);
        }
    }
    updated(changed) {
        if (changed.has('offset')) {
            __classPrivateFieldGet(this, _PfJumpLinks_spy, "f").rootMargin = `${this.offset ?? 0}px 0px 0px 0px`;
        }
    }
    render() {
        return html `
      <nav id="container">${this.expandable ? html `
        <details ?open="${this.expanded}" @toggle="${__classPrivateFieldGet(this, _PfJumpLinks_instances, "m", _PfJumpLinks_onToggle)}">
          <summary>
            <pf-icon icon="chevron-right"></pf-icon>
            <span id="label">${this.label}</span>
          </summary>
          <div role="listbox" aria-labelledby="label">
            <slot></slot>
          </div>
        </details>` : html `
        <span id="label">${this.label}</span>
        <div role="listbox" aria-labelledby="label">
          <slot></slot>
        </div>`}
      </nav>
    `;
    }
};
_PfJumpLinks_kids = new WeakMap();
_PfJumpLinks_tabindex = new WeakMap();
_PfJumpLinks_spy = new WeakMap();
_PfJumpLinks_instances = new WeakSet();
_PfJumpLinks_items_get = function _PfJumpLinks_items_get() {
    return Array.from(__classPrivateFieldGet(this, _PfJumpLinks_kids, "f") ?? [])
        .flatMap(i => [
        ...i.shadowRoot?.querySelectorAll?.('a') ?? [],
        ...i.querySelectorAll?.('a') ?? [],
    ]);
};
_PfJumpLinks_onSlotChange = function _PfJumpLinks_onSlotChange() {
    __classPrivateFieldGet(this, _PfJumpLinks_tabindex, "f").items = __classPrivateFieldGet(this, _PfJumpLinks_instances, "a", _PfJumpLinks_items_get);
};
_PfJumpLinks_onSelect = function _PfJumpLinks_onSelect(event) {
    if (event.target instanceof PfJumpLinksItem) {
        __classPrivateFieldGet(this, _PfJumpLinks_instances, "m", _PfJumpLinks_setActiveItem).call(this, event.target);
    }
};
_PfJumpLinks_setActiveItem = function _PfJumpLinks_setActiveItem(item) {
    const itemLink = item.shadowRoot?.querySelector?.('a') ?? null;
    if (itemLink) {
        __classPrivateFieldGet(this, _PfJumpLinks_tabindex, "f").atFocusedItemIndex = __classPrivateFieldGet(this, _PfJumpLinks_tabindex, "f").items.indexOf(itemLink);
        __classPrivateFieldGet(this, _PfJumpLinks_spy, "f").setActive(item);
    }
};
_PfJumpLinks_onToggle = function _PfJumpLinks_onToggle(event) {
    if (event.target instanceof HTMLDetailsElement) {
        this.expanded = event.target.open;
    }
    this.dispatchEvent(new Event('toggle'));
};
PfJumpLinks.styles = [style];
PfJumpLinks.version = "4.1.0";
__decorate([
    property({ reflect: true, type: Boolean })
], PfJumpLinks.prototype, "expandable", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfJumpLinks.prototype, "expanded", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfJumpLinks.prototype, "vertical", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], PfJumpLinks.prototype, "centered", void 0);
__decorate([
    property({ type: Number })
], PfJumpLinks.prototype, "offset", void 0);
__decorate([
    property()
], PfJumpLinks.prototype, "label", void 0);
PfJumpLinks = __decorate([
    customElement('pf-jump-links')
], PfJumpLinks);
export { PfJumpLinks };
//# sourceMappingURL=pf-jump-links.js.map