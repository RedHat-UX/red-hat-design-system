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

import { colorPalettes, type ColorPalette } from '@rhds/elements/lib/color-palettes.js';
import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-tile.css';

export class TileSelectEvent extends Event {
  declare target: RhTile;
  constructor(public force?: boolean) {
    super('select', { bubbles: true, cancelable: true });
  }
}

/**
 * A tile is a flexible layout with a clickable and contained surface.
 *
 * @summary Creates a clickable, contained surface
 *
 * @alias tile
 *
 * @fires {TileSelectEvent} select - when tile is clicked
 */
@customElement('rh-tile')
@colorPalettes
@themable
export class RhTile extends LitElement {
  static readonly styles = [styles];

  static readonly formAssociated = true;

  declare shadowRoot: ShadowRoot;

  /**
   * Whether image is full-width (i.e. bleeds into the padding)
   */
  @property({ type: Boolean }) bleed = false;

  /**
   * Whether headline link text is a desaturated color instead of blue;
   * `true` sets headline color to white on dark tiles or black on light tiles
   */
  @property({ type: Boolean }) desaturated = false;

  /**
   * Reduces tile padding for more compact spaces
   */
  @property({ type: Boolean }) compact = false;


  /**
   * The icon to display in the tile
   */
  @property({ reflect: true }) icon?: IconNameFor<IconSetName>;

  /**
   * Icon set to display in the tile
   */
  @property({ attribute: 'icon-set' }) iconSet: IconSetName = 'standard';

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
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  /** Form name */
  @property() name?: string;

  /** Form value */
  @property() value?: string;

  /**
   * When true, tile behaves like a checkbox unless it is part of an
   * `<rh-tile-group radio>`, in which case it behaves like a radio button
   */
  @property({ type: Boolean }) checkable = false;

  /**
   * If tile is checkable, whether it is currently checked
   */
  @property({ type: Boolean, reflect: true }) checked = false;

  /**
   * Whether tile interaction is disabled
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * Sets color palette, which affects the element's styles as well as descendants' color theme.
   * Overrides parent color context.
   * Your theme will influence these colors so check there first if you are seeing inconsistencies.
   * See [CSS Custom Properties](#css-custom-properties) for default values
   *
   * Tile always resets its context to `base`, unless explicitly provided with a `color-palette`.
   */
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  /** When set to "private", the icon representing the link changes from an arrow to a padlock */
  @property() link?: 'private' | 'public' | 'external';

  // TODO(bennyp): https://lit.dev/docs/data/context/#content
  @state() private disabledGroup = false;

  // TODO(bennyp): https://lit.dev/docs/data/context/#content
  @state() private radioGroup = false;

  #internals = InternalsController.of(this);

  #logger = new Logger(this);

  #slots = new SlotController(this, 'image', 'icon', 'title', 'headline', null, 'footer');

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
    const { bleed, compact, checkable, checked, desaturated } = this;
    const disabled = this.disabledGroup || this.disabled || this.#internals.formDisabled;
    const hasSlottedIcon = this.#slots.hasSlotted('icon');
    const linkIcon =
        this.checkable ? ''
      : this.disabled ? 'ban'
      : this.link === 'private' ? 'lock'
      : this.link === 'external' ? 'external-link'
                                 : 'arrow-right';
    return html`
      <div id="outer" class="${classMap({ bleed, checkable, compact, checked, desaturated, disabled })}">
        <!-- optional image on top of tile -->
        <slot id="image"
              name="image"
              ?hidden="${this.checkable}"
        ></slot>
        <div id="inner">
          <!-- optional icon -->
          <slot id="icon"
                class="${classMap({ compact, checkable })}"
                name="icon"
                ?hidden="${this.icon === undefined && !hasSlottedIcon}">${this.icon === undefined ? ''
      : html`<rh-icon icon="${ifDefined(this.icon)}" set="${this.iconSet}"></rh-icon>`}
          </slot>
          <div id="content">
            <div id="header">
              <!-- A title provides secondary descriptive context. Selectable and compact tiles do not have title slots -->
              <slot id="title"
                    name="title"
                    ?hidden="${this.checkable || this.compact}"></slot>
              <!-- In a link tile, the heading should indicate what clicking on the tile will do. In a selectable tile, the heading labels the radio button or checkbox. -->
              <slot id="headline" name="headline"></slot>
              <div id="input-outer" aria-hidden="true" ?hidden="${!this.#isCheckable}" ?inert="${!this.#isCheckable}">
                <input id="input"
                       type="${this.radioGroup ? 'radio' : 'checkbox'}"
                       tabindex="-1"
                       ?checked="${checked}"
                       ?disabled="${disabled}"></input>
              </div>
            </div>
            <!-- The body text expands on heading content and gives the user more information. -->
            <slot id="body" class="${classMap({ empty: this.#slots.isEmpty() })}"></slot>
            <div id="footer" class="${classMap({ empty: this.#slots.isEmpty('footer') })}">
              <!-- Footer text should be brief and be used for supplementary information only. -->
              <slot id="footer-text" name="footer"></slot><rh-icon set="ui" icon="${linkIcon}"></rh-icon>
            </div>
          </div>
        </div>
      </div>
    `;
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
