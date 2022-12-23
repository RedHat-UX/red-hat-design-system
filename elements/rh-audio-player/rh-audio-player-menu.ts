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


  @property({ reflect: true, type: Boolean }) disabled = false;
  @property({ reflect: true, type: Boolean }) hidden = false;
  @property({ reflect: true, type: Boolean }) expanded = false;
  @property({ type: Number }) offset = 0;
  @property({ type: String }) position = 'below' || 'above' || 'left' || 'right';
  @property({ type: String }) alignment = 'start' || 'end' || 'center' || 'justify';
  @property({ reflect: true, type: String }) on = 'light' || 'dark';
  @state() private _hover = false;
  @state() private _focus = false;

  /**
   * @readonly button that opens menu
   */
  get #menuButton():HTMLButtonElement | undefined {
    return this.shadowRoot && this.shadowRoot.querySelector('#menubutton') ? this.shadowRoot.querySelector('#menubutton') as HTMLButtonElement : undefined;
  }

  firstUpdated() {
    const menu = this.querySelector('ul,ol');
    const items = [...this.querySelectorAll('li > *')] as Array<HTMLElement | undefined>;
    menu?.setAttribute('role', 'menu');
    menu?.setAttribute('aria-labelledby', 'menubutton');
    items.forEach(item=>item?.setAttribute('role', 'menuitem'));
    this.rovingTabindexController.initToolbar(items);
    this.addEventListener('click', this.#handleClick);
    this.addEventListener('focus', this.#handleFocus);
    this.addEventListener('blur', this.#handleBlur);
    this.addEventListener('mouseover', this.#handleMouseover);
    this.addEventListener('mouseout', this.#handleMouseout);
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

  /**
   * gives focus to menubutton
   */
  focus() {
    this.#menuButton?.focus();
  }

  render() {
    return html`
      ${this.buttonTemplate()}
      ${this.popupTemplate()}
    `;
  }

  popupTemplate() {
    return html`
    <div id="menu-outer">
      <slot id="menu" 
        ?hidden="${!this.expanded}"
        @focus="${() => (this._focus = true)}"
        @blur="${() => (this._focus = false)}"
        @mouseover="${() => (this._hover = true)}"
        @mouseout="${() => (this._hover = false)}">
      </slot>
    </div>`;
  }

  buttonTemplate() {
    return html`
      <button
        aria-controls="menu"
        aria-expanded="${this.expanded ? 'true' : 'false'}"
        aria-haspopup="true"
        id="menubutton"
        part="button"
      >
        <slot name="button">Menu</slot>
      </button>
    `;
  }

  #handleClick() {
    if (this.expanded) {
      this.close(true);
    } else {
      this.open();
      const activeItems = this.rovingTabindexController.getActiveItems() as Array<HTMLFormElement>;
      const focus = ()=>this.rovingTabindexController.focusOnItem(activeItems[0]);
      setTimeout(focus, 1);
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
