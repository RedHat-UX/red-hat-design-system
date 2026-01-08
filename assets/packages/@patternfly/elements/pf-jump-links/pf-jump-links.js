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
const style = css `[hidden] {
  display: none !important;
}

:host {
  display: block;
}

#container {
  display: flex;
  flex-wrap: wrap;
  font-family: var(--pf-global--FontFamily--sans-serif, "RedHatTextUpdated", "Overpass", overpass, helvetica, arial, sans-serif);
  font-size: var(--pf-global--FontSize--md, 16px);
  font-weight: var(--pf-global--FontWeight--normal, 400);
}

slot {
  position: relative;
  /** Controls the display type of the list container */
  display: var(--pf-c-jump-links__list--Display, flex);
  /** Controls the direction of items in the list */
  flex-direction: var(--pf-c-jump-links__list--FlexDirection, row);
  /** Padding around the list of links */
  padding-block-start: var(--pf-c-jump-links__list--PaddingTop, 0);
  /** Right padding for the list */
  padding-inline-end: var(--pf-c-jump-links__list--PaddingRight,
    var(--pf-global--spacer--md, 1rem));
  /** Bottom padding for the list */
  padding-block-end: var(--pf-c-jump-links__list--PaddingBottom, 0);
  /** Left padding for the list */
  padding-inline-start: var(--pf-c-jump-links__list--PaddingLeft,
    var(--pf-global--spacer--md, 1rem));
  /** Controls visibility of the list */
  visibility: var(--pf-c-jump-links__list--Visibility, visible);
}

slot::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  content: "";
  /** Border color for the list pseudo-element */
  border: solid var(--pf-c-jump-links__list--before--BorderColor,
    var(--pf-global--BorderColor--100, #d2d2d2));
  border-width:
    /** Top border width for the list pseudo-element */
    var(--pf-c-jump-links__list--before--BorderTopWidth,
      var(--pf-global--BorderWidth--sm, 1px))
    /** Right border width for the list pseudo-element */
    var(--pf-c-jump-links__list--before--BorderRightWidth, 0)
    /** Bottom border width for the list pseudo-element */
    var(--pf-c-jump-links__list--before--BorderBottomWidth, 0)
    /** Left border width for the list pseudo-element */
    var(--pf-c-jump-links__list--before--BorderLeftWidth, 0);
}

:host([vertical]) #container {
  /** Top padding for vertical layout */
  --pf-c-jump-links__list--PaddingTop:
    var(--pf-c-jump-links--m-vertical__list--PaddingTop,
      var(--pf-global--spacer--md, 1rem)
    );
  /** Right padding for vertical layout */
  --pf-c-jump-links__list--PaddingRight:
    var(--pf-c-jump-links--m-vertical__list--PaddingRight,0);
  /** Bottom padding for vertical layout */
  --pf-c-jump-links__list--PaddingBottom:
    var(--pf-c-jump-links--m-vertical__list--PaddingBottom,
      var(--pf-global--spacer--md, 1rem)
    );
  /** Left padding for vertical layout */
  --pf-c-jump-links__list--PaddingLeft:
    var(--pf-c-jump-links--m-vertical__list--PaddingLeft, 0);
  /** Top border width for vertical layout */
  --pf-c-jump-links__list--before--BorderTopWidth:
    var(--pf-c-jump-links--m-vertical__list--before--BorderTopWidth, 0);
  /** Left border width for vertical layout */
  --pf-c-jump-links__list--before--BorderLeftWidth:
    var(--pf-c-jump-links--m-vertical__list--before--BorderLeftWidth,
    var(--pf-global--BorderWidth--sm, 1px));
  /** Top border width for current item in vertical layout */
  --pf-c-jump-links__item--m-current__link--before--BorderTopWidth:
    var(--pf-c-jump-links--m-vertical__item--m-current__link--before--BorderTopWidth, 0);
  /** Left border width for current item in vertical layout */
  --pf-c-jump-links__item--m-current__link--before--BorderLeftWidth:
    var(--pf-c-jump-links--m-vertical__item--m-current__link--before--BorderLeftWidth,
      var(--pf-global--BorderWidth--lg, 3px)
    );
  /** Flex direction for vertical layout */
  --pf-c-jump-links__list--FlexDirection: var(--pf-c-jump-links--m-vertical__list--FlexDirection, column);
}

:host([centered]) #container {
  justify-content: center;
}

:host([centered]) #label {
  text-align: center;
}

:host(:not([expandable])) #label {
  display: block;
  width: 100%;
  margin-block-end: var(--pf-c-jump-links__label--MarginBottom,
    var(--pf-global--spacer--md, 1rem));
}

:host([expandable]) {
  /** Base margin for the toggle button */
  --pf-c-jump-links--m-expanded__toggle--MarginBottom:
    calc(var(--pf-c-jump-links__toggle--MarginBottom--base,
      calc(-1 * var(--pf-global--spacer--form-element, 0.375rem))
    ) + var(--pf-global--spacer--md, 1rem));
}

summary {
  display: block;
  /** Padding around the expandable jump links disclosure widget. */
  margin-block-start: var(--pf-c-jump-links__toggle--MarginTop,
    calc(-1 * var(--pf-global--spacer--form-element, 0.375rem)));
  /** Bottom margin for the toggle */
  margin-block-end: var(--pf-c-jump-links__toggle--MarginBottom,
    var(--pf-c-jump-links__toggle--MarginBottom--base,
      calc(-1 * var(--pf-global--spacer--form-element, 0.375rem))));
  /** Left margin for the toggle */
  margin-inline-start: var(--pf-c-jump-links__toggle--MarginLeft);
  /** Color of the toggle text */
  color: var(--pf-c-jump-links__toggle-text--Color,
    var(--pf-global--Color--100, #151515));
  /** Padding around the expandable jump links disclosure widget. */
  padding:
    var(--pf-c-button--PaddingTop,
      var(--pf-global--spacer--form-element, 0.375rem))
    /** Right padding for the button */
    var(--pf-c-button--PaddingRight,
      var(--pf-global--spacer--md, 1rem))
    /** Bottom padding for the button */
    var(--pf-c-button--PaddingBottom,
      var(--pf-global--spacer--form-element, 0.375rem))
    /** Left padding for the button */
    var(--pf-c-button--PaddingLeft,
      var(--pf-global--spacer--md, 1rem));
}

summary pf-icon {
  /** Rotation angle for the toggle icon */
  rotate: var(--pf-c-jump-links__toggle-icon--Rotate, 0);
  /** Transition for the toggle icon */
  transition: var(--pf-c-jump-links__toggle-icon--Transition,
    var(--pf-global--Transition, all 250ms cubic-bezier(0.42, 0, 0.58, 1)));
}

summary span {
  /** Left margin for the toggle text */
  margin-inline-start: var(--pf-c-jump-links__toggle-text--MarginLeft,
    var(--pf-global--spacer--md, 1rem));
}

:host([expanded]) #container {
  /** Bottom margin for expanded toggle */
  --pf-c-jump-links__toggle--MarginBottom: var(--pf-c-jump-links--m-expanded__toggle--MarginBottom,
    calc(var(--pf-c-jump-links__toggle--MarginBottom--base,
      calc(-1 * var(--pf-global--spacer--form-element, 0.375rem))) +
      var(--pf-global--spacer--md, 1rem)));
  /** Rotation for expanded toggle icon */
  --pf-c-jump-links__toggle-icon--Rotate: var(--pf-c-jump-links--m-expanded__toggle-icon--Rotate,
    90deg);
  /** Color for expanded toggle icon */
  --pf-c-jump-links__toggle-icon--Color: var(--pf-c-jump-links--m-expanded__toggle-icon--Color,
    var(--pf-global--Color--100, #151515));
  --pf-c-jump-links__toggle-icon--Rotate: 90deg;
}
`;
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
            <!-- Place pf-jump-links-items here -->
            <slot></slot>
          </div>
        </details>` : html `
        <span id="label">${this.label}</span>
        <div role="listbox" aria-labelledby="label">
          <!-- Place pf-jump-links-items here -->
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
PfJumpLinks.version = "4.3.0";
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