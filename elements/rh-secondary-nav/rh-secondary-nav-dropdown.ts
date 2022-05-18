import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { ComposedEvent } from '@patternfly/pfe-core';
import { pfelement, bound, observed } from '@patternfly/pfe-core/decorators.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';
import { RhSecondaryNavMenu } from './rh-secondary-nav-menu';

export class SecondaryNavDropdownChangeEvent extends ComposedEvent {
  constructor(
    public expanded: boolean,
    public toggle: RhSecondaryNavDropdown,
  ) {
    super('change');
  }
}

import styles from './rh-secondary-nav-dropdown.css';

@customElement('rh-secondary-nav-dropdown') @pfelement()
export class RhSecondaryNavDropdown extends LitElement {
  static readonly styles = [styles];

  #slots = new SlotController(this, { slots: ['link', 'menu'] });

  @observed
  @state() expanded = false;

  connectedCallback(): void {
    super.connectedCallback();

    this.id ||= getRandomId('rh-secondary-nav-dropdown');

    const [link] = this.#slots.getSlotted<HTMLElement>('link');
    link.setAttribute('role', 'button');
    link.setAttribute('aria-expanded', 'false');
    const [menu] = this.#slots.getSlotted<HTMLElement>('menu');
    link.setAttribute('aria-controls', menu.id);
    link.addEventListener('click', this._clickHandler);
  }

  render() {
    return html`
      <slot name="link"></slot>
      <slot name="menu"></slot>
    `;
  }

  protected _expandedChanged(oldVal?: 'false' | 'true', newVal?: 'false' | 'true') {
    if (newVal === oldVal) {
      return;
    }
    newVal ? this.#open() : this.#close();
  }

  @bound
  private _clickHandler(event: Event) {
    event.preventDefault();
    const expanded = !this.expanded;
    this.dispatchEvent(new SecondaryNavDropdownChangeEvent(expanded, this));
  }

  #open() {
    if (this.hasAttribute('expanded')) {
      return;
    }
    this.setAttribute('expanded', '');
    const link = this.#slots.getSlotted('link').find(child => child instanceof HTMLAnchorElement);
    link?.setAttribute('aria-expanded', 'true');
    const menu = this.#slots.getSlotted('menu').find(child => child instanceof RhSecondaryNavMenu);
    menu?.setAttribute('visible', '');
  }

  #close() {
    if (!this.hasAttribute('expanded')) {
      return;
    }
    this.removeAttribute('expanded');
    const link = this.#slots.getSlotted('link').find(child => child instanceof HTMLAnchorElement);
    link?.setAttribute('aria-expanded', 'false');
    const menu = this.#slots.getSlotted('menu').find(child => child instanceof RhSecondaryNavMenu);
    menu?.removeAttribute('visible');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-secondary-nav-dropdown': RhSecondaryNavDropdown;
  }
}
