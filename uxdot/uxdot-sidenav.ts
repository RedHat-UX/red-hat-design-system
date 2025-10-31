import { LitElement, html, isServer } from 'lit';

import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { themable } from '@rhds/elements/lib/themable.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './uxdot-sidenav.css';

@customElement('uxdot-sidenav')
@themable
export class UxdotSideNav extends LitElement {
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  static styles = [styles];

  @property({ type: Boolean, reflect: true }) open = false;

  @property() trigger?: string;

  #triggerElement: HTMLElement | null = null;

  #closeButton: HTMLElement | null = null;

  async connectedCallback() {
    super.connectedCallback();

    if (!isServer) {
      const root = this.getRootNode() as Document | ShadowRoot;
      if (this.trigger) {
        this.#triggerElement = root.getElementById(this.trigger);
      }
      this.#triggerElement?.addEventListener('click', this.#onTriggerClick.bind(this));
      this.addEventListener('click', this.#onClick.bind(this));
      this.addEventListener('keydown', this.#onKeydown.bind(this));
      window.addEventListener('keyup', this.#onKeyup.bind(this));
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#triggerElement?.removeEventListener('click', this.#onTriggerClick.bind(this));
    window.removeEventListener('keyup', this.#onKeyup);
  }

  render() {
    return html`
      <div id="container" part="container">
        <div id="close-button-container">
          <button id="close-button"
              part="close-button"
              aria-label="Close dialog"
              @keydown=${this.#onKeydownCloseButton}
              @click=${this.toggle}>
            <rh-icon set="ui" icon="close" size="lg"></rh-icon>
          </button>
        </div>
        <div id="content">
          <slot></slot>
        </div>
      </div>
      <div id="overlay" part="overlay" ?hidden=${!this.open}></div>
    `;
  }

  updated() {
    this.#closeButton = this.shadowRoot?.getElementById('close-button') ?? null;
  }

  async toggle(trapFocus = true) {
    this.open = !this.open;
    await this.updateComplete;

    if (trapFocus) {
      if (this.open) {
        this.#closeButton?.focus();
      } else {
        this.#triggerElement?.focus();
      }
    }
  }

  #onTriggerClick(event: Event) {
    event.preventDefault();
    this.toggle();
  }

  #onClick(event: Event) {
    const path = event.composedPath();
    if (!path.includes(this)) {
      this.toggle();
    }
  }

  #onKeydownCloseButton(event: KeyboardEvent) {
    switch (event.key) {
      case 'Enter':
        event.preventDefault();
        this.toggle();
        return;
    }
  }

  #onKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape': {
        if (!this.open) {
          return;
        }
        this.toggle();
        break;
      }
      default:
        break;
    }
  }

  #onKeyup(event: KeyboardEvent) {
    switch (event.key) {
      case 'Tab':
        this.#onTabKeyup(event);
        break;
      default:
        break;
    }
  }

  close(trapFocus = true) {
    if (!this.open) {
      return;
    }
    this.toggle(trapFocus);
  }

  #onTabKeyup(event: KeyboardEvent) {
    const { target } = event;
    if (target instanceof Node && !this.contains(target)) {
      this.close(false);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uxdot-sidenav': UxdotSideNav;
  }
}
