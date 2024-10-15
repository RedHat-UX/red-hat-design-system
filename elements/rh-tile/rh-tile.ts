import { LitElement, html, type PropertyValues } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import type { IconNameFor, IconSetName } from '@rhds/icons';

import '@rhds/elements/rh-icon/rh-icon.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';

import styles from './rh-tile.css';

export class TileSelectEvent extends Event {
  declare target: RhTile;
  constructor(public force?: boolean) {
    super('select', { bubbles: true, cancelable: true });
  }
}

/**
 * A tile is a flexible layout with a clickable and contained surface.
 * @summary Creates a clickable, contained surface
 * @fires {TileSelectEvent} select - when tile is clicked
 * @slot image - optional image on top of tile
 * @slot icon - optional icon
 * @slot title - optional title
 * @slot headline - optional headline / link title
 * @slot - optional body content
 * @slot footer - optional footer
 * @cssprop [--rh-tile-text-color=var(--rh-color-text-primary-on-light, #151515)] - Color of text.<br>Could cause accessibility issues; prefer to use `--rh-color-text-primary-on-light` and `--rh-color-text-primary-on-dark` for theming.
 * @cssprop [--rh-tile-text-color-secondary=var(--rh-color-text-secondary-on-light, #4d4d4d)] - Disabled text and icons.<br>Could cause accessibility issues; prefer to use `--rh-color-text-secondary-on-light` and `--rh-color-text-secondary-on-dark` for theming.
 * @cssprop [--rh-tile-interactive-color=var(--rh-color-border-interactive-on-light, #0066cc)] - Color of interactive elements.<br>Could cause accessibility issues; prefer to use `--rh-color-border-interactive-on-light` and `--rh-color-border-interactive-on-dark` for theming.
 * @cssprop [--rh-tile-link-color=var(--rh-tile-interactive-color)] - Color of tile link.
 * @cssprop [--rh-tile-link-text-decoration=none] - Tile link text decoration
 * @cssprop [--rh-tile-background-color=var(--rh-color-surface-lightest, #ffffff)] - Color tile surface.<br>Could cause accessibility issues; prefer to use `--rh-color-surface-lightest` and `--rh-color-surface-darkest` for theming.
 * @cssprop [--rh-tile-focus-background-color=var(--rh-color-surface-lighter, #f2f2f2)] - Color tile surface on focus/hover.<br>Could cause accessibility issues; prefer to use `--rh-color-surface-lighter` and `--rh-color-surface-darker` for theming.
 * @cssprop [--rh-tile-disabled-background-color=var(--rh-color-surface-light, #e0e0e0)] - Color tile surface when disabled.<br>Could cause accessibility issues; prefer to use `--rh-color-surface-light` and `--rh-color-surface-dark` for theming.
 * @cssprop [--rh-tile-border-color=var(--rh-color-border-subtle-on-light, #c7c7c7)] - Color of tile border.<br>Could cause accessibility issues; prefer to use `--rh-color-border-subtle-on-light` and `--rh-color-border-subtle-on-dark` for theming.
 */
@customElement('rh-tile')
export class RhTile extends LitElement {
  static readonly styles = [styles];

  static readonly formAssociated = true;

  declare shadowRoot: ShadowRoot;

  /**
   * Whether image is full-width (i.e. bleeds into the padding)
   */
  @property({ type: Boolean })
  accessor bleed = false;

  /**
   * Whether headline link text is a desaturated color instead of blue;
   * `true` sets headline color to white on dark tiles or black on light tiles
   */
  @property({ type: Boolean })
  accessor desaturated = false;

  /**
   * Reduces tile padding for more compact spaces
   */
  @property({ type: Boolean })
  accessor compact = false;


  /**
   * The icon to display in the tile
   */
  @property({ reflect: true })
  accessor icon: IconNameFor<IconSetName> | undefined;

  /**
   * Icon set to display in the tile
   */
  @property({ attribute: 'icon-set' })
  accessor iconSet: IconSetName = 'standard';

  /**
   * When checkable, the accessible (visually hidden) label for the form control
   * If not set, the text content of the tile element will be used instead.
   * @example Setting an accessible label when there is no text content
   *          ```html
   *          <form>
   *            <rh-tile-group radio>
   *              <rh-tile name="radio" value="1">Tile 1</rh-tile>
   *              <rh-tile name="radio" value="2">Tile 2</rh-tile>
   *              <rh-tile name="radio"
   *                       value="3"
   *                       accessible-label="Tile 3">
   *                <img slot="image"
   *                     role="presentation"
   *                     src="tile-3.webp">
   *              </rh-tile>
   *            </rh-tile-group>
   *          </form>
   *          ```
   */
  @property({ attribute: 'accessible-label' })
  accessor accessibleLabel: string | undefined;

  /** Form name */
  @property()
  accessor name: string | undefined;

  /** Form value */
  @property()
  accessor value: string | undefined;

  /**
   * When true, tile behaves like a checkbox unless it is part of an
   * `<rh-tile-group radio>`, in which case it behaves like a radio button
   */
  @property({ type: Boolean })
  accessor checkable = false;

  /**
   * If tile is checkable, whether it is currently checked
   */
  @property({ type: Boolean, reflect: true })
  accessor checked = false;

  /**
   * Whether tile interaction is disabled
   */
  @property({ type: Boolean, reflect: true })
  accessor disabled = false;

  /**
   * Sets color palette, which affects the element's styles as well as descendants' color theme.
   * Overrides parent color context.
   * Your theme will influence these colors so check there first if you are seeing inconsistencies.
   * See [CSS Custom Properties](#css-custom-properties) for default values
   *
   * Tile always resets its context to `base`, unless explicitly provided with a `color-palette`.
   */
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' })
  accessor colorPalette: ColorPalette | undefined;

  /** When set to "private", the icon representing the link changes from an arrow to a padlock */
  @property()
  accessor link: 'private' | 'public' | 'external' | undefined;

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer()
  private accessor on: ColorTheme | undefined;

  // TODO(bennyp): https://lit.dev/docs/data/context/#content
  @state()
  private accessor disabledGroup = false;

  // TODO(bennyp): https://lit.dev/docs/data/context/#content
  @state()
  private accessor radioGroup = false;

  #internals = InternalsController.of(this);

  #logger = new Logger(this);

  #slots = new SlotController(this, { slots: ['icon'] });

  get #isCheckable() {
    return !!this.radioGroup || this.checkable;
  }

  get #input(): HTMLInputElement | null {
    return this.shadowRoot.getElementById('input') as HTMLInputElement;
  }

  constructor() {
    super();
    this.addEventListener('keydown', this.#onKeydown);
    this.addEventListener('keyup', this.#onKeyup);
    this.addEventListener('click', this.#onClick);
  }

  /**
   * Update the internal accessible representation of the element's state
   * @param changed - the reactive properties which changed this cycle, and their old values
   */
  override async willUpdate(changed: PropertyValues<this>) {
    this.#internals.role = this.radioGroup ? 'radio' : this.checkable ? 'checkbox' : null;
    this.#internals.ariaChecked = !this.#isCheckable ? null : String(!!this.checked);
    this.#internals.ariaDisabled = !this.#isCheckable ? null : String(!!this.disabled);
    this.#internals.ariaLabel =
      !(this.#isCheckable && this.accessibleLabel) ? null : this.accessibleLabel;
    if (changed.has('value') || changed.has('checked')) {
      const formValue = this.#isCheckable && this.checked ? this.value ?? null : null;
      this.#internals.setFormValue(formValue);
    }
    if (this.checkable && !this.radioGroup) {
      this.setAttribute('tabindex', '0');
    } else if (!this.radioGroup) {
      this.removeAttribute('tabindex');
    }
  }

  render() {
    const { bleed, compact, checkable, checked, colorPalette, desaturated, on = 'light' } = this;
    const disabled = this.disabledGroup || this.disabled || this.#internals.formDisabled;
    const hasSlottedIcon = this.#slots.hasSlotted('icon');
    return html`
      <div id="outer" class="${classMap({
            bleed,
            checkable,
            compact,
            checked,
            desaturated,
            disabled,
            on: true,
            [on]: true,
            [`palette-${colorPalette}`]: !!colorPalette,
          })}">
        <slot id="image"
              name="image"
              ?hidden="${this.checkable}"
        ></slot>
        <div id="inner">
          <slot id="icon" name="icon" ?hidden="${this.icon === undefined && !hasSlottedIcon}">
            ${this.icon !== undefined ?
              html`<rh-icon icon="${ifDefined(this.icon)}" set="${this.iconSet}"></rh-icon>`
              : html``}
          </slot>
          <div id="content">
            <div id="header">
              <slot id="title"
                    name="title"
                    ?hidden="${this.checkable || this.compact}"></slot>
              <slot id="headline" name="headline"></slot>
              <div id="input-outer" aria-hidden="true" ?hidden="${!this.#isCheckable}" ?inert="${!this.#isCheckable}">
                <input id="input"
                       type="${this.radioGroup ? 'radio' : 'checkbox'}"
                       tabindex="-1"
                       ?checked="${checked}"
                       ?disabled="${disabled}"></input>
              </div>
            </div>
            <slot id="body"></slot>
            <div id="footer">
              <slot id="footer-text" name="footer"></slot>${this.#renderLinkIcon()}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  #renderLinkIcon() {
    if (this.checkable) {
      return '';
    } else if (this.disabled) {
      return html`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g id="uuid-0fd9e805-a455-40ef-9171-f2f334832bf2"><rect width="48" height="48" fill="none"/></g><g id="uuid-48f9e284-0601-4fcd-bbe7-8b444234ac6c"><path d="m24,7c-9.37,0-17,7.63-17,17s7.63,17,17,17,17-7.63,17-17S33.37,7,24,7Zm15,17c0,3.52-1.23,6.76-3.27,9.32L14.68,12.27c2.56-2.04,5.8-3.27,9.32-3.27,8.27,0,15,6.73,15,15Zm-30,0c0-4.03,1.61-7.69,4.2-10.38l21.18,21.18c-2.7,2.6-6.35,4.2-10.38,4.2-8.27,0-15-6.73-15-15Z"/></g></svg>`;
    } else if (this.link === 'private') {
      return html`<rh-icon set="ui" icon="lock"></rh-icon>`;
    } else if (this.link === 'external') {
      return html`<rh-icon set="microns" icon="external-link"></rh-icon>`;
    } else {
      return html`<rh-icon set="ui" icon="arrow-right"></rh-icon>`;
    }
  }

  async formDisabledCallback() {
    await this.updateComplete;
    this.requestUpdate();
  }

  async formStateRestoreCallback(state: string, mode: string) {
    if (this.checkable && mode === 'restore') {
      const [maybeControlMode, maybeValue] = state.split('/');
      if (maybeValue ?? maybeControlMode === this.value) {
        this.#requestSelect(!!this.radioGroup);
      }
    }
  }

  #setValidityFromInput() {
    if (!this.#input) {
      this.#logger.warn('await updateComplete before validating');
    } else {
      this.#internals.setValidity(
        this.#input.validity,
        this.#input.validationMessage,
      );
    }
  }

  setCustomValidity(message: string) {
    this.#internals.setValidity({}, message);
  }

  checkValidity() {
    this.#setValidityFromInput();
    return this.#internals.checkValidity();
  }

  reportValidity() {
    this.#setValidityFromInput();
    return this.#internals.reportValidity();
  }

  /**
   * handles tile click
   * @param event click event
   */
  #onClick(event: Event) {
    if (event.target === this) {
      this.#requestSelect();
    }
  }

  #requestSelect(force?: boolean) {
    if (this.checkable
        && !this.disabled
        && !this.disabledGroup) {
      if (this.radioGroup) {
        this.dispatchEvent(new TileSelectEvent(force));
      } else {
        this.checked = !this.checked;
      }
    }
  }

  /**
   * Prevent scrolling when spacebar is pressed down
   * @param event keydown
   */
  #onKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case ' ':
        if (event.target === this && this.checkable) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
        break;
    }
  }

  /**
   * handles key up and toggles input
   * @param event keyup
   */
  #onKeyup(event: KeyboardEvent) {
    switch (event.key) {
      case 'Enter':
      case ' ':
        if (event.target === this) {
          this.#requestSelect();
        }
        break;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-tile': RhTile;
  }
}
