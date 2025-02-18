import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import { DirController } from '../../lib/DirController.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

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

  #dir = new DirController(this);

  #slots = new SlotController(this, 'personalization-link', null);

  /**
   * Set a custom value for `aria-label` on the `<nav>` container
   */
  @property({ attribute: 'accessible-label' }) accessibleLabel = 'Universal Navigation';

  /**
   * Color palette darker | lighter (default: lighter)
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette: ColorPalette = 'darkest';

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  render() {
    const rtl = this.#dir.dir === 'rtl';
    const { on = '' } = this;
    const classes = { rtl, on: true, [on]: !!on };
    return html`
      <nav aria-label="${this.accessibleLabel}" id="container" class="${classMap(classes)}">
        <div id="personalization"
             ?hidden="${this.#slots.isEmpty('personalization-link') ?? true}"
             part="personalization">
          <rh-icon set="ui" icon="information-fill"></rh-icon>
          <slot name="personalization-link"></slot>
          <rh-icon set="ui" icon="caret-right"></rh-icon>
        </div>
        <div id="events"><slot name="events"></slot></div>
        <div id="nav"><slot id="nav-universal-default-slot"></slot></div>
      </nav>
    `;
  }

  // protected override async getUpdateComplete(): Promise<boolean> {
  //   if (!this.#slots.isEmpty('personalization-link')) {
  //     await import('@rhds/elements/rh-icon/rh-icon.js');
  //   }
  //   return super.getUpdateComplete();
  // }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-universal': RhNavigationUniversal;
  }
}
