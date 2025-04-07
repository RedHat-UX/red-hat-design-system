import { type ReactiveControllerHost } from 'lit';
import { ATFocusController, type ATFocusControllerOptions } from './at-focus-controller.js';
export type RovingTabindexControllerOptions<Item extends HTMLElement> = ATFocusControllerOptions<Item>;
/**
 * Implements roving tabindex, as described in WAI-ARIA practices, [Managing Focus Within
 * Components Using a Roving tabindex][rti]
 *
 * [rti]: https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex
 */
export declare class RovingTabindexController<Item extends HTMLElement = HTMLElement> extends ATFocusController<Item> {
    #private;
    host: ReactiveControllerHost;
    static of<Item extends HTMLElement>(host: ReactiveControllerHost, options: RovingTabindexControllerOptions<Item>): RovingTabindexController<Item>;
    get atFocusedItemIndex(): number;
    /**
     * Sets the DOM Focus on the item with assistive technology focus
     * @param item item
     */
    set atFocusedItemIndex(index: number);
    get items(): Item[];
    set items(items: Item[]);
    private constructor();
    protected onKeydown(event: KeyboardEvent): void;
}
