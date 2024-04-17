import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';

import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';


import styles from './rh-switch.css';
/**
 * A switch toggles the state of a setting (between on and off). Switches and checkboxes can often be used interchangeably, but the switch provides a more explicit, visible representation on a setting.
 *
 * @summary  A switch toggles the state of a setting (between on and off).
 *
 * @cssprop --rh-switch-unchecked - The background color of the switch when it is unchecked.
 * @cssprop --rh-switch-checked - The background color of the switch when it is checked.
 * @cssprop --rh-switch-disabled - The background color of the switch when it is disabled.
 */
@customElement('rh-switch')
export class RhSwitch extends LitElement {
  static readonly styles = [styles];

  static readonly formAssociated = true;

  declare shadowRoot: ShadowRoot;

  #internals = InternalsController.of(this, { role: 'switch' });

  #slots = new SlotController(this);
  
  @property({ reflect: true }) label?: string;

  @property({ reflect: true, type: Boolean, attribute: 'show-check-icon' }) showCheckIcon = false;

  @property({ reflect: true, type: Boolean }) checked = false;

  @property({ reflect: true, type: Boolean }) disabled = false;

  @property({ reflect: true, attribute: 'accessible-label' }) accessibleLabel?: string;

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorTheme;

  get labels(): NodeListOf<HTMLLabelElement> {
    return this.#internals.labels as NodeListOf<HTMLLabelElement>;
  }

  formDisabledCallback(disabled: boolean) {
    this.disabled = disabled;
  }

  override connectedCallback(): void {
    super.connectedCallback();

    this.tabIndex = 0;
    this.addEventListener('click', this.#onClick);
    this.addEventListener('keyup', this.#onKeyup);
    this.addEventListener('keydown', this.#onKeyDown);
    this.#updateLabels();
  }

  willUpdate() {
    this.#internals.ariaChecked = String(!!this.checked);
    this.#internals.ariaDisabled = String(!!this.disabled);
    this.#internals.ariaLabel = this.accessibleLabel ?? '';
  }

  render() {
    const { on = '' } = this;
    return html`
      <div id="container" class="${classMap({ [on]: !!on })}">
        <svg id="toggle"
             role="presentation"
             fill="currentColor"
             height="1em"
             width="1em"
             viewBox="0 0 512 512"
             ?hidden=${!this.showCheckIcon}>
          <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
        </svg>
      </div>
      <slot></slot>
    `;
  }

  #onClick(event: Event) {
    // @ts-expect-error: firefox workarounds for double-firing in the case of switch nested in label
    const { originalTarget, explicitOriginalTarget } = event;
    if (explicitOriginalTarget) {
      let labels: HTMLLabelElement[];
      if (
        originalTarget === event.target &&
        !(labels = Array.from(this.labels)).includes(explicitOriginalTarget) &&
        labels.includes(this.closest('label') as HTMLLabelElement)
      ) {
        return;
      }
    }
    this.#toggle();
  }

  #onKeyup(event: KeyboardEvent) {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      this.#toggle();
    }
  }

  #onKeyDown(event: KeyboardEvent) {
    if (event.key === ' ') {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  #toggle() {
    if (this.disabled) {
      return;
    }

    this.checked = !this.checked;
    this.#updateLabels();
    this.dispatchEvent(new Event('change', { bubbles: true }));
  }

  #updateLabels() {
    const labelState = this.checked ? 'on' : 'off';
    const [messages] = this.#slots.getSlotted<HTMLElement>();
    const states = messages.querySelectorAll<HTMLElement>('[data-state]');
    states.forEach(state => {
      if (state) {
        state.hidden = state.dataset.state !== labelState;
      }
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-switch': RhSwitch;
  }
}
