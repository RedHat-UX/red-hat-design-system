import type { ReactiveController, ReactiveControllerHost } from 'lit';

/**
 * Implements roving tabindex, as described in
 * [Managing Focus Within Components Using a Roving tabindex
]{@link https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex}
 */

export type FocusableElement = (HTMLFormElement | HTMLAnchorElement | HTMLSelectElement);
export type FocusableElements = Array<FocusableElement>;

export class RovingTabindexController implements ReactiveController {
  /** active focusable element */
  private _activeItem?:FocusableElement;
  /** array of all focusable elements */
  private _items?:FocusableElements = [];

  constructor(public host: ReactiveControllerHost & HTMLElement) {
    this.host.addController(this);
  }

  /**
   * active item of array of items
   */
  get activeItem():FocusableElement | undefined {
    return this._activeItem;
  }

  /**
   * handles keyboard navigation
   * @param event
   */
  #handleKeys(event:KeyboardEvent):void {
    let item = this._activeItem;
    let index = -1;
    let flag = false;
    const items = this.#getFocusableItems();
    const active:number = this.#getActiveIndex(item) || 0;
    const select = !!item && item.tagName === 'SELECT' ? item : undefined;
    const menu = !!item && item.getAttribute('aria-expanded') === 'true' ? item : undefined;
    const spin = !!item && item.getAttribute('role') === 'spinbutton' ? item : undefined;

    if (event.ctrlKey || event.altKey || event.metaKey) { return; }
    if (items.length > 0) {
      switch (event.key) {
        case 'ArrowLeft':
          index = active > 0 ? active - 1 : items.length - 1;
          flag = true;
          break;
        case 'ArrowRight':
          index = active < items.length - 1 ? active + 1 : 0;
          flag = true;
          break;
        case 'ArrowDown':
          if (select || menu || spin) { return; }
          index = active > 0 ? active - 1 : items.length - 1;
          flag = true;
          break;
        case 'ArrowUp':
          if (select || menu || spin) { return; }
          index = active < items.length - 1 ? active + 1 : 0;
          flag = true;
          break;
        case 'Home':
          index = 0;
          flag = true;
          break;
        case 'PageUp':
          if (select || menu || spin) { return; }
          index = 0;
          flag = true;
          break;
        case 'End':
          index = items.length - 1;
          flag = true;
          break;
        case 'PageDown':
          if (select || menu || spin) { return; }
          index = items.length - 1;
          flag = true;
          break;
        default:
          break;
      }
      if (index > -1) { item = items[index]; }
    }
    this.focusOnItem(item);

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  /**
   * sets tabindex of item based on whether or not it is active
   * @param item
   */
  #updateActiveItem(item:FocusableElement):void {
    if (item) {
      if (!!this._activeItem && item !== this._activeItem) { this._activeItem.tabIndex = -1; }
      item.tabIndex = 0;
      this._activeItem = item;
    }
  }

  /**
   * finds focusable items from a group of items
   */
  #getFocusableItems():FocusableElements {
    const items = this._items;
    return items ? items.filter(item=>!!item && !item.ariaDisabled && !item.hidden && !item.ariaHidden && !item.hasAttribute('hidden')) : [];
  }

  /**
   * finds index of given item
   * @param item
   */
  #getActiveIndex(item:FocusableElement | undefined):number {
    return !!this._items && !!item ? this._items.indexOf(item) : -1;
  }

  /**
   * focuses on an item and sets it as active
   */
  focusOnItem(item:FocusableElement | undefined = undefined):void {
    const focusableItems = this.#getFocusableItems();
    this.#updateActiveItem(item || focusableItems[0]);
    if (this._activeItem) {
      this._activeItem?.focus();
    }
  }

  /**
   * can be used to update list of items if items are added, or change whether they are focusable
   */
  updateItems() {
    const focusableItems = this.#getFocusableItems();
    const items = this._items || [];
    const index = this._activeItem ? Math.max(0, this.#getActiveIndex(this._activeItem)) : 0;
    let focusableItem:FocusableElement;
    [...items.slice(index), ...items.slice(0, index)].forEach(btn=>{
      if (!focusableItem && focusableItems.includes(btn)) {
        focusableItem = btn;
        this.#updateActiveItem(focusableItem);
      }
    });
  }

  /**
   * from array of HTML items, and sets active items
   * @param items
   */
  initItems(items:FocusableElements) {
    this._items = items;

    const [focusableItem,] = this.#getFocusableItems();
    this._activeItem = focusableItem;
    if (this._activeItem) { this._activeItem.tabIndex = 0; }
  }

  async hostConnected() {
    this.host.addEventListener('keydown', this.#handleKeys.bind(this));
  }
}
