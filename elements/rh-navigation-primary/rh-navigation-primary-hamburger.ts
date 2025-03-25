import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import { provide } from '@lit/context';
import { hamburgerContext,
  type RhNavigationPrimaryHamburgerContext,
} from './context.js';

import styles from './rh-navigation-primary-hamburger.css';

@customElement('rh-navigation-primary-hamburger')
export class RhNavigationPrimaryHamburger extends LitElement {
  static styles = [styles];

  @provide({ context: hamburgerContext }) private ctx = this.#makeContext();

  render() {
    return html`<slot></slot>`;
  }

  #makeContext(): RhNavigationPrimaryHamburgerContext {
    return { hamburger: true };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-primary-hamburger': RhNavigationPrimaryHamburger;
  }
}
