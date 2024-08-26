var _ActivedescendantController_instances, _ActivedescendantController_lightToShadowMap, _ActivedescendantController_shadowToLightMap, _ActivedescendantController_noCloneSet, _ActivedescendantController_controlsElements, _ActivedescendantController_observing, _ActivedescendantController_listMO, _ActivedescendantController_attrMO, _ActivedescendantController_syncAttr, _ActivedescendantController_onItemsDOMChange, _ActivedescendantController_onItemAttributeChange;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { ATFocusController } from './at-focus-controller.js';
import { isServer, nothing } from 'lit';
import { getRandomId } from '../functions/random.js';
import { bound } from '../decorators/bound.js';
/**
 * Implements activedescendant pattern, as described in WAI-ARIA practices,
 * [Managing Focus in Composites Using aria-activedescendant][ad]
 *
 * The steps for using the aria-activedescendant method of managing focus are as follows.
 *
 *  - When the container element that has a role that supports aria-activedescendant is loaded
 *    or created, ensure that:
 *    - The container element is included in the tab sequence as described in
 *      Keyboard Navigation Between Components or is a focusable element of a composite
 *      that implements a roving tabindex.
 *    - It has aria-activedescendant="IDREF" where IDREF is the ID of the element within
 *      the container that should be identified as active when the widget receives focus.
 *      The referenced element needs to meet the DOM relationship requirements described below.
 *  - When the container element receives DOM focus, draw a visual focus indicator on the active
 *    element and ensure the active element is scrolled into view.
 *  - When the composite widget contains focus and the user presses a navigation key that moves
 *    focus within the widget, such as an arrow key:
 *    - Change the value of aria-activedescendant on the container to refer to the element
 *      that should be reported to assistive technologies as active.
 *    - Move the visual focus indicator and, if necessary, scrolled the active element into view.
 *  - If the design calls for a specific element to be focused the next time a user moves focus
 *    into the composite with Tab or Shift+Tab, check if aria-activedescendant is referring to
 *    that target element when the container loses focus. If it is not, set aria-activedescendant
 *    to refer to the target element.
 *
 * The specification for aria-activedescendant places important restrictions on the
 * DOM relationship between the focused element that has the aria-activedescendant attribute
 * and the element referenced as active by the value of the attribute.
 * One of the following three conditions must be met.
 *
 * 1. The element referenced as active is a DOM descendant of the focused referencing element.
 * 2. The focused referencing element has a value specified for the aria-owns property that
 *    includes the ID of the element referenced as active.
 * 3. The focused referencing element has role of combobox, textbox, or searchbox
 *    and has aria-controls property referring to an element with a role that supports
 *    aria-activedescendant and either:
 *   1. The element referenced as active is a descendant of the controlled element.
 *   2. The controlled element has a value specified for the aria-owns property that includes
 *      the ID of the element referenced as active.
 *
 * [ad]: https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_focus_activedescendant
 */
export class ActivedescendantController extends ATFocusController {
    /**
     * When true, the browser supports cross-root ARIA such that the controller does not need
     * to copy item nodes into the controlling nodes' root
     */
    static get supportsCrossRootActiveDescendant() {
        return !isServer && 'ariaActiveDescendantElement' in HTMLElement.prototype;
    }
    static of(host, options) {
        return new ActivedescendantController(host, options);
    }
    get atFocusedItemIndex() {
        return super.atFocusedItemIndex;
    }
    /**
     * Rather than setting DOM focus, applies the `aria-activedescendant` attribute,
     * using AriaIDLAttributes for cross-root aria, if supported by the browser
     * @param item item
     */
    set atFocusedItemIndex(index) {
        super.atFocusedItemIndex = index;
        const item = this._items.at(this.atFocusedItemIndex);
        for (const _item of this.items) {
            this.options.setItemActive?.(_item, _item === item);
        }
        const container = this.options.getActiveDescendantContainer();
        if (!ActivedescendantController.supportsCrossRootActiveDescendant) {
            container?.setAttribute('aria-activedescendant', item?.id ?? '');
        }
        else if (container) {
            container.ariaActiveDescendantElement = item ?? null;
        }
        this.host.requestUpdate();
    }
    get controlsElements() {
        return __classPrivateFieldGet(this, _ActivedescendantController_controlsElements, "f");
    }
    set controlsElements(elements) {
        for (const old of __classPrivateFieldGet(this, _ActivedescendantController_controlsElements, "f")) {
            old?.removeEventListener('keydown', this.onKeydown);
        }
        __classPrivateFieldSet(this, _ActivedescendantController_controlsElements, elements, "f");
        for (const element of __classPrivateFieldGet(this, _ActivedescendantController_controlsElements, "f")) {
            element.addEventListener('keydown', this.onKeydown);
        }
    }
    /** All items */
    get items() {
        return this._items;
    }
    /**
     * Sets the list of items and activates the next activatable item after the current one
     * @param items tabindex items
     */
    set items(items) {
        const container = this.options.getItemsContainer?.() ?? this.host;
        if (!(container instanceof HTMLElement)) {
            throw new Error('items container must be an HTMLElement');
        }
        this.itemsContainerElement = container;
        const { supportsCrossRootActiveDescendant } = ActivedescendantController;
        if (supportsCrossRootActiveDescendant
            || [container] // all nodes are in the same root
                .concat(this.controlsElements)
                .concat(items)
                .every((node, _, a) => node.getRootNode() === a[0].getRootNode())) {
            this._items = items.map(x => {
                if (!supportsCrossRootActiveDescendant) {
                    x.id || (x.id = getRandomId());
                }
                return x;
            });
        }
        else {
            this._items = items?.map((item) => {
                item.removeAttribute('tabindex');
                if (container.contains(item)) {
                    item.id || (item.id = getRandomId());
                    __classPrivateFieldGet(this, _ActivedescendantController_noCloneSet, "f").add(item);
                    __classPrivateFieldGet(this, _ActivedescendantController_shadowToLightMap, "f").set(item, item);
                    return item;
                }
                else {
                    const clone = item.cloneNode(true);
                    clone.id = getRandomId();
                    __classPrivateFieldGet(this, _ActivedescendantController_lightToShadowMap, "f").set(item, clone);
                    __classPrivateFieldGet(this, _ActivedescendantController_shadowToLightMap, "f").set(clone, item);
                    // Though efforts were taken to disconnect
                    // this observer, it may still be a memory leak
                    __classPrivateFieldGet(this, _ActivedescendantController_attrMO, "f").observe(clone, { attributes: true });
                    __classPrivateFieldGet(this, _ActivedescendantController_attrMO, "f").observe(item, { attributes: true });
                    return clone;
                }
            });
        }
    }
    constructor(host, options) {
        var _a;
        super(host, options);
        _ActivedescendantController_instances.add(this);
        this.host = host;
        this.options = options;
        /** Maps from original element to shadow DOM clone */
        _ActivedescendantController_lightToShadowMap.set(this, new WeakMap());
        /** Maps from shadow DOM clone to original element */
        _ActivedescendantController_shadowToLightMap.set(this, new WeakMap());
        /** Set of item which should not be cloned */
        _ActivedescendantController_noCloneSet.set(this, new WeakSet());
        /** Element which controls the list i.e. combobox */
        _ActivedescendantController_controlsElements.set(this, []);
        _ActivedescendantController_observing.set(this, false);
        _ActivedescendantController_listMO.set(this, new MutationObserver(records => __classPrivateFieldGet(this, _ActivedescendantController_instances, "m", _ActivedescendantController_onItemsDOMChange).call(this, records)));
        _ActivedescendantController_attrMO.set(this, new MutationObserver(records => __classPrivateFieldGet(this, _ActivedescendantController_instances, "m", _ActivedescendantController_onItemAttributeChange).call(this, records)));
        (_a = this.options).getItemValue ?? (_a.getItemValue = function () {
            return this.value;
        });
    }
    ;
    ;
    initItems() {
        __classPrivateFieldGet(this, _ActivedescendantController_attrMO, "f").disconnect();
        super.initItems();
        this.controlsElements = this.options.getControlsElements?.() ?? [];
        if (!__classPrivateFieldGet(this, _ActivedescendantController_observing, "f") && this.itemsContainerElement && this.itemsContainerElement.isConnected) {
            __classPrivateFieldGet(this, _ActivedescendantController_listMO, "f").observe(this.itemsContainerElement, { childList: true });
            __classPrivateFieldSet(this, _ActivedescendantController_observing, true, "f");
        }
    }
    hostDisconnected() {
        this.controlsElements = [];
        __classPrivateFieldSet(this, _ActivedescendantController_observing, false, "f");
        __classPrivateFieldGet(this, _ActivedescendantController_listMO, "f").disconnect();
        __classPrivateFieldGet(this, _ActivedescendantController_attrMO, "f").disconnect();
    }
    onKeydown(event) {
        if (!event.ctrlKey
            && !event.altKey
            && !event.metaKey
            && !!this.atFocusableItems.length) {
            super.onKeydown(event);
        }
        ;
    }
    renderItemsToShadowRoot() {
        if (ActivedescendantController.supportsCrossRootActiveDescendant) {
            return nothing;
        }
        else {
            return this.items?.filter(x => !__classPrivateFieldGet(this, _ActivedescendantController_noCloneSet, "f").has(x));
        }
    }
}
_ActivedescendantController_lightToShadowMap = new WeakMap(), _ActivedescendantController_shadowToLightMap = new WeakMap(), _ActivedescendantController_noCloneSet = new WeakMap(), _ActivedescendantController_controlsElements = new WeakMap(), _ActivedescendantController_observing = new WeakMap(), _ActivedescendantController_listMO = new WeakMap(), _ActivedescendantController_attrMO = new WeakMap(), _ActivedescendantController_instances = new WeakSet(), _ActivedescendantController_syncAttr = function _ActivedescendantController_syncAttr(attributeName, fromNode) {
    const toNode = __classPrivateFieldGet(this, _ActivedescendantController_shadowToLightMap, "f").get(fromNode)
        ?? __classPrivateFieldGet(this, _ActivedescendantController_lightToShadowMap, "f").get(fromNode);
    const newVal = fromNode.getAttribute(attributeName);
    const oldVal = toNode?.getAttribute(attributeName);
    if (!fromNode.hasAttribute(attributeName)) {
        toNode?.removeAttribute(attributeName);
    }
    else if (oldVal !== newVal) {
        toNode?.setAttribute(attributeName, newVal);
    }
}, _ActivedescendantController_onItemsDOMChange = function _ActivedescendantController_onItemsDOMChange(records) {
    for (const { removedNodes } of records) {
        for (const removed of removedNodes) {
            __classPrivateFieldGet(this, _ActivedescendantController_lightToShadowMap, "f").get(removed)?.remove();
            __classPrivateFieldGet(this, _ActivedescendantController_lightToShadowMap, "f").delete(removed);
        }
    }
}, _ActivedescendantController_onItemAttributeChange = function _ActivedescendantController_onItemAttributeChange(records) {
    for (const { target, attributeName } of records) {
        if (attributeName) {
            __classPrivateFieldGet(this, _ActivedescendantController_instances, "m", _ActivedescendantController_syncAttr).call(this, attributeName, target);
        }
    }
};
__decorate([
    bound
], ActivedescendantController.prototype, "onKeydown", null);
//# sourceMappingURL=activedescendant-controller.js.map