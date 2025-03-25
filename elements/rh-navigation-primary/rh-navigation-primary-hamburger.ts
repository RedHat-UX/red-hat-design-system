import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { state } from 'lit/decorators/state.js';
import { consume, provide } from '@lit/context';

import { compactContext, hamburgerContext } from './context.js';

import styles from './rh-navigation-primary-hamburger.css';

@customElement('rh-navigation-primary-hamburger')
export class RhNavigationPrimaryHamburger extends LitElement {
  static shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  static styles = [styles];

  @property({ type: Boolean, reflect: true }) open = false;

  @provide({ context: hamburgerContext })
  protected hamburger = true;

  @consume({ context: compactContext, subscribe: true })
  @state() private compact?: boolean;

  get #details() {
    return this.shadowRoot?.querySelector('details');
  }

  render() {
    const { compact = true, open } = this;
    return html`
      <details id="hamburger"
               class="${classMap({ compact })}"
               ?open="${this.open}"
               @toggle="${this.#onToggle}">
        <summary class="${classMap({ open, compact })}">
          <rh-icon icon="menu-bars" set="ui"></rh-icon>
          <div id="summary"><slot name="summary"></slot></div>
          <rh-icon icon="caret-down" set="microns"></rh-icon>
        </summary>
        <div id="details-content" role="list" class="${classMap({ open, compact })}">
          <slot></slot>
        </div>
      </details>
    `;
  }

  #onToggle() {
    this.open = !!this.#details?.open;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-primary-hamburger': RhNavigationPrimaryHamburger;
  }
}
