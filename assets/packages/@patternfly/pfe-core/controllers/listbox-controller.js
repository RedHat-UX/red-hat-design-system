var _ListboxController_instances, _ListboxController_shiftStartingItem, _ListboxController_items, _ListboxController_listening, _ListboxController_getEnabledOptions, _ListboxController_getEventOption, _ListboxController_onFocus, _ListboxController_onClick, _ListboxController_onKeyup, _ListboxController_onKeydown, _ListboxController_optionsChanged, _ListboxController_updateSingleselect, _ListboxController_updateMultiselect;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
let constructingAllowed = false;
/**
 * Implements listbox semantics and accesibility. As there are two recognized
 * patterns for implementing keyboard interactions with listbox patterns,
 * provide a secondary controller (either RovingTabindexController or
 * ActiveDescendantController) to complete the implementation.
 */
export class ListboxController {
    static of(host, options) {
        constructingAllowed = true;
        const instance = ListboxController.instances.get(host) ?? new ListboxController(host, options);
        constructingAllowed = false;
        return instance;
    }
    constructor(host, 
    // this should ideally be ecma #private, but tsc/esbuild tooling isn't up to scratch yet
    // so for now we rely on the underscore convention to avoid compile-time errors
    // try refactoring after updating tooling dependencies
    _options) {
        _ListboxController_instances.add(this);
        this.host = host;
        this._options = _options;
        /** Current active descendant when shift key is pressed */
        _ListboxController_shiftStartingItem.set(this, null);
        /** All options that will not be hidden by a filter */
        _ListboxController_items.set(this, []);
        _ListboxController_listening.set(this, false);
        /** Whether listbox is disabled */
        this.disabled = false;
        /**
         * handles focusing on an option:
         * updates roving tabindex and active descendant
         */
        _ListboxController_onFocus.set(this, (event) => {
            const target = __classPrivateFieldGet(this, _ListboxController_instances, "m", _ListboxController_getEventOption).call(this, event);
            if (target && target !== this._options.a11yController.activeItem) {
                this._options.a11yController.setActiveItem(target);
            }
        });
        /**
         * handles clicking on a listbox option:
         * which selects an item by default
         * or toggles selection if multiselectable
         */
        _ListboxController_onClick.set(this, (event) => {
            const target = __classPrivateFieldGet(this, _ListboxController_instances, "m", _ListboxController_getEventOption).call(this, event);
            if (target) {
                const oldValue = this.value;
                if (this._options.multi) {
                    if (!event.shiftKey) {
                        this._options.requestSelect(target, !this._options.isSelected(target));
                    }
                    else if (__classPrivateFieldGet(this, _ListboxController_shiftStartingItem, "f") && target) {
                        __classPrivateFieldGet(this, _ListboxController_instances, "m", _ListboxController_updateMultiselect).call(this, target, __classPrivateFieldGet(this, _ListboxController_shiftStartingItem, "f"));
                    }
                }
                else {
                    // select target and deselect all other options
                    this.options.forEach(option => this._options.requestSelect(option, option === target));
                }
                if (target !== this._options.a11yController.activeItem) {
                    this._options.a11yController.setActiveItem(target);
                }
                if (oldValue !== this.value) {
                    this.host.requestUpdate();
                }
            }
        });
        /**
         * handles keyup:
         * track whether shift key is being used for multiselectable listbox
         */
        _ListboxController_onKeyup.set(this, (event) => {
            const target = __classPrivateFieldGet(this, _ListboxController_instances, "m", _ListboxController_getEventOption).call(this, event);
            if (target && event.shiftKey && this._options.multi) {
                if (__classPrivateFieldGet(this, _ListboxController_shiftStartingItem, "f") && target) {
                    __classPrivateFieldGet(this, _ListboxController_instances, "m", _ListboxController_updateMultiselect).call(this, target, __classPrivateFieldGet(this, _ListboxController_shiftStartingItem, "f"));
                }
                if (event.key === 'Shift') {
                    __classPrivateFieldSet(this, _ListboxController_shiftStartingItem, null, "f");
                }
            }
        });
        /**
         * handles keydown:
         * filters listbox by keyboard event when slotted option has focus,
         * or by external element such as a text field
         */
        _ListboxController_onKeydown.set(this, (event) => {
            const target = __classPrivateFieldGet(this, _ListboxController_instances, "m", _ListboxController_getEventOption).call(this, event);
            if (!target || event.altKey || event.metaKey || !this.options.includes(target)) {
                return;
            }
            const first = this._options.a11yController.firstItem;
            const last = this._options.a11yController.lastItem;
            // need to set for keyboard support of multiselect
            if (event.key === 'Shift' && this._options.multi) {
                __classPrivateFieldSet(this, _ListboxController_shiftStartingItem, this.activeItem ?? null, "f");
            }
            switch (event.key) {
                case 'a':
                case 'A':
                    if (event.ctrlKey) {
                        // ctrl+A selects all options
                        __classPrivateFieldGet(this, _ListboxController_instances, "m", _ListboxController_updateMultiselect).call(this, first, last, true);
                        event.preventDefault();
                    }
                    break;
                case 'Enter':
                case ' ':
                    // enter and space are only applicable if a listbox option is clicked
                    // an external text input should not trigger multiselect
                    if (this._options.multi) {
                        if (event.shiftKey) {
                            __classPrivateFieldGet(this, _ListboxController_instances, "m", _ListboxController_updateMultiselect).call(this, target);
                        }
                        else if (!this.disabled) {
                            this._options.requestSelect(target, !this._options.isSelected(target));
                        }
                    }
                    else {
                        __classPrivateFieldGet(this, _ListboxController_instances, "m", _ListboxController_updateSingleselect).call(this);
                    }
                    event.preventDefault();
                    break;
                default:
                    break;
            }
        });
        if (!constructingAllowed) {
            throw new Error('ListboxController must be constructed with `ListboxController.of()`');
        }
        if (!(host instanceof HTMLElement) && typeof _options.getHTMLElement !== 'function') {
            throw new Error('ListboxController requires the host to be an HTMLElement, or for the initializer to include a `getHTMLElement()` function');
        }
        if (!_options.a11yController) {
            throw new Error('ListboxController requires an additional keyboard accessibility controller. Provide either a RovingTabindexController or an ActiveDescendantController');
        }
        ListboxController.instances.set(host, this);
        this.host.addController(this);
        if (this.element?.isConnected) {
            this.hostConnected();
        }
    }
    /** Current active descendant in listbox */
    get activeItem() {
        return this.options.find(option => option === this._options.a11yController.activeItem) || this._options.a11yController.firstItem;
    }
    get nextItem() {
        return this._options.a11yController.nextItem;
    }
    get options() {
        return __classPrivateFieldGet(this, _ListboxController_items, "f");
    }
    /**
     * array of options which are selected
     */
    get selectedOptions() {
        return this.options.filter(option => this._options.isSelected(option));
    }
    get value() {
        const [firstItem] = this.selectedOptions;
        return this._options.multi ? this.selectedOptions : firstItem;
    }
    get element() {
        return this._options.getHTMLElement();
    }
    async hostConnected() {
        if (!__classPrivateFieldGet(this, _ListboxController_listening, "f")) {
            await this.host.updateComplete;
            this.element?.addEventListener('click', __classPrivateFieldGet(this, _ListboxController_onClick, "f"));
            this.element?.addEventListener('focus', __classPrivateFieldGet(this, _ListboxController_onFocus, "f"));
            this.element?.addEventListener('keydown', __classPrivateFieldGet(this, _ListboxController_onKeydown, "f"));
            this.element?.addEventListener('keyup', __classPrivateFieldGet(this, _ListboxController_onKeyup, "f"));
            __classPrivateFieldSet(this, _ListboxController_listening, true, "f");
        }
    }
    hostUpdated() {
        this.element?.setAttribute('role', 'listbox');
        this.element?.setAttribute('aria-disabled', String(!!this.disabled));
        this.element?.setAttribute('aria-multi-selectable', String(!!this._options.multi));
        for (const option of this._options.a11yController.items) {
            if (this._options.a11yController.activeItem === option) {
                option.setAttribute('aria-selected', 'true');
            }
            else {
                option.removeAttribute('aria-selected');
            }
        }
    }
    hostDisconnected() {
        this.element?.removeEventListener('click', __classPrivateFieldGet(this, _ListboxController_onClick, "f"));
        this.element?.removeEventListener('focus', __classPrivateFieldGet(this, _ListboxController_onFocus, "f"));
        this.element?.removeEventListener('keydown', __classPrivateFieldGet(this, _ListboxController_onKeydown, "f"));
        this.element?.removeEventListener('keyup', __classPrivateFieldGet(this, _ListboxController_onKeyup, "f"));
        __classPrivateFieldSet(this, _ListboxController_listening, false, "f");
    }
    /**
     * sets the listbox value based on selected options
     */
    setValue(value) {
        const selected = Array.isArray(value) ? value : [value];
        const [firstItem = null] = selected;
        for (const option of this.options) {
            this._options.requestSelect(option, (!!this._options.multi && Array.isArray(value) ? value?.includes(option)
                : firstItem === option));
        }
    }
    /**
     * register's the host's Item elements as listbox controller items
     */
    setOptions(options) {
        const oldOptions = [...__classPrivateFieldGet(this, _ListboxController_items, "f")];
        __classPrivateFieldSet(this, _ListboxController_items, options, "f");
        __classPrivateFieldGet(this, _ListboxController_instances, "m", _ListboxController_optionsChanged).call(this, oldOptions);
    }
}
_ListboxController_shiftStartingItem = new WeakMap(), _ListboxController_items = new WeakMap(), _ListboxController_listening = new WeakMap(), _ListboxController_onFocus = new WeakMap(), _ListboxController_onClick = new WeakMap(), _ListboxController_onKeyup = new WeakMap(), _ListboxController_onKeydown = new WeakMap(), _ListboxController_instances = new WeakSet(), _ListboxController_getEnabledOptions = function _ListboxController_getEnabledOptions(options = this.options) {
    return options.filter(option => !option.ariaDisabled && !option.closest('[disabled]'));
}, _ListboxController_getEventOption = function _ListboxController_getEventOption(event) {
    return event.composedPath().find(node => __classPrivateFieldGet(this, _ListboxController_items, "f").includes(node));
}, _ListboxController_optionsChanged = function _ListboxController_optionsChanged(oldOptions) {
    const setSize = __classPrivateFieldGet(this, _ListboxController_items, "f").length;
    if (setSize !== oldOptions.length || !oldOptions.every((element, index) => element === __classPrivateFieldGet(this, _ListboxController_items, "f")[index])) {
        this._options.a11yController.updateItems(this.options);
    }
}, _ListboxController_updateSingleselect = function _ListboxController_updateSingleselect() {
    if (!this._options.multi && !this.disabled) {
        __classPrivateFieldGet(this, _ListboxController_instances, "m", _ListboxController_getEnabledOptions).call(this)
            .forEach(option => this._options.requestSelect(option, option === this._options.a11yController.activeItem));
    }
}, _ListboxController_updateMultiselect = function _ListboxController_updateMultiselect(currentItem, referenceItem = this.activeItem, ctrlA = false) {
    if (referenceItem && this._options.multi && !this.disabled && currentItem) {
        // select all options between active descendant and target
        const [start, end] = [this.options.indexOf(referenceItem), this.options.indexOf(currentItem)].sort();
        const options = [...this.options].slice(start, end + 1);
        // by default CTRL+A will select all options
        // if all options are selected, CTRL+A will deselect all options
        const allSelected = __classPrivateFieldGet(this, _ListboxController_instances, "m", _ListboxController_getEnabledOptions).call(this, options).filter(option => !this._options.isSelected(option))?.length === 0;
        // whether options will be selected (true) or deselected (false)
        const selected = ctrlA ? !allSelected : this._options.isSelected(referenceItem);
        __classPrivateFieldGet(this, _ListboxController_instances, "m", _ListboxController_getEnabledOptions).call(this, options).forEach(option => this._options.requestSelect(option, selected));
        // update starting item for other multiselect
        __classPrivateFieldSet(this, _ListboxController_shiftStartingItem, currentItem, "f");
    }
};
ListboxController.instances = new WeakMap();
//# sourceMappingURL=listbox-controller.js.map