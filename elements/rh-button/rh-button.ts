import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { query } from 'lit/decorators/query.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';

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
export class RhButton extends LitElement {
  static readonly styles = [styles];

  static readonly formAssociated = true;

  static override readonly shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  /** Disables the button */
  @property({ reflect: true, type: Boolean }) disabled = false;

  @property({ reflect: true }) type?: 'button' | 'submit' | 'reset' ;

  /** Accessible name for the button, use when the button does not have slotted text */
  @property() label?: string;  

  @property() ariarole?: string;

  @property() ariaselected?: boolean;

  @property() ariacontrols?: string;

  @property() htmlid?: string;

  /** Form value for the button */
  @property() value?: string;

  /** Form name for the button */
  @property() name?: string;

  /** Shorthand for the `icon` slot, the value is icon name */
  @property() icon?: string;

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

  @colorContextConsumer() private on?: ColorTheme;

  get #hasIcon() {
    return !!this.icon;
  }

  #internals = InternalsController.of(this);

  override willUpdate() {
    const variant = this.variant.toLowerCase();
    switch (variant) {
      case 'close':
      case 'play':
        this.icon = variant;
        break;
    }
  }

  override render() {
    const { on = 'light' } = this;
    const hasIcon = this.#hasIcon;

    return html`
      <button aria-label="${ifDefined(this.label)}"
              class="${classMap({ hasIcon, [on]: !!on })}"
              part="button"
              type="${ifDefined(this.type)}"
              role="${ifDefined(this.ariarole)}"
              value="${ifDefined(this.value)}"
              aria-selected="${ifDefined(this.ariaselected)}"
              aria-controls="tab-panel-${ifDefined(this.htmlid)}"
              @click="${this.#onClick}"
              ?disabled="${this.disabled || this.#internals.formDisabled}">
        <span aria-hidden="true">
          <slot id="icon" part="icon" name="icon">${this.#renderDefaultIcon()}</slot>
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
  #renderDefaultIcon(): TemplateResult | string {
    switch (this.variant.toLowerCase()) {
      // TODO: revisit when rh-icon is ready
      // return html`<rh-icon icon=${this.variant}></rh-icon>`;
      case 'close':
        return html`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M12.54 11.46 8.92 7.83l3.45-3.46a.63.63 0 0 0 0-.88.61.61 0 0 0-.88 0L8 6.94 4.54 3.46a.61.61 0 0 0-.88 0 .63.63 0 0 0 0 .88l3.49 3.49-3.66 3.66a.61.61 0 0 0 0 .88.63.63 0 0 0 .88 0L8 8.71l3.63 3.63a.63.63 0 0 0 .88 0 .61.61 0 0 0 .03-.88Z"/>
          </svg>
        `;
      case 'play':
        return html`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="m12.3 7.5-9-5c-.2-.1-.4-.1-.6 0-.2.1-.3.3-.3.5v10c0 .2.1.4.3.5.1.1.2.1.3.1.1 0 .2 0 .3-.1l9-5c.2-.1.3-.3.3-.5s-.1-.4-.3-.5z"/>
          </svg>
        `;
      default:
        return '';
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
