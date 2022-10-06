import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { submit } from '../../lib/forms.js';

import styles from './rh-button.css';

/**
 */
@customElement('rh-button')
export class RhButton extends LitElement {
  static readonly version = '{{version}}';

  static readonly styles = [styles];

  static readonly formAssociated = true;

  static readonly shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  #initiallyDisabled = this.hasAttribute('disabled');
  @property({ type: Boolean }) disabled = this.#initiallyDisabled;

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
  @property({ reflect: true }) variant: 'primary'|'secondary'|'tertiary'|'close'|'play' = 'primary';

  /**
   * Use danger buttons for actions a user can take that are potentially
   * destructive or difficult/impossible to undo, like deleting or removing
   * user data.
   */
  @property({ type: Boolean, reflect: true }) danger = false;

  @property({ reflect: true }) type?: 'button' | 'submit' | 'reset';

  /** Shorthand for the `icon` slot, the value is icon name */
  @property() icon = '';

  @property() value?: string;

  @property() name?: string;

  /** Represents the state of the anonymous and icon slots */
  #slots = new SlotController(this, null, 'icon');

  #internals = this.attachInternals();

  #logger = new Logger(this);

  get form() { return this.#internals.form; }
  get validity() { return this.#internals.validity; }
  get validationMessage() { return this.#internals.validationMessage; }
  get willValidate() { return this.#internals.willValidate; }
  checkValidity() { return this.#internals.checkValidity(); }
  reportValidity() { return this.#internals.reportValidity(); }

  formAssociatedCallback(nullableForm: HTMLFormElement|null) {
    this.#logger.log('formAssociatedCallback', nullableForm);
  }

  formDisabledCallback(disabled: boolean) {
    this.#logger.log(`formDisabledCallback(${disabled})`);
    this.disabled = disabled;
  }

  formResetCallback() {
    this.#logger.log('formResetCallback()');
    this.disabled = this.#initiallyDisabled;
  }

  formStateRestoreCallback(state: string, mode: unknown) {
    this.#logger.log(`formStateRestoreCallback(${state}, ${mode})`);
  }

  override render() {
    const hasIcon = !!this.icon || this.#slots.hasSlotted('icon');
    return html`
      <button type=${ifDefined(this.type)}
              class=${classMap({ hasIcon })}
              value=${ifDefined(this.value)}
              @click=${this.#onClick}
              ?disabled=${this.disabled}>
        <span part="icon">
          <p>Hi!</p>
          <slot name="icon">${this.renderDefaultIcon()}</slot>
        </span>
        <span id="text">
          <slot></slot>
        </span>
      </button>
    `;
  }

  #onClick() {
    switch (this.type) {
      case 'reset':
        return void this.#internals.form?.reset();
      default:
        return submit(this.#internals.form);
    }
  }

  protected renderDefaultIcon() {
    switch (this.variant) {
      case 'close':
      case 'play':
        return html`<rh-icon icon=${this.variant}></rh-icon>`;
      default:
        return html``;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-button': RhButton;
  }
}

