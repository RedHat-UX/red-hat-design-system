import type { IconNameFor, IconSetName } from '@rhds/icons';

import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

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
    // Fall back to display label
    return this.displayLabel;
  }

  set value(v: string) {
    this.#value = v;
  }

  /**
   * Gets the display text for the rh-option.
   * Priority: slotted text content -> label attr -> value attr -> ''
   */
  get displayLabel(): string {
    if (!isServer) {
      const defaultSlot = this.shadowRoot?.querySelector<HTMLSlotElement>('slot:not([name])');
      if (defaultSlot) {
        const slotText = defaultSlot.assignedNodes()
            .map(node => node.textContent ?? '')
            .join('')
            .trim();
        if (slotText) {
          return slotText;
        }
      }
    }
    // Fall back to label attr, then value attr
    return this.label ?? this.#value ?? '';
  }

  /** Whether option is selected */
  @property({ type: Boolean, reflect: true }) selected = false;

  /** Icon set for the optional rh-icon to precede the option text - 'ui' by default */
  @property({ attribute: 'icon-set' }) iconSet?: IconSetName = 'ui';

  /** The icon name of an rh-icon */
  @property({ reflect: true }) icon?: IconNameFor<IconSetName>;

  /** Optional option description; overridden by description slot. */
  @property({ reflect: true }) description? = '';

  /** Display text for this option; overridden by slotted text content */
  @property({ reflect: true }) label?: string;

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
        <rh-icon id="display-icon"
                 set="${this.iconSet ?? 'ui'}"
                 icon="${ifDefined(this.icon)}"
                 ?hidden="${!this.icon}">
        </rh-icon>
        <span id="label">
          <!-- Option label (required) -->
          <slot @slotchange="${this.#onSlotChange}" hidden></slot>
          ${this.displayLabel}
        </span>
        <rh-icon ?hidden="${!this.selected}" set="microns" icon="checkmark"></rh-icon>
        <!-- Optional option description -->
        <slot id="description" name="description">${this.description ?? ''}</slot>
      </div>
    `;
  }

  /** Trigger re-render when slot content changes */
  #onSlotChange() {
    this.requestUpdate();
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
