import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';

import { observed } from '@patternfly/pfe-core/decorators.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import { ScreenSizeController } from '../../lib/ScreenSizeController.js';

import styles from './rh-secondary-nav-menu.css';

/**
 * @summary 'A pop up menu for secondary nav, available in full-width and fixed-with sizes'
 *
 * @slot section          - Section, expects `<ul>, <ol>, <rh-secondary-nav-section>` elements, applies auto grid styles on full-width
 * @slot cta              - Menu level CTA, expects a `<rh-cta>`
 *
 * @csspart container     - container - <div> element, wrapper for menus
 * @csspart full-width    - container - <div> element, wrapper for full-width menus
 * @csspart fixed-width   - container - <div> element, wrapper for fixed-width menus
 * @csspart sections      - container - <div> element, wrapper for menu sections
 * @csspart cta           - container - <div> element, wrapper for cta
 */
@customElement('rh-secondary-nav-menu')
export class RhSecondaryNavMenu extends LitElement {
  static readonly styles = [styles];

  @property({ reflect: true }) layout: 'fixed-width' | 'full-width' = 'full-width';

  @query('#container') _container?: HTMLElement;

  #screenSize = new ScreenSizeController(this);

  /**
   * `compact` property is true when viewport `(min-width: ${tabletLandscapeBreakpoint})`.
   * Property is observed for changes, and its value is updated using matchMediaController
   * when viewport changes at breakpoint or first load of the component.
   */
   @observed
   @state() private _compact = false;

   /**
    * ScreenSizeController effects callback to set _compact
    */
   protected screenSize = new ScreenSizeController(this, 'tabletLandscape', {
     onChange: matches => {
       this._compact = !matches;
     }
   });

  /**
   * `visible` property is false initially then when a dropdown is clicked is toggled
   */
  @state() visible = false;

  connectedCallback() {
    super.connectedCallback();

    this.id ||= getRandomId('rh-secondary-nav-menu');
  }

  render() {
    const classes = { 'compact': this._compact, 'visible': this.visible };

    return html`
      <div id="container" class="${classMap(classes)}">${this.layout === 'full-width' ? html`
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
    'rh-secondary-nav-menu': RhSecondaryNavMenu;
  }
}
