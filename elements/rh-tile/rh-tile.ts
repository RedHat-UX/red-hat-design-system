import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';
import '@patternfly/elements/pf-icon/pf-icon.js';

import styles from './rh-tile.css';

/**
 * Tile
 * @slot - Place element content here
 */
@customElement('rh-tile')
export class RhTile extends LitElement {
  static readonly styles = [styles];

  private static readonly _disabledIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g id="uuid-0fd9e805-a455-40ef-9171-f2f334832bf2"><rect width="48" height="48" fill="none"/></g><g id="uuid-48f9e284-0601-4fcd-bbe7-8b444234ac6c"><path d="m24,7c-9.37,0-17,7.63-17,17s7.63,17,17,17,17-7.63,17-17S33.37,7,24,7Zm15,17c0,3.52-1.23,6.76-3.27,9.32L14.68,12.27c2.56-2.04,5.8-3.27,9.32-3.27,8.27,0,15,6.73,15,15Zm-30,0c0-4.03,1.61-7.69,4.2-10.38l21.18,21.18c-2.7,2.6-6.35,4.2-10.38,4.2-8.27,0-15-6.73-15-15Z"/></g></svg>`;

  /**
   * whether tile interaction is disabled but retains ability to be read by screen readers;
   * preferred method of disabling instead of `disabled`
   */
  @property({ reflect: true, attribute: 'aria-disabled', type: String }) ariaDisabled = 'false';

  /**
   * whether image is full-width (i.e. bleeds into the padding)
   */
  @property({ attribute: 'bleed', type: Boolean }) bleed = false;

  /**
   * whether headline link text is a desaturated color instead of blue;
   * `true` sets headline color to white on dark tiles or black on light tiles
   */
  @property({ attribute: 'desaturated', type: Boolean }) desaturated = false;

  /**
   * reduces tile padding for more compact spaces
   */
  @property({ attribute: 'compact', type: Boolean }) compact = false;

  /**
   * namespace of icon
   */
  @property({ attribute: 'icon', type: String }) icon = false;

  /**
   * whether tile can be checked like a radio or checkbox:
   * `false` (default) - tile behaves like a link;
   * `true` - tile behaves like a checkbox unless it is part of an
   * `rh-tile-group` with a `radio` type and more than one tile
   */
  @property({ attribute: 'checkable', type: Boolean }) checkable = false;

  /**
   * if tile is checkable, whether it is currently checked
   */
  @property({ attribute: 'checked', type: Boolean }) checked = false;

  @queryAssignedElements({ slot: 'headline' }) private _headline?: HTMLElement;

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  /**
   * Sets color palette, which affects the element's styles as well as descendants' color theme.
   * Overrides parent color context.
   * Your theme will influence these colors so check there first if you are seeing inconsistencies.
   * See [CSS Custom Properties](#css-custom-properties) for default values
   *
   * Tile always resets its context to `base`, unless explicitly provided with a `color-palette`.
   */
  @colorContextProvider()

  render() {
    const { bleed, compact, checkable, on = '' } = this;
    return html`
      <div id="outer" class="${classMap({ [on]: !!on, compact, bleed })}">
        <div id="image"><slot name="image"></slot></div>
        <div id="inner" class="${!checkable ? '' : 'checkable'}">
          ${!this.checkable ?
            html`
              <div id="icon">
                <slot name="icon">
                  ${!this.icon ? '' : html`<pf-icon icon="${this.icon}" size="md" set="far"></pf-icon>`}
                </slot>
              </div>` : ''}
          <div id="content">
            <div id="header">
              <div id="title"><slot name="title"></slot></div>
              <div id="headline"><slot name="headline"></slot></div>
              ${!this.checkable ? html`` : html`
                <input type="checkbox" ?checked=${this.checked} ?disabled="${this.ariaDisabled === 'true'}">
                <input type="radio" ?checked=${this.checked} ?disabled="${this.ariaDisabled === 'true'}">
              `}
              </div>
            <div id="body"><slot></slot></div>
            <div id="footer">
              <div id="footer-text"><slot name="footer"></slot></div>
              ${!this.checkable && this.ariaDisabled !== 'true' ?
                html`<pf-icon icon="arrow-right" size="md" set="fas"></pf-icon>` : !this.checkable ?
                RhTile._disabledIcon : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tile': RhTile;
  }
}
