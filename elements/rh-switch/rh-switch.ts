import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import { SlotController } from '@patternfly/pfe-core/controllers/slot-controller.js';
import { getRandomId } from '@patternfly/pfe-core/functions/random.js';

import { DirController } from '../../lib/DirController.js';

import styles from './rh-switch.css';

import '@rhds/elements/rh-icon/rh-icon.js';

/**
 * A switch toggles the state of a setting (between on and off). Switches and checkboxes can often be used interchangeably, but the switch provides a more explicit, visible representation on a setting.
 * @summary  A switch toggles the state of a setting (between on and off).
 * @cssprop --rh-switch-unchecked - The background color of the switch when it is unchecked.
 * @cssprop --rh-switch-checked - The background color of the switch when it is checked.
 * @cssprop --rh-switch-disabled - The background color of the switch when it is disabled.
 * @slot message-on - message content when checked. Overrides the `message-on` attribute.
 * @slot message-off - message content when unchecked. Overrides the `message-off` attribute.
 */
@customElement('rh-switch')
export class RhSwitch extends LitElement {
  static readonly styles = [styles];

  static readonly formAssociated = true;

  /** invisible, accessible label for screen readers */
  @property({ reflect: true, attribute: 'accessible-label' }) accessibleLabel?: string;

  /** Message to display when the switch is on (i.e. checked) */
  @property({ reflect: true, attribute: 'message-on' }) messageOn?: string;

  /** Message to display when the switch is off (i.e. unchecked) */
  @property({ reflect: true, attribute: 'message-off' }) messageOff?: string;

  /** If the checkmark icon should be displayed when the switch is on */
  @property({ reflect: true, type: Boolean, attribute: 'show-check-icon' }) showCheckIcon = false;

  /** If the switch is on */
  @property({ reflect: true, type: Boolean }) checked = false;

  /** If the switch is disabled */
  @property({ reflect: true, type: Boolean }) disabled = false;

  /** If the switch is reversed: message first, then control */
  @property({ reflect: true, type: Boolean }) reversed = false;

  #internals = InternalsController.of(this, { role: 'switch' });

  #slots = new SlotController(this, null, 'message-on', 'message-off');

  #dir = new DirController(this);

  get #message() {
    return this.checked ? this.messageOn : this.messageOff;
  }

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
  }

  willUpdate() {
    this.#internals.ariaChecked = String(!!this.checked);
    this.#internals.ariaDisabled = String(!!this.disabled);
    this.#internals.ariaLabel = this.accessibleLabel ?? '';
    const noMessageOn = this.#slots.isEmpty('message-on');
    const noMessageOff = this.#slots.isEmpty('message-off');
    if (noMessageOn || noMessageOff) {
      if ('ariaDescription' in ElementInternals) {
        this.#internals.ariaDescription = this.#message ?? '';
      } else {
        this.setAttribute('aria-description', this.#message ?? '');
      }
    } else {
      const stateSlotName = this.checked ? 'message-on' : 'message-off';
      const stateEls = this.#slots.getSlotted(stateSlotName);
      for (const el of stateEls) {
        el.id ||= getRandomId('rh-switch-message');
      }
      if ('ariaDescribedByElements' in ElementInternals) {
        // see https://w3c.github.io/aria/#dom-ariamixin
        this.#internals.ariaDescribedByElements = stateEls;
      } else {
        this.setAttribute('aria-describedby', stateEls.map(x => x.id).join(' '));
      }
    }
  }

  render() {
    const rtl = this.#dir.dir === 'rtl';
    const { reversed, checked } = this;
    const slots = html`
      <slot class="message" name="message-on" ?hidden="${!this.checked}"><span aria-hidden="true">${this.messageOn}</span></slot>
      <slot class="message" name="message-off" ?hidden="${this.checked}"><span aria-hidden="true">${this.messageOff}</span></slot>`;
    return html`
      <div id="container"
           part="container"
           class="${classMap({ checked, rtl })}">
        ${reversed ? slots : ''}
        <div id="switch"
             part="switch">
          <rh-icon id="toggle"
                   icon="checkmark"
                   set="microns"
                   ?hidden="${!this.showCheckIcon}"></rh-icon>
        </div>
        ${reversed ? '' : slots}
      </div>
    `;
  }

  #onClick(event: Event) {
    // @ts-expect-error: firefox workarounds for double-firing in the case of switch nested in label
    const { originalTarget, explicitOriginalTarget } = event;
    if (explicitOriginalTarget) {
      let labels: HTMLLabelElement[];
      if (
        originalTarget === event.target
        && !(labels = Array.from(this.labels)).includes(explicitOriginalTarget)
        && labels.includes(this.closest('label') as HTMLLabelElement)
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
    this.dispatchEvent(new Event('change', { bubbles: true }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-switch': RhSwitch;
  }
}
