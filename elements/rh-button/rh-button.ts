import type { IconNameFor, IconSetName } from '@rhds/icons';

import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { themable } from '../../lib/context/color/consumer.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import styles from './rh-button.css';

/**
 * A button is clickable text or an icon that triggers an action on the page or in the background.
 * Depending on the action, content, and hierarchy, a button can be used on its own or grouped with
 * other buttons.
 * @summary Triggers actions on the page or in the background
 * @csspart button - Internal button element
 * @csspart icon - Container for the icon slot
 * @slot icon - Contains the button's icon or state indicator, e.g. a spinner.
 * @slot - Contains button text
 */
@customElement('rh-button')
@themable
export class RhButton extends LitElement {
  static readonly styles = [styles];

  static readonly formAssociated = true;

  static override readonly shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  /** Disables the button */
  @property({ reflect: true, type: Boolean }) disabled = false;

  /**
   * button type
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type
   */
  @property({ reflect: true }) type?: 'button' | 'submit' | 'reset';

  /** Accessible name for the button, use when the button does not have slotted text */
  @property() label?: string;

  /** Form value for the button */
  @property() value?: string;

  /** Form name for the button */
  @property() name?: string;

  /** Shorthand for the `icon` slot, the value is icon name */
  @property() icon?: IconNameFor<IconSetName>;

  /** Icon set for the `icon` property - 'ui' by default */
  @property({ attribute: 'icon-set' }) iconSet?: IconSetName;

  @query('button') private _button!: HTMLButtonElement;

  /**
   * Changes the style of the button.
   * - Primary: Used for the most important call to action on a page. Try to
   *   limit primary buttons to one per page.
   * - Secondary: Use secondary buttons for general actions on a page, that
   *   don’t require as much emphasis as primary button actions. For example,
   *   you can use secondary buttons where there are multiple actions, like in
   *   toolbars or data lists.
   * - Tertiary: Tertiary buttons are flexible and can be used as needed.
   */
  @property({ reflect: true }) variant:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'close'
    | 'play' = 'primary';

  /**
   * Use danger buttons for actions a user can take that are potentially
   * destructive or difficult/impossible to undo, like deleting or removing
   * user data.
   */
  @property({ type: Boolean, reflect: true }) danger = false;

  get #hasIcon() {
    return this.variant === 'play' || this.variant === 'close' || !!this.icon;
  }

  #internals = InternalsController.of(this);

  override willUpdate() {
    if (this.#hasIcon) {
      import('@rhds/elements/rh-icon/rh-icon.js');
    }
  }

  override render() {
    const { danger, variant } = this;
    const hasIcon = this.#hasIcon;
    return html`
      <button aria-label="${ifDefined(this.label)}"
              class="${classMap({
                danger,
                hasIcon,
                [variant]: true,
              })}"
              part="button"
              type="${ifDefined(this.type)}"
              value="${ifDefined(this.value)}"
              @click="${this.#onClick}"
              aria-disabled=${String(!!this.disabled || !!this.#internals.formDisabled) as 'true' | 'false'}>
        <span aria-hidden="true">
          <slot id="icon"
                part="icon"
                name="icon">${this.#renderIcon()}</slot>
        </span>
        <span aria-hidden=${String(!!this.label) as 'true' | 'false'}><slot id="text" ></slot></span>
      </button>
    `;
  }

  protected async formDisabledCallback() {
    await this.updateComplete;
    this.requestUpdate();
  }

  #onClick() {
    switch (this.type) {
      case 'reset':
        return this.#internals.reset();
      default:
        return this.#internals.submit();
    }
  }

  /**
   * Fallback content for the icon slot. When the `icon` attribute is set, it
   * should render an icon corresponding to the value.
   * @example ```html
   *          <base-icon icon=${this.icon}></base-icon>
   *          ```
   */
  #renderIcon(): TemplateResult {
    switch (this.variant.toLowerCase()) {
      case 'close':
        return html`<rh-icon set="microns" icon="close"></rh-icon>`;
      case 'play':
        return html`<rh-icon set="ui" icon="play-fill"></rh-icon>`;
      default:
        return html`<rh-icon set="${this.iconSet ?? 'ui'}" icon="${this.icon}"></rh-icon>`;
    }
  }

  focus() {
    this._button?.focus();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-button': RhButton;
  }
}
