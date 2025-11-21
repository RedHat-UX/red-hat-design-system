import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { themable } from '@rhds/elements/lib/themable.js';

import '@rhds/elements/rh-icon/rh-icon.js';

import styles from './rh-select.css';

export class RhSelectChangeEvent extends Event {
  constructor() {
    super('change', { bubbles: true });
  }
}

export class RhSelectInputEvent extends Event {
  constructor() {
    super('input', { bubbles: true });
  }
}

/**
 * The select element represents a control that provides a menu of options.
 * @summary A control that provides a menu of options.
 *
 * @alias select
 *
 * @fires change - Fired when the user modifies the element's value
 * @fires input - Fired when an element has been changed as a direct result of a user action
 */
@customElement('rh-select')
@themable
export class RhSelect extends LitElement {
  static readonly styles: CSSStyleSheet[] = [styles];

  static readonly formAssociated = true;

  static override readonly shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  /** Accessible label for the select */
  @property({ attribute: 'accessible-label' }) accessibleLabel?: string;

  /** Whether the select is disabled */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Form name */
  @property() name?: string;

  render() {
    return html`
      <div id="container">
        <button id="btn-toggle" type="button">
          <span id="btn-text">Button text</span>
          <rh-icon id="btn-icon" set="microns" icon="caret-down-fill"></rh-icon>
        </button>
        <div id="listbox">
          <!-- insert \`rh-select-option\` and/or \`rh-select-option-group\` elements here -->
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-select': RhSelect;
  }
}
