import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { ComposedEvent } from '@patternfly/pfe-core';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import '../rh-tooltip/rh-tooltip.js';

import styles from './rh-audio-player-menu.css';

export class AudioPlayerMenuToggle extends ComposedEvent {
  constructor(
    public open: boolean,
    public menu: HTMLElement
  ) {
    super('toggle');
  }
}
/**
 * Audio Player Menu
 * @slot button - button that opens menu
 * @slot menu - items for menu
 * @cssprop --rh-audio-player-menu-background-color - background-color for the menu - {@default var(--rh-color-surface-darkest, #151515)}
 * @cssprop --rh-audio-player-menu-border-color - border color for menu on dark or saturated - {@default var(--rh-color-border-subtle-on-dark, #6a6e73));
 * @fires {AudioPlayerMenuToggle} toggle - when the player menu is toggled
 */
@customElement('rh-audio-player-menu')
export class RhAudioPlayerMenu extends LitElement {
  static readonly styles = [styles];

  /** are the menu and button hidden  */
  @property({ type: Boolean }) hidden = false;

  /** are the menu and button disabled  */
  @property({ type: Boolean }) disabled = false;

  /** if menu should be expanded  */
  @property({ type: Boolean }) expanded = false;

  /** if menumitems have been initialized  */
  #init = false;

  /** if mouse is hovering on menu or button  */
  @state() private _hover = false;

  /** if focus is on button or a menu items  */
  @state() private _focus = false;

  /** menu items element  */
  @state() private _menuItems: Array<HTMLElement|null> = [];

  /** menu button element  */
  @state() private _menuButton?: HTMLElement;

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  @colorContextConsumer()
  @state() private on?: ColorTheme;

  #tabindex = new RovingTabindexController(this);

  firstUpdated() {
    this.#initMenuButton();
    Object.entries({
      'click': this.#onClick,
      'focus': this.#onFocus,
      'blur': this.#onBlue,
      'mouseover': this.#onMouseover,
      'mouseout': this.#onMouseout,
    }).forEach(([event, listener]) => {
      this.addEventListener(event, listener);
    });
  }

  render() {
    const { on = '' } = this;
    return html`
    <div id="container" class="${classMap({ [on]: !!on })}">
      <slot name="button"></slot>
      <div id="menu">
        <slot name="menu"
          part="menu"
          aria-labelledby="button"
          ?hidden="${!this.expanded || this.hidden || this.disabled}"
          role="menu">
        </slot>
      </div>
    </div>`;
  }

  updated(changedProperties:Map<string, unknown>) {
    if (changedProperties.has('disabled')) {
      this._menuButton?.toggleAttribute('disabled', this.disabled);
    }
    if (changedProperties.has('hidden')) {
      this._menuButton?.toggleAttribute('hidden', this.hidden);
    }
    if (changedProperties.has('expanded')) {
      this._menuButton?.setAttribute('aria-expanded', String(!!this.expanded));
    }
  }

  /**
   * gives focus to active menu item
   */
  focus() {
    this._menuButton?.focus();
    const focus = () => this.#tabindex.focusOnItem();
    setTimeout(focus, 1);
  }

  #initMenuButton() {
    const slot = this.querySelector('[slot=button]');
    this._menuButton = this.#getSlottedButton(slot) ?? undefined;
    if (!this._menuButton) { return; }
    this.disabled = this._menuButton.hasAttribute('disabled');
    this.hidden = this._menuButton.hasAttribute('hidden');
    this._menuButton.setAttribute('aria-controls', 'menu');
    this._menuButton.setAttribute('aria-haspopup', 'true');
    this._menuButton.setAttribute('aria-expanded', String(!!this.expanded));
  }

  /**
   * sets attributes on menu items
   */
  #initMenuItems() {
    this.#init = true;
    this._menuItems = Array.from(this.querySelectorAll('[slot=menu]'), this.#getSlottedButton);
    this._menuItems.forEach(item => item?.setAttribute('role', 'menuitem'));
    this.#tabindex.initItems(this._menuItems.filter((x): x is HTMLElement => !!x));
    this.requestUpdate();
  }

  #getSlottedButton(slottedItem: Element | null): HTMLElement | null {
    const button = (
        slottedItem?.localName !== 'rh-tooltip' ? slottedItem
      : slottedItem?.querySelector(':not([slot=content])')
    );
    return button instanceof HTMLElement ? button : null;
  }

  #onClick() {
    if (this.expanded) {
      this.close(true);
    } else {
      this.open();
      this.focus();
    }
  }

  /** sets focus state when part of button or menu has focus */
  #onFocus() {
    this._focus = true;
  }

  /** removes focus state when part of button or menu has focus */
  #onBlue() {
    this._focus = false;
  }

  /** sets hover state when part of button or menu is hovered */
  #onMouseover() {
    this._hover = true;
  }

  /** removes hover state when part of button or menu no longer hovered */
  #onMouseout() {
    this._hover = false;
    setTimeout(() => this.close(false), 300);
  }

  /**
   * opens menu
   */
  open() {
    if (!this.#init) { this.#initMenuItems(); }
    this.expanded = true;
    this.dispatchEvent(new AudioPlayerMenuToggle(this.expanded, this));
  }

  /**
   * closes menu
   */
  close(force?: boolean) {
    if (!!force || (!this._focus && !this._hover)) {
      this.expanded = false;
      this.dispatchEvent(new AudioPlayerMenuToggle(this.expanded, this));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-audio-player-menu': RhAudioPlayerMenu;
  }
}
