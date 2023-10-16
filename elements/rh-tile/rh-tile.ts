import { LitElement, html, type PropertyValueMap } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { ComposedEvent } from '@patternfly/pfe-core';

import '@patternfly/elements/pf-icon/pf-icon.js';

import styles from './rh-tile.css';

export class TileSelectEvent extends ComposedEvent {
  declare target: RhTile;
  constructor() {
    super('select');
  }
}

/**
 * A tile is a flexible layout with a clickable and contained surface.
 *
 * @summary Creates a clickable, contained surface
 *
 * @fires {TileSelectEvent} select - when tile is clicked
 * @slot image - optional image on top of tile
 * @slot icon - optional icon
 * @slot title - optional title
 * @slot headline - optional headline / link title
 * @slot - optional body content
 * @slot footer - optional footer
 * @cssprop --rh-tile-text-color - color of text - {@default var(--rh-color-text-primary-on-light, #151515)}
 * @cssprop --rh-tile-text-color-secondary - disabled text and icons - {@default var(--rh-color-text-secondary-on-light, #4d4d4d)}
 * @cssprop --rh-tile-interactive-color - color of interactive elements - {@default var(--rh-color-border-interactive-on-light, #0066cc)}
 * @cssprop --rh-tile-link-color - color of tile link - {@default var(--rh-tile-interactive-color)}
 * @cssprop --rh-tile-link-text-decoration - tile link text decoration - {@default none}
 * @cssprop --rh-tile-background-color - color tile surface - {@default var(--rh-color-surface-lightest, #ffffff)}
 * @cssprop --rh-tile-focus-background-color - color tile surface on focus/hover - {@default var(--rh-color-surface-lighter, #f2f2f2)}
 * @cssprop --rh-tile-disabled-background-color - color tile surface when disabled - {@default var(--rh-color-surface-light, #e0e0e0)}
 * @cssprop --rh-tile-border-color - color of tile border - {@default var(--rh-color-border-subtle-on-light, #c7c7c7)}
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
  @property({ type: Boolean }) checkable = false;

  /**
   * if tile is checkable, whether it is currently checked
   */
  @property({ attribute: 'checked', type: Boolean }) checked = false;

  /**
   * if tile is checkable, whether only one tile in a group can be checked
   */
  @property({ attribute: 'radio', type: Boolean }) radio = false;

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
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  #internals = new InternalsController(this, { });

  connectedCallback(): void {
    super.connectedCallback();
    this.#internals.ariaChecked = this.checkable && this.checked ? 'true' : 'false';
    this.#internals.role = this.checkable && this.radio ? 'radio' : this.checkable ? 'checkbox' : null;
    if (this.checkable && !this.radio) {
      this.setAttribute('tabindex', '0');
    } else if (!this.radio) {
      this.removeAttribute('tabindex');
    }
    this.addEventListener('keydown', this.#onKeydown);
    this.addEventListener('keyup', this.#onKeyup);
    this.addEventListener('click', this.#onClick);
  }

  protected async updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>) {
    if (_changedProperties.has('checked') || _changedProperties.has('checkable')) {
      this.#internals.ariaChecked = this.checkable && this.checked ? 'true' : 'false';
      await this.updateComplete;
      if (!this.checked) {
        this.shadowRoot?.querySelector('form')?.reset();
      }
      this.dispatchEvent(new TileSelectEvent());
      return;
    }

    if (_changedProperties.has('radio') || _changedProperties.has('checkable')) {
      this.#internals.role = this.checkable && this.radio ? 'radio' : this.checkable ? 'checkbox' : null;
      if (this.checkable && !this.radio) {
        this.setAttribute('tabindex', '0');
      } else if (!this.radio) {
        this.removeAttribute('tabindex');
      }
    }
  }

  render() {
    const { bleed, compact, checkable, checked, desaturated, on = '' } = this;
    return html`
      <div id="outer" class="${classMap({ bleed, checkable, compact, checked, desaturated, [on]: !!on })}">
        ${this.checkable ? '' : html`<div id="image"><slot name="image"></slot></div>`}
        <div id="inner">
          ${!this.checkable ?
            html`
              <div id="icon">
                <slot name="icon">
                  ${!this.icon ? '' : html`<pf-icon icon="${this.icon}" size="md" set="far"></pf-icon>`}
                </slot>
              </div>` : ''}
          <div id="content">
            <div id="header">
              ${(!this.checkable && !this.compact) ?
                 html`
                   <div id="title">
                    <slot name="title"></slot>
                   </div>` : ''}
              <div id="headline"><slot name="headline"></slot></div>
              ${!this.checkable ? '' : html`
                <form id="form" aria-hidden="true">
                    <input 
                      type="${this.radio ? 'radio' : 'checkbox'}" 
                      tabindex="-1"
                      ?checked=${this.checked}
                      ?disabled=${this.ariaDisabled === 'true'}>
                </form>
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

  disconnectedCallback(): void {
    this.removeEventListener('keydown', this.#onKeydown);
    this.removeEventListener('keyup', this.#onKeyup);
    this.removeEventListener('click', this.#onClick);
    super.disconnectedCallback();
  }

  /**
   * handles tile click
   */
  #onClick(event: Event) {
    const { target } = event;
    if (target === this && this.checkable) {
      this.checked = !this.checked;
    }
  }

  /**
   * handles keydown and prevents scrolling when spacebar is clicked
   * @param event {KeyboardEvent}
   */
  #onKeydown(event: KeyboardEvent) {
    const { target, key } = event;
    if (key === ' ' && target === this && this.checkable) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }

  /**
   * handles key up and toggles input
   * @param event {KeyboardEvent}
   */
  #onKeyup(event: KeyboardEvent) {
    const { target, key } = event;
    if (['Enter', ' '].includes(key) && target === this && this.checkable) {
      this.checked = !this.checked;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tile': RhTile;
  }
}
