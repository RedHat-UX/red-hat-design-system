import type { ReactiveController, ReactiveControllerHost } from 'lit';

/**
 * Implements roving tabindex, as described in
 * [Managing Focus Within Components Using a Roving tabindex
]{@link https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex}
 */
export class RovingTabindexController implements ReactiveController {
  /** active focusable element */
  public activeItem:HTMLElement | undefined;
  /** array of all focusable elements */
  private _items:Array<HTMLElement | undefined> = [];

  constructor(public host: ReactiveControllerHost & HTMLElement) {
    this.host.addController(this);
  }

  #handleKeys(event:KeyboardEvent):void {
    let item = this.activeItem;
    let index = -1;
    let flag = false;
    const items = this.getActiveItems();
    const active:number = this.getActiveIndex(item as HTMLFormElement | HTMLAnchorElement) || 0;
    const select = !!item && item.tagName === 'SELECT' ? item as HTMLSelectElement : undefined;
    const menu = !!item && item.getAttribute('aria-expanded') === 'true' ? item : undefined;
    const spin = !!item && item.getAttribute('role') === 'spinitem' ? item : undefined;

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

  #updateActiveItem(item:HTMLFormElement | HTMLAnchorElement | undefined):void {
    if (item) {
      if (!!this.activeItem && item !== this.activeItem) { this.activeItem.tabIndex = -1; }
      item.tabIndex = 0;
      this.activeItem = item;
    }
  }

  focusOnItem(item:HTMLFormElement | HTMLAnchorElement | undefined):void {
    this.#updateActiveItem(item);
    if (this.activeItem) {
      this.activeItem?.focus();
    }
  }

  getActiveItems():Array<HTMLElement | undefined> {
    const items = this._items as Array<HTMLFormElement | HTMLAnchorElement>;
    return items.filter(item=>!!item && !item.ariaDisabled && !item.hidden && !item.ariaHidden && !item.hasAttribute('hidden'));
  }

  getActiveIndex(item:HTMLFormElement | HTMLAnchorElement):number {
    return this._items.indexOf(item);
  }

  updateItems() {
    const activeitems = this.getActiveItems() as Array<HTMLFormElement | HTMLAnchorElement>;
    const items = this._items as Array<HTMLFormElement>;
    const index = this.activeItem ? Math.max(0, items.indexOf(this.activeItem as HTMLFormElement)) || 0 : 0;
    let activeItem:HTMLFormElement | undefined;
    [...items.slice(index), ...items.slice(0, index)].forEach(btn=>{
      if (!activeItem && activeitems.includes(btn)) {
        activeItem = btn;
      }
    });
    this.#updateActiveItem(activeItem);
  }

  initItems(items:Array<HTMLElement | undefined>) {
    this._items = items;

    const [activeItem,] = this.getActiveItems() as Array<HTMLFormElement>;
    this.activeItem = activeItem;
    if (this.activeItem) { this.activeItem.tabIndex = 0; }
  }

  async hostConnected() {
    this.host.addEventListener('keydown', this.#handleKeys.bind(this));
  }
}
