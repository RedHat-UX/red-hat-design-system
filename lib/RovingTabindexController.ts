import type { ReactiveController, ReactiveControllerHost } from 'lit';

/**
 * Implements roving tabindex, as described in
 * [Managing Focus Within Components Using a Roving tabindex
]{@link https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex}
 */
export class RovingTabindexController implements ReactiveController {
  /** active focusable element */
  private _activeItem:HTMLElement | undefined;
  /** array of all focusable elements */
  private _items:Array<HTMLElement | undefined> = [];

  constructor(public host: ReactiveControllerHost & HTMLElement) {
    this.host.addController(this);
  }

  /**
   * active item of array of items
   */
  get activeItem():HTMLElement | undefined {
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
    const active:number = this.#getActiveIndex(item as HTMLFormElement | HTMLAnchorElement) || 0;
    const select = !!item && item.tagName === 'SELECT' ? item as HTMLSelectElement : undefined;
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
      if (index > -1) { item = items[index] as HTMLFormElement | HTMLAnchorElement; }
    }
    this.focusOnItem(item as HTMLFormElement | HTMLAnchorElement);

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  /**
   * sets tabindex of item based on whether or not it is active
   * @param item
   */
  #updateActiveItem(item:HTMLFormElement | HTMLAnchorElement | undefined):void {
    if (item) {
      if (!!this._activeItem && item !== this._activeItem) { this._activeItem.tabIndex = -1; }
      item.tabIndex = 0;
      this._activeItem = item;
    }
  }

  /**
   * finds focusable items from a group of items
   */
  #getFocusableItems():Array<HTMLElement | undefined> {
    const items = this._items as Array<HTMLFormElement | HTMLAnchorElement>;
    return items.filter(item=>!!item && !item.ariaDisabled && !item.hidden && !item.ariaHidden && !item.hasAttribute('hidden'));
  }

  /**
   * finds index of given item
   * @param item
   */
  #getActiveIndex(item:HTMLFormElement | HTMLAnchorElement):number {
    return this._items.indexOf(item);
  }

  /**
   * focuses on an item and sets it as active
   */
  focusOnItem(item:HTMLFormElement | HTMLAnchorElement | undefined = undefined):void {
    const focusableItems = this.#getFocusableItems() as Array<HTMLFormElement | HTMLAnchorElement>;
    this.#updateActiveItem(item || focusableItems[0]);
    if (this._activeItem) {
      this._activeItem?.focus();
    }
  }

  /**
   * can be used to update list of items if items are added, or change whether they are focusable
   */
  updateItems() {
    const focusableItems = this.#getFocusableItems() as Array<HTMLFormElement | HTMLAnchorElement>;
    const items = this._items as Array<HTMLFormElement>;
    const index = this._activeItem ? Math.max(0, items.indexOf(this._activeItem as HTMLFormElement)) || 0 : 0;
    let focusableItem:HTMLFormElement | undefined;
    [...items.slice(index), ...items.slice(0, index)].forEach(btn=>{
      if (!focusableItem && focusableItems.includes(btn)) {
        focusableItem = btn;
      }
    });
    this.#updateActiveItem(focusableItem);
  }

  /**
   * from array of HTML items, and sets active items
   * @param items
   */
  initItems(items:Array<HTMLElement | undefined>) {
    this._items = items;

    const [focusableItem,] = this.#getFocusableItems() as Array<HTMLFormElement>;
    this._activeItem = focusableItem;
    if (this._activeItem) { this._activeItem.tabIndex = 0; }
  }

  async hostConnected() {
    this.host.addEventListener('keydown', this.#handleKeys.bind(this));
  }
}
