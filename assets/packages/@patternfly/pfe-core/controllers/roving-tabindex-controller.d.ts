import type { ReactiveController, ReactiveControllerHost } from 'lit';
export interface RovingTabindexControllerOptions<Item extends HTMLElement> {
    /** @deprecated use getHTMLElement */
    getElement?: () => Element | null;
    getHTMLElement?: () => HTMLElement | null;
    getItems?: () => Item[];
    getItemContainer?: () => HTMLElement;
}
/**
 * Implements roving tabindex, as described in WAI-ARIA practices, [Managing Focus Within
 * Components Using a Roving tabindex][rti]
 *
 * [rti]: https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex
 */
export declare class RovingTabindexController<Item extends HTMLElement = HTMLElement> implements ReactiveController {
    #private;
    host: ReactiveControllerHost;
    private static hosts;
    static of<Item extends HTMLElement>(host: ReactiveControllerHost, options: RovingTabindexControllerOptions<Item> & {
        getItems(): Item[];
    }): RovingTabindexController<Item>;
    /** @internal */
    static elements: WeakMap<Element, RovingTabindexController<HTMLElement>>;
    /**
     * active item of array of items
     */
    get activeItem(): Item | undefined;
    /**
     * all items from array
     */
    get items(): Item[];
    /**
     * all focusable items from array
     */
    get focusableItems(): Item[];
    /**
     * first item in array of focusable items
     */
    get firstItem(): Item | undefined;
    /**
     * last item in array of focusable items
     */
    get lastItem(): Item | undefined;
    /**
     * next item  after active item in array of focusable items
     */
    get nextItem(): Item | undefined;
    /**
     * previous item  after active item in array of focusable items
     */
    get prevItem(): Item | undefined;
    constructor(host: ReactiveControllerHost, options?: RovingTabindexControllerOptions<Item>);
    hostUpdated(): void;
    /**
     * removes event listeners from items container
     */
    hostDisconnected(): void;
    /**
     * Sets the active item and focuses it
     */
    setActiveItem(item?: Item): void;
    /**
     * Focuses next focusable item
     */
    updateItems(items?: Item[]): void;
    /** @deprecated use setActiveItem */
    focusOnItem(item?: Item): void;
    /**
     * from array of HTML items, and sets active items
     * @deprecated: use getItems and getItemContainer option functions
     */
    initItems(items: Item[], itemsContainer?: Element): void;
}
