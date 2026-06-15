import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import { ScreenSizeController } from '../../lib/ScreenSizeController.js';

import { colorPalettes, type ColorPalette } from '@rhds/elements/lib/color-palettes.js';

import styles from './rh-navigation-secondary-menu.css' with { type: 'css' };


/**
 * Expandable dropdown menu panel for secondary navigation. Provides
 * `full-width` (default) and `fixed-width` layouts with content
 * organized in a CSS grid. Must be placed inside the `menu` slot of
 * an `<rh-navigation-secondary-dropdown>`. Tab navigates through
 * menu content; Escape closes the menu. Screen readers access
 * content via section headings and `aria-labelledby` associations.
 *
 * @summary Expandable dropdown menu panel for secondary navigation
 */
@customElement('rh-navigation-secondary-menu')
@colorPalettes
export class RhNavigationSecondaryMenu extends LitElement {
  static readonly styles = [styles];

  /**
   * Color palette for the menu panel surface. Should remain `'lightest'`
   * (default) as secondary nav menus always render on a light surface.
   * Defaults to `'lightest'`.
   */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette: ColorPalette = 'lightest';

  /**
   * Controls the menu panel width. `'full-width'` (default) spans the browser
   * width with content in a responsive grid. `'fixed-width'` constrains the
   * panel to its content width, positioned below the trigger link. USE
   * `'fixed-width'` for simple menus with fewer sections. Defaults to `'full-width'`.
   */
  @property({ reflect: true }) layout: 'fixed-width' | 'full-width' = 'full-width';

  #screenSize = new ScreenSizeController(this);

  /**
   * Controls whether the menu panel is visible. Managed automatically by the
   * parent `<rh-navigation-secondary-dropdown>`. When `true`, the menu is
   * displayed; when `false`, it is hidden. AVOID setting directly.
   * Defaults to `false`.
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
      <!-- container - \`<div>\` element, wrapper for menus -->
      <div id="container" class="${classMap({ compact, visible })}">${this.layout === 'full-width' ? html`
        <!-- container - \`<div>\` element, wrapper for full-width menus -->
        <div id="full-width" part="full-width">
          <!-- container - \`<div>\` element, wrapper for menu sections -->
          <div id="sections" part="sections">
            <!-- summary: menu content
                 description: |
                   Should contain \`<rh-navigation-secondary-menu-section>\` elements
                   with headings. Screen readers navigate sections via
                   \`aria-labelledby\` associations between headings and link lists. -->
            <slot></slot>
          </div>
        </div>` : html`
        <!-- container - \`<div>\` element, wrapper for fixed-width menus -->
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
