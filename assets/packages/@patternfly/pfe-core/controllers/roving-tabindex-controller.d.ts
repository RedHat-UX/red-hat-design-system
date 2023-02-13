import type { ReactiveController, ReactiveControllerHost } from 'lit';
/**
 * Implements roving tabindex, as described in WAI-ARIA practices, [Managing Focus Within
 * Components Using a Roving
 * tabindex](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex)
 */
export declare class RovingTabindexController implements ReactiveController {
    #private;
    host: ReactiveControllerHost & HTMLElement;
    /**
     * active item of array of items
     */
    get activeItem(): HTMLElement | undefined;
    /**
     * first item in array of focusable items
     */
    get firstItem(): HTMLElement | undefined;
    /**
     * last item in array of focusable items
     */
    get lastItem(): HTMLElement | undefined;
    /**
     * next item  after active item in array of focusable items
     */
    get nextItem(): HTMLElement | undefined;
    /**
     * previous item  after active item in array of focusable items
     */
    get prevItem(): HTMLElement | undefined;
    constructor(host: ReactiveControllerHost & HTMLElement);
    /**
     * sets tabindex of item based on whether or not it is active
     */
    updateActiveItem(item?: HTMLElement): void;
    /**
     * focuses on an item and sets it as active
     */
    focusOnItem(item?: HTMLElement): void;
    /**
     * Focuses next focusable item
     */
    updateItems(items: HTMLElement[]): void;
    /**
     * from array of HTML items, and sets active items
     */
    initItems(items: HTMLElement[]): void;
    hostConnected(): void;
}
