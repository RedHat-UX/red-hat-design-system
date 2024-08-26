import type { ReactiveControllerHost } from 'lit';
import { type ATFocusControllerOptions, ATFocusController } from './at-focus-controller.js';
import { nothing } from 'lit';
export interface ActivedescendantControllerOptions<Item extends HTMLElement> extends ATFocusControllerOptions<Item> {
    /**
     * Returns a reference to the element which acts as the assistive technology container for
     * the items. In the case of a combobox, this is the input element.
     */
    getActiveDescendantContainer(): HTMLElement | null;
    /**
     * Optional callback to control the assistive technology focus behavior of items.
     * By default, ActivedescendantController will not do anything special to items when they receive
     * assistive technology focus, and will only set the `activedescendant` property on the container.
     * If you provide this callback, ActivedescendantController will call it on your item with the
     * active state. You may use this to set active styles.
     */
    setItemActive?(item: Item, active: boolean): void;
    /**
     * Optional callback to retrieve the value from an option element.
     * By default, retrieves the `value` attribute, or the text content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement
     */
    getItemValue?(item: Item): string;
}
/**
 * Implements activedescendant pattern, as described in WAI-ARIA practices,
 * [Managing Focus in Composites Using aria-activedescendant][ad]
 *
 * The steps for using the aria-activedescendant method of managing focus are as follows.
 *
 *  - When the container element that has a role that supports aria-activedescendant is loaded
 *    or created, ensure that:
 *    - The container element is included in the tab sequence as described in
 *      Keyboard Navigation Between Components or is a focusable element of a composite
 *      that implements a roving tabindex.
 *    - It has aria-activedescendant="IDREF" where IDREF is the ID of the element within
 *      the container that should be identified as active when the widget receives focus.
 *      The referenced element needs to meet the DOM relationship requirements described below.
 *  - When the container element receives DOM focus, draw a visual focus indicator on the active
 *    element and ensure the active element is scrolled into view.
 *  - When the composite widget contains focus and the user presses a navigation key that moves
 *    focus within the widget, such as an arrow key:
 *    - Change the value of aria-activedescendant on the container to refer to the element
 *      that should be reported to assistive technologies as active.
 *    - Move the visual focus indicator and, if necessary, scrolled the active element into view.
 *  - If the design calls for a specific element to be focused the next time a user moves focus
 *    into the composite with Tab or Shift+Tab, check if aria-activedescendant is referring to
 *    that target element when the container loses focus. If it is not, set aria-activedescendant
 *    to refer to the target element.
 *
 * The specification for aria-activedescendant places important restrictions on the
 * DOM relationship between the focused element that has the aria-activedescendant attribute
 * and the element referenced as active by the value of the attribute.
 * One of the following three conditions must be met.
 *
 * 1. The element referenced as active is a DOM descendant of the focused referencing element.
 * 2. The focused referencing element has a value specified for the aria-owns property that
 *    includes the ID of the element referenced as active.
 * 3. The focused referencing element has role of combobox, textbox, or searchbox
 *    and has aria-controls property referring to an element with a role that supports
 *    aria-activedescendant and either:
 *   1. The element referenced as active is a descendant of the controlled element.
 *   2. The controlled element has a value specified for the aria-owns property that includes
 *      the ID of the element referenced as active.
 *
 * [ad]: https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_focus_activedescendant
 */
export declare class ActivedescendantController<Item extends HTMLElement = HTMLElement> extends ATFocusController<Item> {
    #private;
    host: ReactiveControllerHost;
    protected options: ActivedescendantControllerOptions<Item>;
    /**
     * When true, the browser supports cross-root ARIA such that the controller does not need
     * to copy item nodes into the controlling nodes' root
     */
    static get supportsCrossRootActiveDescendant(): boolean;
    static of<Item extends HTMLElement>(host: ReactiveControllerHost, options: ActivedescendantControllerOptions<Item>): ActivedescendantController<Item>;
    get atFocusedItemIndex(): number;
    /**
     * Rather than setting DOM focus, applies the `aria-activedescendant` attribute,
     * using AriaIDLAttributes for cross-root aria, if supported by the browser
     * @param item item
     */
    set atFocusedItemIndex(index: number);
    protected get controlsElements(): HTMLElement[];
    protected set controlsElements(elements: HTMLElement[]);
    /** All items */
    get items(): Item[];
    /**
     * Sets the list of items and activates the next activatable item after the current one
     * @param items tabindex items
     */
    set items(items: Item[]);
    private constructor();
    protected initItems(): void;
    hostDisconnected(): void;
    protected onKeydown(event: KeyboardEvent): void;
    renderItemsToShadowRoot(): typeof nothing | Node[];
}
