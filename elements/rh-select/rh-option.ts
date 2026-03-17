import type { IconNameFor, IconSetName } from '@rhds/icons';

import { LitElement, html, isServer, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

import { observes } from '@patternfly/pfe-core/decorators/observes.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-option.css';

import '@rhds/elements/rh-icon/rh-icon.js';

/**
 * An option within an `rh-select` dropdown. Must be a child of `rh-select`
 * or `rh-option-group`. Should include a `value` attribute for form data.
 * Must have text content or `label` for screen readers (ARIA `option` role).
 * Press Enter/Space to select; Arrow keys to navigate between options.
 * @summary A selectable option within a select list
 * @alias option
 * @demo https://ux.redhat.com/elements/select/demo/option-icons/ - Options with icons
 * @demo https://ux.redhat.com/elements/select/demo/option-descriptions/ - Options with descriptions
 */
@customElement('rh-option')
@themable
export class RhOption extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  /** Whether the option is disabled and cannot be selected. Defaults to `false`. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * Form value for this option.
   * Priority: value attr -> displayLabel -> ''
   */
  @property()
  get value() {
    return this.#value ?? this.displayLabel ?? '';
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

  /** Whether the option is currently selected. Defaults to `false`. */
  @property({ type: Boolean, reflect: true }) selected = false;

  /** Icon set for the optional rh-icon to precede the option text - 'ui' by default */
  @property({ attribute: 'icon-set' }) iconSet?: IconSetName = 'ui';

  /** The icon name of an rh-icon */
  @property({ reflect: true }) icon?: IconNameFor<IconSetName>;

  /** Optional option description; overridden by description slot. */
  @property({ reflect: true }) description?: string;

  /** Display text for this option; overridden by slotted text content */
  @property({ reflect: true }) label?: string;

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
          <!-- Option label as inline text. Screen readers use this content as the accessible name. Falls back to the \`label\` or \`value\` attribute when empty. -->
          <slot @slotchange="${this.#onSlotChange}">${this.displayLabel}</slot>
        </span>
        <rh-icon icon="checkmark"
                 set="microns"
                 ?hidden="${!this.selected}"></rh-icon>
        <!-- Optional inline or block description text displayed below the option label. Overrides the \`description\` attribute. Should be a \`<span>\` or \`<p>\` element. -->
        <slot id="description"
              name="description">${this.description ?? ''}</slot>
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
