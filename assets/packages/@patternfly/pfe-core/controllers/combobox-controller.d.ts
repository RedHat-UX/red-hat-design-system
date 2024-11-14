import { nothing, type ReactiveController, type ReactiveControllerHost } from 'lit';
import type { ActivedescendantControllerOptions } from './activedescendant-controller.js';
import type { RovingTabindexControllerOptions } from './roving-tabindex-controller.js';
import type { ListboxControllerOptions } from './listbox-controller.js';
type AllOptions<Item extends HTMLElement> = ActivedescendantControllerOptions<Item> & ListboxControllerOptions<Item> & RovingTabindexControllerOptions<Item>;
export interface ComboboxControllerOptions<Item extends HTMLElement> extends Omit<AllOptions<Item>, 'getATFocusedItem' | 'getControlsElements' | 'getActiveDescendantContainer' | 'getItemsContainer'> {
    /**
     * Predicate which establishes whether the listbox is expanded
     * e.g. `isExpanded: () => this.expanded`, if the host's `expanded` property
     * should correspond to the listbox expanded state.
     */
    isExpanded(): boolean;
    /**
     * Callback which the host must implement to change the expanded state to true.
     * Return or resolve false to prevent the change.
     */
    requestShowListbox(): void | boolean | Promise<boolean> | Promise<void>;
    /**
     * Callback which the host must implement to change the expanded to false.
     * Return or resolve false to prevent the default.
     */
    requestHideListbox(): void | boolean | Promise<boolean> | Promise<void>;
    /**
     * Returns the listbox container element
     */
    getListboxElement(): HTMLElement | null;
    /**
     * Returns the toggle button, if it exists
     */
    getToggleButton(): HTMLElement | null;
    /**
     * Returns the combobox input, if it exists
     */
    getComboboxInput(): HTMLElement | null;
    /**
     * Returns the label for the toggle button, combobox input, and listbox.
     * when `ariaLabelledByElements` is supported, the label elements associated with
     * the host element are used instead, and this value is ignored.
     */
    getFallbackLabel(): string;
    /**
     * Called on an item to retrieve it's value string. By default, returns the `value` property
     * of the item, as if it implemented the `<option>` element's interface.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement
     */
    getItemValue?(item: Item): string;
    /**
     * Optional callback, called on the combobox input element to set its value.
     * by default, returns the element's `value` DOM property.
     */
    getComboboxValue?(combobox: HTMLElement): string;
    /**
     * Optional callback, called on the combobox input element to set its value.
     * by default, sets the element's `value` DOM property.
     */
    setComboboxValue?(item: HTMLElement, value: string): void;
    /**
     * Called on each item, with the combobox input, to determine if the item should be shown in the
     * listbox or filtered out. Return false to hide the item. By default, checks whether the item's
     * value starts with the input value (when both are lowercased).
     */
    isItemFiltered?(item: Item, value: string): boolean;
    /**
     * Called on each item when the filter changes.
     * By default, toggles the `hidden` attribute on the item
     */
    setItemHidden?(item: Item, hidden: boolean): void;
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
export declare class ComboboxController<Item extends HTMLElement> implements ReactiveController {
    #private;
    host: ReactiveControllerHost;
    static of<T extends HTMLElement>(host: ReactiveControllerHost, options: ComboboxControllerOptions<T>): ComboboxController<T>;
    /**
     * Whether the `ariaActiveDescendantElement` IDL attribute is supported for cross-root ARIA.
     */
    static get supportsCrossRootActiveDescendant(): boolean;
    private static langs;
    private static langsRE;
    private options;
    /** All items */
    get items(): Item[];
    set items(value: Item[]);
    /** Whether the combobox is disabled */
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Whether multiselect is enabled */
    get multi(): boolean;
    set multi(value: boolean);
    /** The current selection: a list of items */
    get selected(): Item[];
    set selected(value: Item[]);
    private constructor();
    hostConnected(): Promise<void>;
    hostUpdated(): void;
    hostDisconnected(): void;
    /**
     * For Browsers which do not support `ariaActiveDescendantElement`, we must clone
     * the listbox items into the same root as the combobox input
     * Call this method to return either an array of (cloned) list box items, to be placed in your
     * shadow template, or nothing in the case the browser supports cross-root aria.
     */
    renderItemsToShadowRoot(): Node[] | typeof nothing;
}
export {};
