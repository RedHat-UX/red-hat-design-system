import type { IconNameFor, IconSetName } from '@rhds/icons';

import { LitElement, html, isServer, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { observes } from '@patternfly/pfe-core/decorators/observes.js';

import styles from './rh-option.css';

/**
 * A selectable option within a rh-select dropdown menu. Must be a child of rh-select
 * or rh-option-group. Should include a value attribute for form submission.
 * Must include slotted content or the label attribute for accessibility.
 * Supports optional icons and descriptions for enhanced visual presentation.
 * @summary A selectable option within a select list
 * @alias option
 */
@customElement('rh-option')
export class RhOption extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  /** Whether option is disabled */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Form value for this option */
  @property()
  get value() {
    if (this.displayLabel) {
      return this.displayLabel;
    }
    // Fall back to value
    return this.#value ?? '';
  }

  set value(v: string) {
    this.#value = v;
  }

  /**
   * Gets the display text for the rh-option.
   * Priority: slotted text content -> label attr -> value attr -> ''
   */
  get displayLabel(): string {
    return this.#displayLabel ?? this.label ?? this.#value ?? '';
  }

  /** Whether option is selected */
  @property({ type: Boolean, reflect: true }) selected = false;

  /** Icon set for the optional rh-icon to precede the option text - 'ui' by default */
  @property({ attribute: 'icon-set' }) iconSet?: IconSetName = 'ui';

  /** The icon name of an rh-icon */
  @property({ reflect: true }) icon?: IconNameFor<IconSetName>;

  /** Optional option description; overridden by description slot. */
  @property({ reflect: true }) description?: string;

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

  #displayLabel?: string;

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

  /**
   * Initialize cached display label on first client-side render
   * @param changedProperties - Properties that changed before this update
   */
  override firstUpdated(changedProperties: PropertyValues<this>): void {
    super.firstUpdated(changedProperties);
    this.#updateDisplayLabel();
  }

  /** Update cached display label and trigger re-render when slot content changes */
  #onSlotChange() {
    this.#updateDisplayLabel();
    this.requestUpdate();
  }

  /**
 * Updates the cached display label
 * Priority: slotted text content -> label attr -> value attr -> ''
 */
  #updateDisplayLabel(): void {
    if (!isServer) {
      const defaultSlot = this.shadowRoot?.querySelector<HTMLSlotElement>('slot:not([name])');
      if (defaultSlot) {
        const slotText = defaultSlot.assignedNodes()
            .map(node => node.textContent ?? '')
            .join('')
            .trim();
        if (slotText) {
          this.#displayLabel = slotText;
          return;
        }
      }
    }

    this.#displayLabel = this.label ?? this.#value ?? '';
  }

  @observes('selected')
  private selectedChanged() {
    this.#internals.ariaSelected = String(!!this.selected);
  }

  @observes('disabled')
  private disabledChanged() {
    this.#internals.ariaDisabled = String(!!this.disabled);
  }

  @observes('label')
  private labelChanged() {
    this.#updateDisplayLabel();
    this.requestUpdate();
  }

  @observes('value')
  private valueChanged() {
    this.#updateDisplayLabel();
    this.requestUpdate();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-option': RhOption;
  }
}
