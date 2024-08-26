var _ListboxController_instances, _ListboxController_shiftStartingItem, _ListboxController_options, _ListboxController_items, _ListboxController_selectedItems, _ListboxController_listening, _ListboxController_controlsElements, _ListboxController_removeControlsListeners, _ListboxController_isExpanded_get, _ListboxController_getItemFromEvent, _ListboxController_onClick, _ListboxController_onKeyup, _ListboxController_onKeydown, _ListboxController_selectItem;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { isServer } from 'lit';
import { arraysAreEquivalent } from '../functions/arraysAreEquivalent.js';
/**
 * This is the default method for setting the selected state on an item element
 * @param item the item
 * @param selected is this item selected
 */
function setItemSelected(item, selected) {
    if (selected) {
        item.setAttribute('aria-selected', 'true');
    }
    else {
        item.removeAttribute('aria-selected');
    }
}
/**
 * @param item possible disabled item
 * @package do not import this outside of `@patternfly/pfe-core`, it is subject to change at any time
 */
export function isItem(item) {
    return item instanceof Element
        && item?.parentElement?.role === 'listbox'
        && item?.role !== 'presentation'
        && item?.localName !== 'hr';
}
/**
 * This is a fib. aria-disabled might not be present on an element that uses internals,
 * and the `disabled` attribute may not accurately represent the disabled state.
 * short of patching the `attachInternals` constructor, it may not be possible at
 * runtime to know with certainty that an arbitrary custom element is disabled or not.
 * @param item possibly disabled item
 * @package do not import this outside of `@patternfly/pfe-core`, it is subject to change at any time
 */
export function isItemDisabled(item) {
    return ('disabled' in item && typeof item.disabled === 'boolean' && item.disabled)
        || item.getAttribute('aria-disabled') === 'true'
        || item.hasAttribute('disabled')
        || item.hasAttribute('inert')
        || item.matches(':disabled');
}
let constructingAllowed = false;
/**
 * Implements listbox semantics and accesibility. As there are two recognized
 * patterns for implementing keyboard interactions with listbox patterns,
 * provide a secondary controller (either RovingTabindexController or
 * ActiveDescendantController) to complete the implementation.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_focus_vs_selection
 *
 * > Occasionally, it may appear as if two elements on the page have focus at the same time.
 * > For example, in a multi-select list box, when an option is selected it may be greyed.
 * > Yet, the focus indicator can still be moved to other options, which may also be selected.
 * > Similarly, when a user activates a tab in a tablist, the selected state is set on the tab
 * > and its visual appearance changes. However, the user can still navigate, moving the focus
 * > indicator elsewhere on the page while the tab retains its selected appearance and state.
 * >
 * > Focus and selection are quite different. From the keyboard user's perspective,
 * > focus is a pointer, like a mouse pointer; it tracks the path of navigation.
 * > There is only one point of focus at any time and all operations take place at the
 * > point of focus. On the other hand, selection is an operation that can be performed in
 * > some widgets, such as list boxes, trees, and tablists. If a widget supports only single
 * > selection, then only one item can be selected and very often the selected state will simply
 * > follow the focus when focus is moved inside of the widget.
 * > That is, in some widgets, moving focus may also perform the select operation.
 * > However, if the widget supports multiple selection, then more than one item can be in a
 * > selected state, and keys for moving focus do not perform selection. Some multi-select widgets
 * > do support key commands that both move focus and change selection, but those keys are
 * > different from the normal navigation keys. Finally, when focus leaves a widget that includes
 * > a selected element, the selected state persists.
 * >
 * > From the developer's perspective, the difference is simple -- the focused element is the
 * > active element (document.activeElement). Selected elements are elements that have
 * > aria-selected="true".
 * >
 * > With respect to focus and the selected state, the most important considerations for designers
 * > and developers are:
 * >
 * > - The visual focus indicator must always be visible.
 * > - The selected state must be visually distinct from the focus indicator.
 */
export class ListboxController {
    static of(host, options) {
        constructingAllowed = true;
        const instance = new ListboxController(host, options);
        constructingAllowed = false;
        return instance;
    }
    get container() {
        return __classPrivateFieldGet(this, _ListboxController_options, "f").getItemsContainer?.() ?? this.host;
    }
    get multi() {
        return !!__classPrivateFieldGet(this, _ListboxController_options, "f").multi;
    }
    set multi(v) {
        __classPrivateFieldGet(this, _ListboxController_options, "f").multi = v;
        this.host.requestUpdate();
    }
    get items() {
        return __classPrivateFieldGet(this, _ListboxController_items, "f");
    }
    /**
     * register's the host's Item elements as listbox controller items
     * sets aria-setsize and aria-posinset on items
     * @param items items
     */
    set items(items) {
        __classPrivateFieldSet(this, _ListboxController_items, items, "f");
        __classPrivateFieldGet(this, _ListboxController_items, "f").forEach((item, index, _items) => {
            item.ariaSetSize = _items.length.toString();
            item.ariaPosInSet = (index + 1).toString();
        });
    }
    /**
     * sets the listbox value based on selected options
     * @param selected item or items
     */
    set selected(selected) {
        if (!arraysAreEquivalent(selected, Array.from(__classPrivateFieldGet(this, _ListboxController_selectedItems, "f")))) {
            __classPrivateFieldSet(this, _ListboxController_selectedItems, new Set(selected), "f");
            for (const item of this.items) {
                __classPrivateFieldGet(this, _ListboxController_options, "f").setItemSelected(item, __classPrivateFieldGet(this, _ListboxController_selectedItems, "f").has(item));
            }
            this.host.requestUpdate();
        }
    }
    /**
     * array of options which are selected
     */
    get selected() {
        return [...__classPrivateFieldGet(this, _ListboxController_selectedItems, "f")];
    }
    constructor(host, options) {
        _ListboxController_instances.add(this);
        this.host = host;
        /** Current active descendant when shift key is pressed */
        _ListboxController_shiftStartingItem.set(this, null);
        _ListboxController_options.set(this, void 0);
        /** All items */
        _ListboxController_items.set(this, []);
        _ListboxController_selectedItems.set(this, new Set);
        _ListboxController_listening.set(this, false);
        /** Whether listbox is disabled */
        this.disabled = false;
        _ListboxController_controlsElements.set(this, []);
        /**
         * handles clicking on a listbox option:
         * which selects an item by default
         * or toggles selection if multiselectable
         * @param event click event
         */
        _ListboxController_onClick.set(this, (event) => {
            const item = __classPrivateFieldGet(this, _ListboxController_instances, "m", _ListboxController_getItemFromEvent).call(this, event);
            __classPrivateFieldSet(this, _ListboxController_shiftStartingItem, __classPrivateFieldGet(this, _ListboxController_shiftStartingItem, "f") ?? __classPrivateFieldGet(this, _ListboxController_instances, "m", _ListboxController_getItemFromEvent).call(this, event), "f");
            if (item && !__classPrivateFieldGet(this, _ListboxController_options, "f").isItemDisabled(item)) {
                // Case: single select?
                //       just reset the selected list.
                if (!this.multi) {
                    // select target and deselect all other options
                    this.selected = [item];
                    // Case: multi select, but no shift key
                    //       toggle target, keep all other previously selected
                }
                else if (!event.shiftKey) {
                    this.selected = this.items.filter(possiblySelectedItem => __classPrivateFieldGet(this, _ListboxController_selectedItems, "f").has(possiblySelectedItem) ? possiblySelectedItem !== item
                        : possiblySelectedItem === item);
                    // Case: multi select, with shift key
                    //       find all items between previously selected and target,
                    //       and select them (if reference item is selected) or deselect them (if reference item is deselected)
                    //       Do not wrap around from end to start, rather, only select withing the range of 0-end
                }
                else {
                    const startingItem = __classPrivateFieldGet(this, _ListboxController_shiftStartingItem, "f");
                    // whether options will be selected (true) or deselected (false)
                    const selecting = __classPrivateFieldGet(this, _ListboxController_selectedItems, "f").has(startingItem);
                    const [start, end] = [this.items.indexOf(startingItem), this.items.indexOf(item)].sort();
                    // de/select all options between active descendant and target
                    this.selected = this.items.filter((item, i) => {
                        if (i >= start && i <= end) {
                            return selecting;
                        }
                        else {
                            return __classPrivateFieldGet(this, _ListboxController_selectedItems, "f").has(item);
                        }
                    });
                }
            }
            __classPrivateFieldSet(this, _ListboxController_shiftStartingItem, item, "f");
            this.host.requestUpdate();
        });
        /**
         * track whether shift key is being used for multiselectable listbox
         * @param event keyup event
         */
        _ListboxController_onKeyup.set(this, (event) => {
            if (event.key === 'Shift') {
                __classPrivateFieldSet(this, _ListboxController_shiftStartingItem, null, "f");
            }
        });
        /**
         * filters listbox by keyboard event when slotted option has focus,
         * or by external element such as a text field
         * @param event keydown event
         */
        _ListboxController_onKeydown.set(this, (event) => {
            const item = __classPrivateFieldGet(this, _ListboxController_instances, "m", _ListboxController_getItemFromEvent).call(this, event);
            if (this.disabled
                || event.altKey
                || event.metaKey
                || !__classPrivateFieldGet(this, _ListboxController_instances, "a", _ListboxController_isExpanded_get)) {
                return;
            }
            // need to set for keyboard support of multiselect
            if (event.key === 'Shift' && this.multi) {
                __classPrivateFieldSet(this, _ListboxController_shiftStartingItem, __classPrivateFieldGet(this, _ListboxController_shiftStartingItem, "f") ?? (__classPrivateFieldGet(this, _ListboxController_options, "f").getATFocusedItem() ?? null), "f");
            }
            switch (event.key) {
                // ctrl+A de/selects all options
                case 'a':
                case 'A':
                    if (event.ctrlKey
                        && (event.target === this.container
                            || __classPrivateFieldGet(this, _ListboxController_options, "f").isItem(event.target))) {
                        const selectableItems = this.items.filter(item => !__classPrivateFieldGet(this, _ListboxController_options, "f").isItemDisabled(item));
                        if (arraysAreEquivalent(this.selected, selectableItems)) {
                            this.selected = [];
                        }
                        else {
                            this.selected = selectableItems;
                        }
                        event.preventDefault();
                    }
                    break;
                case 'Enter':
                    // enter and space are only applicable if a listbox option is clicked
                    // an external text input should not trigger multiselect
                    if (item && !event.shiftKey) {
                        const focused = item;
                        __classPrivateFieldGet(this, _ListboxController_instances, "m", _ListboxController_selectItem).call(this, focused, event.shiftKey);
                        event.preventDefault();
                    }
                    break;
                case 'ArrowUp':
                    if (this.multi && event.shiftKey && __classPrivateFieldGet(this, _ListboxController_options, "f").isItem(event.target)) {
                        const item = event.target;
                        this.selected = this.items.filter((x, i) => __classPrivateFieldGet(this, _ListboxController_selectedItems, "f").has(x)
                            || i === this.items.indexOf(item) - 1)
                            .filter(x => !__classPrivateFieldGet(this, _ListboxController_options, "f").isItemDisabled(x));
                    }
                    break;
                case 'ArrowDown':
                    if (this.multi && event.shiftKey && __classPrivateFieldGet(this, _ListboxController_options, "f").isItem(event.target)) {
                        const item = event.target;
                        this.selected = this.items.filter((x, i) => __classPrivateFieldGet(this, _ListboxController_selectedItems, "f").has(x)
                            || i === this.items.indexOf(item) + 1)
                            .filter(x => !__classPrivateFieldGet(this, _ListboxController_options, "f").isItemDisabled(x));
                    }
                    break;
                case ' ':
                    // enter and space are only applicable if a listbox option is clicked
                    // an external text input should not trigger multiselect
                    if (item && event.target === this.container) {
                        __classPrivateFieldGet(this, _ListboxController_instances, "m", _ListboxController_selectItem).call(this, item, event.shiftKey);
                        event.preventDefault();
                    }
                    else if (__classPrivateFieldGet(this, _ListboxController_options, "f").isItem(event.target)) {
                        __classPrivateFieldGet(this, _ListboxController_instances, "m", _ListboxController_selectItem).call(this, event.target, event.shiftKey);
                        event.preventDefault();
                    }
                    break;
                default:
                    break;
            }
            this.host.requestUpdate();
        });
        __classPrivateFieldSet(this, _ListboxController_options, { setItemSelected, isItemDisabled, isItem, ...options }, "f");
        if (!constructingAllowed) {
            throw new Error('ListboxController must be constructed with `ListboxController.of()`');
        }
        if (!isServer
            && !(host instanceof HTMLElement)
            && typeof options.getItemsContainer !== 'function') {
            throw new Error([
                'ListboxController requires the host to be an HTMLElement',
                'or for the initializer to include a getItemsContainer() function',
            ].join(' '));
        }
        const instance = ListboxController.instances.get(host);
        if (instance) {
            return instance;
        }
        ListboxController.instances.set(host, this);
        this.host.addController(this);
        this.multi = __classPrivateFieldGet(this, _ListboxController_options, "f").multi ?? false;
        if (this.container?.isConnected) {
            this.hostConnected();
        }
    }
    async hostConnected() {
        await this.host.updateComplete;
        this.hostUpdate();
        this.hostUpdated();
    }
    hostUpdate() {
        const last = __classPrivateFieldGet(this, _ListboxController_controlsElements, "f");
        __classPrivateFieldSet(this, _ListboxController_controlsElements, __classPrivateFieldGet(this, _ListboxController_options, "f").getControlsElements?.() ?? [], "f");
        if (!arraysAreEquivalent(last, __classPrivateFieldGet(this, _ListboxController_controlsElements, "f"))) {
            __classPrivateFieldGet(this, _ListboxController_instances, "m", _ListboxController_removeControlsListeners).call(this, last);
            for (const el of __classPrivateFieldGet(this, _ListboxController_controlsElements, "f")) {
                el.addEventListener('keydown', __classPrivateFieldGet(this, _ListboxController_onKeydown, "f"));
                el.addEventListener('keyup', __classPrivateFieldGet(this, _ListboxController_onKeyup, "f"));
            }
        }
    }
    hostUpdated() {
        if (!__classPrivateFieldGet(this, _ListboxController_listening, "f")) {
            this.container?.addEventListener('click', __classPrivateFieldGet(this, _ListboxController_onClick, "f"));
            this.container?.addEventListener('keydown', __classPrivateFieldGet(this, _ListboxController_onKeydown, "f"));
            this.container?.addEventListener('keyup', __classPrivateFieldGet(this, _ListboxController_onKeyup, "f"));
            __classPrivateFieldSet(this, _ListboxController_listening, true, "f");
        }
        this.container?.setAttribute('role', 'listbox');
        this.container?.setAttribute('aria-disabled', String(!!this.disabled));
        this.container?.setAttribute('aria-multiselectable', String(!!__classPrivateFieldGet(this, _ListboxController_options, "f").multi));
    }
    hostDisconnected() {
        this.container?.removeEventListener('click', __classPrivateFieldGet(this, _ListboxController_onClick, "f"));
        this.container?.removeEventListener('keydown', __classPrivateFieldGet(this, _ListboxController_onKeydown, "f"));
        this.container?.removeEventListener('keyup', __classPrivateFieldGet(this, _ListboxController_onKeyup, "f"));
        __classPrivateFieldGet(this, _ListboxController_instances, "m", _ListboxController_removeControlsListeners).call(this);
        __classPrivateFieldSet(this, _ListboxController_listening, false, "f");
    }
    isSelected(item) {
        return __classPrivateFieldGet(this, _ListboxController_selectedItems, "f").has(item);
    }
}
_ListboxController_shiftStartingItem = new WeakMap(), _ListboxController_options = new WeakMap(), _ListboxController_items = new WeakMap(), _ListboxController_selectedItems = new WeakMap(), _ListboxController_listening = new WeakMap(), _ListboxController_controlsElements = new WeakMap(), _ListboxController_onClick = new WeakMap(), _ListboxController_onKeyup = new WeakMap(), _ListboxController_onKeydown = new WeakMap(), _ListboxController_instances = new WeakSet(), _ListboxController_removeControlsListeners = function _ListboxController_removeControlsListeners(els = __classPrivateFieldGet(this, _ListboxController_controlsElements, "f")) {
    for (const el of els) {
        el.removeEventListener('keydown', __classPrivateFieldGet(this, _ListboxController_onKeydown, "f"));
        el.removeEventListener('keyup', __classPrivateFieldGet(this, _ListboxController_onKeyup, "f"));
    }
}, _ListboxController_isExpanded_get = function _ListboxController_isExpanded_get() {
    return !__classPrivateFieldGet(this, _ListboxController_controlsElements, "f").length ? true
        : __classPrivateFieldGet(this, _ListboxController_controlsElements, "f").every(x => x.ariaExpanded === 'true');
}, _ListboxController_getItemFromEvent = function _ListboxController_getItemFromEvent(event) {
    // NOTE(bennypowers): I am aware that this function *sucks*
    // you're more than welcome to improve it.
    // make sure there are unit tests first
    const path = event.composedPath();
    const tabindexed = this.items.some(x => x.hasAttribute('tabindex'));
    if (tabindexed) {
        const item = path.find(__classPrivateFieldGet(this, _ListboxController_options, "f").isItem);
        if (item) {
            return item;
        }
    }
    else if (__classPrivateFieldGet(this, _ListboxController_options, "f").isItem(event.target)
        && event.target.getRootNode() !== this.container.getRootNode()
        && 'ariaActiveDescendantElement' in HTMLElement.prototype) {
        return event.target;
    }
    else if (event.target instanceof HTMLElement && event.target.ariaActiveDescendantElement) {
        return event.target.ariaActiveDescendantElement;
    }
    else if (event.type === 'click'
        && __classPrivateFieldGet(this, _ListboxController_options, "f").isItem(event.target)
        && event.target.id) {
        const element = event.target;
        const root = element.getRootNode();
        if (root instanceof ShadowRoot && this.container.getRootNode() === root) {
            const shadowRootListboxElement = this.container;
            const shadowRootItem = element;
            if (shadowRootItem && shadowRootListboxElement) {
                if (this.items.includes(shadowRootItem)) {
                    return shadowRootItem;
                }
                else {
                    const index = Array.from(shadowRootListboxElement?.children ?? [])
                        .filter(__classPrivateFieldGet(this, _ListboxController_options, "f").isItem)
                        .filter(x => !x.hidden)
                        .indexOf(shadowRootItem);
                    return __classPrivateFieldGet(this, _ListboxController_items, "f").filter(x => !x.hidden)[index];
                }
            }
        }
    }
    else {
        // otherwise, query the root (e.g. shadow root) for the associated element
        const element = event.target;
        const root = element.getRootNode();
        const controlsId = element?.getAttribute('aria-controls');
        const shadowRootListboxElement = __classPrivateFieldGet(this, _ListboxController_options, "f").isItem(element) ? this.container
            : controlsId ? root.getElementById(controlsId)
                : null;
        const shadowRootHasActiveDescendantElement = root.querySelector(`[aria-controls="${shadowRootListboxElement?.id}"][aria-activedescendant]`);
        const shadowRootItemId = shadowRootHasActiveDescendantElement?.getAttribute('aria-activedescendant');
        const shadowRootItem = shadowRootItemId && root.getElementById(shadowRootItemId);
        if (shadowRootItem && shadowRootListboxElement) {
            if (this.items.includes(shadowRootItem)) {
                return shadowRootItem;
            }
            else {
                const index = Array.from(shadowRootListboxElement?.children ?? [])
                    .filter(__classPrivateFieldGet(this, _ListboxController_options, "f").isItem)
                    .filter(x => !x.hidden)
                    .indexOf(shadowRootItem);
                return __classPrivateFieldGet(this, _ListboxController_items, "f").filter(x => !x.hidden)[index];
            }
        }
        const itemFromEventContainer = shadowRootListboxElement ? shadowRootListboxElement
            : path.find(x => x instanceof HTMLElement && x.role === 'listbox');
        if (itemFromEventContainer) {
            const possiblyShadowRootContainerItems = Array.from(itemFromEventContainer.children)
                .filter(__classPrivateFieldGet(this, _ListboxController_options, "f").isItem);
            const index = possiblyShadowRootContainerItems
                .findIndex(node => path.includes(node));
            if (index >= 0) {
                return this.items[index] ?? null;
            }
        }
    }
    return null;
}, _ListboxController_selectItem = function _ListboxController_selectItem(item, shiftDown = false) {
    if (__classPrivateFieldGet(this, _ListboxController_options, "f").isItemDisabled(item)) {
        return;
    }
    else if (this.multi && shiftDown) {
        // update starting item for other multiselect
        this.selected = [...this.selected, item];
    }
    else if (this.multi && __classPrivateFieldGet(this, _ListboxController_selectedItems, "f").has(item)) {
        this.selected = this.selected.filter(x => x !== item);
    }
    else if (this.multi) {
        this.selected = this.selected.concat(item);
    }
    else {
        this.selected = [item];
    }
};
ListboxController.instances = new WeakMap();
//# sourceMappingURL=listbox-controller.js.map