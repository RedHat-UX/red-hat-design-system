import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { observes } from '@patternfly/pfe-core/decorators/observes.js';

import styles from './rh-option.css';

/**
 * Option within a select / listbox
 * @alias option
 */
@customElement('rh-option')
export class RhOption extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  /** Whether option is disabled */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Form value for this option */
  @property({ reflect: true })
  get value() {
    if (this.#value) {
      return this.#value;
    }
    if (!isServer) {
      // Limit text to default slotted content
      const defaultSlot = this.shadowRoot?.querySelector<HTMLSlotElement>('slot:not([name])');
      if (defaultSlot) {
        return defaultSlot.assignedNodes()
            .map(node => node.textContent ?? '')
            .join('')
            .trim();
      }
    }
    return '';
  }

  set value(v: string) {
    this.#value = v;
  }

  /** Whether option is selected */
  @property({ type: Boolean, reflect: true }) selected = false;

  /** Optional option description; overridden by description slot. */
  @property() description = '';

  /**
   * This option's position relative to the other options
   */
  set posInSet(posInSet: number | null) {
    this.#internals.ariaPosInSet = `${Math.max(0, posInSet ?? 0)}`;
  }

  get posInSet() {
    const parsed = parseInt(this.#internals.ariaPosInSet ?? '0');
    return Number.isNaN(parsed) ? null : parsed;
  }

  /**
   * Total number of options
   */
  set setSize(setSize: number | null) {
    this.#internals.ariaSetSize = `${Math.max(0, setSize ?? 0)}`;
  }

  get setSize() {
    try {
      const int = parseInt(this.#internals.ariaSetSize ?? '0');
      if (Number.isNaN(int)) {
        return 0;
      } else {
        return int;
      }
    } catch {
      return 0;
    }
  }

  #value?: string;

  #internals = InternalsController.of(this, { role: 'option' });

  render() {
    const { disabled, selected } = this;
    return html`
      <div id="outer" class="${classMap({ disabled, selected })}">
        <!-- Optional rh-icon to appear before option text -->
        <slot name="icon"></slot>
        <span id="label">
          <!-- Option text / label (required) -->
          <slot>${this.value}</slot>
        </span>
        <rh-icon ?hidden="${!this.selected}" set="microns" icon="checkmark"></rh-icon>
        <!-- Optional option description -->
        <slot id="description" name="description">${this.description ?? ''}</slot>
      </div>
    `;
  }

  @observes('selected')
  private selectedChanged() {
    this.#internals.ariaSelected = String(!!this.selected);
  }

  @observes('disabled')
  private disabledChanged() {
    this.#internals.ariaDisabled = String(!!this.disabled);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-option': RhOption;
  }
}
