import type { RhButton } from '@rhds/elements/rh-button/rh-button.js';

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';

import { themable } from '@rhds/elements/lib/themable.js';
import styles from './rh-button-group.css';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

/**
 * A button group visually organizes multiple related buttons into a single
 * collection.
 *
 * @summary Organize multiple related buttons into a single collection
 *
 * @alias Button Group
 */
@customElement('rh-button-group')
@themable
export class RhButtonGroup extends LitElement {
  static readonly styles = [styles];

  #logger = new Logger(this);

  // eslint-disable-next-line no-unused-private-class-members
  #internals = InternalsController.of(this, { role: 'group' });

  /** Sets the orientation of the button group */
  @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';

  @queryAssignedElements({ flatten: true })
  private _buttons!: (HTMLButtonElement | RhButton)[];

  protected override firstUpdated() {
    if (typeof window === 'undefined') {
      return;
    }
    this.#setupButtons();
  }

  #setupButtons() {
    if (!this._buttons?.length) {
      this.#logger.warn('rh-button-group has no slotted buttons');
      return;
    }
  }

  #onSlotchange() {
    this.#setupButtons();
  }

  override render() {
    return html`
      <!-- Place \`<rh-button>\` elements or native \`<button>\` elements here to organize them into a button group. -->
      <slot @slotchange="${this.#onSlotchange}"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-button-group': RhButtonGroup;
  }
}
