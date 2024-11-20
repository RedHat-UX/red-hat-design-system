import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import styles from './rh-navigation-secondary-dsd-menu.css';

/**
 * Dropdown menu for secondary nav, available in full-width and fixed-with sizes
 * @summary 'Dropdown menu for secondary nav, available in full-width and fixed-with sizes'
 * @slot                  - Optional `<rh-navigation-secondary-menu-section>` elements or content following [design guidelines](../guidelines/#expandable-tray)
 * @csspart container     - container - `<div>` element, wrapper for menus
 * @csspart full-width    - container - `<div>` element, wrapper for full-width menus
 * @csspart fixed-width   - container - `<div>` element, wrapper for fixed-width menus
 * @csspart sections      - container - `<div>` element, wrapper for menu sections
 * @cssprop  [--rh-navigation-secondary-menu-section-grid=repeat(auto-fit, minmax(15.5rem, 1fr))]
 *          grid-template-columns for menu sections
 * @cssprop  {<length>} [--rh-navigation-secondary-menu-section-grid-gap=32px]
 *           grid-gap for menu sections
 * @cssprop  {<length>} [--rh-navigation-secondary-menu-content-max-width=1136px]
 *           max-width for menu content
 */
@customElement('rh-navigation-secondary-dsd-menu')
export class RhNavigationSecondaryDsdMenu extends LitElement {
  static readonly styles = [styles];

  /**
   * Layout (default: full-width)
   * Secondary nav menus by default are always full-width, but can be set to fixed-width for special cases.
   */
  @property({ reflect: true }) layout: 'fixed-width' | 'full-width' = 'full-width';

  // #screenSize = new ScreenSizeController(this);

  /**
   * `visible` toggles on click (default: true)
   *  @deprecated
   */
  @property({ type: Boolean, reflect: false }) visible = false;

  connectedCallback() {
    super.connectedCallback();
    this.id ||= getRandomId('rh-navigation-secondary-menu');
  }

  render() {
    const { visible } = this;

    return html`
      <div id="container" class="${classMap({ visible })}">${this.layout === 'full-width' ? html`
        <div id="full-width" part="full-width">
          <div id="sections" part="sections">
            <slot></slot>
          </div>
        </div>` : html`
        <div id="fixed-width" part="fixed-width">
          <div id="sections" part="sections">
            <slot></slot>
          </div>
        </div>`}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-secondary-dsd-menu': RhNavigationSecondaryDsdMenu;
  }
}
