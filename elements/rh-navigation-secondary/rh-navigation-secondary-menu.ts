import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import { ScreenSizeController } from '../../lib/ScreenSizeController.js';

import { colorSchemeProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import styles from './rh-navigation-secondary-menu.css';


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
@customElement('rh-navigation-secondary-menu')
@colorSchemeProvider()
export class RhNavigationSecondaryMenu extends LitElement {
  static readonly styles = [styles];

  /**
   * Color palette (default: lightest)
   * Secondary nav menus are always represented on the lightest color palette.
   */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette: ColorPalette = 'lightest';

  /**
   * Layout (default: full-width)
   * Secondary nav menus by default are always full-width, but can be set to fixed-width for special cases.
   */
  @property({ reflect: true }) layout: 'fixed-width' | 'full-width' = 'full-width';

  #screenSize = new ScreenSizeController(this);

  /**
   * `visible` toggles on click (default: false)
   */
  @property({ type: Boolean }) visible = false;

  connectedCallback() {
    super.connectedCallback();
    this.id ||= getRandomId('rh-navigation-secondary-menu');
  }

  render() {
    const { visible } = this;
    const compact = this.#screenSize.matches.has('md');

    return html`
      <div id="container" class="${classMap({ compact, visible })}">${this.layout === 'full-width' ? html`
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
    'rh-navigation-secondary-menu': RhNavigationSecondaryMenu;
  }
}
