import { type ReactiveControllerHost } from 'lit';
export interface ATFocusControllerOptions<Item extends HTMLElement> {
    /**
     * Callback to return the list of items
     */
    getItems(): Item[];
    /**
     * Callback to return the listbox container element
     */
    getItemsContainer?(): HTMLElement | null;
    /**
     * Callback to return the direction of navigation in the list box.
     */
    getOrientation?(): 'horizontal' | 'vertical' | 'both' | 'undefined';
    /**
     * Function returning the DOM nodes which are accessibility controllers of item container
     * e.g. the button toggle and combobox input which control a listbox.
     */
    getControlsElements?(): HTMLElement[];
}
export declare abstract class ATFocusController<Item extends HTMLElement> {
    #private;
    host: ReactiveControllerHost;
    protected options: ATFocusControllerOptions<Item>;
    protected _items: Item[];
    /** All items */
    abstract items: Item[];
    /**
     * Index of the Item which currently has assistive technology focus
     * Set this to change focus. Setting to an out-of-bounds value will
     * wrap around to the other side of the list.
     */
    get atFocusedItemIndex(): number;
    set atFocusedItemIndex(index: number);
    /** Elements which control the items container e.g. a combobox input */
    protected get controlsElements(): HTMLElement[];
    /** All items which are able to receive assistive technology focus */
    get atFocusableItems(): Item[];
    /** The element containing focusable items, e.g. a listbox */
    get itemsContainerElement(): HTMLElement | null;
    set itemsContainerElement(container: HTMLElement | null);
    constructor(host: ReactiveControllerHost, options: ATFocusControllerOptions<Item>);
    /**
     * Initialize the items and itemsContainerElement fields
     */
    protected initItems(): void;
    hostConnected(): void;
    hostDisconnected(): void;
    hostUpdate(): void;
    /**
     * Override and conditionally call `super.onKeydown` to filter out keyboard events
     * which should not result in a focus change. Ensure that subclass' method is bound
     * @param event keyboard event
     */
    protected onKeydown(event: KeyboardEvent): void;
}
