import type { ReactiveController, ReactiveControllerHost } from 'lit';
export interface ListboxAccessibilityController<Item extends HTMLElement> extends ReactiveController {
    items: Item[];
    activeItem?: Item;
    nextItem?: Item;
    prevItem?: Item;
    firstItem?: Item;
    lastItem?: Item;
    updateItems(items: Item[]): void;
    setActiveItem(item: Item): void;
}
/**
 * Filtering, multiselect, and orientation options for listbox
 */
export interface ListboxConfigOptions<T extends HTMLElement> {
    multi?: boolean;
    a11yController: ListboxAccessibilityController<T>;
    getHTMLElement(): HTMLElement | null;
    requestSelect(option: T, force?: boolean): boolean;
    isSelected(option: T): boolean;
}
/**
 * Implements listbox semantics and accesibility. As there are two recognized
 * patterns for implementing keyboard interactions with listbox patterns,
 * provide a secondary controller (either RovingTabindexController or
 * ActiveDescendantController) to complete the implementation.
 */
export declare class ListboxController<Item extends HTMLElement> implements ReactiveController {
    #private;
    host: ReactiveControllerHost;
    private _options;
    private static instances;
    static of<Item extends HTMLElement>(host: ReactiveControllerHost, options: ListboxConfigOptions<Item>): ListboxController<Item>;
    private constructor();
    /** Whether listbox is disabled */
    disabled: boolean;
    /** Current active descendant in listbox */
    get activeItem(): Item | undefined;
    get nextItem(): Item | undefined;
    get options(): Item[];
    /**
     * array of options which are selected
     */
    get selectedOptions(): Item[];
    get value(): Item | Item[];
    private get element();
    hostConnected(): Promise<void>;
    hostUpdated(): void;
    hostDisconnected(): void;
    /**
     * sets the listbox value based on selected options
     */
    setValue(value: Item | Item[]): void;
    /**
     * register's the host's Item elements as listbox controller items
     */
    setOptions(options: Item[]): void;
}
