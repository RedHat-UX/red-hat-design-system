import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import './rh-navigation-universal-dropdown.js';

import styles from './rh-navigation-universal.css';


/**
 * A universal navigation is a secondary navigation element consisting of a list
 * of commonly used links. It is displayed after a skip link and before a
 * primary navigation.
 * @summary Commonly visited links displayed at the very top of a page.
 * @slot - Place an unordered list (`<ul>`) of links into the slot
 * @csspart container - container element for slotted universal navigation
 */

@customElement('rh-navigation-universal')
export class RhNavigationUniversal extends LitElement {
  static readonly styles = [styles];

  /**
   * Set a custom value for `aria-label` on the `<nav>` container
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel = 'Universal Navigation';

  /**
   * Sets the variant to bordered, pushes the navigation to the right, adds borders on hover
   */
  @property({ reflect: true }) variant?: 'bordered';

  #slots = new SlotController(this, 'personalization-link', null);

  render() {
    const personalizationHtml = html`
      <div id="personalization"
           ?hidden="${this.#slots.isEmpty('personalization-link')}"
           part="personalization">
        <rh-icon set="ui" icon="information-fill"></rh-icon>
        <slot name="personalization-link"></slot>
        <rh-icon set="ui" icon="caret-right"></rh-icon>
      </div>
    `;
    return html`
      <nav aria-label="${this.accessibleLabel}" id="container" part="container">
        ${this.variant === 'bordered' ? personalizationHtml : ''}
        <slot id="nav-universal-default-slot"></slot>
      </nav>
    `;
  }

  protected override async getUpdateComplete(): Promise<boolean> {
    if (!this.#slots.isEmpty('personalization-link')) {
      await import('@rhds/elements/rh-icon/rh-icon.js');
    }
    return super.getUpdateComplete();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-universal': RhNavigationUniversal;
  }
}
