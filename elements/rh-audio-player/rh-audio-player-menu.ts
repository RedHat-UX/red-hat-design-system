import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { RovingTabindexController } from '../../lib/RovingTabindexController.js';

import '../rh-tooltip/rh-tooltip.js';
// import {msg} from '@lit/localize';

import styles from './rh-audio-player-menu.css';


/**
 * Audio Player Menu
 * @slot button - button that opens menu
 * @slot menu - items for menu
 * @cssprop --rh-audio-player-menu-background-color - background-color for the menu - {@default var(--rh-color-surface-darkest, #151515)}
 * @cssprop --rh-audio-player-menu-border-color - border color for menu on dark or saturated - {@default var(--rh-color-border-subtle-on-dark, #6a6e73));
 */
@customElement('rh-audio-player-menu')
export class RhAudioPlayerMenu extends LitElement {
  static readonly styles = [styles];
  private rovingTabindexController = new RovingTabindexController(this);

  @property({ type: String }) alignment = 'start' || 'end' || 'center' || 'justify';
  /** are the menu and button hidden  */
  @property({ type: Boolean }) hidden = false;
  /** are the menu and button disabled  */
  @property({ type: Boolean }) disabled = false;
  /** if menu should be expanded  */
  @property({ type: Boolean }) expanded = false;
  /** if moenumitems have been initialized  */
  @state() private _init = false;
  /** if mouse is hovering on menu or button  */
  @state() private _hover = false;
  /** if focus is on button or a menu items  */
  @state() private _focus = false;
  /** menu items element  */
  @state() private _menuItems:Array<HTMLElement> = [];
  /** menu button element  */
  @state() private _menuButton?:HTMLElement = undefined;

  @colorContextConsumer()
  @property({ reflect: true }) on: ColorTheme = 'light';

  firstUpdated() {
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
    this._menuButton?.focus();
    const focus = () => this.rovingTabindexController.focusOnItem();
    setTimeout(focus, 1);
  }

  #initMenuButton() {
    const slot = this.querySelector('[slot=button]');
    this._menuButton = this.#getSlottedButton(slot);
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
    const query = [...this.querySelectorAll('[slot=menu]')] as Array<HTMLElement>;
    this._init = true;
    this._menuItems = query.map(item=>this.#getSlottedButton(item));
    this._menuItems.forEach(item=>item?.setAttribute('role', 'menuitem'));
    this.rovingTabindexController.initItems(this._menuItems);
  }

  #getSlottedButton(slottedItem:Element | null):HTMLElement {
    const button = slottedItem?.tagName === 'RH-TOOLTIP' ?
    slottedItem?.querySelector(':not([slot=content])')
    : slottedItem;
    return button as HTMLElement;
  }

  render() {
    return html`
    <slot name="button"></slot>
    <div>
      <slot name="menu"
        part="menu"
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
    if (!this._init) { this.#initMenuItems(); }
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
