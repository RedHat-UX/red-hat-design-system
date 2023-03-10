import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { ComposedEvent } from '@patternfly/pfe-core';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';
import { FloatingDOMController, type Placement } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';

import styles from './rh-menu.css';

export class RhMenuToggle extends ComposedEvent {
  constructor(
    public open: boolean,
    public menu: HTMLElement
  ) {
    super('toggle');
  }
}

/**
 * Menu
 * @slot button - button that opens menu
 * @slot menu - items for menu
 * @cssprop --rh-menu-background-color - background-color for the menu - {@default var(--rh-color-surface-lightest, #ffffff)}
 * @cssprop --rh-menu-border-color - border color for menu on dark or saturated - {@default transparent));
 * @cssprop --rh-menu-box-shadow - box-shadow for the menu - {@default var(--rh-menu-box-shadow, var(--rh-box-shadow-md, 0 4px 6px 1px rgb(21 21 21 / 0.25)))}
 * @fires {RhMenuToggle} toggle - when the player menu is toggled
 */
@customElement('rh-menu')
export class RhMenu extends LitElement {
  static readonly styles = [styles];

  /** are the menu and button hidden  */
  @property({ type: Boolean }) hidden = false;

  /** are the menu and button disabled  */
  @property({ type: Boolean }) disabled = false;

  /** keeps menu open after a menu item has been clicked  */
  @property({ type: Boolean, attribute: 'keep-open-on-click' }) keepOpenOnClick = false;

  /** position of menu, relative to invoking button */
  @property() position: Placement = 'bottom';

  /** slot for the button */
  @query('#button') private _button?:HTMLElement;

  /** menu container */
  @query('[part=menu]') private _menu?:HTMLElement;

  /** if mouse is hovering on menu or button  */
  @state() private _hover = false;

  /** if focus is on button or a menu items  */
  @state() private _focus = false;

  /** menu items element  */
  @state() private _menuItems: Array<HTMLElement|undefined> = [];

  /** menu button element  */
  @state() private _menuButton?: HTMLElement;

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  @colorContextConsumer()
  @state() private on?: ColorTheme;

  #tabindex = new RovingTabindexController(this);

  /** if menumitems have been initialized  */
  #init = false;

  #float = new FloatingDOMController(this, {
    content: (): HTMLElement | undefined | null => this.shadowRoot?.querySelector('#button')
  });

  get open() {
    const { open } = this.#float;
    return !!open;
  }

  firstUpdated() {
    this.#initMenuButton();
    if (!this.#init) { this.#initMenuItems(); }
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.#onClick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.#onClick);
    super.disconnectedCallback();
  }

  render() {
    const { on = '', hidden, disabled } = this;
    const { alignment, anchor, open, styles } = this.#float;
    return html`
    <div id="container" 
      style="${styleMap(styles)}"
      class="${classMap({ [on]: !!on,
        open,
        [anchor]: !!anchor,
        [alignment]: !!alignment })}">
      <slot id="button" name="button"></slot>
      <div
        part="menu"
        aria-labelledby="button"
        ?disabled=${!!disabled || !open}
        aria-hidden="${String(!open) as 'true'|'false'}"
        ?hidden="${!!hidden}"
        role="menu"
        @focusin=${this.#onFocusin}
        @focusout=${this.#onFocusout}
        @mouseover=${this.#onMouseover}
        @mouseout=${this.#onMouseout}>
        <slot name="menu"></slot>
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
  }

  /**
   * gives focus to active menu item
   */
  focus() {
    this._menuButton?.focus();
  }

  /**
   * given button slot, finds menu button and sets attributes accordingly
   */
  #initMenuButton() {
    const slot = this.querySelector('[slot=button]');
    this._menuButton = this.#getSlottedButton(slot) ?? undefined;
    if (!this._menuButton) { return; }
    this.disabled = this._menuButton.hasAttribute('disabled');
    this.hidden = this._menuButton.hasAttribute('hidden');
    this._menuButton.setAttribute('aria-controls', 'menu');
    this._menuButton.setAttribute('aria-haspopup', 'true');
    this._menuButton.setAttribute('aria-expanded', String(!!this.open));
  }

  /**
   * given menu slot, inds menu items and sets attributes accordingly
   */
  #initMenuItems() {
    const items = Array.from(this.querySelectorAll('[slot=menu]')) as Array<HTMLElement>;
    items.map(item=>this.#getSlottedButton(item));
    this._menuItems = [...items];
    this._menuItems.forEach(item => item?.setAttribute('role', 'menuitem'));
    /**
     * TODO: replace the following with this.#tabindex.initItems(this._menuItems.filter((x): x is HTMLElement => !!x),this._menu);
     */
    this.#tabindex.initItems(this._menuItems.filter((x): x is HTMLElement => !!x));
    this.requestUpdate();
  }

  /**
   * given a slotted item returns item that is not an rh-tooltip
   */
  #getSlottedButton(slottedItem: Element | null): HTMLElement | undefined {
    const button = (
        slottedItem?.localName !== 'rh-tooltip' ? slottedItem
      : slottedItem?.querySelector(':not([slot=content])')
    );
    return button instanceof HTMLElement ? button : undefined;
  }

  /**
   * handles click events on button and menu
   */
  #onClick(event:Event) {
    const target = event.target as HTMLElement;
    if (!!this.keepOpenOnClick && target?.slot === 'menu') { return; }
    if (this.open) {
      this.hide(true);
    } else {
      this.show();
      this.focus();
    }
  }

  /** sets focus state when part of button or menu has focus */
  #onFocusin() {
    this._focus = true;
  }

  /** removes focus state when part of button or menu has focus */
  #onFocusout() {
    this._focus = false;
    setTimeout(this.hide.bind(this), 300);
  }

  /** sets hover state when part of button or menu is hovered */
  #onMouseover() {
    this._hover = true;
  }

  /** removes hover state when part of button or menu no longer hovered */
  #onMouseout() {
    this._hover = false;
  }

  /**
   * opens menu
   */
  async show() {
    await this.updateComplete;
    const placement = this.position;
    const width = 0 - (this._button?.offsetWidth || 0) + (this._menu?.offsetWidth || 0);
    const height = 0 - (this._button?.offsetHeight || 0) + (this._menu?.offsetHeight || 0);
    const offset =
        placement?.match(/left/) ? { mainAxis: width, alignmentAxis: 0 }
      : placement?.match(/top/) ? { mainAxis: height, alignmentAxis: 0 }
      : { mainAxis: 0, alignmentAxis: 0 };
    await this.#float.show({ offset, placement });
    this.#tabindex.focusOnItem(this.#tabindex.activeItem);
    this._menuButton?.setAttribute('aria-expanded', String(!!this.open));
    this.dispatchEvent(new RhMenuToggle(this.open, this));
  }

  /**
   * closes menu
   */
  async hide(force?: boolean) {
    if (!!force || (!this._focus && !this._hover)) {
      await this.#float.hide();
      this._menuButton?.setAttribute('aria-expanded', String(!!this.open));
      this.dispatchEvent(new RhMenuToggle(this.open, this));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-menu': RhMenu;
  }
}
