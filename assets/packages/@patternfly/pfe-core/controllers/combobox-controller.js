var _ComboboxController_instances, _a, _ComboboxController_alert, _ComboboxController_alertTemplate, _ComboboxController_lb, _ComboboxController_fc, _ComboboxController_preventListboxGainingFocus, _ComboboxController_input, _ComboboxController_button, _ComboboxController_listbox, _ComboboxController_buttonInitialRole, _ComboboxController_mo, _ComboboxController_microcopy, _ComboboxController_hasTextInput_get, _ComboboxController_focusedItem_get, _ComboboxController_element_get, _ComboboxController_init, _ComboboxController_initListbox, _ComboboxController_initButton, _ComboboxController_initInput, _ComboboxController_initLabels, _ComboboxController_initController, _ComboboxController_initItems, _ComboboxController_show, _ComboboxController_hide, _ComboboxController_toggle, _ComboboxController_translate, _ComboboxController_announce, _ComboboxController_filterItems, _ComboboxController_onClickButton, _ComboboxController_onClickListbox, _ComboboxController_onKeydownInput, _ComboboxController_onKeyupInput, _ComboboxController_onKeydownButton, _ComboboxController_onKeydownListbox, _ComboboxController_onFocusoutListbox, _ComboboxController_onKeydownToggleButton;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { nothing } from 'lit';
import { ListboxController, isItem, isItemDisabled } from './listbox-controller.js';
import { RovingTabindexController } from './roving-tabindex-controller.js';
import { ActivedescendantController } from './activedescendant-controller.js';
import { InternalsController } from './internals-controller.js';
import { getRandomId } from '../functions/random.js';
function deepClosest(element, selector) {
    let closest = element?.closest(selector);
    let root = element?.getRootNode();
    let count = 0;
    while (count < 500 && !closest && element) {
        count++;
        root = element.getRootNode();
        if (root instanceof ShadowRoot) {
            element = root.host;
        }
        else if (root instanceof Document) {
            element = document.documentElement;
        }
        else {
            return null;
        }
        closest = element.closest(selector);
    }
    return closest;
}
function getItemValue(item) {
    if ('value' in item && typeof item.value === 'string') {
        return item.value;
    }
    else {
        return '';
    }
}
function isItemFiltered(item, value) {
    return !getItemValue(item)
        .toLowerCase()
        .startsWith(value.toLowerCase());
}
function setItemHidden(item, hidden) {
    item.hidden = hidden;
}
function setComboboxValue(item, value) {
    if (!('value' in item)) {
        // eslint-disable-next-line no-console
        return console.warn(`Cannot set value on combobox element ${item.localName}`);
    }
    else {
        item.value = value;
    }
}
function getComboboxValue(combobox) {
    if ('value' in combobox && typeof combobox.value === 'string') {
        return combobox.value;
    }
    else {
        // eslint-disable-next-line no-console
        return console.warn(`Cannot get value from combobox element ${combobox.localName}`), '';
    }
}
/**
 * @summary Implements the WAI-ARIA pattern [Editable Combobox with Both List and Inline Autocomplete].
 *
 * Combobox with keyboard and pointer navigation, using the aria-activedescendant pattern.
 *
 * WARNING: Safari VoiceOver does not support aria-activedescendant, so Safari users
 * rely on the combobox input value being announced when navigating the listbox with the keyboard.
 * We have erred on the side that it may be less-broken to avoid announcing disabled items in that
 * case, rather than announcing the disabled items value without indicating that it is disabled.
 * @see (https://bugs.webkit.org/show_bug.cgi?id=269026)
 *
 * [pattern]: https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-both/
 */
export class ComboboxController {
    static of(host, options) {
        return new _a(host, options);
    }
    /**
     * Whether the `ariaActiveDescendantElement` IDL attribute is supported for cross-root ARIA.
     */
    static get supportsCrossRootActiveDescendant() {
        return ActivedescendantController.supportsCrossRootActiveDescendant;
    }
    /** All items */
    get items() {
        return __classPrivateFieldGet(this, _ComboboxController_lb, "f").items;
    }
    set items(value) {
        __classPrivateFieldGet(this, _ComboboxController_lb, "f").items = value;
    }
    /** Whether the combobox is disabled */
    get disabled() {
        return __classPrivateFieldGet(this, _ComboboxController_lb, "f").disabled;
    }
    set disabled(value) {
        __classPrivateFieldGet(this, _ComboboxController_lb, "f").disabled = value;
    }
    /** Whether multiselect is enabled */
    get multi() {
        return __classPrivateFieldGet(this, _ComboboxController_lb, "f").multi;
    }
    set multi(value) {
        __classPrivateFieldGet(this, _ComboboxController_lb, "f").multi = value;
    }
    /** The current selection: a list of items */
    get selected() {
        return __classPrivateFieldGet(this, _ComboboxController_lb, "f").selected;
    }
    set selected(value) {
        __classPrivateFieldGet(this, _ComboboxController_lb, "f").selected = value;
    }
    constructor(host, options) {
        _ComboboxController_instances.add(this);
        this.host = host;
        _ComboboxController_lb.set(this, void 0);
        _ComboboxController_fc.set(this, void 0);
        _ComboboxController_preventListboxGainingFocus.set(this, false);
        _ComboboxController_input.set(this, null);
        _ComboboxController_button.set(this, null);
        _ComboboxController_listbox.set(this, null);
        _ComboboxController_buttonInitialRole.set(this, null);
        _ComboboxController_mo.set(this, new MutationObserver(() => __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_initItems).call(this)));
        _ComboboxController_microcopy.set(this, new Map(Object.entries({
            dimmed: {
                en: 'dimmed',
                es: 'atenuada',
                de: 'gedimmt',
                it: 'oscurato',
                fr: 'atténué',
                ja: '暗くなった',
                zh: '变暗',
            },
            selected: {
                en: 'selected',
                es: 'seleccionado',
                de: 'ausgewählt',
                fr: 'choisie',
                it: 'selezionato',
                ja: '選ばれた',
                zh: '选',
            },
            of: {
                en: 'of',
                es: 'de',
                de: 'von',
                fr: 'sur',
                it: 'di',
                ja: '件目',
                zh: '的',
            },
        })));
        _ComboboxController_onClickButton.set(this, () => {
            if (!this.options.isExpanded()) {
                __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_show).call(this);
            }
            else {
                __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_hide).call(this);
            }
        });
        _ComboboxController_onClickListbox.set(this, (event) => {
            if (!this.multi && event.composedPath().some(this.options.isItem)) {
                __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_hide).call(this);
            }
        });
        /**
         * Handle keypresses on the input
         * ## `Down Arrow`
         * - If the textbox is not empty and the listbox is displayed,
         *   moves visual focus to the first suggested value.
         * - If the textbox is empty and the listbox is not displayed,
         *   opens the listbox and moves visual focus to the first option.
         * - In both cases DOM focus remains on the textbox.
         *
         * ## `Alt + Down Arrow`
         * Opens the listbox without moving focus or changing selection.
         *
         * ## `Up Arrow`
         * - If the textbox is not empty and the listbox is displayed,
         *   moves visual focus to the last suggested value.
         * - If the textbox is empty, first opens the listbox if it is not already displayed
         *   and then moves visual focus to the last option.
         * - In both cases DOM focus remains on the textbox.
         *
         * ## `Enter`
         * Closes the listbox if it is displayed.
         *
         * ## `Escape`
         * - If the listbox is displayed, closes it.
         * - If the listbox is not displayed, clears the textbox.
         *
         * ## Standard single line text editing keys
         * - Keys used for cursor movement and text manipulation,
         *   such as `Delete` and `Shift + Right Arrow`.
         * - An HTML `input` with `type="text"` is used for the textbox so the browser will provide
         *   platform-specific editing keys.
         *
         * @see https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list
         * @param event keydown event
         */
        _ComboboxController_onKeydownInput.set(this, (event) => {
            if (event.ctrlKey || event.shiftKey || !__classPrivateFieldGet(this, _ComboboxController_input, "f")) {
                return;
            }
            switch (event.key) {
                case 'ArrowDown':
                case 'ArrowUp':
                    if (!this.options.isExpanded()) {
                        __classPrivateFieldSet(this, _ComboboxController_preventListboxGainingFocus, event.altKey, "f");
                        __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_show).call(this);
                    }
                    break;
                case 'Enter':
                    if (!this.multi) {
                        __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_hide).call(this);
                    }
                    break;
                case 'Escape':
                    if (!this.options.isExpanded()) {
                        this.options.setComboboxValue(__classPrivateFieldGet(this, _ComboboxController_input, "f"), '');
                        this.host.requestUpdate();
                    }
                    __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_hide).call(this);
                    break;
                case 'Alt':
                case 'AltGraph':
                case 'Shift':
                case 'Control':
                case 'Fn':
                case 'Symbol':
                case 'Hyper':
                case 'Super':
                case 'Meta':
                case 'CapsLock':
                case 'FnLock':
                case 'NumLock':
                case 'Tab':
                case 'ScrollLock':
                case 'SymbolLock':
                case ' ':
                    break;
                default:
                    if (!this.options.isExpanded()) {
                        __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_show).call(this);
                    }
            }
        });
        /**
         * Populates the combobox input with the focused value when navigating the listbox,
         * and filters the items when typing.
         * @param event keyup event
         */
        _ComboboxController_onKeyupInput.set(this, (event) => {
            if (!__classPrivateFieldGet(this, _ComboboxController_input, "f")) {
                return;
            }
            switch (event.key) {
                case 'ArrowUp':
                case 'ArrowDown':
                    /**
                     * Safari VoiceOver does not support aria-activedescendant, so we must.
                     * approximate the correct behaviour by constructing a visually-hidden alert role
                     * @see (https://bugs.webkit.org/show_bug.cgi?id=269026)
                     */
                    if (__classPrivateFieldGet(this, _ComboboxController_instances, "a", _ComboboxController_focusedItem_get)
                        && this.options.getComboboxInput()
                        && InternalsController.isSafari) {
                        __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_announce).call(this, __classPrivateFieldGet(this, _ComboboxController_instances, "a", _ComboboxController_focusedItem_get));
                    }
                    break;
                default:
                    __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_filterItems).call(this);
            }
        });
        _ComboboxController_onKeydownButton.set(this, (event) => {
            if (__classPrivateFieldGet(this, _ComboboxController_instances, "a", _ComboboxController_hasTextInput_get)) {
                return __classPrivateFieldGet(this, _ComboboxController_onKeydownInput, "f").call(this, event);
            }
            else {
                return __classPrivateFieldGet(this, _ComboboxController_onKeydownToggleButton, "f").call(this, event);
            }
        });
        _ComboboxController_onKeydownListbox.set(this, (event) => {
            if (!__classPrivateFieldGet(this, _ComboboxController_instances, "a", _ComboboxController_hasTextInput_get)) {
                switch (event.key) {
                    case 'Home':
                    case 'End':
                        __classPrivateFieldGet(this, _ComboboxController_onKeydownToggleButton, "f").call(this, event);
                        break;
                    case 'Escape':
                        __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_hide).call(this);
                        __classPrivateFieldGet(this, _ComboboxController_button, "f")?.focus();
                        break;
                    case 'Enter':
                    case ' ': {
                        const eventItem = event.composedPath().find(this.options.isItem);
                        if (eventItem
                            && !this.multi
                            && this.options.isExpanded()
                            && !this.options.isItemDisabled(eventItem)) {
                            __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_hide).call(this);
                            __classPrivateFieldGet(this, _ComboboxController_button, "f")?.focus();
                        }
                    }
                }
            }
        });
        _ComboboxController_onFocusoutListbox.set(this, (event) => {
            if (!__classPrivateFieldGet(this, _ComboboxController_instances, "a", _ComboboxController_hasTextInput_get) && this.options.isExpanded()) {
                const root = __classPrivateFieldGet(this, _ComboboxController_instances, "a", _ComboboxController_element_get)?.getRootNode();
                if ((root instanceof ShadowRoot || root instanceof Document)
                    && !this.items.includes(event.relatedTarget)) {
                    __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_hide).call(this);
                }
            }
        });
        _ComboboxController_onKeydownToggleButton.set(this, async (event) => {
            switch (event.key) {
                case 'ArrowDown':
                case 'ArrowUp':
                    if (!this.options.isExpanded()) {
                        __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_show).call(this);
                    }
                    break;
                case 'Home':
                    if (!this.options.isExpanded()) {
                        await __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_show).call(this);
                    }
                    if (__classPrivateFieldGet(this, _ComboboxController_fc, "f")) {
                        __classPrivateFieldGet(this, _ComboboxController_fc, "f").atFocusedItemIndex = 0;
                    }
                    break;
                case 'End':
                    if (!this.options.isExpanded()) {
                        await __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_show).call(this);
                    }
                    if (__classPrivateFieldGet(this, _ComboboxController_fc, "f")) {
                        __classPrivateFieldGet(this, _ComboboxController_fc, "f").atFocusedItemIndex = this.items.length - 1;
                    }
                    break;
                case ' ':
                case 'Enter':
                    // prevent scroll
                    event.preventDefault();
                    await __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_toggle).call(this);
                    await this.host.updateComplete;
                    if (!this.options.isExpanded()) {
                        __classPrivateFieldGet(this, _ComboboxController_button, "f")?.focus();
                    }
                    break;
            }
        });
        host.addController(this);
        this.options = {
            isItem,
            getItemValue,
            isItemFiltered,
            isItemDisabled,
            getComboboxValue,
            setComboboxValue,
            setItemHidden,
            getOrientation: () => 'vertical',
            ...options,
        };
        __classPrivateFieldSet(this, _ComboboxController_lb, ListboxController.of(host, {
            isItem: this.options.isItem,
            getItemsContainer: this.options.getListboxElement,
            getControlsElements: () => [
                this.options.getToggleButton(),
                this.options.getComboboxInput(),
            ].filter(x => !!x),
            getATFocusedItem: () => this.items[__classPrivateFieldGet(this, _ComboboxController_fc, "f")?.atFocusedItemIndex ?? -1] ?? null,
            isItemDisabled: this.options.isItemDisabled,
            setItemSelected: this.options.setItemSelected,
        }), "f");
    }
    async hostConnected() {
        await this.host.updateComplete;
        this.hostUpdated();
    }
    hostUpdated() {
        if (!__classPrivateFieldGet(this, _ComboboxController_fc, "f")) {
            __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_init).call(this);
        }
        const expanded = this.options.isExpanded();
        __classPrivateFieldGet(this, _ComboboxController_button, "f")?.setAttribute('aria-expanded', String(expanded));
        __classPrivateFieldGet(this, _ComboboxController_input, "f")?.setAttribute('aria-expanded', String(expanded));
        if (__classPrivateFieldGet(this, _ComboboxController_instances, "a", _ComboboxController_hasTextInput_get)) {
            __classPrivateFieldGet(this, _ComboboxController_button, "f")?.setAttribute('tabindex', '-1');
        }
        else {
            __classPrivateFieldGet(this, _ComboboxController_button, "f")?.removeAttribute('tabindex');
        }
        __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_initLabels).call(this);
    }
    hostDisconnected() {
        __classPrivateFieldGet(this, _ComboboxController_fc, "f")?.hostDisconnected();
    }
    /**
     * For Browsers which do not support `ariaActiveDescendantElement`, we must clone
     * the listbox items into the same root as the combobox input
     * Call this method to return either an array of (cloned) list box items, to be placed in your
     * shadow template, or nothing in the case the browser supports cross-root aria.
     */
    renderItemsToShadowRoot() {
        if (__classPrivateFieldGet(this, _ComboboxController_fc, "f") instanceof ActivedescendantController) {
            return __classPrivateFieldGet(this, _ComboboxController_fc, "f").renderItemsToShadowRoot();
        }
        else {
            return nothing;
        }
    }
}
_a = ComboboxController, _ComboboxController_lb = new WeakMap(), _ComboboxController_fc = new WeakMap(), _ComboboxController_preventListboxGainingFocus = new WeakMap(), _ComboboxController_input = new WeakMap(), _ComboboxController_button = new WeakMap(), _ComboboxController_listbox = new WeakMap(), _ComboboxController_buttonInitialRole = new WeakMap(), _ComboboxController_mo = new WeakMap(), _ComboboxController_microcopy = new WeakMap(), _ComboboxController_onClickButton = new WeakMap(), _ComboboxController_onClickListbox = new WeakMap(), _ComboboxController_onKeydownInput = new WeakMap(), _ComboboxController_onKeyupInput = new WeakMap(), _ComboboxController_onKeydownButton = new WeakMap(), _ComboboxController_onKeydownListbox = new WeakMap(), _ComboboxController_onFocusoutListbox = new WeakMap(), _ComboboxController_onKeydownToggleButton = new WeakMap(), _ComboboxController_instances = new WeakSet(), _ComboboxController_hasTextInput_get = function _ComboboxController_hasTextInput_get() {
    return this.options.getComboboxInput();
}, _ComboboxController_focusedItem_get = function _ComboboxController_focusedItem_get() {
    return __classPrivateFieldGet(this, _ComboboxController_fc, "f")?.items.at(Math.max(__classPrivateFieldGet(this, _ComboboxController_fc, "f")?.atFocusedItemIndex ?? -1, 0)) ?? null;
}, _ComboboxController_element_get = function _ComboboxController_element_get() {
    if (this.host instanceof HTMLElement) {
        return this.host;
    }
    else if (this.options.getListboxElement() instanceof HTMLElement) {
        return this.options.getListboxElement();
    }
}, _ComboboxController_init = 
/**
 * Order of operations is important
 */
async function _ComboboxController_init() {
    await this.host.updateComplete;
    __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_initListbox).call(this);
    __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_initItems).call(this);
    __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_initButton).call(this);
    __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_initInput).call(this);
    __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_initLabels).call(this);
    __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_initController).call(this);
}, _ComboboxController_initListbox = function _ComboboxController_initListbox() {
    var _b;
    __classPrivateFieldGet(this, _ComboboxController_mo, "f").disconnect();
    __classPrivateFieldGet(this, _ComboboxController_listbox, "f")?.removeEventListener('focusout', __classPrivateFieldGet(this, _ComboboxController_onFocusoutListbox, "f"));
    __classPrivateFieldGet(this, _ComboboxController_listbox, "f")?.removeEventListener('keydown', __classPrivateFieldGet(this, _ComboboxController_onKeydownListbox, "f"));
    __classPrivateFieldGet(this, _ComboboxController_listbox, "f")?.removeEventListener('click', __classPrivateFieldGet(this, _ComboboxController_onClickListbox, "f"));
    __classPrivateFieldSet(this, _ComboboxController_listbox, this.options.getListboxElement(), "f");
    if (!__classPrivateFieldGet(this, _ComboboxController_listbox, "f")) {
        throw new Error('ComboboxController getListboxElement() option must return an element');
    }
    __classPrivateFieldGet(this, _ComboboxController_listbox, "f").addEventListener('focusout', __classPrivateFieldGet(this, _ComboboxController_onFocusoutListbox, "f"));
    __classPrivateFieldGet(this, _ComboboxController_listbox, "f").addEventListener('keydown', __classPrivateFieldGet(this, _ComboboxController_onKeydownListbox, "f"));
    __classPrivateFieldGet(this, _ComboboxController_listbox, "f").addEventListener('click', __classPrivateFieldGet(this, _ComboboxController_onClickListbox, "f"));
    (_b = __classPrivateFieldGet(this, _ComboboxController_listbox, "f")).id ?? (_b.id = getRandomId());
    __classPrivateFieldGet(this, _ComboboxController_mo, "f").observe(__classPrivateFieldGet(this, _ComboboxController_listbox, "f"), { childList: true });
}, _ComboboxController_initButton = function _ComboboxController_initButton() {
    __classPrivateFieldGet(this, _ComboboxController_button, "f")?.removeEventListener('click', __classPrivateFieldGet(this, _ComboboxController_onClickButton, "f"));
    __classPrivateFieldGet(this, _ComboboxController_button, "f")?.removeEventListener('keydown', __classPrivateFieldGet(this, _ComboboxController_onKeydownButton, "f"));
    __classPrivateFieldSet(this, _ComboboxController_button, this.options.getToggleButton(), "f");
    if (!__classPrivateFieldGet(this, _ComboboxController_button, "f")) {
        throw new Error('ComboboxController getToggleButton() option must return an element');
    }
    __classPrivateFieldSet(this, _ComboboxController_buttonInitialRole, __classPrivateFieldGet(this, _ComboboxController_button, "f").role, "f");
    __classPrivateFieldGet(this, _ComboboxController_button, "f").role = 'combobox';
    __classPrivateFieldGet(this, _ComboboxController_button, "f").setAttribute('aria-controls', __classPrivateFieldGet(this, _ComboboxController_listbox, "f")?.id ?? '');
    __classPrivateFieldGet(this, _ComboboxController_button, "f").addEventListener('click', __classPrivateFieldGet(this, _ComboboxController_onClickButton, "f"));
    __classPrivateFieldGet(this, _ComboboxController_button, "f").addEventListener('keydown', __classPrivateFieldGet(this, _ComboboxController_onKeydownButton, "f"));
}, _ComboboxController_initInput = function _ComboboxController_initInput() {
    __classPrivateFieldGet(this, _ComboboxController_input, "f")?.removeEventListener('click', __classPrivateFieldGet(this, _ComboboxController_onClickButton, "f"));
    __classPrivateFieldGet(this, _ComboboxController_input, "f")?.removeEventListener('keyup', __classPrivateFieldGet(this, _ComboboxController_onKeyupInput, "f"));
    __classPrivateFieldGet(this, _ComboboxController_input, "f")?.removeEventListener('keydown', __classPrivateFieldGet(this, _ComboboxController_onKeydownInput, "f"));
    __classPrivateFieldSet(this, _ComboboxController_input, this.options.getComboboxInput(), "f");
    if (__classPrivateFieldGet(this, _ComboboxController_input, "f") && !('value' in __classPrivateFieldGet(this, _ComboboxController_input, "f"))) {
        throw new Error(`ComboboxController getToggleInput() option must return an element with a value property`);
    }
    else if (__classPrivateFieldGet(this, _ComboboxController_input, "f")) {
        __classPrivateFieldGet(this, _ComboboxController_input, "f").role = 'combobox';
        __classPrivateFieldGet(this, _ComboboxController_button, "f").role = __classPrivateFieldGet(this, _ComboboxController_buttonInitialRole, "f");
        __classPrivateFieldGet(this, _ComboboxController_input, "f").setAttribute('aria-autocomplete', 'both');
        __classPrivateFieldGet(this, _ComboboxController_input, "f").setAttribute('aria-controls', __classPrivateFieldGet(this, _ComboboxController_listbox, "f")?.id ?? '');
        __classPrivateFieldGet(this, _ComboboxController_input, "f").addEventListener('click', __classPrivateFieldGet(this, _ComboboxController_onClickButton, "f"));
        __classPrivateFieldGet(this, _ComboboxController_input, "f").addEventListener('keyup', __classPrivateFieldGet(this, _ComboboxController_onKeyupInput, "f"));
        __classPrivateFieldGet(this, _ComboboxController_input, "f").addEventListener('keydown', __classPrivateFieldGet(this, _ComboboxController_onKeydownInput, "f"));
    }
}, _ComboboxController_initLabels = function _ComboboxController_initLabels() {
    const labels = InternalsController.getLabels(this.host)
        ?? __classPrivateFieldGet(this, _ComboboxController_instances, "a", _ComboboxController_element_get)?.ariaLabelledByElements
        ?? [];
    const label = this.options.getFallbackLabel()
        || __classPrivateFieldGet(this, _ComboboxController_instances, "a", _ComboboxController_element_get)?.ariaLabelledByElements?.map(x => x.textContent).join('')
        || null;
    for (const element of [__classPrivateFieldGet(this, _ComboboxController_button, "f"), __classPrivateFieldGet(this, _ComboboxController_listbox, "f"), __classPrivateFieldGet(this, _ComboboxController_input, "f")].filter(x => !!x)) {
        if ('ariaLabelledByElements' in HTMLElement.prototype && labels.filter(x => !!x).length) {
            element.ariaLabelledByElements = [...labels ?? []];
        }
        else {
            element.ariaLabel = label;
        }
    }
}, _ComboboxController_initController = function _ComboboxController_initController() {
    __classPrivateFieldGet(this, _ComboboxController_fc, "f")?.hostDisconnected();
    const { getOrientation } = this.options;
    const getItems = () => this.items;
    const getItemsContainer = () => __classPrivateFieldGet(this, _ComboboxController_listbox, "f");
    if (__classPrivateFieldGet(this, _ComboboxController_instances, "a", _ComboboxController_hasTextInput_get)) {
        __classPrivateFieldSet(this, _ComboboxController_fc, ActivedescendantController.of(this.host, {
            getItems, getItemsContainer, getOrientation,
            getActiveDescendantContainer: () => __classPrivateFieldGet(this, _ComboboxController_input, "f"),
            getControlsElements: () => [
                this.options.getToggleButton(),
                this.options.getComboboxInput(),
            ].filter(x => !!x),
            setItemActive: this.options.setItemActive,
        }), "f");
    }
    else {
        __classPrivateFieldSet(this, _ComboboxController_fc, RovingTabindexController.of(this.host, {
            getItems, getItemsContainer, getOrientation,
            getControlsElements: () => [
                this.options.getToggleButton(),
            ].filter(x => !!x),
        }), "f");
    }
}, _ComboboxController_initItems = function _ComboboxController_initItems() {
    if (__classPrivateFieldGet(this, _ComboboxController_listbox, "f")) {
        this.items = this.options.getItems();
    }
}, _ComboboxController_show = async function _ComboboxController_show() {
    const success = await this.options.requestShowListbox();
    __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_filterItems).call(this);
    if (success !== false && !__classPrivateFieldGet(this, _ComboboxController_instances, "a", _ComboboxController_hasTextInput_get)) {
        if (!__classPrivateFieldGet(this, _ComboboxController_preventListboxGainingFocus, "f")) {
            (__classPrivateFieldGet(this, _ComboboxController_instances, "a", _ComboboxController_focusedItem_get) ?? __classPrivateFieldGet(this, _ComboboxController_fc, "f")?.items.at(0))?.focus();
            __classPrivateFieldSet(this, _ComboboxController_preventListboxGainingFocus, false, "f");
        }
    }
}, _ComboboxController_hide = async function _ComboboxController_hide() {
    await this.options.requestHideListbox();
}, _ComboboxController_toggle = async function _ComboboxController_toggle() {
    if (this.options.isExpanded()) {
        return __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_hide).call(this);
    }
    else {
        return __classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_show).call(this);
    }
}, _ComboboxController_translate = function _ComboboxController_translate(key, lang) {
    const strings = __classPrivateFieldGet(this, _ComboboxController_microcopy, "f").get(key);
    return strings?.[lang] ?? key;
}, _ComboboxController_announce = function _ComboboxController_announce(item) {
    const value = this.options.getItemValue(item);
    __classPrivateFieldGet(_a, _a, "f", _ComboboxController_alert)?.remove();
    const fragment = __classPrivateFieldGet(_a, _a, "f", _ComboboxController_alertTemplate).content.cloneNode(true);
    __classPrivateFieldSet(_a, _a, fragment.firstElementChild, "f", _ComboboxController_alert);
    let text = value;
    const lang = deepClosest(__classPrivateFieldGet(this, _ComboboxController_listbox, "f"), '[lang]')?.getAttribute('lang') ?? 'en';
    const langKey = lang?.match(_a.langsRE)?.at(0) ?? 'en';
    if (this.options.isItemDisabled(item)) {
        text += ` (${__classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_translate).call(this, 'dimmed', langKey)})`;
    }
    if (__classPrivateFieldGet(this, _ComboboxController_lb, "f").isSelected(item)) {
        text += `, (${__classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_translate).call(this, 'selected', langKey)})`;
    }
    if (item.hasAttribute('aria-setsize') && item.hasAttribute('aria-posinset')) {
        if (langKey === 'ja') {
            text += `, (${item.getAttribute('aria-setsize')} 件中 ${item.getAttribute('aria-posinset')} 件目)`;
        }
        else {
            text += `, (${item.getAttribute('aria-posinset')} ${__classPrivateFieldGet(this, _ComboboxController_instances, "m", _ComboboxController_translate).call(this, 'of', langKey)} ${item.getAttribute('aria-setsize')})`;
        }
    }
    __classPrivateFieldGet(_a, _a, "f", _ComboboxController_alert).lang = lang;
    __classPrivateFieldGet(_a, _a, "f", _ComboboxController_alert).innerText = text;
    document.body.append(__classPrivateFieldGet(_a, _a, "f", _ComboboxController_alert));
}, _ComboboxController_filterItems = function _ComboboxController_filterItems() {
    if (__classPrivateFieldGet(this, _ComboboxController_input, "f")) {
        let value;
        for (const item of this.items) {
            const hidden = !!this.options.isExpanded()
                && !!(value = this.options.getComboboxValue(__classPrivateFieldGet(this, _ComboboxController_input, "f")))
                && this.options.isItemFiltered?.(item, value)
                || false;
            this.options.setItemHidden(item, hidden);
        }
    }
};
_ComboboxController_alert = { value: void 0 };
_ComboboxController_alertTemplate = { value: document.createElement('template') };
ComboboxController.langs = [
    'en',
    'es',
    'de',
    'fr',
    'it',
    'ja',
    'zh',
];
ComboboxController.langsRE = new RegExp(_a.langs.join('|'));
(() => {
    // apply visually-hidden styles
    __classPrivateFieldGet(_a, _a, "f", _ComboboxController_alertTemplate).innerHTML = `
      <div role="alert" style="
         border: 0;
         clip: rect(0, 0, 0, 0);
         block-size: 1px;
         margin: -1px;
         overflow: hidden;
         padding: 0;
         position: absolute;
         white-space: nowrap;
         inline-size: 1px;
        "></div>
      `;
})();
//# sourceMappingURL=combobox-controller.js.map