import { RhAudioPlayerMenu } from '@rhds/elements/rh-audio-player/rh-audio-player-menu';
import type { ReactiveController, ReactiveControllerHost } from 'lit';

/**
 * Implements roving tabindex, as described in
 * [Managing Focus Within Components Using a Roving tabindex
]{@link https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex}
 */
export class MenuButtonController implements ReactiveController {
  public expanded = false;
  private _hover = false;
  private _focus = false;
  private _menu:HTMLElement | undefined = undefined;
  private _menuButton:HTMLElement | undefined = undefined;

  constructor(public host: ReactiveControllerHost & HTMLElement) {
    this.host.addController(this);
  }

  async hostConnected() {
    this.#addEventHandlers(this.host, {
      'click': this.#handleClick,
      'focus': this.#handleFocus,
      'blur': this.#handleBlur,
      'mouseover': this.#handleMouseover,
      'mouseout': this.#handleMouseout
    });
  }

  /**
   * adds all event handles to media element
   */
  #addEventHandlers(element:HTMLElement, handlers:object):void {
    if (!!element && !!handlers) {
      Object.keys(handlers).forEach(handler=>{
        const listener:() => void = handlers[handler as keyof typeof handlers];
        element.addEventListener(handler, listener.bind(this));
      });
    }
  }

  /**
   * sets attributes on menu button
   */
  init(button:HTMLElement, menu:HTMLElement) {
    this._menu = menu;
    this._menuButton = button;
  }

  /**
   * opens menu
   */
  open():void {
    this.expanded = true;
    this.host.requestUpdate();
    /**
     * fires when menu is opened
     * @event open
     */
    this.host.dispatchEvent(
      new CustomEvent('open', {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: this,
      })
    );
  }

  /**
   * closes menu
   */
  close(force:boolean | undefined) {
    if (!!force || (!this._focus && !this._hover)) {
      this.expanded = false;
      this.host.requestUpdate();
      /**
       * fires when menu is closed
       * @event close
       */
      this.host.dispatchEvent(
        new CustomEvent('close', {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: this,
        })
      );
    }
  }

  /**
   * gives focus to menubutton
   */
  focus() {
    this._menuButton?.focus();
  }

  #handleClick() {
    if (this.expanded) {
      this.close(true);
    } else {
      this.open();
      this._menu?.focus();
    }
  }

  /** sets focus state when part of button or menu has focus */
  #handleFocus() {
    this._focus = true;
  }

  /** removes focus state when part of button or menu has focus */
  #handleBlur() {
    this._focus = false;
  }

  /** sets hover state when part of button or menu is hovered */
  #handleMouseover() {
    this._hover = true;
    this.open();
  }

  /** removes hover state when part of button or menu no longer hovered */
  #handleMouseout() {
    this._hover = false;
    setTimeout(() => this.close(false), 300);
  }
}
