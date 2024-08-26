import type { ReactiveController, ReactiveControllerHost } from 'lit';
/**
 * Options for listbox controller
 */
export interface ListboxControllerOptions<Item extends HTMLElement> {
    /**
     * Whether the listbox supports multiple selections.
     */
    multi?: boolean;
    /**
     * Optional callback to control the selection behavior of items. By default, ListboxController
     * will set the `aria-selected` attribute. When overriding this option, it will call it on your
     * element with the selected state.
     * Callers **must** ensure that the correct ARIA state is set.
     */
    setItemSelected?(item: Item, selected: boolean): void;
    /**
     * Optional predicate to ascertain whether a custom element item is disabled or not
     * By default, if the item matches any of these conditions, it is considered disabled:
     * 1. it's `disabled` DOM property is `true`
     * 1. it has the `aria-disabled="true"` attribute
     * 2. it has the `disabled` attribute present
     * 3. it matches the `:disabled` pseudo selector
     */
    isItemDisabled?(item: Item): boolean;
    /**
     * Predicate which determines if a given element is in fact an item
     * instead of e.g a presentational divider. By default, elements must meet the following criteria
     * 1. element a child of a listbox role,
     * 2. element does not have role="presentation"
     * 2. element is not an `<hr>`
     * **NB**: When overriding, you must avoid outside references. This predicate must
     * only consider the element itself, without reference to the host element's items array.
     * @example ```js
     *          isItem: (item) => item instanceof MyCustomItem
     *          ```
     */
    isItem?(item: EventTarget | null): item is Item;
    /**
     * Function returning the item which currently has assistive technology focus.
     * In most cases, this should be the `atFocusedItem` of an ATFocusController
     * i.e. RovingTabindexController or ActivedescendantController.
     *
     */
    getATFocusedItem(): Item | null;
    /**
     * Function returning the DOM node which is the direct parent of the item elements
     * Defaults to the controller host.
     * If the controller host is not an HTMLElement, this *must* be set
     */
    getItemsContainer?(): HTMLElement | null;
    /**
     * Optional function returning an additional DOM node which controls the listbox, e.g.
     * a combobox input.
     */
    getControlsElements?(): HTMLElement[];
}
/**
 * @param item possible disabled item
 * @package do not import this outside of `@patternfly/pfe-core`, it is subject to change at any time
 */
export declare function isItem<Item extends HTMLElement>(item: EventTarget | null): item is Item;
/**
 * This is a fib. aria-disabled might not be present on an element that uses internals,
 * and the `disabled` attribute may not accurately represent the disabled state.
 * short of patching the `attachInternals` constructor, it may not be possible at
 * runtime to know with certainty that an arbitrary custom element is disabled or not.
 * @param item possibly disabled item
 * @package do not import this outside of `@patternfly/pfe-core`, it is subject to change at any time
 */
export declare function isItemDisabled<Item extends HTMLElement>(item: Item): boolean;
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
export declare class ListboxController<Item extends HTMLElement> implements ReactiveController {
    #private;
    host: ReactiveControllerHost;
    private static instances;
    static of<Item extends HTMLElement>(host: ReactiveControllerHost, options: ListboxControllerOptions<Item>): ListboxController<Item>;
    /** Whether listbox is disabled */
    disabled: boolean;
    get container(): HTMLElement;
    get multi(): boolean;
    set multi(v: boolean);
    get items(): Item[];
    /**
     * register's the host's Item elements as listbox controller items
     * sets aria-setsize and aria-posinset on items
     * @param items items
     */
    set items(items: Item[]);
    /**
     * sets the listbox value based on selected options
     * @param selected item or items
     */
    set selected(selected: Item[]);
    /**
     * array of options which are selected
     */
    get selected(): Item[];
    private constructor();
    hostConnected(): Promise<void>;
    hostUpdate(): void;
    hostUpdated(): void;
    hostDisconnected(): void;
    isSelected(item: Item): boolean;
}
