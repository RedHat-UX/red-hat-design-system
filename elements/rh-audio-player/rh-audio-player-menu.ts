import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';


import { pfelement } from '@patternfly/pfe-core/decorators.js';
import { RovingTabindexController } from '../../lib/RovingTabindexController.js';
// import {msg} from '@lit/localize';

import styles from './rh-audio-player-menu.css';


/**
 * Audio Player
 * @slot - Place element content here
 */
@customElement('rh-audio-player-menu') @pfelement()
export class RhAudioPlayerMenu extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];
  private rovingTabindexController = new RovingTabindexController(this);

  @property({ type: String }) alignment = 'start' || 'end' || 'center' || 'justify';
  /** whether menu is light or dark  */
  @property({ reflect: true, type: String }) on = 'light' || 'dark';
  /** are the menu and button hidden  */
  @property({ type: Boolean }) hidden = false;
  /** are the menu and button disabled  */
  @property({ type: Boolean }) disabled = false;
  /** if menu should be expanded  */
  @property({ type: Boolean }) expanded = false;
  /** if mouse is hovering on menu or button  */
  @state() private _hover = false;
  /** if focus is on button or a menu items  */
  @state() private _focus = false;
  /** menu items element  */
  @state() private _menuItems:Array<HTMLElement | undefined> = [];
  /** menu button element  */
  @state() private _menuButton:HTMLElement | null | undefined = undefined;

  firstUpdated() {
    this.#initMenuItems();
    this.#initMenuButton();
    this.#addEventHandlers(this, {
      'click': this.#handleClick,
      'focus': this.#handleFocus,
      'blur': this.#handleBlur,
      'mouseover': this.#handleMouseover,
      'mouseout': this.#handleMouseout
    });
  }

  updated(changedProperties:Map<string, unknown>) {
    if (changedProperties.has('disabled')) {
      if (this.disabled) {
        this._menuButton?.setAttribute('disabled', 'disabled');
      } else {
        this._menuButton?.removeAttribute('disabled');
      }
    }
    if (changedProperties.has('hidden')) {
      if (this.disabled) {
        this._menuButton?.setAttribute('hidden', 'hidden');
      } else {
        this._menuButton?.removeAttribute('hidden');
      }
    }
    if (changedProperties.has('expanded')) {
      this._menuButton?.setAttribute('aria-expanded', this.expanded ? 'true' : 'false');
    }
  }

  /**
   * gives focus to active menu item
   */
  focus() {
    const activeItems = this.rovingTabindexController.getActiveItems() as Array<HTMLFormElement>;
    const focus = () => this.rovingTabindexController.focusOnItem(activeItems[0]);
    setTimeout(focus, 1);
  }

  #initMenuButton() {
    this._menuButton = this.#getSlottedButton(this.querySelector('[slot=button]') as HTMLElement);
    if (!this._menuButton) { return; }
    this.disabled = this._menuButton.getAttribute('disabled') === 'disabled';
    this.hidden = this._menuButton.getAttribute('hidden') === 'hidden';
    this._menuButton.setAttribute('aria-controls', 'menu');
    this._menuButton.setAttribute('aria-haspop', 'true');
    this._menuButton.setAttribute('aria-expanded', this.expanded ? 'true' : 'false');
  }

  /**
   * sets attributes on menu items
   */
  #initMenuItems() {
    this._menuItems = [...this.querySelectorAll('[slot=menu]')].map(item=>this.#getSlottedButton(item)) as Array<HTMLElement | undefined>;
    this._menuItems.forEach(item=>item?.setAttribute('role', 'menuitem'));
    this.rovingTabindexController.initToolbar(this._menuItems);
  }

  #getSlottedButton(slottedItem:Element):HTMLElement {
    return slottedItem.tagName === 'RH-TOOLTIP' ?
      slottedItem.querySelector(':not([slot=content])') as HTMLElement
      : slottedItem as HTMLElement;
  }

  render() {
    return html`
    <slot id="button" name="button"></slot>
    <div id="menu-outer">
      <slot id="menu" 
        name="menu"
        aria-labelledby="button"
        ?hidden="${!this.expanded || this.hidden || this.disabled}"
        role="menu">
      </slot>
    </div>`;
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
   * opens menu
   */
  open():void {
    this.expanded = true;
    /**
       * fires when menu is opened
       * @event open
       */
    this.dispatchEvent(
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
      /**
       * fires when menu is closed
       * @event close
       */
      this.dispatchEvent(
        new CustomEvent('close', {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: this,
        })
      );
    }
  }

  #handleClick() {
    if (this.expanded) {
      this.close(true);
    } else {
      this.open();
      this.focus();
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

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-menu': RhAudioPlayerMenu;
  }
}
