import type { ReactiveController, ReactiveControllerHost } from 'lit';

/**
 * Implements roving tabindex, as described in
 * [Managing Focus Within Components Using a Roving tabindex
]{@link https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex}
 */
export class RovingTabindexController implements ReactiveController {
  /** Heading level preceding component document, as in 1 for <h1>, 2 for <h2> etc. */
  public queryString = '[role=toolbar] [tabindex=0]';
  public activeButton:HTMLElement | undefined;

  constructor(public host: ReactiveControllerHost & HTMLElement, query: string) {
    this.host.addController(this);
    this.queryString = query;
  }

  #getMatchingChildren():Array<HTMLElement> {
    const query = this.host.shadowRoot ? this.host.shadowRoot.querySelectorAll(
      this.queryString
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
    const buttons:Array<HTMLElement> = this.#getActiveChildren();
    const active:number = this.#getActiveIndex(this.activeButton ? this.activeButton.id : '') || 0;
    let index:number;
    let button = this.activeButton;
    if (buttons.length > 0) {
      switch (event.key) {
        case 'ArrowLeft':
          index = active > 0 ? active - 1 : buttons.length - 1;
          button = buttons[index] as HTMLFormElement;
          break;
        case 'ArrowRight':
          index = active < buttons.length - 1 ? active + 1 : buttons.length - 1;
          button = buttons[index] as HTMLFormElement;
          break;
        case 'Home':
          button = buttons[0] as HTMLFormElement;
          break;
        case 'End':
          button = buttons[buttons.length - 1] as HTMLFormElement;
          break;
        case 'Esc':
          break;
      }
    }
    this.#focusOnButton(button as HTMLFormElement);
  }

  #updateActiveButton(button:HTMLFormElement | undefined) {
    const activeButtons = this.#getActiveChildren() as Array<HTMLFormElement>;
    const buttons = this.#getMatchingChildren() as Array<HTMLFormElement>;
    const index = button ? Math.max(0, buttons.indexOf(button)) || 0 : 0;
    let activeButton:HTMLFormElement | undefined;
    [...buttons.slice(index), ...buttons.slice(0, index)].forEach(btn=>{
      if (!activeButton && activeButtons.includes(btn)) {
        activeButton = btn;
      }
    });
    this.#focusOnButton(activeButton);
  }

  #focusOnButton(button:HTMLFormElement | undefined) {
    if (!!button && button !== this.activeButton) {
      if (this.activeButton) { this.activeButton.tabIndex = -1; }
      this.activeButton = button;
      this.activeButton.tabIndex = 0;
      if (this.activeButton) { button.focus(); }
    }
  }

  async hostConnected() {
    const [activeButton,] = this.#getActiveChildren() as Array<HTMLFormElement>;
    this.activeButton = activeButton;
    if (this.activeButton) { this.activeButton.tabIndex = 0; }
    this.host.addEventListener('keydown', this.#handleKeys.bind(this));
  }
}
