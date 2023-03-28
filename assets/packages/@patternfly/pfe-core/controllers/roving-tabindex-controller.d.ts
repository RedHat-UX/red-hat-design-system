import type { ReactiveController, ReactiveControllerHost } from 'lit';
/**
 * Implements roving tabindex, as described in WAI-ARIA practices, [Managing Focus Within
 * Components Using a Roving
 * tabindex](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex)
 */
export declare class RovingTabindexController<ItemType extends HTMLElement = HTMLElement> implements ReactiveController {
    #private;
    host: ReactiveControllerHost & HTMLElement;
    /**
     * active item of array of items
     */
    get activeItem(): ItemType | undefined;
    /**
     * first item in array of focusable items
     */
    get firstItem(): ItemType | undefined;
    /**
     * last item in array of focusable items
     */
    get lastItem(): ItemType | undefined;
    /**
     * next item  after active item in array of focusable items
     */
    get nextItem(): ItemType | undefined;
    /**
     * previous item  after active item in array of focusable items
     */
    get prevItem(): ItemType | undefined;
    constructor(host: ReactiveControllerHost & HTMLElement);
    /**
     * sets tabindex of item based on whether or not it is active
     */
    updateActiveItem(item?: ItemType): void;
    /**
     * focuses on an item and sets it as active
     */
    focusOnItem(item?: ItemType): void;
    /**
     * Focuses next focusable item
     */
    updateItems(items: ItemType[]): void;
    /**
     * from array of HTML items, and sets active items
     */
    initItems(items: ItemType[], itemsContainer?: HTMLElement): void;
    /**
     * adds event listeners to items container
     */
    hostConnected(): void;
    /**
     * removes event listeners from items container
     */
    hostDisconnected(): void;
}
