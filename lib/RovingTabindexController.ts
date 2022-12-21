import type { ReactiveController, ReactiveControllerHost } from 'lit';
import { RhTooltip } from '../elements/rh-tooltip/rh-tooltip.js';

/**
 * Implements roving tabindex, as described in
 * [Managing Focus Within Components Using a Roving tabindex
]{@link https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex}
 */
export class RovingTabindexController implements ReactiveController {
  /** Heading level preceding component document, as in 1 for <h1>, 2 for <h2> etc. */
  public buttonQuery = '.toolbar-button';
  public tooltipQuery = 'rh-tooltip';
  public activeButton:HTMLElement | undefined;

  constructor(public host: ReactiveControllerHost & HTMLElement, buttonQuery: string) {
    this.host.addController(this);
    this.buttonQuery = buttonQuery;
  }

  #getMatchingChildren():Array<HTMLElement> {
    const query = this.host.shadowRoot ? this.host.shadowRoot.querySelectorAll(
      this.buttonQuery
    ) as NodeListOf<HTMLElement> : [];
    return [...query];
  }

  #getActiveChildren():Array<HTMLFormElement> {
    const buttons = this.#getMatchingChildren() as Array<HTMLFormElement>;
    return buttons.filter(button=>!button.ariaDisabled && !button.hidden && !button.ariaHidden && !button.hasAttribute('hidden'));
  }

  #getActiveIndex(buttonId:string):number {
    return this.#getMatchingChildren().map(button=>button.id).indexOf(buttonId);
  }

  #handleKeys(event:KeyboardEvent):void {
    let button = this.activeButton;
    let index:number;
    let flag = false;
    const buttons:Array<HTMLElement> = this.#getActiveChildren();
    const active:number = this.#getActiveIndex(button ? button.id : '') || 0;
    const input = !!button && button.tagName === 'INPUT' ? button as HTMLInputElement : undefined;
    const range = !!input && input.type === 'range';
    const select = !!button && button.tagName === 'SELECT' ? button as HTMLSelectElement : undefined;
    const menu = !!button && button.getAttribute('aria-expanded') === 'true' ? button : undefined;
    const spin = !!button && button.getAttribute('role') === 'spinbutton' ? button : undefined;

    if (event.ctrlKey || event.altKey || event.metaKey) { return; }
    if (buttons.length > 0) {
      switch (event.key) {
        case 'ArrowLeft':
          if (range) { return; }
          index = active > 0 ? active - 1 : buttons.length - 1;
          button = buttons[index] as HTMLFormElement;
          flag = true;
          break;
        case 'ArrowRight':
          if (range) { return; }
          index = active < buttons.length - 1 ? active + 1 : 0;
          button = buttons[index] as HTMLFormElement;
          flag = true;
          break;
        case 'ArrowDown':
          if (select || menu || spin) { return; }
          index = active > 0 ? active - 1 : buttons.length - 1;
          button = buttons[index] as HTMLFormElement;
          flag = true;
          break;
        case 'ArrowUp':
          if (select || menu || spin) { return; }
          index = active < buttons.length - 1 ? active + 1 : 0;
          button = buttons[index] as HTMLFormElement;
          flag = true;
          break;
        case 'Home':
          if (range) { return; }
          button = buttons[0] as HTMLFormElement;
          flag = true;
          break;
        case 'PageUp':
          if (select || menu || spin) { return; }
          button = buttons[0] as HTMLFormElement;
          flag = true;
          break;
        case 'End':
          if (range) { return; }
          button = buttons[buttons.length - 1] as HTMLFormElement;
          flag = true;
          break;
        case 'PageDown':
          if (select || menu || spin) { return; }
          button = buttons[buttons.length - 1] as HTMLFormElement;
          flag = true;
          break;
          /* Enable when rh-tooltip issue is resolved this.
        case 'Escape':
          #hideTooltip(button);
          flag = true; */
          break;
        default:
          break;
      }
    }
    this.#focusOnButton(button as HTMLFormElement);

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  #updateActiveButton(button:HTMLFormElement | undefined):void {
    if (!!button && button !== this.activeButton) {
      if (this.activeButton) { this.activeButton.tabIndex = -1; }
      this.activeButton = button;
      this.activeButton.tabIndex = 0;
    }
  }

  #focusOnButton(button:HTMLFormElement | undefined):void {
    this.#updateActiveButton(button);
    if (this.activeButton) {
      this.activeButton.focus();

      /* Enable when rh-tooltip issue is corrected: this.#showTooltip(this.activeButton); */
    }
  }

  #hideTooltip(button:HTMLElement | undefined):void {
    const tooltip = this.#getTooltip(button as HTMLElement);
    const hide = tooltip ? tooltip.hide : undefined as FunctionStringCallback | undefined;
    if (!!tooltip && !!hide) { tooltip.hide(); }
  }

  #showTooltip(button:HTMLElement | undefined):void {
    const tooltip = this.#getTooltip(button as HTMLElement);
    const show = tooltip ? tooltip.show : undefined as FunctionStringCallback | undefined;
    if (!!tooltip && !!show) { tooltip.show(); }
  }

  #getTooltip(button:HTMLElement | undefined):RhTooltip | undefined {
    return !button ? undefined : button.closest('rh-tooltip') as RhTooltip;
  }

  updateToolbar() {
    const activeButtons = this.#getActiveChildren() as Array<HTMLFormElement>;
    const buttons = this.#getMatchingChildren() as Array<HTMLFormElement>;
    const index = this.activeButton ? Math.max(0, buttons.indexOf(this.activeButton as HTMLFormElement)) || 0 : 0;
    let activeButton:HTMLFormElement | undefined;
    [...buttons.slice(index), ...buttons.slice(0, index)].forEach(btn=>{
      if (!activeButton && activeButtons.includes(btn)) {
        activeButton = btn;
      }
    });
    this.#updateActiveButton(activeButton);
  }

  initToolbar() {
    const [activeButton,] = this.#getActiveChildren() as Array<HTMLFormElement>;
    this.activeButton = activeButton;
    if (this.activeButton) { this.activeButton.tabIndex = 0; }
  }

  async hostConnected() {
    this.host.addEventListener('keydown', this.#handleKeys.bind(this));
  }
}
