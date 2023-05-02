import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import { ScreenSizeController } from '../../lib/ScreenSizeController.js';

import styles from './rh-navigation-secondary-menu.css';

/**
 * @summary 'A pop up menu for secondary nav, available in full-width and fixed-with sizes'
 *
 * @slot                  - Optional `<rh-navigation-secondary-menu-section>` elements or content following [design guidelines](../guidelines/#expandable-tray)
 * @csspart container     - container - <div> element, wrapper for menus
 * @csspart full-width    - container - <div> element, wrapper for full-width menus
 * @csspart fixed-width   - container - <div> element, wrapper for fixed-width menus
 * @csspart sections      - container - <div> element, wrapper for menu sections
 *
 * @cssprop  --rh-navigation-secondary-menu-section-grid - grid-template-columns for menu sections {@default `repeat(auto-fit, minmax(15.5rem, 1fr))`}
 * @cssprop  {<length>} --rh-navigation-secondary-menu-section-grid-gap - grid-gap for menu sections {@default `32px`}
 * @cssprop  {<length>} --rh-navigation-secondary-menu-content-max-width - max-width for menu content {@default `1136px`}
 */
@customElement('rh-navigation-secondary-menu')
export class RhNavigationSecondaryMenu extends LitElement {
  static readonly styles = [styles];

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

@customElement('rh-secondary-nav-menu')
class RhSecondaryNavMenu extends RhNavigationSecondaryMenu {
  #logger = new Logger(this);

  constructor() {
    super();
    this.#logger.warn('rh-secondary-nav-menu is deprecated. Use rh-navigation-secondary-menu instead.');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-navigation-secondary-menu': RhNavigationSecondaryMenu;
    'rh-secondary-nav-menu': RhSecondaryNavMenu;
  }
}
