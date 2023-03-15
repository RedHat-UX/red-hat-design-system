import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { RovingTabindexController } from '@patternfly/pfe-core/controllers/roving-tabindex-controller.js';
import { ComposedEvent } from '@patternfly/pfe-core';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';
import { FloatingDOMController, type Placement } from '@patternfly/pfe-core/controllers/floating-dom-controller.js';

import styles from './rh-menu.css';

export class MenuToggleEvent extends ComposedEvent {
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
 * @slot        - items for menu
 * @cssprop --rh-menu-background-color - background-color for the menu - {@default var(--rh-color-surface-lightest, #ffffff)}
 * @cssprop --rh-menu-border-color - border color for menu on dark or saturated - {@default transparent));
 * @cssprop --rh-menu-box-shadow - box-shadow for the menu - {@default var(--rh-menu-box-shadow, var(--rh-box-shadow-md, 0 4px 6px 1px rgb(21 21 21 / 0.25)))}
 * @fires {RhMenuToggle} toggle - when the player menu is toggled
 */
@customElement('rh-menu')
export class RhMenu extends LitElement {
  static readonly styles = [styles];

  /** are the menu and button disabled  */
  @property({ type: Boolean }) disabled = false;

  /** keeps menu open after a menu item has been clicked  */
  @property({ type: Boolean, attribute: 'keep-open-on-click' })
    keepOpenOnClick = false;

  /** position of menu, relative to invoking button */
  @property() position: Placement = 'bottom';

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  @colorContextConsumer() private on?: ColorTheme;

  #tabindex = new RovingTabindexController(this);

  /** if mouse is hovering on menu or button  */
  #hover = false;

  /** if focus is on button or a menu items  */
  #focus = false;

  /** if menumitems have been initialized  */
  #init = false;

  /** menu button element  */
  #menuButton?: HTMLElement;

  #lastActive?:HTMLElement;

  #float = new FloatingDOMController(this, {
    content: (): HTMLElement | undefined | null => this.shadowRoot?.querySelector('#button')
  });

  get open() {
    const { open } = this.#float;
    return !!open;
  }

  firstUpdated() {
    this.#initMenuButton();
    if (!this.#init) {
      this.#initMenuItems();
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.#onClick);
    this.addEventListener('keydown', this.#onKeydown);
  }

  render() {
    const { on = '', hidden, disabled } = this;
    const { alignment, anchor, open, styles } = this.#float;
    return html`
      <div id="container"
           style="${styleMap(styles)}"
           class="${classMap({
             open,
             [on]: !!on,
             [anchor]: !!anchor,
             [alignment]: !!alignment })}">
        <slot id="button" name="button"></slot>
        <div part="menu"
             role="menu"
             aria-labelledby="button"
             aria-hidden="${String(!open) as 'true'|'false'}"
             ?disabled=${!!disabled || !open}
             ?hidden="${!!hidden}"
             @focusin=${this.#onFocusin}
             @focusout=${this.#onFocusout}
             @mouseover=${this.#onMouseover}
             @mouseout=${this.#onMouseout}>
          <slot></slot>
        </div>
      </div>
    `;
  }

  updated(changedProperties:Map<string, unknown>) {
    if (changedProperties.has('disabled')) {
      this.#menuButton?.toggleAttribute('disabled', this.disabled);
    }
    if (changedProperties.has('hidden')) {
      this.#menuButton?.toggleAttribute('hidden', this.hidden);
    }
    if (!this.open) {
      this.#lastActive = this.#tabindex.activeItem;
      for (const item of this.querySelectorAll<HTMLElement>('[tabindex]:not([slot="button"])')) {
        item.tabIndex = -1;
      }
    }
  }

  /**
   * given button slot, finds menu button and sets attributes accordingly
   */
  #initMenuButton() {
    this.#menuButton = this.#getSlottedButton(this.querySelector('[slot="button"]')) ?? undefined;
    if (this.#menuButton) {
      this.disabled = this.#menuButton.hasAttribute('disabled');
      this.hidden = this.#menuButton.hasAttribute('hidden');
      this.#menuButton.setAttribute('aria-controls', 'menu');
      this.#menuButton.setAttribute('aria-haspopup', 'true');
      this.#menuButton.setAttribute('aria-expanded', String(!!this.open));
    }
    this.requestUpdate();
  }

  /**
   * finds menu items and sets attributes accordingly
   */
  #initMenuItems() {
    const items = Array.from(this.children)
      .map(item => this.#getSlottedButton(item))
      .filter(x => x !== this.#menuButton && x instanceof HTMLElement);
    items.forEach(item => item?.setAttribute('role', 'menuitem'));
    this.#tabindex.initItems(items);
    this.requestUpdate();
  }

  /**
   * given a slotted item returns item that is not an rh-tooltip
   */
  #getSlottedButton(slottedItem: Element | null) {
    return (
        slottedItem?.localName !== 'rh-tooltip' ? slottedItem
      : slottedItem?.querySelector(':not([slot=content])')
    ) as HTMLElement;
  }

  #toggle() {
    if (this.open) {
      this.hide(true);
    } else {
      this.show();
    }
  }

  /**
   * handles click events on button and menu
   */
  #onClick(event: Event) {
    if (this.keepOpenOnClick) {
      return;
    } else if (event.composedPath().includes(this.#menuButton as EventTarget)) {
      this.#toggle();
    }
  }

  #onKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape':
        this.hide(true);
    }
  }

  /** sets focus state when part of button or menu has focus */
  #onFocusin() {
    this.#focus = true;
    this.requestUpdate();
  }

  /** removes focus state when part of button or menu has focus */
  #onFocusout() {
    this.#focus = false;
    this.requestUpdate();
    setTimeout(this.hide.bind(this), 300);
  }

  /** sets hover state when part of button or menu is hovered */
  #onMouseover() {
    this.#hover = true;
    this.requestUpdate();
  }

  /** removes hover state when part of button or menu no longer hovered */
  #onMouseout() {
    this.#hover = false;
    this.requestUpdate();
  }

  #onWindowClick = (event: MouseEvent) => {
    if (!event.composedPath().includes(this)) {
      this.hide(true);
      window.removeEventListener('click', this.#onWindowClick);
    }
  };

  /**
   * opens menu
   */
  async show() {
    if (this.#lastActive) {
      this.#tabindex.updateActiveItem(this.#lastActive);
    }
    await this.updateComplete;
    const placement = this.position;
    const button = this.shadowRoot?.getElementById('button') as HTMLElement;
    const menu = this.shadowRoot?.querySelector('[part="menu"]') as HTMLElement;
    const width = 0 - (button?.offsetWidth ?? 0) + (menu?.offsetWidth ?? 0);
    const height = 0 - (button?.offsetHeight ?? 0) + (menu?.offsetHeight ?? 0);
    const offset =
        placement?.match(/left/) ? { mainAxis: width, alignmentAxis: 0 }
      : placement?.match(/top/) ? { mainAxis: height, alignmentAxis: 0 }
      : { mainAxis: 0, alignmentAxis: 0 };
    await this.#float.show({ offset, placement });
    await this.updateComplete;
    await (this.#tabindex.activeItem as LitElement)?.updateComplete;
    this.#tabindex.focusOnItem(this.#tabindex.activeItem);
    this.#menuButton?.setAttribute('aria-expanded', String(!!this.open));
    this.dispatchEvent(new MenuToggleEvent(this.open, this));
    window.addEventListener('click', this.#onWindowClick);
  }

  /**
   * closes menu
   */
  async hide(force?: boolean) {
    if (!!force || (!this.#focus && !this.#hover)) {
      await this.#float.hide();
      this.#menuButton?.setAttribute('aria-expanded', String(!!this.open));
      this.dispatchEvent(new MenuToggleEvent(this.open, this));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-menu': RhMenu;
  }
}
