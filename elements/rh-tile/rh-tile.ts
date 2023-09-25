import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import '@patternfly/elements/pf-icon/pf-icon.js';

import styles from './rh-tile.css';

/**
 * Tile
 * @slot - Place element content here
 */
@customElement('rh-tile')
export class RhTile extends LitElement {
  static readonly styles = [styles];

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

  render() {
    const { bleed, compact } = this;
    return html`
      <div id="outer" class="${!compact ? '' : 'compact'}">
        <div id="image" class="${!bleed ? '' : 'bleed'}"><slot name="image"></slot></div>
        <div id="inner">
          <div id="icon">
            <slot name="icon">
              ${!this.icon ? '' : html`<pf-icon icon="${this.icon}" size="md" set="far"></pf-icon>`}
            </slot>
          </div>
          <div id="content">
            <div id="header">
              <div id="title"><slot name="title"></slot></div>
              <div id="headline"><slot name="headline"></slot></div>
              ${!this.checkable ? html`` : html`
                <input type="checkbox" ?checked=${this.checked}>
                <input type="radio" ?checked=${this.checked}>
              `}
            </div>
            <div id="body"><slot></slot></div>
            <div id="footer">
              <div id="footer-text"><slot name="footer"></slot></div>
              ${!this.checkable ?
                html`<pf-icon icon="${this.ariaDisabled !== 'true' ? 'arrow-right' : ''}" size="md" set="fas"></pf-icon>`
                : ''}
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
