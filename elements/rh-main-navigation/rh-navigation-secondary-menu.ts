import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import { ScreenSizeController } from '../../lib/ScreenSizeController.js';

import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import styles from './rh-main-navigation-menu.css';


/**
 * Dropdown menu for secondary nav, available in full-width and fixed-with sizes
 * @summary 'Dropdown menu for secondary nav, available in full-width and fixed-with sizes'
 *
 * @slot                  - Optional `<rh-main-navigation-menu-section>` elements or content following [design guidelines](../guidelines/#expandable-tray)
 * @csspart container     - container - `<div>` element, wrapper for menus
 * @csspart full-width    - container - `<div>` element, wrapper for full-width menus
 * @csspart fixed-width   - container - `<div>` element, wrapper for fixed-width menus
 * @csspart sections      - container - `<div>` element, wrapper for menu sections
 *
 * @cssprop  --rh-main-navigation-menu-section-grid - grid-template-columns for menu sections {@default `repeat(auto-fit, minmax(15.5rem, 1fr))`}
 * @cssprop  {<length>} --rh-main-navigation-menu-section-grid-gap - grid-gap for menu sections {@default `32px`}
 * @cssprop  {<length>} --rh-main-navigation-menu-content-max-width - max-width for menu content {@default `1136px`}
 *
 */
@customElement('rh-main-navigation-menu')
export class RhNavigationSecondaryMenu extends LitElement {
  static readonly styles = [styles];

  /**
   * Color palette (default: lightest)
   * Secondary nav menus are always represented on the lightest color palette.
   */
  @colorContextProvider()
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
    this.id ||= getRandomId('rh-main-navigation-menu');
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

@customElement('rh-navigation-main-menu')
class RhNavigationMainMenu extends RhNavigationSecondaryMenu {
  #logger = new Logger(this);

  constructor() {
    super();
    this.#logger.warn(
      'rh-navigation-main-menu is deprecated. Use rh-main-navigation-menu instead.'
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-main-navigation-menu': RhNavigationSecondaryMenu;
    'rh-navigation-main-menu': RhNavigationMainMenu;
  }
}
